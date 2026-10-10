<script lang="ts">
export const metadata = {
  updateDate: '2026/10/10',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="claude-usage-line-mod-prompt"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code><CopyCode top>````
Claude Code に mod「usage-line」を作って有効化してください。
プロンプト入力欄の上に、使用量制限（5時間枠・7日枠）の消費率とリセット時刻を1行で出す mod です。
以下を最後まで自律的に実行してください。仕様にないものは足さないでください。

## 完成イメージ

    5h 23.5% → 15:30 · 7d 8% → 10/14 09:00

- 枠のラベルは `five_hour` → `5h`、`seven_day` → `7d`。未知の kind はそのまま表示する
- リセット時刻は今日なら `HH:MM`、別日なら `M/D HH:MM`（ローカル時刻）。`resetsAt` がなければ省略する
- 色は消費率で決める: 70% 以下はグレー（`inactive`）、70% 超は黄（`warning`）、90% 超は赤（`error`）
- 枠が1つもないとき、アンケート表示中（`e.props.hasSurvey`）は何も描かない

## 手順

1. `plugin-authoring` スキルを読み込み、その指示（型定義の場所・検証コマンド）に従う
2. 作成先は `~/.claude/local-mods/mods/usage-line/`。次のファイルを作る
3. `~/.claude/local-mods/.claude-plugin/marketplace.json` を作る（既にあれば `plugins` に追記してマージする）
4. `~/.claude/settings.json` に次の2つを**既存の設定を消さずにマージ**する
   - `extraKnownMarketplaces.local-mods` = `{ "source": { "source": "directory", "path": "<~/.claude/local-mods の絶対パス>" } }`
   - `enabledPlugins."usage-line@local-mods"` = `true`
5. 検証: `claude plugin validate ~/.claude/local-mods/mods/usage-line` と `claude plugin test ~/.claude/local-mods/mods/usage-line` を通す
6. ホットリロードの確認が出たら、ユーザーが「有効にする」を選ぶのを待つ

## 作るファイル

### .claude-plugin/plugin.json

```json
{ "name": "usage-line", "version": "0.1.0", "description": "Shows the usage-limit percentage and next reset time above the prompt, grey, yellow past 70%, red past 90%." }
```

### hooks/hooks.json

```json
{ "modules": ["./register.tsx"] }
```

### hooks/format.ts

```ts
export type Window = { kind: string; percentUsed: number; resetsAt?: string }
export type Level = 'normal' | 'warn' | 'danger'
export type Part = { text: string; level: Level }

const LABELS: Record&lt;string, string&gt; = { five_hour: '5h', seven_day: '7d' }

const pad = (n: number) =&gt; String(n).padStart(2, '0')

const formatReset = (iso: string, now: Date): string =&gt; {
  const d = new Date(iso)
  const time = `${pad(d.getHours())}:${pad(d.getMinutes())}`
  const isToday = d.toDateString() === now.toDateString()
  return isToday ? time : `${d.getMonth() + 1}/${d.getDate()} ${time}`
}

export const levelOf = (percent: number): Level =&gt;
  percent &gt; 90 ? 'danger' : percent &gt; 70 ? 'warn' : 'normal'

export const usageParts = (windows: readonly Window[], now: Date): Part[] =&gt;
  windows.map(w =&gt; {
    const reset = w.resetsAt ? ` → ${formatReset(w.resetsAt, now)}` : ''
    return {
      text: `${LABELS[w.kind] ?? w.kind} ${w.percentUsed}%${reset}`,
      level: levelOf(w.percentUsed),
    }
  })

export const formatUsage = (windows: readonly Window[], now: Date): string | undefined =&gt; {
  const parts = usageParts(windows, now)
  return parts.length &gt; 0 ? parts.map(p =&gt; p.text).join(' · ') : undefined
}
```

### hooks/register.tsx

```tsx
import type { Register } from 'claude-code'
import { usageParts, type Level, type Part } from './format'

const COLORS: Record&lt;Level, string&gt; = { normal: 'inactive', warn: 'warning', danger: 'error' }

export const register: Register = on =&gt; {
  let parts: Part[] = []

  on('session.measure', ($, e, next) =&gt; {
    if (e.changed.includes('rateLimits')) {
      parts = usageParts(e.rateLimits, new Date())
      $.ui.invalidate('ui.render')
    }
    return next(e)
  })

  on('ui.render', { component: 'AbovePrompt' }, ($, e, next) =&gt; {
    if (e.props.hasSurvey || parts.length === 0) {
      return next(e)
    }

    const { Box, Text } = $.ui.resolve(e)

    return (
      &lt;Box&gt;
        {parts.map((p, i) =&gt; (
          &lt;Text key={p.text} color={COLORS[p.level]}&gt;
            {i &gt; 0 ? ' · ' : ''}
            {p.text}
          &lt;/Text&gt;
        ))}
      &lt;/Box&gt;
    )
  })
}
```

### hooks/format.test.ts

```ts
import { test, expect } from 'claude-code/testing'
import { formatUsage, levelOf } from './format'

const now = new Date(2026, 9, 10, 12, 0)

test('formats percent and reset time, date only when not today', () =&gt; {
  const line = formatUsage(
    [
      { kind: 'five_hour', percentUsed: 23.5, resetsAt: new Date(2026, 9, 10, 15, 30).toISOString() },
      { kind: 'seven_day', percentUsed: 8, resetsAt: new Date(2026, 9, 14, 9, 0).toISOString() },
    ],
    now,
  )
  expect(line).toBe('5h 23.5% → 15:30 · 7d 8% → 10/14 09:00')
})

test('returns undefined with no windows', () =&gt; {
  expect(formatUsage([], now)).toBeUndefined()
})

test('levels: grey up to 70, warn above 70, danger above 90', () =&gt; {
  expect([70, 70.1, 90, 90.1].map(levelOf)).toEqual(['normal', 'warn', 'warn', 'danger'])
})
```

### marketplace.json

```json
{
  "name": "local-mods",
  "owner": { "name": "<ユーザー名>" },
  "plugins": [{ "name": "usage-line", "source": "./mods/usage-line" }]
}
```

## 完了報告

- 作成・変更したファイル（settings.json はマージした差分のみ）
- `validate` / `test` の結果
- 有効化の状況（ホットリロードの回答、または次回セッションから有効になる旨）
````
</CopyCode></code></pre>
  </PreCodes>
</template>
