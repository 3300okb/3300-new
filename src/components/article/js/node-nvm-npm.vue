<script lang="ts">
export const metadata = {
  updateDate: '2024/03/15',
}
</script>

<script setup lang="ts">
import SwitchBox from '@/components/SwitchBox.vue'
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader title="node-nvm-npm" :update-date="metadata.updateDate" />

  <PreCodes>
    <SwitchBox title="node.js install">
      <pre>
<b class="t01">http://nodejs.org/</b>
</pre>
    </SwitchBox>

    <SwitchBox title="node.js update">
      <pre><b class="t01">$ npm cache clean -f</b>
<b class="t01">$ sudo npm install -g n</b>

<b class="t01">$ sudo n latest</b>
<b class="t01">$ sudo n stable</b>
<b class="t01">$ sudo n</b> 12.16.2
</pre>
    </SwitchBox>

    <SwitchBox title="node.js uninstall">
      <pre><b class="t01">$ sudo rm -rf /usr/local/lib/node
$ sudo rm -rf /usr/local/lib/node_modules
$ sudo rm -rf /var/db/receipts/org.nodejs.*
$ sudo rm -rf ~/.npm</b>
</pre>
    </SwitchBox>

    <SwitchBox title="node.js status">
      <pre>
<b class="t01">$ node -v</b>  <b class="t02">// version of node.js</b>
<b class="t01">$ npm -v</b>  <b class="t02">// version of npm</b>

<b class="t01">$ npm list</b> [package name]  <b class="t02">// version of a package</b>
<b class="t02">ex) npm list eslint</b>

<b class="t01">$ npm bin -g</b>  <b class="t02">// check PATH</b>
<b class="t01">$ export PATH=$PATH:</b>[path]  <b class="t02">// add PATH</b>
<b class="t01">$ source</b> [path]  <b class="t02">// through PATH</b>
</pre>
    </SwitchBox>

    <SwitchBox title="nvm install">
      <pre><b class="t01">curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
<b class="t02">// same command for bash or zsh</b></b></pre>
    </SwitchBox>

    <SwitchBox title="manual change node version with nvm">
      <pre><b class="t01">nvm install v12.22.0</b>
</pre>
    </SwitchBox>

    <SwitchBox title="nvm ready and auto use setting (zsh)">
      <pre><b class="t01">$ vi ~/.zshrc</b>

// add the code below
<CopyCode><b class="t01">ZSHHOME="${HOME}/.zsh.d"

if [ -d $ZSHHOME -a -r $ZSHHOME -a \
     -x $ZSHHOME ]; then
    for i in $ZSHHOME/*; do
        [[ ${i##*/} = *.zsh ]] &&
            [ \( -f $i -o -h $i \) -a -r $i ] && . $i
    done
fi</b></CopyCode>

---

<b class="t01">$ vi ~/.zsh.d/nvm-autoload.zsh</b>

// add the code below
<CopyCode><b class="t01">source ~/.nvm/nvm.sh

# place this after nvm initialization!
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc</b></CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="nvm ready and auto use setting (bash)">
      <pre><b class="t01">$ vi ~/.bash_profile</b>

// add the code below
<CopyCode><b class="t01">export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_co

find-up () {
  path=$(pwd)
  while [[ "$path" != "" && ! -e "$path/$1" ]]; do
    path=${path%/*}
  done
  echo "$path"
}

cdnvm(){
  cd "$@";
  nvm_path=$(find-up .nvmrc | tr -d '[:space:]')

  # If there are no .nvmrc file, use the default nvm version
  if [[ ! $nvm_path = *[^[:space:]]* ]]; then

    declare default_version;
    default_version=$(nvm version default);

    # If there is no default version, set it to `node`
    # This will use the latest version on your machine
    if [[ $default_version == "N/A" ]]; then
      nvm alias default node;
      default_version=$(nvm version default);
    fi

    # If the current version is not the default version, set it to use the default version
    if [[ $(nvm current) != "$default_version" ]]; then
      nvm use default;
    fi

    elif [[ -s $nvm_path/.nvmrc && -r $nvm_path/.nvmrc ]]; then
    declare nvm_version
    nvm_version=$(<"$nvm_path"/.nvmrc)

    declare locally_resolved_nvm_version
    # `nvm ls` will check all locally-available versions
    # If there are multiple matching versions, take the latest one
    # Remove the `->` and `*` characters and spaces
    # `locally_resolved_nvm_version` will be `N/A` if no local versions are found
    locally_resolved_nvm_version=$(nvm ls --no-colors "$nvm_version" | tail -1 | tr -d '\->*' | tr -d '[:space:]')

    # If it is not already installed, install it
    # `nvm install` will implicitly use the newly-installed version
    if [[ "$locally_resolved_nvm_version" == "N/A" ]]; then
      nvm install "$nvm_version";
    elif [[ $(nvm current) != "$locally_resolved_nvm_version" ]]; then
      nvm use "$nvm_version";
    fi
  fi
}
alias cd='cdnvm'</b></CopyCode>

---

<b class="t01">$ source ~/.bash_profile</b>
<b class="t01">$ nvm --version</b></pre>
    </SwitchBox>

    <SwitchBox title="auto change node version with nvm (.nvmrc)">
      <pre>// .nvmrc on project
<b class="t01">12.16.2</b> <b class="t02">(ex</b>

// first time
<b class="t01">$ nvm install</b></pre>
    </SwitchBox>

    <SwitchBox title="package.json">
      <pre>
<b class="t01">$ mkdir</b> project
<b class="t01">$ cd</b> project
<b class="t01">$ npm init</b>  <b class="t02">// make package.json</b>

---

project/
└ <b class="t03">package.json</b>

---

<b class="t02">// package.json</b>

<b class="t03">{
  "name": "</b>project<b class="t03">",
  "version": "1.0.1",
  "description": "",
  "main": "",
  "scripts": {
  "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
  },
  "author": "",
  "license": ""
}</b>
</pre>
    </SwitchBox>

    <SwitchBox title="run script (ex: unix command)">
      <pre>
project/
└ package.json

---

<b class="t02">// package.json</b>

{
  "name": "project",
  "version": "1.0.1",
  "description": "",
  "main": "",
  <b class="t01">"scripts": {
  "</b><b class="t04">lsall</b><b class="t01">": "</b><b class="t05">ls -a</b><b class="t01">"
  }</b>,
  "author": "",
  "license": ""
}

---

<b class="t02">// run script</b>

<b class="t01">$ npm run</b> <b class="t04">lsall</b>

<b class="t03">&gt; project@1.0.1 lsall /Users/../workspace/project
&gt; ls -a

.     ..    package.json</b>
</pre>
    </SwitchBox>

    <SwitchBox title="run script (ex: bash)">
      <pre>
project/
├ <b class="t01">.lib/</b>
│  └ <b class="t01">lsall.sh</b>
└ package.json

---

<b class="t02">// lsall.sh</b>

<b class="t01">#!/bin/bash</b>
ls -a
<b class="t01">exit 0</b>

---

<b class="t02">// package.json</b>

{
  "name": "project",
  "version": "1.0.1",
  "description": "",
  "main": "",
  <b class="t01">"scripts": {
  "</b><b class="t04">lsall</b><b class="t01">": "</b><b class="t05">sh .lib/lsall.sh</b><b class="t01">"
  }</b>,
  "author": "",
  "license": ""
}

---

<b class="t02">// run script</b>

<b class="t01">$ npm run</b> <b class="t04">lsall</b>

<b class="t03">&gt; project@1.0.1 lsall /Users/../workspace/project
&gt; sh .lib/lsall.sh

.     ..    .lib    package.json</b>
</pre>
    </SwitchBox>

    <SwitchBox title="run script (ex: node.js)">
      <pre>
project/
├ .lib/
│  ├ lsall.sh
│  └ <b class="t01">hello.js</b>
└ package.json

---

<b class="t02">// hello.js</b>

console.log("hello");

---

<b class="t02">// package.json</b>

{
  "name": "project",
  "version": "1.0.1",
  "description": "",
  "main": "",
  <b class="t01">"scripts": {
  "</b>lsall<b class="t01">": "</b>sh .lib/lsall.sh<b class="t01">",
  "</b><b class="t04">hello</b><b class="t01">": "</b><b class="t05">node .lib/hello.js</b><b class="t01">",
  "</b><b class="t04">w</b><b class="t01">": "</b><b class="t05">npm run lsall && npm run hello</b><b class="t01">" <b class="t02">// &&(sync) &(async)</b>
  }</b>,
  "author": "",
  "license": ""
}

---

<b class="t02">// run script</b>

<b class="t03"><b class="t01">$ npm run</b> <b class="t04">hello</b>

&gt; project@1.0.1 hello /Users/../workspace/project
&gt; node .lib/hello.js

hello

<b class="t01">$ npm run</b> <b class="t04">w</b>

&gt; project@1.0.1 w /Users/../workspace/project
&gt; npm run lsall &amp;&amp; npm run hello


&gt; project@1.0.1 lsall /Users/../workspace/project
&gt; sh .lib/lsall.sh

.     ..    .lib    package.json

&gt; project@1.0.1 hello /Users/../workspace/project
&gt; node .lib/hello.js

hello</b>
</pre>
    </SwitchBox>

    <SwitchBox title="run script (ex: node package)">
      <pre>
<b class="t02">// install package</b>

<b class="t01">$ npm install</b> sass --save-dev

---

project/
├ .lib/
│  ├ lsall.sh
│  └ hello.js
├ <b class="t01">dest/</b>
├ <b class="t01">sass/</b>
│  <b class="t01">└ project.scss</b>
├ <b class="t03">node_modules/</b>
└ <b class="t03">package.json</b>

---

<b class="t02">// package.json</b>

{
  "name": "project",
  "version": "1.0.1",
  "description": "",
  "main": "",
  <b class="t01">"scripts": {
  "</b>lsall<b class="t01">": "</b>sh .lib/lsall.sh<b class="t01">",
  "</b>hello<b class="t01">": "</b>node .lib/hello.js<b class="t01">",
  "</b>w<b class="t01">": "</b>npm run lsall &amp;&amp; npm run hello<b class="t01">",
  "</b><b class="t04">sass</b><b class="t01">": "</b><b class="t05">sass sass:dest</b><b class="t01">"
  }</b>,
  "author": "",
  "license": ""
}

---

<b class="t02">// run script</b>

<b class="t03"><b class="t01">$ npm run</b> <b class="t04">sass</b>

&gt; project@1.0.1 sass /Users/../workspace/project
&gt; sass sass:dest

Rendering Complete, saving .css file...
Wrote CSS to /Users/../workspace/project/dest/project.css
Wrote 1 CSS files to /Users/../workspace/project/dest</b>
</pre>
    </SwitchBox>

    <SwitchBox title="node package (ex: spritesmith)">
      <pre>
<b class="t01">$ npm install spritesmith sass --save-dev</b>

---

project/
│
├ .lib/
│   <b class="t01">├ clean-scss.sh</b>
│   <b class="t01">├ spritesmith.js</b>
│   <b class="t01">└ concat-scss.sh</b>
├ dest/
│   <b class="t03">└ project.css</b>
├ html/
├ img/
│  <b class="t03">└ make/</b>
│    <b class="t03">├ spr-en-***********.png</b>
│    <b class="t03">└ spr-ja-***********.png</b>
├ node_modules/
├ <b class="t01">package.json</b>
├ sass/
│  ├ <b class="t01">project.scss</b>
│  ├ _conf.scss
│  ├ src/
│  <b class="t03">│</b>  ├ mod/
│  <b class="t03">│</b>  │   ├ _base.scss
│  <b class="t03">│</b>  │   └ <b class="t01">_module.scss</b>
│  <b class="t03">│</b>  └ lib/
│  <b class="t03">│</b>    ├ _reset.scss
│  <b class="t03">│</b>    └ <b class="t01">_utility.scss</b>
│  <b class="t03">└ make/</b>
│    <b class="t03">├ _concat.scss</b>
│    <b class="t03">└ spr/</b>
│      <b class="t03">├ _spr_en.scss</b>
│      <b class="t03">├ _spr_ja.scss</b>
│    <b class="t03">  └ param</b>
│    <b class="t03">    └ _base.scss</b>
└ <b class="t01">sprite/
  ├ en/
  │   ├ 120.png
  │   └ 150.png
  └ ja/
    ├ 120.png
    └ 150.png</b>

---

<b class="t02">// package.json</b>

<b class="t01">{
  "name": "project",
  "version": "1.0.1",
  "description": "",
  "main": "",
  "author": "",
  "license": "",
  "scripts": {
  "clean:scss": "sh .lib/clean-scss.sh",
  "clean:ds": "find . -name '.DS_Store' -print -exec rm {} ';'",
  "clean": "npm run clean:scss &amp; npm run clean:ds",
  "sprite": "node .lib/spritesmith.js",
  "concat:scss": "sh .lib/concat-scss.sh",
  "make:css": "npm run concat:scss &amp;&amp; sass sass:dest",
  "i": "npm run clean &amp;&amp; npm run sprite",
  "l": "npm run make:css"
  },
  "devDependencies": {
  "sass": "",
  "spritesmith": ""
  }
}</b>

---

<b class="t02">// .lib/clean-scss.sh</b>

<b class="t01">#!/bin/bash

mkdir img
rm -r img/make
mkdir img/make
rm -r sass/make
mkdir sass/make
mkdir sass/make/spr
mkdir sass/make/spr/param

exit 0</b>

---

<b class="t02">// .lib/spritesmith.js</b>

<b class="t01">const pkg = require(`../package.json`);
const Spritesmith = require(`spritesmith`);
const fs = require(`fs`);
const aPath = require(`path`);
const getFolders = (dir) =&gt; {
  return fs.readdirSync(dir).filter((file) =&gt; {
    return fs.statSync(aPath.join(dir, file)).isDirectory();
  });
}

const basePath = `sass/make/spr/param/_base.scss`;
//const rdm = (new Date()).getTime();

let baseData = new String();
let imgPath;
let writePath;
let filePath;
let file;
let property;
let x;
let y;
let xx;
let yy;
let w;
let h;
let W;
let H;
let img;
let folder;
let pngs;
let sprData;
let sprPath;
let filenameList;
let filenameParam;


const writeBase = (str) =&gt; {
  fs.writeFileSync(basePath, str);
}

fs.readdir(`sprite/`, (err, folders) =&gt; {

  if (err) {

    writeBase(`$spr: null;\n`);

  } else {

    baseData += `$spr: (`;
    for (let i = 0; i &lt; folders.length; i++) {
      baseData += `$spr-${i}, `;
    }
    baseData += `);\n`;
    writeBase(baseData);
  }
});


const folders = getFolders(`sprite/`);
folders.forEach((value, index) =&gt; {

  fs.readdir(`sprite/${value}/`, (err, files) =&gt; {

    if (err) {

      writeBase(`$spr: null;\n`);
      return;

    } else {

      pngs = [];
      for (let i in files) {
        if (/\.png$/.test(files[i])) {
          pngs[i] = `sprite/${value}/${files[i]}`;
        }
      }

      Spritesmith.run({
        src: pngs,
        algorithm: `binary-tree`,
        padding: 6

      }, handleResult = (err, result) =&gt; {

        sprData = new String();
        sprPath = `sass/make/spr/_spr_${value}.scss`;

        if (result.properties.width === 0 &amp;&amp; result.properties.height === 0) {
          fs.appendFileSync(sprPath, `$spr-${index}: null;\n`);
          return;
        }

        filenameList = [];
        filenameParam = ``;

        //imgPath = `img_org/make/spr-${value}-${rdm}.png`;
        //writePath = `img/make/spr-${value}-${rdm}.png`;
        imgPath = `img_org/make/spr-${value}.png`;
        writePath = `img/make/spr-${value}.png`;

        fs.writeFileSync(imgPath, result.image);

        for (let n in result.coordinates) {

          filePath = n.split(`/`);
          file = (filePath[2].split(`.`))[0];
          property = `$${value}-${file}: (`;
          x = `${result.coordinates[n].x}px, `;
          y = `${result.coordinates[n].y}px, `;
          xx = `-${x}`;
          yy = `-${y}`;
          w = `${result.coordinates[n].width}px, `;
          h = `${result.coordinates[n].height}px, `;
          W = `${result.properties.width}px, `;
          H = `${result.properties.height}px, `;
          img = `'${writePath}', `;
          folder = `'${value}-${file}', );\n`;

          sprData += property + x + y + xx + yy + w + h + folder;

          filenameList.push(file);
        }

        for (let i = 0; i &lt; filenameList.length; i++) {
          filenameParam = `${filenameParam}$${value}-${filenameList[i]}, `;
        }

        sprData += `$spr-${index}-sprites: (${filenameParam});\n`;
        sprData += `$spr-${index}: (${W}${H}${img}$spr-${index}-sprites, );\n`;

        fs.appendFileSync(sprPath, sprData);
      });
    }
  });
});</b>

---

<b class="t02">// .lib/concat-scss.sh</b>

<b class="t01">#!/bin/bash

cat sass/make/spr/*.scss sass/make/spr/param/*.scss &gt; sass/make/_concat.scss

exit 0</b>

---

<b class="t02">// project.scss</b>

<b class="t01">@use "make/concat";</b>
<b class="t01">@use "src/lib/utility";</b>

---

<b class="t02">// _conf.scss</b>

<b class="t01">$path-img: "../";</b>

---

<b class="t02">// a part of _concat.scss</b>

<b class="t03">$en-120: (156px, 0px, -156px, -0px, 120px, 120px, 'en-120', );
$en-150: (0px, 0px, -0px, -0px, 150px, 150px, 'en-150', );
$spr-0-sprites: ($en-120, $en-150, );
$spr-0: (276px, 150px, 'img/make/spr-en-*************.png', $spr-0-sprites, );
$ja-120: (156px, 0px, -156px, -0px, 120px, 120px, 'ja-120', );
$ja-150: (0px, 0px, -0px, -0px, 150px, 150px, 'ja-150', );
$spr-1-sprites: ($ja-120, $ja-150, );
$spr-1: (276px, 150px, 'img/make/spr-ja-*************.png', $spr-1-sprites, );

$spr: ($spr-0, $spr-1, );</b>

---

<b class="t02">// _utility.scss</b>

<b class="t01">@use "../../conf";
@use "../../make/concat";

@for $ratio from 1 through 3 {
  $r: "";

  @if $ratio == 2 {
    $r: "-r2";
  }

  @if $ratio == 3 {
    $r: "-r3";
  }

  @for $i from 1 through length(concat.$spr) {
    @if nth(concat.$spr, $i) != null {
      %spr#{$r}-#{$i} {
        background: url("#{conf.$path-img + nth(nth(concat.$spr, $i), 3)}");
        background-size: ceil(nth(nth(concat.$spr, $i), 1) / $ratio) ceil(nth(nth(concat.$spr, $i), 2) / $ratio);
      }

      @for $j from 1 through length(nth(nth(concat.$spr, $i), 4)) {
        $file: nth(nth(nth(nth(concat.$spr, $i), 4), $j), 7);
        %spr#{$r}-#{$file} {
          @extend %spr#{$r}-#{$i};

          width: ceil(nth(nth(nth(nth(concat.$spr, $i), 4), $j), 5) / $ratio);
          height: ceil(nth(nth(nth(nth(concat.$spr, $i), 4), $j), 6) / $ratio);
          background-position: ceil(nth(nth(nth(nth(concat.$spr, $i), 4), $j), 3) / $ratio) ceil(nth(nth(nth(nth(concat.$spr, $i), 4), $j), 4) / $ratio);
        }
      }
    }
  }
}</b>

---

<b class="t02">// _module.scss</b>
<b class="t02">// @extend %spr-{foldername}-{filename} // 100%</b>
<b class="t02">// @extend %spr-r2-{foldername}-{filename} // 50%</b>
<b class="t02">// @extend %spr-r3-{foldername}-{filename} // 33.3%</b>

.foo01 { @extend %spr-<b class="t01">ja</b>-<b class="t01">150</b>; }
.foo02 { @extend %spr-r2-<b class="t01">ja</b>-<b class="t01">150</b>; }
.foo03 { @extend %spr-r3-<b class="t01">ja</b>-<b class="t01">150</b>; }
.foo04 { @extend %spr-<b class="t01">en</b>-<b class="t01">150</b>; }
.foo05 { @extend %spr-r2-<b class="t01">en</b>-<b class="t01">150</b>; }
.foo06 { @extend %spr-r3-<b class="t01">en</b>-<b class="t01">150</b>; }
.foo07 { @extend %spr-<b class="t01">ja</b>-<b class="t01">120</b>; }
.foo08 { @extend %spr-r2-<b class="t01">ja</b>-<b class="t01">120</b>; }
.foo09 { @extend %spr-r3-<b class="t01">ja</b>-<b class="t01">120</b>; }
.foo10 { @extend %spr-<b class="t01">en</b>-<b class="t01">120</b>; }
.foo11 { @extend %spr-r2-<b class="t01">en</b>-<b class="t01">120</b>; }
.foo12 { @extend %spr-r3-<b class="t01">en</b>-<b class="t01">120</b>; }
div { @extend %hide-text; }

---

<b class="t02">// project.css</b>

<b class="t03">.foo10, .foo04 {
  background: url("../img/make/spr-en-*************.png");
  background-size: 276px 150px; }

.foo10 {
  width: 120px;
  height: 120px;
  background-position: -156px 0px; }

.foo04 {
  width: 150px;
  height: 150px;
  background-position: 0px 0px; }

.foo07, .foo01 {
  background: url("../img/make/spr-ja-*************.png");
  background-size: 276px 150px; }

.foo07 {
  width: 120px;
  height: 120px;
  background-position: -156px 0px; }

.foo01 {
  width: 150px;
  height: 150px;
  background-position: 0px 0px; }

.foo11, .foo05 {
  background: url("../img/make/spr-en-*************.png");
  background-size: 138px 75px; }

.foo11 {
  width: 60px;
  height: 60px;
  background-position: -78px 0px; }

.foo05 {
  width: 75px;
  height: 75px;
  background-position: 0px 0px; }

.foo08, .foo02 {
  background: url("../img/make/spr-ja-*************.png");
  background-size: 138px 75px; }

.foo08 {
  width: 60px;
  height: 60px;
  background-position: -78px 0px; }

.foo02 {
  width: 75px;
  height: 75px;
  background-position: 0px 0px; }

.foo12, .foo06 {
  background: url("../img/make/spr-en-*************.png");
  background-size: 92px 50px; }

.foo12 {
  width: 40px;
  height: 40px;
  background-position: -52px 0px; }

.foo06 {
  width: 50px;
  height: 50px;
  background-position: 0px 0px; }

.foo09, .foo03 {
  background: url("../img/make/spr-ja-*************.png");
  background-size: 92px 50px; }

.foo09 {
  width: 40px;
  height: 40px;
  background-position: -52px 0px; }

.foo03 {
  width: 50px;
  height: 50px;
  background-position: 0px 0px; }</b>

---

<b class="t02">// html</b>

&lt;div class="foo01"&gt;ja/150&lt;/div&gt;
&lt;div class="foo02"&gt;ja/150&lt;/div&gt;
&lt;div class="foo03"&gt;ja/150&lt;/div&gt;
&lt;div class="foo04"&gt;en/150&lt;/div&gt;
&lt;div class="foo05"&gt;en/150&lt;/div&gt;
&lt;div class="foo06"&gt;en/150&lt;/div&gt;
&lt;div class="foo07"&gt;ja/120&lt;/div&gt;
&lt;div class="foo08"&gt;ja/120&lt;/div&gt;
&lt;div class="foo09"&gt;ja/120&lt;/div&gt;
&lt;div class="foo10"&gt;en/120&lt;/div&gt;
&lt;div class="foo11"&gt;en/120&lt;/div&gt;
&lt;div class="foo12"&gt;en/120&lt;/div&gt;
</pre>

      <div>
        <div class="foo01">ja/150</div>
        <div class="foo02">ja/150</div>
        <div class="foo03">ja/150</div>
        <div class="foo04">en/150</div>
        <div class="foo05">en/150</div>
        <div class="foo06">en/150</div>
        <div class="foo07">ja/120</div>
        <div class="foo08">ja/120</div>
        <div class="foo09">ja/120</div>
        <div class="foo10">en/120</div>
        <div class="foo11">en/120</div>
        <div class="foo12">en/120</div>
      </div>

      <pre>

---

<b class="t02">// run</b>

$ npm run i
$ npm run l
</pre>
    </SwitchBox>

    <SwitchBox title="node package (ex: base64)">
      <pre>
<b class="t01">$ npm install datauri spritesmith sass --save-dev</b>

---

project/
│
├ .lib/
│   <b class="t01">├ clean-scss.sh</b>
│   <b class="t01">├ base64.js</b>
│   <b class="t01">└ concat-scss.sh</b>
├ base64/
│  ├ <b class="t03">make/</b>
│  │  <b class="t03">└ base64.png</b>
│  ├ <b class="t01">yellow60.png</b>
│  └ <b class="t01">yellow90.png</b>
├ dest/
│   <b class="t03">└ project.css</b>
├ html/
├ img/
├ node_modules/
├ <b class="t01">package.json</b>
└ sass/
   ├ <b class="t01">project.scss</b>
   ├ _conf.scss
   ├ src/
   <b class="t03">│</b>  ├ mod/
   <b class="t03">│</b>  │   ├ _base.scss
   <b class="t03">│</b>  │   └ <b class="t01">_module.scss</b>
   <b class="t03">│</b>  └ lib/
   <b class="t03">│</b>    ├ _reset.scss
   <b class="t03">│</b>    └ <b class="t01">_utility.scss</b>
   <b class="t03">└ make/</b>
      <b class="t03">├ _concat.scss</b>
      <b class="t03">└ base64/</b>
         <b class="t03">└ _map.scss</b>

---

<b class="t02">// package.json</b>

<b class="t01">{
  "name": "project",
  "version": "1.0.1",
  "description": "",
  "main": "",
  "author": "",
  "license": "",
  "scripts": {
    "clean:scss": "sh .lib/clean-scss.sh",
    "clean:ds": "find . -name '.DS_Store' -print -exec rm {} ';'",
    "clean": "npm run clean:scss &amp; npm run clean:ds",
    "base64": "node .lib/base64.js",
    "sprite": "node .lib/spritesmith.js",
    "concat:scss": "sh .lib/concat-scss.sh",
    "make:css": "npm run concat:scss &amp;&amp; sass sass:dest",
    "i": "npm run clean &amp;&amp; npm run base64",
    "l": "npm run make:css"
  },
  "devDependencies": {
  "datauri": "",
  "sass": "",
  "spritesmith": ""
  }
}</b>

---

<b class="t02">// .lib/clean-scss.sh</b>

<b class="t01">#!/bin/bash

mkdir img
rm -r base64/make
mkdir base64/make
rm -r sass/make
mkdir sass/make
mkdir sass/make/base64

exit 0</b>

---

<b class="t02">// .lib/base64.js</b>

<b class="t01">const pkg = require(`../package.json`);
const Spritesmith = require(`spritesmith`);
const fs = require(`fs`);
const aPath = require(`path`);
const Datauri = require(`datauri`).sync;
const getFolders = (dir) =&gt; {
  return fs.readdirSync(dir).filter((file) =&gt; {
    return fs.statSync(aPath.join(dir, file)).isDirectory();
  });
}

const target = `sass/make/base64/_map.scss`;
const imgPath = `base64/make/base64.png`;

let base64Data = new String();
let filePath;
let file;
let property;
let x;
let y;
let xx;
let yy;
let w;
let h;
let W;
let H;
let img;
let folder;
let filenameList = [];
let filenameParam = ``;


const writeData = (str) =&gt; {
  fs.writeFileSync(target, str);
};

fs.readdir(`base64`, (err, list) =&gt; {

  try {

    if (aPath.extname(list.toString(10)) !== `.png`) {
      writeData(`$base64-sprites: null;\n`);
      return;
    }

    let pngs = [];

    for(let i = 0; i &lt; list.length; i++) {
      (/\.png$/.test(list[i])) ? pngs.push(`base64/${list[i]}`) : null;
    }

    Spritesmith.run({
      src: pngs,
      algorithm: `binary-tree`,
      padding: 6

    }, handleResult = (err, result) =&gt; {

      if (err) { throw err; }

      fs.writeFile(imgPath, result.image, () =&gt; {

        for (let n in result.coordinates) {
          filePath = n.split(`/`);
          file = (filePath[1].split(`.`))[0];
          property = `$${file}: (`;
          x = `${result.coordinates[n].x}px, `;
          y = `${result.coordinates[n].y}px, `;
          xx = `-${x}`;
          yy = `-${y}`;
          w = `${result.coordinates[n].width}px, `;
          h = `${result.coordinates[n].height}px, `;
          W = `${result.properties.width}px, `;
          H = `${result.properties.height}px, `;
          img = `'${imgPath}', `;
          folder = `'${file}', );\n`;
          base64Data += property + x + y + xx + yy + w + h + folder;
          filenameList.push(file);
        }

        for (let i = 0; i &lt; filenameList.length; i++) {
          filenameParam = `${filenameParam}$${filenameList[i]}, `;
        }

        base64Data += `$base64-sprites: (${filenameParam});\n`;
        base64Data += `$base64: (${W}${H}${img}$base64-sprites, );\n`;
        base64Data += `%base64 { background: url(${Datauri(imgPath)}); }\n`;
        writeData(base64Data);
      });
    });

  } catch (err) {

    console.log(`no base64 folder`);
    writeData(`$base64-sprites: null;\n`);
  }
});</b>

---

<b class="t02">// .lib/concat-scss.sh</b>

<b class="t01">#!/bin/bash

cat sass/make/base64/*.scss &gt; sass/make/_concat.scss

exit 0</b>

---

<b class="t02">// project.scss</b>

<b class="t01">@use "make/concat";</b>
<b class="t01">@use "src/lib/utility";</b>

---

<b class="t02">// a part of _concat.scss</b>

<b class="t03">$yellow60: (96px, 0px, -96px, -0px, 60px, 60px, 'yellow60', );
$yellow90: (0px, 0px, -0px, -0px, 90px, 90px, 'yellow90', );
$base64-sprites: ($yellow60, $yellow90, );
$base64: (156px, 90px, 'base64/make/base64.png', $base64-sprites, );
%base64 { background: url(data:image/png;base64,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); }</b>

---

<b class="t02">// _utility.scss</b>

<b class="t01">@use "../../make/concat";

@if concat.$base64-sprites != null {
  @for $ratio from 1 through 3 {
    $r: "";

    @if $ratio == 2 {
      $r: "-r2";
    }

    @if $ratio == 3 {
      $r: "-r3";
    }

    @for $i from 1 through length(concat.$base64-sprites) {
      %base64#{$r}-#{nth(nth(nth(concat.$base64, 4), $i), 7)} {
        @extend %base64;

        width: ceil(nth(nth(nth(concat.$base64, 4), $i), 5) / $ratio);
        height: ceil(nth(nth(nth(concat.$base64, 4), $i), 6) / $ratio);
        background-position: ceil(nth(nth(nth(concat.$base64, 4), $i), 3) / $ratio) ceil(nth(nth(nth(concat.$base64, 4), $i), 4) / $ratio);
        background-size: ceil(nth(concat.$base64, 1) / $ratio) ceil(nth(concat.$base64, 2) / $ratio);
      }
    }
  }
}</b>

---

<b class="t02">// _module.scss</b>
<b class="t02">// @extend %base64-{filename} // 100%</b>
<b class="t02">// @extend %base64-r2-{filename} // 50%</b>
<b class="t02">// @extend %base64-r3-{filename} //33.3%</b>

.bar01 { @extend %base64-<b class="t01">yellow90</b>; }
.bar02 { @extend %base64-r2-<b class="t01">yellow90</b>; }
.bar03 { @extend %base64-r3-<b class="t01">yellow90</b>; }
.bar04 { @extend %base64-<b class="t01">yellow60</b>; }
.bar05 { @extend %base64-r2-<b class="t01">yellow60</b>; }
.bar06 { @extend %base64-r3-<b class="t01">yellow60</b>; }
div { @extend %hide-text; }

---

<b class="t02">// project.css</b>

<b class="t03">.bar04, .bar01, .bar05, .bar02, .bar06, .bar03 {
  background: url(data:image/png;base64,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); }

.bar04 {
  width: 60px;
  height: 60px;
  background-position: -96px 0px;
  background-size: 156px 90px; }

.bar01 {
  width: 90px;
  height: 90px;
  background-position: 0px 0px;
  background-size: 156px 90px; }

.bar05 {
  width: 30px;
  height: 30px;
  background-position: -48px 0px;
  background-size: 78px 45px; }

.bar02 {
  width: 45px;
  height: 45px;
  background-position: 0px 0px;
  background-size: 78px 45px; }

.bar06 {
  width: 20px;
  height: 20px;
  background-position: -32px 0px;
  background-size: 52px 30px; }

.bar03 {
  width: 30px;
  height: 30px;
  background-position: 0px 0px;
  background-size: 52px 30px; }</b>

---

<b class="t02">// html</b>

&lt;div class="bar01"&gt;90&lt;/div&gt;
&lt;div class="bar02"&gt;90&lt;/div&gt;
&lt;div class="bar03"&gt;90&lt;/div&gt;
&lt;div class="bar04"&gt;60&lt;/div&gt;
&lt;div class="bar05"&gt;60&lt;/div&gt;
&lt;div class="bar06"&gt;60&lt;/div&gt;
</pre>

      <div>
        <div class="bar01">90</div>
        <div class="bar02">90</div>
        <div class="bar03">90</div>
        <div class="bar04">60</div>
        <div class="bar05">60</div>
        <div class="bar06">60</div>
      </div>

      <pre>

---

<b class="t02">// run</b>

$ npm run i
$ npm run l
</pre>
    </SwitchBox>

    <SwitchBox title="node package (ex: stylelint)">
      <pre>
<b class="t01">$ npm install stylelint stylelint-config-standard stylelint-scss --save-dev</b>

---

project/
│
├ node_modules/
├ <b class="t01">.stylelintignore</b>
├ <b class="t01">.stylelintrc.json</b>
├ <b class="t01">package.json</b>
└ sass/

---

<b class="t02">// package.json</b>

<b class="t01">{
  "name": "project",
  "version": "1.0.1",
  "description": "",
  "main": "",
  "author": "",
  "license": "",
  "scripts": {
  "lint:css": "npx stylelint sass"
  },
  "devDependencies": {
  "stylelint": "",
  "stylelint-config-standard": "",
  "stylelint-scss": "",
  }
}</b>

---

<b class="t02">// .stylelintignore</b>

<b class="t01">sass/make/
sass/src/lib/_reset.scss
*.css
*.vue
</b>

---

<b class="t02">// .stylelintrc.json</b>

<b class="t01">{
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    "indentation": 2,
    "at-rule-no-unknown": null,
    "color-named": "never",
    "declaration-no-important": true,
    "scss/at-rule-no-unknown": true,
    "shorthand-property-no-redundant-values": true,
    "value-no-vendor-prefix": true,
    "no-descending-specificity": null
  }
}</b>

---

<b class="t02">// run</b>

$ npm run lint:css
</pre>
    </SwitchBox>

    <SwitchBox title="node package (ex: autoprefixer)">
      <pre>
<b class="t01">$ npm install autoprefixer postcss-cli --save-dev</b>

---

project/
│
├ dest/
└ node_modules/

---

<b class="t02">// package.json</b>

<b class="t01">{
  "name": "project",
  "version": "1.0.1",
  "description": "",
  "main": "",
  "author": "",
  "license": "",
  "scripts": {
  "autoprefix": "npx postcss dest/*.css --use autoprefixer -d dest/ --no-map"
  },
  "devDependencies": {
  "autoprefixer": "",
  "postcss-cli": ""
  }
}</b>

---

<b class="t02">// run</b>

$ npm run autoprefix
</pre>
    </SwitchBox>

    <SwitchBox title="node package (ex: imagemin)">
      <pre>
<b class="t01">$ npm install imagemin imagemin-mozjpeg imagemin-pngquant --save-dev</b>

---

project/
│
├ .lib/
│   <b class="t01">└ imagemin.js</b>
├ <b class="t03">img/</b>
├ <b class="t01">img_org/</b>
├ node_modules/
└ <b class="t01">package.json</b>

---

<b class="t02">// package.json</b>

<b class="t01">{
  "name": "project",
  "version": "1.0.1",
  "description": "",
  "main": "",
  "author": "",
  "license": "",
  "scripts": {
  "imagemin": "cp -r img_org/* img &amp;&amp; node .lib/imagemin.js"
  },
  "devDependencies": {
  "imagemin": "",
  "imagemin-mozjpeg": "",
  "imagemin-pngquant": ""
  }
}</b>

---

<b class="t02">// .lib/imagemin.js</b>

<b class="t01">const pkg = require(`../package.json`);
const imagemin = require(`imagemin`);
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require(`imagemin-pngquant`);
const fs = require(`fs`);
const async = require(`async`);

const folder = `img/`;

const getFolders = (folder) =&gt; {
  fs.readdir(folder, (err, files) =&gt; {
    if (err) {
      throw err;
    }
    async.each(files, (i) =&gt; {
      if (!(/\./.test(i))) {
        getFolders(`${folder}${i}/`);
        imageMin(`${folder}${i}/`);
      }
    });
  });
}

const imageMin = (folder) =&gt; {
  imagemin([`${folder}*.png`, `${folder}*.jpg`], folder, {
    plugins: [
      imageminMozjpeg({quality: 60}),
      imageminPngquant({quality: `65-80`})
    ]
  }).then(files =&gt; {
    console.log(`imagemin: -&gt; ${folder}`);
  });
}

getFolders(folder);
imageMin(folder);</b>

---

<b class="t02">// run</b>

$ npm run imagemin
</pre>
    </SwitchBox>

    <SwitchBox title="node package (ex: browser-sync, watch)">
      <pre>
<b class="t01">$ npm install browser-sync sass watch --save-dev</b>

---

project/
│
├ .lib/
│   <b class="t01">└ browser-sync.sh</b>
├ dest/
│   <b class="t03">├ project.css</b>
│   <b class="t03">└ project.js</b>
├ html/
├ img/
├ js/
├ node_modules/
├ <b class="t01">package.json</b>
└ sass/

---

<b class="t02">// package.json</b>

<b class="t01">{
  "name": "project",
  "version": "1.0.1",
  "description": "",
  "main": "",
  "author": "",
  "license": "",
  "scripts": {
  "make:js": "cat js/*.js &gt; dest/project.js",
  "make:css": "sass sass:dest",
  "watch:js": "watch 'npm run make:js' js/src/",
  "watch:sass": "watch 'npm run make:css' sass/src/mod/",
  "browser": "sh .lib/browser-sync.sh",
  "w": "npm run watch:js &amp; npm run watch:sass &amp; npm run browser"
  },
  "devDependencies": {
  "browser-sync": "",
  "sass": "",
  "watch": ""
  }
}</b>

---

<b class="t02">// .lib/browser-sync.sh</b>

<b class="t01">#!/bin/bash

pj_title=$(basename `pwd`)

browser-sync start --proxy 127.0.0.1:8888/${pj_title}/html/index.html --files './html/**/*.html,./html/**/*.php,./dest/**/*.css,./dest/**/*.js'

exit 0</b>

---

<b class="t02">// run</b>

<b class="t03">terminal 1</b>
<b class="t01">$ php -S 127.0.0.1:8888 -t={</b>workspace<b class="t01">}
<b class="t03">terminal 2</b>
$ cd {</b>project<b class="t01">}
$ npm run w</b>
</pre>
    </SwitchBox>

    <SwitchBox title="node package (ex: webpack)">
      <pre>
<b class="t01">$ npm install @babel/core @babel/preset-env babel-loader css-loader eslint eslint-loader eslint-config-prettier eslint-plugin-prettier prettier license-info-webpack-plugin sass sass-loader style-loader vue vue-loader vue-template-compiler webpack webpack-cli --save-dev</b>

---

project/
│
├ <b class="t01">.eslintrc.js</b>
├ <b class="t01">.prettierrc</b>
├ css/
├ dest/
│   <b class="t03">└ project.js</b>
├ html/
├ img/
├ <b class="t01">js/</b>
│   <b class="t01">└ src/</b>
│     <b class="t01">├ fnc/</b>
│     <b class="t01">├ lib/</b>
│     <b class="t01">└ main.js</b>
├ node_modules/
├ <b class="t01">package.json</b>
├ sass/
└ <b class="t01">webpack.config.js</b>

---

<b class="t02">// package.json</b>

<b class="t01">{
  "name": "project",
  "version": "",
  "description": "",
  "main": "",
  "author": "",
  "license": "",
  "scripts": {
    "make:js": "npm run lint:js && webpack --mode development",
    "make:js:r": "npm run lint:js && webpack --mode production",
    "lint:js": "npx prettier --write js",
    "l": "npm run make:js",
    "r": "npm run make:js:r",
  },
  "devDependencies": {
    "@babel/core": "",
    "@babel/preset-env": "",
    "babel-loader": "",
    "css-loader": "",
    "eslint": "",
    "eslint-config-prettier": "",
    "eslint-loader": "",
    "eslint-plugin-prettier": "",
    "license-info-webpack-plugin": "",
    "sass": "",
    "prettier": "",
    "sass-loader": "",
    "style-loader": "",
    "vue": "",
    "vue-loader": "",
    "vue-template-compiler": "",
    "webpack": "",
    "webpack-cli": ""
  }
}</b>

---

<b class="t02">// .eslintrc.js</b>

<CopyCode><b class="t01">module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jquery: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'no-console': 1,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
};</b>
</CopyCode>

---

<b class="t02">// .prettier</b>

<CopyCode><b class="t01">{
  "printWidth": 120,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "es5",
  "semi": true,
  "parser": "typescript"
}</b>
</CopyCode>

---

<b class="t02">// webpack.config.js</b>

<CopyCode><b class="t01">const path = require('path');
const LicenseInfoWebpackPlugin = require('license-info-webpack-plugin').default;
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {

  entry: {
    'temp_npm': './js/src/main.js',
  },

  output: {
    path: path.join(__dirname, 'dest'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /\/node_modules\//,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                ],
              ],
            },
          },
        ],
      },
      {
        loader: 'eslint-loader',
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        options: {
          configFile: '.eslintrc.js',
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new LicenseInfoWebpackPlugin({
      glob: '{LICENSE,license,License}*',
    }),
    new VueLoaderPlugin(),
  ],

  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },

};</b>
</CopyCode>

---

<b class="t02">// run</b>

$ npm run l
$ npm run r
</pre>
    </SwitchBox>

    <SwitchBox title="temp_npm.zip">
      <pre>Download and Unzip temp_npm.zip(45KB).

---

temp_npm/
│
├ README.md
├ .eslintrc.js
├ .prettierrc
├ .gitignore
├ .nvmrc
├ .stylelintignore
├ .stylelintrc.json
├ .lib/
├ base64/
│  ├ yellow60.png
│  └ yellow90.png
├ dest/
├ html/
├ img/
├ img_org/
├ js/
├ package.json
├ webpack.config.js
├ sass/
│  ├ temp_npm.scss
│  ├ _conf.scss
│  └ src/
│    ├ mod/
│    │   ├ _base.scss
│    │   └ _module.scss
│    └ lib/
│      ├ _reset.scss
│      └ _utility.scss
└ sprite/
  ├ en/
  │   ├ 120.png
  │   └ 150.png
  └ ja/
    ├ 120.png
    └ 150.png

---

<b class="t02">// npm install</b>

<b class="t01">$ npm install @babel/core @babel/preset-env babel-loader autoprefixer browser-sync css-loader datauri eslint eslint-config-prettier eslint-loader eslint-plugin-prettier imagemin imagemin-mozjpeg imagemin-pngquant json-minify license-info-webpack-plugin sass postcss-cli prettier replace sass-loader spritesmith style-loader stylelint stylelint-config-standard stylelint-scss vue vue-loader vue-template-compiler watch webpack webpack-cli --save-dev</b>

---

<b class="t02">// package.json</b>

<CopyCode>{
  "name": "temp_npm",
  "version": "0.0.5",
  "description": "",
  "author": "",
  "engines": {
    "node": "12.16.2",
    "npm": "6.14.4"
  },
  "scripts": {
    "replace": "node .lib/replace.js",
    "make:js": "npm run lint:js &amp;&amp; webpack --mode development",
    "make:js:r": "npm run lint:js &amp;&amp; webpack --mode production",
    "clean:scss": "sh .lib/clean-scss.sh",
    "clean:ds": "find . -name '.DS_Store' -print -exec rm {} ';'",
    "clean": "npm run clean:scss &amp; npm run clean:ds",
    "base64": "node .lib/base64.js",
    "sprite": "node .lib/spritesmith.js",
    "imagemin": "cp -r img_org/* img &amp;&amp; node .lib/imagemin.js",
    "concat:scss": "sh .lib/concat-scss.sh",
    "lint:css": "npx stylelint sass",
    "make:css": "npm run lint:css &amp;&amp; npm run concat:scss &amp;&amp; sass sass:dest",
    "make:css:r": "npm run lint:css &amp;&amp; npm run concat:scss &amp;&amp; sass sass:dest --style=compressed",
    "autoprefix": "npx postcss dest/*.css --use autoprefixer -d dest/ --no-map",
    "lint:js": "npx prettier --write js",
    "watch:js": "watch 'npm run make:js' js/src/",
    "watch:sass": "watch 'npm run make:css' sass/src/mod/",
    "browser": "sh .lib/browser-sync.sh",
    "i": "npm run replace &amp;&amp; npm run clean &amp;&amp; npm run base64 &amp;&amp; npm run sprite &amp;&amp; npm run imagemin",
    "l": "npm run replace &amp;&amp; npm run make:js &amp;&amp; npm run make:css &amp;&amp; npm run autoprefix",
    "w": "npm run watch:js &amp; npm run watch:sass &amp; npm run browser",
    "r": "npm run make:js:r &amp;&amp; npm run make:css:r &amp;&amp; npm run autoprefix"
  },
  "devDependencies": {
    "@babel/core": "^7.12.10",
    "@babel/preset-env": "^7.12.11",
    "autoprefixer": "^9.7.6",
    "babel-loader": "^8.2.2",
    "browser-sync": "^2.26.7",
    "css-loader": "^3.6.0",
    "datauri": "^2.0.0",
    "eslint": "^4.19.1",
    "eslint-config-prettier": "^7.1.0",
    "eslint-loader": "^2.2.1",
    "eslint-plugin-prettier": "^3.3.0",
    "imagemin": "^5.3.1",
    "imagemin-mozjpeg": "^8.0.0",
    "imagemin-pngquant": "^5.1.0",
    "json-minify": "^1.0.0",
    "license-info-webpack-plugin": "^1.1.0",
    "postcss-cli": "^7.1.1",
    "prettier": "^2.2.1",
    "replace": "^1.2.0",
    "sass": "^1.32.8",
    "sass-loader": "^8.0.2",
    "spritesmith": "^3.4.0",
    "style-loader": "^1.3.0",
    "stylelint": "^13.3.3",
    "stylelint-config-standard": "^20.0.0",
    "stylelint-scss": "^3.17.2",
    "vue": "^2.6.12",
    "vue-loader": "^15.9.6",
    "vue-template-compiler": "^2.6.12",
    "watch": "^1.0.2",
    "webpack": "^4.44.2",
    "webpack-cli": "^3.3.12"
  }
}
</CopyCode>

---

<b class="t02">// README.md</b>

<CopyCode># project information

## php server

```
$ php -S 127.0.0.1:8888 -t={workspace}
```

## install package

```
$ npm install
```

## run scripts

```
$ npm run l <b class="t02">// compile css, js</b>

$ npm run i <b class="t02">// make sprite, base64, imagemin</b>
$ npm run w <b class="t02">// watch, livereload</b>
$ npm run r <b class="t02">// minify css, js</b>
```


## imagemin usage

```
project/
│
├ img/  <b class="t02">// <- don't touch</b>
└ img_org/  <b class="t02">// <- put images here</b>
```


## sprite usage

```
project/
│
├ html/
├ sass/
│  ├ project.scss
│  ├ _conf.scss
│  └ src/
│    ├ mod/
│    │   ├ _base.scss
│    │   └ _module.scss
│    └ lib/
│      ├ _reset.scss
│      └ _utility.scss
└ sprite/
  ├ {foldername}/
  │   ├ {filename}.png
  │   └ {filename}.png
  └ {foldername}/
    ├ {filename}.png
    └ {filename}.png

// scss
// @extend %spr-{foldername}-{filename} // 100%
// @extend %spr-r2-{foldername}-{filename} // 50%
// @extend %spr-r3-{foldername}-{filename} // 33.3%
```


## base64 usage

```
project/
│
├ base64/
│  ├ {filename}.png
│  └ {filename}.png
├ html/
└ sass/
   ├ project.scss
   ├ _conf.scss
   └ src/
     ├ mod/
     │   ├ _base.scss
     │   └ _module.scss
     └ lib/
       ├ _reset.scss
       └ _utility.scss

// scss
// @extend %base64-{filename} // 100%
// @extend %base64-r2-{filename} // 50%
// @extend %base64-r3-{filename} // 33.3%
```
</CopyCode>
</pre>
    </SwitchBox>
  </PreCodes>
</template>
