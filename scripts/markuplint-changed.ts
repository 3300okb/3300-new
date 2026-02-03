import { spawnSync } from 'node:child_process'
import { existsSync } from 'node:fs'

const run = (cmd: string, args: string[]) => {
  const result = spawnSync(cmd, args, { stdio: 'inherit' })
  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

const getChangedFiles = () => {
  const hasHead =
    spawnSync('git', ['rev-parse', '--verify', 'HEAD'], {
      stdio: 'ignore',
    }).status === 0

  const diffArgs = hasHead
    ? ['diff', '--name-only', '--diff-filter=ACMRTUXB', 'HEAD']
    : ['ls-files']

  const result = spawnSync('git', diffArgs, { encoding: 'utf8' })
  if (result.status !== 0) return []

  const output = (result.stdout || '').toString()
  return output
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
}

const files = getChangedFiles().filter((file) => {
  if (!file.endsWith('.vue')) return false
  if (!file.startsWith('src/')) return false
  return existsSync(file)
})

if (files.length === 0) {
  console.log('No changed .vue files for markuplint.')
  process.exit(0)
}

run('node', ['./node_modules/.bin/markuplint', ...files])
