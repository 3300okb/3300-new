<script lang="ts">
export const metadata = {
  updateDate: '2017/03/21',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="ajax-popup-hash"
    sample-url="/sample/html/ajax-popup-hash.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre>// data.json

<CopyCode><b class="t03">{
  "A-1": {
    "phot": "A-1.png",
    "name": {
      "ja": "名前1名前1名前1",
      "en": "Name1Name1Name1"
    },
    "titl": {
      "ja": "タイトル1タイトル1タイトル1タイトル1タイトル1タイトル1タイトル1タイトル1タイトル1",
      "en": "Title1Title1Title1Title1Title1Title1Title1Title1Title1Title1Title1Title1Title1Title1"
    },
    "prof": {
      "ja": "プロフィール1プロフィール1プロフィール1&lt;br&gt;プロフィール1プロフィール1プロフィール1",
      "en": "profile1profile1profile1profile1profile1profile1profile1profile1profile1profile1"
    },
    "desc": {
      "ja": "詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1詳細1",
      "en": "description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1description1"
    },
    "prev": "",
    "next": "A-2",
    "hall": "HALL A",
    "time": "13:30 - 14:10",
    "movi": "*****************************************",
    "slid": "*****************************************"
  },

  "A-2": {
    "phot": "A-2.png",
    "name": {
      "ja": "名前2名前2名前2",
      "en": "Name2Name2Name2"
    },
    "titl": {
      "ja": "タイトル2タイトル2タイトル2タイトル2タイトル2タイトル2タイトル2タイトル2タイトル2",
      "en": "Title2Title2Title2Title2Title2Title2Title2Title2Title2Title2Title2Title2Title2Title2"
    },
    "prof": {
      "ja": "プロフィール2プロフィール2プロフィール2&lt;br&gt;プロフィール2プロフィール2プロフィール2",
      "en": "profile2profile2profile2profile2profile2profile2profile2profile2profile2profile2"
    },
    "desc": {
      "ja": "詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2詳細2",
      "en": "description2description2description2description2description2description2description2description2description2description2description2description2description2description2description2description2description2description2description2description2description2description2description2description2"
    },
    "prev": "A-1",
    "next": "A-3",
    "hall": "HALL A",
    "time": "14:30 - 15:10",
    "movi": "*****************************************",
    "slid": "*****************************************"
  },

  "A-3": {
    "phot": "A-3.png",
    "name": {
      "ja": "名前3名前3名前3",
      "en": "Name3Name3Name3"
    },
    "titl": {
      "ja": "タイトル3タイトル3タイトル3タイトル3タイトル3タイトル3タイトル3タイトル3タイトル3",
      "en": "Title3Title3Title3Title3Title3Title3Title3Title3Title3Title3Title3Title3Title3Title3"
    },
    "prof": {
      "ja": "プロフィール3プロフィール3プロフィール3&lt;br&gt;プロフィール3プロフィール3プロフィール3",
      "en": "profile3profile3profile3profile3profile3profile3profile3profile3profile3profile3"
    },
    "desc": {
      "ja": "詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3詳細3",
      "en": "description3description3description3description3description3description3description3description3description3description3description3description3description3description3description3description3description3description3description3description3description3description3description3description3"
    },
    "prev": "A-2",
    "next": "B-1",
    "hall": "HALL A",
    "time": "14:30 - 15:10",
    "movi": "*****************************************",
    "slid": "*****************************************"
  },

  "B-1": {
    "phot": "B-1.png",
    "name": {
      "ja": "名前B1名前B1名前B1",
      "en": "NameB1NameB1NameB1"
    },
    "titl": {
      "ja": "タイトルB1タイトルB1タイトルB1タイトルB1タイトルB1タイトルB1タイトルB1タイトルB1タイトルB1",
      "en": "TitleB1TitleB1TitleB1TitleB1TitleB1TitleB1TitleB1TitleB1TitleB1TitleB1TitleB1TitleB1TitleB1TitleB1"
    },
    "prof": {
      "ja": "プロフィールB1プロフィールB1プロフィールB1&lt;br&gt;プロフィールB1プロフィールB1プロフィールB1",
      "en": "profileB1profileB1profileB1profileB1profileB1profileB1profileB1profileB1profileB1profileB1"
    },
    "desc": {
      "ja": "詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1詳細B1",
      "en": "descriptionB1descriptionB1descriptionB1descriptionB1descriptionB1descriptionB1descriptionB1descriptionB1descriptionB1descriptionB1descriptionB1descriptionB1descriptionB1descriptionB1descriptionB1descriptionB1descriptionB1descriptionB1descriptionB1descriptionB1descriptionB1descriptionB1descriptionB1descriptionB1"
    },
    "prev": "A-3",
    "next": "B-2",
    "hall": "HALL B",
    "time": "11:30 - 12:10",
    "movi": "*****************************************",
    "slid": "*****************************************"
  },

  "B-2": {
    "phot": "B-2.png",
    "name": {
      "ja": "名前B2名前B2名前B2",
      "en": "NameB2NameB2NameB2"
    },
    "titl": {
      "ja": "タイトルB2タイトルB2タイトルB2タイトルB2タイトルB2タイトルB2タイトルB2タイトルB2タイトルB2",
      "en": "TitleB2TitleB2TitleB2TitleB2TitleB2TitleB2TitleB2TitleB2TitleB2TitleB2TitleB2TitleB2TitleB2TitleB2"
    },
    "prof": {
      "ja": "プロフィールB2プロフィールB2プロフィールB2&lt;br&gt;プロフィールB2プロフィールB2プロフィールB2",
      "en": "profileB2profileB2profileB2profileB2profileB2profileB2profileB2profileB2profileB2profileB2"
    },
    "desc": {
      "ja": "詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2詳細B2",
      "en": "descriptionB2descriptionB2descriptionB2descriptionB2descriptionB2descriptionB2descriptionB2descriptionB2descriptionB2descriptionB2descriptionB2descriptionB2descriptionB2descriptionB2descriptionB2descriptionB2descriptionB2descriptionB2descriptionB2descriptionB2descriptionB2descriptionB2descriptionB2descriptionB2"
    },
    "prev": "B-1",
    "next": "",
    "hall": "HALL B",
    "time": "15:30 - 16:10",
    "movi": "*****************************************",
    "slid": "*****************************************"
  }
}</b>
</CopyCode>


// app

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;html lang="ja"&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"&gt;
&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"&gt;&lt;/script&gt;</b>

&lt;script&gt;
jQuery(function($){

  var $data = {
    id: $(".id"),
    name: $(".name"),
    titl: $(".titl"),
    prof: $(".prof"),
    desc: $(".desc"),
    prev: $(".prev a"),
    next: $(".next a"),
    phot: $(".phot img"),
    hall: $(".hall"),
    time: $(".time"),
    movi: $(".movi"),
    slid: $(".slid")
  }

  var $vL = $(".viewLayer");


  <b class="t02">// get lang</b>
  var lang = $("html").attr("lang");

  <b class="t02">// get json</b>
  var jsonData;
  <b class="t01">$.ajax({
    type: 'GET',
    url: '</b><b class="t03">data.json</b><b class="t01">',
    dataType: 'json',
    <b class="t02">// cache: false, // キャッシュしない。バージョン(2?)によって効かない場合があるので注意。</b>
    success: function (<b class="t03">json</b>) {</b>
      <b class="t03">jsonData = json;</b>
      (window.location.hash) ? getHash() : null;
    <b class="t01">},
    error: function () {</b>
      alert('Transmition error. Please try again.');
    <b class="t01">}
  });</b>

  <b class="t02">// event click open or nav</b>
  $(".open a, .nav a").on("click", function (e) {
    var <b class="t03">id</b> = e.<b class="t04">srcElement.dataset.id</b>;
    getData(id, <b class="t03">jsonData</b>);
    addHash(id);
    return false;
  });

  <b class="t02">// event click close</b>
  $(".close a").on("click", function () {
    $vL.fadeOut(100);
    clearHash();
    return false;
  });

  <b class="t02">// get data</b>
  function getData(id, <b class="t03">jsonData</b>){
    $data.id.html(<b class="t03">id</b>);
    $data.name.html(<b class="t03">jsonData[id].name[lang])</b>);
    $data.titl.html(<b class="t03">jsonData[id].titl[lang])</b>);
    $data.prof.html(<b class="t03">jsonData[id].prof[lang])</b>);
    $data.desc.html(<b class="t03">jsonData[id].desc[lang])</b>);
    $data.prev.attr("data-id", <b class="t03">jsonData[id].prev</b>);
    $data.next.attr("data-id", <b class="t03">jsonData[id].next</b>);
    $data.phot.attr("src", <b class="t03">jsonData[id].phot</b>);
    $data.hall.html(<b class="t03">jsonData[id].hall</b>);
    $data.time.html(<b class="t03">jsonData[id].time</b>);
    $data.movi.html(<b class="t03">jsonData[id].movi</b>);
    $data.slid.html(<b class="t03">jsonData[id].slid</b>);

    (jsonData[id].prev === "") ? $data.prev.hide() : $data.prev.show();
    (jsonData[id].next === "") ? $data.next.hide() : $data.next.show();

    $vL.fadeIn(100);
  }

  <b class="t02">// add hash</b>
  function addHash(id){
    window.location.hash = '#' + id;
  }

  <b class="t02">// clear hash</b>
  function clearHash() {
    try {
      var splitResult = window.location.href.split("#");
      history.replaceState(null, null, splitResult[0]);
    } catch(e) {
      window.location.hash = "";
    }
  }

  <b class="t02">// get hash onload</b>
  function getHash() {
    var id = window.location.hash.replace(/#/,'');
    if(/^A-[1-3]$/.test(id) || /^B-[1-2]$/.test(id)) {
      getData(id, <b class="t03">jsonData</b>);
    }
  };
});
&lt;/script&gt;

<b class="t02">&lt;style&gt;
html, body {margin: 0; padding: 0; width: 100%; height: 100%; position: relative;}
div {box-sizing: border-box;}
.open {margin: 0; padding: 0; float: right;}
.open li {list-style: none;}
.open a {display: block; width: 60px; height: 60px; border: #999 1px dotted;}
.viewLayer {display: none; margin: 0; width: 100%; height: 100%; position: absolute; top: 0; left: 0;}
.viewLayerInner {position: relative; padding: 30px; width: 100%; height: 100%; box-sizing: border-box;}
.overlay {width: 100%; height: 100%; min-height: 1200px; position: absolute; top: 0; left: 0; background: #000; opacity: 0.5; box-sizing: border-box;}
.dataBox {width: auto; max-width: 700px; min-height: 700px; position: relative; margin: 0 auto; padding: 30px; background: #fff; word-break: break-word;}
.close {position: absolute; top: 0; right: 20px;}
.phot img {width: 100px; height: 100px;}
.navBox {position: relative; height: 120px; margin-top: 24px; text-align: center;}
.navBox .prev {float: left; position: absolute; top: 20px; left: 0;}
.navBox .next {float: left; position: absolute; top: 20px; right: 0;}
&lt;/style&gt;</b>

&lt;ul class="open"&gt;
&lt;li&gt;&lt;a href="#" <b class="t04">data-id="A-1"</b>&gt;A-1&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#" <b class="t04">data-id="A-2"</b>&gt;A-2&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#" <b class="t04">data-id="A-3"</b>&gt;A-3&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#" <b class="t04">data-id="B-1"</b>&gt;B-1&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#" <b class="t04">data-id="B-2"</b>&gt;B-2&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;

&lt;div class="viewLayer"&gt;
&lt;div class="viewLayerInner"&gt;
&lt;div class="overlay"&gt;
&lt;/div&gt;
&lt;div class="dataBox"&gt;
&lt;div class="navBox"&gt;
&lt;p class="phot"&gt;&lt;img src="" alt&gt;&lt;/p&gt;
&lt;p class="nav prev"&gt;&lt;a href="#" <b class="t04">data-id=""</b>&gt;prev&lt;/a&gt;&lt;/p&gt;
&lt;p class="nav next"&gt;&lt;a href="#" <b class="t04">data-id=""</b>&gt;next&lt;/a&gt;&lt;/p&gt;
&lt;/div&gt;
&lt;p class="name"&gt;&lt;/p&gt;
&lt;p class="id"&gt;&lt;/p&gt;
&lt;p class="titl"&gt;&lt;/p&gt;
&lt;p class="prof"&gt;&lt;/p&gt;
&lt;p class="hall"&gt;&lt;/p&gt;
&lt;p class="time"&gt;&lt;/p&gt;
&lt;p class="desc"&gt;&lt;/p&gt;
&lt;p class="movi"&gt;&lt;/p&gt;
&lt;p class="slid"&gt;&lt;/p&gt;
&lt;/div&gt;
&lt;p class="close"&gt;&lt;a href="#"&gt;close&lt;/a&gt;&lt;p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;

&lt;/html&gt;
</CopyCode>
</pre>
  </PreCodes>
</template>
