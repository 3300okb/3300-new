<script lang="ts">
export const metadata = {
  updateDate: '2016/07/15',
}
</script>

<script setup lang="ts">
import SwitchBox from '@/components/SwitchBox.vue'
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="gulp" :update-date="metadata.updateDate" />

  <PreCodes>
    <SwitchBox title="install">
      <pre>
<b class="t01">http://nodejs.org/</b>   <b class="t02">// node.js インストール</b>
<b class="t01">node -v</b>  <b class="t02">// node.js バージョン確認</b>
<b class="t01">npm -v</b>  <b class="t02">// npm(node package manager: https://www.npmjs.org/) バージョン確認</b>

<b class="t01">sudo npm install gulp -g</b>  <b class="t02">// gulp グローバルインストール</b>
<b class="t01">gulp -version</b>  <b class="t02">// gulp バージョン確認</b>

<b class="t01">npm list</b> [package name]  <b class="t02">// パッケージのバージョン確認</b>
<b class="t02">ex) npm list gulp-sass</b>
</pre>
    </SwitchBox>

    <SwitchBox title="(node.js update)">
      <pre><b class="t01">sudo npm cache clean -f</b>
<b class="t01">sudo npm install -g n</b>
<b class="t01">sudo n latest</b>
<b class="t01">sudo n stable</b>
<b class="t01">sudo n</b> 4.7.0
</pre>
    </SwitchBox>

    <SwitchBox title="(node.js uninstall)">
      <pre>
<b class="t02">// enter every 1 line</b>
<b class="t01">lsbom -f -l -s -pf /var/db/receipts/org.nodejs.node.pkg.bom \
| while read i; do
  sudo rm /usr/local/${i}
done</b>

<b class="t02">// enter every 1 line</b>
<b class="t01">sudo rm -rf /usr/local/lib/node \
   /usr/local/lib/node_modules \
   /var/db/receipts/org.nodejs.*</b>

<b class="t02">// delete npm</b>
<b class="t01">sudo rm -rf ~/.npm</b>
</pre>
    </SwitchBox>

    <SwitchBox title="package.json">
      <pre>
1) <b class="t01">mkdir</b> project_name
2) <b class="t01">cd</b> project_name
3) <b class="t01">npm init</b>  <b class="t02">// package.json 生成</b>

---

<b class="t01">project_name</b>
└ <b class="t03">package.json</b>

---

<b class="t02">// package.json</b>
<b class="t03">{
  "name": "</b>project_name<b class="t03">",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
  "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
  },
  "author": "",
  "license": "ISC"
}</b>

---

4) <b class="t01">sudo npm install gulp --save-dev</b>
<b class="t02">// gulpのローカルインストールと --save-dev でpackage.jsonの更新</b>

---

project_name
├ <b class="t03">node_modules/</b>
└ <b class="t03">package.json</b>

---

<b class="t02">// package.json</b>
{
  "name": "project_name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
  "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
  },
  "author": "",
  "license": "ISC",
  <b class="t03">"devDependencies": {
  "gulp": "^3.9.0"
  }</b>
}
</pre>
    </SwitchBox>

    <SwitchBox title="gulpfile.js">
      <pre>
5) <b class="t01">vi gulpfile.js</b>  <b class="t02">// gulpfile.js 作成</b>

---

project_name
├ <b class="t01">gulpfile.js</b>
├ node_modules/
└ package.json

---

<b class="t02">// gulpfile.js</b>

<b class="t01">var gulp = require('gulp');

gulp.task('default', function() {</b>
  console.log('The task of the default was done.');
<b class="t01">});

gulp.task('</b>typeA<b class="t01">', function() {</b>
  console.log('The task of the typeA was done.');
<b class="t01">});</b>

---

<b class="t02">// タスクの実行</b>

project_name $ <b class="t01">gulp</b>
<b class="t03">[14:51:54] Using gulpfile ~</b>/workspace/project_name/<b class="t03">gulpfile.js
[14:51:54] Starting 'default'...
The task of the default was done.
[14:51:54] Finished 'default' after 80 μs</b>

project_name $ <b class="t01">gulp</b> typeA
<b class="t03">[14:51:59] Using gulpfile ~</b>/workspace/project_name/<b class="t03">gulpfile.js
[14:51:59] Starting 'typeA'...
The task of the typeA was done.
[14:51:59] Finished 'typeA' after 61 μs</b>
</pre>
    </SwitchBox>

    <SwitchBox title="plugin(example)">
      <pre>
<b class="t01">sudo npm install gulp --save-dev</b>
<b class="t01">sudo npm install gulp-sass --save-dev</b>

---

project_name
├ <b class="t01">gulpfile.js</b>
├ <b class="t03">node_modules/</b>
└ <b class="t03">package.json</b>

---

<b class="t02">// package.json</b>

{
  "name": "project_name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
  "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
  "gulp": "^3.9.0"<b class="t03">,
  "gulp-sass": "^2.0.3"</b>
  }
}

---

<b class="t02">// gulpfile.js</b>

var gulp = require('gulp');
<b class="t01">var sass = require('gulp-sass');</b>

<b class="t01">gulp.task('minify', function() {</b>
  console.log('sass function');
<b class="t01">});</b>

gulp.task('default', <b class="t01">['sass'],</b> function() {
  console.log('the task of the default was done.');
});

gulp.task('typeA', function() {
  console.log('the task of the typeA was done.');
});

---

<b class="t02">// タスクの実行</b>

project_name $ <b class="t01">gulp</b>
<b class="t03">[15:27:26] Using gulpfile ~/workspace/project_name/gulpfile.js
[15:27:26] <b class="t01">Starting 'sass'...</b>
sass function
[15:27:26] <b class="t01">Finished 'sass' after 74 μs</b>
[15:27:26] Starting 'default'...
the task of the default was done.
[15:27:26] Finished 'default' after 26 μs</b>

project_name $ <b class="t01">gulp</b> typeA
<b class="t03">[15:27:30] Using gulpfile ~/workspace/project_name/gulpfile.js
[15:27:30] Starting 'typeA'...
the task of the typea was done.
[15:27:30] Finished 'typeA' after 49 μs</b>
</pre>
    </SwitchBox>

    <SwitchBox title="plugin(gulp.spritesmith)">
      <pre>
<b class="t01">sudo npm install gulp --save-dev</b>
<b class="t01">sudo npm install gulp.spritesmith --save-dev</b>
<b class="t01">sudo npm install gulp-sass --save-dev</b>
<b class="t01">sudo npm install event-stream --save-dev</b> <b class="t02">// merge() を使うため</b>
<b class="t01">sudo npm install gulp-concat --save-dev</b> <b class="t02">// mapを結合するため</b>
<b class="t01">sudo npm install del --save-dev</b> <b class="t02">// 既存makeファイルの削除に使うため</b>

---

temp_gulp/
│
├ base64/
├ css/
├ <b class="t01">gulpfile.js</b>
├ html/
├ img/
│  <b class="t03">└ make/</b>
│    <b class="t03">├ spr-en-***********.png</b>
│    <b class="t03">└ spr-ja-***********.png</b>
├ js/
├ jsmod/
├ node_modules/
├ package.json
├ sass/
│  ├ <b class="t01">project_name.scss</b>
│  ├ <b class="t01">_conf.scss</b>
│  └ elements/
│    ├ _base.scss
│    ├ <b class="t01">_module.scss</b>
│    ├ lib/
│    │  ├ _reset.scss
│    │  └ <b class="t01">_utility.scss</b>
│    └ <b class="t03">make/</b>
│      <b class="t03">├ _concat.scss</b>
│      <b class="t03">└ spr/</b>
│        <b class="t03">├ _spr_en.scss</b>
│        <b class="t03">└ _spr_ja.scss</b>
└ sprite/
  ├ <b class="t01">en/</b>
  │   <b class="t01">├ blue.png</b>
  │   <b class="t01">├ green.png</b>
  │   <b class="t01">└ red.png</b>
  └ <b class="t01">ja/</b>
    <b class="t01">├ blue.png</b>
    <b class="t01">├ green.png</b>
    <b class="t01">└ red.png</b>

---

// gulpfile.js (no edit)

<b class="t02">// 変数の定義</b>
var gulp = require('gulp');
var del = require('del');
var sprite = require('gulp.spritesmith');
var merge = require('event-stream').merge;
var concat = require('gulp-concat');
var fs = require('fs');
var aPath = require('path');

<b class="t02">// フォルダ取得の準備</b>
var getFolders = function(dir) {
  return fs.readdirSync(dir).filter(function(file) {
      return fs.statSync(aPath.join(dir, file)).isDirectory();
  });
}

<b class="t02">// image と map の生成</b>
gulp.task('sprites', function() {

  <b class="t02">// 既存makeファイルの削除</b>
  del('img/make/*.png');

  <b class="t02">// ファイル名の末尾につける乱数の生成</b>
  var rdm = (new Date()).getTime();

  <b class="t02">// フォルダの取得</b>
  var folders = getFolders('sprite/');

  <b class="t02">// spriteフォルダの中にフォルダがなければスキップ</b>
  if(folders[0] !== undefined){

    <b class="t02">// 複数フォルダ分のmapを同時にreturnするためにmergeが必要</b>
    return merge(

      folders.map(function(folder) {

        spriteOptions = {
          imgName: 'spr-' + folder + '-' + rdm + '.png',
          imgPath: 'img/make/spr-' + folder + '-' + rdm + '.png',
          cssName: '_spr_' + folder + '.scss',
          cssFormat: 'scss',
          cssOpts: {
            functions: false
          },
          cssVarMap: function(sprite) {
            sprite.name = folder + '-' + sprite.name;
          },
          cssSpritesheetName: 'spr-' + folders.indexOf(folder),
          algorithm: 'binary-tree',
          padding: 4
        }

        spriteData = gulp.src('sprite/' + folder + '/*.png').pipe(sprite(spriteOptions));

        spriteData.img.pipe(gulp.dest('img/make'));
        return spriteData.css.pipe(gulp.dest('sass/elements/make/spr'));
      })
    );
  }
});

<b class="t02">// 生成したmapと_utility.scssを結合</b>
gulp.task('scss_concat', ['sprites'], function() {

  return gulp.src([
      'sass/elements/make/spr/*.scss',
      'sass/elements/lib/_utility.scss'
    ])
    .pipe(concat('_concat.scss'))
    .pipe(gulp.dest('sass/elements/make'))
});

<b class="t02">// sassコンパイル</b>
gulp.task('sass', ['scss_concat'], function() {

  return gulp.src([
      'sass/**/*.scss',
      '!sass/elements/make/spr/*.scss',
      '!sass/elements/lib/_utility.scss'
    ])
    .pipe(sass())
    .pipe(gulp.dest('css'))
});


<b class="t02">// タスクの順番制御はrun-sequenceモジュールでもできる</b>

---

// project_name.scss (no edit)

@import "conf";
@import "elements/make/concat";

---

// _conf.scss (no edit)

<b class="t02">// default value (フォルダ10個まで対応可能にする場合)</b>
$spr-0: null !default; <b class="t02">// no edit</b>
$spr-1: null !default; <b class="t02">// no edit</b>
$spr-2: null !default; <b class="t02">// no edit</b>
$spr-3: null !default; <b class="t02">// no edit</b>
$spr-4: null !default; <b class="t02">// no edit</b>
$spr-5: null !default; <b class="t02">// no edit</b>
$spr-6: null !default; <b class="t02">// no edit</b>
$spr-7: null !default; <b class="t02">// no edit</b>
$spr-8: null !default; <b class="t02">// no edit</b>
$spr-9: null !default; <b class="t02">// no edit</b>

---

// _utility.scss (no edit)

<b class="t02">// フォルダ10個まで対応可能にする場合</b>
$spr: ($spr-0, $spr-1, $spr-2, $spr-3, $spr-4, $spr-5, $spr-6, $spr-7, $spr-8, $spr-9);

<b class="t02">// プレイスホルダーセレクタを生成</b>
@for $i from 1 through length($spr) {

  <b class="t02">// それぞれのフォルダのmapが生成されてなかったらスキップ</b>
  @if nth($spr, $i) != null {

    %spr-#{$i} {

      background: url('../' + nth(nth($spr, $i), 3));
    }

    @for $j from 1 through length(nth(nth($spr, $i), 4)) {

      $file: nth(nth(nth(nth($spr, $i), 4), $j), 10);

      %spr-#{$file} {

        @extend %spr-#{$i};

        width: nth(nth(nth(nth($spr, $i), 4), $j), 5);
        height: nth(nth(nth(nth($spr, $i), 4), $j), 6);
        background-position: nth(nth(nth(nth($spr, $i), 4), $j), 3) nth(nth(nth(nth($spr, $i), 4), $j), 4);
      }
    }
  }
}

<b class="t02">// retina</b>
@for $i from 1 through length($spr) {

  <b class="t02">// それぞれのフォルダのmapが生成されてなかったらスキップ</b>
  @if nth($spr, $i) != null {

    %spr-rtn-#{$i} {

      background: url('../' + nth(nth($spr, $i), 3));
      background-size: ceil(nth(nth($spr, $i), 1)/2) ceil(nth(nth($spr, $i), 2)/2);
    }

    @for $j from 1 through length(nth(nth($spr, $i), 4)) {

      $file: nth(nth(nth(nth($spr, $i), 4), $j), 10);

      %spr-rtn-#{$file} {

        @extend %spr-rtn-#{$i};

        width: ceil(nth(nth(nth(nth($spr, $i), 4), $j), 5)/2);
        height: ceil(nth(nth(nth(nth($spr, $i), 4), $j), 6)/2);
        background-position: ceil(nth(nth(nth(nth($spr, $i), 4), $j), 3)/2) ceil(nth(nth(nth(nth($spr, $i), 4), $j), 4)/2);
      }
    }
  }
}

---

// _module.scss (edit)

.foo01 {
  @extend %spr-<b class="t01">ja</b>-<b class="t01">blue</b>;
}
.foo02 {
  @extend %spr-<b class="t01">ja</b>-<b class="t01">green</b>;
}
.foo03 {
  @extend %spr-<b class="t01">ja</b>-<b class="t01">red</b>;
}
.foo04 {
  @extend %spr-rtn-<b class="t01">en</b>-<b class="t01">blue</b>;
}
.foo05 {
  @extend %spr-rtn-<b class="t01">en</b>-<b class="t01">green</b>;
}
.foo06 {
  @extend %spr-rtn-<b class="t01">en</b>-<b class="t01">red</b>;
}

<b class="t02">// hide text は別途指定</b>

---

// html

&lt;div class="foo01"&gt;ja/blue&lt;/div&gt;
&lt;div class="foo02"&gt;ja/red&lt;/div&gt;
&lt;div class="foo03"&gt;ja/green&lt;/div&gt;
&lt;div class="foo04"&gt;en/blue&lt;/div&gt;
&lt;div class="foo05"&gt;en/red&lt;/div&gt;
&lt;div class="foo06"&gt;en/green&lt;/div&gt;

</pre>
    </SwitchBox>

    <SwitchBox title="plugin(gulp-base64)">
      <pre>
<b class="t01">sudo npm install gulp --save-dev</b>
<b class="t01">sudo npm install gulp-base64 --save-dev</b>
<b class="t01">sudo npm install gulp.spritesmith --save-dev</b>
<b class="t01">sudo npm install gulp-concat --save-dev</b> <b class="t02">// mapを結合するため</b>
<b class="t01">sudo npm install gulp-sass --save-dev</b>

---

temp_gulp/
│
├ base64/
│  ├ <b class="t03">make/</b>
│  │  <b class="t03">└ base64.png</b>
│  ├ <b class="t01">yellow01.png</b>
│  └ <b class="t01">yellow02.png</b>
├ css/
├ gulpfile.js
├ html/
├ img/
├ js/
├ jsmod/
├ node_modules/
├ package.json
├ sass/
│  ├ <b class="t01">project_name.scss</b>
│  ├ <b class="t01">_conf.scss</b>
│  └ elements/
│    ├ _base.scss
│    ├ <b class="t01">_module.scss</b>
│    ├ lib/
│    │  ├ <b class="t01">_base64.scss</b>
│    │  ├ _reset.scss
│    │  └ <b class="t01">_utility.scss</b>
│    <b class="t03">└ make/</b>
│      <b class="t03">├ _concat.scss</b>
│      <b class="t03">├ base64/</b>
│      │   <b class="t03">├ _map.scss</b>
│      │   <b class="t03">└ _url.scss</b>
│      └ spr/
└ sprite/

---

// gulpfile.js (no edit)

<b class="t02">// 変数の定義</b>
var gulp = require('gulp');
var base64 = require('gulp-base64');
var sprite = require('gulp.spritesmith');
var concat = require('gulp-concat');
var fs = require('fs');
var aPath = require('path');

<b class="t02">// pngファイルの有無を取得</b>
fs.readdir('base64', function (err, list) {
  list.forEach(function (file) {
    if (aPath.extname(file) === '.png'){
      pngfiles = true;
    }
  })
})

<b class="t02">// pngfileがあればsprite mapを生成</b>
gulp.task('base64_map', function(pngfiles) {

  if(pngfiles){ <b class="t02">// pngfileがなければスキップ</b>

    var base64Options = {
      imgName: 'base64.png',
      imgPath: 'base64/make/base64.png',
      cssName: '_map.scss',
      cssFormat: 'scss',
      cssOpts: {
        functions: false
      },
      cssSpritesheetName: 'base64',
      algorithm: 'binary-tree',
      padding: 4
    }

    var base64Data = gulp.src('base64/*.png').pipe(sprite(base64Options));

    base64Data.img.pipe(gulp.dest('base64/make'));
    return base64Data.css.pipe(gulp.dest('sass/elements/make/base64'));
  }
});

<b class="t02">// base64にエンコード</b>
gulp.task('base64_url', ['base64_map'], function() {

  if(pngfiles){ <b class="t02">// pngfileがなければスキップ</b>

    return gulp.src('sass/elements/lib/_base64.scss')
      .pipe(base64())
      .pipe(concat('_url.scss'))
      .pipe(gulp.dest('sass/elements/make/base64'));
  }
});

<b class="t02">// 生成したmapと_utility.scssを結合</b>
gulp.task('scss_concat', ['base64_url'], function() {

  return gulp.src([
      'sass/elements/make/base64/*.scss',
      'sass/elements/lib/_utility.scss'
    ])
    .pipe(concat('_concat.scss'))
    .pipe(gulp.dest('sass/elements/make'))
});

<b class="t02">// sassコンパイル</b>
gulp.task('sass', ['scss_concat'], function() {

  return gulp.src([
      'sass/**/*.scss',
      '!sass/elements/make/base64/*.scss',
      '!sass/elements/lib/_base64.scss',
      '!sass/elements/lib/_utility.scss'
    ])
    .pipe(sass())
    .pipe(gulp.dest('css'))
});


<b class="t02">// タスクの順番制御はrun-sequenceモジュールでもできる</b>

---

// project_name.scss (no edit)

@import "conf";
@import "elements/make/concat";

---

// _conf.scss (no edit)

$base64-sprites: null !default;

---

// _base64.scss (no edit)

%base64 {
  background: url('./base64/make/base64.png');
}

---

// _utility.scss (no edit)

<b class="t02">// scss生成により$base64-spritesが定義されていれば実行</b>
@if $base64-sprites != null {

  @for $i from 1 through length($base64-sprites) {

    <b class="t02">// プレイスホルダーセレクタを生成</b>
    %base64-#{nth(nth(nth($base64, 4), $i), 10)} {

      @extend %base64;

      width: nth(nth(nth($base64, 4), $i), 5);
      height: nth(nth(nth($base64, 4), $i), 6);
      background-position: nth(nth(nth($base64, 4), $i), 3) nth(nth(nth($base64, 4), $i), 4);
    }

    <b class="t02">// retina用</b>
    %base64-rtn-#{nth(nth(nth($base64, 4), $i), 10)} {

      @extend %base64;

      width: ceil(nth(nth(nth($base64, 4), $i), 5)/2);
      height: ceil(nth(nth(nth($base64, 4), $i), 6)/2);
      background-position: ceil(nth(nth(nth($base64, 4), $i), 3)/2) ceil(nth(nth(nth($base64, 4), $i), 4)/2);
      background-size: ceil(nth($base64, 1)/2) ceil(nth($base64, 2)/2);
    }
  }
}

---

// _module.scss (edit)

.bar01 {
  @extend %base64-<b class="t01">yellow01</b>;
}
.bar02 {
  @extend %base64-rtn-<b class="t01">yellow02</b>;
}

<b class="t02">// hide text は別途指定</b>

---

// html

&lt;div class="bar01"&gt;yellow01&lt;/div&gt;
&lt;div class="bar02"&gt;yellow02&lt;/div&gt;</pre>
    </SwitchBox>

    <SwitchBox title="temp_gulp.zip">
      <pre>temp_gulp/
│
├ README
├ base64/
│  ├ yellow01.png
│  └ yellow02.png
├ css/
├ gulpfile.js
├ html/
├ img/
├ js/
├ jsmod/
├ package.json
├ sass/
│  ├ project_name.scss
│  ├ _conf.scss
│  └ elements/
│    ├ _base.scss
│    ├ _module.scss
│    └ lib/
│      ├ _base64.scss
│      ├ _reset.scss
│      └ _utility.scss
└ sprite/
  ├ en/
  │   ├ blue.png
  │   ├ green.png
  │   └ red.png
  └ ja/
    ├ blue.png
    ├ green.png
    └ red.png

---

<b class="t02">// README</b>

---------------------------------------------------
workspace environment setting
---------------------------------------------------
0) Introduce a virtual server to use php.
<a href="https://www.apachefriends.org/index.html" target="_blank">https://www.apachefriends.org/index.html</a>

1) Install "node.js".
<a href="http://nodejs.org/" target="_blank">http://nodejs.org/</a>

2) Install "gulp".
$ <b class="t01">sudo npm install gulp -g</b>

---------------------------------------------------
temp_gulp setting
---------------------------------------------------
1) Change label of folder name from 'temp_gulp' to '<b class="t03">your_project_name</b>'.

2) Put this folder in your workspace.

workspace/
   └  <b class="t03">your_project_name/</b>

3) Enter top of this folder.

workspace/
   └  your_project_name/  <b class="t01">&lt;- current</b>

4) install node_modules.
your_project_name $ <b class="t01">sudo npm install</b>

5) Run gulp.
your_project_name $ <b class="t01">gulp i</b>
your_project_name $ <b class="t01">gulp</b>


---

your_project_name/
│
├ README
├ base64/
│  ├ <b class="t03">make/</b>
│  │  <b class="t03">└ base64.png</b>
│  ├ yellow01.png
│  └ yellow02.png
├ css/
│  <b class="t03">└ your_project_name.css</b>
├ gulpfile.js
├ html/
├ img/
│  <b class="t03">└ make/</b>
│    <b class="t03">├ spr-en-***********.png</b>
│    <b class="t03">└ spr-ja-***********.png</b>
├ js/
│  <b class="t03">└ your_project_name.js</b>
├ jsmod/
├ <b class="t03">node_modules/</b>
├ package.json
├ sass/
│  ├ your_project_name.scss
│  ├ _conf.scss
│  └ elements/
│    ├ _base.scss
│    ├ _module.scss
│    ├ lib/
│    <b class="t03">│</b>  ├ _base64.scss
│    <b class="t03">│</b>  ├ _reset.scss
│    <b class="t03">│</b>  └ _utility.scss
│    <b class="t03">└ make/</b>
│      <b class="t03">├ _concat.scss</b>
│      <b class="t03">├ base64/</b>
│      <b class="t03">│   ├ _map.scss</b>
│      <b class="t03">│   └ _url.scss</b>
│      <b class="t03">└ spr/</b>
│        <b class="t03">├ _spr_en.scss</b>
│        <b class="t03">└ _spr_ja.scss</b>
└ sprite/
  ├ en/
  │  ├ blue.png
  │  ├ green.png
  │  └ red.png
  └ ja/
    ├ blue.png
    ├ green.png
    └ red.png

---

// options

$ gulp <b class="t02">// default (compile css,js)</b>

$ gulp <b class="t01">i</b> <b class="t02">// make sprite,base64</b>
$ gulp <b class="t01">w</b> <b class="t02">// watch, livereload</b>
$ gulp <b class="t01">r</b> <b class="t02">// minify css,js</b>
</pre>
    </SwitchBox>
  </PreCodes>
</template>
