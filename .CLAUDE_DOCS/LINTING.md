# LINTING.md — ESLint / Prettier / Markuplint 設定詳細

## Prettier（`.prettierrc`）

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "printWidth": 80,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

- セミコロンなし、シングルクォート
- `prettier-plugin-tailwindcss` で Tailwind クラスを自動ソート
- `.prettierignore` で除外対象を管理

コマンド:

- 書き込み: `npm run format` (`prettier --write .`)
- 確認のみ: `npm run prettier:check` (`prettier --check .`)

---

## ESLint（`eslint.config.js`）

Flat config 形式（ESLint v9）。

### `.vue` ファイル共通ルール

| ルール                                             | レベル | 内容                           |
| -------------------------------------------------- | ------ | ------------------------------ |
| `vue/multi-word-component-names`                   | error  | コンポーネント名は複数単語必須 |
| `vue/no-v-html`                                    | error  | `v-html` 禁止（XSS 対策）      |
| `vue/require-default-prop`                         | error  | props のデフォルト値必須       |
| `vue/require-prop-types`                           | error  | props の型定義必須             |
| `prettier/prettier`                                | error  | Prettier 整合性                |
| `vuejs-accessibility/alt-text`                     | error  | `<img>` の alt 必須            |
| `vuejs-accessibility/anchor-has-content`           | error  | `<a>` のコンテンツ必須         |
| `vuejs-accessibility/click-events-have-key-events` | warn   | クリックイベントにキーイベント |
| `vuejs-accessibility/form-control-has-label`       | warn   | フォームコントロールにラベル   |
| `vuejs-accessibility/heading-has-content`          | error  | 見出しのコンテンツ必須         |
| `vuejs-accessibility/mouse-events-have-key-events` | warn   | マウスイベントにキーイベント   |
| `vuejs-accessibility/no-autofocus`                 | warn   | autofocus 非推奨               |

### ファイル別の除外・緩和

| 対象                              | 緩和ルール                                                  |
| --------------------------------- | ----------------------------------------------------------- |
| `src/components/GlobalHeader.vue` | `vue/no-v-html: off`（DOMPurify でサニタイズ済み）          |
| `src/views/**/*.vue`              | `vue/multi-word-component-names: off`                       |
| `src/components/article/**/*.vue` | `vue/multi-word-component-names: off`（記事は単語名でも可） |

### `.ts` / `.tsx` ファイルのルール

| ルール                                             | レベル | 内容                                       |
| -------------------------------------------------- | ------ | ------------------------------------------ |
| `@typescript-eslint/no-explicit-any`               | warn   | `any` 型の明示的使用は警告                 |
| `@typescript-eslint/explicit-function-return-type` | off    | 戻り型推論に任せる                         |
| `@typescript-eslint/no-unused-vars`                | error  | 未使用変数禁止（`_` プレフィックスは許可） |
| `quotes`                                           | error  | シングルクォート（エスケープ回避時は除外） |
| `prettier/prettier`                                | error  | Prettier 整合性                            |

コマンド:

- チェック: `npm run lint`
- 自動修正: `npm run lint:fix`

---

## Markuplint（`.markuplintrc.json`）

`markuplint:recommended` ベース。Vue ファイルを `@markuplint/vue-parser` でパース。

除外: `node_modules`, `dist`, `public`

### 有効なルール

| ルール               | 設定                          |
| -------------------- | ----------------------------- |
| `landmark-roles`     | true（ARIA ランドマーク必須） |
| `attr-duplication`   | true（属性の重複禁止）        |
| `deprecated-attr`    | true（非推奨属性禁止）        |
| `deprecated-element` | true（非推奨要素禁止）        |
| `id-duplication`     | true（ID 重複禁止）           |

### 無効化されたルール（理由）

| ルール               | 理由                                     |
| -------------------- | ---------------------------------------- |
| `required-h1`        | SPA につき h1 が article 単位なため      |
| `heading-levels`     | 記事内は自由な見出し構造を許容           |
| `use-list`           | リスト外のナビゲーション等を許容         |
| `permitted-contents` | Vue コンポーネントとの組み合わせで誤検知 |
| `required-attr`      | img タグで vue 動的属性を使うため        |
| `invalid-attr`       | Tailwind CSS の任意値プロパティ等のため  |

### nodeRules

| セレクタ         | 緩和内容                           |
| ---------------- | ---------------------------------- |
| `.ml-swiper-img` | required-attr, invalid-attr を off |
| `img`            | required-attr を off               |

コマンド:

- 変更済みのみ: `npm run lint:markup`（`git diff HEAD` を使用）
- 全ファイル: `npm run lint:markup:all`

---

## 一括チェック・修正

```bash
# 全チェック（lint + lint:markup + prettier:check）を並列実行
npm run check

# 全自動修正（lint:fix + format）を並列実行
npm run fix
```

`npm run check` は CI（prebuild フェーズ）でも実行される。

---

## `.worktree-dist` について

`eslint.config.js` の一部ルールに `.worktree-dist/src/...` パスが含まれているが、
これは git worktree で別ブランチのビルドを並行管理していた痕跡。現在は使用していない可能性がある。
