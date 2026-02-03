<script lang="ts">
export const metadata = {
  updateDate: '2020/12/19',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="youtube-embed-layer"
    sample-url="/sample/html/youtube-embed-layer.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code><CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta name="viewport" content="width=device-width"&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;style&gt;
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  position: relative;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
}
.play {
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.play span {
  display: inline-block;
  width: 80px;
  height: 50px;
  padding-top: 11px;
  border: #000 1px solid;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  margin: auto;
}
.play span + .play span {
  margin-left: 10px;
}
&lt;/style&gt;

&lt;/head&gt;
&lt;body&gt;

&lt;div class="play"&gt;
&lt;span <b class="t05">data-videoid="</b></b>4ZUfl0fPg88<b class="t02"><b class="t05">"</b>&gt;play1&lt;/span&gt;
&lt;span <b class="t05">data-videoid="</b></b>uQ2j201BWIg<b class="t02"><b class="t05">"</b>&gt;play2&lt;/span&gt;
&lt;span <b class="t05">data-videoid="</b></b>EXBKfYF7OKU<b class="t02"><b class="t05">"</b>&gt;play3&lt;/span&gt;
&lt;/div&gt;</b>

<b class="t01">&lt;div <b class="t05">class="setYoutubeLayer"</b>&gt;&lt;/div&gt;

&lt;script&gt;
(function(w, doc){
  var <b class="t06">setYoutubeLayer</b> = {

    <b class="t04">init</b>: function () {
      var target = doc.querySelector('.setYoutubeLayer');
      if (!target) {
        return;
      }

      var videoIds = doc.querySelectorAll('[data-videoid]');

      this.appendLayer(target);
      this.operationLayer(target, videoIds);
      this.appendStyles();
    },

    <b class="t04">appendLayer</b>: function (target) {
      var templateLiteralToHtmlStrings = function (strings, ...values) {
        return strings.reduce(function (accumlate, str, i) {
          return accumlate + escapeHtml(values[i - 1]) + str;
        });
      };
      var htmlStringsToHtmlElements = function (htmlStrings) {
        var template = doc.createElement('template');
        template.innerHTML = htmlStrings;
        return template.content.firstElementChild;
      };
      var escapeHtml = function (str) {
        if(!str){return '';}
        return str.replace(/["'`&lt;&gt;&amp;]/g, function(m) {
          return {
            '"': '&amp;quot;',
            "'": '&amp;#x27;',
            '`': '&amp;#x60;',
            '<': '&amp;lt;',
            '>': '&amp;gt;',
            '&amp;': '&amp;amp;',
          }[m]
        });
      };
      var htmlStrings = templateLiteralToHtmlStrings`&lt;div class="movie"&gt;
        &lt;div class="overlay"&gt;&lt;/div&gt;
        &lt;div class="player"&gt;
        &lt;div class="close"&gt;&lt;/div&gt;
        &lt;iframe src="" frameborder="0" allow="fullscreen"&gt;&lt;/iframe&gt;
        &lt;/div&gt;
        &lt;/div&gt;`;
      target.appendChild(htmlStringsToHtmlElements(htmlStrings));
    },

    <b class="t04">operationLayer</b>: function (target, videoIds) {
      var movie = doc.querySelector('.movie');
      var overlay = doc.querySelector('.overlay');
      var player = doc.querySelector('.player');

      var iframe = doc.querySelector('iframe');
      iframe.style.width = '1045px';
      iframe.style.height = '588px';

      var iframe_defaultW = iframe.offsetWidth;
      var iframe_defaultH = iframe.offsetHeight;

      var closeMovie = doc.querySelector('.close');
      closeMovie.style.width = '50px';
      closeMovie.style.height = '50px';
      var closeMovieH = closeMovie.offsetHeight;

      var frameW, frameH;
      var posL, posT;

      <b class="t02">// setPlayer</b>
      var setPlayer = function () {
        var w_W = w.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
        var w_H = w.innerHeight || doc.documentElement.clientHeight || doc.body.clientHeight;
        var wLack = w_W &lt; iframe_defaultW;
        var hLack = w_H &lt; iframe_defaultH + (closeMovieH * 2);
        var ori = window.screen.orientation || window.orientation;
        var stickW = function () {
          frameW = w_W;
          frameH = frameW / 16 * 9;
          posT = w_H / 2 - frameH / 2 - closeMovieH;
          posL = 0;
        }
        var stickH = function () {
          frameH = w_H - closeMovieH;
          frameW = frameH / 9 * 16;
          posT = 0;
          posL = w_W / 2 - frameW / 2;
        }

        if (wLack || hLack) {
          if (wLack &amp;&amp; !hLack) {
            stickW();
          } else if (!wLack &amp;&amp; hLack) {
            stickH();
          } else if (wLack &amp;&amp; hLack) {
            if (ori.type === 'portrait-primary' || ori === 0 || ori === 180) {
              stickW();
            } else {
              stickH();
            }
          }
        } else {
          frameW = iframe_defaultW;
          frameH = iframe_defaultH;
          posT = w_H / 2 - frameH / 2 - closeMovieH;
          posL = w_W / 2 - frameW / 2;
        }

        iframe.style.width = frameW + 'px';
        iframe.style.height = frameH + 'px';
        player.style.left = posL + 'px';
        player.style.top = posT + 'px';
      };
      <b class="t02">// openLayer - playMovie</b>
      videoIds.forEach(function (el) {
        el.addEventListener('click', function () {
          target.classList.remove('reverse');
          target.style.display = 'block';
          setPlayer();
          iframe.setAttribute('src', '//www.youtube.com/embed/' + el.dataset.videoid + '?loop=1&amp;autoplay=1&amp;playlist=' + el.dataset.videoid);
        });
      });
      <b class="t02">// closeLayer - stopMovie</b>
      var closeLayer = function () {
        target.classList.add('reverse');
        w.setTimeout(function () {
          target.style.display = 'none';
          iframe.setAttribute('src', '');
        }, 300);
      }
      closeMovie.addEventListener('click', function () {
        closeLayer();
      });
      overlay.addEventListener('click', function () {
        closeLayer();
      });
      <b class="t02">// resizeWindow</b>
      w.addEventListener('resize', function () {
        setPlayer();
      });
    },

    <b class="t04">appendStyles</b>: function () {
      var body = doc.querySelector('body');
      var styleStr = `
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        .setYoutubeLayer {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2147483647;
          animation-name: fadeIn;
          animation-duration: .3s;
        }
        .setYoutubeLayer.reverse {
          animation-name: fadeOut;
          animation-duration: .3s;
        }
        .setYoutubeLayer .movie {
          position: relative;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .setYoutubeLayer .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000;
          opacity: .8;
        }
        .setYoutubeLayer .player {
          position: absolute;
        }
        .setYoutubeLayer .close {
          position: relative;
          display: block;
          margin-left: auto;
          box-sizing: border-box;
          cursor: pointer;
        }
        .setYoutubeLayer .close::before {
          content: '';
          display: block;
          width: 1px;
          height: 50px;
          background: #fff;
          transform: rotate(-45deg);
          position: absolute;
          top: -4px;
          left: 20px;
        }
        .setYoutubeLayer .close::after {
          content: '';
          display: block;
          width: 1px;
          height: 50px;
          background: #fff;
          transform: rotate(45deg);
          position: absolute;
          top: -4px;
          left: 20px;
        }
        `;
      var styleDom = doc.createElement('style');
      styleDom.innerText = styleStr;
      var brs = styleDom.querySelectorAll('br');
      Object.values(brs).forEach(function (value) {
        value.parentNode.removeChild(value);
      });
      body.appendChild(styleDom);
    },

  }

  <b class="t06">setYoutubeLayer</b>.<b class="t04">init</b>();
})(window, document);
&lt;/script&gt;</b>

<b class="t02">&lt;/body&gt;
&lt;/html&gt;</b>
</CopyCode>
</code></pre>
  </PreCodes>
</template>
