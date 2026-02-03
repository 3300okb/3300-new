<script lang="ts">
export const metadata = {
  updateDate: '2018/05/06',
}
</script>

<script setup lang="ts">
import { onMounted } from 'vue'
import ArticleHeader from '@/components/ArticleHeader.vue'

onMounted(() => {
  const C10 = document.getElementById('conversion10')
  const D10 = document.getElementById('decimal10') as HTMLInputElement
  const H10 = document.getElementById('hexadecimal10') as HTMLInputElement
  const A10 = document.getElementById('alpha10') as HTMLInputElement
  const C16 = document.getElementById('conversion16')
  const D16 = document.getElementById('decimal16') as HTMLInputElement
  const H16 = document.getElementById('hexadecimal16') as HTMLInputElement
  const A16 = document.getElementById('alpha16') as HTMLInputElement
  const H16Palette = document.getElementById('hexadecimal16Palette')
  const A16Palette = document.getElementById('alpha16Palette')
  const arr10: number[] = []
  const transitionPointColor = 470
  const transitionPointAlpha = 0.3

  const conversion10 = function () {
    let checkHexadecimal = true
    const Hv10 = H10.value
    const Hl10 = Hv10.length
    let Av10 = 1

    if (A10.value.trim() !== '') {
      Av10 = Number(A10.value.trim())
    }

    for (let i = 0; i < Hl10; i++) {
      if (
        !(
          0 <= parseInt(Hv10.charAt(i), 16) &&
          parseInt(Hv10.charAt(i), 16) <= 15
        )
      ) {
        checkHexadecimal = false
      }
    }

    const checkDecimal = Hl10 === 6 || Hl10 === 3
    const checkAlpha = 0 <= Av10 && Av10 <= 1

    if (checkHexadecimal && checkDecimal && checkAlpha) {
      for (let i = 0; i < 3; i++) {
        if (Hl10 === 6) {
          arr10[i] = parseInt(Hv10.substr(i * 2, 2), 16)
        } else if (Hl10 === 3) {
          arr10[i] = parseInt(Hv10.substr(i, 1) + Hv10.substr(i, 1), 16)
        }
      }

      D10.value =
        'rgba(' +
        arr10[0]! +
        ', ' +
        arr10[1]! +
        ', ' +
        arr10[2]! +
        ', ' +
        String(Av10).replace('0.', '.') +
        ')'

      if (
        arr10[0]! + arr10[1]! + arr10[2]! < transitionPointColor &&
        Av10 > transitionPointAlpha
      ) {
        D10.setAttribute('style', 'color:#fff; background:' + D10.value)
      } else {
        D10.setAttribute('style', 'background:' + D10.value)
      }
    } else {
      D10.value = 'error'
      D10.setAttribute('style', 'opacity: 1; background:#ffffff; color: #000;')
    }
  }

  const conversion16 = function () {
    let Hv16R
    let Hv16G
    let Hv16B

    let replaced = D16.value.replace(/rgba\(/g, '')
    replaced = replaced.replace(/\)/g, '')

    const splited = replaced.split(',')

    const Dv10R = Number(splited[0])
    const Dv10G = Number(splited[1])
    const Dv10B = Number(splited[2])
    const Av10 = Number(splited[3])

    const checkDecimal01 =
      /rgba\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*[01]?\.?\d*\s*\)\s*/.test(
        D16.value
      )
    const checkDecimal02 =
      0 <= Dv10R &&
      Dv10R <= 255 &&
      0 <= Dv10G &&
      Dv10G <= 255 &&
      0 <= Dv10B &&
      Dv10B <= 255
    const checkAlpha = 0 <= Av10 && Av10 <= 1 && splited[3]?.trim() !== ''

    if (checkDecimal01 && checkDecimal02 && checkAlpha) {
      Hv16R = Dv10R.toString(16)
      Hv16G = Dv10G.toString(16)
      Hv16B = Dv10B.toString(16)
      H16.value =
        ('00' + Hv16R).slice(-2) +
        ('00' + Hv16G).slice(-2) +
        ('00' + Hv16B).slice(-2)
      A16.value = splited[3]?.trim() || '1'
      if (Dv10R + Dv10G + Dv10B < transitionPointColor) {
        H16.setAttribute('style', 'color: #fff;')
        A16.setAttribute('style', 'color: #fff;')
        if (Number(A16.value) <= transitionPointAlpha) {
          H16.setAttribute('style', 'color: #000;')
          A16.setAttribute('style', 'color: #000;')
        }
      } else {
        H16.setAttribute('style', 'color: #000;')
        A16.setAttribute('style', 'color: #000;')
      }
      H16Palette?.setAttribute(
        'style',
        'opacity:' + A16.value + '; background: #' + H16.value
      )
      A16Palette?.setAttribute(
        'style',
        'opacity:' + A16.value + '; background: #' + H16.value
      )
    } else {
      H16.value = 'error'
      H16.setAttribute('style', 'color: #000')
      H16Palette?.setAttribute('style', 'opacity: 1; background: #fff')
      A16.value = '-'
      A16.setAttribute('style', 'color: #000')
      A16Palette?.setAttribute('style', 'opacity: 1; background: #fff')
    }
  }

  C10?.addEventListener('click', conversion10, false)
  H10?.addEventListener('keyup', (ev) => {
    if (ev.key === 'Enter') {
      conversion10()
    }
  })
  A10?.addEventListener('keyup', (ev) => {
    if (ev.key === 'Enter') {
      conversion10()
    }
  })

  C16?.addEventListener('click', conversion16, false)
  D16?.addEventListener('keyup', (ev) => {
    if (ev.key === 'Enter') {
      conversion16()
    }
  })
})
</script>

<template>
  <ArticleHeader title="color-conversion" :update-date="metadata.updateDate" />

  <div id="colorConversion">
    <div id="colorConversion10" class="flex gap-10">
      <span class="plainText">#</span
      ><input
        type="text"
        id="hexadecimal10"
        value="ffffff"
        aria-label="Hexadecimal color value"
        class="bg-white"
      />
      <span class="plainText">alpha</span
      ><input
        type="text"
        id="alpha10"
        value="1"
        aria-label="Alpha value"
        class="bg-white"
      />
      <input
        type="button"
        id="conversion10"
        value="16->10"
        aria-label="Convert hexadecimal to decimal"
      />
      <div class="backSheet">
        <input
          type="text"
          id="decimal10"
          value="rgba(255, 255, 255, 1)"
          aria-label="Decimal color value"
        />
      </div>
    </div>

    <div id="colorConversion16" class="flex gap-10">
      <input
        type="text"
        id="decimal16"
        value="rgba(255, 255, 255, 1)"
        aria-label="RGBA color value"
      />
      <input
        type="button"
        id="conversion16"
        value="10->16"
        aria-label="Convert decimal to hexadecimal"
      />
      <span class="plainText">#</span>
      <div class="backSheet" id="hexadecimal16Back">
        <span id="hexadecimal16Palette"></span>
        <input
          type="text"
          id="hexadecimal16"
          value="ffffff"
          maxlength="6"
          aria-label="Hexadecimal color code"
        />
      </div>
      <span class="plainText">alpha</span>
      <div class="backSheet" id="alpha16Back">
        <span id="alpha16Palette"></span>
        <input
          type="text"
          id="alpha16"
          value="1"
          aria-label="Alpha transparency value"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
#colorConversion {
  font-size: 20px;
  line-height: 56px;
}
#colorConversion input {
  height: 50px;
  padding: 0 10px;
  border: 0;
  box-sizing: border-box;
  border-radius: 0;
  border: solid 1px #ddd;
  outline: none;
}
#colorConversion16 {
  margin-top: 30px;
}
#hexadecimal10 {
  width: 109px;
}
#alpha10 {
  width: 56px;
}
#decimal10 {
  width: 275px;
  background: #fff;
}
#hexadecimal16,
#alpha16 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
}
#hexadecimal16Palette,
#alpha16Palette {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 50px;
}
#hexadecimal16Back {
  width: 109px;
  height: 50px;
  vertical-align: middle;
}
#alpha16Back {
  width: 56px;
  height: 50px;
  vertical-align: middle;
}
#decimal16 {
  width: 275px;
  background: #fff;
}
#conversion10,
#conversion16 {
  background: #ddd;
  line-height: 50px;
}
.backSheet {
  position: relative;
  display: inline-block;
  background: #fff;
  line-height: 42px;
}
.plainText {
  position: relative;
  top: -3px;
}
</style>
