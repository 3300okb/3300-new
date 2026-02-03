<script lang="ts">
export const metadata = {
  updateDate: '2015/09/10',
}
</script>

<script setup lang="ts">
import SwitchBox from '@/components/SwitchBox.vue'
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader title="grunt" :update-date="metadata.updateDate" />

  <PreCodes>
    <SwitchBox title="install">
      <pre>
<b class="t01">http://nodejs.org/</b>   <b class="t02">// node.js インストール</b>
<b class="t01">node -v</b>  <b class="t02">// node.js バージョン確認</b>
<b class="t01">npm -v</b>  <b class="t02">// npm(node package manager: https://www.npmjs.org/) バージョン確認</b>

<b class="t01">sudo npm install -g grunt-cli</b>  <b class="t02">// grunt(http://gruntjs.com/) インストール</b>
<b class="t01">grunt -version</b>  <b class="t02">// grunt バージョン確認</b>
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
1) <b class="t01">mkdir</b> temp_grunt
2) <b class="t01">cd</b> temp_grunt
3) <b class="t01">npm init</b>  <b class="t02">// package.json 生成</b>

---

<b class="t01">temp_grunt</b>
└ <b class="t03">package.json</b>

---

<b class="t02">// package.json</b>
<b class="t03">{
  "name": "</b>temp_grunt<b class="t03">",
  "version": "0.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
  "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
  },
  "author": "",
  "license": "ISC"
}</b>

---

4) <b class="t01">npm install grunt --save-dev</b>
<b class="t02">// gruntモジュールのインストールと --save-dev でpackage.jsonの更新</b>

---

temp_grunt
├ <b class="t03">node_modules/</b>
└ <b class="t03">package.json</b>

---

<b class="t02">// package.json</b>
{
  "name": "temp_grunt",
  "version": "0.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
  "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
  },
  "author": "",
  "license": "ISC",
  <b class="t03">"devDependencies": {
  "grunt": "~0.4.5"
  }</b>
}
</pre>
    </SwitchBox>

    <SwitchBox title="Gruntfile.js">
      <pre>
5) <b class="t01">vi Gruntfile.js</b>  <b class="t02">// Gruntfile.js 作成</b>

---

temp_grunt
├ <b class="t01">Gruntfile.js</b>
├ node_modules/
└ package.json

---

<b class="t02">// Gruntfile.js</b>

<b class="t01">module.exports = function(grunt) {
  grunt.initConfig({
    <b class="t02">// "pkg"でpackage.jsonを参照する</b>
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.registerTask('default', '', function() {</b>
    console.log('The task of the default was done.');
  <b class="t01">});</b>
  <b class="t01">grunt.registerTask('</b>typeA<b class="t01">', '', function() {</b>
    console.log('The task of the typeA was done.');
  <b class="t01">});
};</b>

---

<b class="t02">// タスクの実行</b>

<b class="t01">grunt</b> <b class="t02">(default)</b>
<b class="t02">-&gt;</b> <b class="t03">Running "default" task</b>
<b class="t02">-&gt;</b> The task of the default was done.
<b class="t02">-&gt;</b>
<b class="t02">-&gt;</b> <b class="t03">Done, without errors.</b>

<b class="t01">grunt</b> typeA
<b class="t02">-&gt;</b> <b class="t03">Running "typeA" task</b>
<b class="t02">-&gt;</b> The task of the typeA was done.
<b class="t02">-&gt;</b>
<b class="t02">-&gt;</b> <b class="t03">Done, without errors.</b>
</pre>
    </SwitchBox>

    <SwitchBox title="plugins">
      <pre>
<b class="t01">npm install grunt-contrib --save-dev</b>
<b class="t02">// grunt-contrib-***** を個別にインストールすることも可能</b>
<b class="t02">// プラグインリスト -> http://gruntjs.com/plugins</b>

---

temp_grunt
├ <b class="t01">Gruntfile.js</b>
├ <b class="t03">node_modules/</b>
└ <b class="t03">package.json</b>

---

<b class="t02">// package.json</b>

{
  "name": "temp_grunt",
  "version": "0.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
  "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
  "grunt": "~0.4.5"
  <b class="t03">"grunt-contrib-symlink": "~0.3.0",
  "grunt-contrib-copy": "~0.5.0",
  "grunt-contrib-concat": "~0.4.0",
  "grunt-contrib-clean": "~0.5.0",
  "grunt-contrib-compass": "~0.7.2",
  "grunt-contrib-htmlmin": "~0.2.0",
  "grunt-contrib-sass": "~0.7.3",
  "grunt-contrib-watch": "~0.6.1",
  "grunt-contrib-uglify": "~0.4.0",
  "grunt-contrib-cssmin": "~0.9.0",
  "grunt-contrib-csslint": "~0.2.0",
  "grunt-contrib-handlebars": "~0.8.0",
  "grunt-contrib-qunit": "~0.4.0",
  "grunt-contrib-jst": "~0.6.0",
  "grunt-contrib-requirejs": "~0.4.4",
  "grunt-contrib-connect": "~0.7.1",
  "grunt-contrib-jade": "~0.11.0",
  "grunt-contrib-stylus": "~0.15.1",
  "grunt-contrib-compress": "~0.8.0",
  "grunt-contrib-nodeunit": "~0.3.3",
  "grunt-contrib-jshint": "~0.10.0",
  "grunt-contrib-coffee": "~0.10.1",
  "grunt-contrib-jasmine": "~0.6.5",
  "grunt-contrib-imagemin": "~0.7.1",
  "grunt-contrib-less": "~0.11.2",
  "grunt-contrib-yuidoc": "~0.5.2",
  "grunt-contrib": "~0.11.0"</b>
  }
}

---

<b class="t02">// Gruntfile.js</b>

module.exports = function(grunt) {
  grunt.initConfig({
    <b class="t01">pluginName: {
      ・・・
    },
    pluginName: {
      ・・・
    }</b>
  });

  <b class="t01">grunt.loadNpmTasks('grunt-contrib-pluginName');</b>
  <b class="t01">grunt.loadNpmTasks('grunt-contrib-pluginName');</b>
  <b class="t02">// 以下、a)でインストールして、b)のように書けば、上記の一括指定ができる</b>
  <b class="t02">// a) npm i --save-dev load-grunt-tasks</b>
  <b class="t02">// b) require('load-grunt-tasks')(grunt, {pattern: ['grunt-contrib-*', 'grunt-shell']});</b>

  grunt.registerTask('default', <b class="t01">['pluginName','pluginName']</b>);
};
</pre>
    </SwitchBox>

    <SwitchBox title="example">
      <pre>
temp_grunt
├ Gruntfile.js
├ base64/
├ config.rb
├ css/
├ html/
├ img/
├ js/
├ jsmod/
├ node_modules/
├ package.json
├ sass/
└ sprite/

---

<b class="t02">// config.rb</b>

<CopyCode>http_path = "/"
css_dir = "css"
sass_dir = "sass"
images_dir = "/"
javascripts_dir = "js"
generated_images_dir = "img"
cache = false
output_style = (environment == :production) ? :compressed : :expanded
relative_assets = true
line_comments = (environment == :production) ? false : true
</CopyCode>

---

<b class="t02">// package.json</b>

<CopyCode>{
  "name": "temp_grunt",
  "version": "0.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
  "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
  },
  "repository": {
  "type": "git",
  "url": "[repository]"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
  "grunt": "~0.4.5",
  "load-grunt-tasks": "~0.5.0",
  "grunt-contrib-<b class="t01">jshint</b>": "~0.10.0",
  "grunt-contrib-<b class="t01">concat</b>": "~0.4.0",
  "grunt-contrib-<b class="t01">uglify</b>": "~0.5.0",
  "grunt-contrib-<b class="t01">compass</b>": "~0.8.0"
  }
}
</CopyCode>

---

<b class="t02">// Gruntfile.js</b>

<CopyCode>module.exports = function(grunt) {

  grunt.initConfig({

    <b class="t02">// for valiable</b>
    pkg: grunt.file.readJSON('package.json'),


    <b class="t02">// js: validate</b>
    <b class="t01">jshint</b>: {
      beforeconcat: 'jsmod/mod/**/*.js'
    },

    <b class="t02">// js: concat</b>
    <b class="t01">concat</b>: {
      dist:
        src: [
          'jsmod/lib/**/zepto-*.js',
          'jsmod/lib/**/*.js',
          '!jsmod/lib/**/jquery-*.js'
          'jsmod/src/**/*.js'
        ],
        dest: 'js/<%= pkg.name %>.js'
      }
    },

    <b class="t02">// js: minify</b>
    <b class="t01">uglify</b>: {
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'js/<%= pkg.name %>.js'
      }
    },

    <b class="t02">// compass config</b>
    <b class="t01">compass</b>: {
      test: {
        options: {
          config: 'config.rb'
        }
      },
      release: {
        options: {
          config: 'config.rb',
          environment: 'production'
        }
      }
    },

  });


  require('load-grunt-tasks')(grunt, {pattern: ['grunt-contrib-*', 'grunt-shell']});

  grunt.registerTask('<b class="t01">default</b>', ['<b class="t01">jshint</b>', '<b class="t01">concat</b>', '<b class="t01">compass</b>:test']);
  <b class="t02">// test用タスク - sassコンパイルはexpanded</b>
  grunt.registerTask('<b class="t01">r</b>', ['<b class="t01">jshint</b>', '<b class="t01">concat</b>', '<b class="t01">uglify</b>', '<b class="t01">compass</b>:release']);
  <b class="t02">// release用タスク - sassコンパイルはcompressed, jsとcssはminify</b>

};
</CopyCode>

---

<b class="t02">// タスクの実行(test)</b>

<b class="t01">grunt</b> <b class="t02">(default)</b>
<b class="t02">-&gt;</b>
<b class="t02">-&gt;</b>Running "<b class="t01">jshint</b>:beforeconcat" (jshint) task
<b class="t02">-&gt;</b><b class="t03">&gt;&gt; 2 files lint free.</b>
<b class="t02">-&gt;</b>
<b class="t02">-&gt;</b>Running "<b class="t01">concat</b>:dist" (concat) task
<b class="t02">-&gt;</b><b class="t03">File js/temp_grunt.js created.</b>
<b class="t02">-&gt;</b>
<b class="t02">-&gt;</b>Running "<b class="t01">compass</b>:dist" (compass) task
<b class="t02">-&gt;</b>   <b class="t03">create img/sprite/ja-***********.png</b>
<b class="t02">-&gt;</b>   <b class="t03">create img/sprite/en-***********.png</b>
<b class="t02">-&gt;</b>   <b class="t03">create css/temp_grunt.css (0.231s)</b>
<b class="t02">-&gt;</b><b class="t03">Compilation took 0.232s</b>
<b class="t02">-&gt;</b>
<b class="t02">-&gt;</b>Done, without errors.

---

<b class="t02">// タスクの実行(release)</b>

<b class="t01">grunt</b> r
<b class="t02">-&gt;</b>
<b class="t02">-&gt;</b>Running "<b class="t01">jshint</b>:beforeconcat" (jshint) task
<b class="t02">-&gt;</b><b class="t03">&gt;&gt; 2 files lint free.</b>
<b class="t02">-&gt;</b>
<b class="t02">-&gt;</b>Running "<b class="t01">concat</b>:dist" (concat) task
<b class="t02">-&gt;</b><b class="t03">File js/temp_grunt.js created.</b>
<b class="t02">-&gt;</b>
<b class="t02">-&gt;</b>Running "<b class="t01">uglify</b>:dist" (uglify) task
<b class="t02">-&gt;</b><b class="t03">File js/temp_grunt.js created: 56.1 kB → 25.18 kB</b>
<b class="t02">-&gt;</b>
<b class="t02">-&gt;</b>Running "<b class="t01">compass</b>:release" (compass) task
<b class="t02">-&gt;</b>   <b class="t03">create img/sprite/ja-***********.png</b>
<b class="t02">-&gt;</b>   <b class="t03">create img/sprite/en-***********.png</b>
<b class="t02">-&gt;</b>   <b class="t03">create css/temp_grunt.css (0.214s)</b>
<b class="t02">-&gt;</b><b class="t03">Compilation took 0.215s</b>
<b class="t02">-&gt;</b>
<b class="t02">-&gt;</b>Done, without errors.
</pre>
    </SwitchBox>

    <SwitchBox title="temp_grunt.zip">
      <pre>temp_grunt
├ README
├ Gruntfile.js
├ base64/
├ config.rb
├ css/
├ html/
├ img/
├ js/
├ jsmod/
├ package.json
├ sass/
└ sprite/

---

<b class="t02">// README</b>

0) Introduce a virtual server to use php.
<a href="https://www.apachefriends.org/index.html" target="_blank">https://www.apachefriends.org/index.html</a>

1) Install "sass".
$ <b class="t01">sudo gem install sass</b>

2) Install "compass".
$ <b class="t01">sudo gem install compass</b>

3) Install "node.js".
<a href="http://nodejs.org/" target="_blank">http://nodejs.org/</a>

4) Install "grunt".
$ <b class="t01">sudo npm install -g grunt-cli</b>

5) Install "git".
<a href="http://git-scm.com/" target="_blank">http://git-scm.com/</a>

a) Download and Unzip temp_grunt.zip

b) Change label of folder name from '<b class="t03">temp_grunt</b>' to '<b class="t01">your_project_name</b>'.

c) Put this folder in your workspace.

workspace/
   └  <b class="t01">your_project_name/</b>

d) Enter top of this folder.

workspace/
   └  your_project_name/  <b class="t01">&lt;- current</b>

e) Build the git project.
your_project_name $ <b class="t01">git init</b>
your_project_name $ <b class="t01">git add -A</b>
your_project_name $ <b class="t01">git commit -m "first commit"</b>

f) Change label from '<b class="t03">temp_grunt</b>' to '<b class="t01">your_project_name</b>' in 'html/conf.html' and 'package.json'.
your_project_name $ <b class="t01">git grep -l temp_grunt | xargs sed -i '' -e 's/temp_grunt/your_project_name/g'</b>

g) Change name of scss file.
your_project_name $ <b class="t01">mv sass/temp_grunt.scss sass/your_project_name.scss</b>

h) Install node_modules.
your_project_name $ <b class="t01">sudo npm install</b>

i) Run grunt.
your_project_name $ <b class="t01">grunt</b>
</pre>
    </SwitchBox>
  </PreCodes>
</template>
