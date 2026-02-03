<script lang="ts">
export const metadata = {
  updateDate: '2021/05/17',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="carousel"
    sample-url="/sample/html/carousel.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><CopyCode>&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;meta name="viewport" content="width=560"&gt;

&lt;style&gt;
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  padding-bottom: 800px;
}
section {
  margin-bottom: 20px;
}
&lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

&lt;section&gt;
&lt;div class="carousel1"&gt;
  &lt;ul&gt;
  &lt;li style="background: #d22;"&gt;1&lt;/li&gt;
  &lt;li style="background: #2d2;"&gt;2&lt;/li&gt;
  &lt;li style="background: #22d;"&gt;3&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
&lt;/section&gt;

&lt;section&gt;
&lt;div class="carousel2"&gt;
  &lt;ul&gt;
  &lt;li style="background: #d22;"&gt;1&lt;/li&gt;
  &lt;li style="background: #2d2;"&gt;2&lt;/li&gt;
  &lt;li style="background: #22d;"&gt;3&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
&lt;/section&gt;

&lt;section&gt;
&lt;div class="carousel3"&gt;
  &lt;ul&gt;
  &lt;li style="background: #d22;"&gt;1&lt;/li&gt;
  &lt;li style="background: #2d2;"&gt;2&lt;/li&gt;
  &lt;li style="background: #22d;"&gt;3&lt;/li&gt;
  &lt;li style="background: #dd2;"&gt;4&lt;/li&gt;
  &lt;li style="background: #2dd;"&gt;5&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
&lt;/section&gt;

&lt;section&gt;
&lt;div class="carousel4"&gt;
  &lt;ul&gt;
  &lt;li style="background: #d22;"&gt;1&lt;/li&gt;
  &lt;li style="background: #2d2;"&gt;2&lt;/li&gt;
  &lt;li style="background: #22d;"&gt;3&lt;/li&gt;
  &lt;li style="background: #dd2;"&gt;4&lt;/li&gt;
  &lt;li style="background: #2dd;"&gt;5&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
&lt;/section&gt;




&lt;script&gt;
// carousel module
class carousel {
  constructor(option) {
    this.opt = option;
    this.d = document;
    this.ua = this.userAgent();
    this.init();
  }

  init() {
    this.opt.carousel = this.d.querySelector('.' + this.opt.class);

    if (!this.opt.carousel) {
      return;
  }

  Promise.resolve(1)
    // optionの値の一部をstyleとしてhtmlに適用
    .then(() =&gt; {
      this.setReadyStyles();
    })
    // 上記のstyleが適用されたdomから、pxに変換した値を取得
    .then(() =&gt; {
      this.setElementComputedSizes();
    })
    // optionから必要なhtmlを生成し、各種Listener、autoの制御、resize時の制御などを設定
    .then(() =&gt; {
      this.setConveyorHtml();
      this.setConveyorListeners();
      this.setPagenationHtml();
      this.setPagenationListeners();
      this.setArrowHtml();
      this.setArrowListeners();
      this.setAutoOperation();
      this.setBaseStyles();
      this.setResizeOperation();
    });
  }

  // 初回のstyle設定
  setReadyStyles() {
    // %やremにも対応する
    // 単位付きのstyleをまず設定する
    this.opt.orgWidth = this.opt.width;
    this.opt.orgHeight = this.opt.height;
    let styleStr = `
      .${this.opt.class} {
      position: relative;
      width: ${this.opt.width};
      height: ${this.opt.height};
      margin: 0 auto;
      }
      .${this.opt.class} ul, .${this.opt.class} li {
      margin: 0;
      padding: 0;
      }
      .${this.opt.class} li {
      list-style: none;
      }
      .${this.opt.class}_screen {
      width: ${this.opt.width};
      height: ${this.opt.height};
      position: relative;
      margin: 0 auto;
      overflow: hidden;
      }
      .${this.opt.class}_screen .${this.opt.class}_items {
      position: absolute;
      top: 0;
      width: ${this.opt.itemsWidth};
      -webkit-overflow-scrolling : touch;
      }
      .${this.opt.class}_screen .${this.opt.class}_items li {
      float: left;
      width: ${this.opt.width};
      height: ${this.opt.height};
      overflow: hidden;
      }
      .${this.opt.class}_screen .${this.opt.class}_items li img {
      width: ${this.opt.width};
      height: ${this.opt.height};
      }
    `;
    this.appendStyles(styleStr, this.opt.class + '_style');
  }

  // px数値を取得
  setElementComputedSizes() {
    this.opt.numWidth = this.getNumber(
      window.getComputedStyle(this.opt.carousel).width,
    );
    this.opt.numHeight = this.getNumber(
      window.getComputedStyle(this.opt.carousel).height,
    );
  }

  // 数値を取得
  getNumber(target) {
    return Number(target.match(/\d+/)[0]);
  }

  // pxに変換したstyleの設定
  setBaseStyles() {
    let referenceScreenSize;
    if (this.opt.numWidth &lt; 400 && this.opt.numHeight &lt; 400) {
      referenceScreenSize = 400;
    } else {
      referenceScreenSize =
      this.opt.numWidth &gt; this.opt.numHeight ? this.opt.numWidth : this.opt.numHeight;
    }
    let styleStr = `
      .${this.opt.class} {
      position: relative;
      width: ${this.opt.numWidth}px;
      margin: 0 auto;
      }
      .${this.opt.class} ul, .${this.opt.class} li {
      margin: 0;
      padding: 0;
      }
      .${this.opt.class} li {
      list-style: none;
      }
      .${this.opt.class}_screen {
      width: ${this.opt.numWidth}px;
      height: ${this.opt.numHeight}px;
      position: relative;
      margin: 0 auto;
      overflow: hidden;
      }
      .${this.opt.class}_screen .${this.opt.class}_items {
      position: absolute;
      top: 0;
      width: ${this.opt.itemsWidth};
      -webkit-overflow-scrolling : touch;
      }
      .${this.opt.class}_screen .${this.opt.class}_items li {
      float: left;
      width: ${this.opt.numWidth}px;
      height: ${this.opt.numHeight}px;
      overflow: hidden;
      }
      .${this.opt.class}_screen .${this.opt.class}_items li img {
      width: ${this.opt.numWidth}px;
      height: ${this.opt.numHeight}px;
      }
    `;
    if (this.opt.pagenation) {
      const pagenationSize =
      referenceScreenSize / 50 &gt; 16 ? 16 : referenceScreenSize / 50;
      const pagenationBorderRadius = pagenationSize;
      const pagenationMarginTop = referenceScreenSize / 50;
      styleStr += `
      .${this.opt.class}_pagenation {
        margin: ${pagenationMarginTop}px 0 0;
        text-align: center;
      }
      .${this.opt.class}_pagenation ul {
        display: inline-block;
      }
      .${this.opt.class}_pagenation li {
        float: left;
      }
      .${this.opt.class}_pagenation li + li {
        margin-left: ${pagenationSize}px;
      }
      `;
      styleStr += `
      .${this.opt.class}_pagenation li::before {
        content: "";
        display: block;
        width: ${pagenationSize}px;
        height: ${pagenationSize}px;
        background: #f1f1f1;
        border-radius: ${pagenationBorderRadius}px;
        cursor: pointer;
      }
      .${this.opt.class}_pagenation .active::before {
        background: #ccc;
        cursor: auto;
      }
      `;
    }
    if (this.opt.arrow) {
      const arrowSize = referenceScreenSize / 16;
      const arrowThickness = referenceScreenSize / 100;
      // const arrowTop = this.opt.numHeight / 2 - arrowSize / 2;
      styleStr += `
      .${this.opt.class}_arrow {
        width: ${this.opt.numWidth + arrowSize * 2.8}px;
        margin: 0 auto;
        position: absolute;
        top: ${this.opt.numHeight / 2.4}px;
        left: -${(this.opt.numWidth + arrowSize * 2.8 - this.opt.numWidth) / 2}px;
        text-align: center;
      }
      .${this.opt.class}_arrow div {
        display: block;
        width: ${arrowSize * 1.2}px;
        height: ${arrowSize * 1.7}px;
        position: relative;
        cursor: pointer;
      }
      .${this.opt.class}_arrow div::before {
        content: '';
        display: block;
        width: ${arrowSize}px;
        height: ${arrowSize}px;
        position: absolute;
        top: ${arrowSize / 3.5}px;
        border-top: #ccc ${arrowThickness}px solid;
        border-left: #ccc ${arrowThickness}px solid;
      }
      .${this.opt.class}_arrow .prev {
        float: left;
      }
      .${this.opt.class}_arrow .prev::before {
        transform: rotate(-45deg);
        left: ${arrowSize / 3}px;
      }
      .${this.opt.class}_arrow .next {
        float: right;
      }
      .${this.opt.class}_arrow .next::before {
        transform: rotate(135deg);
        right: ${arrowSize / 3}px;
      }
      `;
    }
    this.appendStyles(styleStr, this.opt.class + '_style');
  }

  // carousel dom の自動編集
  setConveyorHtml() {
    const ulCopy = this.d.querySelector('.' + this.opt.class + ' ul');
    const conveyorWrapper = this.d.createElement('div');

    conveyorWrapper.appendChild(ulCopy);
    this.opt.carousel.innerHTML = '';
    this.opt.carousel.appendChild(conveyorWrapper);
    this.opt.screen = this.opt.carousel.querySelector('div');
    this.opt.screen.classList.add(this.opt.class + '_screen');
    this.opt.carousel.querySelector('ul').classList.add(this.opt.class + '_items');
    this.opt.conveyor = this.d.querySelector(
      '.' + this.opt.class + '_screen .' + this.opt.class + '_items',
    );
    this.opt.items = this.d.querySelectorAll(
      '.' + this.opt.class + '_screen .' + this.opt.class + '_items li',
    );
    this.opt.itemsLength = this.opt.items.length;
    this.opt.itemsWidth = this.opt.numWidth * this.opt.itemsLength + 'px';

    // loop時は最初と最後にliを追加
    if (this.opt.loop) {
      const copyfirstItem = this.opt.items[0].cloneNode(true);
      const copyLastItem = this.opt.items[this.opt.itemsLength - 1].cloneNode(true);
      this.opt.conveyor.appendChild(copyfirstItem);
      this.opt.conveyor.insertBefore(copyLastItem, this.opt.conveyor.firstChild);
      this.opt.itemsLength += 2;
      this.opt.itemsWidth = this.opt.numWidth * this.opt.itemsLength + 'px';
      this.opt.conveyor.style.left = '-' + this.opt.numWidth + 'px';
    }
  }

  // dragなどのListener設定
  setConveyorListeners() {
    let flagStart;
    let flagMove;
    let startCursorX;
    let startConveyorX;
    let cursorMoveX;

    const getDirection = (ev) => {
      const pageX = ev.pageX || ev.changedTouches[0].pageX;
      cursorMoveX = startCursorX - pageX;
      if (Math.abs(cursorMoveX) < 50) {
        return true;
      }
    };

    // dragへの追従
    const dragSorption = (ev) =&gt; {
      if (this.opt.animation === 'fade') {
        return;
      }
      if (getDirection(ev)) {
        return;
      }
      const pageX = ev.pageX || ev.changedTouches[0].pageX;
      cursorMoveX = startCursorX - pageX;
      this.opt.conveyor.style.left = startConveyorX - cursorMoveX + 'px';
    };
    // touchstart時
    const startDrag01 = (ev) =&gt; {
      flagStart = true;
      startCursorX = ev.pageX || ev.changedTouches[0].pageX;
      startConveyorX = Number(this.opt.conveyor.style.left.replace('px', ''));
    };
    // touchmove時
    const startDrag02 = (ev) =&gt; {
      if (flagStart) {
      dragSorption(ev);
      flagMove = true;
      }
    };
    // touchend時にanimation発動
    const runAnimation = (ev) =&gt; {
      flagStart = false;
      const currentNumber = Number(
      -this.opt.conveyor.style.left.replace('px', ''),
      );
      const pageX = ev.pageX || ev.changedTouches[0].pageX;
      if (
      (flagMove && this.opt.animation === 'fade') ||
      currentNumber % this.opt.numWidth !== 0
      ) {
      this.setTargetBrakePoint(
        currentNumber,
        startCursorX - pageX &lt; 0 ? 'prev' : 'next',
      );
      this.animation('-' + this.opt.targetPoint);
      flagMove = false;
      }
    };

    const handleTypes = this.ua.isPc
      ? ['mousedown', 'mousemove', 'mouseup']
      : ['touchstart', 'touchmove', 'touchend'];
    this.opt.conveyor.addEventListener(handleTypes[0], startDrag01, false);
    this.opt.conveyor.addEventListener(handleTypes[1], startDrag02, false);
    this.opt.conveyor.addEventListener(handleTypes[2], runAnimation, false);
    this.opt.conveyor.addEventListener(handleTypes[0], {
      passive: false,
    });
    this.opt.conveyor.removeEventListener(handleTypes[2], {
      passive: false,
    });

    // 指やカーソルがareaをはみ出た時にanimation発動
    this.opt.carousel.addEventListener('mouseout', runAnimation, false);
    }

    // pagenation dom 生成
    setPagenationHtml() {
    if (!this.opt.pagenation) {
      return;
    }
    // let basicStrings;
    let htmlStrings = this.templateLiteralToHtmlStrings`
      &lt;div class="${this.opt.class}_pagenation"&gt;
      &lt;ul&gt;
    `;
    this.opt.pointsLength = this.opt.loop ? this.opt.itemsLength - 2 : this.opt.itemsLength;
    for (let i = 0; i &lt; this.opt.pointsLength; i++) {
      htmlStrings += this.templateLiteralToHtmlStrings`
      &lt;li&gt;&lt;/li&gt;
      `;
    }
    htmlStrings += this.templateLiteralToHtmlStrings`
      &lt;/ul&gt;
      &lt;/div&gt;
    `;
    const htmlElements = this.htmlStringsToHtmlElements(htmlStrings);
    this.opt.carousel.appendChild(htmlElements);
    this.opt.pagenationItem = this.d.querySelectorAll(
      '.' + this.opt.class + '_pagenation li',
    );
    this.opt.pagenationItem[0].classList.add('active');
    }

    // pagenation押した時のListener設定
    setPagenationListeners() {
    if (!this.opt.pagenation) {
      return;
    }
    const eventType = this.getClickEventType();
    Object.values(this.opt.pagenationItem).forEach((item, index) =&gt; {
      const pos = this.opt.loop
      ? '-' + this.opt.numWidth * (index + 1)
      : '-' + this.opt.numWidth * index;
      const triggerAnimation = () =&gt; {
      this.animation(pos);
      };
      item.removeEventListener(eventType, triggerAnimation, false);
      item.addEventListener(eventType, triggerAnimation, false);
    });
  }

  // pagenationの表示変更
  changePagenation(targetPagenationIndex) {
    if (!this.opt.pagenation) {
      return;
    }
    Object.values(this.opt.pagenationItem).forEach((part) =&gt; {
      part.classList.remove('active');
    });
    if (this.opt.pagenationItem[targetPagenationIndex - 1]) {
      this.opt.pagenationItem[targetPagenationIndex - 1].classList.add('active');
    }
  }

  // arrowの設定
  setArrowHtml() {
    if (!this.opt.arrow) {
      return;
    }
    let htmlStrings = this.templateLiteralToHtmlStrings`
      &lt;div class="${this.opt.class}_arrow"&gt;
      &lt;div class="prev"&gt;&lt;/div&gt;
      &lt;div class="next"&gt;&lt;/div&gt;
      &lt;/div&gt;
    `;
    const htmlElements = this.htmlStringsToHtmlElements(htmlStrings);
    this.opt.carousel.appendChild(htmlElements);
    this.opt.arrow = this.d.querySelector('.' + this.opt.class + '_arrow');
    this.opt.arrow.prev = this.d.querySelector('.' + this.opt.class + '_arrow .prev');
    this.opt.arrow.next = this.d.querySelector('.' + this.opt.class + '_arrow .next');

    if (!this.opt.loop && this.getCurrentLeftNum() === 0) {
      this.opt.arrow.prev.style.opacity = '.2';
      this.opt.arrow.prev.style.cursor = 'auto';
    }
  }

  // arrow押した時のListener設定
  setArrowListeners() {
    if (!this.opt.arrow) {
      return;
    }
    const carouselReady = (diff) =&gt; {
      const currentNum = this.getCurrentLeftNum();
      if (currentNum % diff) {
      return;
      }
      if (currentNum === 0 && diff &gt; 0) {
      return;
      }
      if (
      currentNum === -(this.opt.numWidth * (this.opt.itemsLength - 1)) &&
      diff &lt; 0
      ) {
      return;
      }
      this.animation(currentNum + diff);
    };
    const eventType = this.getClickEventType();
    this.opt.arrow.prev.addEventListener(eventType, () =&gt; {
      carouselReady(this.opt.numWidth);
    });
    this.opt.arrow.next.addEventListener(eventType, () =&gt; {
      carouselReady(-this.opt.numWidth);
    });
  }

  // arrowのstyle切り替え
  changeArrow(targetItem) {
    if (!this.opt.arrow || this.opt.loop) {
      return;
    }
    if (targetItem === 0) {
      this.opt.arrow.prev.style.opacity = '.2';
      this.opt.arrow.prev.style.cursor = 'auto';
      this.opt.arrow.next.style.opacity = '1';
    } else if (targetItem === this.opt.itemsLength - 1) {
      this.opt.arrow.next.style.opacity = '.2';
      this.opt.arrow.next.style.cursor = 'auto';
      this.opt.arrow.prev.style.opacity = '1';
    } else {
      this.opt.arrow.prev.style.opacity = '1';
      this.opt.arrow.prev.style.cursor = 'pointer';
      this.opt.arrow.next.style.opacity = '1';
      this.opt.arrow.next.style.cursor = 'pointer';
    }
  }

  // arrowとpagenationの状態変更
  changeArrowAndPagenation(targetLeft) {
    if (!(this.opt.arrow || this.opt.pagenation)) {
      return;
    }
    this.opt.absTargetLeft = Math.abs(targetLeft);
    this.opt.targetIndex = this.opt.absTargetLeft / this.opt.numWidth;

    if (this.opt.loop) {
      if (this.opt.targetIndex === this.opt.itemsLength - 1) {
      this.changePagenation(1);
      } else if (this.opt.targetIndex === 0) {
      this.changePagenation(this.opt.itemsLength - 2);
      } else {
      this.changePagenation(this.opt.targetIndex);
      }
    } else {
      this.changeArrow(this.opt.absTargetLeft / this.opt.numWidth);
      this.changePagenation(this.opt.targetIndex + 1);
    }
  }

  // loopの場合のtarget調整
  adjustTarget(targetLeft) {
    if (!(this.opt.loop)) {
      return;
    }
    this.opt.absTargetLeft = Math.abs(targetLeft);
    this.opt.targetIndex = this.opt.absTargetLeft / this.opt.numWidth;

    window.setTimeout(() => {
      if (this.opt.targetIndex === this.opt.itemsLength - 1) {
        this.opt.conveyor.style.left = "-" + this.opt.numWidth + "px";
      } else if (this.opt.targetIndex === 0) {
        this.opt.conveyor.style.left =
          "-" + (this.opt.itemsLength - 2) * this.opt.numWidth + "px";
      }
    }, this.opt.duration * 1000);
  }

  // 各アニメーションに振り分ける
  animation(targetLeft) {
    switch (this.opt.animation) {
      case 'slide':
      this.slide(targetLeft);
      break;
      case 'fade':
      this.fade(targetLeft);
      break;
      default:
      break;
    }
  }

  // slideのanimation
  slide(targetLeft) {
    // ズレを直す
    if (
      /* eslint no-compare-neg-zero: 0 */
      targetLeft % this.opt.numWidth !== -0 ||
      Math.abs(targetLeft) &gt; this.opt.numWidth * this.opt.itemsLength
    ) {
      targetLeft = 0;
    }
    // 現在の位置取得
    const currentLeft = this.getCurrentLeftNum();
    // keyframe準備
    const styleStr = `
      @keyframes ${this.opt.class}_slideCarousel {
      from {
        left: ${currentLeft}px;
      }
      to {
        left: ${targetLeft}px;
      }
      }
      .${this.opt.class}_items {
      animation-name: ${this.opt.class}_slideCarousel;
      animation-duration: ${this.opt.duration}s;
      animation-fill-mode: forwards;
      }
    `;
    // animation
    this.opt.conveyor.style.left = targetLeft + 'px';
    this.appendStyles(styleStr, this.opt.class + '_movingKeyframes');
    window.setTimeout(() =&gt; {
      const el = this.d.querySelector('.' + this.opt.class + '_movingKeyframes');
      if (el) {
      el.parentNode.removeChild(el);
      }
    }, this.opt.duration * 1000);

    this.changeArrowAndPagenation(targetLeft);
    this.adjustTarget(targetLeft);
  }

  // fade in/out のanimation
  fade(targetLeft) {
    // carouselをコピーしてずらして配置しそれぞれを fade in/out させる
    const copyDom = this.opt.conveyor.cloneNode(true);
    this.opt.conveyor.parentNode.insertBefore(copyDom, this.opt.conveyor);
    copyDom.style.left = targetLeft + 'px';
    copyDom.classList.add(this.opt.class + '_copyDom');

    const styleStr = `
      @keyframes ${this.opt.class}_fadeoutCarousel {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
      }
      .${this.opt.class}_items {
      animation-name: ${this.opt.class}_fadeoutCarousel;
      animation-duration: ${this.opt.duration}s;
      animation-fill-mode: forwards;
      }
      @keyframes ${this.opt.class}_fadeinCarousel {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
      }
      .${this.opt.class}_copyDom {
      animation-name: ${this.opt.class}_fadeinCarousel;
      animation-duration: ${this.opt.duration}s;
      animation-fill-mode: forwards;
      }
    `;

    this.appendStyles(styleStr, this.opt.class + '_movingKeyframes');
    window.setTimeout(() =&gt; {
      const el = this.d.querySelector('.' + this.opt.class + '_movingKeyframes');
      if (el) {
      el.parentNode.removeChild(el);
      }
    }, this.opt.duration * 1000);
    window.setTimeout(() =&gt; {
      this.opt.conveyor.style.left = targetLeft + 'px';
      copyDom.parentNode.removeChild(copyDom);
    }, this.opt.duration * 1000);

    this.changeArrowAndPagenation(targetLeft);
    this.adjustTarget(targetLeft);
  }

  // 現在のスライダの位置を取得
  getCurrentLeftNum() {
    return (
      this.opt.conveyor.getBoundingClientRect().left -
      this.opt.carousel.getBoundingClientRect().left
    );
  }

  // 次の目的位置設定
  setTargetBrakePoint(currentNumber, direction) {
    let targetIndex = Math.floor(currentNumber / this.opt.numWidth);
    let targetPoint = targetIndex * this.opt.numWidth;

    if (direction === 'next' && targetIndex !== this.opt.itemsLength - 1) {
      // 今最後で次のに行く時
      targetIndex = targetIndex + 1;
      targetPoint = targetPoint + this.opt.numWidth;
    } else if (currentNumber &lt; 0) {
      // 今最初で前のに行く時
      targetIndex = 0;
      targetPoint = 0;
    } else if (direction === 'prev' && this.opt.animation === 'fade') {
      // fadeで前に行く時
      /* eslint no-compare-neg-zero: 0 */
      if (targetIndex === -0) {
      targetIndex = 0;
      targetPoint = 0;
      } else {
      targetIndex--;
      targetPoint -= this.opt.numWidth;
      }
    }

    this.opt.targetIndex = targetIndex;
    this.opt.targetPoint = targetPoint;
  }

  // deviceに適したclick event typeの設定
  getClickEventType() {
    return this.ua.isPc ? 'click' : 'touchstart';
  }

  // autoの設定
  setAutoOperation() {
    if (!this.opt.auto || !this.opt.auto.run) {
      return;
    }
    // 現実的でない数値だった時の調整
    if (this.opt.auto.time &lt;= this.opt.duration * 1.5 || !this.opt.auto.time) {
      this.opt.auto.time = this.opt.duration * 10;
    }
    let id;
    // auto開始
    const startInterval = () =&gt; {
      id = setInterval(() =&gt; {
      const currentLeft = this.getCurrentLeftNum();
      this.animation(currentLeft - this.opt.numWidth);
      const lastItem =
        Math.abs(currentLeft / this.opt.numWidth) &gt;= this.opt.itemsLength - 2;
      if (!this.opt.loop && lastItem) {
        clearInterval(id);
      }
      }, this.opt.auto.time * 1000);
    };
    // 一時停止
    const stopInterval = () =&gt; {
      clearInterval(id);
    };
    // 最後の一枚の時意図せず発動してしまうanimationを防ぐための準備段階
    const readyStartInterval = () =&gt; {
      const lastItem =
      Math.abs(this.getCurrentLeftNum() / this.opt.numWidth) &gt;=
      this.opt.itemsLength - 1;
      if (!(!this.opt.loop && lastItem)) {
      startInterval();
      }
    };
    // カーソルや指がareaの上にある時の一時停止や離した時のリスタートListener設定
    if (this.opt.auto.stopMouseOver) {
      this.opt.conveyor.addEventListener('mouseover', stopInterval, false);
      this.opt.conveyor.addEventListener('mouseout', readyStartInterval, false);
      this.opt.conveyor.addEventListener('touchstart', stopInterval, false);
      this.opt.conveyor.addEventListener('touchend', readyStartInterval, false);
    }
    // カーソルがpagenationやarrowの上にある時の一時停止や離した時のリスタートListener設定
    // 指の場合はすぐ反応して欲しいため未設定
    const resetIntervalWhenClick = (target) =&gt; {
      Object.values(target).forEach((item) =&gt; {
      item.addEventListener('mousedown', stopInterval, false);
      item.addEventListener('mouseup', readyStartInterval, false);
      });
    };
    if (this.opt.arrow) {
      resetIntervalWhenClick(this.opt.arrow);
    }
    startInterval();
  }

  // resize時のstyle再設定
  // px以外の設定にしていたりする時に必要
  setResizeOperation() {
    if (/px/.test(this.opt.orgWidth)) {
      return;
    }
    window.addEventListener('resize', () =&gt; {
      const cleanStyles = () =&gt; {
      const currentStyles = this.d.querySelector('.' + this.opt.class + '_style');
      currentStyles.parentNode.removeChild(currentStyles);
      };

      Promise.resolve(1)
      .then(() =&gt; {
        cleanStyles();
        this.setReadyStyles();
      })
      .then(() =&gt; {
        this.setElementComputedSizes();
      })
      .then(() =&gt; {
        cleanStyles();
        this.setBaseStyles();
      })
      .then(() =&gt; {
        let currentNumber = Math.round(
        Number(this.opt.conveyor.style.left.match(/\d+/)) / this.opt.numWidth,
        );
        this.opt.conveyor.style.left = '-' + currentNumber * this.opt.numWidth + 'px';
        this.opt.conveyor.style.width = this.opt.itemsLength * this.opt.numWidth + 'px';
        this.setPagenationListeners();
      });
    });
  }

  // styleタグのappend関数
  appendStyles(styleStr, cls) {
    const styleDom = this.d.createElement('style');
    styleDom.classList.add(cls);
    styleDom.innerText = styleStr;
    const brs = styleDom.querySelectorAll('br');
    Object.values(brs).forEach((value) =&gt; {
      value.parentNode.removeChild(value);
    });
    this.opt.carousel.appendChild(styleDom);
    this.opt.style = this.opt.carousel.querySelector('.' + this.opt.class + '_style');
  }

  // utility
  templateLiteralToHtmlStrings(strings, ...values) {
    return strings.reduce((accumlate, str, i) =&gt; {
      return accumlate + this.escapeHtml(values[i - 1]) + str;
    });
  }
  htmlStringsToHtmlElements(htmlStrings) {
    const template = document.createElement('template');
    template.innerHTML = htmlStrings;
    return template.content.firstElementChild;
  }
  escapeHtml(str) {
    if (!str) {
      return '';
    }
    return str.replace(/["'`&lt;&gt;&]/g, function (m) {
      return {
      '"': '&amp;quot;',
      "'": '&amp;#x27;',
      '`': '&amp;#x60;',
      '&amp;lt;': '&amp;lt;',
      '&amp;gt;': '&amp;gt;',
      '&amp;amp;': '&amp;amp;',
      }[m];
    });
  }
  userAgent() {
    const raw = window.navigator.userAgent;
    const ua = {};
    let deviceType;
    let osType;

    // sp
    if (/iPhone/.test(raw) || /iPod/.test(raw)) {
      deviceType = 'sp';
      osType = 'ios';
    } else if (/Android/.test(raw) && /Mobile/.test(raw)) {
      deviceType = 'sp';
      osType = 'android';
    } else if (/Windows/.test(raw) && /Phone/.test(raw)) {
      deviceType = 'sp';
    } else if (/Firefox/.test(raw) && /Mobile/.test(raw)) {
      deviceType = 'sp';
    } else if (/BlackBerry/.test(raw) || /BB10/.test(raw)) {
      deviceType = 'sp';
    } else if (/Nokia/.test(raw)) {
      deviceType = 'sp';

      // tablet
    } else if (/iPad/.test(raw)) {
      deviceType = 'tablet';
      osType = 'ios';
    } else if (/Macintosh/.test(raw) && 'ontouchend' in document) {
      deviceType = 'tablet';
      osType = 'ipados';
    } else if (/Android/.test(raw) && !/Mobile/.test(raw)) {
      deviceType = 'tablet';
      osType = 'android';
    } else if (
      /Windows/.test(raw) &&
      /Touch/.test(raw) &&
      !/Tablet PC/.test(raw)
    ) {
      deviceType = 'tablet';
    } else if (/Firefox/.test(raw) && /Tablet/.test(raw)) {
      deviceType = 'tablet';
    } else if (/Playbook/.test(raw)) {
      deviceType = 'tablet';
    } else if (/Kindle/.test(raw) || /Silk/.test(raw)) {
      deviceType = 'tablet';

      // pc
    } else {
      deviceType = 'pc';
      if (/Mac/.test(raw)) {
      osType = 'mac';
      } else if (/Windows/.test(raw)) {
      osType = 'win';
      } else {
      osType = 'unknown';
      }
    }

    ua.raw = raw;
    ua.deviceType = deviceType;
    ua.osType = osType;
    ua.isMs =
      deviceType === 'pc' &&
      /Windows NT/.test(raw) &&
      (!/Chrome/.test(raw) || /Firefox/.test(raw)); // ie or edge
    ua.isMac = osType === 'mac';
    ua.isWin = osType === 'win';
    ua.isIos = osType === 'ios';
    ua.isIpados = osType === 'ipados';
    ua.isAndroid = osType === 'android';
    ua.isPc = deviceType === 'pc';
    ua.isSp = deviceType === 'sp';
    ua.isTablet = deviceType === 'tablet';

    return ua;
  }
}


// instance生成とinit発火

new carousel({
  class: 'carousel1',
  width: '100%',
  height: '440px',
  animation: 'slide',
  duration: .4,
  pagenation: true,
  arrow: false,
  loop: true,
  auto: {
  run: false,
  time: 0,
  },
});

new carousel({
  class: 'carousel2',
  width: '220px',
  height: '220px',
  animation: 'fade',
  duration: .2,
  pagenation: true,
  arrow: true,
  loop: true,
  auto: {
  run: true,
  time: 2.0,
  },
});

new carousel({
  class: 'carousel3',
  width: '480px',
  height: '220px',
  animation: 'slide',
  duration: .2,
  pagenation: false,
  arrow: true,
  loop: false,
  auto: {
  run: false,
  time: 0,
  },
});

new carousel({
  class: 'carousel4',
  width: '400px',
  height: '800px',
  animation: 'slide',
  duration: .2,
  pagenation: true,
  arrow: true,
  loop: true,
  auto: {
  run: false,
  time: 0,
  },
});
&lt;/script&gt;


&lt;/body&gt;
&lt;/html&gt;
</CopyCode>
</pre>
  </PreCodes>
</template>
