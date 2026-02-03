export const scrollToPreElement = (preIndex: number, searchQuery: string) => {
  const preElements = document.querySelectorAll('.pre-codes-container pre')
  if (!preElements[preIndex]) return

  const targetPre = preElements[preIndex] as HTMLElement

  // SwitchBox内にあるかチェック
  let parent = targetPre.parentElement
  while (parent && !parent.classList.contains('pre-codes-container')) {
    if (parent.hasAttribute('data-switch-content')) {
      const switchRoot = parent.closest('[data-switch-box]')
      const toggleButton = switchRoot?.querySelector(
        '[data-switch-toggle]'
      ) as HTMLButtonElement | null

      if (toggleButton?.getAttribute('aria-expanded') === 'false') {
        toggleButton.click()
      }
      break
    }
    parent = parent.parentElement
  }

  // 少し待ってからスクロール（展開アニメーション後）
  setTimeout(() => {
    // pre要素内で検索クエリを探す
    const preText = targetPre.textContent || ''
    const queryLower = searchQuery.toLowerCase().trim()
    const textLower = preText.toLowerCase()

    // 連続する空白を1つのスペースに正規化して検索
    const normalizedQuery = queryLower.replace(/\s+/g, ' ')
    const normalizedText = textLower.replace(/\s+/g, ' ')
    const matchIndex = normalizedText.indexOf(normalizedQuery)

    if (matchIndex !== -1) {
      // 元のテキストでマッチ位置を探す（正規化前の位置を計算）
      let actualPos = 0
      let normalizedPos = 0

      while (normalizedPos < matchIndex && actualPos < preText.length) {
        const char = preText[actualPos]
        if (char && /\s/.test(char)) {
          // 空白文字の場合、連続する空白をスキップ
          while (actualPos < preText.length) {
            const nextChar = preText[actualPos]
            if (nextChar && /\s/.test(nextChar)) {
              actualPos++
            } else {
              break
            }
          }
          normalizedPos++
        } else {
          actualPos++
          normalizedPos++
        }
      }

      // マッチしたテキストの長さを計算
      let matchLength = 0
      let queryPos = 0
      let searchPos = actualPos

      while (queryPos < normalizedQuery.length && searchPos < preText.length) {
        const queryChar = normalizedQuery[queryPos]
        if (queryChar && /\s/.test(queryChar)) {
          // クエリがスペースの場合、テキスト側の空白をスキップ
          while (searchPos < preText.length) {
            const textChar = preText[searchPos]
            if (textChar && /\s/.test(textChar)) {
              searchPos++
              matchLength++
            } else {
              break
            }
          }
          queryPos++
        } else {
          searchPos++
          matchLength++
          queryPos++
        }
      }

      const matchedText = preText.substring(actualPos, actualPos + matchLength)

      // 一時的なマーカーspan要素を作成
      const marker = document.createElement('span')
      marker.id = 'scroll-marker-temp'
      marker.style.display = 'inline'
      marker.textContent = matchedText

      // pre要素の内容を書き換え（HTMLタグを保持するため、走査して挿入）
      const walker = document.createTreeWalker(
        targetPre,
        NodeFilter.SHOW_TEXT,
        null
      )

      let currentPos = 0
      let targetNode: Node | null = null
      let targetOffset = 0

      while (walker.nextNode()) {
        const node = walker.currentNode
        const nodeText = node.textContent || ''
        const nodeLength = nodeText.length

        if (currentPos + nodeLength > actualPos) {
          targetNode = node
          targetOffset = actualPos - currentPos
          break
        }
        currentPos += nodeLength
      }

      if (targetNode && targetNode.textContent) {
        // テキストノードを分割してマーカーを挿入
        const range = document.createRange()
        range.setStart(targetNode, targetOffset)
        range.setEnd(
          targetNode,
          Math.min(targetOffset + matchLength, targetNode.textContent.length)
        )
        range.surroundContents(marker)

        // マーカーまでスクロール
        marker.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })

        // スクロール後、マーカーを削除
        setTimeout(() => {
          const parentNode = marker.parentNode
          if (parentNode) {
            parentNode.replaceChild(
              document.createTextNode(marker.textContent || ''),
              marker
            )
          }
        }, 1000)
      } else {
        // マッチしたテキストノードが見つからない場合は、pre要素全体までスクロール
        targetPre.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }
    } else {
      // クエリが見つからない場合は、pre要素全体までスクロール
      targetPre.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }, 100)
}
