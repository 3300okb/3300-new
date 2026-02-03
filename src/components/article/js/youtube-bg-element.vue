<script lang="ts">
export const metadata = {
  updateDate: '2021/07/20',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="youtube-bg-element"
    sample-url="/sample/html/youtube-bg-element.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code><CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;meta
  name="viewport"
  content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, viewport-fit=cover"
&gt;</b>

<b class="t03">&lt;style&gt;
  html,
  body {
  margin: 0;
  padding: 0;
}
.bgYouTube {
  width: 100%;
  height: calc(100vw / 16 * 9);
  position: relative;
  overflow: hidden;
  background: url(</b>fornotpc.png<b class="t03">) center center no-repeat;
  background-size: cover;
}
.movie {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: #000;
}
.content {
  width: 500px;
  height: 280px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -141px 0 0 -251px;
  z-index: 3;
  padding-top: 110px;
  border: #fff 1px solid;
  text-align: center;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  font-family: sans-serif;
  box-sizing: border-box;
}
.sp .content {
  width: 280px;
  height: 200px;
  margin: -100px 0 0 -140px;
  padding-top: 80px;
  font-size: 30px;
}
&lt;/style&gt;</b>


<b class="t04">&lt;div id="screen" class="bgYouTube"&gt;
  &lt;div id="player" class="movie"&gt;&lt;/div&gt;
  &lt;div class="overlay"&gt;&lt;/div&gt;
  &lt;div class="content"&gt;CONTENT&lt;/div&gt;
&lt;/div&gt;</b>

<b class="t06">&lt;script&gt;
  var VIDEO_ID = '</b>4ZUfl0fPg88<b class="t06">';
&lt;/script&gt;</b>

<b class="t02">&lt;script&gt;
  (function userAgent(w) {
    var raw = w.navigator.userAgent;
    var deviceType;
    // sp
    if (/iPhone/.test(raw) || /iPod/.test(raw)) {
      deviceType = "sp";
    } else if (/Android/.test(raw) && /Mobile/.test(raw)) {
      deviceType = "sp";
    } else if (/Windows/.test(raw) && /Phone/.test(raw)) {
      deviceType = "sp";
    } else if (/Firefox/.test(raw) && /Mobile/.test(raw)) {
      deviceType = "sp";
    } else if (/BlackBerry/.test(raw) || /BB10/.test(raw)) {
      deviceType = "sp";
    } else if (/Nokia/.test(raw)) {
      deviceType = "sp";
      // tablet
    } else if (/iPad/.test(raw)) {
      deviceType = "tablet";
    } else if (/Macintosh/.test(raw) && "ontouchend" in document) {
      deviceType = "tablet";
    } else if (/Android/.test(raw) && !/Mobile/.test(raw)) {
      deviceType = "tablet";
    } else if (
      /Windows/.test(raw) &&
      /Touch/.test(raw) &&
      !/Tablet PC/.test(raw)
    ) {
      deviceType = "tablet";
    } else if (/Firefox/.test(raw) && /Tablet/.test(raw)) {
      deviceType = "tablet";
    } else if (/Playbook/.test(raw)) {
      deviceType = "tablet";
    } else if (/Kindle/.test(raw) || /Silk/.test(raw)) {
      deviceType = "tablet";
      // pc
    } else {
      deviceType = "pc";
    }
    w.deviceType = deviceType;
  })(window);

  (function (w, doc) {
    if (w.deviceType === 'sp') {
      doc.querySelector('html').setAttribute('class', 'sp');
    }
  })(window, document);</b>

  <b class="t01">(function (w, doc) {
    var getWindowW = function () {
      return w.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
    }
    var overlay = doc.querySelector('.overlay');

    var player = doc.getElementById('player');
    var setPlayer = 'player'; // set dom id

    var ytag = doc.createElement('script');
    ytag.src = 'https://www.youtube.com/iframe_api';
    var firsttag = doc.getElementsByTagName('script')[0];
    firsttag.parentNode.insertBefore(ytag, firsttag);
    var onLordingYT = setInterval(function () {
      /* eslint no-undef: 0 */
      if (typeof YT !== 'undefined' && typeof YT.Player !== 'undefined') {
        clearInterval(onLordingYT);
        player = new YT.Player(setPlayer, {
          videoId: w.VIDEO_ID,
          playerVars: {
            controls: 0, // hide controller
            modestbranding: 1, // hide logo
            showinfo: 0, // hide title and user info
            rel: 0, // hide more
            wmode: 'transparent', // for IE z-index
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          },
        });
      }
      window.onresize = onSizeChange;
      setTimeout(() => {
        onSizeChange();
      }, 500);
      setTimeout(() => {
        overlay.style.opacity = 0.5;
      }, 1500);
    }, 50);

    var onPlayerReady = function (ev) {
      // on load
      ev.target.mute();
      ev.target.seekTo(0);
      ev.target.playVideo();
    };

    var onPlayerStateChange = function (ev) {
      // loop
      if (ev.data === YT.PlayerState.ENDED) {
        ev.target.seekTo(0);
      }
      // stop after 15 minutes
      setTimeout(stopVideo, 900000);
    };

    var onSizeChange = function () {
      var movie = doc.querySelector('.movie');
      var windowW = getWindowW();
      var movieW = windowW + 1000;
      player.setSize(movieW, parseInt(windowW / 16 * 9));
      movie.style.left = '-500px';
      if (w.deviceType === 'sp') {
        movie.style.height = '590px';
      }
    }

    var stopVideo = function () {
      player.stopVideo();
    }
  })(window, document);
&lt;/script&gt;</b>
</CopyCode>
</code></pre>
  </PreCodes>
</template>
