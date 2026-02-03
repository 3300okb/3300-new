import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const articlesDir = path.join(__dirname, '../src/components/article')

function checkTitleMismatch(
  dir: string,
  results: { file: string; filename: string; title: string }[] = []
) {
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      checkTitleMismatch(fullPath, results)
    } else if (file.endsWith('.vue')) {
      const content = fs.readFileSync(fullPath, 'utf-8')
      const titleMatch = content.match(
        /<ArticleHeader\s+[^>]*title="([^"]+)"[^>]*/
      )

      if (titleMatch) {
        const title = titleMatch[1]
        const filename = path.basename(file, '.vue')

        // ファイル名とタイトルが一致しない場合
        if (filename !== title) {
          results.push({
            file: fullPath.replace(path.join(__dirname, '..'), ''),
            filename,
            title,
          })
        }
      }
    }
  }

  return results
}

const mismatches = checkTitleMismatch(articlesDir)

if (mismatches.length === 0) {
  console.log('✓ すべてのファイル名とタイトルが一致しています')
} else {
  console.log(`✗ ${mismatches.length}件の不一致が見つかりました:\n`)
  mismatches.forEach(({ file, filename, title }) => {
    console.log(`ファイル: ${file}`)
    console.log(`  ファイル名: ${filename}`)
    console.log(`  タイトル: ${title}`)
    console.log()
  })
}
