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
    title="set-image-thumb"
    sample-url="/sample/html/set-image-thumb.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;setImgThumb&lt;/title&gt;
&lt;meta name="viewport" content="width=device-width"&gt;
&lt;meta charset="utf-8"&gt;

&lt;style&gt;
html, body {
margin: 0;
padding: 0;
font-family: sans-serif;
}
.attachFile {
display: block;
min-height: 40px;
margin: 20px;
position: relative;
}
.attachText, .attachImg {
display: block;
width: 160px;
height: 40px;
position: absolute;
top: 0;
left: 0;
}
.attachText {
padding-top: 11px;
background: #babbbc;
color: #fff;
font-size: 14px;
text-align: center;
box-sizing: border-box;
}
.attachImg {
opacity: 0;
cursor: pointer;
}
.attachSub {
margin-top: 10px;
}
.attachThumb img {
width: 120px;
margin-top: 50px;
background: #f1f1f1;
}
.attachFileName {
margin-left: 10px;
font-size: 11px;
}
.attachDelete {
margin-left: 10px;
font-size: 12px;
color: #f00;
cursor: pointer;
text-decoration: underline;
}
&lt;/style&gt;</b>


<b class="t03">&lt;form&gt;

&lt;div class="attachFile"&gt;
&lt;span class="attachText"&gt;Select image&lt;/span&gt;
&lt;input class="attachImg" type="file" name=""&gt;
&lt;div class="attachSub"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="attachFile"&gt;
&lt;span class="attachText"&gt;Select image&lt;/span&gt;
&lt;input class="attachImg" type="file" name=""&gt;
&lt;div class="attachSub"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="attachFile"&gt;
&lt;span class="attachText"&gt;Select image&lt;/span&gt;
&lt;input class="attachImg" type="file" name=""&gt;
&lt;div class="attachSub"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;/form&gt;</b>

<b class="t01">&lt;script&gt;
(function(w, d){
  var attachImgs = d.querySelectorAll('.attachImg');

  if (!attachImgs[0] || !w.File || !w.FileReader || !w.FileList || !w.Blob) {
    return;
  }

  var limitSize = 10000000;

  attachImgs.forEach(function (img) {
    img.addEventListener('change', function (ev) {
      var target = ev.target;
      var parentDiv = target.parentNode;
      var sub = parentDiv.getElementsByClassName('attachSub')[0];
      var file = target.files;
      var filename = file[0].name || '';
      var filesize = file[0].size || '';

      var clearValue = function (message) {
        target.value = '';
        sub.innerHTML = '';
        alert(message);
      };

      if (!file[0].type.match('image.*')) {
        clearValue('This file is not image type.');
        return;
      } else if (filesize > limitSize) {
        clearValue('File size is too large.');
        return;
      }

      sub.innerHTML = `&lt;span class="attachThumb"&gt;&lt;/span&gt;&lt;span class="attachFileName"&gt;&lt;/span&gt;&lt;span class="attachDelete"&gt;delete&lt;/span&gt;`;
      var thumb = parentDiv.getElementsByClassName('attachThumb')[0];
      var attachFileName = parentDiv.getElementsByClassName('attachFileName')[0];
      var deleteBtn = parentDiv.getElementsByClassName('attachDelete')[0];

      var reader = new FileReader();
      reader.onload = function () {
        attachFileName.innerHTML = filename;
        thumb.innerHTML = `&lt;img src="${reader.result}" alt=""&gt;`;
        deleteBtn.addEventListener('click', function (ev) {
          sub.parentNode.querySelector('.attachImg').value = '';
          sub.innerHTML = '';
        });
      };
      reader.readAsDataURL(file[0]);
    });
  });
})(window, document);
&lt;/script&gt;</b>
</CopyCode>
</pre>
  </PreCodes>
</template>
