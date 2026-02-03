import{_ as b,b as o,P as g,a}from"./articles-css-D5wjhoRZ.js";import{d as f,c as d,o as p,g as l,w as e,a as t,h as n,F as c,e as w,p as W,i as En,f as An,k as E,b as q,q as I,t as B,s as Cn,m as Mn,x as R}from"./vendor-BYORPvVJ.js";const V={updateDate:"2020/12/19"},zn=f({__name:"accordion",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"accordion","sample-url":"/sample/html/accordion.html","update-date":V.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[0]||(s[0]=[n(`<!doctype html>
<title>accordion</title>
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, viewport-fit=cover">

<style>
html, body, ul {
  margin: 0;
  padding: 0;
}
body {
  margin: 0 auto;
  padding: 10px;
  max-width: 500px;
}
.listSet {
  position: relative;
}
.itemList {
  margin-bottom: 80px;
  overflow: hidden;
  `,-1),t("b",{class:"t03"},"transition: height 0.3s;",-1),n(`
}
.itemList li {
  list-style: none;
  float: left;
  width: calc((100% - 20px) / 3);
  height: 30vw;
  margin-left: 10px;
  margin-bottom: 10px;
  background: #f1f1f1;
  border: #ddd 1px solid;
  box-sizing: border-box;
}
.itemList li:nth-child(3n+1) {
  margin-left: 0;
}
.listSet.setB li {
  height: 40vw;
}
@media screen and (min-width: 500px) {
  .itemList li {
    height: 158px;
  }
  .listSet.setB li {
    height: 200px;
  }
}
.toggle {
  position: absolute;
  bottom: -30px;
  left: calc(50% - 4px);
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  border-right: #000 2px solid;
  border-bottom: #000 2px solid;
  transform: rotate(225deg);
  cursor: pointer;
}
.close .toggle {
  transform: rotate(45deg);
}
</style>

<div class="listSet setA close">
<ul class="itemList">
<li>1</li>
<li>2</li>
<li>3</li>
<li>4</li>
<li>5</li>
<li>6</li>
<li>7</li>
<li>8</li>
<li>9</li>
<li>10</li>
<li>11</li>
<li>12</li>
<li>13</li>
<li>14</li>
<li>15</li>
<li>16</li>
<li>17</li>
<li>18</li>
</ul>
<div class="toggle"></div>
</div>

<div class="listSet setB close">
<ul class="itemList">
<li>1</li>
<li>2</li>
<li>3</li>
<li>4</li>
<li>5</li>
<li>6</li>
<li>7</li>
<li>8</li>
<li>9</li>
<li>10</li>
<li>11</li>
<li>12</li>
<li>13</li>
<li>14</li>
<li>15</li>
<li>16</li>
<li>17</li>
<li>18</li>
</ul>
<div class="toggle"></div>
</div>

<script>
`,-1),t("b",{class:"t01"},`const setAccordionEvent = () => {
  const getHeight = (area, param) => parseInt((area.currentStyle || document.defaultView.getComputedStyle(area, ''))[param], 10);
  const itemLists = document.querySelectorAll('.listSet');
  const flag = 'close';
  const minimum = 2;
  Object.values(itemLists).forEach((list) => {
    const frame = list.querySelector('.itemList');
    const topItem = list.querySelectorAll('li')[0];
    const toggle = list.querySelector('.toggle');
    const minHeight = (getHeight(topItem, 'height') + getHeight(topItem, 'margin-bottom') + getHeight(topItem, 'margin-top')) * minimum;
    const maxHeight = getHeight(list, 'height');
    const setHeight = (h) => frame.style.height = h + 'px';
    toggle.addEventListener('click', () => {
      if (list.classList.contains(flag)) {
        list.classList.remove(flag);
        setHeight(maxHeight);
      } else {
        list.classList.add(flag);
        setHeight(minHeight);
      }
    });
    setHeight(minHeight);
  });
};

window.onload = () => {
  setAccordionEvent();
};`,-1),n(`
<\/script>
`,-1)])]),_:1}),s[1]||(s[1]=n(`
`,-1))])]),_:1})],64))}}),Bt=Object.freeze(Object.defineProperty({__proto__:null,default:zn,metadata:V},Symbol.toStringTag,{value:"Module"})),F={updateDate:"2017/03/21"},Pn=f({__name:"ajax-popup-hash",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"ajax-popup-hash","sample-url":"/sample/html/ajax-popup-hash.html","update-date":F.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[t("pre",null,[s[2]||(s[2]=n(`// data.json

`,-1)),l(o,null,{default:e(()=>[...s[0]||(s[0]=[t("b",{class:"t03"},`{
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
      "ja": "プロフィール1プロフィール1プロフィール1<br>プロフィール1プロフィール1プロフィール1",
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
      "ja": "プロフィール2プロフィール2プロフィール2<br>プロフィール2プロフィール2プロフィール2",
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
      "ja": "プロフィール3プロフィール3プロフィール3<br>プロフィール3プロフィール3プロフィール3",
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
      "ja": "プロフィールB1プロフィールB1プロフィールB1<br>プロフィールB1プロフィールB1プロフィールB1",
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
      "ja": "プロフィールB2プロフィールB2プロフィールB2<br>プロフィールB2プロフィールB2プロフィールB2",
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
}`,-1),n(`
`,-1)])]),_:1}),s[3]||(s[3]=n(`


// app

`,-1)),l(o,null,{default:e(()=>[...s[1]||(s[1]=[t("b",{class:"t02"},`<!doctype html>
<html lang="ja">
<title>title</title>
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"><\/script>`,-1),n(`

<script>
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


  `,-1),t("b",{class:"t02"},"// get lang",-1),n(`
  var lang = $("html").attr("lang");

  `,-1),t("b",{class:"t02"},"// get json",-1),n(`
  var jsonData;
  `,-1),t("b",{class:"t01"},`$.ajax({
    type: 'GET',
    url: '`,-1),t("b",{class:"t03"},"data.json",-1),t("b",{class:"t01"},[n(`',
    dataType: 'json',
    `),t("b",{class:"t02"},"// cache: false, // キャッシュしない。バージョン(2?)によって効かない場合があるので注意。"),n(`
    success: function (`),t("b",{class:"t03"},"json"),n(") {")],-1),n(`
      `,-1),t("b",{class:"t03"},"jsonData = json;",-1),n(`
      (window.location.hash) ? getHash() : null;
    `,-1),t("b",{class:"t01"},`},
    error: function () {`,-1),n(`
      alert('Transmition error. Please try again.');
    `,-1),t("b",{class:"t01"},`}
  });`,-1),n(`

  `,-1),t("b",{class:"t02"},"// event click open or nav",-1),n(`
  $(".open a, .nav a").on("click", function (e) {
    var `,-1),t("b",{class:"t03"},"id",-1),n(" = e.",-1),t("b",{class:"t04"},"srcElement.dataset.id",-1),n(`;
    getData(id, `,-1),t("b",{class:"t03"},"jsonData",-1),n(`);
    addHash(id);
    return false;
  });

  `,-1),t("b",{class:"t02"},"// event click close",-1),n(`
  $(".close a").on("click", function () {
    $vL.fadeOut(100);
    clearHash();
    return false;
  });

  `,-1),t("b",{class:"t02"},"// get data",-1),n(`
  function getData(id, `,-1),t("b",{class:"t03"},"jsonData",-1),n(`){
    $data.id.html(`,-1),t("b",{class:"t03"},"id",-1),n(`);
    $data.name.html(`,-1),t("b",{class:"t03"},"jsonData[id].name[lang])",-1),n(`);
    $data.titl.html(`,-1),t("b",{class:"t03"},"jsonData[id].titl[lang])",-1),n(`);
    $data.prof.html(`,-1),t("b",{class:"t03"},"jsonData[id].prof[lang])",-1),n(`);
    $data.desc.html(`,-1),t("b",{class:"t03"},"jsonData[id].desc[lang])",-1),n(`);
    $data.prev.attr("data-id", `,-1),t("b",{class:"t03"},"jsonData[id].prev",-1),n(`);
    $data.next.attr("data-id", `,-1),t("b",{class:"t03"},"jsonData[id].next",-1),n(`);
    $data.phot.attr("src", `,-1),t("b",{class:"t03"},"jsonData[id].phot",-1),n(`);
    $data.hall.html(`,-1),t("b",{class:"t03"},"jsonData[id].hall",-1),n(`);
    $data.time.html(`,-1),t("b",{class:"t03"},"jsonData[id].time",-1),n(`);
    $data.movi.html(`,-1),t("b",{class:"t03"},"jsonData[id].movi",-1),n(`);
    $data.slid.html(`,-1),t("b",{class:"t03"},"jsonData[id].slid",-1),n(`);

    (jsonData[id].prev === "") ? $data.prev.hide() : $data.prev.show();
    (jsonData[id].next === "") ? $data.next.hide() : $data.next.show();

    $vL.fadeIn(100);
  }

  `,-1),t("b",{class:"t02"},"// add hash",-1),n(`
  function addHash(id){
    window.location.hash = '#' + id;
  }

  `,-1),t("b",{class:"t02"},"// clear hash",-1),n(`
  function clearHash() {
    try {
      var splitResult = window.location.href.split("#");
      history.replaceState(null, null, splitResult[0]);
    } catch(e) {
      window.location.hash = "";
    }
  }

  `,-1),t("b",{class:"t02"},"// get hash onload",-1),n(`
  function getHash() {
    var id = window.location.hash.replace(/#/,'');
    if(/^A-[1-3]$/.test(id) || /^B-[1-2]$/.test(id)) {
      getData(id, `,-1),t("b",{class:"t03"},"jsonData",-1),n(`);
    }
  };
});
<\/script>

`,-1),t("b",{class:"t02"},`<style>
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
</style>`,-1),n(`

<ul class="open">
<li><a href="#" `,-1),t("b",{class:"t04"},'data-id="A-1"',-1),n(`>A-1</a></li>
<li><a href="#" `,-1),t("b",{class:"t04"},'data-id="A-2"',-1),n(`>A-2</a></li>
<li><a href="#" `,-1),t("b",{class:"t04"},'data-id="A-3"',-1),n(`>A-3</a></li>
<li><a href="#" `,-1),t("b",{class:"t04"},'data-id="B-1"',-1),n(`>B-1</a></li>
<li><a href="#" `,-1),t("b",{class:"t04"},'data-id="B-2"',-1),n(`>B-2</a></li>
</ul>

<div class="viewLayer">
<div class="viewLayerInner">
<div class="overlay">
</div>
<div class="dataBox">
<div class="navBox">
<p class="phot"><img src="" alt></p>
<p class="nav prev"><a href="#" `,-1),t("b",{class:"t04"},'data-id=""',-1),n(`>prev</a></p>
<p class="nav next"><a href="#" `,-1),t("b",{class:"t04"},'data-id=""',-1),n(`>next</a></p>
</div>
<p class="name"></p>
<p class="id"></p>
<p class="titl"></p>
<p class="prof"></p>
<p class="hall"></p>
<p class="time"></p>
<p class="desc"></p>
<p class="movi"></p>
<p class="slid"></p>
</div>
<p class="close"><a href="#">close</a><p>
</div>
</div>
</div>

</html>
`,-1)])]),_:1}),s[4]||(s[4]=n(`
`,-1))])]),_:1})],64))}}),Lt=Object.freeze(Object.defineProperty({__proto__:null,default:Pn,metadata:F},Symbol.toStringTag,{value:"Module"})),U={updateDate:"2021/11/22"},In=f({__name:"battery-level-with-clock",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"battery-level-with-clock","sample-url":"/sample/html/battery-level-with-clock.html","update-date":U.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[0]||(s[0]=[n(`<!doctype html>
<title>battery-level-with-clock</title>
<meta
name="viewport"
content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, viewport-fit=cover"
/>
<link rel="stylesheet" href="/sample/font-select.css" />


<style>
html {
height: 100%;
}
body {
margin: 0;
padding: 0;
display: flex;
height: 100%;
justify-content: center;
align-items: center;
text-align: center;
background: #000;
line-height: 1;
}
div {
display: flex;
align-items: center;
}
#level {
display: inline-block;
margin: 0;
position: relative;
font-size: 8vw;
-moz-osx-font-smoothing: grayscale;
-webkit-font-smoothing: antialiased;
color: #fff;
}
#remain {
display: inline-block;
width: 16vw;
height: 8vw;
margin-left: 2vw;
position: relative;
}
#remain .graph {
display: block;
width: 100%;
height: 100%;
padding: 0.8vw;
box-sizing: border-box;
z-index: 1;
}
#remain .bar {
content: '';
display: block;
width: 100%;
height: 100%;
padding: 0;
background: #1ed57a;
}
#remain::after {
content: '';
display: block;
width: 16vw;
height: 8vw;
position: absolute;
top: 0;
left: 0;
border: #fff 1vw solid;
border-radius: 1vw;
box-sizing: border-box;
z-index: 2;
}
#remain .charging {
position: absolute;
top: 0;
left: 0;
z-index: 3;
}
#remain canvas {
width: 16vw;
height: 10vw;
position: relative;
left: 5.3vw;
top: -1vw;
}
#clock {
display: inline-block;
margin: 0;
margin-right: 5.7vw;
padding-right: 6vw;
<\/script>
`,-1)])]),_:1}),s[1]||(s[1]=n(`
`,-1))])]),_:1})],64))}}),Et=Object.freeze(Object.defineProperty({__proto__:null,default:In,metadata:U},Symbol.toStringTag,{value:"Module"})),Q={updateDate:"2020/12/19"},Hn=f({__name:"canvas-time-count",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"canvas-time-count","sample-url":"/sample/html/canvas-time-count.html","update-date":Q.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[0]||(s[0]=[n(`<!doctype html>
<title>canvas time count</title>
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, viewport-fit=cover">

<style>
html, body, ul {
  margin: 0;
  padding: 0;
}
body {
  margin: 0 auto;
  padding: 10px;
  max-width: 500px;
}
.listSet {
  position: relative;
}
.itemList {
  margin-bottom: 80px;
  overflow: hidden;
  `,-1),t("b",{class:"t03"},"transition: height 0.3s;",-1),n(`
}
.itemList li {
  list-style: none;
  float: left;
  width: calc((100% - 20px) / 3);
  height: 30vw;
  margin-left: 10px;
  margin-bottom: 10px;
  background: #f1f1f1;
  border: #ddd 1px solid;
  box-sizing: border-box;
}
.itemList li:nth-child(3n+1) {
  margin-left: 0;
}
.listSet.setB li {
  height: 40vw;
}
@media screen and (min-width: 500px) {
  .itemList li {
    height: 158px;
  }
  .listSet.setB li {
    height: 200px;
  }
}
.toggle {
  position: absolute;
  bottom: -30px;
  left: calc(50% - 4px);
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  border-right: #000 2px solid;
  border-bottom: #000 2px solid;
  transform: rotate(225deg);
  cursor: pointer;
}
.close .toggle {
  transform: rotate(45deg);
}
</style>

<div class="listSet setA close">
<ul class="itemList">
<li>1</li>
<li>2</li>
<li>3</li>
<li>4</li>
<li>5</li>
<li>6</li>
<li>7</li>
<li>8</li>
<li>9</li>
<li>10</li>
<li>11</li>
<li>12</li>
<li>13</li>
<li>14</li>
<li>15</li>
<li>16</li>
<li>17</li>
<li>18</li>
</ul>
<div class="toggle"></div>
</div>

<div class="listSet setB close">
<ul class="itemList">
<li>1</li>
<li>2</li>
<li>3</li>
<li>4</li>
<li>5</li>
<li>6</li>
<li>7</li>
<li>8</li>
<li>9</li>
<li>10</li>
<li>11</li>
<li>12</li>
<li>13</li>
<li>14</li>
<li>15</li>
<li>16</li>
<li>17</li>
<li>18</li>
</ul>
<div class="toggle"></div>
</div>

<script>
`,-1),t("b",{class:"t01"},`const setAccordionEvent = () => {
  const getHeight = (area, param) => parseInt((area.currentStyle || document.defaultView.getComputedStyle(area, ''))[param], 10);
  const itemLists = document.querySelectorAll('.listSet');
  const flag = 'close';
  const minimum = 2;
  Object.values(itemLists).forEach((list) => {
    const frame = list.querySelector('.itemList');
    const topItem = list.querySelectorAll('li')[0];
    const toggle = list.querySelector('.toggle');
    const minHeight = (getHeight(topItem, 'height') + getHeight(topItem, 'margin-bottom') + getHeight(topItem, 'margin-top')) * minimum;
    const maxHeight = getHeight(list, 'height');
    const setHeight = (h) => frame.style.height = h + 'px';
    toggle.addEventListener('click', () => {
      if (list.classList.contains(flag)) {
        list.classList.remove(flag);
        setHeight(maxHeight);
      } else {
        list.classList.add(flag);
        setHeight(minHeight);
      }
    });
    setHeight(minHeight);
  });
};

window.onload = () => {
  setAccordionEvent();
};`,-1),n(`
<\/script>
`,-1)])]),_:1}),s[1]||(s[1]=n(`
`,-1))])]),_:1})],64))}}),At=Object.freeze(Object.defineProperty({__proto__:null,default:Hn,metadata:Q},Symbol.toStringTag,{value:"Module"})),Y={updateDate:"2021/05/17"},qn=f({__name:"carousel",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"carousel","sample-url":"/sample/html/carousel.html","update-date":Y.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[0]||(s[0]=[n(`<!doctype html>
<html>
<head>
<title>title</title>
<meta name="viewport" content="width=560">

<style>
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
</style>
</head>

<body>

<section>
<div class="carousel1">
  <ul>
  <li style="background: #d22;">1</li>
  <li style="background: #2d2;">2</li>
  <li style="background: #22d;">3</li>
  </ul>
</div>
</section>

<section>
<div class="carousel2">
  <ul>
  <li style="background: #d22;">1</li>
  <li style="background: #2d2;">2</li>
  <li style="background: #22d;">3</li>
  </ul>
</div>
</section>

<section>
<div class="carousel3">
  <ul>
  <li style="background: #d22;">1</li>
  <li style="background: #2d2;">2</li>
  <li style="background: #22d;">3</li>
  <li style="background: #dd2;">4</li>
  <li style="background: #2dd;">5</li>
  </ul>
</div>
</section>

<section>
<div class="carousel4">
  <ul>
  <li style="background: #d22;">1</li>
  <li style="background: #2d2;">2</li>
  <li style="background: #22d;">3</li>
  <li style="background: #dd2;">4</li>
  <li style="background: #2dd;">5</li>
  </ul>
</div>
</section>




<script>
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
    .then(() => {
      this.setReadyStyles();
    })
    // 上記のstyleが適用されたdomから、pxに変換した値を取得
    .then(() => {
      this.setElementComputedSizes();
    })
    // optionから必要なhtmlを生成し、各種Listener、autoの制御、resize時の制御などを設定
    .then(() => {
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
    let styleStr = \`
      .\${this.opt.class} {
      position: relative;
      width: \${this.opt.width};
      height: \${this.opt.height};
      margin: 0 auto;
      }
      .\${this.opt.class} ul, .\${this.opt.class} li {
      margin: 0;
      padding: 0;
      }
      .\${this.opt.class} li {
      list-style: none;
      }
      .\${this.opt.class}_screen {
      width: \${this.opt.width};
      height: \${this.opt.height};
      position: relative;
      margin: 0 auto;
      overflow: hidden;
      }
      .\${this.opt.class}_screen .\${this.opt.class}_items {
      position: absolute;
      top: 0;
      width: \${this.opt.itemsWidth};
      -webkit-overflow-scrolling : touch;
      }
      .\${this.opt.class}_screen .\${this.opt.class}_items li {
      float: left;
      width: \${this.opt.width};
      height: \${this.opt.height};
      overflow: hidden;
      }
      .\${this.opt.class}_screen .\${this.opt.class}_items li img {
      width: \${this.opt.width};
      height: \${this.opt.height};
      }
    \`;
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
    return Number(target.match(/\\d+/)[0]);
  }

  // pxに変換したstyleの設定
  setBaseStyles() {
    let referenceScreenSize;
    if (this.opt.numWidth < 400 && this.opt.numHeight < 400) {
      referenceScreenSize = 400;
    } else {
      referenceScreenSize =
      this.opt.numWidth > this.opt.numHeight ? this.opt.numWidth : this.opt.numHeight;
    }
    let styleStr = \`
      .\${this.opt.class} {
      position: relative;
      width: \${this.opt.numWidth}px;
      margin: 0 auto;
      }
      .\${this.opt.class} ul, .\${this.opt.class} li {
      margin: 0;
      padding: 0;
      }
      .\${this.opt.class} li {
      list-style: none;
      }
      .\${this.opt.class}_screen {
      width: \${this.opt.numWidth}px;
      height: \${this.opt.numHeight}px;
      position: relative;
      margin: 0 auto;
      overflow: hidden;
      }
      .\${this.opt.class}_screen .\${this.opt.class}_items {
      position: absolute;
      top: 0;
      width: \${this.opt.itemsWidth};
      -webkit-overflow-scrolling : touch;
      }
      .\${this.opt.class}_screen .\${this.opt.class}_items li {
      float: left;
      width: \${this.opt.numWidth}px;
      height: \${this.opt.numHeight}px;
      overflow: hidden;
      }
      .\${this.opt.class}_screen .\${this.opt.class}_items li img {
      width: \${this.opt.numWidth}px;
      height: \${this.opt.numHeight}px;
      }
    \`;
    if (this.opt.pagenation) {
      const pagenationSize =
      referenceScreenSize / 50 > 16 ? 16 : referenceScreenSize / 50;
      const pagenationBorderRadius = pagenationSize;
      const pagenationMarginTop = referenceScreenSize / 50;
      styleStr += \`
      .\${this.opt.class}_pagenation {
        margin: \${pagenationMarginTop}px 0 0;
        text-align: center;
      }
      .\${this.opt.class}_pagenation ul {
        display: inline-block;
      }
      .\${this.opt.class}_pagenation li {
        float: left;
      }
      .\${this.opt.class}_pagenation li + li {
        margin-left: \${pagenationSize}px;
      }
      \`;
      styleStr += \`
      .\${this.opt.class}_pagenation li::before {
        content: "";
        display: block;
        width: \${pagenationSize}px;
        height: \${pagenationSize}px;
        background: #f1f1f1;
        border-radius: \${pagenationBorderRadius}px;
        cursor: pointer;
      }
      .\${this.opt.class}_pagenation .active::before {
        background: #ccc;
        cursor: auto;
      }
      \`;
    }
    if (this.opt.arrow) {
      const arrowSize = referenceScreenSize / 16;
      const arrowThickness = referenceScreenSize / 100;
      // const arrowTop = this.opt.numHeight / 2 - arrowSize / 2;
      styleStr += \`
      .\${this.opt.class}_arrow {
        width: \${this.opt.numWidth + arrowSize * 2.8}px;
        margin: 0 auto;
        position: absolute;
        top: \${this.opt.numHeight / 2.4}px;
        left: -\${(this.opt.numWidth + arrowSize * 2.8 - this.opt.numWidth) / 2}px;
        text-align: center;
      }
      .\${this.opt.class}_arrow div {
        display: block;
        width: \${arrowSize * 1.2}px;
        height: \${arrowSize * 1.7}px;
        position: relative;
        cursor: pointer;
      }
      .\${this.opt.class}_arrow div::before {
        content: '';
        display: block;
        width: \${arrowSize}px;
        height: \${arrowSize}px;
        position: absolute;
        top: \${arrowSize / 3.5}px;
        border-top: #ccc \${arrowThickness}px solid;
        border-left: #ccc \${arrowThickness}px solid;
      }
      .\${this.opt.class}_arrow .prev {
        float: left;
      }
      .\${this.opt.class}_arrow .prev::before {
        transform: rotate(-45deg);
        left: \${arrowSize / 3}px;
      }
      .\${this.opt.class}_arrow .next {
        float: right;
      }
      .\${this.opt.class}_arrow .next::before {
        transform: rotate(135deg);
        right: \${arrowSize / 3}px;
      }
      \`;
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
    const dragSorption = (ev) => {
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
    const startDrag01 = (ev) => {
      flagStart = true;
      startCursorX = ev.pageX || ev.changedTouches[0].pageX;
      startConveyorX = Number(this.opt.conveyor.style.left.replace('px', ''));
    };
    // touchmove時
    const startDrag02 = (ev) => {
      if (flagStart) {
      dragSorption(ev);
      flagMove = true;
      }
    };
    // touchend時にanimation発動
    const runAnimation = (ev) => {
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
        startCursorX - pageX < 0 ? 'prev' : 'next',
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
    let htmlStrings = this.templateLiteralToHtmlStrings\`
      <div class="\${this.opt.class}_pagenation">
      <ul>
    \`;
    this.opt.pointsLength = this.opt.loop ? this.opt.itemsLength - 2 : this.opt.itemsLength;
    for (let i = 0; i < this.opt.pointsLength; i++) {
      htmlStrings += this.templateLiteralToHtmlStrings\`
      <li></li>
      \`;
    }
    htmlStrings += this.templateLiteralToHtmlStrings\`
      </ul>
      </div>
    \`;
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
    Object.values(this.opt.pagenationItem).forEach((item, index) => {
      const pos = this.opt.loop
      ? '-' + this.opt.numWidth * (index + 1)
      : '-' + this.opt.numWidth * index;
      const triggerAnimation = () => {
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
    Object.values(this.opt.pagenationItem).forEach((part) => {
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
    let htmlStrings = this.templateLiteralToHtmlStrings\`
      <div class="\${this.opt.class}_arrow">
      <div class="prev"></div>
      <div class="next"></div>
      </div>
    \`;
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
    const carouselReady = (diff) => {
      const currentNum = this.getCurrentLeftNum();
      if (currentNum % diff) {
      return;
      }
      if (currentNum === 0 && diff > 0) {
      return;
      }
      if (
      currentNum === -(this.opt.numWidth * (this.opt.itemsLength - 1)) &&
      diff < 0
      ) {
      return;
      }
      this.animation(currentNum + diff);
    };
    const eventType = this.getClickEventType();
    this.opt.arrow.prev.addEventListener(eventType, () => {
      carouselReady(this.opt.numWidth);
    });
    this.opt.arrow.next.addEventListener(eventType, () => {
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
      Math.abs(targetLeft) > this.opt.numWidth * this.opt.itemsLength
    ) {
      targetLeft = 0;
    }
    // 現在の位置取得
    const currentLeft = this.getCurrentLeftNum();
    // keyframe準備
    const styleStr = \`
      @keyframes \${this.opt.class}_slideCarousel {
      from {
        left: \${currentLeft}px;
      }
      to {
        left: \${targetLeft}px;
      }
      }
      .\${this.opt.class}_items {
      animation-name: \${this.opt.class}_slideCarousel;
      animation-duration: \${this.opt.duration}s;
      animation-fill-mode: forwards;
      }
    \`;
    // animation
    this.opt.conveyor.style.left = targetLeft + 'px';
    this.appendStyles(styleStr, this.opt.class + '_movingKeyframes');
    window.setTimeout(() => {
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

    const styleStr = \`
      @keyframes \${this.opt.class}_fadeoutCarousel {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
      }
      .\${this.opt.class}_items {
      animation-name: \${this.opt.class}_fadeoutCarousel;
      animation-duration: \${this.opt.duration}s;
      animation-fill-mode: forwards;
      }
      @keyframes \${this.opt.class}_fadeinCarousel {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
      }
      .\${this.opt.class}_copyDom {
      animation-name: \${this.opt.class}_fadeinCarousel;
      animation-duration: \${this.opt.duration}s;
      animation-fill-mode: forwards;
      }
    \`;

    this.appendStyles(styleStr, this.opt.class + '_movingKeyframes');
    window.setTimeout(() => {
      const el = this.d.querySelector('.' + this.opt.class + '_movingKeyframes');
      if (el) {
      el.parentNode.removeChild(el);
      }
    }, this.opt.duration * 1000);
    window.setTimeout(() => {
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
    } else if (currentNumber < 0) {
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
    if (this.opt.auto.time <= this.opt.duration * 1.5 || !this.opt.auto.time) {
      this.opt.auto.time = this.opt.duration * 10;
    }
    let id;
    // auto開始
    const startInterval = () => {
      id = setInterval(() => {
      const currentLeft = this.getCurrentLeftNum();
      this.animation(currentLeft - this.opt.numWidth);
      const lastItem =
        Math.abs(currentLeft / this.opt.numWidth) >= this.opt.itemsLength - 2;
      if (!this.opt.loop && lastItem) {
        clearInterval(id);
      }
      }, this.opt.auto.time * 1000);
    };
    // 一時停止
    const stopInterval = () => {
      clearInterval(id);
    };
    // 最後の一枚の時意図せず発動してしまうanimationを防ぐための準備段階
    const readyStartInterval = () => {
      const lastItem =
      Math.abs(this.getCurrentLeftNum() / this.opt.numWidth) >=
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
    const resetIntervalWhenClick = (target) => {
      Object.values(target).forEach((item) => {
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
    window.addEventListener('resize', () => {
      const cleanStyles = () => {
      const currentStyles = this.d.querySelector('.' + this.opt.class + '_style');
      currentStyles.parentNode.removeChild(currentStyles);
      };

      Promise.resolve(1)
      .then(() => {
        cleanStyles();
        this.setReadyStyles();
      })
      .then(() => {
        this.setElementComputedSizes();
      })
      .then(() => {
        cleanStyles();
        this.setBaseStyles();
      })
      .then(() => {
        let currentNumber = Math.round(
        Number(this.opt.conveyor.style.left.match(/\\d+/)) / this.opt.numWidth,
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
    Object.values(brs).forEach((value) => {
      value.parentNode.removeChild(value);
    });
    this.opt.carousel.appendChild(styleDom);
    this.opt.style = this.opt.carousel.querySelector('.' + this.opt.class + '_style');
  }

  // utility
  templateLiteralToHtmlStrings(strings, ...values) {
    return strings.reduce((accumlate, str, i) => {
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
    return str.replace(/["'\`<>&]/g, function (m) {
      return {
      '"': '&quot;',
      "'": '&#x27;',
      '\`': '&#x60;',
      '&lt;': '&lt;',
      '&gt;': '&gt;',
      '&amp;': '&amp;',
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
<\/script>


</body>
</html>
`,-1)])]),_:1}),s[1]||(s[1]=n(`
`,-1))])]),_:1})],64))}}),Ct=Object.freeze(Object.defineProperty({__proto__:null,default:qn,metadata:Y},Symbol.toStringTag,{value:"Module"})),X={updateDate:"2016/08/08"},Dn=f({__name:"checkbox-limit",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"checkbox-limit","sample-url":"/sample/html/checkbox-limit.html","update-date":X.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[t("pre",null,[t("code",null,[l(o,null,{default:e(()=>[...s[0]||(s[0]=[t("b",{class:"t02"},[n(`<!doctype html>
<html `),t("b",{class:"t04"},'lang="ja"'),n(`>
<title>title</title>
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">`)],-1),n(`

<div `,-1),t("b",{class:"t05"},'data-max="3"',-1),n(`>
<label><input type="checkbox" name="name1" value="1">1</label>
<label><input type="checkbox" name="name1" value="2">2</label>
<label><input type="checkbox" name="name1" value="3">3</label>
<label><input type="checkbox" name="name1" value="4">4</label>
<label><input type="checkbox" name="name1" value="5">5</label>
<label><input type="checkbox" name="name1" value="6">6</label>
<label><input type="checkbox" name="name1" value="7">7</label>
</div>

<div `,-1),t("b",{class:"t05"},'data-max="3"',-1),n(`>
<label><input type="checkbox" name="name2" value="1">1</label>
<label><input type="checkbox" name="name2" value="2">2</label>
<label><input type="checkbox" name="name2" value="3">3</label>
<label><input type="checkbox" name="name2" value="4">4</label>
<label><input type="checkbox" name="name2" value="5">5</label>
<label><input type="checkbox" name="name2" value="6">6</label>
<label><input type="checkbox" name="name2" value="7">7</label>
</div>

`,-1),t("b",{class:"t01"},`<script>
(function(doc) {
  var lang = doc.querySelector('html').getAttribute('lang');
  var isJa = !!(lang === 'ja' || lang === 'ja-JP');
  var checkboxSet = doc.querySelectorAll('[data-max]');

  if (checkboxSet.length === 0) {
    return;
  }

  function setUpperLimit(el, name, max) {
    el.addEventListener('click', function(ev) {
      if (doc.querySelectorAll('input[name="' + name + '"]:checked').length > max) {
        if (isJa) {
          alert('最大' + max + 'つまで選択可能です。');
        } else {
          alert('The upper limit is ' + max + '.');
        }
        ev.preventDefault();
      }
    });
  }

  Object.values(checkboxSet).forEach(function(value) {
    var max = value.dataset.max;
    if (isNaN(max)) {
      return;
    };

    var inputs = value.querySelectorAll('input');
    if (inputs.length === 0) {
      return;
    };

    var name = value.querySelector('input').getAttribute('name');
    Object.values(inputs).forEach(function (value) {
      setUpperLimit(value, name, max);
    });
  });
})(document);
<\/script>`,-1),n(`
`,-1)])]),_:1}),s[1]||(s[1]=n(`
`,-1))])])]),_:1})],64))}}),Mt=Object.freeze(Object.defineProperty({__proto__:null,default:Dn,metadata:X},Symbol.toStringTag,{value:"Module"})),J={updateDate:"2020/12/19"},Nn=f({__name:"digital-clock",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"digital-clock","sample-url":"/sample/html/digital-clock.html","update-date":J.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[0]||(s[0]=[n(`<!doctype html>
<title>digital-clock</title>
<meta
  name="viewport"
  content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, viewport-fit=cover"
/>
<link rel="stylesheet" href="/sample/font-select.css" />

<style>
  html {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #000;
  }
  #clock {
    display: inline-block;
    margin: 0;
    font-size: 13vw;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: #fff;
  }
</style>

<p id="clock"></p>

<script>
  const to2Digits = (num) => {
    let r
    if (num < 10) {
      r = \`0\${num}\`
    } else {
      r = num
    }
    return r
  }
  const clock = () => {
    const date = new Date()
    const hour = to2Digits(date.getHours())
    const min = to2Digits(date.getMinutes())
    const time = \`\${hour}:\${min}\`
    document.querySelector('#clock').innerHTML = time
  }
  setInterval(() => {
    clock()
  }, 1000)
<\/script>
`,-1)])]),_:1}),s[1]||(s[1]=n(`
`,-1))])]),_:1})],64))}}),zt=Object.freeze(Object.defineProperty({__proto__:null,default:Nn,metadata:J},Symbol.toStringTag,{value:"Module"})),Z={updateDate:"2016/12/12"},On=f({__name:"escape-html",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"escape-html","update-date":Z.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[0]||(s[0]=[t("b",{class:"t01"},[n("function "),t("b",{class:"t05"},"escapeHTML"),n("("),t("b",{class:"t03"},"str"),n(`) {
  if(!str){return '';}
  return `),t("b",{class:"t03"},"str"),n(".replace(/[\"'`<>&]/g, function("),t("b",{class:"t04"},"m"),n(`) {
    return {
      '"': '&quot;',
      "'": '&#x27;',
      '\`': '&#x60;',
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
    }[`),t("b",{class:"t04"},"m"),n(`]
  });
}`)],-1),n(`
`,-1)])]),_:1}),s[1]||(s[1]=n(`
`,-1))])]),_:1})],64))}}),Pt=Object.freeze(Object.defineProperty({__proto__:null,default:On,metadata:Z},Symbol.toStringTag,{value:"Module"})),G={updateDate:"2016/10/07"},Wn=f({__name:"get-size",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"get-size","sample-url":"/sample/html/get-size.html","update-date":G.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[0]||(s[0]=[t("b",{class:"t02"},`<!doctype html>
<title>getSize</title>
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
<meta name="format-detection" content="telephone=no">

<style>
html, body, dl, p {margin: 0; padding: 0;}
body {padding: 10px; position: relative;}
.innerWindow {position: absolute; top: 0; left: 0; width: 100%; padding: 5px; background: #5ad3dd; box-sizing: border-box; z-index: 1;}
.innerWindow div {height: 100%; background: #fff;}
dl {width: 300px; margin-bottom: 18px; overflow: hidden;}
dt {width: 200px;}
dd {width: 100px; text-align: right;}
dt, dd {float: left; margin: 0; font-size: 12px; border-bottom: #ddd 1px solid;}
h1 {margin: 0;font-size: 30px;}
dl + h1 {margin-top: 30px;}
.windowSection, .elementSection {position: relative; z-index: 2;}
.inner {position: relative; width: 300px; height: 165px; margin-bottom: 10px; background: #f9cc9d;}
.inner p {position: absolute; font-size: 12px; white-space: nowrap;}
.margin {right: 5px; bottom: 1px;}
.border {top: 115px; right: 50px; color: #f00;}
.border span {color: #10af00;}
#element {position: relative; display: block; width: 215px; height: 80px; margin: 0 50px 50px 0; padding: 0 30px 30px 0; background: #c4d08b; border-right: #f00 5px solid; border-bottom: #f00 5px solid; font-size: 12px; overflow: scroll;}
#element div {position: absolute; top: 0; left: 0;}
#element div div {position: relative;}
#element span {position: absolute; right: 5px; bottom: 1px;}
.pure div {width: 215px; height: 80px; background: #8cb6c1;}
.padding div {width: 245px; height: 110px; background: #c4d08b;}
.overflow div {width: 285px; height: 150px; background: #e0e0e0;}
.targetW {color: #5ad3dd;}
.targetE {color: #10af00;}
.upperLeftPoint {display: block; position: absolute; top: 0; left: 0; z-index: 10; font-size: 8px;}
</style>


<div class="innerWindow"><div></div></div>

<div class="windowSection">
<h1>window</h1>
<dl>
<dt>window.innerWidth</dt><dd class="w_iW"></dd>
<dt>window.outerWidth</dt><dd class="w_oW"></dd>
<dt class="targetW">$(window).innerWidth()</dt><dd class="w_iW2 targetW"></dd>
<dt>$(window).outerWidth()</dt><dd class="w_oW2"></dd>
<dt>window.innerHeight</dt><dd class="w_iH"></dd>
<dt>window.outerHeight</dt><dd class="w_oH"></dd>
<dt class="targetW">$(window).innerHeight()</dt><dd class="w_iH2 targetW"></dd>
<dt>$(window).outerHeight()</dt><dd class="w_oH2"></dd>
</dl>
</div>

<div class="elementSection">
<h1>element</h1>
<div class="inner">
<p class="margin">margin +50 / 300 165</p>
<p class="border">border +5 / <span>250 115</span></p>
<div id="element">
<div class="overflow"><div><span>overflow +40 / 285 150</span></div></div>
<div class="padding"><div><span>padding +30 / 245 110</span></div></div>
<div class="pure"><div><span>#element pure / 215 80</span></div></div>
</div>
</div>
<dl>
<dt>el.clientWidth</dt><dd class="el_cW"></dd>
<dt>el.scrollWidth</dt><dd class="el_sW"></dd>
<dt class="targetE">el.offsetWidth</dt><dd class="el_oW targetE"></dd>
<dt>$el.width()</dt><dd class="el_w"></dd>
<dt>$el.innerWidth()</dt><dd class="el_iw"></dd>
<dt class="targetE">$el.outerWidth()</dt><dd class="el_ow targetE"></dd>
<dt>$el.outerWidth(true)</dt><dd class="el_owt"></dd>
<dt>el.clientHeight</dt><dd class="el_cH"></dd>
<dt>el.scrollHeight</dt><dd class="el_sH"></dd>
<dt class="targetE">el.offsetHeight</dt><dd class="el_oH targetE"></dd>
<dt>$el.height()</dt><dd class="el_h"></dd>
<dt>$el.innerHeight()</dt><dd class="el_ih"></dd>
<dt class="targetE">$el.outerHeight()</dt><dd class="el_oh targetE"></dd>
<dt>$el.outerHeight(true)</dt><dd class="el_oht"></dd>
</dl>
</div>

<div class="upperLeftPoint">(<span class="ulpX"></span>, <span class="ulpY"></span>)</div>`,-1),n(`

<script>
(function(){

  `,-1),t("b",{class:"t02"},"// window",-1),n(`
  var w = window;
  var $w = $(window);

  function resizeWindow() {
    $(".w_iW").text(w.`,-1),t("b",{class:"t01"},"innerWidth",-1),n(`);
    $(".w_oW").text(w.`,-1),t("b",{class:"t01"},"outerWidth",-1),n("); ",-1),t("b",{class:"t02"},"// status bar や inspector を含む, iOSで0のバグ",-1),n(`
    $(".w_iW2").text($w.`,-1),t("b",{class:"t01"},"innerWidth()",-1),n(`);
    $(".w_oW2").text($w.`,-1),t("b",{class:"t01"},"outerWidth()",-1),n(`);
    $(".w_iH").text(w.`,-1),t("b",{class:"t01"},"innerHeight",-1),n("); ",-1),t("b",{class:"t02"},"// iOSでスクロール時に変動(操作バーhidden時)",-1),n(`
    $(".w_oH").text(w.`,-1),t("b",{class:"t01"},"outerHeight",-1),n("); ",-1),t("b",{class:"t02"},"// status bar や inspector を含む, iOSで0のバグ",-1),n(`
    $(".w_iH2").text($w.`,-1),t("b",{class:"t01"},"innerHeight()",-1),n(`);
    $(".w_oH2").text($w.`,-1),t("b",{class:"t01"},"outerHeight()",-1),n("); ",-1),t("b",{class:"t02"},"// iOSでスクロール時に変動(操作バーhidden時)",-1),n(`
    $(".innerWindow").css('height', $w.innerHeight());
  }
  $(window).on('load resize', function(){
    resizeWindow();
  });

  `,-1),t("b",{class:"t02"},"// element",-1),n(`
  var el = document.getElementById('element');
  var $el = $("#element");

  $(".el_cW").text(el.`,-1),t("b",{class:"t01"},"clientWidth",-1),n("); ",-1),t("b",{class:"t02"},"// paddingを含む",-1),n(`
  $(".el_sW").text(el.`,-1),t("b",{class:"t01"},"scrollWidth",-1),n("); ",-1),t("b",{class:"t02"},"// paddingとoverflowを含む",-1),n(`
  $(".el_oW").text(el.`,-1),t("b",{class:"t01"},"offsetWidth",-1),n("); ",-1),t("b",{class:"t02"},"// paddingとborderを含む",-1),n(`
  $(".el_w").text($el.`,-1),t("b",{class:"t01"},"width()",-1),n("); ",-1),t("b",{class:"t02"},"// 要素の幅のみ",-1),n(`
  $(".el_iw").text($el.`,-1),t("b",{class:"t01"},"innerWidth()",-1),n("); ",-1),t("b",{class:"t02"},"// paddingを含む",-1),n(`
  $(".el_ow").text($el.`,-1),t("b",{class:"t01"},"outerWidth()",-1),n("); ",-1),t("b",{class:"t02"},"// paddingとborderを含む",-1),n(`
  $(".el_owt").text($el.`,-1),t("b",{class:"t01"},"outerWidth(true)",-1),n("); ",-1),t("b",{class:"t02"},"// paddingとborderとmarginを含む",-1),n(`
  $(".el_cH").text(el.`,-1),t("b",{class:"t01"},"clientHeight",-1),n("); ",-1),t("b",{class:"t02"},"// paddingを含む",-1),n(`
  $(".el_sH").text(el.`,-1),t("b",{class:"t01"},"scrollHeight",-1),n("); ",-1),t("b",{class:"t02"},"// paddingとoverflowを含む",-1),n(`
  $(".el_oH").text(el.`,-1),t("b",{class:"t01"},"offsetHeight",-1),n("); ",-1),t("b",{class:"t02"},"// paddingとborderを含む",-1),n(`
  $(".el_h").text($el.`,-1),t("b",{class:"t01"},"height()",-1),n("); ",-1),t("b",{class:"t02"},"// 要素の高さのみ",-1),n(`
  $(".el_ih").text($el.`,-1),t("b",{class:"t01"},"innerHeight()",-1),n("); ",-1),t("b",{class:"t02"},"// paddingを含む",-1),n(`
  $(".el_oh").text($el.`,-1),t("b",{class:"t01"},"outerHeight()",-1),n("); ",-1),t("b",{class:"t02"},"// paddingとborderを含む",-1),n(`
  $(".el_oht").text($el.`,-1),t("b",{class:"t01"},"outerHeight(true)",-1),n("); ",-1),t("b",{class:"t02"},"// paddingとborderとmarginを含む",-1),n(`

  `,-1),t("b",{class:"t02"},"// Point in the upper left",-1),n(`
  function getPoint() {
    $(".ulpX").text(w.screenX);
    $(".ulpY").text(w.screenY);
  }
  var moveWindow = setInterval(function () {
    getPoint();
  }, 500);

})();
<\/script>
`,-1)])]),_:1}),s[1]||(s[1]=n(`
`,-1))])]),_:1})],64))}}),It=Object.freeze(Object.defineProperty({__proto__:null,default:Wn,metadata:G},Symbol.toStringTag,{value:"Module"})),K={updateDate:"2015/09/10"},Rn=f({__name:"grunt",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"grunt","update-date":K.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[l(a,{title:"install"},{default:e(()=>[...s[0]||(s[0]=[t("pre",null,[n(""),t("b",{class:"t01"},"http://nodejs.org/"),n("   "),t("b",{class:"t02"},"// node.js インストール"),n(`
`),t("b",{class:"t01"},"node -v"),n("  "),t("b",{class:"t02"},"// node.js バージョン確認"),n(`
`),t("b",{class:"t01"},"npm -v"),n("  "),t("b",{class:"t02"},"// npm(node package manager: https://www.npmjs.org/) バージョン確認"),n(`

`),t("b",{class:"t01"},"sudo npm install -g grunt-cli"),n("  "),t("b",{class:"t02"},"// grunt(http://gruntjs.com/) インストール"),n(`
`),t("b",{class:"t01"},"grunt -version"),n("  "),t("b",{class:"t02"},"// grunt バージョン確認"),n(`
`)],-1)])]),_:1}),l(a,{title:"(node.js update)"},{default:e(()=>[...s[1]||(s[1]=[t("pre",null,[t("b",{class:"t01"},"sudo npm cache clean -f"),n(`
`),t("b",{class:"t01"},"sudo npm install -g n"),n(`
`),t("b",{class:"t01"},"sudo n latest"),n(`
`),t("b",{class:"t01"},"sudo n stable"),n(`
`),t("b",{class:"t01"},"sudo n"),n(` 4.7.0
`)],-1)])]),_:1}),l(a,{title:"(node.js uninstall)"},{default:e(()=>[...s[2]||(s[2]=[t("pre",null,[n(""),t("b",{class:"t02"},"// enter every 1 line"),n(`
`),t("b",{class:"t01"},`lsbom -f -l -s -pf /var/db/receipts/org.nodejs.node.pkg.bom \\
| while read i; do
  sudo rm /usr/local/\${i}
done`),n(`

`),t("b",{class:"t02"},"// enter every 1 line"),n(`
`),t("b",{class:"t01"},`sudo rm -rf /usr/local/lib/node \\
   /usr/local/lib/node_modules \\
   /var/db/receipts/org.nodejs.*`),n(`

`),t("b",{class:"t02"},"// delete npm"),n(`
`),t("b",{class:"t01"},"sudo rm -rf ~/.npm"),n(`
`)],-1)])]),_:1}),l(a,{title:"package.json"},{default:e(()=>[...s[3]||(s[3]=[t("pre",null,[n("1) "),t("b",{class:"t01"},"mkdir"),n(` temp_grunt
2) `),t("b",{class:"t01"},"cd"),n(` temp_grunt
3) `),t("b",{class:"t01"},"npm init"),n("  "),t("b",{class:"t02"},"// package.json 生成"),n(`

---

`),t("b",{class:"t01"},"temp_grunt"),n(`
└ `),t("b",{class:"t03"},"package.json"),n(`

---

`),t("b",{class:"t02"},"// package.json"),n(`
`),t("b",{class:"t03"},`{
  "name": "`),n("temp_grunt"),t("b",{class:"t03"},`",
  "version": "0.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
  "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}`),n(`

---

4) `),t("b",{class:"t01"},"npm install grunt --save-dev"),n(`
`),t("b",{class:"t02"},"// gruntモジュールのインストールと --save-dev でpackage.jsonの更新"),n(`

---

temp_grunt
├ `),t("b",{class:"t03"},"node_modules/"),n(`
└ `),t("b",{class:"t03"},"package.json"),n(`

---

`),t("b",{class:"t02"},"// package.json"),n(`
{
  "name": "temp_grunt",
  "version": "0.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
  "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  `),t("b",{class:"t03"},`"devDependencies": {
  "grunt": "~0.4.5"
  }`),n(`
}
`)],-1)])]),_:1}),l(a,{title:"Gruntfile.js"},{default:e(()=>[...s[4]||(s[4]=[t("pre",null,[n("5) "),t("b",{class:"t01"},"vi Gruntfile.js"),n("  "),t("b",{class:"t02"},"// Gruntfile.js 作成"),n(`

---

temp_grunt
├ `),t("b",{class:"t01"},"Gruntfile.js"),n(`
├ node_modules/
└ package.json

---

`),t("b",{class:"t02"},"// Gruntfile.js"),n(`

`),t("b",{class:"t01"},[n(`module.exports = function(grunt) {
  grunt.initConfig({
    `),t("b",{class:"t02"},'// "pkg"でpackage.jsonを参照する'),n(`
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.registerTask('default', '', function() {`)]),n(`
    console.log('The task of the default was done.');
  `),t("b",{class:"t01"},"});"),n(`
  `),t("b",{class:"t01"},"grunt.registerTask('"),n("typeA"),t("b",{class:"t01"},"', '', function() {"),n(`
    console.log('The task of the typeA was done.');
  `),t("b",{class:"t01"},`});
};`),n(`

---

`),t("b",{class:"t02"},"// タスクの実行"),n(`

`),t("b",{class:"t01"},"grunt"),n(),t("b",{class:"t02"},"(default)"),n(`
`),t("b",{class:"t02"},"->"),n(),t("b",{class:"t03"},'Running "default" task'),n(`
`),t("b",{class:"t02"},"->"),n(` The task of the default was done.
`),t("b",{class:"t02"},"->"),n(`
`),t("b",{class:"t02"},"->"),n(),t("b",{class:"t03"},"Done, without errors."),n(`

`),t("b",{class:"t01"},"grunt"),n(` typeA
`),t("b",{class:"t02"},"->"),n(),t("b",{class:"t03"},'Running "typeA" task'),n(`
`),t("b",{class:"t02"},"->"),n(` The task of the typeA was done.
`),t("b",{class:"t02"},"->"),n(`
`),t("b",{class:"t02"},"->"),n(),t("b",{class:"t03"},"Done, without errors."),n(`
`)],-1)])]),_:1}),l(a,{title:"plugins"},{default:e(()=>[...s[5]||(s[5]=[t("pre",null,[n(""),t("b",{class:"t01"},"npm install grunt-contrib --save-dev"),n(`
`),t("b",{class:"t02"},"// grunt-contrib-***** を個別にインストールすることも可能"),n(`
`),t("b",{class:"t02"},"// プラグインリスト -> http://gruntjs.com/plugins"),n(`

---

temp_grunt
├ `),t("b",{class:"t01"},"Gruntfile.js"),n(`
├ `),t("b",{class:"t03"},"node_modules/"),n(`
└ `),t("b",{class:"t03"},"package.json"),n(`

---

`),t("b",{class:"t02"},"// package.json"),n(`

{
  "name": "temp_grunt",
  "version": "0.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
  "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
  "grunt": "~0.4.5"
  `),t("b",{class:"t03"},`"grunt-contrib-symlink": "~0.3.0",
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
  "grunt-contrib": "~0.11.0"`),n(`
  }
}

---

`),t("b",{class:"t02"},"// Gruntfile.js"),n(`

module.exports = function(grunt) {
  grunt.initConfig({
    `),t("b",{class:"t01"},`pluginName: {
      ・・・
    },
    pluginName: {
      ・・・
    }`),n(`
  });

  `),t("b",{class:"t01"},"grunt.loadNpmTasks('grunt-contrib-pluginName');"),n(`
  `),t("b",{class:"t01"},"grunt.loadNpmTasks('grunt-contrib-pluginName');"),n(`
  `),t("b",{class:"t02"},"// 以下、a)でインストールして、b)のように書けば、上記の一括指定ができる"),n(`
  `),t("b",{class:"t02"},"// a) npm i --save-dev load-grunt-tasks"),n(`
  `),t("b",{class:"t02"},"// b) require('load-grunt-tasks')(grunt, {pattern: ['grunt-contrib-*', 'grunt-shell']});"),n(`

  grunt.registerTask('default', `),t("b",{class:"t01"},"['pluginName','pluginName']"),n(`);
};
`)],-1)])]),_:1}),l(a,{title:"example"},{default:e(()=>[t("pre",null,[s[9]||(s[9]=n(`temp_grunt
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

`,-1)),s[10]||(s[10]=t("b",{class:"t02"},"// config.rb",-1)),s[11]||(s[11]=n(`

`,-1)),l(o,null,{default:e(()=>[...s[6]||(s[6]=[n(`http_path = "/"
css_dir = "css"
sass_dir = "sass"
images_dir = "/"
javascripts_dir = "js"
generated_images_dir = "img"
cache = false
output_style = (environment == :production) ? :compressed : :expanded
relative_assets = true
line_comments = (environment == :production) ? false : true
`,-1)])]),_:1}),s[12]||(s[12]=n(`

---

`,-1)),s[13]||(s[13]=t("b",{class:"t02"},"// package.json",-1)),s[14]||(s[14]=n(`

`,-1)),l(o,null,{default:e(()=>[...s[7]||(s[7]=[n(`{
  "name": "temp_grunt",
  "version": "0.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
  "test": "echo \\"Error: no test specified\\" && exit 1"
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
  "grunt-contrib-`,-1),t("b",{class:"t01"},"jshint",-1),n(`": "~0.10.0",
  "grunt-contrib-`,-1),t("b",{class:"t01"},"concat",-1),n(`": "~0.4.0",
  "grunt-contrib-`,-1),t("b",{class:"t01"},"uglify",-1),n(`": "~0.5.0",
  "grunt-contrib-`,-1),t("b",{class:"t01"},"compass",-1),n(`": "~0.8.0"
  }
}
`,-1)])]),_:1}),s[15]||(s[15]=n(`

---

`,-1)),s[16]||(s[16]=t("b",{class:"t02"},"// Gruntfile.js",-1)),s[17]||(s[17]=n(`

`,-1)),l(o,null,{default:e(()=>[...s[8]||(s[8]=[n(`module.exports = function(grunt) {

  grunt.initConfig({

    `,-1),t("b",{class:"t02"},"// for valiable",-1),n(`
    pkg: grunt.file.readJSON('package.json'),


    `,-1),t("b",{class:"t02"},"// js: validate",-1),n(`
    `,-1),t("b",{class:"t01"},"jshint",-1),n(`: {
      beforeconcat: 'jsmod/mod/**/*.js'
    },

    `,-1),t("b",{class:"t02"},"// js: concat",-1),n(`
    `,-1),t("b",{class:"t01"},"concat",-1),n(`: {
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

    `,-1),t("b",{class:"t02"},"// js: minify",-1),n(`
    `,-1),t("b",{class:"t01"},"uglify",-1),n(`: {
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'js/<%= pkg.name %>.js'
      }
    },

    `,-1),t("b",{class:"t02"},"// compass config",-1),n(`
    `,-1),t("b",{class:"t01"},"compass",-1),n(`: {
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

  grunt.registerTask('`,-1),t("b",{class:"t01"},"default",-1),n("', ['",-1),t("b",{class:"t01"},"jshint",-1),n("', '",-1),t("b",{class:"t01"},"concat",-1),n("', '",-1),t("b",{class:"t01"},"compass",-1),n(`:test']);
  `,-1),t("b",{class:"t02"},"// test用タスク - sassコンパイルはexpanded",-1),n(`
  grunt.registerTask('`,-1),t("b",{class:"t01"},"r",-1),n("', ['",-1),t("b",{class:"t01"},"jshint",-1),n("', '",-1),t("b",{class:"t01"},"concat",-1),n("', '",-1),t("b",{class:"t01"},"uglify",-1),n("', '",-1),t("b",{class:"t01"},"compass",-1),n(`:release']);
  `,-1),t("b",{class:"t02"},"// release用タスク - sassコンパイルはcompressed, jsとcssはminify",-1),n(`

};
`,-1)])]),_:1}),s[18]||(s[18]=n(`

---

`,-1)),s[19]||(s[19]=t("b",{class:"t02"},"// タスクの実行(test)",-1)),s[20]||(s[20]=n(`

`,-1)),s[21]||(s[21]=t("b",{class:"t01"},"grunt",-1)),s[22]||(s[22]=n()),s[23]||(s[23]=t("b",{class:"t02"},"(default)",-1)),s[24]||(s[24]=n(`
`,-1)),s[25]||(s[25]=t("b",{class:"t02"},"->",-1)),s[26]||(s[26]=n(`
`,-1)),s[27]||(s[27]=t("b",{class:"t02"},"->",-1)),s[28]||(s[28]=n('Running "',-1)),s[29]||(s[29]=t("b",{class:"t01"},"jshint",-1)),s[30]||(s[30]=n(`:beforeconcat" (jshint) task
`,-1)),s[31]||(s[31]=t("b",{class:"t02"},"->",-1)),s[32]||(s[32]=t("b",{class:"t03"},">> 2 files lint free.",-1)),s[33]||(s[33]=n(`
`,-1)),s[34]||(s[34]=t("b",{class:"t02"},"->",-1)),s[35]||(s[35]=n(`
`,-1)),s[36]||(s[36]=t("b",{class:"t02"},"->",-1)),s[37]||(s[37]=n('Running "',-1)),s[38]||(s[38]=t("b",{class:"t01"},"concat",-1)),s[39]||(s[39]=n(`:dist" (concat) task
`,-1)),s[40]||(s[40]=t("b",{class:"t02"},"->",-1)),s[41]||(s[41]=t("b",{class:"t03"},"File js/temp_grunt.js created.",-1)),s[42]||(s[42]=n(`
`,-1)),s[43]||(s[43]=t("b",{class:"t02"},"->",-1)),s[44]||(s[44]=n(`
`,-1)),s[45]||(s[45]=t("b",{class:"t02"},"->",-1)),s[46]||(s[46]=n('Running "',-1)),s[47]||(s[47]=t("b",{class:"t01"},"compass",-1)),s[48]||(s[48]=n(`:dist" (compass) task
`,-1)),s[49]||(s[49]=t("b",{class:"t02"},"->",-1)),s[50]||(s[50]=n("   ",-1)),s[51]||(s[51]=t("b",{class:"t03"},"create img/sprite/ja-***********.png",-1)),s[52]||(s[52]=n(`
`,-1)),s[53]||(s[53]=t("b",{class:"t02"},"->",-1)),s[54]||(s[54]=n("   ",-1)),s[55]||(s[55]=t("b",{class:"t03"},"create img/sprite/en-***********.png",-1)),s[56]||(s[56]=n(`
`,-1)),s[57]||(s[57]=t("b",{class:"t02"},"->",-1)),s[58]||(s[58]=n("   ",-1)),s[59]||(s[59]=t("b",{class:"t03"},"create css/temp_grunt.css (0.231s)",-1)),s[60]||(s[60]=n(`
`,-1)),s[61]||(s[61]=t("b",{class:"t02"},"->",-1)),s[62]||(s[62]=t("b",{class:"t03"},"Compilation took 0.232s",-1)),s[63]||(s[63]=n(`
`,-1)),s[64]||(s[64]=t("b",{class:"t02"},"->",-1)),s[65]||(s[65]=n(`
`,-1)),s[66]||(s[66]=t("b",{class:"t02"},"->",-1)),s[67]||(s[67]=n(`Done, without errors.

---

`,-1)),s[68]||(s[68]=t("b",{class:"t02"},"// タスクの実行(release)",-1)),s[69]||(s[69]=n(`

`,-1)),s[70]||(s[70]=t("b",{class:"t01"},"grunt",-1)),s[71]||(s[71]=n(` r
`,-1)),s[72]||(s[72]=t("b",{class:"t02"},"->",-1)),s[73]||(s[73]=n(`
`,-1)),s[74]||(s[74]=t("b",{class:"t02"},"->",-1)),s[75]||(s[75]=n('Running "',-1)),s[76]||(s[76]=t("b",{class:"t01"},"jshint",-1)),s[77]||(s[77]=n(`:beforeconcat" (jshint) task
`,-1)),s[78]||(s[78]=t("b",{class:"t02"},"->",-1)),s[79]||(s[79]=t("b",{class:"t03"},">> 2 files lint free.",-1)),s[80]||(s[80]=n(`
`,-1)),s[81]||(s[81]=t("b",{class:"t02"},"->",-1)),s[82]||(s[82]=n(`
`,-1)),s[83]||(s[83]=t("b",{class:"t02"},"->",-1)),s[84]||(s[84]=n('Running "',-1)),s[85]||(s[85]=t("b",{class:"t01"},"concat",-1)),s[86]||(s[86]=n(`:dist" (concat) task
`,-1)),s[87]||(s[87]=t("b",{class:"t02"},"->",-1)),s[88]||(s[88]=t("b",{class:"t03"},"File js/temp_grunt.js created.",-1)),s[89]||(s[89]=n(`
`,-1)),s[90]||(s[90]=t("b",{class:"t02"},"->",-1)),s[91]||(s[91]=n(`
`,-1)),s[92]||(s[92]=t("b",{class:"t02"},"->",-1)),s[93]||(s[93]=n('Running "',-1)),s[94]||(s[94]=t("b",{class:"t01"},"uglify",-1)),s[95]||(s[95]=n(`:dist" (uglify) task
`,-1)),s[96]||(s[96]=t("b",{class:"t02"},"->",-1)),s[97]||(s[97]=t("b",{class:"t03"},"File js/temp_grunt.js created: 56.1 kB → 25.18 kB",-1)),s[98]||(s[98]=n(`
`,-1)),s[99]||(s[99]=t("b",{class:"t02"},"->",-1)),s[100]||(s[100]=n(`
`,-1)),s[101]||(s[101]=t("b",{class:"t02"},"->",-1)),s[102]||(s[102]=n('Running "',-1)),s[103]||(s[103]=t("b",{class:"t01"},"compass",-1)),s[104]||(s[104]=n(`:release" (compass) task
`,-1)),s[105]||(s[105]=t("b",{class:"t02"},"->",-1)),s[106]||(s[106]=n("   ",-1)),s[107]||(s[107]=t("b",{class:"t03"},"create img/sprite/ja-***********.png",-1)),s[108]||(s[108]=n(`
`,-1)),s[109]||(s[109]=t("b",{class:"t02"},"->",-1)),s[110]||(s[110]=n("   ",-1)),s[111]||(s[111]=t("b",{class:"t03"},"create img/sprite/en-***********.png",-1)),s[112]||(s[112]=n(`
`,-1)),s[113]||(s[113]=t("b",{class:"t02"},"->",-1)),s[114]||(s[114]=n("   ",-1)),s[115]||(s[115]=t("b",{class:"t03"},"create css/temp_grunt.css (0.214s)",-1)),s[116]||(s[116]=n(`
`,-1)),s[117]||(s[117]=t("b",{class:"t02"},"->",-1)),s[118]||(s[118]=t("b",{class:"t03"},"Compilation took 0.215s",-1)),s[119]||(s[119]=n(`
`,-1)),s[120]||(s[120]=t("b",{class:"t02"},"->",-1)),s[121]||(s[121]=n(`
`,-1)),s[122]||(s[122]=t("b",{class:"t02"},"->",-1)),s[123]||(s[123]=n(`Done, without errors.
`,-1))])]),_:1}),l(a,{title:"temp_grunt.zip"},{default:e(()=>[...s[124]||(s[124]=[t("pre",null,[n(`temp_grunt
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

`),t("b",{class:"t02"},"// README"),n(`

0) Introduce a virtual server to use php.
`),t("a",{href:"https://www.apachefriends.org/index.html",target:"_blank"},"https://www.apachefriends.org/index.html"),n(`

1) Install "sass".
$ `),t("b",{class:"t01"},"sudo gem install sass"),n(`

2) Install "compass".
$ `),t("b",{class:"t01"},"sudo gem install compass"),n(`

3) Install "node.js".
`),t("a",{href:"http://nodejs.org/",target:"_blank"},"http://nodejs.org/"),n(`

4) Install "grunt".
$ `),t("b",{class:"t01"},"sudo npm install -g grunt-cli"),n(`

5) Install "git".
`),t("a",{href:"http://git-scm.com/",target:"_blank"},"http://git-scm.com/"),n(`

a) Download and Unzip temp_grunt.zip

b) Change label of folder name from '`),t("b",{class:"t03"},"temp_grunt"),n("' to '"),t("b",{class:"t01"},"your_project_name"),n(`'.

c) Put this folder in your workspace.

workspace/
   └  `),t("b",{class:"t01"},"your_project_name/"),n(`

d) Enter top of this folder.

workspace/
   └  your_project_name/  `),t("b",{class:"t01"},"<- current"),n(`

e) Build the git project.
your_project_name $ `),t("b",{class:"t01"},"git init"),n(`
your_project_name $ `),t("b",{class:"t01"},"git add -A"),n(`
your_project_name $ `),t("b",{class:"t01"},'git commit -m "first commit"'),n(`

f) Change label from '`),t("b",{class:"t03"},"temp_grunt"),n("' to '"),t("b",{class:"t01"},"your_project_name"),n(`' in 'html/conf.html' and 'package.json'.
your_project_name $ `),t("b",{class:"t01"},"git grep -l temp_grunt | xargs sed -i '' -e 's/temp_grunt/your_project_name/g'"),n(`

g) Change name of scss file.
your_project_name $ `),t("b",{class:"t01"},"mv sass/temp_grunt.scss sass/your_project_name.scss"),n(`

h) Install node_modules.
your_project_name $ `),t("b",{class:"t01"},"sudo npm install"),n(`

i) Run grunt.
your_project_name $ `),t("b",{class:"t01"},"grunt"),n(`
`)],-1)])]),_:1})]),_:1})],64))}}),Ht=Object.freeze(Object.defineProperty({__proto__:null,default:Rn,metadata:K},Symbol.toStringTag,{value:"Module"})),_={updateDate:"2016/07/15"},Vn=f({__name:"gulp",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"gulp","update-date":_.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[l(a,{title:"install"},{default:e(()=>[...s[0]||(s[0]=[t("pre",null,[n(""),t("b",{class:"t01"},"http://nodejs.org/"),n("   "),t("b",{class:"t02"},"// node.js インストール"),n(`
`),t("b",{class:"t01"},"node -v"),n("  "),t("b",{class:"t02"},"// node.js バージョン確認"),n(`
`),t("b",{class:"t01"},"npm -v"),n("  "),t("b",{class:"t02"},"// npm(node package manager: https://www.npmjs.org/) バージョン確認"),n(`

`),t("b",{class:"t01"},"sudo npm install gulp -g"),n("  "),t("b",{class:"t02"},"// gulp グローバルインストール"),n(`
`),t("b",{class:"t01"},"gulp -version"),n("  "),t("b",{class:"t02"},"// gulp バージョン確認"),n(`

`),t("b",{class:"t01"},"npm list"),n(" [package name]  "),t("b",{class:"t02"},"// パッケージのバージョン確認"),n(`
`),t("b",{class:"t02"},"ex) npm list gulp-sass"),n(`
`)],-1)])]),_:1}),l(a,{title:"(node.js update)"},{default:e(()=>[...s[1]||(s[1]=[t("pre",null,[t("b",{class:"t01"},"sudo npm cache clean -f"),n(`
`),t("b",{class:"t01"},"sudo npm install -g n"),n(`
`),t("b",{class:"t01"},"sudo n latest"),n(`
`),t("b",{class:"t01"},"sudo n stable"),n(`
`),t("b",{class:"t01"},"sudo n"),n(` 4.7.0
`)],-1)])]),_:1}),l(a,{title:"(node.js uninstall)"},{default:e(()=>[...s[2]||(s[2]=[t("pre",null,[n(""),t("b",{class:"t02"},"// enter every 1 line"),n(`
`),t("b",{class:"t01"},`lsbom -f -l -s -pf /var/db/receipts/org.nodejs.node.pkg.bom \\
| while read i; do
  sudo rm /usr/local/\${i}
done`),n(`

`),t("b",{class:"t02"},"// enter every 1 line"),n(`
`),t("b",{class:"t01"},`sudo rm -rf /usr/local/lib/node \\
   /usr/local/lib/node_modules \\
   /var/db/receipts/org.nodejs.*`),n(`

`),t("b",{class:"t02"},"// delete npm"),n(`
`),t("b",{class:"t01"},"sudo rm -rf ~/.npm"),n(`
`)],-1)])]),_:1}),l(a,{title:"package.json"},{default:e(()=>[...s[3]||(s[3]=[t("pre",null,[n("1) "),t("b",{class:"t01"},"mkdir"),n(` project_name
2) `),t("b",{class:"t01"},"cd"),n(` project_name
3) `),t("b",{class:"t01"},"npm init"),n("  "),t("b",{class:"t02"},"// package.json 生成"),n(`

---

`),t("b",{class:"t01"},"project_name"),n(`
└ `),t("b",{class:"t03"},"package.json"),n(`

---

`),t("b",{class:"t02"},"// package.json"),n(`
`),t("b",{class:"t03"},`{
  "name": "`),n("project_name"),t("b",{class:"t03"},`",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
  "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}`),n(`

---

4) `),t("b",{class:"t01"},"sudo npm install gulp --save-dev"),n(`
`),t("b",{class:"t02"},"// gulpのローカルインストールと --save-dev でpackage.jsonの更新"),n(`

---

project_name
├ `),t("b",{class:"t03"},"node_modules/"),n(`
└ `),t("b",{class:"t03"},"package.json"),n(`

---

`),t("b",{class:"t02"},"// package.json"),n(`
{
  "name": "project_name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
  "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  `),t("b",{class:"t03"},`"devDependencies": {
  "gulp": "^3.9.0"
  }`),n(`
}
`)],-1)])]),_:1}),l(a,{title:"gulpfile.js"},{default:e(()=>[...s[4]||(s[4]=[t("pre",null,[n("5) "),t("b",{class:"t01"},"vi gulpfile.js"),n("  "),t("b",{class:"t02"},"// gulpfile.js 作成"),n(`

---

project_name
├ `),t("b",{class:"t01"},"gulpfile.js"),n(`
├ node_modules/
└ package.json

---

`),t("b",{class:"t02"},"// gulpfile.js"),n(`

`),t("b",{class:"t01"},`var gulp = require('gulp');

gulp.task('default', function() {`),n(`
  console.log('The task of the default was done.');
`),t("b",{class:"t01"},`});

gulp.task('`),n("typeA"),t("b",{class:"t01"},"', function() {"),n(`
  console.log('The task of the typeA was done.');
`),t("b",{class:"t01"},"});"),n(`

---

`),t("b",{class:"t02"},"// タスクの実行"),n(`

project_name $ `),t("b",{class:"t01"},"gulp"),n(`
`),t("b",{class:"t03"},"[14:51:54] Using gulpfile ~"),n("/workspace/project_name/"),t("b",{class:"t03"},`gulpfile.js
[14:51:54] Starting 'default'...
The task of the default was done.
[14:51:54] Finished 'default' after 80 μs`),n(`

project_name $ `),t("b",{class:"t01"},"gulp"),n(` typeA
`),t("b",{class:"t03"},"[14:51:59] Using gulpfile ~"),n("/workspace/project_name/"),t("b",{class:"t03"},`gulpfile.js
[14:51:59] Starting 'typeA'...
The task of the typeA was done.
[14:51:59] Finished 'typeA' after 61 μs`),n(`
`)],-1)])]),_:1}),l(a,{title:"plugin(example)"},{default:e(()=>[...s[5]||(s[5]=[t("pre",null,[n(""),t("b",{class:"t01"},"sudo npm install gulp --save-dev"),n(`
`),t("b",{class:"t01"},"sudo npm install gulp-sass --save-dev"),n(`

---

project_name
├ `),t("b",{class:"t01"},"gulpfile.js"),n(`
├ `),t("b",{class:"t03"},"node_modules/"),n(`
└ `),t("b",{class:"t03"},"package.json"),n(`

---

`),t("b",{class:"t02"},"// package.json"),n(`

{
  "name": "project_name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
  "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
  "gulp": "^3.9.0"`),t("b",{class:"t03"},`,
  "gulp-sass": "^2.0.3"`),n(`
  }
}

---

`),t("b",{class:"t02"},"// gulpfile.js"),n(`

var gulp = require('gulp');
`),t("b",{class:"t01"},"var sass = require('gulp-sass');"),n(`

`),t("b",{class:"t01"},"gulp.task('minify', function() {"),n(`
  console.log('sass function');
`),t("b",{class:"t01"},"});"),n(`

gulp.task('default', `),t("b",{class:"t01"},"['sass'],"),n(` function() {
  console.log('the task of the default was done.');
});

gulp.task('typeA', function() {
  console.log('the task of the typeA was done.');
});

---

`),t("b",{class:"t02"},"// タスクの実行"),n(`

project_name $ `),t("b",{class:"t01"},"gulp"),n(`
`),t("b",{class:"t03"},[n(`[15:27:26] Using gulpfile ~/workspace/project_name/gulpfile.js
[15:27:26] `),t("b",{class:"t01"},"Starting 'sass'..."),n(`
sass function
[15:27:26] `),t("b",{class:"t01"},"Finished 'sass' after 74 μs"),n(`
[15:27:26] Starting 'default'...
the task of the default was done.
[15:27:26] Finished 'default' after 26 μs`)]),n(`

project_name $ `),t("b",{class:"t01"},"gulp"),n(` typeA
`),t("b",{class:"t03"},`[15:27:30] Using gulpfile ~/workspace/project_name/gulpfile.js
[15:27:30] Starting 'typeA'...
the task of the typea was done.
[15:27:30] Finished 'typeA' after 49 μs`),n(`
`)],-1)])]),_:1}),l(a,{title:"plugin(gulp.spritesmith)"},{default:e(()=>[...s[6]||(s[6]=[t("pre",null,[n(""),t("b",{class:"t01"},"sudo npm install gulp --save-dev"),n(`
`),t("b",{class:"t01"},"sudo npm install gulp.spritesmith --save-dev"),n(`
`),t("b",{class:"t01"},"sudo npm install gulp-sass --save-dev"),n(`
`),t("b",{class:"t01"},"sudo npm install event-stream --save-dev"),n(),t("b",{class:"t02"},"// merge() を使うため"),n(`
`),t("b",{class:"t01"},"sudo npm install gulp-concat --save-dev"),n(),t("b",{class:"t02"},"// mapを結合するため"),n(`
`),t("b",{class:"t01"},"sudo npm install del --save-dev"),n(),t("b",{class:"t02"},"// 既存makeファイルの削除に使うため"),n(`

---

temp_gulp/
│
├ base64/
├ css/
├ `),t("b",{class:"t01"},"gulpfile.js"),n(`
├ html/
├ img/
│  `),t("b",{class:"t03"},"└ make/"),n(`
│    `),t("b",{class:"t03"},"├ spr-en-***********.png"),n(`
│    `),t("b",{class:"t03"},"└ spr-ja-***********.png"),n(`
├ js/
├ jsmod/
├ node_modules/
├ package.json
├ sass/
│  ├ `),t("b",{class:"t01"},"project_name.scss"),n(`
│  ├ `),t("b",{class:"t01"},"_conf.scss"),n(`
│  └ elements/
│    ├ _base.scss
│    ├ `),t("b",{class:"t01"},"_module.scss"),n(`
│    ├ lib/
│    │  ├ _reset.scss
│    │  └ `),t("b",{class:"t01"},"_utility.scss"),n(`
│    └ `),t("b",{class:"t03"},"make/"),n(`
│      `),t("b",{class:"t03"},"├ _concat.scss"),n(`
│      `),t("b",{class:"t03"},"└ spr/"),n(`
│        `),t("b",{class:"t03"},"├ _spr_en.scss"),n(`
│        `),t("b",{class:"t03"},"└ _spr_ja.scss"),n(`
└ sprite/
  ├ `),t("b",{class:"t01"},"en/"),n(`
  │   `),t("b",{class:"t01"},"├ blue.png"),n(`
  │   `),t("b",{class:"t01"},"├ green.png"),n(`
  │   `),t("b",{class:"t01"},"└ red.png"),n(`
  └ `),t("b",{class:"t01"},"ja/"),n(`
    `),t("b",{class:"t01"},"├ blue.png"),n(`
    `),t("b",{class:"t01"},"├ green.png"),n(`
    `),t("b",{class:"t01"},"└ red.png"),n(`

---

// gulpfile.js (no edit)

`),t("b",{class:"t02"},"// 変数の定義"),n(`
var gulp = require('gulp');
var del = require('del');
var sprite = require('gulp.spritesmith');
var merge = require('event-stream').merge;
var concat = require('gulp-concat');
var fs = require('fs');
var aPath = require('path');

`),t("b",{class:"t02"},"// フォルダ取得の準備"),n(`
var getFolders = function(dir) {
  return fs.readdirSync(dir).filter(function(file) {
      return fs.statSync(aPath.join(dir, file)).isDirectory();
  });
}

`),t("b",{class:"t02"},"// image と map の生成"),n(`
gulp.task('sprites', function() {

  `),t("b",{class:"t02"},"// 既存makeファイルの削除"),n(`
  del('img/make/*.png');

  `),t("b",{class:"t02"},"// ファイル名の末尾につける乱数の生成"),n(`
  var rdm = (new Date()).getTime();

  `),t("b",{class:"t02"},"// フォルダの取得"),n(`
  var folders = getFolders('sprite/');

  `),t("b",{class:"t02"},"// spriteフォルダの中にフォルダがなければスキップ"),n(`
  if(folders[0] !== undefined){

    `),t("b",{class:"t02"},"// 複数フォルダ分のmapを同時にreturnするためにmergeが必要"),n(`
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

`),t("b",{class:"t02"},"// 生成したmapと_utility.scssを結合"),n(`
gulp.task('scss_concat', ['sprites'], function() {

  return gulp.src([
      'sass/elements/make/spr/*.scss',
      'sass/elements/lib/_utility.scss'
    ])
    .pipe(concat('_concat.scss'))
    .pipe(gulp.dest('sass/elements/make'))
});

`),t("b",{class:"t02"},"// sassコンパイル"),n(`
gulp.task('sass', ['scss_concat'], function() {

  return gulp.src([
      'sass/**/*.scss',
      '!sass/elements/make/spr/*.scss',
      '!sass/elements/lib/_utility.scss'
    ])
    .pipe(sass())
    .pipe(gulp.dest('css'))
});


`),t("b",{class:"t02"},"// タスクの順番制御はrun-sequenceモジュールでもできる"),n(`

---

// project_name.scss (no edit)

@import "conf";
@import "elements/make/concat";

---

// _conf.scss (no edit)

`),t("b",{class:"t02"},"// default value (フォルダ10個まで対応可能にする場合)"),n(`
$spr-0: null !default; `),t("b",{class:"t02"},"// no edit"),n(`
$spr-1: null !default; `),t("b",{class:"t02"},"// no edit"),n(`
$spr-2: null !default; `),t("b",{class:"t02"},"// no edit"),n(`
$spr-3: null !default; `),t("b",{class:"t02"},"// no edit"),n(`
$spr-4: null !default; `),t("b",{class:"t02"},"// no edit"),n(`
$spr-5: null !default; `),t("b",{class:"t02"},"// no edit"),n(`
$spr-6: null !default; `),t("b",{class:"t02"},"// no edit"),n(`
$spr-7: null !default; `),t("b",{class:"t02"},"// no edit"),n(`
$spr-8: null !default; `),t("b",{class:"t02"},"// no edit"),n(`
$spr-9: null !default; `),t("b",{class:"t02"},"// no edit"),n(`

---

// _utility.scss (no edit)

`),t("b",{class:"t02"},"// フォルダ10個まで対応可能にする場合"),n(`
$spr: ($spr-0, $spr-1, $spr-2, $spr-3, $spr-4, $spr-5, $spr-6, $spr-7, $spr-8, $spr-9);

`),t("b",{class:"t02"},"// プレイスホルダーセレクタを生成"),n(`
@for $i from 1 through length($spr) {

  `),t("b",{class:"t02"},"// それぞれのフォルダのmapが生成されてなかったらスキップ"),n(`
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

`),t("b",{class:"t02"},"// retina"),n(`
@for $i from 1 through length($spr) {

  `),t("b",{class:"t02"},"// それぞれのフォルダのmapが生成されてなかったらスキップ"),n(`
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
  @extend %spr-`),t("b",{class:"t01"},"ja"),n("-"),t("b",{class:"t01"},"blue"),n(`;
}
.foo02 {
  @extend %spr-`),t("b",{class:"t01"},"ja"),n("-"),t("b",{class:"t01"},"green"),n(`;
}
.foo03 {
  @extend %spr-`),t("b",{class:"t01"},"ja"),n("-"),t("b",{class:"t01"},"red"),n(`;
}
.foo04 {
  @extend %spr-rtn-`),t("b",{class:"t01"},"en"),n("-"),t("b",{class:"t01"},"blue"),n(`;
}
.foo05 {
  @extend %spr-rtn-`),t("b",{class:"t01"},"en"),n("-"),t("b",{class:"t01"},"green"),n(`;
}
.foo06 {
  @extend %spr-rtn-`),t("b",{class:"t01"},"en"),n("-"),t("b",{class:"t01"},"red"),n(`;
}

`),t("b",{class:"t02"},"// hide text は別途指定"),n(`

---

// html

<div class="foo01">ja/blue</div>
<div class="foo02">ja/red</div>
<div class="foo03">ja/green</div>
<div class="foo04">en/blue</div>
<div class="foo05">en/red</div>
<div class="foo06">en/green</div>

`)],-1)])]),_:1}),l(a,{title:"plugin(gulp-base64)"},{default:e(()=>[...s[7]||(s[7]=[t("pre",null,[n(""),t("b",{class:"t01"},"sudo npm install gulp --save-dev"),n(`
`),t("b",{class:"t01"},"sudo npm install gulp-base64 --save-dev"),n(`
`),t("b",{class:"t01"},"sudo npm install gulp.spritesmith --save-dev"),n(`
`),t("b",{class:"t01"},"sudo npm install gulp-concat --save-dev"),n(),t("b",{class:"t02"},"// mapを結合するため"),n(`
`),t("b",{class:"t01"},"sudo npm install gulp-sass --save-dev"),n(`

---

temp_gulp/
│
├ base64/
│  ├ `),t("b",{class:"t03"},"make/"),n(`
│  │  `),t("b",{class:"t03"},"└ base64.png"),n(`
│  ├ `),t("b",{class:"t01"},"yellow01.png"),n(`
│  └ `),t("b",{class:"t01"},"yellow02.png"),n(`
├ css/
├ gulpfile.js
├ html/
├ img/
├ js/
├ jsmod/
├ node_modules/
├ package.json
├ sass/
│  ├ `),t("b",{class:"t01"},"project_name.scss"),n(`
│  ├ `),t("b",{class:"t01"},"_conf.scss"),n(`
│  └ elements/
│    ├ _base.scss
│    ├ `),t("b",{class:"t01"},"_module.scss"),n(`
│    ├ lib/
│    │  ├ `),t("b",{class:"t01"},"_base64.scss"),n(`
│    │  ├ _reset.scss
│    │  └ `),t("b",{class:"t01"},"_utility.scss"),n(`
│    `),t("b",{class:"t03"},"└ make/"),n(`
│      `),t("b",{class:"t03"},"├ _concat.scss"),n(`
│      `),t("b",{class:"t03"},"├ base64/"),n(`
│      │   `),t("b",{class:"t03"},"├ _map.scss"),n(`
│      │   `),t("b",{class:"t03"},"└ _url.scss"),n(`
│      └ spr/
└ sprite/

---

// gulpfile.js (no edit)

`),t("b",{class:"t02"},"// 変数の定義"),n(`
var gulp = require('gulp');
var base64 = require('gulp-base64');
var sprite = require('gulp.spritesmith');
var concat = require('gulp-concat');
var fs = require('fs');
var aPath = require('path');

`),t("b",{class:"t02"},"// pngファイルの有無を取得"),n(`
fs.readdir('base64', function (err, list) {
  list.forEach(function (file) {
    if (aPath.extname(file) === '.png'){
      pngfiles = true;
    }
  })
})

`),t("b",{class:"t02"},"// pngfileがあればsprite mapを生成"),n(`
gulp.task('base64_map', function(pngfiles) {

  if(pngfiles){ `),t("b",{class:"t02"},"// pngfileがなければスキップ"),n(`

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

`),t("b",{class:"t02"},"// base64にエンコード"),n(`
gulp.task('base64_url', ['base64_map'], function() {

  if(pngfiles){ `),t("b",{class:"t02"},"// pngfileがなければスキップ"),n(`

    return gulp.src('sass/elements/lib/_base64.scss')
      .pipe(base64())
      .pipe(concat('_url.scss'))
      .pipe(gulp.dest('sass/elements/make/base64'));
  }
});

`),t("b",{class:"t02"},"// 生成したmapと_utility.scssを結合"),n(`
gulp.task('scss_concat', ['base64_url'], function() {

  return gulp.src([
      'sass/elements/make/base64/*.scss',
      'sass/elements/lib/_utility.scss'
    ])
    .pipe(concat('_concat.scss'))
    .pipe(gulp.dest('sass/elements/make'))
});

`),t("b",{class:"t02"},"// sassコンパイル"),n(`
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


`),t("b",{class:"t02"},"// タスクの順番制御はrun-sequenceモジュールでもできる"),n(`

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

`),t("b",{class:"t02"},"// scss生成により$base64-spritesが定義されていれば実行"),n(`
@if $base64-sprites != null {

  @for $i from 1 through length($base64-sprites) {

    `),t("b",{class:"t02"},"// プレイスホルダーセレクタを生成"),n(`
    %base64-#{nth(nth(nth($base64, 4), $i), 10)} {

      @extend %base64;

      width: nth(nth(nth($base64, 4), $i), 5);
      height: nth(nth(nth($base64, 4), $i), 6);
      background-position: nth(nth(nth($base64, 4), $i), 3) nth(nth(nth($base64, 4), $i), 4);
    }

    `),t("b",{class:"t02"},"// retina用"),n(`
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
  @extend %base64-`),t("b",{class:"t01"},"yellow01"),n(`;
}
.bar02 {
  @extend %base64-rtn-`),t("b",{class:"t01"},"yellow02"),n(`;
}

`),t("b",{class:"t02"},"// hide text は別途指定"),n(`

---

// html

<div class="bar01">yellow01</div>
<div class="bar02">yellow02</div>`)],-1)])]),_:1}),l(a,{title:"temp_gulp.zip"},{default:e(()=>[...s[8]||(s[8]=[t("pre",null,[n(`temp_gulp/
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

`),t("b",{class:"t02"},"// README"),n(`

---------------------------------------------------
workspace environment setting
---------------------------------------------------
0) Introduce a virtual server to use php.
`),t("a",{href:"https://www.apachefriends.org/index.html",target:"_blank"},"https://www.apachefriends.org/index.html"),n(`

1) Install "node.js".
`),t("a",{href:"http://nodejs.org/",target:"_blank"},"http://nodejs.org/"),n(`

2) Install "gulp".
$ `),t("b",{class:"t01"},"sudo npm install gulp -g"),n(`

---------------------------------------------------
temp_gulp setting
---------------------------------------------------
1) Change label of folder name from 'temp_gulp' to '`),t("b",{class:"t03"},"your_project_name"),n(`'.

2) Put this folder in your workspace.

workspace/
   └  `),t("b",{class:"t03"},"your_project_name/"),n(`

3) Enter top of this folder.

workspace/
   └  your_project_name/  `),t("b",{class:"t01"},"<- current"),n(`

4) install node_modules.
your_project_name $ `),t("b",{class:"t01"},"sudo npm install"),n(`

5) Run gulp.
your_project_name $ `),t("b",{class:"t01"},"gulp i"),n(`
your_project_name $ `),t("b",{class:"t01"},"gulp"),n(`


---

your_project_name/
│
├ README
├ base64/
│  ├ `),t("b",{class:"t03"},"make/"),n(`
│  │  `),t("b",{class:"t03"},"└ base64.png"),n(`
│  ├ yellow01.png
│  └ yellow02.png
├ css/
│  `),t("b",{class:"t03"},"└ your_project_name.css"),n(`
├ gulpfile.js
├ html/
├ img/
│  `),t("b",{class:"t03"},"└ make/"),n(`
│    `),t("b",{class:"t03"},"├ spr-en-***********.png"),n(`
│    `),t("b",{class:"t03"},"└ spr-ja-***********.png"),n(`
├ js/
│  `),t("b",{class:"t03"},"└ your_project_name.js"),n(`
├ jsmod/
├ `),t("b",{class:"t03"},"node_modules/"),n(`
├ package.json
├ sass/
│  ├ your_project_name.scss
│  ├ _conf.scss
│  └ elements/
│    ├ _base.scss
│    ├ _module.scss
│    ├ lib/
│    `),t("b",{class:"t03"},"│"),n(`  ├ _base64.scss
│    `),t("b",{class:"t03"},"│"),n(`  ├ _reset.scss
│    `),t("b",{class:"t03"},"│"),n(`  └ _utility.scss
│    `),t("b",{class:"t03"},"└ make/"),n(`
│      `),t("b",{class:"t03"},"├ _concat.scss"),n(`
│      `),t("b",{class:"t03"},"├ base64/"),n(`
│      `),t("b",{class:"t03"},"│   ├ _map.scss"),n(`
│      `),t("b",{class:"t03"},"│   └ _url.scss"),n(`
│      `),t("b",{class:"t03"},"└ spr/"),n(`
│        `),t("b",{class:"t03"},"├ _spr_en.scss"),n(`
│        `),t("b",{class:"t03"},"└ _spr_ja.scss"),n(`
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

$ gulp `),t("b",{class:"t02"},"// default (compile css,js)"),n(`

$ gulp `),t("b",{class:"t01"},"i"),n(),t("b",{class:"t02"},"// make sprite,base64"),n(`
$ gulp `),t("b",{class:"t01"},"w"),n(),t("b",{class:"t02"},"// watch, livereload"),n(`
$ gulp `),t("b",{class:"t01"},"r"),n(),t("b",{class:"t02"},"// minify css,js"),n(`
`)],-1)])]),_:1})]),_:1})],64))}}),qt=Object.freeze(Object.defineProperty({__proto__:null,default:Vn,metadata:_},Symbol.toStringTag,{value:"Module"})),nn={updateDate:"2020/12/19"},Fn=f({__name:"image-viewer",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"image-viewer","sample-url":"/sample/html/image-viewer.html","update-date":nn.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[0]||(s[0]=[n(`<!doctype html>
<title>image_viewer</title>

<style>
html, body {
  height: 100%;
  background: #f1f1f1;
}
body {
  margin: 0;
  padding: 8px 10px 10px;
  box-sizing: border-box;
}
.u {
  display: flex;
  align-items: flex-end;
  width: 100%;
  padding-top: 2px;
  font-size: 12px;
}
.u span + span {
  margin-left: 4px;
}
.u span + span::before {
  content: ' --- ';
}
.u input[type=text] {
  width: 7px;
  height: 12px;
  margin: 0 -2px 0 1px;
  font-size: 12px;
  background: #f1f1f1;
  border: none;
  outline: 0;
}
.u input[type=checkbox] {
  margin: 0;
  width: 12px;
  height: 12px;
  position: relative;
  top: 2px;
}
.b {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
  margin-top: 10px;
  border: #000 1px solid;
  background: #fff;
}
.i {
  display: flex;
  flex-wrap: wrap;
}
.i img {
  height: 80px;
  margin: 6px 6px 0 0;
  background-image:
    repeating-linear-gradient(
    180deg,
    #fff ,
    #fff 1px,
    transparent 1px,
    transparent 11px
      ),
  repeating-linear-gradient(
    90deg,
    #fff ,
    #fff 1px,
    #f1f1f1 1px,
    #f1f1f1 11px
      );
}
.p {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  background-image:
    repeating-linear-gradient(
    180deg,
    #fff ,
    #fff 1px,
    transparent 1px,
    transparent 11px
      ),
  repeating-linear-gradient(
    90deg,
    #fff ,
    #fff 1px,
    #f1f1f1 1px,
    #f1f1f1 11px
      );
}
.p.slideShow {
  background: #000;
}
.p.cover img {
  object-fit: cover;
  width: 100% !important;
  height: 100% !important;
}
.p img {
  max-width: 100%;
  max-height: 100%;
}
.p img:hover {
  border: #f93 1px solid;
}
.p.slideShow img:hover {
  border: none;
}
.p .fadeIn {
  animation: fadeIn 1s;
  animation-fill-mode: forwards;
}
.p .fadeOut {
  animation: fadeOut 1s;
  animation-fill-mode: forwards;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>

<div class='u'>
<span>image viewer</span>
<span>click - zoom in, out / left - prev / right - next / shift - zoom out / [ - slideshow ( interval<input type="text" value="2">s ) / ] - slideshow off / return - reset / object-fit cover <input type="checkbox"></span>
</div>
<div class="b">drop imgs</div>
<div class="i"></div>
<div class="p"></div>

<script>
const u = document.querySelector('.u'); // usage
const b = document.querySelector('.b'); // dropbox
const i = document.querySelector('.i'); // imagelist
const p = document.querySelector('.p'); // popup
const img = document.querySelector('.p img'); // image in popup
const files = [];

const interval = u.querySelector('input[type=text]');
let intervalSlideShow = interval.value * 1000;
interval.addEventListener('change', () => {
  intervalSlideShow = interval.value * 1000;
});
interval.addEventListener('focus', () => {
  interval.value = '';
});

const cover = u.querySelector('input[type=checkbox]');
cover.addEventListener('change', () => {
  if (cover.checked) {
    p.classList.add('cover');
  } else {
    p.classList.remove('cover');
  }
});

const makeHash = (file) => {
  const extention = file.name.slice((file.name.lastIndexOf('.') + 1));
  const size = file.tag.naturalWidth + 'x' + file.tag.naturalHeight;
  const name = file.name.substring(0, file.name.lastIndexOf('.'));
  location.hash = '(' + extention + ',' + size + ')' + name;
};

const nullHash = () => {
  location.hash = null;
};

const closeLayer = () => {
  p.style.display = 'none';
  p.classList.remove('slideShow');
  p.innerHTML = '';
  nullHash();
};

const openLayer = (img) => {
  p.style.display = 'flex';
  p.appendChild(img);
};

const callImg = (num) => {
  return files[num]['tag'];
};

const cloneImg = (num) => {
  return callImg(num).cloneNode(true);
};

const recordFilesData = (ev) => {
  if (!/^image/.test(ev.dataTransfer.files[0].type)) {
    return false;
  };
  Object.values(ev.dataTransfer.files).forEach((file) => {
    files.push(file);
  });
};

const addEventListenerImg = (img, clone, file) => {
  img.addEventListener('click', (el) => {
    openLayer(clone);

    if (clone.naturalWidth < clone.naturalHeight) {
      clone.style.width = 'auto';
    } else {
      clone.style.height = 'auto';
    };

    makeHash(file);
  });
};

const renderImgList = (ev) => {
  files.forEach((file, index) => {
    if (index < document.querySelectorAll('img').length) {
      return false;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.style.order = index;
      files[index]['tag'] = img;
      i.appendChild(img);
      addEventListenerImg(img, cloneImg(index), file);
    }
    reader.readAsDataURL(file);
  });
};

const renderSlideClone = (num) => {
  const clone = cloneImg(num);
  clone.classList.add('fadeIn');
  openLayer(clone);
  makeHash(files[num]);
};

const renderSlideClonePrev = (num) => {
  const clone = cloneImg(num);
  clone.classList.add('fadeOut');
  clone.style.position = 'absolute';
  p.appendChild(clone);
};

let slideId;
const clearSlide = (ev, id) => {
  if (ev.keyCode !== 219) {
    closeLayer();
  }
  clearInterval(slideId);
};
const slideShow = (order) => {
  if (files.length === 0) {
    return false;
  }

  const backgroundBlack = () => {
    p.classList.add('slideShow');
  };

  // first time
  p.style.display = 'flex';
  p.appendChild(cloneImg(order));
  backgroundBlack();

  let num;

  if (order === files.length - 1) {
    num = 0;
  } else {
    num = Number(order) + 1;
  }

  const id = setInterval(() => {
    slideId = id;
    const rewind = () => {
      num = 0;
    };

    closeLayer();
    backgroundBlack();
    if (num === files.length) {
      rewind();
    }
    renderSlideClone(num);
    if (num === 0) {
      renderSlideClonePrev(files.length - 1);
    } else {
      renderSlideClonePrev(num - 1);
    }
    num++;
    if (num === files.length) {
      rewind();
    }
    document.addEventListener('keydown', (ev) => {
      if (ev.keyCode === 221 || ev.keyCode === 16) {
        clearSlide(ev, id);
      }
    });
    p.addEventListener('click', (ev) => {
      clearSlide(ev, id);
    });
  }, intervalSlideShow);
};

b.addEventListener('dragover', (ev) => {
  ev.preventDefault();
});

b.addEventListener('drop', (ev) => {
  ev.preventDefault();
  recordFilesData(ev);
  renderImgList(ev);
});

p.addEventListener('click', () => {
  closeLayer();
});

document.addEventListener('keydown', (ev) => {
  const isSlideShow = p.classList.contains('slideShow');

  // reset app - return
  if (ev.keyCode === 13) {
    nullHash();
    location.reload();
  };

  // slideshow
  if (ev.keyCode === 219 && !isSlideShow) {
    let order;
    if (p.style.display === 'flex') {
      order = p.querySelector('img').style.order;
    } else {
      order = 0;
    }
    p.innerHTML = '';
    slideShow(order);
  }

  if (p.style.display !== 'flex') {
    return false;
  }

  // close layer - shift
  if (ev.keyCode === 16) {
    closeLayer();
    return false;
  };

  // switch img - left or right
  const currentImg = p.querySelector('img');
  const num = Number(currentImg.style.order);
  const switchImg = (targetNum) => {
    const clone = cloneImg(targetNum);
    p.removeChild(currentImg);
    p.appendChild(clone);
    makeHash(files[targetNum]);
  };
  const switchPreview = (ev) => {
    clearSlide(ev, slideId);
    openLayer(cloneImg(num));
  };
  if (ev.keyCode === 37) {
    if (isSlideShow) {
      switchPreview(ev);
      return false
    }
    if (num === 0) {
      switchImg(files.length - 1);
      return false;
    }
    switchImg(num - 1);
  }
  if (ev.keyCode === 39) {
    if (isSlideShow) {
      switchPreview(ev);
      return false
    }
    if (num === files.length - 1) {
      switchImg(0);
      return false;
    }
    switchImg(num + 1);
  }
});
<\/script>
`,-1)])]),_:1}),s[1]||(s[1]=n(`
`,-1))])]),_:1})],64))}}),Dt=Object.freeze(Object.defineProperty({__proto__:null,default:Fn,metadata:nn},Symbol.toStringTag,{value:"Module"})),tn={updateDate:"2018/01/16"},Un=f({__name:"jquery",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"jquery","update-date":tn.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[l(a,{title:"即時関数"},{default:e(()=>[t("pre",null,[s[1]||(s[1]=n("",-1)),l(o,null,{default:e(()=>[...s[0]||(s[0]=[n(`<!doctype html>
<title>title</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"><\/script>

<script>

`,-1),t("b",{class:"t01"},[n("(function("),t("b",{class:"t03"},"$"),n("){")],-1),n(),t("b",{class:"t02"},"// ※1",-1),n(`

  var foo = "a";
  console.log(foo);  `,-1),t("b",{class:"t02"},"// a",-1),n(`
  console.log($);  `,-1),t("b",{class:"t02"},"// function (e,t){return new v.fn.init(e,t,n)}",-1),n(`
  console.log(jQuery);  `,-1),t("b",{class:"t02"},"// function (e,t){return new v.fn.init(e,t,n)}",-1),n(`

`,-1),t("b",{class:"t01"},[n("})("),t("b",{class:"t03"},"jQuery"),n(");")],-1),n(),t("b",{class:"t02"},"// ※2",-1),n(`

console.log(foo);  `,-1),t("b",{class:"t02"},"// Uncaught ReferenceError: foo is not defined ",-1),n(`

`,-1),t("b",{class:"t02"},"// 即時関数は、定義と呼び出しを兼ね、実行後はundefinedになる",-1),n(`
`,-1),t("b",{class:"t02"},"// 即時関数で囲む場合、jQueryオブジェクトを変数$に格納してスコープを関数内に制限し、他ライブラリのグローバル$から影響を受けないようにする",-1),n(`
`,-1),t("b",{class:"t02"},"// ※2のjQueryオブジェクトが引数として※1の$に入る",-1),n(`

<\/script>
`,-1)])]),_:1}),s[2]||(s[2]=n(`
`,-1))])]),_:1}),l(a,{title:"onDomReady"},{default:e(()=>[t("pre",null,[s[5]||(s[5]=n(`// その1
`,-1)),s[6]||(s[6]=t("b",{class:"t01"},"jQuery(function($){",-1)),s[7]||(s[7]=n(`
  `,-1)),s[8]||(s[8]=t("b",{class:"t02"},"処理;",-1)),s[9]||(s[9]=n(`
`,-1)),s[10]||(s[10]=t("b",{class:"t01"},"});",-1)),s[11]||(s[11]=n(`


// その2
`,-1)),s[12]||(s[12]=t("b",{class:"t01"},"$(document).ready(function(){",-1)),s[13]||(s[13]=n(`
  `,-1)),s[14]||(s[14]=t("b",{class:"t02"},"処理;",-1)),s[15]||(s[15]=n(`
`,-1)),s[16]||(s[16]=t("b",{class:"t01"},"});",-1)),s[17]||(s[17]=n(`


// その3 `,-1)),s[18]||(s[18]=t("b",{class:"t02"},"- その2から (document).ready を省略",-1)),s[19]||(s[19]=n(`
`,-1)),s[20]||(s[20]=t("b",{class:"t01"},"$(function(){",-1)),s[21]||(s[21]=n(`
  `,-1)),s[22]||(s[22]=t("b",{class:"t02"},"処理;",-1)),s[23]||(s[23]=n(`
`,-1)),s[24]||(s[24]=t("b",{class:"t01"},"});",-1)),s[25]||(s[25]=n(`


`,-1)),s[26]||(s[26]=t("b",{class:"t02"},"// DOM構築が完了した後、処理を実行する",-1)),s[27]||(s[27]=n(`
`,-1)),s[28]||(s[28]=t("b",{class:"t02"},"// 上の3つは同じ動作",-1)),s[29]||(s[29]=n(`
`,-1)),s[30]||(s[30]=t("b",{class:"t02"},"// DOM参照するときに必要な場合が多い",-1)),s[31]||(s[31]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[3]||(s[3]=[n(`<!doctype html>
<title>title</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"><\/script>

<script>

`,-1),t("b",{class:"t01"},"jQuery(function($){",-1),n("   ",-1),t("b",{class:"t02"},"// onDomReady(その1)",-1),n(`

  console.log('b');

`,-1),t("b",{class:"t01"},"});",-1),n(`

console.log('a');

`,-1),t("b",{class:"t02"},"// a -> b の順に実行",-1),n(`
`,-1),t("b",{class:"t02"},"// その2や3は、即時関数で囲まないと$変数が他のライブラリと競合してしまう可能性がある",-1),n(`

<\/script>
`,-1)])]),_:1}),s[32]||(s[32]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[4]||(s[4]=[n(`<!doctype html>
<title>title</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"><\/script>

<script>

`,-1),t("b",{class:"t03"},"(function($){",-1),n("   ",-1),t("b",{class:"t02"},"// 即時関数",-1),n(`
  `,-1),t("b",{class:"t01"},"$(function(){",-1),n("   ",-1),t("b",{class:"t02"},"// onDomReady(その3)",-1),n(`

    console.log('b');

  `,-1),t("b",{class:"t01"},"});",-1),n(`
`,-1),t("b",{class:"t03"},"})(jQuery);",-1),n(`

console.log('a');

`,-1),t("b",{class:"t02"},"// a -> b の順に実行",-1),n(`
`,-1),t("b",{class:"t02"},"// その2や3でも即時関数内に入れれば$の競合は避けられるが、実行後undefinedになるので注意",-1),n(`

<\/script>
`,-1)])]),_:1}),s[33]||(s[33]=n(`
`,-1))])]),_:1}),l(a,{title:'$("セレクタ").メソッド(…);'},{default:e(()=>[t("pre",null,[s[35]||(s[35]=n("",-1)),l(o,null,{default:e(()=>[...s[34]||(s[34]=[n(`<!doctype html>
<title>title</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"><\/script>

<script>

jQuery(function($){ `,-1),t("b",{class:"t02"},"// onDomReady",-1),n(`

  `,-1),t("b",{class:"t01"},"$(",-1),n('".red"',-1),t("b",{class:"t01"},").",-1),n("css",-1),t("b",{class:"t01"},"(",-1),n('"background-color","#f00"',-1),t("b",{class:"t01"},");",-1),n(`
  `,-1),t("b",{class:"t01"},"$(",-1),n('".green"',-1),t("b",{class:"t01"},").",-1),n("css",-1),t("b",{class:"t01"},"(",-1),n('"background-color","#0f0"',-1),t("b",{class:"t01"},");",-1),n(`
  `,-1),t("b",{class:"t01"},"$(",-1),n('".blue"',-1),t("b",{class:"t01"},").",-1),n("css",-1),t("b",{class:"t01"},"(",-1),n('"background-color","#00f"',-1),t("b",{class:"t01"},");",-1),n(`

});

`,-1),t("b",{class:"t02"},'// $("セレクタ").メソッド(…); が基本の形',-1),n(`
`,-1),t("b",{class:"t02"},"// .css() は数あるメソッドの内の１つ",-1),n(`
`,-1),t("b",{class:"t02"},"// メソッドは後ろに複数連結可能",-1),n(`

<\/script>

<p class="red">.red </p>
<p class="green">.green </p>
<p class="blue">.blue </p>
`,-1)])]),_:1}),s[36]||(s[36]=n(`
`,-1))])]),_:1}),l(a,{title:"イベントリスナ"},{default:e(()=>[t("pre",null,[s[38]||(s[38]=n("",-1)),l(o,null,{default:e(()=>[...s[37]||(s[37]=[n(`<!doctype html>
<title>title</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"><\/script>

<div class="foo">click 1</div>
<div class="foo">click 2</div>
<div class="foo">click 3</div>

<script>

function fncConsole(ev){
  console.log(ev.target.innerHTML);
}

`,-1),t("b",{class:"t03"},"$(function(){",-1),n(),t("b",{class:"t02"},"// onDomReady",-1),n(`
  `,-1),t("b",{class:"t01"},'$("',-1),n(".foo",-1),t("b",{class:"t01"},'").on("',-1),n("click",-1),t("b",{class:"t01"},'", function(',-1),n("ev",-1),t("b",{class:"t01"},"){",-1),n(`
    fncConsole(ev);
  `,-1),t("b",{class:"t01"},"});",-1),n(`
`,-1),t("b",{class:"t03"},"});",-1),n(`

`,-1),t("b",{class:"t02"},"// onDomReadyは必要ない場合もある",-1),n(`
`,-1),t("b",{class:"t02"},`// 上記 click 以外のイベント
// mouseover, mouseout, mousedown, mouseup, mousemove, dblclick, keydown, keyup, focus, blur, change, resize, scroll など`,-1),n(`

<\/script>
`,-1)])]),_:1}),s[39]||(s[39]=n(`
`,-1))])]),_:1}),l(a,{title:"メソッド作成"},{default:e(()=>[t("pre",null,[s[41]||(s[41]=n("",-1)),l(o,null,{default:e(()=>[...s[40]||(s[40]=[n(`<!doctype html>
<title>title</title>
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"><\/script>

<script>
jQuery(function($){


// デフォルトのスタイルシートをjQueryで指定

`,-1),t("b",{class:"t01"},`$(":not('input')").css("margin","1px").css("padding","1px").css("font-size","12px").css("line-height","1em").css("border","#fff 1px solid");
$("li").css("list-style","none");`,-1),n(`
$("li, div span, p").css("margin-left","10px");
$("span").css("display","block");

`,-1),t("b",{class:"t02"},'// $("セレクタ").メソッド(…); が基本の形',-1),n(`
`,-1),t("b",{class:"t02"},"// .css() は数あるメソッドの内の１つ",-1),n(`
`,-1),t("b",{class:"t02"},"// メソッドは後ろに複数連結可能",-1),n(`

`,-1),t("b",{class:"t02"},`// 一行目は以下のように書ける
// $(":not('input')").css({
//  "margin": "1px",
//  "padding": "1px",
//  "font-size": "12px",
//  "line-height": "1em",
//  "border": "#fff 1px solid"
// });`,-1),n(`

`,-1),t("b",{class:"t02"},`// 一行目は以下のようにも書ける
// var foo = {
//  "margin": "1px",
//  "padding": "1px",
//  "font-size": "12px",
//  "line-height": "1em",
//  "border": "#fff 1px solid"
// }
// $(":not('input')").css(foo);`,-1),n(`

`,-1),t("b",{class:"t02"},`// 一行目は以下のようにも書ける
// function foo() {
//   return {
//   "margin": "1px",
//   "padding": "1px",
//   "font-size": "12px",
//   "line-height": "1em",
//   "border": "#fff 1px solid"
//   }
// }
// $(":not('input')").css(foo());`,-1),n(`


// メソッド作成

`,-1),t("b",{class:"t01"},"$.fn.",-1),n("redBorder",-1),t("b",{class:"t01"}," = function(){",-1),n(`
  reset(); `,-1),t("b",{class:"t02"},"// リセット用関数の実行",-1),n(`
  this.css("border","#f00 1px solid").css("background-color","rgba(255,0,0,0.1)"); `,-1),t("b",{class:"t02"},"// thisに入るオブジェクトに対してborder,background-colorを付ける",-1),n(`
`,-1),t("b",{class:"t01"},"}",-1),n(`
`,-1),t("b",{class:"t02"},"/*",-1),n(`
`,-1),t("b",{class:"t02"},"$.fn.メソッド名 = function(){",-1),n(`
`,-1),t("b",{class:"t02"},"  処理;",-1),n(`
`,-1),t("b",{class:"t02"},"}",-1),n(`
`,-1),t("b",{class:"t02"},"が基本の形",-1),n(`
`,-1),t("b",{class:"t02"},"*/",-1),n(`


// リセット用関数の定義

reset = function() {$(":not('input')").css("border","#fff 1px solid").css("background-color","rgba(255,255,255,1)");}
`,-1),t("b",{class:"t02"},"// input以外の全てのborder,background-colorをリセット",-1),n(`


// clickしたinputのvalueが示すオブジェクトをredBorderメソッドに伝える

$("input").on("click", function(){
  `,-1),t("b",{class:"t01"},"$(this.value)",-1),n(`.redBorder();
  `,-1),t("b",{class:"t02"},"// this -> clickされたinputオブジェクト",-1),n(`
  `,-1),t("b",{class:"t02"},"// this.value -> そのinputのvalueの文字列",-1),n(`
  `,-1),t("b",{class:"t02"},"// $(this.value) -> そのvalueが示すDOM要素をまとめたオブジェクト",-1),n(`
});


});
<\/script>


<h1>h1</h1>
<h1 id="ttl">h1(id="ttl")</h1>
<h2>h2</h2>
<ul>ul
<li>li</li>
</ul>
<ul>ul
<li>li</li>
<li class="cls">li(class="cls")</li>
</ul>
<ul>ul
<li class="sty1">li(class="sty1")</li>
<li class="sty2 sty1">li(class="sty2 sty1")</li>
<li class="sty1 sty2">li(class="sty1 sty2")</li>
<li class="sty1-sty2">li(class="sty1-sty2")</li>
</ul>
<span>span</span>
<span>span</span>
<div>div
<span>span</span>
<span>span</span>
<span>span</span>
</div>
<span>span</span>
<span>span</span>
<div>div
<p>p
<span>span</span>
<span>span</span>
<span>span</span>
<span>span</span>
</p>
</div>
<div>div
<span>span</span>
</div>
<div>div
<p>p</p>
<span>span</span>
</div>
<div>div(include empty span)
<span></span>
</div>
<span>span</span>
<span>span</span>

<div style="background:#eee;">
<input type="button" onclick="reset()" value="reset">
<input type="button" value='h1'>
<input type="button" value='ul'>
<input type="button" value='li'>
<input type="button" value='h1, li'>
<input type="button" value='#ttl'>
<input type="button" value='.cls'>
<input type="button" value=':header'>
<input type="button" value='li[class]'>
<input type="button" value='li[class="sty1"]'>
<input type="button" value='li[class^="sty1"]'>
<input type="button" value='li[class|="sty1"]'>
<input type="button" value='li[class$="y2"]'>
<input type="button" value='li[class*="sty1"]'>
<input type="button" value='span'>
<input type="button" value='div span'>
<input type="button" value='div > span'>
<input type="button" value='div + span'>
<input type="button" value='div ~ span'>
<input type="button" value='span:first'>
<input type="button" value='span:first-child'>
<input type="button" value='span:first-of-type'>
<input type="button" value='span:last'>
<input type="button" value='span:last-child'>
<input type="button" value='span:last-of-type'>
<input type="button" value='span:nth-child(2)'>
<input type="button" value='span:nth-of-type(2)'>
<input type="button" value='span:nth-last-child(2)'>
<input type="button" value='span:nth-last-of-type(2)'>
<input type="button" value='span:nth-child(even)'>
<input type="button" value='span:even'>
<input type="button" value='span:nth-child(odd)'>
<input type="button" value='span:odd'>
<input type="button" value='span:only-child'>
<input type="button" value='span:only-of-type'>
<input type="button" value='span:eq(5)'>
<input type="button" value='span:lt(5)'>
<input type="button" value='span:gt(5)'>
<input type="button" value='span:empty'>
<input type="button" value=':not(h2,span,input)'>
<input type="button" value='div:has(p)'>
</div>
`,-1)])]),_:1}),s[42]||(s[42]=n(`

`,-1))])]),_:1}),l(a,{title:"each"},{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[43]||(s[43]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"><\/script>

<ul>
<li></li>
<li></li>
<li></li>
</ul>

<script>
$(function(){`,-1),n(`
  var `,-1),t("b",{class:"t03"},"arr",-1),n(` = $("li");
  `,-1),t("b",{class:"t01"},[n("$.each("),t("b",{class:"t03"},"arr"),n(", function("),t("b",{class:"t04"},"index"),n("){")],-1),n(`
    $(`,-1),t("b",{class:"t05"},"this",-1),n(").text(",-1),t("b",{class:"t04"},"index",-1),n(`);
    `,-1),t("b",{class:"t02"},`console.log(index); // 0, 1, 2
    console.log(this); // <li>0</li>, <li>1</li>, <li>2</li>
    console.log($(this)); // [li, context: li], [li, context: li], [li, context: li]`,-1),n(`
  `,-1),t("b",{class:"t01"},"});",-1),n(`
`,-1),t("b",{class:"t02"},`});
<\/script>`,-1),n(`
`,-1)])]),_:1}),s[44]||(s[44]=n(`

`,-1))])]),_:1}),l(a,{title:"extend"},{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[45]||(s[45]=[n(`<!doctype html>
<title>title</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"><\/script>

<script>
jQuery(function($){

var `,-1),t("b",{class:"t05"},`obj_1 = {
  v1: "a",
  v2: "B"
}`,-1),n(`

var `,-1),t("b",{class:"t03"},`obj_2 = {
  v2: "b",
  v3: "c"
}`,-1),n(`

`,-1),t("b",{class:"t01"},"$.extend(",-1),t("b",{class:"t05"},"obj_1",-1),t("b",{class:"t01"},", ",-1),t("b",{class:"t03"},"obj_2",-1),t("b",{class:"t01"},");",-1),n(`

console.log(`,-1),t("b",{class:"t05"},"obj_1",-1),n("); ",-1),t("b",{class:"t02"},'// merged // {v1: "a", v2: "b", v3: "c"}',-1),n(`
console.log(`,-1),t("b",{class:"t03"},"obj_2",-1),n("); ",-1),t("b",{class:"t02"},"// no merged",-1),n(`

});
<\/script>
`,-1)])]),_:1}),s[46]||(s[46]=n(`
`,-1))])]),_:1}),l(a,{title:"///"},{default:e(()=>[t("pre",null,[s[48]||(s[48]=n(`

`,-1)),l(o,null,{default:e(()=>[...s[47]||(s[47]=[n(`<!doctype html>
<title>title</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"><\/script>

<script>
jQuery(function($){



});
<\/script>
`,-1)])]),_:1}),s[49]||(s[49]=n(`


`,-1))])]),_:1})]),_:1})],64))}}),Nt=Object.freeze(Object.defineProperty({__proto__:null,default:Un,metadata:tn},Symbol.toStringTag,{value:"Module"})),sn={updateDate:"2021/03/15"},Qn=f({__name:"js",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"js","update-date":sn.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[l(a,{title:"script設定"},{default:e(()=>[...s[0]||(s[0]=[t("pre",null,[t("b",{class:"t01"},'<meta http-equiv="Content-Script-Type" content="text/javascript">'),n(`

`),t("b",{class:"t02"},"// HTML5ならデフォルトのContent-Script-TypeがJavaScriptなので省略可")],-1)])]),_:1}),l(a,{title:"内部script"},{default:e(()=>[t("pre",null,[s[3]||(s[3]=n(`// 書式


`,-1)),s[4]||(s[4]=t("b",{class:"t01"},'<script type="text/javascript">',-1)),s[5]||(s[5]=n("  ",-1)),s[6]||(s[6]=t("b",{class:"t02"},"// HTML5ならtypeは省略可",-1)),s[7]||(s[7]=n(`

  処理;

/*
複数行
コメント
*/

// 一行コメント
`,-1)),s[8]||(s[8]=t("b",{class:"t01"},"<\/script>",-1)),s[9]||(s[9]=n(`


---


// 最小のHTML5


`,-1)),l(o,null,{default:e(()=>[...s[1]||(s[1]=[n(`<!doctype html>
<title>title</title>
<script>

<\/script>
`,-1)])]),_:1}),s[10]||(s[10]=n(`


---


// JavaScript未対応ブラウザ対策


`,-1)),l(o,null,{default:e(()=>[...s[2]||(s[2]=[n(`<!doctype html>
<title>title</title>
<script>
`,-1),t("b",{class:"t01"},"<!--",-1),n(`
処理;
`,-1),t("b",{class:"t01"},"// -->",-1),n(`
<\/script>
`,-1),t("b",{class:"t02"},"// scriptを表示してしまうのを防ぐためコメントアウト",-1),n(`
`,-1),t("b",{class:"t02"},"// 閉じコメントアウトの//はNetscape用",-1),n(`
`,-1),t("b",{class:"t01"},"<noscript>",-1),n(`
JavaScript対応ブラウザで表示してください。
`,-1),t("b",{class:"t01"},"</noscript>",-1),n(`
`,-1)])]),_:1})])]),_:1}),l(a,{title:"外部script"},{default:e(()=>[...s[11]||(s[11]=[t("pre",null,[t("b",{class:"t01"},'<script src="'),n("読み込むファイルのパス"),t("b",{class:"t01"},'"><\/script>'),n(`
`),t("b",{class:"t01"},'<script src="'),n("読み込むファイルのパス"),t("b",{class:"t01"},'" async><\/script>'),n(),t("b",{class:"t02"},"// async load, immediately run"),n(`
`),t("b",{class:"t01"},'<script src="'),n("読み込むファイルのパス"),t("b",{class:"t01"},'" defer><\/script>'),n(),t("b",{class:"t02"},"// async load, run after analysis HTML"),n(`
`)],-1)])]),_:1}),l(a,{title:"変数"},{default:e(()=>[t("pre",null,[s[13]||(s[13]=n("",-1)),l(o,null,{default:e(()=>[...s[12]||(s[12]=[t("b",{class:"t01"},"var",-1),n(` foo = 42;
console.log(foo);  `,-1),t("b",{class:"t02"},"// 42",-1),n(`

var bar = 84`,-1),t("b",{class:"t01"},",",-1),n(" baz = 126;  ",-1),t("b",{class:"t02"},"// まとめて定義可能",-1),n(`
console.log(bar);  `,-1),t("b",{class:"t02"},"// 84",-1),n(`
console.log(baz);  `,-1),t("b",{class:"t02"},"// 126",-1),n(`
`,-1)])]),_:1}),s[14]||(s[14]=n(`

`,-1)),s[15]||(s[15]=t("b",{class:"t02"},"// 変数名には半角英数字とアンダースコアとドルが利用可能",-1)),s[16]||(s[16]=n(`
`,-1)),s[17]||(s[17]=t("b",{class:"t02"},"// 変数名の先頭は数字NG",-1)),s[18]||(s[18]=n(`

`,-1)),s[19]||(s[19]=t("b",{class:"t02"},"// 予約語は利用不可",-1)),s[20]||(s[20]=n(`
`,-1)),s[21]||(s[21]=t("b",{class:"t02"},"// abstract, boolean, break, byte, case, catch, char, class, comment, const, continue, debugger, default, delete, do, double, else, enum, export, extends, false, final, finally, float, for, function, goto, if, implements, import, in, instanceof, int, interface, label, long, native, new, null, package, private, protected, public, return, short, static, super, switch, synchronized, this, throw, throws, transient, true, try, typeof, var, void, volatile, while, with",-1))])]),_:1}),l(a,{title:"データ型"},{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[22]||(s[22]=[n("console.log('foo');　　",-1),t("b",{class:"t02"},[n("// foo(文字列,"),t("b",{class:"t01"},"string"),n(")")],-1),n(`
console.log('42');　　`,-1),t("b",{class:"t02"},"// 42(文字列,string)",-1),n(`
console.log(42);　　`,-1),t("b",{class:"t02"},[n("// 42(数値,"),t("b",{class:"t01"},"number"),n(")")],-1),n(`
console.log(42 === 42);　　`,-1),t("b",{class:"t02"},[n("// true(真偽値,"),t("b",{class:"t01"},"boolean"),n(")")],-1),n(`
console.log(42 !== 42);　　`,-1),t("b",{class:"t02"},"// false(真偽値,boolean)",-1),n(`

console.log(document.getElementById('foo'));　　`,-1),t("b",{class:"t02"},[n("// "),t("b",{class:"t01"},"null"),n("(期待される値が存在しない場合)")],-1),n(`
console.log(typeof null);　　`,-1),t("b",{class:"t02"},"// object",-1),n(`

var bar;
console.log(bar);　　`,-1),t("b",{class:"t02"},[n("// "),t("b",{class:"t01"},"undefined"),n("(未定義の値)")],-1),n(`
console.log(typeof undefined);　　`,-1),t("b",{class:"t02"},"// undefined",-1),n(`

console.log(0 / 0);　　`,-1),t("b",{class:"t02"},[n("// "),t("b",{class:"t01"},"NaN"),n("(数値が期待されるが数値ではない値, Not a Number)")],-1),n(`

console.log(42 / 0);　　`,-1),t("b",{class:"t02"},[n("// "),t("b",{class:"t01"},"Infinity"),n("(正の無限大)")],-1),n(`
console.log(-42 / 0);　　`,-1),t("b",{class:"t02"},[n("// "),t("b",{class:"t01"},"-Infinity"),n("(負の無限大)")],-1),n(`
`,-1),t("b",{class:"t02"},"// 1.79769313486231570e+308を超える数",-1),n(`
`,-1)])]),_:1}),s[26]||(s[26]=n(`

---

// 数値の種類

`,-1)),l(o,null,{default:e(()=>[...s[23]||(s[23]=[n("console.log(42);  ",-1),t("b",{class:"t02"},"// 42：10進数",-1),n(`
console.log(`,-1),t("b",{class:"t01"},"0",-1),n("42);  ",-1),t("b",{class:"t02"},"// 34：8進数",-1),n(`
console.log(`,-1),t("b",{class:"t01"},"0x",-1),n("42);  ",-1),t("b",{class:"t02"},"// 66：16進数",-1),n(`
console.log(42.8`,-1),t("b",{class:"t01"},"e",-1),n("4);  ",-1),t("b",{class:"t02"},"// 428000：浮動小数点数（42.8×10の4乗）",-1),n(`
`,-1)])]),_:1}),s[27]||(s[27]=n(`

---

// エスケープシーケンス

`,-1)),l(o,null,{default:e(()=>[...s[24]||(s[24]=[n("console.log('",-1),t("b",{class:"t01"},"\\",-1),n("n');  ",-1),t("b",{class:"t02"},"// 改行(LF)",-1),n(`
console.log('`,-1),t("b",{class:"t01"},"\\",-1),n("r');  ",-1),t("b",{class:"t02"},"// リターン(CR)",-1),n(`
console.log('`,-1),t("b",{class:"t01"},"\\",-1),n("t');  ",-1),t("b",{class:"t02"},"// タブ",-1),n(`
console.log('`,-1),t("b",{class:"t01"},"\\",-1),n("\\');  ",-1),t("b",{class:"t02"},"// \\",-1),n(`
console.log('`,-1),t("b",{class:"t01"},"\\",-1),n("'');  ",-1),t("b",{class:"t02"},"// '",-1),n(`
console.log('`,-1),t("b",{class:"t01"},"\\",-1),n(`"');  `,-1),t("b",{class:"t02"},'// "',-1),n(`
`,-1)])]),_:1}),s[28]||(s[28]=n(`

---

// falsy

`,-1)),l(o,null,{default:e(()=>[...s[25]||(s[25]=[n("console.log(",-1),t("b",{class:"t01"},"Boolean(",-1),n("'string'",-1),t("b",{class:"t01"},"));",-1),n("  ",-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(`,-1),t("b",{class:"t01"},"Boolean(",-1),n("true",-1),t("b",{class:"t01"},"));",-1),n("  ",-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(`,-1),t("b",{class:"t01"},"Boolean(",-1),n("1",-1),t("b",{class:"t01"},"));",-1),n("  ",-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(`,-1),t("b",{class:"t01"},"Boolean(",-1),n("{}",-1),t("b",{class:"t01"},"));",-1),n("  ",-1),t("b",{class:"t02"},"// true",-1),n(`

console.log(`,-1),t("b",{class:"t01"},"Boolean(",-1),n("false",-1),t("b",{class:"t01"},"));",-1),n("  ",-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(`,-1),t("b",{class:"t01"},"Boolean(",-1),n("undefined",-1),t("b",{class:"t01"},"));",-1),n("  ",-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(`,-1),t("b",{class:"t01"},"Boolean(",-1),n("null",-1),t("b",{class:"t01"},"));",-1),n("  ",-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(`,-1),t("b",{class:"t01"},"Boolean(",-1),n("0",-1),t("b",{class:"t01"},"));",-1),n("  ",-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(`,-1),t("b",{class:"t01"},"Boolean(",-1),n("NaN",-1),t("b",{class:"t01"},"));",-1),n("  ",-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(`,-1),t("b",{class:"t01"},"Boolean(",-1),n("''",-1),t("b",{class:"t01"},"));",-1),n("  ",-1),t("b",{class:"t02"},"// false",-1),n(`
`,-1)])]),_:1}),s[29]||(s[29]=n(`
`,-1))])]),_:1}),l(a,{title:"数値演算"},{default:e(()=>[t("pre",null,[s[35]||(s[35]=n(`// 算術演算子

`,-1)),l(o,null,{default:e(()=>[...s[30]||(s[30]=[n("console.log(5 ",-1),t("b",{class:"t01"},"+",-1),n(" 2);  ",-1),t("b",{class:"t02"},"// 7（加算）",-1),n(`
console.log(5 `,-1),t("b",{class:"t01"},"-",-1),n(" 2);  ",-1),t("b",{class:"t02"},"// 3（減算）",-1),n(`
console.log(5 `,-1),t("b",{class:"t01"},"*",-1),n(" 2);  ",-1),t("b",{class:"t02"},"// 10（乗算）",-1),n(`
console.log(5 `,-1),t("b",{class:"t01"},"/",-1),n(" 2);  ",-1),t("b",{class:"t02"},"// 2.5（除算）",-1),n(`
console.log(5 `,-1),t("b",{class:"t01"},"%",-1),n(" 2);  ",-1),t("b",{class:"t02"},"// 1（余剰）",-1),n(`
console.log(5 `,-1),t("b",{class:"t01"},"**",-1),n(" 2);  ",-1),t("b",{class:"t02"},"// 25（べき乗） // es6",-1),n(`

console.log(0.2 `,-1),t("b",{class:"t01"},"*",-1),n(" 3);  ",-1),t("b",{class:"t02"},"// 0.6000000000000001 (2進数での計算から生じる誤差)",-1),n(`
console.log(((0.2 * 10) `,-1),t("b",{class:"t01"},"*",-1),n(" 3) / 10);  ",-1),t("b",{class:"t02"},"// 0.6 (一旦整数にして計算すれば回避)",-1),n(`
`,-1)])]),_:1}),s[36]||(s[36]=n(`

---

// 代入演算子

`,-1)),l(o,null,{default:e(()=>[...s[31]||(s[31]=[n(`var foo;

foo `,-1),t("b",{class:"t01"},"=",-1),n(" 5;  ",-1),t("b",{class:"t02"},"// fooに5を代入",-1),n(`
  console.log(foo);  `,-1),t("b",{class:"t02"},"// 5",-1),n(`
foo `,-1),t("b",{class:"t01"},"+=",-1),n(" 5;  ",-1),t("b",{class:"t02"},"// fooの値に5を加算してfooに再代入",-1),n(`
  console.log(foo);  `,-1),t("b",{class:"t02"},"// 10",-1),n(`
foo `,-1),t("b",{class:"t01"},"-=",-1),n(" 5;  ",-1),t("b",{class:"t02"},"// fooの値に5を減算してfooに再代入",-1),n(`
  console.log(foo);  `,-1),t("b",{class:"t02"},"// 5",-1),n(`
foo `,-1),t("b",{class:"t01"},"*=",-1),n(" 5;  ",-1),t("b",{class:"t02"},"// fooの値に5を乗算してfooに再代入",-1),n(`
  console.log(foo);  `,-1),t("b",{class:"t02"},"// 25",-1),n(`
foo `,-1),t("b",{class:"t01"},"/=",-1),n(" 5;  ",-1),t("b",{class:"t02"},"// fooの値に5を除算してfooに再代入",-1),n(`
  console.log(foo);  `,-1),t("b",{class:"t02"},"// 5",-1),n(`
foo `,-1),t("b",{class:"t01"},"%=",-1),n(" 5;  ",-1),t("b",{class:"t02"},"// fooの値と5の余剰をfooに再代入",-1),n(`
  console.log(foo);  `,-1),t("b",{class:"t02"},"// 0",-1),n(`
`,-1)])]),_:1}),s[37]||(s[37]=n(`

---

// インクリメント演算子, デクリメント演算子

`,-1)),l(o,null,{default:e(()=>[...s[32]||(s[32]=[n(`var foo = 42, bar = 0;

bar = foo`,-1),t("b",{class:"t01"},"++",-1),n(";  ",-1),t("b",{class:"t02"},"// 代入してから1を加算",-1),n(`
console.log(foo);  `,-1),t("b",{class:"t02"},"// 43",-1),n(`
console.log(bar);  `,-1),t("b",{class:"t02"},"// 42",-1),n(`

var foo = 42, bar = 0;

bar = `,-1),t("b",{class:"t01"},"++",-1),n("foo;  ",-1),t("b",{class:"t02"},"// 1を加算してから代入",-1),n(`
console.log(foo);  `,-1),t("b",{class:"t02"},"// 43",-1),n(`
console.log(bar);  `,-1),t("b",{class:"t02"},"// 43",-1),n(`

var foo = 42, bar = 0;

bar = foo`,-1),t("b",{class:"t01"},"--",-1),n(";  ",-1),t("b",{class:"t02"},"// 代入してから1を減算",-1),n(`
console.log(foo);  `,-1),t("b",{class:"t02"},"// 41",-1),n(`
console.log(bar);  `,-1),t("b",{class:"t02"},"// 42",-1),n(`

var foo = 42, bar = 0;

bar = `,-1),t("b",{class:"t01"},"--",-1),n("foo;  ",-1),t("b",{class:"t02"},"// 1を減算してから代入",-1),n(`
console.log(foo);  `,-1),t("b",{class:"t02"},"// 41",-1),n(`
console.log(bar);  `,-1),t("b",{class:"t02"},"// 41",-1),n(`
`,-1)])]),_:1}),s[38]||(s[38]=n(`

---

// 優先順位

括弧付き > 掛け算割り算 > 足し算引き算
算術演算子(左 > 右) > 代入演算子(左 < 右)

算術演算子は左から処理
1) foo = 1 + 2 + 3;
2) foo = 3 + 3;
3) foo = 6;

代入演算子は右から処理
1) foo = bar = baz = 42;  `,-1)),s[39]||(s[39]=t("b",{class:"t02"},"// bazに42を代入",-1)),s[40]||(s[40]=n(`
2) foo = bar = 42;  `,-1)),s[41]||(s[41]=t("b",{class:"t02"},"// barに42を代入",-1)),s[42]||(s[42]=n(`
3) foo = 42;  `,-1)),s[43]||(s[43]=t("b",{class:"t02"},"// fooに42を代入",-1)),s[44]||(s[44]=n(`

`,-1)),l(o,null,{default:e(()=>[...s[33]||(s[33]=[n("console.log(foo = 42);  ",-1),t("b",{class:"t02"},"// は、「42」と出る。すなわち、",-1),n(`
`,-1)])]),_:1}),s[45]||(s[45]=n(`

1) foo = 42;
2) 42;  `,-1)),s[46]||(s[46]=t("b",{class:"t02"},"// 「foo = 42」が「42」を返している",-1)),s[47]||(s[47]=n(`

---

// 文字列化、数値化

`,-1)),l(o,null,{default:e(()=>[...s[34]||(s[34]=[t("b",{class:"t02"},"// 加算演算子の別機能＜連結,数値の文字列化＞",-1),n(`
console.log('foo' + "bar");  `,-1),t("b",{class:"t02"},"// foobar",-1),n(`
console.log('foo' + 42)  `,-1),t("b",{class:"t02"},"// foo42",-1),n(`
console.log('84' + 42)  `,-1),t("b",{class:"t02"},"// 8442(数値ではない)",-1),n(`

`,-1),t("b",{class:"t02"},"// その他算術演算子の別機能＜文字列の数値化＞",-1),n(`
console.log('84' - 42)  `,-1),t("b",{class:"t02"},"// 42",-1),n(`
console.log('84' * 42)  `,-1),t("b",{class:"t02"},"// 3528",-1),n(`
console.log('84' / 42)  `,-1),t("b",{class:"t02"},"// 2",-1),n(`
console.log('84' % 42)  `,-1),t("b",{class:"t02"},"// 0",-1),n(`
`,-1)])]),_:1}),s[48]||(s[48]=n(`

---

`,-1)),s[49]||(s[49]=t("b",{class:"t02"},`// 被演算子
// オペレータ(演算子)とオペランド(値)
// 左オペランド
// 右オペランド
// 単項演算子
// 二項演算子
// 三項演算子`,-1)),s[50]||(s[50]=n(`

`,-1))])]),_:1}),l(a,{title:"論理演算"},{default:e(()=>[t("pre",null,[s[56]||(s[56]=n(`// 等価演算子

`,-1)),l(o,null,{default:e(()=>[...s[51]||(s[51]=[n("console.log(42 ",-1),t("b",{class:"t01"},"==",-1),n(" 42);  ",-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(42 == '42');  `,-1),t("b",{class:"t02"},"// true  文字列の42が数値の42に変換されて比較されるため、true",-1),n(`
console.log(42 `,-1),t("b",{class:"t01"},"===",-1),n(" '42');  ",-1),t("b",{class:"t02"},"// false  データ型変換を行わず比較",-1),n(`
console.log(true == 1);  `,-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(true === 1);  `,-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(true === 0);  `,-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(true === 42);  `,-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(null == undefined);  `,-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(null === undefined);  `,-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(NaN === NaN);  `,-1),t("b",{class:"t02"},"// false",-1),n(`

console.log(42 `,-1),t("b",{class:"t01"},"!=",-1),n(" 42);  ",-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(42 != '42');  `,-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(42 `,-1),t("b",{class:"t01"},"!==",-1),n(" '42');  ",-1),t("b",{class:"t02"},"// true  データ型変換を行わず比較",-1),n(`

console.log(`,-1),t("b",{class:"t01"},"!!",-1),n("42);  ",-1),t("b",{class:"t02"},"// true  Booleanに変換",-1),n(`
console.log(`,-1),t("b",{class:"t01"},"!!",-1),n("'42');  ",-1),t("b",{class:"t02"},"// true  Booleanに変換",-1),n(`
console.log(`,-1),t("b",{class:"t01"},"!!",-1),n("[1, 2, 3]);  ",-1),t("b",{class:"t02"},"// true  Booleanに変換",-1),n(`
`,-1)])]),_:1}),s[57]||(s[57]=n(`

---

// 比較演算子

`,-1)),l(o,null,{default:e(()=>[...s[52]||(s[52]=[n("console.log(42 ",-1),t("b",{class:"t01"},"<",-1),n(" 84);  ",-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(42 `,-1),t("b",{class:"t01"},">",-1),n(" '84');  ",-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(42 `,-1),t("b",{class:"t01"},"<=",-1),n(" 42);  ",-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(42 `,-1),t("b",{class:"t01"},">=",-1),n(" '42');  ",-1),t("b",{class:"t02"},"// true",-1),n(`
`,-1)])]),_:1}),s[58]||(s[58]=n(`

---

// 論理演算子


`,-1)),s[59]||(s[59]=t("b",{class:"t02"},[n("// "),t("b",{class:"t01"},"&&"),n("（論理積）・・・左オペランドが true・0以外の数値・文字列 なら、右オペランドを評価し、右オペランドも true・0以外の数値・文字列 なら右オペランドの値を返す。左オペランドが false・特殊な値・0だった場合、右オペランドの評価は行わず、左オペランドの値を返す。")],-1)),s[60]||(s[60]=n(`

`,-1)),l(o,null,{default:e(()=>[...s[53]||(s[53]=[n("console.log(1 < 2 && 3 < 4);  ",-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(2 < 1 && 3 < 4);  `,-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(1 && 3 < 4);  `,-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(0 && 3 < 4);  `,-1),t("b",{class:"t02"},"// 0",-1),n(`
console.log(42 && 3 < 4);  `,-1),t("b",{class:"t02"},"// true",-1),n(`
console.log('foo' && 3 < 4);  `,-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(1 < 2 && null);  `,-1),t("b",{class:"t02"},"// null",-1),n(`
console.log(null && 3 < 4);  `,-1),t("b",{class:"t02"},"// null",-1),n(`
console.log(null && null);  `,-1),t("b",{class:"t02"},"// null",-1),n(`
console.log(null && undefined);  `,-1),t("b",{class:"t02"},"// null",-1),n(`
console.log(undefined && 3 < 4);  `,-1),t("b",{class:"t02"},"// undefined",-1),n(`
console.log(NaN && 3 < 4);  `,-1),t("b",{class:"t02"},"// NaN",-1),n(`
console.log(1 && 1);  `,-1),t("b",{class:"t02"},"// 1",-1),n(`
console.log(0 && 0);  `,-1),t("b",{class:"t02"},"// 0",-1),n(`
console.log(-42 && 42);  `,-1),t("b",{class:"t02"},"// 42",-1),n(`
console.log(42 && -42);  `,-1),t("b",{class:"t02"},"// -42",-1),n(`
console.log(-4.2 && 4.2);  `,-1),t("b",{class:"t02"},"// 4.2",-1),n(`
`,-1)])]),_:1}),s[61]||(s[61]=n(`


`,-1)),s[62]||(s[62]=t("b",{class:"t02"},[n("// "),t("b",{class:"t01"},"||"),n("（論理和）・・・左オペランドが true・0以外の数値・文字列 なら、それをそのまま返す。左オペランドが false・特殊な値・0 なら、右オペランドを評価し、右オペランドの結果を返す。 ")],-1)),s[63]||(s[63]=n(`

`,-1)),l(o,null,{default:e(()=>[...s[54]||(s[54]=[n("console.log(1 < 2 || 3 < 4);  ",-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(2 < 1 || 3 < 4);  `,-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(1 || 3 < 4);  `,-1),t("b",{class:"t02"},"// 1",-1),n(`
console.log(0 || 3 < 4);  `,-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(42 || 3 < 4);  `,-1),t("b",{class:"t02"},"// 42",-1),n(`
console.log('foo' || 3 < 4);  `,-1),t("b",{class:"t02"},"// foo",-1),n(`
console.log(1 < 2 || null);  `,-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(null || 3 < 4);  `,-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(null || null);  `,-1),t("b",{class:"t02"},"// null",-1),n(`
console.log(null || undefined);  `,-1),t("b",{class:"t02"},"// undefined",-1),n(`
console.log(undefined || 3 < 4);  `,-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(NaN || 3 < 4);  `,-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(1 || 1);  `,-1),t("b",{class:"t02"},"// 1",-1),n(`
console.log(0 || 0);  `,-1),t("b",{class:"t02"},"// 0",-1),n(`
console.log(-42 || 42);  `,-1),t("b",{class:"t02"},"// -42",-1),n(`
console.log(42 || -42);  `,-1),t("b",{class:"t02"},"// 42",-1),n(`
console.log(-4.2 || 4.2);  `,-1),t("b",{class:"t02"},"// -4.2",-1),n(`
`,-1)])]),_:1}),s[64]||(s[64]=n(`

---

// 条件演算子

`,-1)),s[65]||(s[65]=t("b",{class:"t02"},[n("// foo "),t("b",{class:"t01"},"?"),n(" bar "),t("b",{class:"t01"},":"),n(" baz ・・・ foo が真なら bar、偽なら baz を返す")],-1)),s[66]||(s[66]=n(`
`,-1)),s[67]||(s[67]=t("b",{class:"t02"},"// if (foo) { bar } else { baz } と同じ",-1)),s[68]||(s[68]=n(`

`,-1)),l(o,null,{default:e(()=>[...s[55]||(s[55]=[n("console.log(42 ? 'true' : 'false');  ",-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(42 < 0 ? 'true' : 'false');  `,-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(0 ? 'true' : 'false');  `,-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(1 ? 'true' : 'false');  `,-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(true ? 'true' : 'false');  `,-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(false ? 'true' : 'false');  `,-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(null ? 'true' : 'false');  `,-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(undefined ? 'true' : 'false');  `,-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(NaN ? 'true' : 'false');  `,-1),t("b",{class:"t02"},"// false",-1),n(`
`,-1)])]),_:1}),s[69]||(s[69]=n(`
`,-1))])]),_:1}),l(a,{title:"文字列処理"},{default:e(()=>[t("pre",null,[s[71]||(s[71]=n("",-1)),l(o,null,{default:e(()=>[...s[70]||(s[70]=[n(`var foo = 'abcdef';

console.log(foo.`,-1),t("b",{class:"t01"},"indexOf",-1),n("('cd'));  ",-1),t("b",{class:"t02"},"// 2",-1),n(`
console.log(foo.`,-1),t("b",{class:"t01"},"lastIndexOf",-1),n("('cd'));  ",-1),t("b",{class:"t02"},"// 2",-1),n(`
console.log(foo.`,-1),t("b",{class:"t01"},"search",-1),n("('cd'));  ",-1),t("b",{class:"t02"},"// 2",-1),n(`

console.log(foo.`,-1),t("b",{class:"t01"},"includes",-1),n("('cd'));  ",-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(foo.`,-1),t("b",{class:"t01"},"startsWith",-1),n("('cd'));  ",-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(foo.`,-1),t("b",{class:"t01"},"endsWith",-1),n("('cd'));  ",-1),t("b",{class:"t02"},"// false",-1),n(`

console.log(foo.`,-1),t("b",{class:"t01"},"charAt",-1),n("(2));  ",-1),t("b",{class:"t02"},"// c",-1),n(`
console.log(foo.`,-1),t("b",{class:"t01"},"slice",-1),n("(2));  ",-1),t("b",{class:"t02"},"// cdef",-1),n(`
console.log(foo.`,-1),t("b",{class:"t01"},"substring",-1),n("(2));  ",-1),t("b",{class:"t02"},"// cdef",-1),n(`
console.log(foo.`,-1),t("b",{class:"t01"},"substr",-1),n("(2));  ",-1),t("b",{class:"t02"},"// cdef",-1),n(`

console.log(foo.`,-1),t("b",{class:"t01"},"replace",-1),n("('cd', ''));  ",-1),t("b",{class:"t02"},"// abef",-1),n(`
console.log(foo.`,-1),t("b",{class:"t01"},"split",-1),n("('cd'));  ",-1),t("b",{class:"t02"},"// ['ab', 'ef']",-1),n(`

console.log('ABCDEF'.`,-1),t("b",{class:"t01"},"toLowerCase",-1),n("());  ",-1),t("b",{class:"t02"},"// abcdef",-1),n(`
console.log(foo.`,-1),t("b",{class:"t01"},"toUpperCase",-1),n("());  ",-1),t("b",{class:"t02"},"// ABCDEF",-1),n(`

console.log('2'.`,-1),t("b",{class:"t01"},"padStart",-1),n("(2, '0'));  ",-1),t("b",{class:"t02"},"// 02",-1),n(`
`,-1)])]),_:1}),s[72]||(s[72]=n(`
`,-1))])]),_:1}),l(a,{title:"正規表現"},{default:e(()=>[t("pre",null,[s[82]||(s[82]=n(`// 判定する関数

`,-1)),l(o,null,{default:e(()=>[...s[73]||(s[73]=[n(`var foo = 'abcdef';

console.log(`,-1),t("b",{class:"t01"},"/",-1),n("cd",-1),t("b",{class:"t01"},"/",-1),n(".",-1),t("b",{class:"t01"},"exec(",-1),n("foo",-1),t("b",{class:"t01"},")",-1),n(");  ",-1),t("b",{class:"t02"},'// ["cd", ...] // マッチすればその文字列、しなければnullを返す',-1),n(`
console.log(`,-1),t("b",{class:"t01"},"/",-1),n("cd",-1),t("b",{class:"t01"},"/",-1),n(".",-1),t("b",{class:"t01"},"test(",-1),n("foo",-1),t("b",{class:"t01"},")",-1),n(");  ",-1),t("b",{class:"t02"},"// true // マッチすればtrue、しなければfalseを返す",-1),n(`

console.log(foo.`,-1),t("b",{class:"t01"},"match(/",-1),n("cd",-1),t("b",{class:"t01"},"/)",-1),n(");  ",-1),t("b",{class:"t02"},'// ["cd", ...] // マッチすればその文字列、しなければnullを返す',-1),n(`
console.log(foo.`,-1),t("b",{class:"t01"},"search(/",-1),n("cd",-1),t("b",{class:"t01"},"/)",-1),n(");  ",-1),t("b",{class:"t02"},"// 2 // マッチすればその箇所、しなければ-1を返す",-1),n(`
console.log(foo.`,-1),t("b",{class:"t01"},"replace(/",-1),n("cd",-1),t("b",{class:"t01"},"/,'",-1),n("42",-1),t("b",{class:"t01"},"')",-1),n(");  ",-1),t("b",{class:"t02"},"// ab42ef // マッチすれば置換、しなければそのまま返す",-1),n(`
console.log(foo.`,-1),t("b",{class:"t01"},"split(/",-1),n("cd",-1),t("b",{class:"t01"},"/)",-1),n(");  ",-1),t("b",{class:"t02"},'// ["ab", "ef"] // マッチすれば分割し配列に入れる、しなければそのまま返す',-1),n(`
console.log((foo.split(/cd/))[0]);  `,-1),t("b",{class:"t02"},"// ab",-1),n(`
console.log((foo.split(/cd/))[1]);  `,-1),t("b",{class:"t02"},"// ef",-1),n(`
console.log((foo.split(/cd/))[2]);  `,-1),t("b",{class:"t02"},"// undefined",-1),n(`
`,-1)])]),_:1}),s[83]||(s[83]=n(`

---

// 括弧をつけて配列に入れる

`,-1)),l(o,null,{default:e(()=>[...s[74]||(s[74]=[n(`var foo = 'abcdef';

console.log(/cd/.exec(foo));  `,-1),t("b",{class:"t02"},'// ["cd", ...]',-1),n(`
console.log(/`,-1),t("b",{class:"t01"},"(",-1),n("c",-1),t("b",{class:"t01"},")",-1),n("d/.exec(foo));  ",-1),t("b",{class:"t02"},'// ["cd", "c", ...]',-1),n(`
console.log(/`,-1),t("b",{class:"t01"},"(",-1),n("c",-1),t("b",{class:"t01"},")(",-1),n("d",-1),t("b",{class:"t01"},")",-1),n("/.exec(foo));  ",-1),t("b",{class:"t02"},'// ["cd", "c", "d", ...]',-1),n(`
console.log(/`,-1),t("b",{class:"t01"},"(",-1),n("c",-1),t("b",{class:"t01"},")(?:",-1),n("d",-1),t("b",{class:"t01"},")",-1),n("/.exec(foo));  ",-1),t("b",{class:"t02"},'// ["cd", "c", ...]',-1),n(`

console.log(foo.match(/cd/));  `,-1),t("b",{class:"t02"},'// ["cd", ...]',-1),n(`
console.log(foo.match(/`,-1),t("b",{class:"t01"},"(",-1),n("c",-1),t("b",{class:"t01"},")",-1),n("d/));  ",-1),t("b",{class:"t02"},'// ["cd", "c", ...]',-1),n(`
console.log(foo.match(/`,-1),t("b",{class:"t01"},"(",-1),n("c",-1),t("b",{class:"t01"},")(",-1),n("d",-1),t("b",{class:"t01"},")",-1),n("/));  ",-1),t("b",{class:"t02"},'// ["cd", "c", "d", ...]',-1),n(`
console.log(foo.match(/`,-1),t("b",{class:"t01"},"(",-1),n("c",-1),t("b",{class:"t01"},")(?:",-1),n("d",-1),t("b",{class:"t01"},")",-1),n("/));  ",-1),t("b",{class:"t02"},'// ["cd", "c", ...]',-1),n(`

console.log(foo.split(/cd/));  `,-1),t("b",{class:"t02"},'// ["ab", "ef"]',-1),n(`
console.log(foo.split(/`,-1),t("b",{class:"t01"},"(",-1),n("c",-1),t("b",{class:"t01"},")",-1),n("d/));  ",-1),t("b",{class:"t02"},'// ["ab", "c", "ef"]',-1),n(`
console.log(foo.split(/`,-1),t("b",{class:"t01"},"(",-1),n("c",-1),t("b",{class:"t01"},")(",-1),n("d",-1),t("b",{class:"t01"},")",-1),n("/));  ",-1),t("b",{class:"t02"},'// ["ab", "c", "d", "ef"]',-1),n(`
console.log(foo.split(/`,-1),t("b",{class:"t01"},"(",-1),n("c",-1),t("b",{class:"t01"},")(?:",-1),n("d",-1),t("b",{class:"t01"},")",-1),n("/));  ",-1),t("b",{class:"t02"},'// ["ab", "c", "ef"]',-1),n(`

`,-1),t("b",{class:"t02"},"// (?: 〜 )は「配列に入れない」指定",-1),n(`
`,-1)])]),_:1}),s[84]||(s[84]=n(`

---

// オプション

`,-1)),l(o,null,{default:e(()=>[...s[75]||(s[75]=[n(`var foo = 'abCDef';
console.log(foo.match(/cd/`,-1),t("b",{class:"t01"},"i",-1),n("));  ",-1),t("b",{class:"t02"},'// ["CD", ...] // 大文字小文字関係なく判定',-1),n(`

var foo = 'abcdef abcdef';
console.log(foo.match(/cd/`,-1),t("b",{class:"t01"},"g",-1),n("));  ",-1),t("b",{class:"t02"},'// ["cd", "cd"] // 複数マッチし、配列に入れる',-1),n(`
`,-1)])]),_:1}),s[85]||(s[85]=n(`

---

// 正規表現いろいろ

---

// 書式１

`,-1)),l(o,null,{default:e(()=>[...s[76]||(s[76]=[n(`var foo = 'abcdeeef';

console.log(/a`,-1),t("b",{class:"t01"},".",-1),n("c/.test(foo));  ",-1),t("b",{class:"t02"},"// a(なんでも1個)c　を含むならtrue",-1),n(`
console.log(/de`,-1),t("b",{class:"t01"},"+",-1),n("f/.test(foo));  ",-1),t("b",{class:"t02"},"// d(eが1個以上)f　を含むならtrue",-1),n(`
console.log(/de`,-1),t("b",{class:"t01"},"*",-1),n("f/.test(foo));  ",-1),t("b",{class:"t02"},"// d(eが0個以上)f　を含むならtrue",-1),n(`
console.log(/de`,-1),t("b",{class:"t01"},".+",-1),n("f/.test(foo));  ",-1),t("b",{class:"t02"},"// de(なんでも1個以上)f　を含むならtrue",-1),n(`
console.log(/de`,-1),t("b",{class:"t01"},".*",-1),n("f/.test(foo));  ",-1),t("b",{class:"t02"},"// de(なんでも0個以上)f　を含むならtrue",-1),n(`
console.log(/de`,-1),t("b",{class:"t01"},"?",-1),n("f/.test(foo));  ",-1),t("b",{class:"t02"},"// d(eが0個か1個)f　を含むならtrue",-1),n(`
`,-1)])]),_:1}),s[86]||(s[86]=n(`

---

// 書式２

`,-1)),l(o,null,{default:e(()=>[...s[77]||(s[77]=[n(`var foo = 'abcdef';

console.log(/a`,-1),t("b",{class:"t01"},"[",-1),n("acef",-1),t("b",{class:"t01"},"]",-1),n("f/.test(foo));  ",-1),t("b",{class:"t02"},"// a(a,c,e,fいずれか1個)f　を含むならtrue",-1),n(`
console.log(/a`,-1),t("b",{class:"t01"},"[",-1),n("bcde",-1),t("b",{class:"t01"},"]",-1),n("f/.test(foo));  ",-1),t("b",{class:"t02"},"// a(b,c,d,eいずれか1個)f　を含むならtrue",-1),n(`
console.log(/a`,-1),t("b",{class:"t01"},"[",-1),n("b",-1),t("b",{class:"t01"},"-",-1),n("e",-1),t("b",{class:"t01"},"]",-1),n("f/.test(foo));  ",-1),t("b",{class:"t02"},"// 同上",-1),n(`
console.log(/a`,-1),t("b",{class:"t01"},"[",-1),n("a-z",-1),t("b",{class:"t01"},"]",-1),n("f/.test(foo));  ",-1),t("b",{class:"t02"},"// a(小文字アルファベットいずれか1個)f　を含むならtrue",-1),n(`
console.log(/a`,-1),t("b",{class:"t01"},"[",-1),n("a-zA-Z",-1),t("b",{class:"t01"},"]",-1),n("f/.test(foo));  ",-1),t("b",{class:"t02"},"// a(アルファベットいずれか1個)f　を含むならtrue",-1),n(`

console.log(/de`,-1),t("b",{class:"t01"},"{",-1),n("3",-1),t("b",{class:"t01"},"}",-1),n("f/.test(foo));  ",-1),t("b",{class:"t02"},"// d(eが3個)f　を含むならtrue",-1),n(`
console.log(/de`,-1),t("b",{class:"t01"},"{",-1),n("2",-1),t("b",{class:"t01"},",",-1),n("4",-1),t("b",{class:"t01"},"}",-1),n("f/.test(foo));  ",-1),t("b",{class:"t02"},"// d(eが2個以上、4個以下)f　を含むならtrue",-1),n(`
console.log(/de`,-1),t("b",{class:"t01"},"{",-1),n("2",-1),t("b",{class:"t01"},",}",-1),n("f/.test(foo));  ",-1),t("b",{class:"t02"},"// d(eが2個以上)f　を含むならtrue",-1),n(`

console.log(/a`,-1),t("b",{class:"t01"},"(",-1),n("bc",-1),t("b",{class:"t01"},")+",-1),n("/.test(foo));  ",-1),t("b",{class:"t02"},"// a(bcが1個以上)　を含むならtrue",-1),n(`
console.log(/ab`,-1),t("b",{class:"t01"},"|",-1),n("cd",-1),t("b",{class:"t01"},"|",-1),n("ef/.test(foo));  ",-1),t("b",{class:"t02"},"// (abかcdかef)　を含むならtrue",-1),n(`
console.log(/a(bc`,-1),t("b",{class:"t01"},"|",-1),n("de)f/.test(foo));  ",-1),t("b",{class:"t02"},"// a(bcかde)f　を含むならtrue",-1),n(`
`,-1)])]),_:1}),s[87]||(s[87]=n(`

---

// 書式３

`,-1)),l(o,null,{default:e(()=>[...s[78]||(s[78]=[n(`var foo = 'abcdefabc';

console.log(/`,-1),t("b",{class:"t01"},"^",-1),n("abc/.test(foo));  ",-1),t("b",{class:"t02"},"// abcがfooの文頭ならtrue",-1),n(`
console.log(/abc`,-1),t("b",{class:"t01"},"$",-1),n("/.test(foo));  ",-1),t("b",{class:"t02"},"// abcがfooの文末ならtrue",-1),n(`
console.log(/`,-1),t("b",{class:"t01"},"^",-1),n("abc",-1),t("b",{class:"t01"},"$",-1),n("/.test(foo));  ",-1),t("b",{class:"t02"},"// 文字列がabcに完全一致するならtrue",-1),n(`
console.log(/a`,-1),t("b",{class:"t01"},"[",-1),n("a-zA-Z",-1),t("b",{class:"t01"},"]",-1),n("f/.test(foo));  ",-1),t("b",{class:"t02"},"// a(アルファベットいずれか1個)f　を含むならtrue",-1),n(`
console.log(/a`,-1),t("b",{class:"t01"},"[^",-1),n("a-zA-Z",-1),t("b",{class:"t01"},"]",-1),n("f/.test(foo));  ",-1),t("b",{class:"t02"},"// a(アルファベット以外のいずれか1個)f　を含むならtrue",-1),n(`

`,-1),t("b",{class:"t02"},"// ^ は [ ] の中にあるか外にあるかで意味が違う",-1),n(`
`,-1)])]),_:1}),s[88]||(s[88]=n(`

---

// 書式４

`,-1)),l(o,null,{default:e(()=>[...s[79]||(s[79]=[n(`var foo = 'abcdef';

console.log(/abc`,-1),t("b",{class:"t01"},"(?=",-1),n("def",-1),t("b",{class:"t01"},")",-1),n("/.test(foo));  ",-1),t("b",{class:"t02"},"// abcに続く文字列がdefの場合true",-1),n(`
console.log(/abc`,-1),t("b",{class:"t01"},"(?!",-1),n("def",-1),t("b",{class:"t01"},")",-1),n("/.test(foo));  ",-1),t("b",{class:"t02"},"// abcに続く文字列がdefでない場合true",-1),n(`
`,-1)])]),_:1}),s[89]||(s[89]=n(`

---

// 書式５

`,-1)),l(o,null,{default:e(()=>[...s[80]||(s[80]=[n(`var foo = 'a b1c  d.e';

console.log(/`,-1),t("b",{class:"t01"},"\\s",-1),n("/.test(foo));  ",-1),t("b",{class:"t02"},"// 半角スペース,タブなどの空白文字　を含むならtrue",-1),n(`
console.log(/`,-1),t("b",{class:"t01"},"\\S",-1),n("/.test(foo));  ",-1),t("b",{class:"t02"},"// 半角スペース,タブなどの空白文字以外　を含むならtrue",-1),n(`
console.log(/`,-1),t("b",{class:"t01"},"\\d",-1),n("/.test(foo));  ",-1),t("b",{class:"t02"},"// 半角数字1つ　を含むならtrue",-1),n(`
console.log(/`,-1),t("b",{class:"t01"},"\\D",-1),n("/.test(foo));  ",-1),t("b",{class:"t02"},"// 半角数字以外　を含むならtrue",-1),n(`
console.log(/`,-1),t("b",{class:"t01"},"\\w",-1),n("/.test(foo));  ",-1),t("b",{class:"t02"},"// 半角英数字かアンダースコア　を含むならtrue",-1),n(`
console.log(/`,-1),t("b",{class:"t01"},"\\W",-1),n("/.test(foo));  ",-1),t("b",{class:"t02"},"// 半角英数字かアンダースコア以外　を含むならtrue",-1),n(`
console.log(/`,-1),t("b",{class:"t01"},"\\.",-1),n("/.test(foo));  ",-1),t("b",{class:"t02"},"//  . を含むならtrue　+*?[]-^{}()|$ なども同様",-1),n(`
console.log(/`,-1),t("b",{class:"t01"},"\\n",-1),n("/.test(foo));  ",-1),t("b",{class:"t02"},"// 改行　を含むならtrue",-1),n(`
console.log(/`,-1),t("b",{class:"t01"},"\\0",-1),n("/.test(foo));  ",-1),t("b",{class:"t02"},"// null　を含むならtrue",-1),n(`
`,-1)])]),_:1}),s[90]||(s[90]=n(`

---

// 書式６

`,-1)),l(o,null,{default:e(()=>[...s[81]||(s[81]=[n(`var foo = '';

console.log(/`,-1),t("b",{class:"t01"},"\\b",-1),n("/.test(foo));  ",-1),t("b",{class:"t02"},"// 単語の区切り　を含むならtrue",-1),n(`
console.log(/`,-1),t("b",{class:"t01"},"\\B",-1),n("/.test(foo));  ",-1),t("b",{class:"t02"},"// 単語の区切り以外　を含むならtrue",-1),n(`
console.log(/`,-1),t("b",{class:"t01"},"[\\b]",-1),n("/.test(foo));  ",-1),t("b",{class:"t02"},"// バックスペース (U+0008)　を含むならtrue",-1),n(`
console.log(/`,-1),t("b",{class:"t01"},"\\v",-1),n("/.test(foo));  ",-1),t("b",{class:"t02"},"// 垂直タブ (U+000B)　を含むならtrue",-1),n(`
console.log(/`,-1),t("b",{class:"t01"},"\\f",-1),n("/.test(foo));  ",-1),t("b",{class:"t02"},"// 改ページ (U+000C)　を含むならtrue",-1),n(`
console.log(/`,-1),t("b",{class:"t01"},"\\r",-1),n("/.test(foo));  ",-1),t("b",{class:"t02"},"// リターン (U+000D)　を含むならtrue",-1),n(`
console.log(/`,-1),t("b",{class:"t01"},"\\cX",-1),n("/.test(foo));  ",-1),t("b",{class:"t02"},"// XにはA-Zのうち1文字が入る。/\\cM/の場合、control-M (U+000D)　を含むならtrue",-1),n(`
`,-1)])]),_:1}),s[91]||(s[91]=n(`
`,-1))])]),_:1}),l(a,{title:"分岐(if)"},{default:e(()=>[t("pre",null,[s[93]||(s[93]=t("b",{class:"t01"},"if (",-1)),s[94]||(s[94]=n("条件",-1)),s[95]||(s[95]=t("b",{class:"t01"},") {",-1)),s[96]||(s[96]=n(`
  処理;
`,-1)),s[97]||(s[97]=t("b",{class:"t01"},"} else if (",-1)),s[98]||(s[98]=n("条件",-1)),s[99]||(s[99]=t("b",{class:"t01"},") {",-1)),s[100]||(s[100]=n(`
  処理;
`,-1)),s[101]||(s[101]=t("b",{class:"t01"},"} else {",-1)),s[102]||(s[102]=n(`
  処理;
`,-1)),s[103]||(s[103]=t("b",{class:"t01"},"}",-1)),s[104]||(s[104]=n(`


`,-1)),s[105]||(s[105]=t("b",{class:"t02"},`// 処理が一文の場合は、中括弧を省略可能
// if ( 条件 ) 処理;`,-1)),s[106]||(s[106]=n(`

`,-1)),s[107]||(s[107]=t("b",{class:"t02"},`// 1つのみの条件による2分岐は、下記でも書ける
// ( 条件 ) ? 真の時の処理 : 偽の時の処理;`,-1)),s[108]||(s[108]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[92]||(s[92]=[n(`var score = 70;

if (0 <= score && score < 45) {
  console.log('bad');
} else if (45 <= score && score < 85) {
  console.log('normal'); `,-1),t("b",{class:"t02"},"// normal",-1),n(`
} else if (85 <= score && score <= 100) {
  console.log('good');
} else {
  console.log('error');
}
`,-1)])]),_:1}),s[109]||(s[109]=n(`

---

`,-1)),s[110]||(s[110]=t("b",{class:"t02"},`// 偽になる値
false, null, undefined, 空文字列'', 数値の0, 数値のNaN`,-1)),s[111]||(s[111]=n(`
`,-1))])]),_:1}),l(a,{title:"分岐(switch)"},{default:e(()=>[t("pre",null,[s[113]||(s[113]=t("b",{class:"t01"},"switch (",-1)),s[114]||(s[114]=n("条件の対象",-1)),s[115]||(s[115]=t("b",{class:"t01"},`) {
  case`,-1)),s[116]||(s[116]=n(" 値 ",-1)),s[117]||(s[117]=t("b",{class:"t01"},":",-1)),s[118]||(s[118]=n(`
    処理;
    break;
  `,-1)),s[119]||(s[119]=t("b",{class:"t01"},"case",-1)),s[120]||(s[120]=n(" 値 ",-1)),s[121]||(s[121]=t("b",{class:"t01"},":",-1)),s[122]||(s[122]=n(`
    処理;
    break;
  `,-1)),s[123]||(s[123]=t("b",{class:"t01"},"default:",-1)),s[124]||(s[124]=n(`
    処理;
    break;
`,-1)),s[125]||(s[125]=t("b",{class:"t01"},"}",-1)),s[126]||(s[126]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[112]||(s[112]=[n(`var foo = 42;
switch (foo) {
  case 21 :
    console.log('foo = 21');
    break;
  case 42 :
    console.log('foo = 42'); `,-1),t("b",{class:"t02"},"// foo=42",-1),n(`
    break;
  case 84 :
    console.log('foo = 84');
    break;
  default :
    break;
}
`,-1)])]),_:1}),s[127]||(s[127]=n(`
`,-1))])]),_:1}),l(a,{title:"ループ(for)"},{default:e(()=>[t("pre",null,[s[131]||(s[131]=t("b",{class:"t01"},"for (",-1)),s[132]||(s[132]=n("初期値",-1)),s[133]||(s[133]=t("b",{class:"t01"},";",-1)),s[134]||(s[134]=n(" 条件",-1)),s[135]||(s[135]=t("b",{class:"t01"},";",-1)),s[136]||(s[136]=n(" i++",-1)),s[137]||(s[137]=t("b",{class:"t01"},") {",-1)),s[138]||(s[138]=n(`
  処理;
`,-1)),s[139]||(s[139]=t("b",{class:"t01"},"}",-1)),s[140]||(s[140]=n(`

---

// for

`,-1)),l(o,null,{default:e(()=>[...s[128]||(s[128]=[n(`var arr = ['a', 'b', 'c'];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);  `,-1),t("b",{class:"t02"},"// a -> b -> c",-1),n(`
}
`,-1)])]),_:1}),s[141]||(s[141]=n(`

---

// for ~ in

`,-1)),l(o,null,{default:e(()=>[...s[129]||(s[129]=[n(`var arr = ['a', 'b', 'c'];

for (var i in arr) {
  console.log(arr[i]);  `,-1),t("b",{class:"t02"},"// a -> b -> c",-1),n(`
}
`,-1)])]),_:1}),s[142]||(s[142]=n(`

---

// for ~ of

`,-1)),l(o,null,{default:e(()=>[...s[130]||(s[130]=[n(`var arr = ['a', 'b', 'c'];

for (var v of arr) {
  console.log(v);  `,-1),t("b",{class:"t02"},"// a -> b -> c",-1),n(`
}
`,-1)])]),_:1}),s[143]||(s[143]=n(`
`,-1))])]),_:1}),l(a,{title:"ループ(forEach)"},{default:e(()=>[t("pre",null,[s[146]||(s[146]=n(`// １）array

`,-1)),l(o,null,{default:e(()=>[...s[144]||(s[144]=[n(`var arr = ['a', 'b', 'c', 'd', 'e'];
`,-1),t("b",{class:"t05"},"arr",-1),n(".",-1),t("b",{class:"t01"},"forEach(function (",-1),n("value",-1),t("b",{class:"t01"},",",-1),n(" index",-1),t("b",{class:"t01"},") {",-1),n(`
  console.log(value, index);
`,-1),t("b",{class:"t01"},"});",-1),n(`
`,-1)])]),_:1}),s[147]||(s[147]=n(`

---

// ２）object

`,-1)),l(o,null,{default:e(()=>[...s[145]||(s[145]=[n(`var obj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
};

`,-1),t("b",{class:"t05"},"Object.keys",-1),n("(obj).",-1),t("b",{class:"t01"},"forEach(function (",-1),n("key",-1),t("b",{class:"t01"},") {",-1),n(`
  console.log(key);
`,-1),t("b",{class:"t01"},"});",-1),n(`

`,-1),t("b",{class:"t05"},"Object.values",-1),n("(obj).",-1),t("b",{class:"t01"},"forEach(function (",-1),n("value",-1),t("b",{class:"t01"},") {",-1),n(`
  console.log(value);
`,-1),t("b",{class:"t01"},"});",-1),n(`

`,-1),t("b",{class:"t05"},"Object.entries",-1),n("(obj).",-1),t("b",{class:"t01"},"forEach(function (",-1),n("entry",-1),t("b",{class:"t01"},") {",-1),n(`
  console.log(entry);
`,-1),t("b",{class:"t01"},"});",-1),n(`
`,-1)])]),_:1}),s[148]||(s[148]=n(`
`,-1))])]),_:1}),l(a,{title:"ループ(while)"},{default:e(()=>[t("pre",null,[s[151]||(s[151]=n(`// １）while

`,-1)),s[152]||(s[152]=t("b",{class:"t01"},"while (",-1)),s[153]||(s[153]=n("条件",-1)),s[154]||(s[154]=t("b",{class:"t01"},") {",-1)),s[155]||(s[155]=n(`
  処理;
`,-1)),s[156]||(s[156]=t("b",{class:"t01"},"}",-1)),s[157]||(s[157]=n(`



`,-1)),l(o,null,{default:e(()=>[...s[149]||(s[149]=[n(`var i = 0;
while (i < 3) {
  console.log(i);  `,-1),t("b",{class:"t02"},"// 0 -> 1 -> 2",-1),n(`
  i++;
}
`,-1)])]),_:1}),s[158]||(s[158]=n(`

---

// ２）do while

`,-1)),s[159]||(s[159]=t("b",{class:"t01"},"do {",-1)),s[160]||(s[160]=n(`
  処理;
`,-1)),s[161]||(s[161]=t("b",{class:"t01"},"} while (",-1)),s[162]||(s[162]=n("条件",-1)),s[163]||(s[163]=t("b",{class:"t01"},")",-1)),s[164]||(s[164]=n(`;



`,-1)),l(o,null,{default:e(()=>[...s[150]||(s[150]=[n(`var i = 42;
do {
  console.log(i);  `,-1),t("b",{class:"t02"},"// 42 // 必ず1回は実行する",-1),n(`
  i++;
} while (i < 3);
`,-1)])]),_:1}),s[165]||(s[165]=n(`
`,-1))])]),_:1}),l(a,{title:"continue, break"},{default:e(()=>[t("pre",null,[s[167]||(s[167]=n("",-1)),l(o,null,{default:e(()=>[...s[166]||(s[166]=[n(`for (var i = 0; i < 5; i++) {
  if (i === 1) {
    `,-1),t("b",{class:"t01"},"continue",-1),n("; ",-1),t("b",{class:"t02"},"// その回をスキップ",-1),n(`
  }
  if (i === 3) {
    `,-1),t("b",{class:"t01"},"break",-1),n("; ",-1),t("b",{class:"t02"},"// ループを終了",-1),n(`
  }
  console.log(i); `,-1),t("b",{class:"t02"},"// 0 -> 2",-1),n(`
}
`,-1)])]),_:1}),s[168]||(s[168]=n(`
`,-1))])]),_:1}),l(a,{title:"例外(try, catch, finally, throw)"},{default:e(()=>[t("pre",null,[s[173]||(s[173]=n("",-1)),s[174]||(s[174]=t("b",{class:"t01"},`try {
  `,-1)),s[175]||(s[175]=n(`処理A;
`,-1)),s[176]||(s[176]=t("b",{class:"t01"},"} catch (",-1)),s[177]||(s[177]=n("e",-1)),s[178]||(s[178]=t("b",{class:"t01"},[n(`) {
  `),t("b",{class:"t02"},"// 処理Aでエラーが起きた時実行"),n(`
  `),t("b",{class:"t02"},"// 'e'はエラーの内容が入る"),n(`
} finally {
  `),t("b",{class:"t02"},"// 処理Aでエラーが起きても起きなくても実行"),n(`
}`)],-1)),s[179]||(s[179]=n(`

---

// 例１）例外処理なし

`,-1)),l(o,null,{default:e(()=>[...s[169]||(s[169]=[n("console.llog('foo'); ",-1),t("b",{class:"t02"},"// スペルミス",-1),n(`
console.log('bar'); `,-1),t("b",{class:"t02"},"// 次の処理は実行することができない",-1),n(`
`,-1)])]),_:1}),s[180]||(s[180]=n(`


// 例１）例外処理あり

`,-1)),l(o,null,{default:e(()=>[...s[170]||(s[170]=[n(`try {
  console.llog('foo'); `,-1),t("b",{class:"t02"},"// スペルミス",-1),n(`
} catch (e) {
  console.log(e); `,-1),t("b",{class:"t02"},"// エラー情報をアウトプットすることができる",-1),n(`
} finally {
  console.log('bar'); `,-1),t("b",{class:"t02"},"// 次の処理も実行することができる",-1),n(`
}
`,-1)])]),_:1}),s[181]||(s[181]=n(`

---

// 例２）例外処理なし

`,-1)),l(o,null,{default:e(()=>[...s[171]||(s[171]=[t("b",{class:"t02"},"// var color = 'red'",-1),n(`
var color = ''; `,-1),t("b",{class:"t02"},"// 誤ってcolorが空だった場合",-1),n(`
console.log('I like ' + color + '.'); `,-1),t("b",{class:"t02"},"// I like . // 意味のない文章が表示されてしまう",-1),n(`
console.log('done.'); `,-1),t("b",{class:"t02"},"// done",-1),n(`
`,-1)])]),_:1}),s[182]||(s[182]=n(`


// 例２）例外処理あり

`,-1)),l(o,null,{default:e(()=>[...s[172]||(s[172]=[t("b",{class:"t02"},"// var color = 'red'",-1),n(`
var color = ''; `,-1),t("b",{class:"t02"},"// 誤ってcolorが空だった場合",-1),n(`

try {
  if (color === '') {
    `,-1),t("b",{class:"t01"},"throw",-1),n(" 'error: no color'; ",-1),t("b",{class:"t02"},"// 値やオブジェクトをcatch(e)に送る",-1),n(`
  }
  console.log('I like ' + color + '.'); `,-1),t("b",{class:"t02"},"// この処理は実行しない",-1),n(`
} catch (e) {
  console.log(e); `,-1),t("b",{class:"t02"},"// エラー情報をアウトプットできる",-1),n(`
} finally {
  console.log('done.'); `,-1),t("b",{class:"t02"},"// done",-1),n(`
}
`,-1)])]),_:1}),s[183]||(s[183]=n(`
`,-1))])]),_:1}),l(a,{title:"関数"},{default:e(()=>[t("pre",null,[s[189]||(s[189]=n(`// 定義1 - 関数文のみ

`,-1)),l(o,null,{default:e(()=>[...s[184]||(s[184]=[n("fnc1(); ",-1),t("b",{class:"t02"},"// fnc1",-1),n(`
`,-1),t("b",{class:"t01"},"function",-1),n(),t("b",{class:"t04"},"fnc1",-1),t("b",{class:"t01"},"() {",-1),n(`
  `,-1),t("b",{class:"t02"},"console.log('fnc1');",-1),n(`
`,-1),t("b",{class:"t01"},"}",-1),n(`
`,-1),t("b",{class:"t02"},"// 変数 fnc1 が定義される",-1),n(`
`,-1),t("b",{class:"t02"},"// 実行時に関数文の巻き上げが起こるためfnc1()で参照できる",-1),n(`
`,-1)])]),_:1}),s[190]||(s[190]=n(`

---

// 定義2 - 変数に無名関数を代入

`,-1)),l(o,null,{default:e(()=>[...s[185]||(s[185]=[n("fnc2(); ",-1),t("b",{class:"t02"},"// error",-1),n(`
`,-1),t("b",{class:"t01"},"var",-1),n(),t("b",{class:"t04"},"fnc2",-1),n(),t("b",{class:"t01"},"= function() {",-1),n(`
  `,-1),t("b",{class:"t02"},"console.log('fnc2');",-1),n(`
`,-1),t("b",{class:"t01"},"}",-1),n(`
`,-1),t("b",{class:"t02"},"// 変数 fnc2 が定義されるが、関数の前からは参照できない",-1),n(`
`,-1)])]),_:1}),s[191]||(s[191]=n(`

---

// 定義3 - 変数に関数文を代入

`,-1)),l(o,null,{default:e(()=>[...s[186]||(s[186]=[t("b",{class:"t01"},"var",-1),n(),t("b",{class:"t04"},"fnc3",-1),n(),t("b",{class:"t01"},"= function",-1),n(" fnc",-1),t("b",{class:"t01"},"() {",-1),n(`
  `,-1),t("b",{class:"t02"},"console.log('fnc3');",-1),n(`
`,-1),t("b",{class:"t01"},"}",-1),n(`
fnc3(); `,-1),t("b",{class:"t02"},"// fnc3",-1),n(`
fnc(); `,-1),t("b",{class:"t02"},"// error",-1),n(`
`,-1),t("b",{class:"t02"},"// 変数 fnc3 が定義されるが、関数の前からは参照できない",-1),n(`
`,-1),t("b",{class:"t02"},"// 変数 fnc は定義されないため、fnc() では動かない",-1),n(`
`,-1)])]),_:1}),s[192]||(s[192]=n(`

---

// 再帰呼び出し

`,-1)),l(o,null,{default:e(()=>[...s[187]||(s[187]=[n(`function fnc(v) {
  console.log(v);
  v--;
  if(v >= 0) {
    `,-1),t("b",{class:"t01"},"fnc(",-1),n("v",-1),t("b",{class:"t01"},");",-1),n("  ",-1),t("b",{class:"t02"},"// 関数の中から自身を呼び出す",-1),n(`
  }
}

fnc(5);  `,-1),t("b",{class:"t02"},"// 5 -> 4 -> 3 -> 2 -> 1 -> 0",-1),n(`
`,-1)])]),_:1}),s[193]||(s[193]=n(`

---

// 引数の初期値

`,-1)),l(o,null,{default:e(()=>[...s[188]||(s[188]=[n("function fnc(v ",-1),t("b",{class:"t01"},"= 42",-1),n(`) {
  console.log(v);
}

fnc(5);  `,-1),t("b",{class:"t02"},"// 5",-1),n(`
fnc();  `,-1),t("b",{class:"t02"},"// 42",-1),n(`
`,-1)])]),_:1}),s[194]||(s[194]=n(`
`,-1))])]),_:1}),l(a,{title:"戻り値"},{default:e(()=>[t("pre",null,[s[198]||(s[198]=n("",-1)),l(o,null,{default:e(()=>[...s[195]||(s[195]=[n(`function sum(foo, bar) {
  `,-1),t("b",{class:"t01"},"return",-1),n(" foo + bar;  ",-1),t("b",{class:"t02"},"// returnでその値を返して処理を終わる",-1),n(`
  console.log('baz');  `,-1),t("b",{class:"t02"},"// これは実行されない",-1),n(`
}

console.log(sum(42,84));  `,-1),t("b",{class:"t02"},"// 126",-1),n(`
`,-1)])]),_:1}),s[199]||(s[199]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[196]||(s[196]=[n("function sum(foo, bar) {  ",-1),t("b",{class:"t02"},"// 関数内にreturnが無い場合はundefinedを返す",-1),n(`
  console.log('baz');  `,-1),t("b",{class:"t02"},"// baz",-1),n(`
}

console.log(sum(42, 84));  `,-1),t("b",{class:"t02"},"// undefined",-1),n(`
`,-1)])]),_:1}),s[200]||(s[200]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[197]||(s[197]=[n(`function sum(foo, bar) {
  `,-1),t("b",{class:"t01"},"return",-1),n(";  ",-1),t("b",{class:"t02"},"// 単にreturnした場合はundefinedを返す",-1),n(`
}

console.log(sum(42, 84));  `,-1),t("b",{class:"t02"},"// undefined",-1),n(`
`,-1)])]),_:1}),s[201]||(s[201]=n(`
`,-1))])]),_:1}),l(a,{title:"スコープ"},{default:e(()=>[t("pre",null,[s[205]||(s[205]=n("",-1)),l(o,null,{default:e(()=>[...s[202]||(s[202]=[n(`function bar() {
  foo = 84;  `,-1),t("b",{class:"t02"},"// グローバル変数(window.fooと同値)",-1),n(`
}

foo = 42;
bar();
console.log(foo);  `,-1),t("b",{class:"t02"},"// 84",-1),n(`
`,-1)])]),_:1}),s[206]||(s[206]=n(`



`,-1)),l(o,null,{default:e(()=>[...s[203]||(s[203]=[n(`function bar() {
  `,-1),t("b",{class:"t01"},"var",-1),n(" foo = 84;  ",-1),t("b",{class:"t02"},"// ローカル変数(関数の中だけ有効)",-1),n(`
}

foo = 42;
bar();
console.log(foo);  `,-1),t("b",{class:"t02"},"// 42",-1),n(`
`,-1)])]),_:1}),s[207]||(s[207]=n(`


---

// スコープチェーン


`,-1)),l(o,null,{default:e(()=>[...s[204]||(s[204]=[n(`var foo = 42;

function bar() {
  function baz() {
    console.log(foo);
  }
  baz();
}

bar(); `,-1),t("b",{class:"t02"},"// 42",-1),n(`


`,-1),t("b",{class:"t02"},`// 1-a）bar();
// 1-b）各ローカル関数ごとに変数を記憶する領域(bar用, baz用)が生成される(変数オブジェクトという)
// 1-c）スコープチェーンの関係(グローバル <-- bar <-- baz　参照の経路)が生成される
// 2）bar(); --> baz(); --> console.log(foo);
// 3）baz用変数オブジェクトでfooが定義されていないため、1つ外側を参照
// 4）bar用変数オブジェクトでfooが定義されていないため、1つ外側を参照
// 5）グローバル(<script>...<\/script>)でfooが定義されている
// 6）値を返す`,-1),n(`
`,-1)])]),_:1}),s[208]||(s[208]=n(`
`,-1))])]),_:1}),l(a,{title:"即時関数,無名関数"},{default:e(()=>[t("pre",null,[s[210]||(s[210]=n("",-1)),l(o,null,{default:e(()=>[...s[209]||(s[209]=[n("function fnc1() {  ",-1),t("b",{class:"t02"},"// 普通の関数定義",-1),n(`
  console.log('fnc1');
}
fnc1();  `,-1),t("b",{class:"t02"},"// 呼び出し",-1),n(`


`,-1),t("b",{class:"t01"},"(",-1),n("function fnc2() {  ",-1),t("b",{class:"t02"},"// 即時関数(呼び出し無しで定義から実行まで)",-1),n(`
  console.log('fnc2');
}`,-1),t("b",{class:"t01"},")()",-1),n(`;


`,-1),t("b",{class:"t01"},"(",-1),n("function() {  ",-1),t("b",{class:"t02"},"// 関数名は省略可能 -> 無名関数",-1),n(`
  console.log('fnc3');
}`,-1),t("b",{class:"t01"},")()",-1),n(`;


`,-1),t("b",{class:"t01"},"(",-1),n("function(",-1),t("b",{class:"t03"},"v",-1),n(") {  ",-1),t("b",{class:"t02"},"// 引数を使う場合",-1),n(`
  console.log('fnc4 ' + `,-1),t("b",{class:"t03"},"v",-1),n(");  ",-1),t("b",{class:"t02"},"// fnc4 value",-1),n(`
}`,-1),t("b",{class:"t01"},[n(")("),t("b",{class:"t03"},"'value'"),n(")")],-1),n(`;


`,-1),t("b",{class:"t02"},"// ↓括弧でなく単項演算子などでも可",-1),n(`
`,-1),t("b",{class:"t01"},"(",-1),n("function() {console.log('a');}",-1),t("b",{class:"t01"},")()",-1),n(`;
`,-1),t("b",{class:"t01"},"!",-1),n("function() {console.log('b');}",-1),t("b",{class:"t01"},"()",-1),n(`;
`,-1),t("b",{class:"t01"},"+",-1),n("function() {console.log('c');}",-1),t("b",{class:"t01"},"()",-1),n(`;
`,-1),t("b",{class:"t01"},"void",-1),n(" function() {console.log('d');}",-1),t("b",{class:"t01"},"()",-1),n(`;


console.log(fnc1());  `,-1),t("b",{class:"t02"},"// fnc1",-1),n(`
console.log(fnc2());  `,-1),t("b",{class:"t02"},"// undefined",-1),n(`
`,-1),t("b",{class:"t02"},"// 即時関数,無名関数は一度実行したら消え、その後呼び出せない",-1),n(`


`,-1),t("b",{class:"t02"},"// 即時関数,無名関数は、関数名や関数内変数のグローバルへの割り当てを回避する",-1),n(`
`,-1)])]),_:1}),s[211]||(s[211]=n(`
`,-1))])]),_:1}),l(a,{title:"setTimeout"},{default:e(()=>[t("pre",null,[s[214]||(s[214]=n("",-1)),l(o,null,{default:e(()=>[...s[212]||(s[212]=[n(`console.log('1');
`,-1),t("b",{class:"t01"},"setTimeout(() => {",-1),n(`
  console.log('2');
`,-1),t("b",{class:"t01"},"},",-1),n(" 1000",-1),t("b",{class:"t01"},");",-1),n(`
console.log('3');
`,-1)])]),_:1}),s[215]||(s[215]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[213]||(s[213]=[t("b",{class:"t03"},"const timeCount = () => {",-1),n(`
  const date = new Date();
  console.log(date);
  `,-1),t("b",{class:"t01"},"setTimeout(",-1),t("b",{class:"t03"},"timeCount",-1),t("b",{class:"t01"},",",-1),n(" 1000",-1),t("b",{class:"t01"},")",-1),n(`;
`,-1),t("b",{class:"t03"},"}",-1),n(`

`,-1),t("b",{class:"t03"},"timeCount()",-1),n(`;
`,-1)])]),_:1}),s[216]||(s[216]=n(`
`,-1))])]),_:1}),l(a,{title:"コールバック"},{default:e(()=>[t("pre",null,[s[220]||(s[220]=n(`// exsample1

`,-1)),l(o,null,{default:e(()=>[...s[217]||(s[217]=[n("var fnc1 = function(",-1),t("b",{class:"t01"},"callback",-1),n(`) {
  for (var i = 0; i < 5000; i++) {
    console.log('Running fnc1...');
  }
  `,-1),t("b",{class:"t03"},"callback()",-1),n(`;
};

var fnc2 = function() {
  console.log('finished');
};

fnc1(`,-1),t("b",{class:"t01"},"fnc2",-1),n(`);

`,-1),t("b",{class:"t02"},"// 関数の引数として関数を渡し、内部で実行することをコールバックという",-1),n(`
`,-1)])]),_:1}),s[221]||(s[221]=n(`

---

// exsample2

`,-1)),l(o,null,{default:e(()=>[...s[218]||(s[218]=[n("var fnc1 = function(",-1),t("b",{class:"t01"},"callback",-1),n(`) {
  console.log('Running fnc1...')
  setTimeout(function() {
    `,-1),t("b",{class:"t03"},"callback()",-1),n(`;
  }, 2000);
};

var fnc2 = function() {
  console.log('Running fnc2...')
  setTimeout(function() {
    console.log('finished');
  }, 2000);
};

fnc1(`,-1),t("b",{class:"t01"},"fnc2",-1),n(`);
`,-1)])]),_:1}),s[222]||(s[222]=n(`

---

// exsample3

`,-1)),l(o,null,{default:e(()=>[...s[219]||(s[219]=[n("var fnc1 = function(",-1),t("b",{class:"t01"},"callback",-1),n(`) {
  console.log('Running fnc1...')
  setTimeout(function() {
    `,-1),t("b",{class:"t03"},[n("callback("),t("b",{class:"t04"},"fnc3"),n(")")],-1),n(`;
  }, 2000);
};

var fnc2 = function(`,-1),t("b",{class:"t04"},"callback",-1),n(`) {
  console.log('Running fnc2...')
  setTimeout(function() {
    `,-1),t("b",{class:"t05"},"callback()",-1),n(`;
  }, 2000);
};

var fnc3 = function() {
  console.log('Running fnc3...')
  setTimeout(function() {
    console.log('finished');
  }, 2000);
};

fnc1(`,-1),t("b",{class:"t01"},"fnc2",-1),n(`);
`,-1)])]),_:1}),s[223]||(s[223]=n(`
`,-1))])]),_:1}),l(a,{title:"非同期"},{default:e(()=>[t("pre",null,[s[225]||(s[225]=n("",-1)),l(o,null,{default:e(()=>[...s[224]||(s[224]=[n(`console.log('a');
setTimeout(function() {console.log('b')}, 1000);
console.log('c');

`,-1),t("b",{class:"t02"},`// a -> c -> b

// 1) キューにconsole.log('a');を登録
// 2) キューにsetTimeout(~~~);を登録
// 3) キューにconsole.log('c');を登録
// 4) console.log('a');の実行
// 5) setTimeout(~~~);の実行 -> タイマーにfunction() {console.log('b')}を登録
// 6) console.log('c');の実行
// 7) 5)から1000ミリ秒後に別のキューにconsole.log('b');を登録
// 8) console.log('b');の実行`,-1),n(`
`,-1)])]),_:1}),s[226]||(s[226]=n(`
`,-1))])]),_:1}),l(a,{title:"配列"},{default:e(()=>[t("pre",null,[s[243]||(s[243]=n(`// 一次元配列

`,-1)),l(o,null,{default:e(()=>[...s[227]||(s[227]=[n("var arr = ",-1),t("b",{class:"t01"},"new Array(",-1),n('"foo"',-1),t("b",{class:"t01"},",",-1),n("42",-1),t("b",{class:"t01"},",",-1),n("true",-1),t("b",{class:"t01"},")",-1),n(";  ",-1),t("b",{class:"t02"},"// 書式１",-1),n(`
var arr = `,-1),t("b",{class:"t01"},"[",-1),n('"foo"',-1),t("b",{class:"t01"},",",-1),n("42",-1),t("b",{class:"t01"},",",-1),n("true",-1),t("b",{class:"t01"},"]",-1),n(";  ",-1),t("b",{class:"t02"},"// 書式２",-1),n(`

console.log(arr`,-1),t("b",{class:"t01"},"[0]",-1),n(");  ",-1),t("b",{class:"t02"},"// foo",-1),n(`
console.log(arr`,-1),t("b",{class:"t01"},"[1]",-1),n(");  ",-1),t("b",{class:"t02"},"// 42",-1),n(`
console.log(arr`,-1),t("b",{class:"t01"},"[2]",-1),n(");  ",-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(arr`,-1),t("b",{class:"t01"},"[3]",-1),n(");  ",-1),t("b",{class:"t02"},"// undefined",-1),n(`

console.log(arr.`,-1),t("b",{class:"t01"},"length",-1),n(");  ",-1),t("b",{class:"t02"},"// 3",-1),n(`

console.log(arr);  `,-1),t("b",{class:"t02"},"// ['foo', 42, true]",-1),n(`

arr.push(3,4);
console.log(arr);  `,-1),t("b",{class:"t02"},"// ['foo', 42, true, 3, 4]",-1),n(`

arr.child = 5;
console.log(arr);  `,-1),t("b",{class:"t02"},"// ['foo', 42, true, 3, 4, child: 5]",-1),n(`
console.log(arr[5]);  `,-1),t("b",{class:"t02"},"// undefined",-1),n(`
console.log(arr.child);  `,-1),t("b",{class:"t02"},"// 5",-1),n(`

arr.push(6);
console.log(arr);  `,-1),t("b",{class:"t02"},"// ['foo', 42, true, 3, 4, 6, child: 5]",-1),n(`
console.log(arr[5]);  `,-1),t("b",{class:"t02"},"// 6",-1),n(`

arr.reverse();
console.log(arr);  `,-1),t("b",{class:"t02"},"// [6, 4, 3, true, 42, 'foo', child: 5]",-1),n(`
`,-1)])]),_:1}),s[244]||(s[244]=n(`

---

// 多次元配列

`,-1)),l(o,null,{default:e(()=>[...s[228]||(s[228]=[n("var arr = ",-1),t("b",{class:"t01"},"[",-1),n("['foo', 42, true]",-1),t("b",{class:"t01"},",",-1),n(" ['bar', 84, false]",-1),t("b",{class:"t01"},"]",-1),n(`;

console.log(arr`,-1),t("b",{class:"t01"},"[1]",-1),n(");  ",-1),t("b",{class:"t02"},"// ['bar', 84, false]",-1),n(`
console.log(arr`,-1),t("b",{class:"t01"},"[1][1]",-1),n(");  ",-1),t("b",{class:"t02"},"// 84",-1),n(`

console.log(arr.length);  `,-1),t("b",{class:"t02"},"// 2",-1),n(`

console.log(arr);  `,-1),t("b",{class:"t02"},"// [Array[3], Array[3]]",-1),n(`
`,-1)])]),_:1}),s[245]||(s[245]=n(`

---

// 配列のループ処理1 (for)

`,-1)),l(o,null,{default:e(()=>[...s[229]||(s[229]=[n(`var arr = ['foo', 42, true];

for (var i = 0, al = arr.length; i < al; i++) {
  console.log(arr[i]);  `,-1),t("b",{class:"t02"},"// foo -> 42 -> true",-1),n(`
}

`,-1),t("b",{class:"t02"},"// for (var i = 0; i < arr.length; i++) だと毎回lengthプロパティを参照するので非効率",-1),n(`
`,-1)])]),_:1}),s[246]||(s[246]=n(`

---

// 配列のループ処理2 (for〜in)

`,-1)),l(o,null,{default:e(()=>[...s[230]||(s[230]=[n(`var arr = ['foo', 42, true];

for (var i in arr) {
  console.log('arr[' + `,-1),t("b",{class:"t01"},"i",-1),n(" + '] = ' + ",-1),t("b",{class:"t01"},"arr[i]",-1),n(`);
}

`,-1),t("b",{class:"t02"},`// arr[0] = foo
// arr[1] = 42
// arr[2] = true`,-1),n(`
`,-1)])]),_:1}),s[247]||(s[247]=n(`

---

// 配列のループ処理3 (forEach)

`,-1)),l(o,null,{default:e(()=>[...s[231]||(s[231]=[n(`var arr = ['foo', 42, true];
function fnc(`,-1),t("b",{class:"t01"},"value, index",-1),n(`) {
  console.log('arr[' + `,-1),t("b",{class:"t01"},"index",-1),n(" + '] = ' + ",-1),t("b",{class:"t01"},"value",-1),n(`);
}

arr.`,-1),t("b",{class:"t01"},"forEach(",-1),n("fnc",-1),t("b",{class:"t01"},")",-1),n(`;

`,-1),t("b",{class:"t02"},`// arr[0] = foo
// arr[1] = 42
// arr[2] = true`,-1),n(`
`,-1)])]),_:1}),s[248]||(s[248]=n(`

---

// pop, shift

`,-1)),l(o,null,{default:e(()=>[...s[232]||(s[232]=[n(`var arr = [1, 2, 3,];

arr.`,-1),t("b",{class:"t01"},"shift()",-1),n(`;
console.log(arr); `,-1),t("b",{class:"t02"},"// [2, 3,]",-1),n(`
arr.`,-1),t("b",{class:"t01"},"pop()",-1),n(`;
console.log(arr); `,-1),t("b",{class:"t02"},"// [2,]",-1),n(`
`,-1)])]),_:1}),s[249]||(s[249]=n(`

---

// splice

`,-1)),l(o,null,{default:e(()=>[...s[233]||(s[233]=[n(`var arr = [1, 2, 3,];

arr.`,-1),t("b",{class:"t01"},"splice(",-1),n("1, 0, 1.5",-1),t("b",{class:"t01"},")",-1),n(`;
console.log(arr); `,-1),t("b",{class:"t02"},"// [1, 1.5, 2, 3,]",-1),n(`
arr.`,-1),t("b",{class:"t01"},"splice(",-1),n("1, 1, 1.6",-1),t("b",{class:"t01"},")",-1),n(`;
console.log(arr); `,-1),t("b",{class:"t02"},"// [1, 1.6, 2, 3,]",-1),n(`
`,-1)])]),_:1}),s[250]||(s[250]=n(`

---

// concat

`,-1)),l(o,null,{default:e(()=>[...s[234]||(s[234]=[n(`var arr1 = [1, 2, 3,];
var arr2 = [4, 5, 6,];

var arr3 = arr1.`,-1),t("b",{class:"t01"},"concat(",-1),n("arr2",-1),t("b",{class:"t01"},")",-1),n(`;
console.log(arr3); `,-1),t("b",{class:"t02"},"// [1, 2, 3, 4, 5, 6,]",-1),n(`
`,-1)])]),_:1}),s[251]||(s[251]=n(`

---

// join

`,-1)),l(o,null,{default:e(()=>[...s[235]||(s[235]=[n(`var arr = [1, 2, 3,];

console.log(arr.`,-1),t("b",{class:"t01"},"join()",-1),n("); ",-1),t("b",{class:"t02"},"// 1,2,3",-1),n(`
`,-1)])]),_:1}),s[252]||(s[252]=n(`

---

// find

`,-1)),l(o,null,{default:e(()=>[...s[236]||(s[236]=[n(`var arr = ['a', 'b', 'c',];

console.log(arr.`,-1),t("b",{class:"t01"},"find(",-1),n("value => value === 'b'",-1),t("b",{class:"t01"},")",-1),n("); ",-1),t("b",{class:"t02"},"// 'b'",-1),n(`
console.log(arr.`,-1),t("b",{class:"t01"},"find(",-1),n(`value => {
  return value === 'b';
}`,-1),t("b",{class:"t01"},")",-1),n("); ",-1),t("b",{class:"t02"},"// 'b'",-1),n(`
`,-1)])]),_:1}),s[253]||(s[253]=n(`

---

// sort

`,-1)),l(o,null,{default:e(()=>[...s[237]||(s[237]=[n(`var arr = [6, 4, 5, 3, 1, 2,];

arr.`,-1),t("b",{class:"t01"},"sort((",-1),n("a, b",-1),t("b",{class:"t01"},`) => {
  if (`,-1),n("a > b",-1),t("b",{class:"t01"},`) {
    return 1;
  }
  if (`,-1),n("a === b",-1),t("b",{class:"t01"},`) {
    return 0;
  }
  if (`,-1),n("a < b",-1),t("b",{class:"t01"},`) {
    return -1;
  }
})`,-1),n(`;

console.log(arr); `,-1),t("b",{class:"t02"},"// [1, 2, 3, 4, 5, 6,]",-1),n(`
`,-1)])]),_:1}),s[254]||(s[254]=n(`

---

// localeCompare

`,-1)),l(o,null,{default:e(()=>[...s[238]||(s[238]=[n(`var arr = ['b', 'a', 'd', 'e', 'c',];

arr.`,-1),t("b",{class:"t01"},"sort((a, b) => a.localeCompare(b))",-1),n(`;
console.log(arr); `,-1),t("b",{class:"t02"},"// ['a', 'b', 'c', 'd', 'e',]",-1),n(`
`,-1)])]),_:1}),s[255]||(s[255]=n(`

---

// map

`,-1)),l(o,null,{default:e(()=>[...s[239]||(s[239]=[n(`var arr1 = [1, 2, 3,];

var arr2 = arr1.`,-1),t("b",{class:"t01"},"map(",-1),n("value => value * 2",-1),t("b",{class:"t01"},")",-1),n(`;
console.log(arr2); `,-1),t("b",{class:"t02"},"// [2, 4, 6,]",-1),n(`
`,-1)])]),_:1}),s[256]||(s[256]=n(`

---

// filter

`,-1)),l(o,null,{default:e(()=>[...s[240]||(s[240]=[n(`var arr1 = [1, 2, 3, 4, 5, 6,];

var arr2 = arr1.`,-1),t("b",{class:"t01"},"filter(",-1),n("value => value % 2 === 0",-1),t("b",{class:"t01"},")",-1),n(`;
console.log(arr2); `,-1),t("b",{class:"t02"},"// [2, 4, 6,]",-1),n(`
`,-1)])]),_:1}),s[257]||(s[257]=n(`

---

// Arraylike1

`,-1)),l(o,null,{default:e(()=>[...s[241]||(s[241]=[n(`var str = 'abcdef';
console.log(`,-1),t("b",{class:"t01"},"[...",-1),n("str",-1),t("b",{class:"t01"},"]",-1),n("); ",-1),t("b",{class:"t02"},"// ['a', 'b', 'c', 'd', 'e', 'f',]",-1),n(`
`,-1)])]),_:1}),s[258]||(s[258]=n(`

---

// Arraylike2

`,-1)),l(o,null,{default:e(()=>[...s[242]||(s[242]=[n(`<div>div</div>
<div class="on">div</div>
<div>div</div>

<script>
var divs = document.querySelectorAll('div');

`,-1),t("b",{class:"t02"},`// var on_els = divs.filter((el) => {
//   el.classList.contains('on');
// }); // error [divs is not array]`,-1),n(`

divs = `,-1),t("b",{class:"t01"},"[...",-1),n("divs",-1),t("b",{class:"t01"},"]",-1),n(`;

var on_els = divs.filter((el) => {
  return el.classList.contains('on');
});

console.log(on_els); `,-1),t("b",{class:"t02"},"// [div.on]",-1),n(`
<\/script>
`,-1)])]),_:1}),s[259]||(s[259]=n(`
`,-1))])]),_:1}),l(a,{title:"オブジェクト(定義)"},{default:e(()=>[t("pre",null,[s[263]||(s[263]=n(`// 書式１(ドット記法)


`,-1)),l(o,null,{default:e(()=>[...s[260]||(s[260]=[n("var obj = ",-1),t("b",{class:"t01"},"new Object()",-1),n(";  ",-1),t("b",{class:"t02"},"// var obj = {}; と同じ",-1),n(`
obj`,-1),t("b",{class:"t01"},".",-1),n(`val1 = 'foo';
obj`,-1),t("b",{class:"t01"},".",-1),n(`val2 = 42;
obj`,-1),t("b",{class:"t01"},".",-1),n(`mtd1 = function() {console.log(84)};

console.log(obj.val1);  `,-1),t("b",{class:"t02"},"// foo",-1),n(`
console.log(obj.val2);  `,-1),t("b",{class:"t02"},"// 42",-1),n(`
console.log(obj.mtd1);  `,-1),t("b",{class:"t02"},"// function() {console.log(84)};",-1),n(`
obj.mtd1();  `,-1),t("b",{class:"t02"},"// 84",-1),n(`
`,-1)])]),_:1}),s[264]||(s[264]=n(`


---

// 書式２(ブラケット記法)


`,-1)),l(o,null,{default:e(()=>[...s[261]||(s[261]=[n("var obj = ",-1),t("b",{class:"t01"},"new Object()",-1),n(`;
obj`,-1),t("b",{class:"t01"},"['",-1),n("val1",-1),t("b",{class:"t01"},"']",-1),n(` = 'foo';
obj`,-1),t("b",{class:"t01"},"['",-1),n("val2",-1),t("b",{class:"t01"},"']",-1),n(` = 42;
obj`,-1),t("b",{class:"t01"},"['",-1),n("mtd1",-1),t("b",{class:"t01"},"']",-1),n(` = function() {console.log(84)};

console.log(obj['val1']);  `,-1),t("b",{class:"t02"},"// foo",-1),n(`
console.log(obj['val2']);  `,-1),t("b",{class:"t02"},"// 42",-1),n(`
console.log(obj['mtd1']);  `,-1),t("b",{class:"t02"},"// function() {console.log(84)}",-1),n(`
obj['mtd1']();  `,-1),t("b",{class:"t02"},"// 84",-1),n(`

`,-1),t("b",{class:"t02"},"// プロパティを演算で表記可能",-1),n(`
`,-1),t("b",{class:"t02"},"console.log(obj['v' + 'a' + 'l' + '1']);  // foo",-1),n(`
`,-1),t("b",{class:"t02"},"// 数字で始まるプロパティが使用可能",-1),n(`
`,-1),t("b",{class:"t02"},"obj['123'] = 'bar';",-1),n(`
`,-1),t("b",{class:"t02"},"console.log(obj['123']);  // bar",-1),n(`
`,-1)])]),_:1}),s[265]||(s[265]=n(`


---

// 書式３(オブジェクトリテラル)


`,-1)),l(o,null,{default:e(()=>[...s[262]||(s[262]=[n("var obj = ",-1),t("b",{class:"t01"},`{
  `,-1),n("val1",-1),t("b",{class:"t01"},": ",-1),n("'foo'",-1),t("b",{class:"t01"},`,
  `,-1),n("val2",-1),t("b",{class:"t01"},":",-1),n(" 42",-1),t("b",{class:"t01"},`,
  `,-1),n("val3",-1),t("b",{class:"t01"},": {",-1),n(`
    val3_1`,-1),t("b",{class:"t01"},":",-1),n(" 84",-1),t("b",{class:"t01"},",",-1),n(`
    val3_2`,-1),t("b",{class:"t01"},":",-1),n(` 126
  `,-1),t("b",{class:"t01"},"},",-1),n(`
  mtd1`,-1),t("b",{class:"t01"},":",-1),n(` function() {
    console.log(168);
  `,-1),t("b",{class:"t01"},`}
}`,-1),n(`;

console.log(obj.val1);  `,-1),t("b",{class:"t02"},"// foo",-1),n(`
console.log(obj.val2);  `,-1),t("b",{class:"t02"},"// 42",-1),n(`
console.log(obj.val3.val3_2);  `,-1),t("b",{class:"t02"},"// 126",-1),n(`
console.log(obj.val3.val3_3);  `,-1),t("b",{class:"t02"},"// undefined",-1),n(`
console.log(obj.val3.val3_3 || 'known');  `,-1),t("b",{class:"t02"},"// known // 初期値の設定が可能",-1),n(`
console.log(obj.val3.val3_2 || 'known');  `,-1),t("b",{class:"t02"},"// 126",-1),n(`
console.log(obj.mtd1);  `,-1),t("b",{class:"t02"},"// function() { console.log(168); }",-1),n(`
obj.mtd1();  `,-1),t("b",{class:"t02"},"// 168",-1),n(`
console.log(obj);  `,-1),t("b",{class:"t02"},"// Object {...}",-1),n(`
`,-1)])]),_:1}),s[266]||(s[266]=n(`
`,-1))])]),_:1}),l(a,{title:"オブジェクト(this)"},{default:e(()=>[t("pre",null,[s[277]||(s[277]=n(`１) グローバル


`,-1)),l(o,null,{default:e(()=>[...s[267]||(s[267]=[n("console.log(",-1),t("b",{class:"t03"},"this",-1),n(");  ",-1),t("b",{class:"t02"},"// Window { ... }",-1),n(`
`,-1),t("b",{class:"t02"},"// この場合、thisが属するオブジェクト(すなわちグローバル)を参照する",-1),n(`
`,-1)])]),_:1}),s[278]||(s[278]=n(`


---

２) 即時関数


`,-1)),l(o,null,{default:e(()=>[...s[268]||(s[268]=[n(`(function() {
  console.log(`,-1),t("b",{class:"t03"},"this",-1),n(");  ",-1),t("b",{class:"t02"},"// Window { ... }",-1),n(`
  `,-1),t("b",{class:"t02"},"// この場合もグローバルを参照する",-1),n(`

})();
`,-1)])]),_:1}),s[279]||(s[279]=n(`


---

３) 関数呼び出し


`,-1)),l(o,null,{default:e(()=>[...s[269]||(s[269]=[n(`function fnc() {
  console.log(`,-1),t("b",{class:"t03"},"this",-1),n(");  ",-1),t("b",{class:"t02"},"// Window { ... }",-1),n(`
  `,-1),t("b",{class:"t02"},"// この場合もグローバルを参照する",-1),n(`

}
fnc(); `,-1),t("b",{class:"t02"},"// 関数呼び出し",-1),n(`
`,-1)])]),_:1}),s[280]||(s[280]=n(`


---

４) オブジェクトのメソッド呼び出しと関数呼び出し


`,-1)),l(o,null,{default:e(()=>[...s[270]||(s[270]=[n(`var obj = {
  val: 'foo',
  mtd: function() {
    console.log(`,-1),t("b",{class:"t01"},"this",-1),n("); ",-1),t("b",{class:"t02"},"// Object {val: 'foo'}",-1),n(`
    `,-1),t("b",{class:"t02"},"// メソッド呼び出しの場合、thisはベースオブジェクト(自分の親となるオブジェクト)を参照する",-1),n(`

    function fnc() {
      console.log(`,-1),t("b",{class:"t03"},"this",-1),n("); ",-1),t("b",{class:"t02"},"// Window { ... }",-1),n(`
      `,-1),t("b",{class:"t02"},"// 関数呼び出しの場合、thisはグローバルを参照する",-1),n(`
    }
    fnc(); `,-1),t("b",{class:"t02"},"// 関数呼び出し",-1),n(`
  }
};
obj.mtd(); `,-1),t("b",{class:"t02"},"// メソッド呼び出し",-1)])]),_:1}),s[281]||(s[281]=n(`



`,-1)),s[282]||(s[282]=t("b",{class:"t02"},"// 関数呼び出しを有効にする方法",-1)),s[283]||(s[283]=n(`

`,-1)),l(o,null,{default:e(()=>[...s[271]||(s[271]=[n(`var obj = {
  val: 'foo',
  mtd: function() {
    console.log(`,-1),t("b",{class:"t01"},"this",-1),n("); ",-1),t("b",{class:"t02"},"// Object {val: 'foo'}",-1),n(`

    `,-1),t("b",{class:"t03"},[n("var "),t("b",{class:"t01"},"_this"),n(" = this;")],-1),n(`
    function fnc() {
      console.log(`,-1),t("b",{class:"t01"},"_this",-1),n("); ",-1),t("b",{class:"t02"},"// Object {val: 'foo'}",-1),n(`
    }
    fnc(); `,-1),t("b",{class:"t02"},"// 関数呼び出し",-1),n(`
  }
};
obj.mtd(); `,-1),t("b",{class:"t02"},"// メソッド呼び出し",-1),n(`
`,-1)])]),_:1}),s[284]||(s[284]=n(`


---

５) コンストラクタ


`,-1)),l(o,null,{default:e(()=>[...s[272]||(s[272]=[n(`function fnc() {
  `,-1),t("b",{class:"t01"},"this",-1),n(`.val = 'foo';
  `,-1),t("b",{class:"t01"},"this",-1),n(`.mtd = function() {
    console.log(`,-1),t("b",{class:"t01"},"this",-1),n("); ",-1),t("b",{class:"t02"},"// fnc {val: 'foo'}",-1),n(`
  };
}

var obj = new fnc();
`,-1),t("b",{class:"t02"},"// インスタンス生成(objをthisとしたオブジェクトを作る)",-1),n(`

obj.mtd(); `,-1),t("b",{class:"t02"},"// メソッド呼び出し",-1),n(`
`,-1)])]),_:1}),s[285]||(s[285]=n(`


---

６) call


`,-1)),l(o,null,{default:e(()=>[...s[273]||(s[273]=[n(`var obj = {
  foo1: 'bar1',
  foo2: 'bar2',
};

function fnc(arg1, arg2) {
  console.log(`,-1),t("b",{class:"t01"},"this",-1),n(`);
  `,-1),t("b",{class:"t01"},"this",-1),n(`.param1 = arg1;
  `,-1),t("b",{class:"t01"},"this",-1),n(`.param2 = arg2;
  console.log(`,-1),t("b",{class:"t01"},"this",-1),n(`);
}

fnc.call(obj, 'var1', 'var2');
`,-1),t("b",{class:"t02"},"// fncを呼び出し、任意のobjectをthisに設定できる",-1),n(`
`,-1)])]),_:1}),s[286]||(s[286]=n(`


---

７) apply


`,-1)),l(o,null,{default:e(()=>[...s[274]||(s[274]=[n(`var obj = {
  foo1: 'bar1',
  foo2: 'bar2',
};

function fnc(arg1, arg2) {
  console.log(`,-1),t("b",{class:"t01"},"this",-1),n(`);
  `,-1),t("b",{class:"t01"},"this",-1),n(`.param1 = arg1;
  `,-1),t("b",{class:"t01"},"this",-1),n(`.param2 = arg2;
  console.log(`,-1),t("b",{class:"t01"},"this",-1),n(`);
}

fnc.apply(obj, ['var1', 'var2']);
`,-1),t("b",{class:"t02"},"// callとほぼ同じだが第二引数が配列",-1),n(`
`,-1)])]),_:1}),s[287]||(s[287]=n(`


---

８) bind


`,-1)),l(o,null,{default:e(()=>[...s[275]||(s[275]=[n(`var obj = {
  foo1: 'bar1',
  foo2: 'bar2',
};

function fnc(arg1, arg2) {
  `,-1),t("b",{class:"t01"},"this",-1),n(`.param1 = arg1;
  `,-1),t("b",{class:"t01"},"this",-1),n(`.param2 = arg2;
  console.log(`,-1),t("b",{class:"t01"},"this",-1),n(`);
}

var fnc1 = fnc.bind(obj); `,-1),t("b",{class:"t02"},"// thisにobjを設定した新しい関数fnc1を作成できる",-1),n(`
var fnc2 = fnc.bind(obj, 1); `,-1),t("b",{class:"t02"},"// thisにobjを設定、引数に任意の値を一つ指定",-1),n(`
var fnc3 = fnc.bind(obj, 1, 2); `,-1),t("b",{class:"t02"},"// thisにobjを設定、引数に任意の値を二つ指定",-1),n(`

`,-1),t("b",{class:"t02"},"// 追加引数なし",-1),n(`
fnc1();
fnc2();
fnc3();

`,-1),t("b",{class:"t02"},"// 追加引数あり",-1),n(`
fnc1(3); `,-1),t("b",{class:"t02"},"// 第一引数(arg1)に3が入る",-1),n(`
fnc2(3); `,-1),t("b",{class:"t02"},"// 第一引数は埋まっているため、第二引数(arg2)に3が入る",-1),n(`
fnc3(3); `,-1),t("b",{class:"t02"},"// 両方埋まっているため、3は入らない",-1),n(`
`,-1)])]),_:1}),s[288]||(s[288]=n(`


// nullを設定

`,-1)),l(o,null,{default:e(()=>[...s[276]||(s[276]=[n(`function fnc(arg1, arg2, arg3) {
  console.log(this); `,-1),t("b",{class:"t02"},"// nullの場合thisへのbindは無効",-1),n(`
  console.log(arg1); `,-1),t("b",{class:"t02"},"// 1が固定される",-1),n(`
  console.log(arg2); `,-1),t("b",{class:"t02"},"// 空き",-1),n(`
  console.log(arg3); `,-1),t("b",{class:"t02"},"// 空き",-1),n(`
}

var fnc1 = fnc.bind(null, 1);
fnc1(2, 3);
`,-1)])]),_:1}),s[289]||(s[289]=n(`
`,-1))])]),_:1}),l(a,{title:"オブジェクト(可変長引数)"},{default:e(()=>[t("pre",null,[s[293]||(s[293]=n(`// arguments


`,-1)),l(o,null,{default:e(()=>[...s[290]||(s[290]=[n(`function fnc () {
  console.log(`,-1),t("b",{class:"t01"},"arguments",-1),n(");  ",-1),t("b",{class:"t02"},"// [4, 2]",-1),n(`
  console.log(typeof arguments);  `,-1),t("b",{class:"t02"},"// object",-1),n(`
  console.log(arguments[0]);  `,-1),t("b",{class:"t02"},"// 4",-1),n(`
  console.log(arguments[1]);  `,-1),t("b",{class:"t02"},"// 2",-1),n(`
  console.log(arguments[2]);  `,-1),t("b",{class:"t02"},"// undefined",-1),n(`
  return arguments[0] + arguments[1];
}

console.log(fnc(4, 2));  `,-1),t("b",{class:"t02"},"// 6",-1),n(`

`,-1),t("b",{class:"t02"},"// argumentsは引数を配列的に格納するオブジェクト(可変長引数)",-1),n(`
`,-1)])]),_:1}),s[294]||(s[294]=n(`


---

// 仮引数を置いた場合


`,-1)),l(o,null,{default:e(()=>[...s[291]||(s[291]=[n("function fnc (",-1),t("b",{class:"t01"},"foo",-1),n(`) {
  console.log(`,-1),t("b",{class:"t01"},"foo",-1),n(");  ",-1),t("b",{class:"t02"},"// 4",-1),n(`
  console.log(arguments[0]);  `,-1),t("b",{class:"t02"},"// 4",-1),n(`
  console.log(arguments[1]);  `,-1),t("b",{class:"t02"},"// 2",-1),n(`
  console.log(arguments[2]);  `,-1),t("b",{class:"t02"},"// undefined",-1),n(`
  return arguments[0] + arguments[1];
}

console.log(fnc(4, 2));  `,-1),t("b",{class:"t02"},"// 6",-1),n(`

`,-1),t("b",{class:"t02"},"// 第1引数が仮引数に入り、argumentsも生成される",-1),n(`
`,-1),t("b",{class:"t02"},"// 仮引数に入るのはオブジェクト(argument)では無い",-1),n(`
`,-1)])]),_:1}),s[295]||(s[295]=n(`


---

// arguments.callee


`,-1)),l(o,null,{default:e(()=>[...s[292]||(s[292]=[n(`function fnc () {
  return `,-1),t("b",{class:"t01"},"arguments.callee",-1),n(`;
}

console.log(fnc);  `,-1),t("b",{class:"t02"},"// functionの内容",-1),n(`
console.log(fnc());  `,-1),t("b",{class:"t02"},"// functionの内容",-1),n(`

`,-1),t("b",{class:"t02"},"// arguments.calleeは実行中の関数自身を参照する",-1),n(`
`,-1)])]),_:1}),s[296]||(s[296]=n(`
`,-1))])]),_:1}),l(a,{title:"オブジェクト(名前付き引数)"},{default:e(()=>[t("pre",null,[s[298]||(s[298]=n("",-1)),l(o,null,{default:e(()=>[...s[297]||(s[297]=[n(`function sum(args) {
  if (args.arg1 === undefined) { args.arg1 = 1; }
  if (args.arg2 === undefined) { args.arg2 = 1; }
  return args.arg1 + args.arg2;
}

console.log(sum(`,-1),t("b",{class:"t01"},"{ ",-1),n("arg1",-1),t("b",{class:"t01"},":",-1),n(" 42",-1),t("b",{class:"t01"},",",-1),n(" arg2",-1),t("b",{class:"t01"},":",-1),n(" 84 ",-1),t("b",{class:"t01"},"}",-1),n("));  ",-1),t("b",{class:"t02"},"// 126",-1),n(`
console.log(sum(`,-1),t("b",{class:"t01"},"{",-1),n(" arg1",-1),t("b",{class:"t01"},":",-1),n(" 42 ",-1),t("b",{class:"t01"},"}",-1),n("));  ",-1),t("b",{class:"t02"},"// 43",-1),n(`
console.log(sum(`,-1),t("b",{class:"t01"},"{",-1),n(" arg2",-1),t("b",{class:"t01"},":",-1),n(" 84 ",-1),t("b",{class:"t01"},"}",-1),n("));  ",-1),t("b",{class:"t02"},"// 85",-1),n(`
console.log(sum(`,-1),t("b",{class:"t01"},"{}",-1),n("));  ",-1),t("b",{class:"t02"},"// 2",-1),n(`
console.log(sum());  `,-1),t("b",{class:"t02"},"// Uncaught TypeError: Cannot read property 'arg1' of undefined",-1),n(`
`,-1)])]),_:1}),s[299]||(s[299]=n(`
`,-1))])]),_:1}),l(a,{title:"オブジェクト(連想配列)"},{default:e(()=>[t("pre",null,[s[302]||(s[302]=n(`// 連想配列(ハッシュ) と for 〜 in


`,-1)),l(o,null,{default:e(()=>[...s[300]||(s[300]=[n(`var obj = {
  val1 : 'foo',
  val2 : 'bar',
  val3 : 'baz',
}

`,-1),t("b",{class:"t01"},"for (var i in",-1),n(" obj",-1),t("b",{class:"t01"},") {",-1),n(`
  console.log('value of ' + i + ' is ' + obj[i]);
`,-1),t("b",{class:"t01"},"}",-1),n(`

`,-1),t("b",{class:"t02"},"// value of val1 is foo",-1),n(`
`,-1),t("b",{class:"t02"},"// value of val2 is bar",-1),n(`
`,-1),t("b",{class:"t02"},"// value of val3 is baz",-1),n(`
`,-1)])]),_:1}),s[303]||(s[303]=n(`


---

// 連想配列(ハッシュ) と if 〜 in


`,-1)),l(o,null,{default:e(()=>[...s[301]||(s[301]=[n(`var obj = {
  val1 : 'foo',
  val2 : 'bar',
  val3 : 'baz',
}

`,-1),t("b",{class:"t01"},"if (",-1),n("'val2' ",-1),t("b",{class:"t01"},"in",-1),n(" obj",-1),t("b",{class:"t01"},") {",-1),n(`
  console.log(obj['val2']);  `,-1),t("b",{class:"t02"},"// bar",-1),n(`
`,-1),t("b",{class:"t01"},"}",-1),n(`
`,-1)])]),_:1}),s[304]||(s[304]=n(`
`,-1))])]),_:1}),l(a,{title:"オブジェクト(列挙)"},{default:e(()=>[t("pre",null,[s[306]||(s[306]=n("",-1)),l(o,null,{default:e(()=>[...s[305]||(s[305]=[n(`var obj = {
  'key1': 'val1',
  'key2': 'val2',
  'key3': 'val3',
};

console.log(`,-1),t("b",{class:"t01"},"Object.keys(",-1),n("obj",-1),t("b",{class:"t01"},")",-1),n(");  ",-1),t("b",{class:"t02"},'// ["key1", "key2", "key3"]',-1),n(`
console.log(`,-1),t("b",{class:"t01"},"Object.values(",-1),n("obj",-1),t("b",{class:"t01"},")",-1),n(");  ",-1),t("b",{class:"t02"},'// ["val1", "val2", "val3"]',-1),n(`
console.log(`,-1),t("b",{class:"t01"},"Object.entries(",-1),n("obj",-1),t("b",{class:"t01"},")",-1),n(");  ",-1),t("b",{class:"t02"},'// [["key1", "val1"], ["key2", "val2"], ["key3", "val3"]]',-1),n(`
`,-1)])]),_:1}),s[307]||(s[307]=n(`
`,-1))])]),_:1}),l(a,{title:"実体と参照"},{default:e(()=>[t("pre",null,[s[310]||(s[310]=n(`実体：プリミティブ型。値そのもの。
参照：実体の場所を指す情報。オブジェクト名や配列名。



// １）配列の参照コピー

`,-1)),l(o,null,{default:e(()=>[...s[308]||(s[308]=[n(`var arr1 = ['foo','bar','baz'];
var arr2 = arr1;  `,-1),t("b",{class:"t02"},"// 参照情報のコピーになる",-1),n(`

arr1[2] = 'qux';  `,-1),t("b",{class:"t02"},"// arr1が参照する値を変える(実体値を変える)と、",-1),n(`

console.log(arr1[2]);  `,-1),t("b",{class:"t02"},"// qux",-1),n(`
console.log(arr2[2]);  `,-1),t("b",{class:"t02"},[n("// "),t("b",{class:"t01"},"qux"),n("  arr2が参照する値も変わる(同じ実体値を参照している)")],-1),n(`
`,-1)])]),_:1}),s[311]||(s[311]=n(`



// ２）配列の実体コピー

`,-1)),l(o,null,{default:e(()=>[...s[309]||(s[309]=[n("function copyArray(inArr) {  ",-1),t("b",{class:"t02"},"// 配列を実体コピーする関数",-1),n(`
  var outArr = [];  `,-1),t("b",{class:"t02"},"// 新しい配列を作る",-1),n(`
  for (var i = 0; i < inArr.length; i++) {
    if (inArr[i] `,-1),t("b",{class:"t01"},"instanceof",-1),n(" Array) {  ",-1),t("b",{class:"t02"},"// inArr[i] が Array(配列) なら true",-1),n(`
      outArr[i] = copyArray(inArr[i]);  `,-1),t("b",{class:"t02"},"// trueならもう一度関数を呼ぶ",-1),n(`
    } else {
      outArr[i] = inArr[i];  `,-1),t("b",{class:"t02"},"// trueでなければ実体の値を代入",-1),n(`
    }
  }
  return outArr;
}

var arr1 = [['foo0', 'bar0'], ['foo1','bar1']];
var arr2 = copyArray(arr1);  `,-1),t("b",{class:"t02"},"// 実体の複製ができるため、",-1),n(`

arr1[1][1] = 'qux1';  `,-1),t("b",{class:"t02"},"// arr1が参照する値を変えても、",-1),n(`

console.log(arr1[1][1]);  `,-1),t("b",{class:"t02"},"// qux1",-1),n(`
console.log(arr2[1][1]);  `,-1),t("b",{class:"t02"},[n("// "),t("b",{class:"t01"},"bar1"),n("  arr2が参照する値は変化しない")],-1),n(`
`,-1)])]),_:1}),s[312]||(s[312]=n(`
`,-1))])]),_:1}),l(a,{title:"DOM参照(基礎)"},{default:e(()=>[t("pre",null,[s[319]||(s[319]=n(`// １）document参照


`,-1)),l(o,null,{default:e(()=>[...s[313]||(s[313]=[n(`<!doctype html>
<title>title</title>

<script>

console.log(document.parentNode);  `,-1),t("b",{class:"t02"},"// null",-1),n(`
console.log(`,-1),t("b",{class:"t01"},"document",-1),n(");  ",-1),t("b",{class:"t02"},"// #document // 最上層のオブジェクト",-1),n(`
console.log(document.`,-1),t("b",{class:"t01"},"documentElement",-1),n(");  ",-1),t("b",{class:"t02"},"// <html>...</html> ",-1),n(`
console.log(document.documentElement.tagName);  `,-1),t("b",{class:"t02"},"// HTML",-1),n(`
console.log(document.html);  `,-1),t("b",{class:"t02"},"// undefined",-1),n(`
console.log(document.`,-1),t("b",{class:"t01"},"body",-1),n(");  ",-1),t("b",{class:"t02"},"// <body>...</body>",-1),n(`
console.log(document.body.tagName);  `,-1),t("b",{class:"t02"},"// BODY",-1),n(`

<\/script>
`,-1)])]),_:1}),s[320]||(s[320]=n(`

---

// ２）idで参照


`,-1)),l(o,null,{default:e(()=>[...s[314]||(s[314]=[n(`<!doctype html>
<title>title</title>

<p `,-1),t("b",{class:"t01"},'id="',-1),n("bar",-1),t("b",{class:"t01"},'"',-1),n(` class="foobar" title="foobaz" name="fooqux">baz<b>qux</b>quxx</p>

<script>

var foo = document.`,-1),t("b",{class:"t01"},"getElementById('",-1),n("bar",-1),t("b",{class:"t01"},"')",-1),n(";  ",-1),t("b",{class:"t02"},"// document はオブジェクト。getElementById はメソッド。",-1),n(`

console.log(foo);  `,-1),t("b",{class:"t02"},"// <p ...>...</p>",-1),n(`
console.log(foo.`,-1),t("b",{class:"t01"},"innerHTML",-1),n(");  ",-1),t("b",{class:"t02"},"// baz<b>qux</b>quxx",-1),n(`
console.log(foo.`,-1),t("b",{class:"t01"},"textContent",-1),n(");  ",-1),t("b",{class:"t02"},"// bazquxquxx",-1),n(`
console.log(foo.`,-1),t("b",{class:"t01"},"parentNode",-1),n(");  ",-1),t("b",{class:"t02"},"// <body>...</body>  親ノードは書き換え不可",-1),n(`
console.log(foo.`,-1),t("b",{class:"t01"},"tagName",-1),n(");  ",-1),t("b",{class:"t02"},"// P",-1),n(`
console.log(foo.`,-1),t("b",{class:"t01"},"childNodes",-1),n(");  ",-1),t("b",{class:"t02"},"// [text, b, text, item: function] // ノードリスト",-1),n(`
console.log(foo.childNodes.`,-1),t("b",{class:"t01"},"length",-1),n(");  ",-1),t("b",{class:"t02"},"// 3",-1),n(`
console.log(foo.childNodes.`,-1),t("b",{class:"t01"},"item(",-1),n("0",-1),t("b",{class:"t01"},")",-1),n(");  ",-1),t("b",{class:"t02"},'// "baz" // テキストノード',-1),n(`
console.log(foo.childNodes`,-1),t("b",{class:"t01"},"[",-1),n("0",-1),t("b",{class:"t01"},"]",-1),n(");  ",-1),t("b",{class:"t02"},'// "baz"',-1),n(`
console.log(foo.childNodes[0].`,-1),t("b",{class:"t01"},"nodeType",-1),n(");  ",-1),t("b",{class:"t02"},"// 3 // テキストノードを示す番号",-1),n(`
console.log(foo.childNodes[0].`,-1),t("b",{class:"t01"},"nodeName",-1),n(");  ",-1),t("b",{class:"t02"},"// #text",-1),n(`
console.log(foo.childNodes[0].`,-1),t("b",{class:"t01"},"nodeValue",-1),n(");  ",-1),t("b",{class:"t02"},"// baz",-1),n(`
console.log(foo.childNodes[1].`,-1),t("b",{class:"t01"},"previousSibling",-1),n(".nodeValue);  ",-1),t("b",{class:"t02"},"// baz",-1),n(`
console.log(foo.childNodes[1].`,-1),t("b",{class:"t01"},"nextSibling",-1),n(".nodeValue);  ",-1),t("b",{class:"t02"},"// quxx",-1),n(`
console.log(foo.`,-1),t("b",{class:"t01"},"firstChild",-1),n(".nodeValue);  ",-1),t("b",{class:"t02"},"// baz",-1),n(`
console.log(foo.`,-1),t("b",{class:"t01"},"lastChild",-1),n(".nodeValue);  ",-1),t("b",{class:"t02"},"// quxx",-1),n(`
console.log(foo.`,-1),t("b",{class:"t01"},"id",-1),n(");  ",-1),t("b",{class:"t02"},"// bar",-1),n(`
console.log(foo.`,-1),t("b",{class:"t01"},"className",-1),n(");  ",-1),t("b",{class:"t02"},"// foobar",-1),n(`
console.log(foo.`,-1),t("b",{class:"t01"},"title",-1),n(");  ",-1),t("b",{class:"t02"},"// foobaz",-1),n(`
console.log(foo.name);  `,-1),t("b",{class:"t02"},"// undefined // nameは参照できる要素が限られている",-1),n(`

<\/script>
`,-1)])]),_:1}),s[321]||(s[321]=n(`

---

// ２-２）titleタグ、scriptタグの textプロパティ


`,-1)),l(o,null,{default:e(()=>[...s[315]||(s[315]=[n(`<!doctype html>
<title id="baz0">qux</title>

<script id="baz1">

var foo = document.getElementById('baz0');
var bar = document.getElementById('baz1');

console.log(foo.`,-1),t("b",{class:"t01"},"text",-1),n(");  ",-1),t("b",{class:"t02"},"// qux",-1),n(`
console.log(bar.`,-1),t("b",{class:"t01"},"text",-1),n(");  ",-1),t("b",{class:"t02"},"// (scriptの中身)",-1),n(`

<\/script>
`,-1)])]),_:1}),s[322]||(s[322]=n(`

---

// ３）タグで参照


`,-1)),l(o,null,{default:e(()=>[...s[316]||(s[316]=[n(`<!doctype html>
<title>title</title>

<p>
bar
<`,-1),t("b",{class:"t01"},"b",-1),n(`>qux0</b>
<`,-1),t("b",{class:"t01"},"b",-1),n(`>qux1</b>
quxx
</p>

<script>

var foo = document.`,-1),t("b",{class:"t01"},"getElementsByTagName('",-1),n("b",-1),t("b",{class:"t01"},"')",-1),n(`;

console.log(foo);  `,-1),t("b",{class:"t02"},"// [b, b, item: function] // ノードリスト",-1),n(`
console.log(foo.length);  `,-1),t("b",{class:"t02"},"// 2",-1),n(`
console.log(foo.item(0));  `,-1),t("b",{class:"t02"},"// <b>qux0</b>",-1),n(`
console.log(foo.item(0).innerHTML);  `,-1),t("b",{class:"t02"},"// qux0",-1),n(`

<\/script>
`,-1)])]),_:1}),s[323]||(s[323]=n(`

---

// ４）classで参照（ie8以前は無効）


`,-1)),l(o,null,{default:e(()=>[...s[317]||(s[317]=[n(`<!doctype html>
<title>title</title>

<p>
bar
<b `,-1),t("b",{class:"t01"},'class="',-1),n("baz",-1),t("b",{class:"t01"},'">',-1),n(`qux0</b>
<b `,-1),t("b",{class:"t01"},'class="',-1),n("baz",-1),t("b",{class:"t01"},'">',-1),n(`qux1</b>
quxx
</p>

<script>

var foo = document.`,-1),t("b",{class:"t01"},"getElementsByClassName('",-1),n("baz",-1),t("b",{class:"t01"},"')",-1),n(`;

console.log(foo);  `,-1),t("b",{class:"t02"},"// [b.baz, b.baz, item: function] // ノードリスト",-1),n(`
console.log(foo.length);  `,-1),t("b",{class:"t02"},"// 2",-1),n(`
console.log(foo.item(0));  `,-1),t("b",{class:"t02"},"// <b ...>qux0</b>",-1),n(`
console.log(foo.item(0).innerHTML);  `,-1),t("b",{class:"t02"},"// qux0",-1),n(`

<\/script>
`,-1)])]),_:1}),s[324]||(s[324]=n(`

---

// ５）querySelector


`,-1)),l(o,null,{default:e(()=>[...s[318]||(s[318]=[n(`<!doctype html>
<title>title</title>

<p>
bar
<b `,-1),t("b",{class:"t01"},'class="',-1),n("baz",-1),t("b",{class:"t01"},'">',-1),n(`qux0</b>
<b `,-1),t("b",{class:"t01"},'class="',-1),n("baz",-1),t("b",{class:"t01"},'">',-1),n(`qux1</b>
quxx
</p>

<script>

var foo1 = document.`,-1),t("b",{class:"t01"},"querySelector('",-1),n(".baz",-1),t("b",{class:"t01"},"')",-1),n(`;
var foo2 = document.`,-1),t("b",{class:"t01"},"querySelectorAll('",-1),n(".baz",-1),t("b",{class:"t01"},"')",-1),n(`;

console.log(foo1);  `,-1),t("b",{class:"t02"},'// <b class="baz">qux0</b> // taking first element',-1),n(`
console.log(foo2);  `,-1),t("b",{class:"t02"},"// NodeList(2) [b.baz, b.baz]",-1),n(`

<\/script>
`,-1)])]),_:1}),s[325]||(s[325]=n(`
`,-1))])]),_:1}),l(a,{title:"DOM操作(基礎)"},{default:e(()=>[t("pre",null,[s[327]||(s[327]=n("",-1)),l(o,null,{default:e(()=>[...s[326]||(s[326]=[n(`<!doctype html>
<title>title</title>

<h1></h1>

<input type="button" value="appendPeach" onclick="appendPeach();">
<input type="button" value="appendFivePeaches" onclick="appendFivePeaches();">
<input type="button" value="insertBlueberry" onclick="insertBlueberry();">
<input type="button" value="removeBottom" onclick="removeBottom();">
<input type="button" value="removeAll" onclick="removeAll();">
<input type="button" value="cloneTop" onclick="cloneTop();">
<input type="button" value="replaceAll" onclick="replaceAll();">
<input type="button" value="reset" onclick="reset();">

<ul id="fruit_list">
<li>apple</li>
<li>orenge</li>
<li>banana</li>
<li>grape</li>
</ul>


<script>

function appendPeach() {
  var ul = document.getElementById('fruit_list');
  var li = document.`,-1),t("b",{class:"t01"},"createElement('",-1),n("li",-1),t("b",{class:"t01"},"')",-1),n(`;
  li.innerHTML = document.`,-1),t("b",{class:"t01"},"createTextNode('",-1),n("peach",-1),t("b",{class:"t01"},"')",-1),n(`.nodeValue;
  ul.`,-1),t("b",{class:"t01"},"appendChild(",-1),n("li",-1),t("b",{class:"t01"},")",-1),n(`;

  `,-1),t("b",{class:"t02"},"// liとTextNodeを生成し、liの中にTextNodeを入れる。ul内の一番最後にliを挿入する。",-1),n(`
}

function appendFivePeaches() {
  var ul = document.getElementById('fruit_list');
  var fgm = document.`,-1),t("b",{class:"t01"},"createDocumentFragment()",-1),n(";  ",-1),t("b",{class:"t02"},"// 暫定的な木構造の枠を生成",-1),n(`
  for (i = 0; i < 5; i++) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode('peach'));
    fgm.appendChild(li);
  }
  ul.appendChild(fgm);  `,-1),t("b",{class:"t02"},"// 追加する要素は5つだがulにappendする処理は1回で済む",-1),n(`
}

function insertBlueberry() {
  var ul = document.getElementById('fruit_list');
  var li = document.createElement('li');
  li.appendChild(document.createTextNode('blueberry'));
  ul.`,-1),t("b",{class:"t01"},"insertBefore(",-1),n("li",-1),t("b",{class:"t01"},",",-1),n(" ul.firstChild",-1),t("b",{class:"t01"},")",-1),n(`;

  `,-1),t("b",{class:"t02"},"// liとTextNodeを生成し、liの中にTextNodeを入れる。ul内の一番最初にliを挿入する。",-1),n(`
}

function removeBottom() {
  var ul = document.getElementById('fruit_list');
  if(ul.`,-1),t("b",{class:"t01"},"hasChildNodes()",-1),n(`) {
    if (ul.lastChild.nodeValue === '\\n') {
      ul.`,-1),t("b",{class:"t01"},"removeChild",-1),n(`(ul.lastChild);
    }
    if (ul.hasChildNodes()) {
      ul.removeChild(ul.lastChild);
    }
  }

  `,-1),t("b",{class:"t02"},"// ul内にノードが存在すれば、最後のノードを削除する。",-1),n(`
}

function removeAll() {
  var ul = document.getElementById('fruit_list');
  while(ul.hasChildNodes()) {
    ul.removeChild(ul.lastChild);
  }

  `,-1),t("b",{class:"t02"},"// ul内に子ノードが存在すれば true、最後の子ノードを削除する。子ノードが無くなるまで処理を繰り返す。",-1),n(`
}

function cloneTop() {
  var ul = document.getElementById('fruit_list');
  for (i = 0; i < ul.childNodes.length; i++) {
    if(ul.childNodes.item(i).tagName === 'LI') {
      ul.appendChild(ul.childNodes.item(i).`,-1),t("b",{class:"t01"},"cloneNode(true)",-1),n("); ",-1),t("b",{class:"t02"},"// trueにすると子ノードも含む",-1),n(`
      break;
    }
  }

  `,-1),t("b",{class:"t02"},"// ul内の最初のliを複製して最後に挿入する。",-1),n(`
}

function replaceAll() {
  var ul = document.getElementById('fruit_list');
  for (i = 0; i < ul.childNodes.length; i++) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode('strawberry'));

    if (ul.childNodes.item(i).tagName === 'LI') {
      ul.`,-1),t("b",{class:"t01"},"replaceChild(",-1),n("li",-1),t("b",{class:"t01"},",",-1),n(" ul.childNodes.item(i)",-1),t("b",{class:"t01"},")",-1),n(`;
    }
  }

  `,-1),t("b",{class:"t02"},"// ul内の全てのノードのうち、liに限り、新しく生成したliに置換する。",-1),n(`
}

function reset() {
  var ul = document.getElementById('fruit_list');
  while(ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
  var fruit = ['apple', 'orenge', 'banana', 'grape'];
  var fgm = document.createDocumentFragment();
  for (i = 0; i < fruit.length; i++) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(fruit[i]));
    fgm.appendChild(li);
  }
  ul.appendChild(fgm);

  `,-1),t("b",{class:"t02"},"// ul内の全てのノードを削除し、スタート時のノードを生成する。",-1),n(`
}

<\/script>
`,-1)])]),_:1}),s[328]||(s[328]=n(`
`,-1))])]),_:1}),l(a,{title:"DOM参照,操作(table)"},{default:e(()=>[t("pre",null,[s[331]||(s[331]=n("",-1)),l(o,null,{default:e(()=>[...s[329]||(s[329]=[n(`<!doctype html>
<title>title</title>

<table id="fruit_list">
<tr>
<td>apple</td><td>red</td><td>42</td>
</tr>
<tr>
<td>banana</td><td>yellow</td><td>84</td>
</tr>
</table>


<script>

var table = document.getElementById('fruit_list');

console.log(table);  `,-1),t("b",{class:"t02"},"// <table ...>...</table>",-1),n(`
console.log(table.`,-1),t("b",{class:"t01"},"rows",-1),n(");  ",-1),t("b",{class:"t02"},"// [tr, tr, ...] // HTMLCollection",-1),n(`
console.log(table.rows.length);  `,-1),t("b",{class:"t02"},"// 2",-1),n(`
console.log(table.rows[0]);  `,-1),t("b",{class:"t02"},"// <tr>...</tr> // HTMLTableRowElement",-1),n(`
console.log(table.rows[0].`,-1),t("b",{class:"t01"},"rowIndex",-1),n(");  ",-1),t("b",{class:"t02"},"// 0",-1),n(`
console.log(table.rows[0].innerHTML);  `,-1),t("b",{class:"t02"},"// <td>apple</td><td>red</td><td>42</td>",-1),n(`
console.log(table.rows[0].`,-1),t("b",{class:"t01"},"cells",-1),n(");  ",-1),t("b",{class:"t02"},"// [td, td, td, ...] // HTMLCollection",-1),n(`
console.log(table.rows[0].cells.length);  `,-1),t("b",{class:"t02"},"// 3",-1),n(`
console.log(table.rows[0].cells[0]);  `,-1),t("b",{class:"t02"},"// <td>apple</td> // HTMLTableCellElement",-1),n(`
console.log(table.rows[0].cells[0].`,-1),t("b",{class:"t01"},"cellIndex",-1),n(");  ",-1),t("b",{class:"t02"},"// 0",-1),n(`
console.log(table.rows[0].cells[0].innerHTML);  `,-1),t("b",{class:"t02"},"// apple",-1),n(`
console.log(table.`,-1),t("b",{class:"t01"},"tBodies",-1),n(");  ",-1),t("b",{class:"t02"},"// [tbody, ...] // HTMLCollection",-1),n(`
console.log(table.tBodies.length);  `,-1),t("b",{class:"t02"},"// 1",-1),n(`
console.log(table.tBodies[0]);  `,-1),t("b",{class:"t02"},"// <tbody>...</tbody> // HTMLTableSectionElement",-1),n(`
console.log(table.tBodies[0].innerHTML);  `,-1),t("b",{class:"t02"},"// (tableタグ内の全てのノード)",-1),n(`

<\/script>
`,-1)])]),_:1}),s[332]||(s[332]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[330]||(s[330]=[n(`<!doctype html>
<title>title</title>
<body onload="sum();">

<input type="button" value="change_number" onclick="resetNumber();">
<input type="button" value="insertPeach" onclick="insertPeach();">
<input type="button" value="deleat_peach" onclick="deletePeach();">
<input type="button" value="deleteCaption" onclick="deleteCaption();">
<input type="button" value="reset" onclick="reset();">

<table id="fruit_list" border="1">
<caption>fruit_list</caption>
<thead>
<tr>
<th>name</th><th>color</th><th>number</th>
</tr>
</thead>
<tfoot>
<tr>
<td>sum</td><td></td><td></td>
</tr>
</tfoot>
<tbody>
<tr>
<td>apple</td><td>red</td><td>42</td>
</tr>
<tr>
<td>banana</td><td>yellow</td><td>126</td>
</tr>
</tbody>
</table>


<script>

function resetNumber() {
  var table = document.getElementById('fruit_list');

  for (var i = 0; i < table.rows.length; i++) {
    var target_row = table.rows[i];
    var target_cell = target_row.cells[0].innerHTML;
    if(target_cell !== 'name' && target_cell !== 'foot') {
      target_row.`,-1),t("b",{class:"t01"},"deleteCell(",-1),n("2",-1),t("b",{class:"t01"},")",-1),n(`;
      target_row.`,-1),t("b",{class:"t01"},"insertCell(",-1),n("2",-1),t("b",{class:"t01"},")",-1),n(`.innerHTML = 0;
    }
  }
  sum();
}

function insertPeach() {
  var table = document.getElementById('fruit_list')
  var peach = ['peach','pink',84]

  var row = table.`,-1),t("b",{class:"t01"},"insertRow(",-1),n("2",-1),t("b",{class:"t01"},")",-1),n(`;
  for (var i = 0; i < peach.length; i++) {
    var cell = row.insertCell(i);
    cell.appendChild(document.createTextNode(peach[i]));
  }
  sum();
}

function deletePeach() {
  var table = document.getElementById('fruit_list');

  for (var i = 0; i < table.rows.length; i++) {
    if(table.rows[i].cells[0].innerHTML === 'peach') {
      table.`,-1),t("b",{class:"t01"},"deleteRow(",-1),n("i",-1),t("b",{class:"t01"},")",-1),n(`;
      i--;
    }
  }
  sum();
}

function reset() {
  var table = document.getElementById('fruit_list');
  while(table.hasChildNodes()) {
    table.removeChild(table.lastChild);
  }
  table.`,-1),t("b",{class:"t01"},"createTHead()",-1),n(`.innerHTML = '<tr><th>name</th><th>color</th><th>number</th></tr>';
  table.`,-1),t("b",{class:"t01"},"createTFoot()",-1),n(`.innerHTML = '<tr><td>sum</td><td></td><td></td></tr>';
  table.`,-1),t("b",{class:"t01"},"createTBody()",-1),n(`.innerHTML = '<tr><td>apple</td><td>red</td><td>42</td></tr><tr><td>banana</td><td>yellow</td><td>126</td></tr>';
  table.`,-1),t("b",{class:"t01"},"createCaption()",-1),n(`.innerHTML = 'fruit_list';
  sum();
}

function deleteCaption() {
  var table = document.getElementById('fruit_list');

  table.`,-1),t("b",{class:"t01"},"deleteCaption()",-1),n(`;
}

function sum() {
  var table = document.getElementById('fruit_list');
  var sum = 0;
  for (var i = 0; i < table.rows.length; i++) {
    var target_row = table.rows[i];
    var target_cell = target_row.cells[0].innerHTML;
    if(target_cell !== 'name' && target_cell !== 'sum') {
      sum = sum + parseInt(target_row.cells[2].innerHTML, 10);
    }
  }
  for (var i=0;i<table.rows.length;i++) {
    if(table.rows[i].cells[0].innerHTML === 'sum') {
      table.rows[i].cells[2].innerHTML = sum;
    }
  }
}

<\/script>
`,-1)])]),_:1}),s[333]||(s[333]=n(`
`,-1))])]),_:1}),l(a,{title:"DOM参照,操作(img)"},{default:e(()=>[t("pre",null,[s[335]||(s[335]=n("",-1)),l(o,null,{default:e(()=>[...s[334]||(s[334]=[n(`<!doctype html>
<title>title</title>

<img id="foo" src="bar.gif" alt="baz" name="qux">

<script>

var img = document.getElementById('foo');

console.log(img.`,-1),t("b",{class:"t01"},"src",-1),n(");  ",-1),t("b",{class:"t02"},"// 〜/bar.gif",-1),n(`
console.log(img.`,-1),t("b",{class:"t01"},"alt",-1),n(");  ",-1),t("b",{class:"t02"},"// baz",-1),n(`
console.log(img.`,-1),t("b",{class:"t01"},"name",-1),n(");  ",-1),t("b",{class:"t02"},"// qux",-1),n(`

<\/script>
`,-1)])]),_:1}),s[336]||(s[336]=n(`
`,-1))])]),_:1}),l(a,{title:"DOM参照,操作(attribute)"},{default:e(()=>[t("pre",null,[s[338]||(s[338]=n("",-1)),l(o,null,{default:e(()=>[...s[337]||(s[337]=[n(`<!doctype html>
<title>title</title>

<img src="foo" alt="bar" width="42" height="42">

<script>

var img = document.getElementsByTagName('IMG');

console.log(img[0].`,-1),t("b",{class:"t01"},"getAttribute('",-1),n("src",-1),t("b",{class:"t01"},"')",-1),n(");  ",-1),t("b",{class:"t02"},"// foo",-1),n(`
console.log(img[0].getAttribute('alt'));  `,-1),t("b",{class:"t02"},"// bar",-1),n(`
console.log(img[0].getAttribute('width'));  `,-1),t("b",{class:"t02"},"// 42",-1),n(`
console.log(img[0].`,-1),t("b",{class:"t01"},"getAttributeNode('",-1),n("src",-1),t("b",{class:"t01"},"')",-1),n(");  ",-1),t("b",{class:"t02"},'// src="baz" // Attrオブジェクト(これより下でsetした値も上書きして反映される)',-1),n(`

img[0].`,-1),t("b",{class:"t01"},"setAttribute('",-1),n("src",-1),t("b",{class:"t01"},"', '",-1),n("baz",-1),t("b",{class:"t01"},"')",-1),n(`;
img[0].setAttribute('alt', 'qux');
img[0].setAttribute('width', '84');

console.log(img[0].getAttribute('src'));  `,-1),t("b",{class:"t02"},"// baz",-1),n(`
console.log(img[0].getAttribute('alt'));  `,-1),t("b",{class:"t02"},"// qux",-1),n(`
console.log(img[0].getAttribute('width'));  `,-1),t("b",{class:"t02"},"// 84",-1),n(`

console.log(img[0].`,-1),t("b",{class:"t01"},"hasAttribute('",-1),n("src",-1),t("b",{class:"t01"},"')",-1),n(");  ",-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(img[0].hasAttribute('title'));  `,-1),t("b",{class:"t02"},"// false",-1),n(`

console.log(img[0].getAttribute('title'));  `,-1),t("b",{class:"t02"},"// null",-1),n(`

img[0].setAttribute('title', 'quxx');
console.log(img[0].getAttribute('title'));  `,-1),t("b",{class:"t02"},"// quxx",-1),n(`

<\/script>
`,-1)])]),_:1}),s[339]||(s[339]=n(`
`,-1))])]),_:1}),l(a,{title:"DOM参照,操作(css)"},{default:e(()=>[t("pre",null,[s[344]||(s[344]=n(`// １）インラインスタイル


`,-1)),l(o,null,{default:e(()=>[...s[340]||(s[340]=[n(`<!doctype html>
<title>title</title>
<style>
p {background-color: #f00;}
</style>

<p>foo</p>


<script>

var p = document.getElementsByTagName('p').item(0);

p.`,-1),t("b",{class:"t01"},"style",-1),n(".display = 'table-cell';  ",-1),t("b",{class:"t02"},"// ↓以下、pのインラインに設定される",-1),n(`
p.style.width = '100px';
p.style.height = '100px';
p.style.margin = '10px';
p.style.padding = '10px';
p.style.border = '1px solid #000';
p.style.textAlign = 'center';  `,-1),t("b",{class:"t02"},"// プロパティ名にハイフンは使わない",-1),n(`
p.style.verticalAlign = 'middle';  `,-1),t("b",{class:"t02"},"// プロパティ名にハイフンは使わない",-1),n(`

console.log(p.style);  `,-1),t("b",{class:"t02"},"// CSSStyleDeclaration {...}",-1),n(`
console.log(p.style.display);  `,-1),t("b",{class:"t02"},"// table-cell",-1),n(`
console.log(p.style.backgroundColor);  `,-1),t("b",{class:"t02"},"// 空（styleではインラインのみ取得可）",-1),n(`

<\/script>
`,-1)])]),_:1}),s[345]||(s[345]=n(`

---

// ２）計算済みスタイル


`,-1)),l(o,null,{default:e(()=>[...s[341]||(s[341]=[n(`<!doctype html>
<title>title</title>
<style>
p {background-color: #f00;}
</style>

<p>foo</p>


<script>

var p = document.getElementsByTagName('p').item(0);

console.log(document);  `,-1),t("b",{class:"t02"},"// #document // HTMLDocument",-1),n(`
console.log(document.`,-1),t("b",{class:"t01"},"defaultView",-1),n(");  ",-1),t("b",{class:"t02"},"// Window {...}",-1),n(`
console.log(document.defaultView.`,-1),t("b",{class:"t01"},"getComputedStyle(",-1),n("p",-1),t("b",{class:"t01"},", null)",-1),n(");  ",-1),t("b",{class:"t02"},"// CSSStyleDeclaration {...}",-1),n(`
console.log(document.defaultView.getComputedStyle(p, null).backgroundColor);  `,-1),t("b",{class:"t02"},"// rgb(255, 0, 0)　書き換え不可",-1),n(`

`,-1),t("b",{class:"t02"},'// null の部分には、":first-letter" など疑似要素を入れることが可能',-1),n(`
`,-1),t("b",{class:"t02"},'// ":hover" などは疑似クラスなので利用不可',-1),n(`

<\/script>
`,-1)])]),_:1}),s[346]||(s[346]=n(`

---

// ３）スタイルシートリスト


`,-1)),l(o,null,{default:e(()=>[...s[342]||(s[342]=[n(`<!doctype html>
<title>title</title>

<link rel="stylesheet" href="http://3300.me/top/css/3300.css">
`,-1),t("b",{class:"t02"},"// ↑ document.styleSheets[0]",-1),n(`

<style>
div {padding: 30px;}
p {padding: 30px;}
span {padding: 30px; display: block;}
</style>
`,-1),t("b",{class:"t02"},"// ↑ document.styleSheets[1]",-1),n(`

<div>
<p>
<span>foo</span>
</p>
</div>

<script>

console.log(document.`,-1),t("b",{class:"t01"},"styleSheets",-1),n(");  ",-1),t("b",{class:"t02"},"// StyleSheetList",-1),n(`
console.log(document.styleSheets.length);  `,-1),t("b",{class:"t02"},"// 2 // 読み込みcssとstyleタグの合計数",-1),n(`
console.log(document.styleSheets[0]);  `,-1),t("b",{class:"t02"},"// CSSStyleSheet",-1),n(`
console.log(document.styleSheets[0].`,-1),t("b",{class:"t01"},"ownerNode",-1),n(");  ",-1),t("b",{class:"t02"},"// <link ...> // HTMLLinkElement",-1),n(`
console.log(document.styleSheets[1].ownerNode);  `,-1),t("b",{class:"t02"},"// <style>...</style> // HTMLStyleElement",-1),n(`
console.log(document.styleSheets[0].ownerNode.nodeName);  `,-1),t("b",{class:"t02"},"// LINK",-1),n(`
console.log(document.styleSheets[1].ownerNode.nodeName);  `,-1),t("b",{class:"t02"},"// STYLE",-1),n(`
console.log(document.styleSheets[0].`,-1),t("b",{class:"t01"},"disabled",-1),n(");  ",-1),t("b",{class:"t02"},"// false // そのstyleSheetを無効化するかどうか",-1),n(`
console.log(document.styleSheets[1].`,-1),t("b",{class:"t01"},"cssRules",-1),n(");  ",-1),t("b",{class:"t02"},"// CSSRuleList",-1),n(`
console.log(document.styleSheets[1].cssRules.length);  `,-1),t("b",{class:"t02"},"// 3 // divとpとspanで3つ",-1),n(`
console.log(document.styleSheets[1].cssRules[0]);  `,-1),t("b",{class:"t02"},"// CSSStyleRule",-1),n(`
console.log(document.styleSheets[1].cssRules[0].`,-1),t("b",{class:"t01"},"cssText",-1),n(");  ",-1),t("b",{class:"t02"},"// div { padding: 30px; }",-1),n(`
console.log(document.styleSheets[1].cssRules[0].`,-1),t("b",{class:"t01"},"selectorText",-1),n(");  ",-1),t("b",{class:"t02"},"// div",-1),n(`
console.log(document.styleSheets[1].cssRules[0].`,-1),t("b",{class:"t01"},"style",-1),n(");  ",-1),t("b",{class:"t02"},"// CSSStyleDeclaration",-1),n(`
console.log(document.styleSheets[1].cssRules[0].style.padding);  `,-1),t("b",{class:"t02"},"// 30px",-1),n(`

<\/script>

`,-1),t("b",{class:"t02"},"// jsfiddleなどでは別のstylesheetも取得するため、正しく動かない",-1),n(`
`,-1),t("b",{class:"t02"},"// ローカルでhtmlに貼り付け、ブラウザで確認すれば正しく動く",-1),n(`
`,-1)])]),_:1}),s[347]||(s[347]=n(`

---

// ４）スタイルシート操作


`,-1)),l(o,null,{default:e(()=>[...s[343]||(s[343]=[n(`<!doctype html>
<title>title</title>

<input type="button" value="red" onclick="red()">
<input type="button" value="green" onclick="green()">
<input type="button" value="blue" onclick="blue()">

<style>
body {background: #fff;}
</style>

<script>

var css = document.styleSheets[0];

function red() {
  css.`,-1),t("b",{class:"t01"},"insertRule(",-1),n("'body {background: #f00;}'",-1),t("b",{class:"t01"},",",-1),n(" css.cssRules.length",-1),t("b",{class:"t01"},")",-1),n(`;
  `,-1),t("b",{class:"t02"},"// 第2引数は数字で、この場合 '1' になり、1行目の body {〜}が '0' にあたるので、2行目に追加される",-1),n(`
  css.`,-1),t("b",{class:"t01"},"deleteRule(",-1),n("0",-1),t("b",{class:"t01"},")",-1),n(`;
  `,-1),t("b",{class:"t02"},"// 1行目の body {〜} を削除する",-1),n(`
}
function green() {
  css.insertRule('body {background: #0f0;}', css.cssRules.length);
  css.deleteRule(0);
}
function blue() {
  css.insertRule('body {background: #00f;}', css.cssRules.length);
  css.deleteRule(0);
}

<\/script>

`,-1),t("b",{class:"t02"},"// jsfiddleなどでは別のstylesheetも取得するため、正しく動かない",-1),n(`
`,-1),t("b",{class:"t02"},"// ローカルでhtmlに貼り付け、ブラウザで確認すれば正しく動く",-1),n(`
`,-1)])]),_:1}),s[348]||(s[348]=n(`
`,-1))])]),_:1}),l(a,{title:"DOM参照,操作(form)"},{default:e(()=>[t("pre",null,[s[351]||(s[351]=n("",-1)),l(o,null,{default:e(()=>[...s[349]||(s[349]=[n(`<!doctype html>
<title>title</title>

<form action="http://3300.me">
  <input type="text" value="foo">
  <input type="checkbox">
  <select>
    <option>bar</option>
    <optgroup>
    <option>baz</option>
    <option>qux</option>
    </optgroup>
  </select>
</form>


<script>

var form_list = document.`,-1),t("b",{class:"t01"},"forms",-1),n(`;
console.log(form_list);  `,-1),t("b",{class:"t02"},"// [form, ...] // HTMLCollection",-1),n(`
console.log(form_list.item(0));  `,-1),t("b",{class:"t02"},"// <form ...>...</form> // HTMLFormElement",-1),n(`
console.log(form_list.item(0).`,-1),t("b",{class:"t01"},"elements",-1),n(");  ",-1),t("b",{class:"t02"},"// [input, input, select, ...] // HTMLFormControlsCollection",-1),n(`
console.log(form_list.item(0).elements.length);  `,-1),t("b",{class:"t02"},"// 3 // FormElementの数",-1),n(`
console.log(form_list.item(0).elements.item(0));  `,-1),t("b",{class:"t02"},"// <input ...>...</input> // HTMLInputElement",-1),n(`

var input = form_list.item(0).elements.item(0);
console.log(input.`,-1),t("b",{class:"t01"},"type",-1),n(");  ",-1),t("b",{class:"t02"},"// text",-1),n(`
console.log(input.`,-1),t("b",{class:"t01"},"value",-1),n(");  ",-1),t("b",{class:"t02"},"// foo（書き換え可）",-1),n(`
console.log(input.`,-1),t("b",{class:"t01"},"defaultValue",-1),n(");  ",-1),t("b",{class:"t02"},"// foo（書き換え不可）",-1),n(`
console.log(input.`,-1),t("b",{class:"t01"},"disabled",-1),n(");  ",-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(input.`,-1),t("b",{class:"t01"},"readOnly",-1),n(");  ",-1),t("b",{class:"t02"},"// false",-1),n(`

var check = form_list.item(0).elements.item(1);
console.log(check.`,-1),t("b",{class:"t01"},"checked",-1),n(");  ",-1),t("b",{class:"t02"},"// false（書き換え可）",-1),n(`
console.log(check.`,-1),t("b",{class:"t01"},"defaultChecked",-1),n(");  ",-1),t("b",{class:"t02"},"// false（書き換え不可）",-1),n(`

var select = form_list.item(0).elements.item(2);
console.log(select.`,-1),t("b",{class:"t01"},"options",-1),n(");  ",-1),t("b",{class:"t02"},"// [option, option, option, ...] // HTMLOptionsCollection",-1),n(`
console.log(select.options.length);  `,-1),t("b",{class:"t02"},"// 3 // optionをいくつ含むか",-1),n(`
console.log(select.length);  `,-1),t("b",{class:"t02"},"// 3 // 以降、optionsを省略しても同じ結果",-1),n(`
console.log(select.item(0));  `,-1),t("b",{class:"t02"},"// <option>bar</option>[object HTMLOptionElement]",-1),n(`
console.log(select.item(0).value);  `,-1),t("b",{class:"t02"},"// bar",-1),n(`
console.log(select.item(3));  `,-1),t("b",{class:"t02"},"// null",-1),n(`
console.log(select.`,-1),t("b",{class:"t01"},"selectedIndex",-1),n(");  ",-1),t("b",{class:"t02"},"// 0 // 選択されている番号。何も選択されていない場合は -1",-1),n(`

<\/script>
`,-1)])]),_:1}),s[352]||(s[352]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[350]||(s[350]=[n(`<!doctype html>
<title>title</title>

<form action="http://3300.me">
  <input type="button" value="append_option" onclick="appendOption()">
  <input type="button" value="remove_option" onclick="removeOption()">
  <select>
    <option>foo</option>
  </select>
</form>


<script>

var select = document.forms.item(0).elements.item(2);

function appendOption() {
  var option = document.createElement('option');
  option.appendChild(document.createTextNode('foo'));
  select.`,-1),t("b",{class:"t01"},"add(",-1),n("option",-1),t("b",{class:"t01"},",",-1),n(" select.options.item(0)",-1),t("b",{class:"t01"},")",-1),n(`;
}

function removeOption() {
  if (0 < select.length) {
    select.`,-1),t("b",{class:"t01"},"remove(",-1),n("0",-1),t("b",{class:"t01"},")",-1),n(`;
  } else {
    console.log('no option');
  }
}

<\/script>
`,-1)])]),_:1})])]),_:1}),l(a,{title:"イベント"},{default:e(()=>[t("pre",null,[s[354]||(s[354]=n("",-1)),l(o,null,{default:e(()=>[...s[353]||(s[353]=[n(`<!doctype html>
<title>title</title>

<input type="button" value="push" `,-1),t("b",{class:"t01"},`onclick="console.log('input')"`,-1),n(`>
`,-1)])]),_:1}),s[355]||(s[355]=n(`

---

onclick　　　`,-1)),s[356]||(s[356]=t("b",{class:"t02"},"// クリック時",-1)),s[357]||(s[357]=n(`
ondblclick　　　`,-1)),s[358]||(s[358]=t("b",{class:"t02"},"// ダブルクリック時",-1)),s[359]||(s[359]=n(`
onmouseup　　　`,-1)),s[360]||(s[360]=t("b",{class:"t02"},"// マウスボタンを上げた時",-1)),s[361]||(s[361]=n(`
onmousedown　　　`,-1)),s[362]||(s[362]=t("b",{class:"t02"},"// マウスボタンを押した時",-1)),s[363]||(s[363]=n(`
onmousemove　　　`,-1)),s[364]||(s[364]=t("b",{class:"t02"},"// マウスを動かしている時",-1)),s[365]||(s[365]=n(`
onmouseout　　　`,-1)),s[366]||(s[366]=t("b",{class:"t02"},"// マウスポインタが離れた時",-1)),s[367]||(s[367]=n(`
onmouseover　　　`,-1)),s[368]||(s[368]=t("b",{class:"t02"},"// マウスポインタが乗った時",-1)),s[369]||(s[369]=n(`
onkeyup　　　`,-1)),s[370]||(s[370]=t("b",{class:"t02"},"// キーを上げた時",-1)),s[371]||(s[371]=n(`
onkeydown　　　`,-1)),s[372]||(s[372]=t("b",{class:"t02"},"// キーを押した時",-1)),s[373]||(s[373]=n(`
onkeypress　　　`,-1)),s[374]||(s[374]=t("b",{class:"t02"},"// キーを押してる時",-1)),s[375]||(s[375]=n(`

onchange　　　`,-1)),s[376]||(s[376]=t("b",{class:"t02"},"// フォーム要素の選択、変更時",-1)),s[377]||(s[377]=n(`
onselect　　　`,-1)),s[378]||(s[378]=t("b",{class:"t02"},"// テキスト選択時",-1)),s[379]||(s[379]=n(`
onsubmit　　　`,-1)),s[380]||(s[380]=t("b",{class:"t02"},"// 送信時",-1)),s[381]||(s[381]=n(`
onreset　　　`,-1)),s[382]||(s[382]=t("b",{class:"t02"},"// リセット時",-1)),s[383]||(s[383]=n(`

onblur　　　`,-1)),s[384]||(s[384]=t("b",{class:"t02"},"// フォーカスが外れた時",-1)),s[385]||(s[385]=n(`
onfocus　　　`,-1)),s[386]||(s[386]=t("b",{class:"t02"},"// フォーカスが当たった時",-1)),s[387]||(s[387]=n(`

onload　　　`,-1)),s[388]||(s[388]=t("b",{class:"t02"},"// 読み込み完了時",-1)),s[389]||(s[389]=n(`
onunload　　　`,-1)),s[390]||(s[390]=t("b",{class:"t02"},"// ウィンドウ削除時、ウィンドウ切り替え時、リロード時",-1)),s[391]||(s[391]=n(`
onabort　　　`,-1)),s[392]||(s[392]=t("b",{class:"t02"},"// 画像読み込み中断時",-1)),s[393]||(s[393]=n(`
onerror　　　`,-1)),s[394]||(s[394]=t("b",{class:"t02"},"// 画像読み込みエラー時",-1)),s[395]||(s[395]=n(`

`,-1)),s[396]||(s[396]=t("b",{class:"t02"},"// など",-1))])]),_:1}),l(a,{title:"イベントリスナ"},{default:e(()=>[t("pre",null,[s[400]||(s[400]=n(`// １）特定のノードをイベントリスナに設定する場合


`,-1)),l(o,null,{default:e(()=>[...s[397]||(s[397]=[n(`<!doctype html>
<title>title</title>

<p id="foo">click</p>  `,-1),t("b",{class:"t02"},"// 反応する",-1),n(`
<p id="bar">click</p>  `,-1),t("b",{class:"t02"},"// 反応しない",-1),n(`


<script>

function elTest() {
  console.log('baz');
}

var foo = document.getElementById('foo');

if(addEventListener) {
  foo.`,-1),t("b",{class:"t01"},"addEventListener('",-1),n("click",-1),t("b",{class:"t01"},"',",-1),n(" elTest",-1),t("b",{class:"t01"},",",-1),n(" false",-1),t("b",{class:"t01"},")",-1),n(";  ",-1),t("b",{class:"t02"},"// foo(特定のpタグ) をイベントリスナに設定する",-1),n(`
} else if(attachEvent) {
  foo.`,-1),t("b",{class:"t01"},"attachEvent('on",-1),n("click",-1),t("b",{class:"t01"},"',",-1),n(" elTest",-1),t("b",{class:"t01"},")",-1),n(";  ",-1),t("b",{class:"t02"},"// IE8以前は addEventListener に未対応",-1),n(`
}

<\/script>
`,-1)])]),_:1}),s[401]||(s[401]=n(`

---

// １−２）無名関数で反応させる場合


`,-1)),l(o,null,{default:e(()=>[...s[398]||(s[398]=[n(`<!doctype html>
<title>title</title>

<p id="foo">click</p>

<script>

var foo = document.getElementById('foo');

foo.addEventListener('click', `,-1),t("b",{class:"t01"},"function() {",-1),n(`
  console.log('bar');
`,-1),t("b",{class:"t01"},"}",-1),n(`, false);

<\/script>
`,-1)])]),_:1}),s[402]||(s[402]=n(`

---

// ２）document全体をイベントリスナに設定し、イベントが起きた箇所で反応させる場合


`,-1)),l(o,null,{default:e(()=>[...s[399]||(s[399]=[n(`<!doctype html>
<title>title</title>

<p id="foo">click</p>  `,-1),t("b",{class:"t02"},"// 反応する",-1),n(`
<p id="bar">click</p>  `,-1),t("b",{class:"t02"},"// 反応する",-1),n(`


<script>

function elTest(ev) {  `,-1),t("b",{class:"t02"},"// 引数にはイベントオブジェクトが入ってくる",-1),n(`
  if(ev.target.tagName === 'P') {  `,-1),t("b",{class:"t02"},"// pタグ以外の箇所をクリックした時に反応しないようにする",-1),n(`
    console.log(ev);  `,-1),t("b",{class:"t02"},"// MouseEvent {...}",-1),n(`
    console.log(ev.`,-1),t("b",{class:"t01"},"target",-1),n(");  ",-1),t("b",{class:"t02"},"// <p ...>click</p> // HTMLParagraphElement // IE8以前は srcElement",-1),n(`
    console.log(ev.target.id);  `,-1),t("b",{class:"t02"},"// (クリックしたpタグのid)",-1),n(`
    console.log(ev.`,-1),t("b",{class:"t01"},"currentTarget",-1),n(");  ",-1),t("b",{class:"t02"},"// (イベントリスナに設定された要素)",-1),n(`
  }
}

if(addEventListener) {
  document.`,-1),t("b",{class:"t01"},"addEventListener('",-1),n("click",-1),t("b",{class:"t01"},"',",-1),n(" elTest",-1),t("b",{class:"t01"},",",-1),n(" false",-1),t("b",{class:"t01"},")",-1),n(";  ",-1),t("b",{class:"t02"},"// document をイベントリスナに設定する。",-1),n(`
} else if(attachEvent) {
  document.`,-1),t("b",{class:"t01"},"attachEvent('on",-1),n("click",-1),t("b",{class:"t01"},"',",-1),n(" elTest",-1),t("b",{class:"t01"},")",-1),n(";  ",-1),t("b",{class:"t02"},"// IE8以前は addEventListener に未対応",-1),n(`
}

<\/script>
`,-1)])]),_:1}),s[403]||(s[403]=n(`
`,-1))])]),_:1}),l(a,{title:"イベントフローの性質"},{default:e(()=>[t("pre",null,[s[410]||(s[410]=n(`// １-１）イベントバブリング１


`,-1)),l(o,null,{default:e(()=>[...s[404]||(s[404]=[n(`<!doctype html>
<title>title</title>

<div `,-1),t("b",{class:"t01"},`onclick="console.log('div')"`,-1),n(` style="background: #ddd; padding: 10px;">div
<p `,-1),t("b",{class:"t01"},`onclick="console.log('p')"`,-1),n(` style="background: #eee;">p click</p>
</div>

`,-1),t("b",{class:"t02"},"// p -> div",-1),n(`
`,-1),t("b",{class:"t02"},"// p部分をクリックすると、同時にdiv部分もクリックしていることになるが、子ノードから先にイベントを起こす性質がある",-1),n(`
`,-1)])]),_:1}),s[411]||(s[411]=n(`

---

// １-２）イベントバブリング２


`,-1)),l(o,null,{default:e(()=>[...s[405]||(s[405]=[n(`<!doctype html>
<title>title</title>

<div id="foo" style="background: #ccc; padding: 10px;">div
<p id="bar" style="background: #ddd; padding: 10px;">p
<span id="baz" style="display: block; background: #eee;">span click</span>
</p>
</div>

<script>
function elTest1() {console.log('div');}
function elTest2() {console.log('p');}
function elTest3() {console.log('span');}
document.getElementById('foo').addEventListener('click', elTest1, `,-1),t("b",{class:"t01"},"false",-1),n(`);
document.getElementById('bar').addEventListener('click', elTest2, `,-1),t("b",{class:"t01"},"false",-1),n(`);
document.getElementById('baz').addEventListener('click', elTest3, `,-1),t("b",{class:"t01"},"false",-1),n(`);
<\/script>

`,-1),t("b",{class:"t02"},"// span -> p -> div",-1),n(`
`,-1),t("b",{class:"t02"},"// イベントリスナの第3引数がfalseだとバブリング（子ノードから先にイベントを起こす）",-1),n(`
`,-1)])]),_:1}),s[412]||(s[412]=n(`

---

// ２）イベントキャプチャリング


`,-1)),l(o,null,{default:e(()=>[...s[406]||(s[406]=[n(`<!doctype html>
<title>title</title>

<div id="foo" style="background: #ccc; padding: 10px;">div
<p id="bar" style="background: #ddd; padding: 10px;">p
<span id="baz" style="display: block; background: #eee;">span click</span>
</p>
</div>

<script>
function elTest1() {console.log('div');}
function elTest2() {console.log('p');}
function elTest3() {console.log('span');}
document.getElementById('foo').addEventListener('click', elTest1, `,-1),t("b",{class:"t01"},"true",-1),n(`);
document.getElementById('bar').addEventListener('click', elTest2, `,-1),t("b",{class:"t01"},"true",-1),n(`);
document.getElementById('baz').addEventListener('click', elTest3, `,-1),t("b",{class:"t01"},"true",-1),n(`);
<\/script>

`,-1),t("b",{class:"t02"},"// div -> p -> span",-1),n(`
`,-1),t("b",{class:"t02"},"// イベントリスナの第3引数がtrueだとキャプチャリング（親ノードから先にイベントを起こす）",-1),n(`
`,-1)])]),_:1}),s[413]||(s[413]=n(`

---

// ３）デフォルトアクションの制限


`,-1)),l(o,null,{default:e(()=>[...s[407]||(s[407]=[n(`<!doctype html>
<title>title</title>

<a href="http://3300.me/">click</a>


<script>
function elTest(ev) {
  if(ev.target.tagName === 'A') {
    console.log('ev');
    ev.`,-1),t("b",{class:"t01"},"preventDefault()",-1),n(`;
  }
}
document.addEventListener('click', elTest, false);
<\/script>

`,-1),t("b",{class:"t02"},"// ev",-1),n(`
`,-1),t("b",{class:"t02"},"// aタグのリンクを反応させない",-1),n(`
`,-1)])]),_:1}),s[414]||(s[414]=n(`

---

// ４）イベントフローの中断


`,-1)),l(o,null,{default:e(()=>[...s[408]||(s[408]=[n(`<!doctype html>
<title>title</title>

<p id="foo" style="background: #ddd; padding: 10px;">p
<span id="bar" style="display: block; background: #eee;">span <a href="http://3300.me/">click</a></span>
</p>

<script>
function elTest1(ev) {console.log('p');}
function elTest2(ev) {console.log('span');ev.`,-1),t("b",{class:"t01"},"stopPropagation()",-1),n(`;}
document.getElementById('foo').addEventListener('click', elTest1, `,-1),t("b",{class:"t01"},"false",-1),n(`);
document.getElementById('bar').addEventListener('click', elTest2, `,-1),t("b",{class:"t01"},"false",-1),n(`);
<\/script>

`,-1),t("b",{class:"t02"},"// span",-1),n(`
`,-1),t("b",{class:"t02"},"// spanのイベントのあとバブリングが止まるので、pでのイベントは起こらない",-1),n(`
`,-1),t("b",{class:"t02"},"// aのリンクは反応する",-1),n(`
`,-1)])]),_:1}),s[415]||(s[415]=n(`

---

// ５）対になるターゲット


`,-1)),l(o,null,{default:e(()=>[...s[409]||(s[409]=[n(`<!doctype html>
<html style="background: #fff; padding: 15px;">
<title>title</title>

<body style="background: #ddd; padding: 10px;">body
<p style="background: #eee; padding: 10px;">p
<span style="display: block; background: #ccc;">span</span>
</p>

<script>
function elTest(ev) {
console.log('target : ' + ev.`,-1),t("b",{class:"t01"},"target",-1),n(".tagName + '\\n' + 'relatedTarget : ' + ev.",-1),t("b",{class:"t01"},"relatedTarget",-1),n(`.tagName);
}

document.addEventListener('mouseover', elTest, false);
<\/script>

`,-1),t("b",{class:"t02"},"// mouseoverしたノードがtargetになる",-1),n(`
`,-1),t("b",{class:"t02"},"// 同時に、mouseoutしたノードが、対のrelatedTargetになる",-1),n(`

</body>
</html>
`,-1)])]),_:1})])]),_:1}),l(a,{title:"オブジェクト指向(コンストラクタとインスタンス)"},{default:e(()=>[t("pre",null,[s[417]||(s[417]=n("",-1)),l(o,null,{default:e(()=>[...s[416]||(s[416]=[n(`function cns() {
  `,-1),t("b",{class:"t01"},"this",-1),n(`.val = "foo";
};
`,-1),t("b",{class:"t02"},"// コンストラクタ(オブジェクトの生成元)となる関数オブジェクトcnsを定義",-1),n(`
`,-1),t("b",{class:"t02"},"// この場合のthisは、cnsを元に生成される新たなオブジェクト(インスタンス)を参照する",-1),n(`

var ins = `,-1),t("b",{class:"t01"},"new",-1),n(" cns(); ",-1),t("b",{class:"t02"},"// new演算子でcnsを呼ぶと、インスタンスが生成され、それが戻り値になる",-1),n(`

console.log(ins.val); `,-1),t("b",{class:"t02"},"// foo // cnsをモデルとして、insのプロパティvalが定義された",-1),n(`


console.log(cns); `,-1),t("b",{class:"t02"},"// function cns() // cns は関数",-1),n(`
console.log(cns.prototype); `,-1),t("b",{class:"t02"},"// cns {} // cns.prototype は関数cnsの雛形オブジェクト",-1),n(`
console.log(ins); `,-1),t("b",{class:"t02"},"// cns {val: 'foo'} // ins は生成されたインスタンスオブジェクト ins {val: 'foo'}",-1),n(`
console.log(ins.__proto__); `,-1),t("b",{class:"t02"},"// cns {} // ins.__proto__ は関数cnsの雛形オブジェクト",-1),n(`
console.log(ins.constructor); `,-1),t("b",{class:"t02"},"// function cns() // insのコンストラクタは関数cns",-1),n(`
console.log(ins instanceof cns); `,-1),t("b",{class:"t02"},"// true // insはcnsのインスタンス",-1),n(`
console.log(Object.getPrototypeOf(ins) === cns.prototype); `,-1),t("b",{class:"t02"},"// true // insはcnsのprototypeオブジェクトを参照可能",-1),n(`
`,-1)])]),_:1}),s[418]||(s[418]=n(`

---

`,-1)),s[419]||(s[419]=t("b",{class:"t02"},`// オブジェクト指向とは

・システムを部品の組み合わせで構築する
・部品を再利用することで、同処理の開発重複を防ぐ
・開発や管理の効率化、合理化が目的`,-1)),s[420]||(s[420]=n(`
`,-1))])]),_:1}),l(a,{title:"オブジェクト指向(プロトタイプとObject)"},{default:e(()=>[t("pre",null,[s[422]||(s[422]=n("",-1)),l(o,null,{default:e(()=>[...s[421]||(s[421]=[n(`function cns() {
  this.val = "foo";
};
var ins = new cns();
`,-1),t("b",{class:"t02"},"// コンストラクタを定義し、インスタンスを生成",-1),n(`


console.log(cns.`,-1),t("b",{class:"t01"},"prototype",-1),n("); ",-1),t("b",{class:"t02"},"// Object {constructor: function} // prototypeは、cnsが持つ雛形(生成するオブジェクトの形)",-1),n(`
console.log(ins.`,-1),t("b",{class:"t01"},"__proto__",-1),n("); ",-1),t("b",{class:"t02"},"// Object {constructor: function} // __proto__は、生成元(cns)の雛形",-1),n(`
console.log(cns.prototype === ins.__proto__); `,-1),t("b",{class:"t02"},"// true // 上記の2つは同じもの",-1),n(`
console.log(ins.prototype); `,-1),t("b",{class:"t02"},"// undefined // insは関数オブジェクトではないので雛形を持たない",-1),n(`
console.log(cns.prototype.isPrototypeOf(ins)); `,-1),t("b",{class:"t02"},"// true // insのプロトタイプはcns.prototype",-1),n(`


console.log(`,-1),t("b",{class:"t01"},"Object",-1),n("); ",-1),t("b",{class:"t02"},"// function Object() { [native code] } // 大元のObject関数",-1),n(`
console.log(Object.prototype); `,-1),t("b",{class:"t02"},"// Object {...} // Object // Objectが持つ雛形",-1),n(`
console.log(Object.prototype.__proto__); `,-1),t("b",{class:"t02"},"// null // 雛形に生成元は無い",-1),n(`

console.log(ins.__proto__.__proto__); `,-1),t("b",{class:"t02"},"// Object {...} // Object // ins.__proto__ の生成元の雛形を参照",-1),n(`
console.log(ins.__proto__.__proto__ === Object.prototype); `,-1),t("b",{class:"t02"},"// true // ins.__proto__のモデルはObjectが持つ雛形",-1),n(`
console.log(ins.__proto__.__proto__.__proto__); `,-1),t("b",{class:"t02"},"// null // Objectに生成元は無い",-1),n(`


// var ins = new Object();
`,-1),t("b",{class:"t02"},"// オブジェクト定義のこの式は、Object関数をコンストラクタとしてインスタンスins(オブジェクト)を生成する、という意味",-1),n(`
`,-1)])]),_:1}),s[423]||(s[423]=n(`
`,-1))])]),_:1}),l(a,{title:"オブジェクト指向(Functionとconstructor)"},{default:e(()=>[t("pre",null,[s[425]||(s[425]=n("",-1)),l(o,null,{default:e(()=>[...s[424]||(s[424]=[n(`function cns() {
  this.val = 'foo';
};
var ins = new cns();
`,-1),t("b",{class:"t02"},"// コンストラクタを定義し、インスタンスを生成",-1),n(`


console.log(`,-1),t("b",{class:"t01"},"Function",-1),n("); ",-1),t("b",{class:"t02"},"// function function() { [native code] } // 大元のFunction関数",-1),n(`
console.log(ins.`,-1),t("b",{class:"t01"},"constructor",-1),n("); ",-1),t("b",{class:"t02"},"// function cns() {this.val = 'foo';} // constructorは、生成元(cns)そのものを参照",-1),n(`
console.log(ins.constructor === cns); `,-1),t("b",{class:"t02"},"// true // insのコンストラクタはcns",-1),n(`
console.log(cns.constructor === Function); `,-1),t("b",{class:"t02"},"// true // cnsのコンストラクタはFunction",-1),n(`
console.log(Function.constructor === Function); `,-1),t("b",{class:"t02"},"// true // FunctionのコンストラクタもFunction",-1),n(`
console.log(Object.constructor === Function); `,-1),t("b",{class:"t02"},"// true // ObjectのコンストラクタもFunction",-1),n(`
console.log(Function.prototype.__proto__ === Object.prototype); `,-1),t("b",{class:"t02"},"// true // Functionが持つ雛形は、Objectが持つ雛形から生成されている",-1),n(`

`,-1),t("b",{class:"t02"},"// つまり、関数の形としてはObjectがFunctionをモデルとしているが、オブジェクトの形としてはFunctionがObjectをモデルとしている",-1),n(`
`,-1)])]),_:1}),s[426]||(s[426]=n(`
`,-1))])]),_:1}),l(a,{title:"オブジェクト指向(メソッドの定義)"},{default:e(()=>[t("pre",null,[s[429]||(s[429]=n(`// １）コンストラクタの中に設定

`,-1)),l(o,null,{default:e(()=>[...s[427]||(s[427]=[n(`function fruit(c) {
  this.color = c;
  this.talk = `,-1),t("b",{class:"t03"},`function() {
    console.log('My color is ' + this.color + '.');
  }`,-1),n(`;
}

var apple = new fruit('red'); `,-1),t("b",{class:"t02"},"// インスタンスを生成 -> インスタンスの中にメソッドA(function() {〜})ができる",-1),n(`
var banana = new fruit('yellow'); `,-1),t("b",{class:"t02"},"// インスタンスを生成 -> インスタンスの中にメソッドB(function() {〜})ができる",-1),n(`
var grape = new fruit('violet'); `,-1),t("b",{class:"t02"},"// インスタンスを生成 -> インスタンスの中にメソッドC(function() {〜})ができる",-1),n(`

apple.talk(); `,-1),t("b",{class:"t02"},"// My color is red. // メソッドAが動く",-1),n(`
banana.talk(); `,-1),t("b",{class:"t02"},"// My color is yellow. // メソッドBが動く",-1),n(`
grape.talk(); `,-1),t("b",{class:"t02"},"// My color is violet. // メソッドCが動く",-1),n(`

`,-1),t("b",{class:"t02"},`// コンストラクタの中にメソッドがあると、
// インスタンス1つにつき1つのメソッドが生成される
// それぞれのメソッドは内容が同じため、メモリの無駄`,-1),n(`
`,-1)])]),_:1}),s[430]||(s[430]=n(`

---

// ２）コンストラクタのプロトタイプとして設定

`,-1)),l(o,null,{default:e(()=>[...s[428]||(s[428]=[n(`function fruit(c) {
  this.color = c;
}
fruit.`,-1),t("b",{class:"t01"},"prototype",-1),n(".talk = ",-1),t("b",{class:"t03"},`function() {
  console.log('My color is ' + this.color + '.');
}`,-1),n(`;

var apple = new fruit('red'); `,-1),t("b",{class:"t02"},"// インスタンスを生成 -> インスタンスの中にメソッドは無い",-1),n(`
var banana = new fruit('yellow'); `,-1),t("b",{class:"t02"},"// インスタンスを生成 -> インスタンスの中にメソッドは無い",-1),n(`
var grape = new fruit('violet'); `,-1),t("b",{class:"t02"},"// インスタンスを生成 -> インスタンスの中にメソッドは無い",-1),n(`

apple.talk(); `,-1),t("b",{class:"t02"},"// My color is red. // コンストラクタのプロトタイプのメソッドAが動く",-1),n(`
banana.talk(); `,-1),t("b",{class:"t02"},"// My color is yellow. // コンストラクタのプロトタイプのメソッドAが動く",-1),n(`
grape.talk(); `,-1),t("b",{class:"t02"},"// My color is violet. // コンストラクタのプロトタイプのメソッドAが動く",-1),n(`

`,-1),t("b",{class:"t02"},"// 参照対象のメソッドがインスタンス内に無い場合、JSは生成元であるコンストラクタのプロトタイプを参照する",-1),n(`
`,-1),t("b",{class:"t02"},"// 上記の3つはいずれも、プロトタイプとして設定された同じメソッドが動く",-1),n(`
`,-1)])]),_:1}),s[431]||(s[431]=n(`
`,-1))])]),_:1}),l(a,{title:"オブジェクト指向(プロトタイプチェーン)"},{default:e(()=>[t("pre",null,[s[433]||(s[433]=n("",-1)),l(o,null,{default:e(()=>[...s[432]||(s[432]=[n("var obj1 = new Object();  ",-1),t("b",{class:"t02"},"// オブジェクトを定義",-1),n(`
obj1.val = 42;  `,-1),t("b",{class:"t02"},"// プロパティを定義",-1),n(`

function fnc1() {};  `,-1),t("b",{class:"t02"},"// 関数オブジェクトを定義",-1),n(`
fnc1.prototype = obj1;  `,-1),t("b",{class:"t02"},"// fnc1のprototypeに、オブジェクトobj1を定義",-1),n(`
var obj2 = new fnc1();  `,-1),t("b",{class:"t02"},"// fnc1をコンストラクタとして、インスタンスobj2を生成する",-1),n(`

function fnc2() {};  `,-1),t("b",{class:"t02"},"// 関数オブジェクトを定義",-1),n(`
fnc2.prototype = obj2;  `,-1),t("b",{class:"t02"},"// fnc2のprototypeに、オブジェクトobj2を定義",-1),n(`
var obj3 = new fnc2();  `,-1),t("b",{class:"t02"},"// fnc2をコンストラクタとして、インスタンスobj3を生成する",-1),n(`

console.log(obj3.val);  `,-1),t("b",{class:"t02"},"// 42",-1),n(`

`,-1),t("b",{class:"t02"},"// １）console.log(obj3.val); -> obj3.val を参照",-1),n(`
`,-1),t("b",{class:"t02"},"// ２）obj3.valが定義されていないので、obj3のコンストラクタであるfnc2のプロトタイプを参照",-1),n(`
`,-1),t("b",{class:"t02"},"// ３）fnc2のプロトタイプはobj2だから、obj2.valがあるかどうかを判定",-1),n(`
`,-1),t("b",{class:"t02"},"// ４）obj2.valが定義されていないので、obj2のコンストラクタであるfnc1のプロトタイプを参照",-1),n(`
`,-1),t("b",{class:"t02"},"// ５）fnc1のプロトタイプはobj1だから、obj1.valがあるかどうかを判定",-1),n(`
`,-1),t("b",{class:"t02"},"// ６）obj1.valが定義されているので、obj1.val = 42 を返す",-1),n(`


console.log(obj3.hasOwnProperty('val')); `,-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(obj2.hasOwnProperty('val')); `,-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(obj1.hasOwnProperty('val')); `,-1),t("b",{class:"t02"},"// true // オブジェクトがプロパティを直接持っていればtrue",-1),n(`

`,-1),t("b",{class:"t02"},"// hasOwnPropertyは、そのオブジェクト自体の中のプロパティやメソッドの有無を参照",-1),n(`


console.log(obj3); `,-1),t("b",{class:"t02"},"// fnc2 {...}",-1),n(`
console.log(obj3.__proto__ === fnc2.prototype); `,-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(obj2.__proto__ === fnc1.prototype); `,-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(obj1.__proto__ === Object.prototype); `,-1),t("b",{class:"t02"},"// true",-1),n(`
console.log(obj3.__proto__.__proto__.__proto__ === Object.prototype); `,-1),t("b",{class:"t02"},"// true",-1),n(`

console.log(obj3.constructor); `,-1),t("b",{class:"t02"},"// function Object() { [native code] }",-1),n(`
console.log(obj3.constructor === fnc2); `,-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(obj3.constructor === fnc1); `,-1),t("b",{class:"t02"},"// false",-1),n(`
console.log(obj3.constructor === Object); `,-1),t("b",{class:"t02"},"// true",-1),n(`

`,-1),t("b",{class:"t02"},`// 便宜上、「obj3のコンストラクタはfnc2」という言い回しをしているが、
// 厳密には「全てのインスタンスのconstructorはObject」`,-1),n(`


console.log(Object.prototype); `,-1),t("b",{class:"t02"},"// Object {...}",-1),n(`
console.log(Object.prototype.__proto__); `,-1),t("b",{class:"t02"},"// null",-1),n(`

`,-1),t("b",{class:"t02"},"// そして、Object.prototype がプロトタイプチェーンの終着点となる",-1),n(`
`,-1)])]),_:1}),s[434]||(s[434]=n(`
`,-1))])]),_:1}),l(a,{title:"オブジェクト指向(継承)"},{default:e(()=>[t("pre",null,[s[438]||(s[438]=n("",-1)),l(o,null,{default:e(()=>[...s[435]||(s[435]=[t("b",{class:"t02"},"// 継承元コンストラクタ cns1",-1),n(`
function cns1(t) {
  this.val = t;
}
cns1.prototype.mtd = function() {
  console.log(this.val);
};

`,-1),t("b",{class:"t02"},"// 継承先コンストラクタ cns2",-1),n(`
function cns2() {
  cns1.`,-1),t("b",{class:"t01"},"apply(this, arguments)",-1),n("; ",-1),t("b",{class:"t02"},"// 継承の定義(applyでcns2のthisをcns1のthisに設定することで、cns2~cns1間でのthisや引数の流用が可能になる)",-1),n(`
}
cns2.`,-1),t("b",{class:"t01"},"prototype",-1),n(" = new cns1(); ",-1),t("b",{class:"t02"},"// プロトタイプチェーンの定義(cns2のprototypeにcns1のインスタンスを設定することで、cns2にプロパティやメソッドがない場合cns1を参照するようになる)",-1),n(`


var ins1 = new cns1('ins1_text'); `,-1),t("b",{class:"t02"},"// cns1のインスタンスins1を定義",-1),n(`
var ins2 = new cns2('ins2_text'); `,-1),t("b",{class:"t02"},"// cns2のインスタンスins2を定義",-1),n(`

ins1.mtd(); `,-1),t("b",{class:"t02"},"// ins1_text",-1),n(`
ins2.mtd(); `,-1),t("b",{class:"t02"},"// ins2_text",-1),n(`
`,-1)])]),_:1}),s[439]||(s[439]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[436]||(s[436]=[t("b",{class:"t02"},"// 継承元コンストラクタ",-1),n(`
function cns1(t) {
  this.val = t;
}
cns1.prototype.mtd = function() {
  console.log(this.val);
};

`,-1),t("b",{class:"t02"},"// 継承先コンストラクタ",-1),n(`
function cns2() {
  `,-1),t("b",{class:"t02"},"// cns1.apply(this, arguments); -> 継承の定義をはずすと、",-1),n(`
}
cns2.prototype = new cns1();


var ins1 = new cns1('ins1_text');
var ins2 = new cns2('ins2_text');

ins1.mtd(); `,-1),t("b",{class:"t02"},"// ins1_text",-1),n(`
ins2.mtd(); `,-1),t("b",{class:"t02"},"// undefined -> 引数を引き継げない",-1),n(`
`,-1)])]),_:1}),s[440]||(s[440]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[437]||(s[437]=[t("b",{class:"t02"},"// 継承元コンストラクタ",-1),n(`
function cns1(t) {
  this.val = t;
}
cns1.prototype.mtd = function() {
  console.log(this.val);
};

`,-1),t("b",{class:"t02"},"// 継承先コンストラクタ",-1),n(`
function cns2() {
  cns1.apply(this, arguments);
}
`,-1),t("b",{class:"t02"},"// cns2.prototype = new cns1(); -> プロトタイプチェーンの定義をはずすと、",-1),n(`


var ins1 = new cns1('ins1_text');
var ins2 = new cns2('ins2_text');

ins1.mtd(); `,-1),t("b",{class:"t02"},"// ins1_text",-1),n(`
ins2.mtd(); `,-1),t("b",{class:"t02"},"// Uncaught TypeError: ins2.mtd is not a function -> メソッドを引き継げない",-1),n(`
`,-1)])]),_:1}),s[441]||(s[441]=n(`
`,-1))])]),_:1}),l(a,{title:"オブジェクト指向(クロージャ)"},{default:e(()=>[t("pre",null,[s[443]||(s[443]=n("",-1)),l(o,null,{default:e(()=>[...s[442]||(s[442]=[t("b",{class:"t02"},"// outer scope",-1),n(`
var closure = function() {
  var v = 0;
  `,-1),t("b",{class:"t02"},"// inner scope",-1),n(`
  return function() {
    v++;
    return v;
  };
};

var run = closure();

console.log(run()); `,-1),t("b",{class:"t02"},"// 1",-1),n(`
console.log(run()); `,-1),t("b",{class:"t02"},"// 2",-1),n(`
console.log(run()); `,-1),t("b",{class:"t02"},"// 3",-1),n(`
console.log(run()); `,-1),t("b",{class:"t02"},"// 4",-1),n(`

`,-1),t("b",{class:"t02"},`// a) run = closure(); // global => outer => inner のスコープチェーンが定義される
// b) console.log(run());
// c) innerに入る
// d) v++; // inner内にvが無いので1つ外のouterのv( = 0)を参照し、+1、 その参照経路がinner内で定義される
// e) return v; // inner
// f) return v <= function(){v++;return v;}; // outer
// g) 1回目は1を出力
// h) run();
// i) innerに入る
// j) v++; // inner内にd)で定義されたvを参照し、+1
// k) 以降、e)~j)を繰り返す`,-1),n(`
`,-1)])]),_:1}),s[444]||(s[444]=n(`
`,-1))])]),_:1}),l(a,{title:"オブジェクト指向(ゲッタとセッタ)"},{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[445]||(s[445]=[n(`var obj = {
  foo: 0,
  `,-1),t("b",{class:"t01"},"get",-1),n(" mtd () { return this.foo; }, ",-1),t("b",{class:"t03"},"// 参照されるとゲッタが動く",-1),n(`
  `,-1),t("b",{class:"t01"},"set",-1),n(" mtd (v) { this.foo = v; }, ",-1),t("b",{class:"t04"},"// 代入されるとセッタが動く",-1),n(`
};

console.log(`,-1),t("b",{class:"t03"},"obj.mtd",-1),n("); ",-1),t("b",{class:"t02"},"// 0",-1),n(`
`,-1),t("b",{class:"t04"},"obj.mtd = 1;",-1),n(`
console.log(`,-1),t("b",{class:"t03"},"obj.mtd",-1),n("); ",-1),t("b",{class:"t02"},"// 1",-1),n(`

obj.foo = 'str';
console.log(`,-1),t("b",{class:"t03"},"obj.mtd",-1),n("); ",-1),t("b",{class:"t02"},"// str // 直接fooにアクセスすると上書きできてしまう",-1),n(`
`,-1)])]),_:1}),s[448]||(s[448]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[446]||(s[446]=[n("function cns() { ",-1),t("b",{class:"t02"},"// クロージャ構成にして外からfooへのアクセスを制限",-1),n(`
  var foo = 0;
  return {
    get mtd () { return foo; },
    set mtd (v) { foo = v; },
  };
};
var ins = new cns();

console.log(ins.mtd); `,-1),t("b",{class:"t02"},"// 0",-1),n(`
ins.mtd = 1;
console.log(ins.mtd); `,-1),t("b",{class:"t02"},"// 1",-1),n(`
`,-1)])]),_:1}),s[449]||(s[449]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[447]||(s[447]=[n("function cns() { ",-1),t("b",{class:"t02"},"// クロージャ構成で外からfooへのアクセスを制限",-1),n(`
  var foo = false;
  return {
    get mtd () { return foo; },
    set mtd (v) {
      if (v === true || v === false) { `,-1),t("b",{class:"t02"},"// さらにセット可能の条件を設定",-1),n(`
        foo = v;
      };
    },
  };
};
var ins = new cns();


console.log(ins.mtd); `,-1),t("b",{class:"t02"},"// false // 初期値",-1),n(`

ins.mtd = true; `,-1),t("b",{class:"t02"},"// 条件を満たし上書き可",-1),n(`
console.log(ins.mtd); `,-1),t("b",{class:"t02"},"// true",-1),n(`

ins.mtd = 42; `,-1),t("b",{class:"t02"},"// 条件を満たさず上書き不可",-1),n(`
console.log(ins.mtd); `,-1),t("b",{class:"t02"},"// true",-1),n(`

foo = 42; `,-1),t("b",{class:"t02"},"// fooへのアクセス制限により上書き不可",-1),n(`
console.log(ins.mtd); `,-1),t("b",{class:"t02"},"// true",-1),n(`

ins.mtd = false; `,-1),t("b",{class:"t02"},"// 条件を満たし上書き可",-1),n(`
console.log(ins.mtd); `,-1),t("b",{class:"t02"},"// false",-1),n(`
`,-1)])]),_:1}),s[450]||(s[450]=n(`
`,-1))])]),_:1}),l(a,{title:"オブジェクト指向(名前空間)"},{default:e(()=>[t("pre",null,[s[460]||(s[460]=n(`// 書式1 - 直書き

`,-1)),l(o,null,{default:e(()=>[...s[451]||(s[451]=[t("b",{class:"t02"},"// 処理1",-1),n(`
var val1 = {
  'v1': 'foo',
  'v2': 'bar',
};
var fnc1 = function() {
  console.log(val1.v1); `,-1),t("b",{class:"t02"},"// foo",-1),n(`
};
fnc1();

`,-1),t("b",{class:"t02"},"// 処理2",-1),n(`
var val2 = {
  'v3': 'baz',
  'v4': 'qux',
};
var fnc2 = function() {
  console.log(val2.v4); `,-1),t("b",{class:"t02"},"// qux",-1),n(`
};
fnc2();

`,-1),t("b",{class:"t02"},"// グローバル変数が多く、他と競合が発生しやすい",-1),n(`
`,-1)])]),_:1}),s[461]||(s[461]=n(`



---

// 書式2 - 全体を関数化

`,-1)),l(o,null,{default:e(()=>[...s[452]||(s[452]=[t("b",{class:"t01"},"var fncAll = function() {",-1),n(`
  `,-1),t("b",{class:"t02"},"// 処理1",-1),n(`
  var val1 = {
    'v1': 'foo',
    'v2': 'bar',
  };
  var fnc1 = function() {
    console.log(val1.v1); `,-1),t("b",{class:"t02"},"// foo",-1),n(`
  };
  fnc1();

  `,-1),t("b",{class:"t02"},"// 処理2",-1),n(`
  var val2 = {
    'v3': 'baz',
    'v4': 'qux',
  };
  var fnc2 = function() {
    console.log(val2.v4); `,-1),t("b",{class:"t02"},"// qux",-1),n(`
  };
  fnc2();
`,-1),t("b",{class:"t01"},"};",-1),n(`

`,-1),t("b",{class:"t01"},"fncAll();",-1),n(`

`,-1),t("b",{class:"t02"},"// fncAllのみがグローバル変数となる",-1),n(`
`,-1)])]),_:1}),s[462]||(s[462]=n(`



---

// 書式3 - 即時関数化

`,-1)),l(o,null,{default:e(()=>[...s[453]||(s[453]=[t("b",{class:"t01"},"(",-1),n(`function() {
  `,-1),t("b",{class:"t02"},"// 処理1",-1),n(`
  var val1 = {
    'v1': 'foo',
    'v2': 'bar',
  };
  var fnc1 = function() {
    console.log(val1.v1); `,-1),t("b",{class:"t02"},"// foo",-1),n(`
  };
  fnc1();

  `,-1),t("b",{class:"t02"},"// 処理2",-1),n(`
  var val2 = {
    'v3': 'baz',
    'v4': 'qux',
  };
  var fnc2 = function() {
    console.log(val2.v4); `,-1),t("b",{class:"t02"},"// qux",-1),n(`
  };
  fnc2();
}`,-1),t("b",{class:"t01"},")();",-1),n(`

`,-1),t("b",{class:"t02"},"// グローバル変数を無くせる",-1),n(`
`,-1),t("b",{class:"t02"},"// 処理ごとに分離されてなく、拡張時の影響範囲が把握しにくい",-1),n(`
`,-1)])]),_:1}),s[463]||(s[463]=n(`



---

// 書式4 - 処理のオブジェクト化

`,-1)),l(o,null,{default:e(()=>[...s[454]||(s[454]=[n(`(function() {
  `,-1),t("b",{class:"t02"},"// 処理1",-1),n(`
  `,-1),t("b",{class:"t01"},"var obj1 = {",-1),n(`
    v`,-1),t("b",{class:"t01"},":",-1),n(` {
      v1: 'foo',
      v2: 'bar',
    }`,-1),t("b",{class:"t01"},",",-1),n(`
    run`,-1),t("b",{class:"t01"},":",-1),n(` function() {
      console.log(`,-1),t("b",{class:"t03"},"this",-1),n(".v.v1); ",-1),t("b",{class:"t02"},"// foo",-1),n(`
    }`,-1),t("b",{class:"t01"},",",-1),n(`
  `,-1),t("b",{class:"t01"},"}",-1),n(`
  obj1.run();

  `,-1),t("b",{class:"t02"},"// 処理2",-1),n(`
  `,-1),t("b",{class:"t01"},"var obj2 = {",-1),n(`
    v`,-1),t("b",{class:"t01"},":",-1),n(` {
      v3: 'baz',
      v4: 'qux',
    }`,-1),t("b",{class:"t01"},",",-1),n(`
    run`,-1),t("b",{class:"t01"},":",-1),n(` function() {
      console.log(`,-1),t("b",{class:"t03"},"this",-1),n(".v.v4); ",-1),t("b",{class:"t02"},"// qux",-1),n(`
    }`,-1),t("b",{class:"t01"},",",-1),n(`
  `,-1),t("b",{class:"t01"},"}",-1),n(`
  obj2.run();
})();
`,-1)])]),_:1}),s[464]||(s[464]=n(`


`,-1)),s[465]||(s[465]=t("b",{class:"t02"},"// 以上のように処理を分離することはできるが、",-1)),s[466]||(s[466]=n(`
`,-1)),s[467]||(s[467]=t("b",{class:"t02"},"// 以下のように処理1と処理2を別のファイルなどに分ける場合、互いのデータはとれなくなる",-1)),s[468]||(s[468]=n(`
`,-1)),s[469]||(s[469]=t("b",{class:"t02"},"// 複数のオブジェクトの間で変数の重複はなくなる",-1)),s[470]||(s[470]=n(`

`,-1)),l(o,null,{default:e(()=>[...s[455]||(s[455]=[t("b",{class:"t02"},"// 処理1",-1),n(`
(function() {
  var obj1 = {
    v: {
      v1: 'foo',
      v2: 'bar',
    },
    run: function() {
      console.log(this.v.v1 + obj1.v.v1); `,-1),t("b",{class:"t02"},"// foofoo",-1),n(`
    },
  }
  obj1.run();
})();

`,-1),t("b",{class:"t02"},"// 処理2",-1),n(`
(function() {
  var obj2 = {
    v: {
      v3: 'baz',
      v4: 'qux',
    },
    run: function() {
      console.log(this.v.v4 + `,-1),t("b",{class:"t03"},"obj1.v.v1",-1),n("); ",-1),t("b",{class:"t02"},"// Uncaught ReferenceError: obj1 is not defined",-1),n(`
    }
  }
  obj2.run();
})();

`,-1),t("b",{class:"t02"},"// 即時関数をやめれば互いのデータをとれるが、グローバル変数が2つできてしまう",-1),n(`
`,-1)])]),_:1}),s[471]||(s[471]=n(`



---

// 書式5 - 名前空間の設定

`,-1)),l(o,null,{default:e(()=>[...s[456]||(s[456]=[t("b",{class:"t02"},"// グローバル設定",-1),n(`
`,-1),t("b",{class:"t01"},"var NAMESPACE = {};",-1),n(`

`,-1),t("b",{class:"t02"},"// 処理1",-1),n(`
NAMESPACE.obj1 = {
  v: {
    v1: 'foo',
    v2: 'bar',
  },
  run: function() {
    console.log(this.v.v1);
  },
}

`,-1),t("b",{class:"t02"},"// 処理2",-1),n(`
NAMESPACE.obj2 = {
  v: {
    v3: 'baz',
    v4: 'qux',
  },
  run: function() {
    console.log(this.v.v4 + `,-1),t("b",{class:"t01"},"NAMESPACE.obj1.v.v1",-1),n(`);
  },
}

`,-1),t("b",{class:"t02"},"// オブジェクト参照",-1),n(`
NAMESPACE.obj1.run(); `,-1),t("b",{class:"t02"},"// foo",-1),n(`
NAMESPACE.obj2.run(); `,-1),t("b",{class:"t02"},"// quxfoo",-1),n(`


`,-1),t("b",{class:"t02"},"// 処理1と処理2が別ファイルであっても、シングルページで両方読み込めば、互いのデータをやり取りできる",-1),n(`
`,-1),t("b",{class:"t02"},"// しかし、グローバル設定は全てのjsの先頭でないといけない",-1),n(`
`,-1),t("b",{class:"t02"},"// 複数ファイルをconcatする場合、グローバル設定より処理が先に来てしまうという懸念がある",-1),n(`
`,-1)])]),_:1}),s[472]||(s[472]=n(`



---

// 書式6 - 名前空間の設定(より汎用性の高い構成)

`,-1)),l(o,null,{default:e(()=>[...s[457]||(s[457]=[t("b",{class:"t02"},"// 処理1",-1),n(`
`,-1),t("b",{class:"t01"},"var NAMESPACE = NAMESPACE || {};",-1),n(),t("b",{class:"t02"},"// グローバル設定",-1),n(`
NAMESPACE.obj1 = {
  v: {
    v1: 'foo',
    v2: 'bar',
  },
  run: function() {
    console.log(this.v.v1);
  },
}

`,-1),t("b",{class:"t02"},"// 処理2",-1),n(`
`,-1),t("b",{class:"t01"},"var NAMESPACE = NAMESPACE || {};",-1),n(),t("b",{class:"t02"},"// グローバル設定",-1),n(`
NAMESPACE.obj2 = {
  v: {
    v3: 'baz',
    v4: 'qux',
  },
  run: function() {
    console.log(this.v.v4 + `,-1),t("b",{class:"t01"},"NAMESPACE.obj1.v.v1",-1),n(`);
  },
}

`,-1),t("b",{class:"t02"},"// オブジェクト参照",-1),n(`
NAMESPACE.obj1.run(); `,-1),t("b",{class:"t02"},"// foo",-1),n(`
NAMESPACE.obj2.run(); `,-1),t("b",{class:"t02"},"// quxfoo",-1),n(`


`,-1),t("b",{class:"t02"},"// NAMESPACEがundefineなら新規オブジェクトを定義し、既存のNAMESPACEがあるならそれを代入する",-1),n(`
`,-1),t("b",{class:"t02"},"// concatの際、グローバル設定より処理が先に来てしまうという懸念はない",-1),n(`
`,-1),t("b",{class:"t02"},"// 処理1と処理2の順番が入れ変わったとしても正常に動く",-1),n(`
`,-1),t("b",{class:"t02"},"// 処理ごとにファイルを分割できる",-1),n(`
`,-1)])]),_:1}),s[473]||(s[473]=n(`



---

// 書式7 - 名前空間のオブジェクトでまとめる

`,-1)),l(o,null,{default:e(()=>[...s[458]||(s[458]=[n(`
var NAMESPACE = `,-1),t("b",{class:"t01"},"{",-1),n(`

  `,-1),t("b",{class:"t05"},"init: function() {",-1),n(`
    this.obj1.run(); `,-1),t("b",{class:"t02"},"// thisはNAMESPACE",-1),n(`
    this.obj2.run(); `,-1),t("b",{class:"t02"},"// thisはNAMESPACE",-1),n(`
  `,-1),t("b",{class:"t05"},"}",-1),n(`,

  `,-1),t("b",{class:"t01"},"obj1: {",-1),n(`
    v: {
      v1: 'foo',
      v2: 'bar',
    },
    run: function() {
      console.log(this.v.v1); `,-1),t("b",{class:"t02"},"// thisはobj1",-1),n(`
    },
  `,-1),t("b",{class:"t01"},"}",-1),n(`,

  `,-1),t("b",{class:"t01"},"obj2: {",-1),n(`
    v: {
      v3: 'baz',
      v4: 'qux'
    },
    run: function() {
      console.log(this.v.v4 + NAMESPACE.obj1.v.v1); `,-1),t("b",{class:"t02"},"// thisはobj2",-1),n(`
    },
  `,-1),t("b",{class:"t01"},"}",-1),n(`,
`,-1),t("b",{class:"t01"},"}",-1),n(`

`,-1),t("b",{class:"t02"},"// 実行",-1),n(`
NAMESPACE.`,-1),t("b",{class:"t05"},"init()",-1),n("; ",-1),t("b",{class:"t02"},"// foo -> quxfoo",-1),n(`


`,-1),t("b",{class:"t02"},"// 実行の表記は固定で、NAMESPACEオブジェクトのinitメソッド内で各fncを制御できる",-1),n(`
`,-1),t("b",{class:"t02"},"// ファイルを分けることは難しい",-1),n(`
`,-1)])]),_:1}),s[474]||(s[474]=n(`



---

// 書式8 - 書式6にinitを追加したタイプ

`,-1)),l(o,null,{default:e(()=>[...s[459]||(s[459]=[t("b",{class:"t01"},"var NAMESPACE = NAMESPACE || {};",-1),n(`
`,-1),t("b",{class:"t05"},"NAMESPACE.init = function() {",-1),n(`
  this.obj1.run();
  this.obj2.run();
`,-1),t("b",{class:"t05"},"}",-1),n(`

`,-1),t("b",{class:"t01"},`var NAMESPACE = NAMESPACE || {};
NAMESPACE.`,-1),n("obj1 ",-1),t("b",{class:"t01"},"= {",-1),n(`
  v: {
    v1: 'foo',
    v2: 'bar',
  }`,-1),t("b",{class:"t01"},",",-1),n(`
  run: function() {
    console.log(this.v.v1);
  }`,-1),t("b",{class:"t01"},",",-1),n(`
`,-1),t("b",{class:"t01"},`}

var NAMESPACE = NAMESPACE || {};
NAMESPACE.`,-1),n("obj2 ",-1),t("b",{class:"t01"},"= {",-1),n(`
  v: {
    v3: 'baz',
    v4: 'qux',
  }`,-1),t("b",{class:"t01"},",",-1),n(`
  run: function() {
    console.log(this.v.v4 + NAMESPACE.obj1.v.v1);
  }`,-1),t("b",{class:"t01"},",",-1),n(`
`,-1),t("b",{class:"t01"},"}",-1),n(`

`,-1),t("b",{class:"t02"},"// 実行",-1),n(`
NAMESPACE.`,-1),t("b",{class:"t05"},"init()",-1),n("; ",-1),t("b",{class:"t02"},"// foo -> quxfoo",-1),n(`


`,-1),t("b",{class:"t02"},"// 実行表記を固定できる",-1),n(`
`,-1),t("b",{class:"t02"},"// ファイルを分けても、initのファイルから各処理を制御できる",-1),n(`
`,-1)])]),_:1}),s[475]||(s[475]=n(`
`,-1))])]),_:1}),l(a,{title:"JSON"},{default:e(()=>[t("pre",null,[s[477]||(s[477]=n("",-1)),l(o,null,{default:e(()=>[...s[476]||(s[476]=[n(`var jsonStrings = \`{ "key1": "var1", "key2": "var2", "key3": "var3" }\`;
var jsonObj = JSON.parse(jsonStrings);
console.log(jsonObj);
console.log(JSON.stringify(jsonObj));
`,-1)])]),_:1}),s[478]||(s[478]=n(`
`,-1))])]),_:1}),l(a,{title:"HTTP通信"},{default:e(()=>[t("pre",null,[s[480]||(s[480]=n("",-1)),l(o,null,{default:e(()=>[...s[479]||(s[479]=[n(`<!doctype html>
<title>request_a.html</title>
<meta charset="utf-8">

<h1>This page is request_a.html</h1>
<h2>request: get.html</h2>
<button onclick="sendReq()">send request</button>
<h3>↓Status</h3>
<pre></pre>
<pre></pre>
<h3>↓Response Headers</h3>
<pre></pre>
<h3>↓Response</h3>
<pre></pre>

<script>

function sendReq() {
  var foo = new `,-1),t("b",{class:"t01"},"XMLHttpRequest()",-1),n(";  ",-1),t("b",{class:"t02"},"// １）インスタンス生成",-1),n(`
  foo.`,-1),t("b",{class:"t01"},"open(",-1),n("'GET', 'get.html'",-1),t("b",{class:"t01"},")",-1),n(";  ",-1),t("b",{class:"t02"},"// ２）リクエスト設定 // 第3引数はデフォルトでtrue(非同期)",-1),n(`
  foo.`,-1),t("b",{class:"t01"},"send()",-1),n(";  ",-1),t("b",{class:"t02"},"// ３）リクエスト送信",-1),n(`

  `,-1),t("b",{class:"t02"},"// ４）サーバにリクエストが届く",-1),n(`
  `,-1),t("b",{class:"t02"},"// ５）サーバがリクエストを解釈する",-1),n(`
  `,-1),t("b",{class:"t02"},"// ６）サーバがレスポンスを送信する",-1),n(`

  foo.addEventListener('`,-1),t("b",{class:"t01"},"loadend",-1),n(`', function() {
    var pre = document.getElementsByTagName('pre');
    pre[0].textContent = foo.`,-1),t("b",{class:"t01"},"status",-1),n(`;
    pre[1].textContent = foo.`,-1),t("b",{class:"t01"},"statusText",-1),n(`;
    pre[2].textContent = foo.`,-1),t("b",{class:"t01"},"getAllResponseHeaders()",-1),n(`;
    pre[3].textContent = foo.`,-1),t("b",{class:"t01"},"response",-1),n(`;
  });

  `,-1),t("b",{class:"t02"},"// ７）レスポンス受信完了のタイミングで値を取得し、preに格納",-1),n(`
}

<\/script>
`,-1)])]),_:1}),s[481]||(s[481]=n(`


---

// XMLHttpRequest() のイベント

`,-1)),s[482]||(s[482]=t("b",{class:"t01"},"loadend",-1)),s[483]||(s[483]=n("   ",-1)),s[484]||(s[484]=t("b",{class:"t02"},"リクエスト終了(成功・失敗に関わらず)",-1)),s[485]||(s[485]=n(`
`,-1)),s[486]||(s[486]=t("b",{class:"t01"},"loadstart",-1)),s[487]||(s[487]=n("   ",-1)),s[488]||(s[488]=t("b",{class:"t02"},"リクエスト開始",-1)),s[489]||(s[489]=n(`
`,-1)),s[490]||(s[490]=t("b",{class:"t01"},"load",-1)),s[491]||(s[491]=n("  ",-1)),s[492]||(s[492]=t("b",{class:"t02"},"リクエスト成功",-1)),s[493]||(s[493]=n(`
`,-1)),s[494]||(s[494]=t("b",{class:"t01"},"progress",-1)),s[495]||(s[495]=n("   ",-1)),s[496]||(s[496]=t("b",{class:"t02"},"データ受信時(連続的に取得)",-1)),s[497]||(s[497]=n(`
`,-1)),s[498]||(s[498]=t("b",{class:"t01"},"abort",-1)),s[499]||(s[499]=n("  ",-1)),s[500]||(s[500]=t("b",{class:"t02"},"リクエスト中断",-1)),s[501]||(s[501]=n(`
`,-1)),s[502]||(s[502]=t("b",{class:"t01"},"error",-1)),s[503]||(s[503]=n("  ",-1)),s[504]||(s[504]=t("b",{class:"t02"},"リクエスト失敗",-1)),s[505]||(s[505]=n(`
`,-1)),s[506]||(s[506]=t("b",{class:"t01"},"timeout",-1)),s[507]||(s[507]=n("  ",-1)),s[508]||(s[508]=t("b",{class:"t02"},"制限時間を超過",-1)),s[509]||(s[509]=n(`
`,-1))])]),_:1}),l(a,{title:"HTTP通信(JSON)"},{default:e(()=>[t("pre",null,[s[512]||(s[512]=n(`// JSONファイルのデータを出力

`,-1)),l(o,null,{default:e(()=>[...s[510]||(s[510]=[n(`<!doctype html>
<title>get_json.html</title>
<meta charset="utf-8">

<h1>This page is get_json.html</h1>
<h2>request: fruit_list.json</h2>
<button onclick="getJson()">get json</button>

<table border="1">
<thead>
<tr>
<th>name</th>
<th>color</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

<script>

function getJson() {
  var foo = new `,-1),t("b",{class:"t01"},"XMLHttpRequest()",-1),n(`;
  foo.`,-1),t("b",{class:"t01"},"open(",-1),n("'GET', 'fruit_list.json'",-1),t("b",{class:"t01"},")",-1),n(`;
  foo.`,-1),t("b",{class:"t01"},"send()",-1),n(`;

  foo.addEventListener('`,-1),t("b",{class:"t01"},"loadend",-1),n(`', function() {
    var data = `,-1),t("b",{class:"t01"},"JSON.parse(",-1),n("foo",-1),t("b",{class:"t01"},".responseText);",-1),n(`

    for (i = 0; data.fruit_list[i]; i++) {
      var tbody = document.getElementsByTagName('tbody')[0];
      var tr  = document.createElement('tr');
      var name  = document.createElement('td');
      var color = document.createElement('td');
      name.appendChild(document.createTextNode(data`,-1),t("b",{class:"t01"},".fruit_list[i].name",-1),n(`));
      color.appendChild(document.createTextNode(data`,-1),t("b",{class:"t01"},".fruit_list[i].color",-1),n(`));
      tr.appendChild(name);
      tr.appendChild(color);
      tbody.appendChild(tr);
    }
  });
}

<\/script>
`,-1)])]),_:1}),s[513]||(s[513]=n(`


---

// クロージャを使って3つずつ出力

`,-1)),l(o,null,{default:e(()=>[...s[511]||(s[511]=[n(`<!doctype html>
<title>get_json_closer.html</title>
<meta charset="utf-8">

<h1>This page is get_json_closer.html</h1>
<h2>request: fruit_list.json</h2>
<button onclick="getJsonThreeFruits()">get json 3 fruits</button>

<table border="1">
<thead>
<tr>
<th>name</th>
<th>color</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

<script>

`,-1),t("b",{class:"t02"},"// requestのsendと、trのappend",-1),n(`
function sendReq(count) {
  var req = new `,-1),t("b",{class:"t01"},"XMLHttpRequest()",-1),n(`;
  req.`,-1),t("b",{class:"t01"},"open(",-1),n("'GET', 'fruit_list.json'",-1),t("b",{class:"t01"},")",-1),n(`;
  req.`,-1),t("b",{class:"t01"},"send()",-1),n(`;

  req.addEventListener('`,-1),t("b",{class:"t01"},"loadend",-1),n(`', function() {
    var data = `,-1),t("b",{class:"t01"},"JSON.parse(",-1),n("req",-1),t("b",{class:"t01"},".responseText);",-1),n(`

    for (i = 0; i < 3; i++) {
      var j = (count * 3) + i;  `,-1),t("b",{class:"t02"},"// 参照するデータの番号調整",-1),n(`

      if(data.fruit_list[j]) {  `,-1),t("b",{class:"t02"},"// データが存在すれば実行",-1),n(`
        var tbody = document.getElementsByTagName('tbody')[0];
        var tr  = document.createElement('tr');
        var name  = document.createElement('td');
        var color = document.createElement('td');
        name.appendChild(document.createTextNode(data`,-1),t("b",{class:"t01"},".fruit_list[j].name",-1),n(`));
        color.appendChild(document.createTextNode(data`,-1),t("b",{class:"t01"},".fruit_list[j].color",-1),n(`));
        tr.appendChild(name);
        tr.appendChild(color);
        tbody.appendChild(tr);
      }
    }
  });
}

`,-1),t("b",{class:"t02"},"// クロージャ",-1),n(`
function getJson() {
  var count = 0;
  return function() {
    sendReq(count);
    count++;
  }
}

`,-1),t("b",{class:"t02"},"// インスタンス生成",-1),n(`
var getJsonThreeFruits = new getJson();

<\/script>
`,-1)])]),_:1}),s[514]||(s[514]=n(`
`,-1))])]),_:1}),s[777]||(s[777]=t("p",null,"---------------------------------------------------------------",-1)),l(a,{title:"let"},{default:e(()=>[t("pre",null,[s[517]||(s[517]=n(`// block level only

`,-1)),l(o,null,{default:e(()=>[...s[515]||(s[515]=[n(`if (true) {
  `,-1),t("b",{class:"t03"},"var",-1),n(` foo = 42;
}
console.log(foo); `,-1),t("b",{class:"t02"},"// 42",-1),n(`

if (true) {
  `,-1),t("b",{class:"t01"},"let",-1),n(` bar = 42;
}
console.log(bar); `,-1),t("b",{class:"t02"},"// bar is not defined",-1),n(`
`,-1)])]),_:1}),s[518]||(s[518]=n(`

---

// instead of IIFE

`,-1)),l(o,null,{default:e(()=>[...s[516]||(s[516]=[t("b",{class:"t01"},`{
  let`,-1),n(` foo = 42;
`,-1),t("b",{class:"t01"},"}",-1),n(`
console.log(foo); `,-1),t("b",{class:"t02"},"// foo is not defined",-1),n(`
`,-1)])]),_:1}),s[519]||(s[519]=n(`
`,-1))])]),_:1}),l(a,{title:"const"},{default:e(()=>[t("pre",null,[s[523]||(s[523]=n(`// value(cannot be assigned)

`,-1)),l(o,null,{default:e(()=>[...s[520]||(s[520]=[t("b",{class:"t01"},"const",-1),n(` foo = 42;
foo = 84; `,-1),t("b",{class:"t02"},"// Assignment to constant variable.",-1),n(`
`,-1)])]),_:1}),s[524]||(s[524]=n(`

---

// array

`,-1)),l(o,null,{default:e(()=>[...s[521]||(s[521]=[t("b",{class:"t01"},"const",-1),n(` foo = [42, 84, 126];

foo[0] = 168;
console.log(foo); `,-1),t("b",{class:"t02"},"// [168, 84, 126]",-1),n(`

foo = []; `,-1),t("b",{class:"t02"},"// Assignment to constant variable.",-1),n(`
`,-1)])]),_:1}),s[525]||(s[525]=n(`

---

// object

`,-1)),l(o,null,{default:e(()=>[...s[522]||(s[522]=[t("b",{class:"t01"},"const",-1),n(` foo = {
  bar: 42,
  baz: 84,
  qux: 126,
};
foo.bar = 168;
console.log(foo.bar); `,-1),t("b",{class:"t02"},"// 168",-1),n(`

foo = {}; `,-1),t("b",{class:"t02"},"// Assignment to constant variable.",-1),n(`
`,-1)])]),_:1}),s[526]||(s[526]=n(`
`,-1))])]),_:1}),l(a,{title:"template literal"},{default:e(()=>[t("pre",null,[s[530]||(s[530]=n("",-1)),l(o,null,{default:e(()=>[...s[527]||(s[527]=[n("let foo = ",-1),t("b",{class:"t01"},"`",-1),n(`abc
def`,-1),t("b",{class:"t01"},"`",-1),n(`;

console.log(foo);
`,-1),t("b",{class:"t02"},`// abc
// def`,-1),n(`
`,-1)])]),_:1}),s[531]||(s[531]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[528]||(s[528]=[n(`let foo = '42';

console.log(`,-1),t("b",{class:"t01"},"`",-1),n("84",-1),t("b",{class:"t03"},"${",-1),n("foo",-1),t("b",{class:"t03"},"}",-1),n("126",-1),t("b",{class:"t01"},"`",-1),n("); ",-1),t("b",{class:"t02"},"// 8442126",-1),n(`
`,-1)])]),_:1}),s[532]||(s[532]=n(`

---

// tagged templates

`,-1)),l(o,null,{default:e(()=>[...s[529]||(s[529]=[n(`const var1 = 'var1';
const var2 = 'var2';
const `,-1),t("b",{class:"t03"},"fnc",-1),n(` = (strings, ...values) => {
  console.log(strings); `,-1),t("b",{class:"t02"},'// ["str1\\", "str2", "str3", raw: Array(3)]',-1),n(`
  console.log(strings[0]); `,-1),t("b",{class:"t02"},"// str1\\",-1),n(`
  console.log(strings[1]); `,-1),t("b",{class:"t02"},"// str2",-1),n(`
  console.log(strings[2]); `,-1),t("b",{class:"t02"},"// str3",-1),n(`
  console.log(strings.raw); `,-1),t("b",{class:"t02"},'// ["str1\\\\", "str2", "str3"]',-1),n(`
  console.log(strings.raw[0]); `,-1),t("b",{class:"t02"},"// str1\\\\",-1),n(`
  console.log(strings.raw[1]); `,-1),t("b",{class:"t02"},"// str2",-1),n(`
  console.log(strings.raw[2]); `,-1),t("b",{class:"t02"},"// str3",-1),n(`
  console.log(values); `,-1),t("b",{class:"t02"},'// ["var1", "var2"]',-1),n(`
  console.log(values[0]); `,-1),t("b",{class:"t02"},"// var1",-1),n(`
  console.log(values[1]); `,-1),t("b",{class:"t02"},"// var2",-1),n(`
}
`,-1),t("b",{class:"t03"},"fnc",-1),t("b",{class:"t01"},"`",-1),t("b",{class:"t04"},"str1\\\\${var1}str2${var2}str3",-1),t("b",{class:"t01"},"`",-1),n(`;
`,-1)])]),_:1}),s[533]||(s[533]=n(`
`,-1))])]),_:1}),l(a,{title:"symbol"},{default:e(()=>[t("pre",null,[s[539]||(s[539]=n("",-1)),l(o,null,{default:e(()=>[...s[534]||(s[534]=[n("const foo = ",-1),t("b",{class:"t01"},"Symbol(",-1),n("'42'",-1),t("b",{class:"t01"},")",-1),n(`;
const bar = `,-1),t("b",{class:"t01"},"Symbol(",-1),n("'42'",-1),t("b",{class:"t01"},")",-1),n(`;
console.log(typeof foo); `,-1),t("b",{class:"t02"},"// symbol",-1),n(`
console.log(foo === bar); `,-1),t("b",{class:"t02"},"// false // unique value",-1),n(`
console.log(typeof !!foo); `,-1),t("b",{class:"t02"},"// boolean // convert to boolean",-1),n(`
console.log(typeof new Object(bar)); `,-1),t("b",{class:"t02"},"// object // convert to object",-1),n(`
`,-1)])]),_:1}),s[540]||(s[540]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[535]||(s[535]=[n("const foo = ",-1),t("b",{class:"t01"},"Symbol(",-1),n("'42'",-1),t("b",{class:"t01"},")",-1),n(`;
const bar = `,-1),t("b",{class:"t01"},"Symbol(",-1),n("'42'",-1),t("b",{class:"t01"},")",-1),n(`;
console.log(typeof foo.toString()); `,-1),t("b",{class:"t02"},"// string // string型に変換可能",-1),n(`
console.log(typeof (bar + '')); `,-1),t("b",{class:"t02"},"// Cannot convert a Symbol value to a string // 暗黙的な変換は不可",-1),n(`
`,-1)])]),_:1}),s[541]||(s[541]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[536]||(s[536]=[n("const foo = ",-1),t("b",{class:"t01"},"Symbol(",-1),n("'42'",-1),t("b",{class:"t01"},")",-1),n(`;
console.log(typeof Number(foo)); `,-1),t("b",{class:"t02"},"// Cannot convert a Symbol value to a number // number型に変換不可",-1),n(`
`,-1)])]),_:1}),s[542]||(s[542]=n(`

---

// 定数として利用

`,-1)),l(o,null,{default:e(()=>[...s[537]||(s[537]=[n("const WINDOWS_OS = ",-1),t("b",{class:"t01"},"Symbol()",-1),n(`;
const MAC_OS = `,-1),t("b",{class:"t01"},"Symbol()",-1),n(`;
console.log(WINDOWS_OS === MAC_OS); `,-1),t("b",{class:"t02"},"// false",-1),n(`
`,-1)])]),_:1}),s[543]||(s[543]=n(`

---

// added method

`,-1)),l(o,null,{default:e(()=>[...s[538]||(s[538]=[n(`
const addedMethod = `,-1),t("b",{class:"t01"},"Symbol()",-1),n(`;

Array.prototype[addedMethod] = () => {
  console.log('run addedMethod');
};

const arr = [1, 2, 3];
arr[addedMethod]();
`,-1)])]),_:1}),s[544]||(s[544]=n(`
`,-1))])]),_:1}),l(a,{title:"destructuring assignment"},{default:e(()=>[t("pre",null,[s[555]||(s[555]=n("",-1)),l(o,null,{default:e(()=>[...s[545]||(s[545]=[n("const ",-1),t("b",{class:"t01"},"[foo, bar, baz]",-1),n(` = [42, 84];
console.log(foo); `,-1),t("b",{class:"t02"},"// 42",-1),n(`
console.log(bar); `,-1),t("b",{class:"t02"},"// 84",-1),n(`
console.log(baz); `,-1),t("b",{class:"t02"},"// undefined",-1),n(`
`,-1)])]),_:1}),s[556]||(s[556]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[546]||(s[546]=[n("const [foo, bar, ",-1),t("b",{class:"t01"},"...baz",-1),n(`] = [42, 84, 126, 168, 210];
console.log(foo); `,-1),t("b",{class:"t02"},"// 42",-1),n(`
console.log(bar); `,-1),t("b",{class:"t02"},"// 84",-1),n(`
console.log(baz); `,-1),t("b",{class:"t02"},"// [126, 168, 210]",-1),n(`
console.log(baz[0]); `,-1),t("b",{class:"t02"},"// 126",-1),n(`
console.log(typeof foo); `,-1),t("b",{class:"t02"},"// number",-1),n(`
console.log(typeof baz); `,-1),t("b",{class:"t02"},"// object",-1),n(`
`,-1)])]),_:1}),s[557]||(s[557]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[547]||(s[547]=[n("const ",-1),t("b",{class:"t01"},"{foo, bar}",-1),n(` = {foo: '42', bar: '84'};
console.log(foo); `,-1),t("b",{class:"t02"},"// 42",-1),n(`
`,-1)])]),_:1}),s[558]||(s[558]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[548]||(s[548]=[n("const {foo: ",-1),t("b",{class:"t01"},"x",-1),n(`, bar} = {foo: '42', bar: '84'};
console.log(x); `,-1),t("b",{class:"t02"},"// 42",-1),n(`
console.log(bar); `,-1),t("b",{class:"t02"},"// 84",-1),n(`
console.log(foo); `,-1),t("b",{class:"t02"},"// foo is not defined",-1),n(`
`,-1)])]),_:1}),s[559]||(s[559]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[549]||(s[549]=[n("const {foo = ",-1),t("b",{class:"t01"},"'default'",-1),n(`, bar} = {bar: '84'};
console.log(foo); `,-1),t("b",{class:"t02"},"// default",-1),n(`
console.log(bar); `,-1),t("b",{class:"t02"},"// 84",-1),n(`
`,-1)])]),_:1}),s[560]||(s[560]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[550]||(s[550]=[n(`function foo() {
  const bar = 'bar_r';
  const baz = 'baz_r';
  return `,-1),t("b",{class:"t03"},"[bar, baz]",-1),n(`;
}
const [qux, quxx] = `,-1),t("b",{class:"t01"},"foo()",-1),n(`;
console.log(qux); `,-1),t("b",{class:"t02"},"// bar_r",-1),n(`
console.log(quxx); `,-1),t("b",{class:"t02"},"// baz_r",-1),n(`
`,-1)])]),_:1}),s[561]||(s[561]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[551]||(s[551]=[n(`let foo = '42';
let bar = '84';
`,-1),t("b",{class:"t01"},"[foo, bar] = [bar, foo]",-1),n(`;
console.log(foo); `,-1),t("b",{class:"t02"},"// 84",-1),n(`
console.log(bar); `,-1),t("b",{class:"t02"},"// 42",-1),n(`
`,-1)])]),_:1}),s[562]||(s[562]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[552]||(s[552]=[n(`const obj = {
  key1: 'val1',
  key2: 'val2',
  key3: 'val3',
};

const `,-1),t("b",{class:"t01"},"{ key1, key2, key3, }",-1),n(" = ",-1),t("b",{class:"t03"},"obj",-1),n(`;

console.log(key1);
console.log(key2);
console.log(key3);
`,-1)])]),_:1}),s[563]||(s[563]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[553]||(s[553]=[n("function foo(",-1),t("b",{class:"t03"},"{v1 = 0, v2 = 0, v3 = 0}",-1),n(`) {
  return v1 + v2 + v3;
}
console.log(foo(`,-1),t("b",{class:"t01"},"{v1: 42, v2: 84}",-1),n(")); ",-1),t("b",{class:"t02"},"// 126",-1),n(`
`,-1)])]),_:1}),s[564]||(s[564]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[554]||(s[554]=[n(`const data1 = {
  v1: 42,
  v2: 84,
};
const data2 = {
  v1: 126,
  v2: 168,
};

function getV1(`,-1),t("b",{class:"t03"},"{v1}",-1),n(`) {
  console.log(v1);
}
function getV2(`,-1),t("b",{class:"t03"},"{v2}",-1),n(`) {
  console.log(v2);
}

getV1(`,-1),t("b",{class:"t01"},"data1",-1),n("); ",-1),t("b",{class:"t02"},"// 42",-1),n(`
getV1(`,-1),t("b",{class:"t01"},"data2",-1),n("); ",-1),t("b",{class:"t02"},"// 126",-1),n(`
getV2(`,-1),t("b",{class:"t01"},"data1",-1),n("); ",-1),t("b",{class:"t02"},"// 84",-1),n(`
getV2(`,-1),t("b",{class:"t01"},"data2",-1),n("); ",-1),t("b",{class:"t02"},"// 168",-1),n(`
`,-1)])]),_:1}),s[565]||(s[565]=n(`
`,-1))])]),_:1}),l(a,{title:"spread syntax"},{default:e(()=>[t("pre",null,[s[567]||(s[567]=n("",-1)),l(o,null,{default:e(()=>[...s[566]||(s[566]=[n("console.log(Math.max(42, 84, 126)); ",-1),t("b",{class:"t02"},"// 126",-1),n(`
console.log(Math.max([42, 84, 126])); `,-1),t("b",{class:"t02"},"// NaN",-1),n(`
console.log(Math.max.apply(null, [42, 84, 126])); `,-1),t("b",{class:"t02"},"// 126 // es5",-1),n(`
console.log(Math.max(`,-1),t("b",{class:"t01"},"...[42, 84, 126]",-1),n(")); ",-1),t("b",{class:"t02"},"// 126 // es6",-1),n(`
`,-1)])]),_:1}),s[568]||(s[568]=n(`
`,-1))])]),_:1}),l(a,{title:"for...of"},{default:e(()=>[t("pre",null,[s[571]||(s[571]=n(`// array

`,-1)),l(o,null,{default:e(()=>[...s[569]||(s[569]=[n(`const data = [42, 84, 126];
Array.prototype.foo = function() {};
`,-1),t("b",{class:"t01"},"for",-1),n(" (const v ",-1),t("b",{class:"t01"},"of",-1),n(` data) {
  console.log(v); `,-1),t("b",{class:"t02"},"// 42, 84, 126",-1),n(`
}
`,-1),t("b",{class:"t03"},"for",-1),n(" (const v ",-1),t("b",{class:"t03"},"in",-1),n(` data) {
  console.log(v); `,-1),t("b",{class:"t02"},"// 0, 1, 2, foo",-1),n(`
}
`,-1)])]),_:1}),s[572]||(s[572]=n(`

---

// string

`,-1)),l(o,null,{default:e(()=>[...s[570]||(s[570]=[n(`const data = 'abcdef';
`,-1),t("b",{class:"t01"},"for",-1),n(" (const v ",-1),t("b",{class:"t01"},"of",-1),n(` data) {
  console.log(v); `,-1),t("b",{class:"t02"},"// a, b, c, d, e, f",-1),n(`
}
`,-1)])]),_:1}),s[573]||(s[573]=n(`
`,-1))])]),_:1}),l(a,{title:"function"},{default:e(()=>[t("pre",null,[s[580]||(s[580]=n(`// default value

`,-1)),l(o,null,{default:e(()=>[...s[574]||(s[574]=[n("function foo(v ",-1),t("b",{class:"t01"},"= 'default'",-1),n(`) {
  console.log(v);
}
foo('bar'); `,-1),t("b",{class:"t02"},"// bar",-1),n(`
foo(); `,-1),t("b",{class:"t02"},"// default",-1),n(`
`,-1)])]),_:1}),s[581]||(s[581]=n(`

---

// variable length argument

`,-1)),l(o,null,{default:e(()=>[...s[575]||(s[575]=[n("function sum(",-1),t("b",{class:"t01"},"...args",-1),n(`) {
  let result = 0;
  for (const v of args) {
    result += v;
  }
  return result;
}
console.log(sum(42, 84, 126)); `,-1),t("b",{class:"t02"},"// 252",-1),n(`
console.log(sum(42, 84, 126, 168)); `,-1),t("b",{class:"t02"},"// 420",-1),n(`
console.log(sum(...[42, 84, 126, 168])); `,-1),t("b",{class:"t02"},"// 420",-1),n(`
console.log(sum([42, 84, 126, 168])); `,-1),t("b",{class:"t02"},"// 042, 84, 126, 168",-1),n(`
console.log(sum()); `,-1),t("b",{class:"t02"},"// 0",-1),n(`
`,-1)])]),_:1}),s[582]||(s[582]=n(`

---

// Arrow Function 1

`,-1)),l(o,null,{default:e(()=>[...s[576]||(s[576]=[n("const double1 = ",-1),t("b",{class:"t03"},"function",-1),n("(v) ",-1),t("b",{class:"t03"},"{",-1),n(`
  `,-1),t("b",{class:"t03"},"return",-1),n(` 2 * v;
`,-1),t("b",{class:"t03"},"};",-1),n(`
console.log(double1(42)); `,-1),t("b",{class:"t02"},"// 84",-1),n(`


const double2 = (v) `,-1),t("b",{class:"t01"},"=>",-1),n(` 2 * v;
console.log(double2(42)); `,-1),t("b",{class:"t02"},"// 84",-1),n(`
`,-1)])]),_:1}),s[583]||(s[583]=n(`

---

// Arrow Function 2

`,-1)),l(o,null,{default:e(()=>[...s[577]||(s[577]=[n("const sum1 = ",-1),t("b",{class:"t03"},"function(...args)",-1),n(` {
  let result = 0;
  for (const v of args) {
    result += v;
  }
  return result;
};
console.log(sum1(42, 84)); `,-1),t("b",{class:"t02"},"// 126",-1),n(`


const sum2 = `,-1),t("b",{class:"t01"},"(...args) =>",-1),n(` {
  let result = 0;
  for (const v of args) {
    result += v;
  }
  return result;
};
console.log(sum2(42, 84)); `,-1),t("b",{class:"t02"},"// 126",-1),n(`
`,-1)])]),_:1}),s[584]||(s[584]=n(`

---

// Arrow Function 3 (fixed this)

`,-1)),l(o,null,{default:e(()=>[...s[578]||(s[578]=[n(`const obj1 = {
  val: 'foo',
  mtd: function() {
    console.log(this); `,-1),t("b",{class:"t02"},'// Object {val: "foo"}',-1),n(`

    const `,-1),t("b",{class:"t03"},"_this = this;",-1),n(`
    const fnc = `,-1),t("b",{class:"t03"},"function() {",-1),n(`
      console.log(`,-1),t("b",{class:"t03"},"_this",-1),n("); ",-1),t("b",{class:"t02"},'// Object {val: "foo"}',-1),n(`
    `,-1),t("b",{class:"t03"},"};",-1),n(`
    fnc(); `,-1),t("b",{class:"t02"},"// function execution",-1),n(`
  },
};
obj1.mtd(); `,-1),t("b",{class:"t02"},"// method execution",-1),n(`


const obj2 = {
  val: 'foo',
  mtd() {
    console.log(this); `,-1),t("b",{class:"t02"},'// Object {val: "foo"}',-1),n(`

    const fnc = `,-1),t("b",{class:"t01"},"() =>",-1),n(` {
      console.log(`,-1),t("b",{class:"t01"},"this",-1),n("); ",-1),t("b",{class:"t02"},'// Object {val: "foo"}',-1),n(`
    };
    fnc(); `,-1),t("b",{class:"t02"},"// function execution",-1),n(`
  },
};
obj2.mtd(); `,-1),t("b",{class:"t02"},"// method execution",-1),n(`
`,-1)])]),_:1}),s[585]||(s[585]=n(`

---

// shortening method

`,-1)),l(o,null,{default:e(()=>[...s[579]||(s[579]=[n(`const obj = {
  mtd1: () => {
    return 'mtd1';
  },
  `,-1),t("b",{class:"t01"},"mtd2 () {",-1),n(`
    return 'mtd2';
  `,-1),t("b",{class:"t01"},"}",-1),n(`,
};
console.log(obj.mtd1()); // mtd1
console.log(obj.mtd2()); // mtd2
`,-1)])]),_:1}),s[586]||(s[586]=n(`
`,-1))])]),_:1}),l(a,{title:"object"},{default:e(()=>[t("pre",null,[s[591]||(s[591]=n(`// es6 value definition

`,-1)),l(o,null,{default:e(()=>[...s[587]||(s[587]=[n(`const foo1 = 'bar1';
const foo2 = 'bar2';
const foo3 = 'bar3';
const obj = {
  foo1,
  foo2,
  foo3,
};
console.log(obj);
`,-1)])]),_:1}),s[592]||(s[592]=n(`


// es5

`,-1)),l(o,null,{default:e(()=>[...s[588]||(s[588]=[n(`const obj = {};
obj.foo1 = 'bar1';
obj.foo2 = 'bar2';
obj.foo3 = 'bar3';
console.log(obj);
`,-1)])]),_:1}),s[593]||(s[593]=n(`

---

// es6 function definition

`,-1)),l(o,null,{default:e(()=>[...s[589]||(s[589]=[n(`const obj = {
  fnc1 () {},
  fnc2 () {},
};
console.log(obj);
`,-1)])]),_:1}),s[594]||(s[594]=n(`


// es5

`,-1)),l(o,null,{default:e(()=>[...s[590]||(s[590]=[n(`const obj = {
  fnc1: function () {},
  fnc2: function () {},
};
console.log(obj);
`,-1)])]),_:1}),s[595]||(s[595]=n(`
`,-1))])]),_:1}),l(a,{title:"class"},{default:e(()=>[t("pre",null,[s[599]||(s[599]=n("",-1)),s[600]||(s[600]=t("b",{class:"t02"},"// es6",-1)),s[601]||(s[601]=n(`

`,-1)),l(o,null,{default:e(()=>[...s[596]||(s[596]=[t("b",{class:"t01"},"class",-1),n(` Player {
  `,-1),t("b",{class:"t03"},"constructor",-1),n(`(name, gender, age) {
    `,-1),t("b",{class:"t05"},"this",-1),n(`.v1 = name;
    `,-1),t("b",{class:"t05"},"this",-1),n(`.v2 = gender;
    `,-1),t("b",{class:"t05"},"this",-1),n(`.v3 = age;
  }
  talk() {
    return 'My name is ' + this.v1 + '.\\nI\\'m ' + this.v2 + ' and ' + this.v3 + ' years old.';
  }
  attack() {
    return this.v1 + ' attacked.';
  }
}

const player1 = `,-1),t("b",{class:"t04"},"new",-1),n(` Player('Taro', 'male', 22);
const player2 = `,-1),t("b",{class:"t04"},"new",-1),n(` Player('Hana', 'female', 27);

console.log(player1.talk());
console.log(player2.talk());
console.log(player1.attack());
console.log(player2.attack());

`,-1),t("b",{class:"t02"},`// const Player = class {
//  ...
// }
//
// なども可`,-1),n(`
`,-1)])]),_:1}),s[602]||(s[602]=n(`

---

`,-1)),s[603]||(s[603]=t("b",{class:"t02"},"// es5",-1)),s[604]||(s[604]=n(`

`,-1)),l(o,null,{default:e(()=>[...s[597]||(s[597]=[n(`function Player(name, gender, age) {
  this.v1 = name;
  this.v2 = gender;
  this.v3 = age;
}
Player.prototype = {
  talk: function() {
    return 'My name is ' + this.v1 + '.\\nI\\'m ' + this.v2 + ' and ' + this.v3 + ' years old.';
  },
  attack: function() {
    return this.v1 + ' attacked.';
  }
}

var player1 = new Player('Taro', 'male', 22);
var player2 = new Player('Hana', 'female', 27);

console.log(player1.talk());
console.log(player2.talk());
console.log(player1.attack());
console.log(player2.attack());
`,-1)])]),_:1}),s[605]||(s[605]=n(`

---

`,-1)),s[606]||(s[606]=t("b",{class:"t02"},`// constructorは初期化時に実行される
// constructorも関数、ゆえに引数も使える`,-1)),s[607]||(s[607]=n(`

`,-1)),l(o,null,{default:e(()=>[...s[598]||(s[598]=[n(`
class Player {
  constructor() {
    console.log('test');
  }
}

new Player();
`,-1)])]),_:1}),s[608]||(s[608]=n(`
`,-1))])]),_:1}),l(a,{title:"class(extends)"},{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[609]||(s[609]=[t("b",{class:"t01"},"class",-1),n(` Parent {
  `,-1),t("b",{class:"t03"},"constructor",-1),n(`(...arg) {
    console.log('in Parent ', ...arg);
  }
  mtd() {
    console.log('mtd');
  }
}

`,-1),t("b",{class:"t01"},"class",-1),n(" Child ",-1),t("b",{class:"t05"},"extends",-1),n(` Parent {
  `,-1),t("b",{class:"t03"},"constructor",-1),n(`(...arg) {
    `,-1),t("b",{class:"t06"},"super",-1),n("(...arg);  ",-1),t("b",{class:"t02"},"// super calls parent constructor",-1),n(`
    console.log('in Child ', ...arg);
  }
}

const ins = `,-1),t("b",{class:"t04"},"new",-1),n(` Child('var1', 'var2');
ins.mtd();
`,-1)])]),_:1}),s[611]||(s[611]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[610]||(s[610]=[n(`class Father {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(\`My name is \${this.name}. \${this.age} years old.\`);
  }
}

class Child extends Father {
  constructor(name, age) {
    super(name, age);
  }
  talk() {
    console.log(\`My father's name is \${this.name}.\`);
  }
}

const far = new Father('Tom', '42');
const chi = new Child('Tom', '42');
far.talk();
chi.talk();
`,-1)])]),_:1}),s[612]||(s[612]=n(`
`,-1))])]),_:1}),l(a,{title:"class(static method)"},{default:e(()=>[t("pre",null,[s[614]||(s[614]=n("",-1)),l(o,null,{default:e(()=>[...s[613]||(s[613]=[n(`class Player {
  `,-1),t("b",{class:"t01"},"static",-1),n(` talk(name, gender, age) {
    return 'My name is ' + name + '.\\nI\\'m ' + gender + ' and ' + age + ' years old.';
  }
}

console.log(Player.talk('Taro', 'male', 22));
console.log(Player.talk('Hana', 'female', 27));

`,-1),t("b",{class:"t02"},"// Methods not reflected in the instance",-1),n(`

const ins = new Player();
console.log(ins);
console.log(ins.talk('Taro', 'male', 22));
`,-1),t("b",{class:"t02"},"// ins.talk is not a function",-1),n(`
`,-1)])]),_:1}),s[615]||(s[615]=n(`
`,-1))])]),_:1}),l(a,{title:"class(set, get)"},{default:e(()=>[t("pre",null,[s[617]||(s[617]=n("",-1)),l(o,null,{default:e(()=>[...s[616]||(s[616]=[n(`class Player {
  `,-1),t("b",{class:"t01"},"set",-1),n(` val(value) {
    this._val = value;
  }

  `,-1),t("b",{class:"t01"},"get",-1),n(` val() {
    return this._val;
  }
}

const ins = new Player();

ins.val = 42;

console.log(ins.val);
`,-1)])]),_:1}),s[618]||(s[618]=n(`
`,-1))])]),_:1}),l(a,{title:"iterator"},{default:e(()=>[t("pre",null,[s[620]||(s[620]=n("",-1)),l(o,null,{default:e(()=>[...s[619]||(s[619]=[n(`const arr = [1, 2, 3];

const iterator = arr`,-1),t("b",{class:"t01"},"[Symbol.iterator]()",-1),n(`;

const val1 = iterator.`,-1),t("b",{class:"t03"},"next()",-1),n(`;
console.log(val1.`,-1),t("b",{class:"t03"},"value",-1),n(`);
console.log(val1.`,-1),t("b",{class:"t03"},"done",-1),n(`);

const val2 = iterator.`,-1),t("b",{class:"t03"},"next()",-1),n(`;
console.log(val2.`,-1),t("b",{class:"t03"},"value",-1),n(`);
console.log(val2.`,-1),t("b",{class:"t03"},"done",-1),n(`);

const val3 = iterator.`,-1),t("b",{class:"t03"},"next()",-1),n(`;
console.log(val3.`,-1),t("b",{class:"t03"},"value",-1),n(`);
console.log(val3.`,-1),t("b",{class:"t03"},"done",-1),n(`);

const val4 = iterator.`,-1),t("b",{class:"t03"},"next()",-1),n(`;
console.log(val4.`,-1),t("b",{class:"t03"},"value",-1),n(`);
console.log(val4.`,-1),t("b",{class:"t03"},"done",-1),n(`);
`,-1)])]),_:1}),s[621]||(s[621]=n(`
`,-1))])]),_:1}),l(a,{title:"generator"},{default:e(()=>[t("pre",null,[s[625]||(s[625]=n("",-1)),l(o,null,{default:e(()=>[...s[622]||(s[622]=[t("b",{class:"t01"},"function*",-1),n(" generator",-1),t("b",{class:"t01"},"() {",-1),n(`
  `,-1),t("b",{class:"t04"},"yield",-1),n(` 1;
  `,-1),t("b",{class:"t04"},"yield",-1),n(` 2;
  `,-1),t("b",{class:"t04"},"yield",-1),n(` 3;
`,-1),t("b",{class:"t01"},"}",-1),n(`

const iterator = generator();

console.log(iterator.`,-1),t("b",{class:"t03"},"next().value",-1),n(`);
console.log(iterator.`,-1),t("b",{class:"t03"},"next().value",-1),n(`);
console.log(iterator.`,-1),t("b",{class:"t03"},"next().value",-1),n(`);
console.log(iterator.`,-1),t("b",{class:"t03"},"next().done",-1),n(`);
`,-1)])]),_:1}),s[626]||(s[626]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[623]||(s[623]=[t("b",{class:"t01"},"function*",-1),n(" generator",-1),t("b",{class:"t01"},"() {",-1),n(`
  `,-1),t("b",{class:"t04"},"yield",-1),n(` 1;
  `,-1),t("b",{class:"t04"},"yield",-1),n(` 2;
  `,-1),t("b",{class:"t04"},"yield",-1),n(` 3;
`,-1),t("b",{class:"t01"},"}",-1),n(`

const iterator = generator();

for (let value of iterator) {
  console.log(value);
}
`,-1)])]),_:1}),s[627]||(s[627]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[624]||(s[624]=[t("b",{class:"t01"},"function*",-1),n(" generator",-1),t("b",{class:"t01"},"() {",-1),n(`
  console.log('test1');
  `,-1),t("b",{class:"t04"},"yield",-1),n(` 1;
  console.log('test2');
  `,-1),t("b",{class:"t04"},"yield",-1),n(` 2;
  console.log('test3');
  `,-1),t("b",{class:"t04"},"yield",-1),n(` 3;
`,-1),t("b",{class:"t01"},"}",-1),n(`

const iterator = generator();

const id = setInterval(() => {
  const it = iterator.`,-1),t("b",{class:"t03"},"next()",-1),n(`;
  console.log(it.`,-1),t("b",{class:"t03"},"value",-1),n(`);

  if (it.`,-1),t("b",{class:"t03"},"done",-1),n(` === true) {
    clearInterval(id);
  }
}, 1000);
`,-1)])]),_:1}),s[628]||(s[628]=n(`
`,-1))])]),_:1}),l(a,{title:"modules"},{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[629]||(s[629]=[n(`<!doctype html>
<html>
<head>
<title>title</title>

<script `,-1),t("b",{class:"t01"},'type="module"',-1),n(">",-1),t("b",{class:"t04"},"console.log('2');",-1),n(`<\/script>

</head>
<body>

<script>`,-1),t("b",{class:"t04"},"console.log('1');",-1),n(`<\/script>

</body>
</html>`,-1)])]),_:1}),s[631]||(s[631]=n(`

---

// alerts.js

export function bringAlert(alt) {
  alert(alt);
}

// html

`,-1)),l(o,null,{default:e(()=>[...s[630]||(s[630]=[n(`<!doctype html>
<title>title</title>

<script `,-1),t("b",{class:"t01"},'type="module"',-1),n(`>
  `,-1),t("b",{class:"t03"},"import",-1),n(" {bringAlert} ",-1),t("b",{class:"t03"},"from",-1),n(` './alerts.js';
  bringAlert('test');
<\/script>
`,-1)])]),_:1}),s[632]||(s[632]=n(`
`,-1))])]),_:1}),l(a,{title:"module.exports"},{default:e(()=>[...s[633]||(s[633]=[t("pre",null,[n(`// fnc1.js

`),t("b",{class:"t01"},"module.exports = function"),n(" fnc1"),t("b",{class:"t01"},`() {
  `),n("console.log('a');"),t("b",{class:"t01"},`
};`),n(`
`),t("b",{class:"t02"},"// or"),n(`
`),t("b",{class:"t01"},`module.exports = function() {
  `),n("console.log('b');"),t("b",{class:"t01"},`
};`),n(`
`),t("b",{class:"t02"},"// or"),n(`
`),t("b",{class:"t01"},`module.exports = () => {
  `),n("console.log('c');"),t("b",{class:"t01"},`
};`),n(`

---

// main.js

`),t("b",{class:"t03"},"const"),n(" fnc1 "),t("b",{class:"t03"},"= require('"),n("./fnc/fnc1"),t("b",{class:"t03"},"');"),n(`
`),t("b",{class:"t02"},"// or"),n(`
`),t("b",{class:"t03"},"import"),n(" fnc1 "),t("b",{class:"t03"},"from '"),n("./fnc/fnc1"),t("b",{class:"t03"},"';"),n(`

fnc1();
`)],-1)])]),_:1}),l(a,{title:"export default"},{default:e(()=>[...s[634]||(s[634]=[t("pre",null,[n(`// typeFunction.js

`),t("b",{class:"t01"},`export default () => {
  `),n("console.log('a');"),t("b",{class:"t01"},`
};`),n(`

---

// typeObject.js

`),t("b",{class:"t01"},"export default"),n(),t("b",{class:"t01"},`{
  `),n("item1: 'a',"),t("b",{class:"t01"},`
  `),n("item2: 'b',"),t("b",{class:"t01"},`
};`),n(`

---

// typeClass.js

`),t("b",{class:"t01"},"export default class {"),n(`
  constructor(name, gender, age) {
    this.v1 = name;
    this.v2 = gender;
    this.v3 = age;
  }
  talk() {
    return 'My name is ' + this.v1 + '.\\nI\\'m ' + this.v2 + ' and ' + this.v3 + ' years old.';
  }
  attack() {
    return this.v1 + ' attacked.';
  }
`),t("b",{class:"t01"},"}"),n(`

---

// main.js

`),t("b",{class:"t03"},"import "),n("typeFunction"),t("b",{class:"t03"}," from '"),n("./fnc/typeFunction"),t("b",{class:"t03"},"';"),n(`
typeFunction();

`),t("b",{class:"t03"},"import "),n("typeObject"),t("b",{class:"t03"}," from '"),n("./fnc/typeObject"),t("b",{class:"t03"},"';"),n(`
console.log(typeObject);

`),t("b",{class:"t03"},"import "),n("TypeClass"),t("b",{class:"t03"}," from '"),n("./fnc/typeClass"),t("b",{class:"t03"},"';"),n(`
const ins = new TypeClass('Taro', 'male', 22);
console.log(ins.talk());
console.log(ins.attack());
`)],-1)])]),_:1}),l(a,{title:"export const, class"},{default:e(()=>[...s[635]||(s[635]=[t("pre",null,[n(`// typeFunction.js

`),t("b",{class:"t01"},"export const"),n(" fnc "),t("b",{class:"t01"},"= () => {"),n(`
  console.log('a')
`),t("b",{class:"t01"},"};"),n(`

---

// typeObject.js

`),t("b",{class:"t01"},"export const"),n(" obj "),t("b",{class:"t01"},"= {"),n(`
  item1: 'a',
  item2: 'b',
`),t("b",{class:"t01"},"};"),n(`

---

// typeClass.js

`),t("b",{class:"t01"},"export class"),n(" Cls "),t("b",{class:"t01"},"{"),n(`
  constructor(name, gender, age) {
    this.v1 = name;
    this.v2 = gender;
    this.v3 = age;
  }
  talk() {
    return 'My name is ' + this.v1 + '.\\nI\\'m ' + this.v2 + ' and ' + this.v3 + ' years old.';
  }
  attack() {
    return this.v1 + ' attacked.';
  }
`),t("b",{class:"t01"},"};"),n(`

---

// main.js

`),t("b",{class:"t03"},"import {"),n("fnc"),t("b",{class:"t03"},"} from '"),n("./fnc/typeFunction"),t("b",{class:"t03"},"';"),n(`
fnc();

`),t("b",{class:"t03"},"import {"),n("obj"),t("b",{class:"t03"},"} from '"),n("./fnc/typeObject"),t("b",{class:"t03"},"';"),n(`
console.log(obj);

`),t("b",{class:"t03"},"import {"),n("Cls"),t("b",{class:"t03"},"} from '"),n("./fnc/typeClass"),t("b",{class:"t03"},"';"),n(`
const ins = new Cls('Taro', 'male', 22);
console.log(ins.talk());
console.log(ins.attack());
`)],-1)])]),_:1}),l(a,{title:"promise"},{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[636]||(s[636]=[n("const ",-1),t("b",{class:"t03"},"promise",-1),n(" = ",-1),t("b",{class:"t01"},[n("new Promise(("),t("b",{class:"t05"},"resolve"),n(") => {")],-1),n(`
  setTimeout(() => {
    `,-1),t("b",{class:"t05"},"resolve()",-1),n(`;
  }, 2000);
});

`,-1),t("b",{class:"t03"},"promise",-1),n(".",-1),t("b",{class:"t01"},"then(() => {",-1),n(`
  console.log('then');
`,-1),t("b",{class:"t01"},"});",-1),n(`

console.log('run');
`,-1)])]),_:1}),s[642]||(s[642]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[637]||(s[637]=[n(`const foo = (point) => {
  return `,-1),t("b",{class:"t01"},[n("new Promise(("),t("b",{class:"t05"},"resolve"),n(", "),t("b",{class:"t04"},"reject"),n(") => {")],-1),n(`
    if (point > 0) {
      `,-1),t("b",{class:"t05"},"resolve(",-1),n("point",-1),t("b",{class:"t05"},")",-1),n(`;
    } else {
      `,-1),t("b",{class:"t04"},"reject()",-1),n(`;
    }
  `,-1),t("b",{class:"t01"},"})",-1),n(`;
};

`,-1),t("b",{class:"t02"},"// foo().then(func()).catch(func()).finally(func()); の形",-1),n(`
foo(50).`,-1),t("b",{class:"t01"},"then(",-1),t("b",{class:"t05"},`(point) => {
  console.log(point + ' points get. Great.')
}`,-1),t("b",{class:"t01"},")",-1),n(".",-1),t("b",{class:"t01"},"catch(",-1),t("b",{class:"t04"},`() => {
  console.log('There is no score.')
}`,-1),t("b",{class:"t01"},")",-1),n(".",-1),t("b",{class:"t01"},"finally(",-1),t("b",{class:"t06"},`() => {
  console.log('Done.')
}`,-1),t("b",{class:"t06"},")",-1),n(`;

`,-1),t("b",{class:"t02"},"// foo().then(func(), func()).finally(func()); の形",-1),n(`
foo(50).`,-1),t("b",{class:"t01"},"then(",-1),t("b",{class:"t05"},`(point) => {
  console.log(point + ' points get. Great.')
}`,-1),t("b",{class:"t01"},",",-1),t("b",{class:"t04"},` () => {
  console.log('There is no score.')
}`,-1),t("b",{class:"t01"},")",-1),n(".",-1),t("b",{class:"t01"},"finally(",-1),t("b",{class:"t06"},`() => {
  console.log('Done.')
}`,-1),t("b",{class:"t06"},")",-1),n(`;

`,-1),t("b",{class:"t03"},"console.log('1');",-1),n(),t("b",{class:"t02"},"// sync",-1),n(`
`,-1)])]),_:1}),s[643]||(s[643]=n(`

---

// syntax suger (resolve)

`,-1)),l(o,null,{default:e(()=>[...s[638]||(s[638]=[n(`const foo = (point) => {
  return `,-1),t("b",{class:"t05"},"Promise.resolve(",-1),n("point",-1),t("b",{class:"t05"},")",-1),n(`;
  `,-1),t("b",{class:"t02"},`// same as below
  // return new Promise((resolve) => {
  //   resolve(point);
  // });`,-1),n(`
};

foo(50).then((point) => {
  console.log(point + ' points get. Great.')
});
`,-1)])]),_:1}),s[644]||(s[644]=n(`

---

// syntax suger (reject)

`,-1)),l(o,null,{default:e(()=>[...s[639]||(s[639]=[n(`const foo = () => {
  return `,-1),t("b",{class:"t04"},"Promise.reject(",-1),n("new Error('err')",-1),t("b",{class:"t04"},")",-1),n(`;
};

foo(50).catch((err) => {
  console.log(err)
});
`,-1)])]),_:1}),s[645]||(s[645]=n(`

---

// promises chain

`,-1)),l(o,null,{default:e(()=>[...s[640]||(s[640]=[n(`Promise.resolve(1)
  .then(v => {
    console.log(v);
    `,-1),t("b",{class:"t01"},"return",-1),n(` v * 2;
  })
  .then(v => {
    console.log(v);
    `,-1),t("b",{class:"t01"},"return",-1),n(` v * 2;
  })
  .then(v => {
    console.log(v);
  });

  `,-1),t("b",{class:"t02"},"// can take over the value",-1),n(`
`,-1)])]),_:1}),s[646]||(s[646]=n(`

---

// all

`,-1)),l(o,null,{default:e(()=>[...s[641]||(s[641]=[n(`const arrFnc = [];
for (let i = 0; i < 5; i++) {
  const fnc = (resolve) => {
    console.log(\`fnc \${i} start\`, new Date().toLocaleTimeString());
    setTimeout(() => {
      console.log(\`fnc \${i} finish\`, new Date().toLocaleTimeString());
      resolve();
    }, 2000 * Math.random());
  };
  arrFnc.push(fnc)
}

console.log(arrFnc);

const arrPromise = arrFnc.map((fnc) => `,-1),t("b",{class:"t03"},"new Promise(",-1),n("fnc",-1),t("b",{class:"t03"},")",-1),n(`);

console.log(arrPromise);

`,-1),t("b",{class:"t01"},"Promise.all(",-1),n("arrPromise",-1),t("b",{class:"t01"},").then(() => {",-1),n(`
  console.log('finish');
`,-1),t("b",{class:"t01"},"})",-1),n(`;
`,-1)])]),_:1}),s[647]||(s[647]=n(`
`,-1))])]),_:1}),l(a,{title:"async"},{default:e(()=>[t("pre",null,[s[654]||(s[654]=n(`// resolve (form 1)

`,-1)),l(o,null,{default:e(()=>[...s[648]||(s[648]=[n("const foo = ",-1),t("b",{class:"t01"},"async",-1),n(` () => {
  `,-1),t("b",{class:"t01"},"return",-1),n(` '2';
}

foo().`,-1),t("b",{class:"t05"},"then(v => {",-1),n(`
  console.log(v);
`,-1),t("b",{class:"t05"},"})",-1),n(`;

console.log('1'); `,-1),t("b",{class:"t02"},"// sync",-1),n(`
`,-1)])]),_:1}),s[655]||(s[655]=n(`

---

// resolve (form 2)

`,-1)),l(o,null,{default:e(()=>[...s[649]||(s[649]=[t("b",{class:"t01"},"async function",-1),n(` foo () {
  `,-1),t("b",{class:"t01"},"return",-1),n(` '2';
}

foo().`,-1),t("b",{class:"t05"},"then(v => {",-1),n(`
  console.log(v);
`,-1),t("b",{class:"t05"},"})",-1),n(`;

console.log('1'); `,-1),t("b",{class:"t02"},"// sync",-1),n(`
`,-1)])]),_:1}),s[656]||(s[656]=n(`

---

// reject

`,-1)),l(o,null,{default:e(()=>[...s[650]||(s[650]=[n("const foo = ",-1),t("b",{class:"t01"},"async",-1),n(` () => {
  `,-1),t("b",{class:"t01"},"return Promise.reject(new Error(",-1),n("'err'",-1),t("b",{class:"t01"},"))",-1),n(`;
}

foo().`,-1),t("b",{class:"t04"},"catch(err => {",-1),n(`
  console.log(err);
`,-1),t("b",{class:"t04"},"})",-1),n(`;
`,-1)])]),_:1}),s[657]||(s[657]=n(`

---

// throw

`,-1)),l(o,null,{default:e(()=>[...s[651]||(s[651]=[n("const foo = ",-1),t("b",{class:"t01"},"async",-1),n(` () => {
  `,-1),t("b",{class:"t01"},"throw new Error(",-1),n("'err'",-1),t("b",{class:"t01"},")",-1),n(`;
}

foo().`,-1),t("b",{class:"t04"},"catch(err => {",-1),n(`
  console.log(err);
`,-1),t("b",{class:"t04"},"})",-1),n(`;
`,-1)])]),_:1}),s[658]||(s[658]=n(`

---

// await

`,-1)),l(o,null,{default:e(()=>[...s[652]||(s[652]=[n(`const ins = () => {
  return new Promise((resolve) => {
    console.log('1');
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}
const main = async () => {
  `,-1),t("b",{class:"t01"},"await",-1),n(` ins().then(() => {
    console.log('2');
  });
  `,-1),t("b",{class:"t02"},"// await stops the subsequent processing until the execution of the promise instance.",-1),n(`
  `,-1),t("b",{class:"t02"},"// await can only be used inside an async function.",-1),n(`
  `,-1),t("b",{class:"t02"},"// if await is removed, the execution order becomes 1=>3=>2.",-1),n(`
  console.log('3');
}
main();
`,-1)])]),_:1}),s[659]||(s[659]=n(`

---

// serial processing

`,-1)),l(o,null,{default:e(()=>[...s[653]||(s[653]=[n(`run();

async function run() {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('1', new Date().toLocaleTimeString());
      resolve();
    }, 2000);
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('2', new Date().toLocaleTimeString());
      resolve();
    }, 2000);
  });
}
`,-1)])]),_:1}),s[660]||(s[660]=n(`
`,-1))])]),_:1}),l(a,{title:"fetch"},{default:e(()=>[...s[661]||(s[661]=[t("pre",null,[n(`// text

async function fnc() {
  const file = await `),t("b",{class:"t01"},"fetch("),n("'sample.txt'"),t("b",{class:"t01"},")"),n(`;
  console.log(file);
  const text = await file.`),t("b",{class:"t03"},"text()"),n(`;
  console.log(text);
};

fnc();


---

// json

async function fnc() {
  const file = await `),t("b",{class:"t01"},"fetch("),n("'sample.json'"),t("b",{class:"t01"},")"),n(`;
  console.log(file);
  const json = await file.`),t("b",{class:"t03"},"json()"),n(`;
  console.log(json);
};

fnc();


---

// xml

async function fnc() {
  const file = await `),t("b",{class:"t01"},"fetch("),n("'sample.xml'"),t("b",{class:"t01"},")"),n(`;
  console.log(file);
  const text = await file.`),t("b",{class:"t03"},"text()"),n(`;
  console.log(text);
  const xml = `),t("b",{class:"t04"},"new DOMParser().parseFromString(text, 'application/xml')"),n(`;
  console.log(xml);
};

fnc();


---

// jpg

async function fnc() {
  const file = await `),t("b",{class:"t01"},"fetch("),n("'sample.jpg'"),t("b",{class:"t01"},")"),n(`;
  console.log(file);
  const blob = await file.`),t("b",{class:"t03"},"blob()"),n(`;
  console.log(blob);
  const image = new Image();
  image.src = URL.createObjectURL(blob);
  document.querySelector('body').appendChild(image);
};

fnc();

`)],-1)])]),_:1}),l(a,{title:"setInterval"},{default:e(()=>[t("pre",null,[s[663]||(s[663]=n("",-1)),l(o,null,{default:e(()=>[...s[662]||(s[662]=[n(`let num = 0;

const count = () => {
  console.log(num++);
}

const `,-1),t("b",{class:"t04"},"id",-1),n(" = ",-1),t("b",{class:"t01"},"setInterval(() => {",-1),n(`
  count();
  if (num >= 10) {
    `,-1),t("b",{class:"t03"},"clearInterval(",-1),t("b",{class:"t04"},"id",-1),t("b",{class:"t03"},")",-1),n(`;
  }
`,-1),t("b",{class:"t01"},"},",-1),n(" 500",-1),t("b",{class:"t01"},");",-1),n(`
`,-1)])]),_:1}),s[664]||(s[664]=n(`
`,-1))])]),_:1}),l(a,{title:"cookie"},{default:e(()=>[t("pre",null,[s[666]||(s[666]=n("",-1)),l(o,null,{default:e(()=>[...s[665]||(s[665]=[t("b",{class:"t02"},"// set",-1),n(`
`,-1),t("b",{class:"t01"},"document.cookie",-1),n(` = 'data1=foo1';
`,-1),t("b",{class:"t01"},"document.cookie",-1),n(` = 'data2=foo2';
`,-1),t("b",{class:"t01"},"document.cookie",-1),n(` = 'data3=' + encodeURIComponent('foo3 foo3');
`,-1),t("b",{class:"t01"},"document.cookie",-1),n(` = 'data4=foo4';
console.log(`,-1),t("b",{class:"t01"},"document.cookie",-1),n(`);

`,-1),t("b",{class:"t02"},"// parse",-1),n(`
const parse = function() {
  const r = document.cookie.split(';');
  let cookies = {};
  for (let i = 0; i < r.length; i++) {
    cookies[r[i].split('=')[0].trim()] = r[i].split('=')[1];
  }
  console.log(cookies);
}
parse();

`,-1),t("b",{class:"t02"},"// delete",-1),n(`
document.cookie = 'data4=foo4; max-age=2'; // Until 2 second
console.log(document.cookie);
window.setTimeout(function() {
  console.log(document.cookie);
  parse();
}, 2000);

`,-1),t("b",{class:"t02"},"// expires",-1),n(`
let date = new Date('2068/7/31 14:14');
document.cookie = \`data5=foo5; expires=\${date.toUTCString()}\`; // Until the date

`,-1),t("b",{class:"t02"},"// search",-1),n(`
console.log(document.cookie.indexOf('data2'));
console.log(document.cookie.indexOf('foo3'));
console.log(document.cookie.indexOf('nothing'));
`,-1)])]),_:1}),s[667]||(s[667]=n(`
`,-1))])]),_:1}),l(a,{title:"localStrage"},{default:e(()=>[t("pre",null,[s[669]||(s[669]=n("",-1)),l(o,null,{default:e(()=>[...s[668]||(s[668]=[n(`<!doctype html>
<title>localStorage</title>

<div id="output"></div>
<input type="button" value="reload" onclick="location.reload()">
<input type="button" value="clear" onclick="clearCount()">

<script>
let view = `,-1),t("b",{class:"t01"},"localStorage.getItem(",-1),n("'view_count'",-1),t("b",{class:"t01"},")",-1),n(`;
const output = document.querySelector('#output');

const writeCount = (times) => {
  output.innerHTML = document.createTextNode(times).nodeValue;
}

const clearCount = () => {
  `,-1),t("b",{class:"t01"},"localStorage.clear()",-1),n(`;
  writeCount('view: ' + 0 + ' times.');
}

if ('localStorage' in window) {
  view = !view ? 0 : Number(view) + 1;
  `,-1),t("b",{class:"t01"},"localStorage.setItem(",-1),n("'view_count', view",-1),t("b",{class:"t01"},")",-1),n(`;
  writeCount('view: ' + view + ' times.');
} else {
  writeCount('LocalStorage is not supported on this browser.');
}
<\/script>

`,-1),t("b",{class:"t02"},"// その他、length, key(n), removeItem など",-1),n(`
`,-1)])]),_:1}),s[670]||(s[670]=n(`

---

`,-1))])]),_:1}),l(a,{title:"random"},{default:e(()=>[t("pre",null,[s[672]||(s[672]=n("",-1)),l(o,null,{default:e(()=>[...s[671]||(s[671]=[n("console.log(",-1),t("b",{class:"t01"},"Math.random()",-1),n(`);

console.log(new Uint16Array(10));
console.log(crypto.getRandomValues(new Uint16Array(10)));
console.log(crypto.getRandomValues(new Uint16Array(10)).join(''));
`,-1)])]),_:1}),s[673]||(s[673]=n(`
`,-1))])]),_:1}),l(a,{title:"trigonometric function"},{default:e(()=>[t("pre",null,[s[675]||(s[675]=n("",-1)),l(o,null,{default:e(()=>[...s[674]||(s[674]=[n(`<!doctype html>
<title>title</title>
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
<style>
.point {
  content: '';
  width: 20px;
  height: 20px;
  position: absolute;
  background: #f00;
  border-radius: 10px;
}
</style>

<div class="point"></div>

<script>
const point = document.querySelector('.point');
const radius = 100;
let degree = 0;

const draw = () => {
  const radian = (degree * `,-1),t("b",{class:"t01"},"Math.PI",-1),n(`) / 180;
  const posX = window.innerWidth / 2 + radius * `,-1),t("b",{class:"t01"},"Math.cos(",-1),n("radian",-1),t("b",{class:"t01"},")",-1),n(`;
  const posY = window.innerHeight / 2 + radius * `,-1),t("b",{class:"t01"},"Math.sin(",-1),n("radian",-1),t("b",{class:"t01"},")",-1),n(`;
  point.style.left = \`\${posX}px\`;
  point.style.top = \`\${posY}px\`;
  degree += 1;
}

const id = setInterval(() => {
  draw();
}, 10);
<\/script>
`,-1)])]),_:1}),s[676]||(s[676]=n(`

---

`,-1))])]),_:1}),l(a,{title:"converting url parameters"},{default:e(()=>[t("pre",null,[s[678]||(s[678]=n("",-1)),l(o,null,{default:e(()=>[...s[677]||(s[677]=[n(`const url = 'http://3300.me?a=111&b=222&c=333';
const obj = {};

const arr = url.split(/&|\\?/).filter((value) => { return value.includes('='); });

arr.forEach((parameter) => {
  const parameterList = parameter.split('=');
  const key = parameterList[0];
  const value = decodeURIComponent(parameterList[1]);
  obj[key] = value;
});

console.log(arr);
console.log(obj);
`,-1)])]),_:1}),s[679]||(s[679]=n(`
`,-1))])]),_:1}),l(a,{title:"padStart"},{default:e(()=>[t("pre",null,[s[681]||(s[681]=n("",-1)),l(o,null,{default:e(()=>[...s[680]||(s[680]=[n("console.log('1'.",-1),t("b",{class:"t01"},"padStart(",-1),n("2, '0'",-1),t("b",{class:"t01"},")",-1),n(`);
console.log('11'.`,-1),t("b",{class:"t01"},"padStart(",-1),n("2, '0'",-1),t("b",{class:"t01"},")",-1),n(`);
`,-1)])]),_:1}),s[682]||(s[682]=n(`
`,-1))])]),_:1}),l(a,{title:"encode/decode"},{default:e(()=>[t("pre",null,[s[684]||(s[684]=n("",-1)),l(o,null,{default:e(()=>[...s[683]||(s[683]=[n("console.log(",-1),t("b",{class:"t01"},"encodeURI(",-1),n("'https://3300.me/日本語.html'",-1),t("b",{class:"t01"},")",-1),n(`);
console.log(`,-1),t("b",{class:"t01"},"encodeURIComponent(",-1),n("'https://3300.me/日本語.html'",-1),t("b",{class:"t01"},")",-1),n(`);

console.log(`,-1),t("b",{class:"t01"},"decodeURI(",-1),n("'https://3300.me/%E6%97%A5%E6%9C%AC%E8%AA%9E.html'",-1),t("b",{class:"t01"},")",-1),n(`);
console.log(`,-1),t("b",{class:"t01"},"decodeURIComponent(",-1),n("'https%3A%2F%2F3300.me%2F%E6%97%A5%E6%9C%AC%E8%AA%9E.html'",-1),t("b",{class:"t01"},")",-1),n(`);
`,-1)])]),_:1}),s[685]||(s[685]=n(`
`,-1))])]),_:1}),l(a,{title:"reduce"},{default:e(()=>[t("pre",null,[s[688]||(s[688]=n("",-1)),l(o,null,{default:e(()=>[...s[686]||(s[686]=[n(`const numbers = [1, 2, 3, 4, 5];

const result = numbers.`,-1),t("b",{class:"t01"},`reduce((accumlate, num, i) => {
  console.log('accumlate: ' + accumlate);
  console.log('num: ' + num);
  console.log('i: ' + i);
  console.log('-----');
  return accumlate + num;
});`,-1),n(`

console.log('result: ' + result);
`,-1)])]),_:1}),s[689]||(s[689]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[687]||(s[687]=[n(`const makeHtml = (strings, ...values) => {
  return strings.`,-1),t("b",{class:"t01"},"reduce((accumlate, str, i) => {",-1),n(`
    console.log('accumlate: ' + accumlate);
    console.log('values[i - 1]: ' + values[i - 1]);
    console.log('str: ' + str);
    console.log('i: ' + i);
    console.log('-----');
    return accumlate + values[i - 1] + str;
  `,-1),t("b",{class:"t01"},"})",-1),n(`;
};

const val1 = 'val1';
const val2 = 'val2';
const result = makeHtml\`<ul>
  <li>\${val1}</li>
  <li>\${val2}</li>
</ul>\`;

console.log('result: ' + result);
`,-1)])]),_:1}),s[690]||(s[690]=n(`
`,-1))])]),_:1}),l(a,{title:"assign"},{default:e(()=>[t("pre",null,[s[692]||(s[692]=n("",-1)),l(o,null,{default:e(()=>[...s[691]||(s[691]=[n(`const obj1 = {
  key1: 'val1',
  key2: 'val2',
  key3: 'val3',
}

const obj2 = obj1;
const obj3 = `,-1),t("b",{class:"t01"},"Object.assign({},",-1),n(" obj1",-1),t("b",{class:"t01"},")",-1),n("; ",-1),t("b",{class:"t02"},"// same 'const obj3 = {...obj1};'",-1),n(`

obj1['key1'] = 'rewrite';

console.log(obj2);
console.log(obj3);
`,-1)])]),_:1}),s[693]||(s[693]=n(`
`,-1))])]),_:1}),l(a,{title:"split assignment"},{default:e(()=>[t("pre",null,[s[695]||(s[695]=n("",-1)),l(o,null,{default:e(()=>[...s[694]||(s[694]=[n(`const obj1 = {
  key1: 'val1',
  key2: 'val2',
  key3: 'val3',
}

const `,-1),t("b",{class:"t01"},"{",-1),n(" key1, key2, key3 ",-1),t("b",{class:"t01"},"} =",-1),n(` obj1;

console.log(key1);
console.log(key2);
console.log(key3);
`,-1)])]),_:1}),s[696]||(s[696]=n(`
`,-1))])]),_:1}),l(a,{title:"freeze"},{default:e(()=>[t("pre",null,[s[698]||(s[698]=n("",-1)),l(o,null,{default:e(()=>[...s[697]||(s[697]=[n(`const obj1 = {
  key1: 'val1',
  key2: 'val2',
  key3: 'val3',
}

obj1.key1 = 'rewrite1';
console.log(obj1);
console.log(`,-1),t("b",{class:"t03"},"Object.isFrozen(",-1),n("obj1",-1),t("b",{class:"t03"},")",-1),n(`);

`,-1),t("b",{class:"t01"},"Object.freeze(",-1),n("obj1",-1),t("b",{class:"t01"},")",-1),n(`;

obj1.key1 = 'rewrite2';
console.log(obj1);
console.log(`,-1),t("b",{class:"t03"},"Object.isFrozen(",-1),n("obj1",-1),t("b",{class:"t03"},")",-1),n(`);

`,-1),t("b",{class:"t02"},`// Object.seal(obj1);
// Object.preventExtensions(obj1);`,-1),n(`
`,-1)])]),_:1}),s[699]||(s[699]=n(`
`,-1))])]),_:1}),l(a,{title:"date"},{default:e(()=>[t("pre",null,[s[701]||(s[701]=n("",-1)),l(o,null,{default:e(()=>[...s[700]||(s[700]=[n("const date = ",-1),t("b",{class:"t01"},"new Date()",-1),n(`;

const hour = date.`,-1),t("b",{class:"t03"},"getHours()",-1),n(`;
const minutes = date.`,-1),t("b",{class:"t03"},"getMinutes()",-1),n(`;
const seconds = date.`,-1),t("b",{class:"t03"},"getSeconds()",-1),n(";\nconsole.log(`${hour}時${minutes}分${seconds}秒`);\n\nconsole.log(date.",-1),t("b",{class:"t03"},"toLocaleDateString()",-1),n(`);
console.log(date.`,-1),t("b",{class:"t03"},"toLocaleTimeString()",-1),n(`);

console.log(Date.`,-1),t("b",{class:"t04"},"parse(",-1),n("'2010/01/01'",-1),t("b",{class:"t04"},")",-1),n(`);
console.log(Date.`,-1),t("b",{class:"t04"},"now(",-1),n("'2010/01/01'",-1),t("b",{class:"t04"},")",-1),n(`);
`,-1)])]),_:1}),s[702]||(s[702]=n(`
`,-1))])]),_:1}),l(a,{title:"online"},{default:e(()=>[t("pre",null,[s[705]||(s[705]=n("",-1)),l(o,null,{default:e(()=>[...s[703]||(s[703]=[n("const isOnline = navigator.",-1),t("b",{class:"t01"},"onLine",-1),n(`;

if (isOnline) {
  console.log('online');
} else {
  console.log('offline');
}
`,-1)])]),_:1}),s[706]||(s[706]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[704]||(s[704]=[n(`window.addEventListener('online', () => {
  console.log('onLine');
});

window.addEventListener('offline', () => {
  console.log('offLine');
});
`,-1)])]),_:1}),s[707]||(s[707]=n(`
`,-1))])]),_:1}),l(a,{title:"dispatchEvent"},{default:e(()=>[t("pre",null,[s[709]||(s[709]=n("",-1)),l(o,null,{default:e(()=>[...s[708]||(s[708]=[n(`<!doctype html>
<title>title</title>

<button class="trigger">click</button>

<script>
const btn = document.querySelector('.trigger');

btn.addEventListener('click', () => {
  console.log('clicked');
});

setTimeout(() => {
  btn.`,-1),t("b",{class:"t01"},[n("dispatchEvent("),t("b",{class:"t03"},"new Event('click')"),n(")")],-1),n(`;
}, 3000);
<\/script>
`,-1)])]),_:1}),s[710]||(s[710]=n(`
`,-1))])]),_:1}),l(a,{title:"insertAdjacentHTML"},{default:e(()=>[t("pre",null,[s[712]||(s[712]=n("",-1)),l(o,null,{default:e(()=>[...s[711]||(s[711]=[n(`<!doctype html>
<title>title</title>

<style>
.target {
  border: #000 1px solid;
}
</style>

<div class="target">target</div>

<script>
const target = document.querySelector('.target');

target.`,-1),t("b",{class:"t01"},[n("insertAdjacentHTML("),t("b",{class:"t03"},"'beforebegin'")],-1),n(", `<div>beforebegin</div>`",-1),t("b",{class:"t01"},")",-1),n(`;
target.`,-1),t("b",{class:"t01"},[n("insertAdjacentHTML("),t("b",{class:"t03"},"'afterbegin'")],-1),n(", `<div>afterbegin</div>`",-1),t("b",{class:"t01"},")",-1),n(`;
target.`,-1),t("b",{class:"t01"},[n("insertAdjacentHTML("),t("b",{class:"t03"},"'beforeend'")],-1),n(", `<div>beforeend</div>`",-1),t("b",{class:"t01"},")",-1),n(`;
target.`,-1),t("b",{class:"t01"},[n("insertAdjacentHTML("),t("b",{class:"t03"},"'afterend'")],-1),n(", `<div>afterend</div>`",-1),t("b",{class:"t01"},")",-1),n(`;
<\/script>
`,-1)])]),_:1}),s[713]||(s[713]=n(`
`,-1))])]),_:1}),l(a,{title:"FileReader"},{default:e(()=>[t("pre",null,[s[716]||(s[716]=n(`// text

`,-1)),l(o,null,{default:e(()=>[...s[714]||(s[714]=[n(`<!doctype html>
<title>title</title>

<input type="file" class="file" accept=".txt">
<p class="text"></p>

<script>
const input = document.querySelector('.file');
const text = document.querySelector('.text');

input.addEventListener('input', (ev) => {
  const file = ev.target.files[0];
  const reader = `,-1),t("b",{class:"t01"},"new FileReader()",-1),n(`;

  reader.addEventListener('load', () => {
    text.textContent = reader.result;
  });

  reader.readAsText(file);
});
<\/script>
`,-1)])]),_:1}),s[717]||(s[717]=n(`

---

// img

`,-1)),l(o,null,{default:e(()=>[...s[715]||(s[715]=[n(`<!doctype html>
<title>title</title>

<input type="file" class="file" accept=".png, .jpg">
<p class="img"><img style="width: 100%;"></p>

<script>
const input = document.querySelector('.file');
const img = document.querySelector('.img img');

input.addEventListener('input', (ev) => {
  const file = ev.target.files[0];
  const reader = `,-1),t("b",{class:"t01"},"new FileReader()",-1),n(`;

  reader.addEventListener('load', () => {
    img.src = reader.result;
  });

  reader.readAsDataURL(file);
});
<\/script>
`,-1)])]),_:1}),s[718]||(s[718]=n(`
`,-1))])]),_:1}),l(a,{title:"slider"},{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[719]||(s[719]=[n(`<!doctype html>
<title>title</title>

<input type="range" class="slider" min="0" max="100" value="50">
<p class="value">50</p>

<script>
const slider = document.querySelector('.slider');
const score = document.querySelector('.value');

slider.addEventListener('input', handleChange);

function handleChange(ev) {
  const value = ev.target.value;
  score.innerHTML = value;
};
<\/script>
`,-1)])]),_:1}),s[720]||(s[720]=n(`
`,-1))])]),_:1}),l(a,{title:"transitionend"},{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[721]||(s[721]=[n(`<!doctype html>
<title>title</title>

<div class="square"></div>

<style>
.square {
  width: 100px;
  height: 100px;
  background: #f00;
  transition: all 2s;
}
.square:hover {
  width: 300px;
}
</style>

<script>
const sq = document.querySelector('.square');

sq.addEventListener(`,-1),t("b",{class:"t01"},"'transitionend'",-1),n(`, changeColor);

function changeColor(ev) {
  ev.target.style.backgroundColor = '#0f0';
};
<\/script>
`,-1)])]),_:1}),s[722]||(s[722]=n(`
`,-1))])]),_:1}),l(a,{title:"animation events"},{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[723]||(s[723]=[n(`<!doctype html>
<title>title</title>

<div class="square"></div>

<style>
.square {
  width: 100px;
  height: 100px;
  background: #f00;
}
.square:hover {
  animation: infinite 1s rotate;
  `,-1),t("b",{class:"t02"},"// animation: 1s rotate; // no iteration",-1),n(`
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script>
const sq = document.querySelector('.square');

sq.addEventListener(`,-1),t("b",{class:"t01"},"'animationstart'",-1),n(`, changeColor1);
sq.addEventListener(`,-1),t("b",{class:"t01"},"'animationiteration'",-1),n(`, changeColor2);
sq.addEventListener(`,-1),t("b",{class:"t01"},"'animationend'",-1),n(`, changeColor3);

function changeColor1(ev) {
  ev.target.style.backgroundColor = '#0f0';
};
function changeColor2(ev) {
  ev.target.style.backgroundColor = '#00f';
};
function changeColor3(ev) {
  ev.target.style.backgroundColor = '#000';
};
<\/script>
`,-1)])]),_:1}),s[724]||(s[724]=n(`
`,-1))])]),_:1}),l(a,{title:"map"},{default:e(()=>[t("pre",null,[s[726]||(s[726]=n("",-1)),l(o,null,{default:e(()=>[...s[725]||(s[725]=[n("const map = ",-1),t("b",{class:"t01"},"new Map()",-1),n(`;

map.`,-1),t("b",{class:"t03"},"set(",-1),n("'key1', 'val1'",-1),t("b",{class:"t03"},")",-1),n(`;
map.`,-1),t("b",{class:"t03"},"set(",-1),n("'key2', 'val2'",-1),t("b",{class:"t03"},")",-1),n(`;

console.log(map);
console.log(map.`,-1),t("b",{class:"t03"},"size",-1),n(`);
console.log(map.`,-1),t("b",{class:"t03"},"get(",-1),n("'key1'",-1),t("b",{class:"t03"},")",-1),n(`);
console.log(map.`,-1),t("b",{class:"t03"},"has(",-1),n("'key1'",-1),t("b",{class:"t03"},")",-1),n(`);
console.log(map.`,-1),t("b",{class:"t03"},"keys()",-1),n(`);
console.log(map.`,-1),t("b",{class:"t03"},"values()",-1),n(`);
console.log(map.`,-1),t("b",{class:"t03"},"entries()",-1),n(`);
map.forEach((value, key) => {
  console.log(value, key);
});
map.`,-1),t("b",{class:"t03"},"delete(",-1),n("'key1'",-1),t("b",{class:"t03"},")",-1),n(`;
console.log(map);
map.`,-1),t("b",{class:"t03"},"clear()",-1),n(`;
console.log(map);
`,-1)])]),_:1}),s[727]||(s[727]=n(`
`,-1))])]),_:1}),l(a,{title:"set"},{default:e(()=>[t("pre",null,[s[729]||(s[729]=n("",-1)),l(o,null,{default:e(()=>[...s[728]||(s[728]=[n("const set = ",-1),t("b",{class:"t01"},"new Set()",-1),n(`;

set.`,-1),t("b",{class:"t03"},"add(",-1),n("'val1'",-1),t("b",{class:"t03"},")",-1),n(`;
set.`,-1),t("b",{class:"t03"},"add(",-1),n("'val2'",-1),t("b",{class:"t03"},")",-1),n(`;
set.`,-1),t("b",{class:"t03"},"add(",-1),n("'val2'",-1),t("b",{class:"t03"},")",-1),n(`;
set.`,-1),t("b",{class:"t03"},"add(",-1),n("'val2'",-1),t("b",{class:"t03"},")",-1),n(`;
set.`,-1),t("b",{class:"t03"},"add(",-1),n("'val3'",-1),t("b",{class:"t03"},")",-1),n(`;

console.log(set);
console.log(set.`,-1),t("b",{class:"t03"},"size",-1),n(`);
console.log(set.`,-1),t("b",{class:"t03"},"has(",-1),n("'val1'",-1),t("b",{class:"t03"},")",-1),n(`);
console.log(set.`,-1),t("b",{class:"t03"},"values()",-1),n(`);
set.forEach((value) => {
  console.log(value);
});
set.`,-1),t("b",{class:"t03"},"delete(",-1),n("'val1'",-1),t("b",{class:"t03"},")",-1),n(`;
console.log(set);
set.`,-1),t("b",{class:"t03"},"clear()",-1),n(`;
console.log(set);
`,-1)])]),_:1}),s[730]||(s[730]=n(`
`,-1))])]),_:1}),l(a,{title:"layerX/layerY"},{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[731]||(s[731]=[n(`<!doctype html>
<title>title</title>

<div>x: <span class="x"></span></div>
<div>y: <span class="y"></span></div>

<script>
const x = document.querySelector('.x');
const y = document.querySelector('.y');

window.addEventListener('mousemove', (ev) => {
  x.innerHTML = ev.`,-1),t("b",{class:"t01"},"layerX",-1),n(`;
  y.innerHTML = ev.`,-1),t("b",{class:"t01"},"layerY",-1),n(`;
});
<\/script>
`,-1)])]),_:1}),s[732]||(s[732]=n(`
`,-1))])]),_:1}),l(a,{title:"blob"},{default:e(()=>[t("pre",null,[s[734]||(s[734]=n("",-1)),l(o,null,{default:e(()=>[...s[733]||(s[733]=[n(`<!doctype html>
<title>title</title>

<div class="result"></div>

<script>
const blob = `,-1),t("b",{class:"t01"},"new Blob(",-1),n(`['abcde', 'fghij'], { type: "text/plain" }`,-1),t("b",{class:"t01"},")",-1),n(`;
const a = document.createElement('a');
a.href = `,-1),t("b",{class:"t03"},"URL.createObjectURL(",-1),n("blob",-1),t("b",{class:"t03"},")",-1),n(`;
a.download = 'textfile.txt';
a.innerText = 'download';
const result = document.querySelector('.result');
result.appendChild(a);
<\/script>
`,-1)])]),_:1}),s[735]||(s[735]=n(`
`,-1))])]),_:1}),l(a,{title:"svg"},{default:e(()=>[t("pre",null,[s[738]||(s[738]=n(`// draw

`,-1)),l(o,null,{default:e(()=>[...s[736]||(s[736]=[n(`<!doctype html>
<title>title</title>

<svg viewBox="0 0 200 200" width="200" height="200" class="mySvg"></svg>

<script>
const myCircle = document.`,-1),t("b",{class:"t01"},"createElementNS(",-1),n("'http://www.w3.org/2000/svg', 'circle'",-1),t("b",{class:"t01"},")",-1),n(`;

myCircle.setAttribute('cx', '100');
myCircle.setAttribute('cy', '100');
myCircle.setAttribute('r', '100');
myCircle.setAttribute('fill', '#ff0000');
myCircle.setAttribute('fill-opacity', '0.5');

const mySvg = document.querySelector('.mySvg');

mySvg.appendChild(myCircle);
<\/script>
`,-1)])]),_:1}),s[739]||(s[739]=n(`

---

// animation

`,-1)),l(o,null,{default:e(()=>[...s[737]||(s[737]=[n(`<!doctype html>
<title>title</title>

<svg viewBox="0 0 200 200" width="200" height="200">
  <circle class="myCircle" cx="100" cy="100" r="100" fill="#ff0000"></circle>
</svg>

<script>
const myCircle = document.querySelector('.myCircle');
let time = 0;

`,-1),t("b",{class:"t01"},"const animate = () => {",-1),n(`
  time += 0.5;

  myCircle.style.fill = \`hsl(0, 100%, \${time}%)\`;

  if (time < 50) {
    `,-1),t("b",{class:"t03"},[n("requestAnimationFrame("),t("b",{class:"t01"},"animate"),n(")")],-1),n(`;
  }
`,-1),t("b",{class:"t01"},"}",-1),n(`;

animate();
<\/script>
`,-1)])]),_:1}),s[740]||(s[740]=n(`
`,-1))])]),_:1}),l(a,{title:"scroll"},{default:e(()=>[t("pre",null,[s[742]||(s[742]=n("",-1)),l(o,null,{default:e(()=>[...s[741]||(s[741]=[n(`<div style="width:9999px;height:9999px;"><span style="position:fixed;"></span></div>

<script>
const span = document.querySelector('span');
window.addEventListener(`,-1),t("b",{class:"t01"},"'scroll'",-1),n(`, () => {
  span.innerHTML = window.`,-1),t("b",{class:"t03"},"scrollX",-1),n(" + '<br>' + window.",-1),t("b",{class:"t03"},"scrollY",-1),n(`;
});
<\/script>
`,-1)])]),_:1}),s[743]||(s[743]=n(`
`,-1))])]),_:1}),l(a,{title:"selectstart"},{default:e(()=>[t("pre",null,[s[745]||(s[745]=n("",-1)),l(o,null,{default:e(()=>[...s[744]||(s[744]=[n(`<div class="foo">focus</div>

<script>
document.querySelector('.foo').addEventListener(`,-1),t("b",{class:"t01"},"'selectstart'",-1),n(`, () => {
  console.log('selected text');
});
<\/script>
`,-1)])]),_:1}),s[746]||(s[746]=n(`
`,-1))])]),_:1}),l(a,{title:"touch"},{default:e(()=>[t("pre",null,[s[749]||(s[749]=n("",-1)),l(o,null,{default:e(()=>[...s[747]||(s[747]=[n(`<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
<div style="width:100%;height:100%;"></div>

<script>
document.querySelector('div').addEventListener(`,-1),t("b",{class:"t01"},"'touchstart'",-1),n(`, (ev) => {
  ev.target.innerHTML = 'touchstart';
});
document.querySelector('div').addEventListener(`,-1),t("b",{class:"t01"},"'touchmove'",-1),n(`, (ev) => {
  ev.target.innerHTML = 'touchmove';
});
document.querySelector('div').addEventListener(`,-1),t("b",{class:"t01"},"'touchend'",-1),n(`, (ev) => {
  ev.target.innerHTML = 'touchend';
});
<\/script>
`,-1)])]),_:1}),s[750]||(s[750]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[748]||(s[748]=[n(`<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
<div style="width:100%;height:100%;"></div>

<script>
document.querySelector('div').addEventListener(`,-1),t("b",{class:"t01"},"'touchmove'",-1),n(`, (ev) => {
  let nodes;
  nodes += 'clientX: ' + ev.changedTouches[0].`,-1),t("b",{class:"t03"},"clientX",-1),n(` + '\\n'
  nodes += 'clientY: ' + ev.changedTouches[0].`,-1),t("b",{class:"t03"},"clientY",-1),n(` + '\\n'
  nodes += 'offsetX: ' + ev.changedTouches[0].`,-1),t("b",{class:"t03"},"offsetX",-1),n(` + '\\n'
  nodes += 'offsetY: ' + ev.changedTouches[0].`,-1),t("b",{class:"t03"},"offsetY",-1),n(` + '\\n'
  nodes += 'pageX  : ' + ev.changedTouches[0].`,-1),t("b",{class:"t03"},"pageX",-1),n(` + '\\n'
  nodes += 'pageY  : ' + ev.changedTouches[0].`,-1),t("b",{class:"t03"},"pageY",-1),n(` + '\\n'
  nodes += 'screenX: ' + ev.changedTouches[0].`,-1),t("b",{class:"t03"},"screenX",-1),n(` + '\\n'
  nodes += 'screenY: ' + ev.changedTouches[0].`,-1),t("b",{class:"t03"},"screenY",-1),n(` + '\\n'
  ev.target.innerHTML = nodes.replace(/\\n/g, '`,-1),t("br",null,null,-1),n(`');
});
<\/script>
`,-1)])]),_:1}),s[751]||(s[751]=n(`
`,-1))])]),_:1}),l(a,{title:"focus"},{default:e(()=>[t("pre",null,[s[753]||(s[753]=n("",-1)),l(o,null,{default:e(()=>[...s[752]||(s[752]=[n(`<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
<div style="width:100%;height:100%;">focus</div>

<script>
const div = document.querySelector('div');
window.addEventListener(`,-1),t("b",{class:"t01"},"'focus'",-1),n(`, () => {
  div.innerHTML = 'focus';
});
window.addEventListener(`,-1),t("b",{class:"t01"},"'blur'",-1),n(`, () => {
  div.innerHTML = 'blur';
});
<\/script>
`,-1)])]),_:1}),s[754]||(s[754]=n(`
`,-1))])]),_:1}),l(a,{title:"visibilitychange"},{default:e(()=>[t("pre",null,[s[756]||(s[756]=n("",-1)),l(o,null,{default:e(()=>[...s[755]||(s[755]=[n(`<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">

<script>
document.addEventListener(`,-1),t("b",{class:"t01"},"'visibilitychange'",-1),n(`, () => {
  if (`,-1),t("b",{class:"t03"},"document.visibilityState",-1),n(` === 'visible') {
    console.log('visible');
  } else if (`,-1),t("b",{class:"t03"},"document.visibilityState",-1),n(` === 'hidden') {
    console.log('hidden');
  }
});
<\/script>
`,-1)])]),_:1}),s[757]||(s[757]=n(`
`,-1))])]),_:1}),l(a,{title:"fullscreen"},{default:e(()=>[t("pre",null,[s[759]||(s[759]=n("",-1)),l(o,null,{default:e(()=>[...s[758]||(s[758]=[n(`<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
<style>
div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}
.onBtn {
  padding: 10px;
  border: #000 1px solid;
}
.offBtn {
  display: none;
  padding: 10px;
  border: #000 1px solid;
}
.off .onBtn {
  display: inline-block;
}
.off .offBtn {
  display: none;
}
.on .onBtn {
  display: none;
}
.on .offBtn {
  display: inline-block;
}
</style>

<div class="off">
  <p class="onBtn">On Full-Screen</p>
  <p class="offBtn">Off Full-Screen</p>
</div>

<script>
const div = document.querySelector('div');
const onBtn = document.querySelector('.onBtn');
const offBtn = document.querySelector('.offBtn');

onBtn.addEventListener('click', () => {
  onFullScreen(document.body);
  div.classList.add('on');
  div.classList.remove('off');
});

offBtn.addEventListener('click', () => {
  offFullScreen(document.body);
  div.classList.add('off');
  div.classList.remove('on');
});

const onFullScreen = (el) => {
  `,-1),t("b",{class:"t01"},`if (el.requestFullScreen) {
    el.requestFullScreen();
  } else if (el.webkitRequestFullScreen) {
    el.webkitRequestFullScreen();
  } else if (el.mozRequestFullScreen) {
    el.mozRequestFullScreen();
  } else if (el.msRequestFullScreen) {
    el.msRequestFullScreen();
  }`,-1),n(`
};

const offFullScreen = () => {
  `,-1),t("b",{class:"t01"},`if (document.exitFullScreen) {
    document.exitFullScreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msCancelFullScreen) {
    document.msCancelFullScreen();
  }`,-1),n(`
};
<\/script>
`,-1)])]),_:1}),s[760]||(s[760]=n(`
`,-1))])]),_:1}),l(a,{title:"loaded"},{default:e(()=>[...s[761]||(s[761]=[t("pre",null,`DOMContentLoaded - HTML loaded
load - All resource loaded
`,-1)])]),_:1}),l(a,{title:"resize"},{default:e(()=>[t("pre",null,[s[763]||(s[763]=n("",-1)),l(o,null,{default:e(()=>[...s[762]||(s[762]=[n(`<div></div>

<script>
const div = document.querySelector('div');
window.addEventListener(`,-1),t("b",{class:"t01"},"'resize'",-1),n(`, () => {
  div.innerHTML = window.innerWidth + '<br>' + window.innerHeight;
});
div.innerHTML = window.innerWidth + '<br>' + window.innerHeight;
<\/script>
`,-1)])]),_:1}),s[764]||(s[764]=n(`
`,-1))])]),_:1}),l(a,{title:"matchMedia"},{default:e(()=>[t("pre",null,[s[766]||(s[766]=n("",-1)),l(o,null,{default:e(()=>[...s[765]||(s[765]=[n(`<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, viewport-fit=cover">

<div></div>
<div></div>

<script>
const div = document.querySelectorAll('div');
const ori = window.`,-1),t("b",{class:"t01"},"matchMedia(",-1),n("'(orientation: landscape)'",-1),t("b",{class:"t01"},")",-1),n(`;
const wid = window.`,-1),t("b",{class:"t01"},"matchMedia(",-1),n("'(max-width: 400px)'",-1),t("b",{class:"t01"},")",-1),n(`;

const changeLayout = () => {
  if (ori.matches) {
    div[0].innerHTML = 'landscape';
  } else {
    div[0].innerHTML = 'portrate';
  }
  if (wid.matches) {
    div[1].innerHTML = 'width <= 400px';
  } else {
    div[1].innerHTML = 'width > 400px';
  }
};

ori.addListener(changeLayout);
wid.addListener(changeLayout);
changeLayout();
<\/script>
`,-1)])]),_:1}),s[767]||(s[767]=n(`
`,-1))])]),_:1}),l(a,{title:"drag and drop"},{default:e(()=>[t("pre",null,[s[769]||(s[769]=n("",-1)),l(o,null,{default:e(()=>[...s[768]||(s[768]=[n(`<style>
body {
  background: #f1f1f1;
}
.b {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
  border: #000 1px solid;
  background: #fff;
}
.i {
  display: flex;
  flex-wrap: wrap;
}
.i img {
  height: 80px;
  margin: 6px 6px 0 0;
}
</style>

<div class="b">drop img files</div>
<div class="i"></div>

<script>
const b = document.querySelector('.b');
const i = document.querySelector('.i');

b.addEventListener('dragover', (ev) => {
  ev.preventDefault();
});

b.addEventListener('drop', (ev) => {
  ev.preventDefault();
  const files = ev.dataTransfer.files;
  Object.values(files).forEach((file) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      i.appendChild(img);
    }
    reader.readAsDataURL(file);
  });
});
<\/script>
`,-1)])]),_:1}),s[770]||(s[770]=n(`
`,-1))])]),_:1}),l(a,{title:"eval"},{default:e(()=>[t("pre",null,[s[772]||(s[772]=n("",-1)),l(o,null,{default:e(()=>[...s[771]||(s[771]=[n(`const sum = 'function f(){ return 1 + 2; }; f();';
const ans = `,-1),t("b",{class:"t01"},"eval(",-1),n("sum",-1),t("b",{class:"t01"},")",-1),n(`;
console.log(ans);
`,-1)])]),_:1}),s[773]||(s[773]=n(`
`,-1))])]),_:1}),l(a,{title:"///"},{default:e(()=>[t("pre",null,[s[775]||(s[775]=n("",-1)),l(o,null,{default:e(()=>[...s[774]||(s[774]=[n(`

`,-1)])]),_:1}),s[776]||(s[776]=n(`
`,-1))])]),_:1})]),_:1})],64))}}),Ot=Object.freeze(Object.defineProperty({__proto__:null,default:Qn,metadata:sn},Symbol.toStringTag,{value:"Module"})),ln={updateDate:"2020/04/01"},Yn=f({__name:"loading",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"loading","sample-url":"/sample/html/loading.html","update-date":ln.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[0]||(s[0]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">

<style>
body {
  margin: 0;
  padding: 0;
}`,-1),n(`
`,-1),t("b",{class:"t03"},[n(`.loading {
  position: relative;
  `),t("b",{class:"t02"},`top: 50px;
  left: 50px;`),n(`
  display: block;
  width: 2px;
  height: 2px;
}
.loading span {
  display: block;
  content: "";
  width: 4px;
  height: 12px;
  border-radius: 4px;
  position: absolute;
  background: #f4f4f4;
}
.loading .chip0 {
  background: #ccc;
}
.loading .chip1 {
  background: #ddd;
}
.loading .chip2 {
  background: #eee;
}`)],-1),n(`
`,-1),t("b",{class:"t02"},`</style>

<div class="`,-1),t("b",{class:"t04"},"loading",-1),t("b",{class:"t02"},'"></div>',-1),n(`

`,-1),t("b",{class:"t01"},[n(`<script>
((w, d) => {
  w.onload = () => {
    const icon = d.querySelector('`),t("b",{class:"t04"},".loading"),n(`');
    for(i = 0; i < 8; i++){
      const span = d.createElement('span');
      span.classList.add(\`chip\${i}\`);
      icon.appendChild(span);
      const chip = d.querySelector('.chip' + i);
      const r = 14;
      chip.style.transform = 'rotate(-' + 45 * i + 'deg)';
      chip.style.top = r * Math.cos(45 * i / 180 * Math.PI) - 5 + 'px';
      chip.style.left = r * Math.sin(45 * i / 180 * Math.PI) - 1 + 'px';
    }
    const rtt45 = () => {
      var i = 0;
      return () => {
        icon.style.transform = 'rotate(' + 45 * i + 'deg)';
        (i === 7) ? i = 0 : i++;
      }
    }
    var id = setInterval(rtt45(), 100);
    w.setTimeout(() => {
      clearInterval(id);
    }, 5000);
  };
})(window, document);
<\/script>`)],-1),n(`
`,-1)])]),_:1}),s[1]||(s[1]=n(`
`,-1))])]),_:1})],64))}}),Wt=Object.freeze(Object.defineProperty({__proto__:null,default:Yn,metadata:ln},Symbol.toStringTag,{value:"Module"})),en={updateDate:"2020/12/19"},Xn=f({__name:"mp4-mouse-enter",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"mp4-mouse-enter","sample-url":"/sample/html/mp4-mouse-enter.html","update-date":en.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[t("pre",null,[t("code",null,[l(o,null,{default:e(()=>[...s[0]||(s[0]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>

<style>
video {
  width: 480px;
}
</style>`,-1),n(`

`,-1),t("b",{class:"t03"},'<video loop poster="',-1),n("thumb01.png",-1),t("b",{class:"t03"},`">
<source src="`,-1),n("sample01.mp4",-1),t("b",{class:"t03"},`">
</video>

<video loop poster="`,-1),n("thumb02.png",-1),t("b",{class:"t03"},`">
<source src="`,-1),n("sample02.mp4",-1),t("b",{class:"t03"},`">
</video>`,-1),n(`

`,-1),t("b",{class:"t01"},"<script>",-1),n(`
`,-1),t("b",{class:"t01"},`((d) => {
  const `,-1),n("videos",-1),t("b",{class:"t01"},` = d.getElementsByTagName('video');
  const `,-1),n("playVideo",-1),t("b",{class:"t01"},` = function () {
    this.play();
  };
  const `,-1),n("pauseVideo",-1),t("b",{class:"t01"},` = function () {
    this.pause();
  };
  [].forEach.call(`,-1),n("videos",-1),t("b",{class:"t01"},", (",-1),n("item",-1),t("b",{class:"t01"},`) => {
    `,-1),n("item",-1),t("b",{class:"t01"},".addEventListener('mouseenter', ",-1),n("playVideo",-1),t("b",{class:"t01"},`, false);
    `,-1),n("item",-1),t("b",{class:"t01"},".addEventListener('mouseleave', ",-1),n("pauseVideo",-1),t("b",{class:"t01"},`, false);
  });
})(document);
<\/script>`,-1),n(`
`,-1)])]),_:1}),s[1]||(s[1]=n(`
`,-1))])])]),_:1})],64))}}),Rt=Object.freeze(Object.defineProperty({__proto__:null,default:Xn,metadata:en},Symbol.toStringTag,{value:"Module"})),on={updateDate:"2024/03/15"},Jn=f({__name:"node-nvm-npm",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"node-nvm-npm","update-date":on.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[l(a,{title:"node.js install"},{default:e(()=>[...s[0]||(s[0]=[t("pre",null,[n(""),t("b",{class:"t01"},"http://nodejs.org/"),n(`
`)],-1)])]),_:1}),l(a,{title:"node.js update"},{default:e(()=>[...s[1]||(s[1]=[t("pre",null,[t("b",{class:"t01"},"$ npm cache clean -f"),n(`
`),t("b",{class:"t01"},"$ sudo npm install -g n"),n(`

`),t("b",{class:"t01"},"$ sudo n latest"),n(`
`),t("b",{class:"t01"},"$ sudo n stable"),n(`
`),t("b",{class:"t01"},"$ sudo n"),n(` 12.16.2
`)],-1)])]),_:1}),l(a,{title:"node.js uninstall"},{default:e(()=>[...s[2]||(s[2]=[t("pre",null,[t("b",{class:"t01"},`$ sudo rm -rf /usr/local/lib/node
$ sudo rm -rf /usr/local/lib/node_modules
$ sudo rm -rf /var/db/receipts/org.nodejs.*
$ sudo rm -rf ~/.npm`),n(`
`)],-1)])]),_:1}),l(a,{title:"node.js status"},{default:e(()=>[...s[3]||(s[3]=[t("pre",null,[n(""),t("b",{class:"t01"},"$ node -v"),n("  "),t("b",{class:"t02"},"// version of node.js"),n(`
`),t("b",{class:"t01"},"$ npm -v"),n("  "),t("b",{class:"t02"},"// version of npm"),n(`

`),t("b",{class:"t01"},"$ npm list"),n(" [package name]  "),t("b",{class:"t02"},"// version of a package"),n(`
`),t("b",{class:"t02"},"ex) npm list eslint"),n(`

`),t("b",{class:"t01"},"$ npm bin -g"),n("  "),t("b",{class:"t02"},"// check PATH"),n(`
`),t("b",{class:"t01"},"$ export PATH=$PATH:"),n("[path]  "),t("b",{class:"t02"},"// add PATH"),n(`
`),t("b",{class:"t01"},"$ source"),n(" [path]  "),t("b",{class:"t02"},"// through PATH"),n(`
`)],-1)])]),_:1}),l(a,{title:"nvm install"},{default:e(()=>[...s[4]||(s[4]=[t("pre",null,[t("b",{class:"t01"},[n(`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
`),t("b",{class:"t02"},"// same command for bash or zsh")])],-1)])]),_:1}),l(a,{title:"manual change node version with nvm"},{default:e(()=>[...s[5]||(s[5]=[t("pre",null,[t("b",{class:"t01"},"nvm install v12.22.0"),n(`
`)],-1)])]),_:1}),l(a,{title:"nvm ready and auto use setting (zsh)"},{default:e(()=>[t("pre",null,[s[8]||(s[8]=t("b",{class:"t01"},"$ vi ~/.zshrc",-1)),s[9]||(s[9]=n(`

// add the code below
`,-1)),l(o,null,{default:e(()=>[...s[6]||(s[6]=[t("b",{class:"t01"},`ZSHHOME="\${HOME}/.zsh.d"

if [ -d $ZSHHOME -a -r $ZSHHOME -a \\
     -x $ZSHHOME ]; then
    for i in $ZSHHOME/*; do
        [[ \${i##*/} = *.zsh ]] &&
            [ \\( -f $i -o -h $i \\) -a -r $i ] && . $i
    done
fi`,-1)])]),_:1}),s[10]||(s[10]=n(`

---

`,-1)),s[11]||(s[11]=t("b",{class:"t01"},"$ vi ~/.zsh.d/nvm-autoload.zsh",-1)),s[12]||(s[12]=n(`

// add the code below
`,-1)),l(o,null,{default:e(()=>[...s[7]||(s[7]=[t("b",{class:"t01"},`source ~/.nvm/nvm.sh

# place this after nvm initialization!
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "\${nvmrc_path}")")

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
load-nvmrc`,-1)])]),_:1}),s[13]||(s[13]=n(`
`,-1))])]),_:1}),l(a,{title:"nvm ready and auto use setting (bash)"},{default:e(()=>[t("pre",null,[s[15]||(s[15]=t("b",{class:"t01"},"$ vi ~/.bash_profile",-1)),s[16]||(s[16]=n(`

// add the code below
`,-1)),l(o,null,{default:e(()=>[...s[14]||(s[14]=[t("b",{class:"t01"},`export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion"  # This loads nvm bash_co

find-up () {
  path=$(pwd)
  while [[ "$path" != "" && ! -e "$path/$1" ]]; do
    path=\${path%/*}
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

    # If there is no default version, set it to \`node\`
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
    # \`nvm ls\` will check all locally-available versions
    # If there are multiple matching versions, take the latest one
    # Remove the \`->\` and \`*\` characters and spaces
    # \`locally_resolved_nvm_version\` will be \`N/A\` if no local versions are found
    locally_resolved_nvm_version=$(nvm ls --no-colors "$nvm_version" | tail -1 | tr -d '\\->*' | tr -d '[:space:]')

    # If it is not already installed, install it
    # \`nvm install\` will implicitly use the newly-installed version
    if [[ "$locally_resolved_nvm_version" == "N/A" ]]; then
      nvm install "$nvm_version";
    elif [[ $(nvm current) != "$locally_resolved_nvm_version" ]]; then
      nvm use "$nvm_version";
    fi
  fi
}
alias cd='cdnvm'`,-1)])]),_:1}),s[17]||(s[17]=n(`

---

`,-1)),s[18]||(s[18]=t("b",{class:"t01"},"$ source ~/.bash_profile",-1)),s[19]||(s[19]=n(`
`,-1)),s[20]||(s[20]=t("b",{class:"t01"},"$ nvm --version",-1))])]),_:1}),l(a,{title:"auto change node version with nvm (.nvmrc)"},{default:e(()=>[...s[21]||(s[21]=[t("pre",null,[n(`// .nvmrc on project
`),t("b",{class:"t01"},"12.16.2"),n(),t("b",{class:"t02"},"(ex"),n(`

// first time
`),t("b",{class:"t01"},"$ nvm install")],-1)])]),_:1}),l(a,{title:"package.json"},{default:e(()=>[...s[22]||(s[22]=[t("pre",null,[n(""),t("b",{class:"t01"},"$ mkdir"),n(` project
`),t("b",{class:"t01"},"$ cd"),n(` project
`),t("b",{class:"t01"},"$ npm init"),n("  "),t("b",{class:"t02"},"// make package.json"),n(`

---

project/
└ `),t("b",{class:"t03"},"package.json"),n(`

---

`),t("b",{class:"t02"},"// package.json"),n(`

`),t("b",{class:"t03"},`{
  "name": "`),n("project"),t("b",{class:"t03"},`",
  "version": "1.0.1",
  "description": "",
  "main": "",
  "scripts": {
  "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "author": "",
  "license": ""
}`),n(`
`)],-1)])]),_:1}),l(a,{title:"run script (ex: unix command)"},{default:e(()=>[...s[23]||(s[23]=[t("pre",null,[n(`project/
└ package.json

---

`),t("b",{class:"t02"},"// package.json"),n(`

{
  "name": "project",
  "version": "1.0.1",
  "description": "",
  "main": "",
  `),t("b",{class:"t01"},`"scripts": {
  "`),t("b",{class:"t04"},"lsall"),t("b",{class:"t01"},'": "'),t("b",{class:"t05"},"ls -a"),t("b",{class:"t01"},`"
  }`),n(`,
  "author": "",
  "license": ""
}

---

`),t("b",{class:"t02"},"// run script"),n(`

`),t("b",{class:"t01"},"$ npm run"),n(),t("b",{class:"t04"},"lsall"),n(`

`),t("b",{class:"t03"},`> project@1.0.1 lsall /Users/../workspace/project
> ls -a

.     ..    package.json`),n(`
`)],-1)])]),_:1}),l(a,{title:"run script (ex: bash)"},{default:e(()=>[...s[24]||(s[24]=[t("pre",null,[n(`project/
├ `),t("b",{class:"t01"},".lib/"),n(`
│  └ `),t("b",{class:"t01"},"lsall.sh"),n(`
└ package.json

---

`),t("b",{class:"t02"},"// lsall.sh"),n(`

`),t("b",{class:"t01"},"#!/bin/bash"),n(`
ls -a
`),t("b",{class:"t01"},"exit 0"),n(`

---

`),t("b",{class:"t02"},"// package.json"),n(`

{
  "name": "project",
  "version": "1.0.1",
  "description": "",
  "main": "",
  `),t("b",{class:"t01"},`"scripts": {
  "`),t("b",{class:"t04"},"lsall"),t("b",{class:"t01"},'": "'),t("b",{class:"t05"},"sh .lib/lsall.sh"),t("b",{class:"t01"},`"
  }`),n(`,
  "author": "",
  "license": ""
}

---

`),t("b",{class:"t02"},"// run script"),n(`

`),t("b",{class:"t01"},"$ npm run"),n(),t("b",{class:"t04"},"lsall"),n(`

`),t("b",{class:"t03"},`> project@1.0.1 lsall /Users/../workspace/project
> sh .lib/lsall.sh

.     ..    .lib    package.json`),n(`
`)],-1)])]),_:1}),l(a,{title:"run script (ex: node.js)"},{default:e(()=>[...s[25]||(s[25]=[t("pre",null,[n(`project/
├ .lib/
│  ├ lsall.sh
│  └ `),t("b",{class:"t01"},"hello.js"),n(`
└ package.json

---

`),t("b",{class:"t02"},"// hello.js"),n(`

console.log("hello");

---

`),t("b",{class:"t02"},"// package.json"),n(`

{
  "name": "project",
  "version": "1.0.1",
  "description": "",
  "main": "",
  `),t("b",{class:"t01"},`"scripts": {
  "`),n("lsall"),t("b",{class:"t01"},'": "'),n("sh .lib/lsall.sh"),t("b",{class:"t01"},`",
  "`),t("b",{class:"t04"},"hello"),t("b",{class:"t01"},'": "'),t("b",{class:"t05"},"node .lib/hello.js"),t("b",{class:"t01"},`",
  "`),t("b",{class:"t04"},"w"),t("b",{class:"t01"},'": "'),t("b",{class:"t05"},"npm run lsall && npm run hello"),t("b",{class:"t01"},[n('" '),t("b",{class:"t02"},"// &&(sync) &(async)"),n(`
  }`)]),n(`,
  "author": "",
  "license": ""
}

---

`),t("b",{class:"t02"},"// run script"),n(`

`),t("b",{class:"t03"},[t("b",{class:"t01"},"$ npm run"),n(),t("b",{class:"t04"},"hello"),n(`

> project@1.0.1 hello /Users/../workspace/project
> node .lib/hello.js

hello

`),t("b",{class:"t01"},"$ npm run"),n(),t("b",{class:"t04"},"w"),n(`

> project@1.0.1 w /Users/../workspace/project
> npm run lsall && npm run hello


> project@1.0.1 lsall /Users/../workspace/project
> sh .lib/lsall.sh

.     ..    .lib    package.json

> project@1.0.1 hello /Users/../workspace/project
> node .lib/hello.js

hello`)]),n(`
`)],-1)])]),_:1}),l(a,{title:"run script (ex: node package)"},{default:e(()=>[...s[26]||(s[26]=[t("pre",null,[n(""),t("b",{class:"t02"},"// install package"),n(`

`),t("b",{class:"t01"},"$ npm install"),n(` sass --save-dev

---

project/
├ .lib/
│  ├ lsall.sh
│  └ hello.js
├ `),t("b",{class:"t01"},"dest/"),n(`
├ `),t("b",{class:"t01"},"sass/"),n(`
│  `),t("b",{class:"t01"},"└ project.scss"),n(`
├ `),t("b",{class:"t03"},"node_modules/"),n(`
└ `),t("b",{class:"t03"},"package.json"),n(`

---

`),t("b",{class:"t02"},"// package.json"),n(`

{
  "name": "project",
  "version": "1.0.1",
  "description": "",
  "main": "",
  `),t("b",{class:"t01"},`"scripts": {
  "`),n("lsall"),t("b",{class:"t01"},'": "'),n("sh .lib/lsall.sh"),t("b",{class:"t01"},`",
  "`),n("hello"),t("b",{class:"t01"},'": "'),n("node .lib/hello.js"),t("b",{class:"t01"},`",
  "`),n("w"),t("b",{class:"t01"},'": "'),n("npm run lsall && npm run hello"),t("b",{class:"t01"},`",
  "`),t("b",{class:"t04"},"sass"),t("b",{class:"t01"},'": "'),t("b",{class:"t05"},"sass sass:dest"),t("b",{class:"t01"},`"
  }`),n(`,
  "author": "",
  "license": ""
}

---

`),t("b",{class:"t02"},"// run script"),n(`

`),t("b",{class:"t03"},[t("b",{class:"t01"},"$ npm run"),n(),t("b",{class:"t04"},"sass"),n(`

> project@1.0.1 sass /Users/../workspace/project
> sass sass:dest

Rendering Complete, saving .css file...
Wrote CSS to /Users/../workspace/project/dest/project.css
Wrote 1 CSS files to /Users/../workspace/project/dest`)]),n(`
`)],-1)])]),_:1}),l(a,{title:"node package (ex: spritesmith)"},{default:e(()=>[...s[27]||(s[27]=[t("pre",null,[n(""),t("b",{class:"t01"},"$ npm install spritesmith sass --save-dev"),n(`

---

project/
│
├ .lib/
│   `),t("b",{class:"t01"},"├ clean-scss.sh"),n(`
│   `),t("b",{class:"t01"},"├ spritesmith.js"),n(`
│   `),t("b",{class:"t01"},"└ concat-scss.sh"),n(`
├ dest/
│   `),t("b",{class:"t03"},"└ project.css"),n(`
├ html/
├ img/
│  `),t("b",{class:"t03"},"└ make/"),n(`
│    `),t("b",{class:"t03"},"├ spr-en-***********.png"),n(`
│    `),t("b",{class:"t03"},"└ spr-ja-***********.png"),n(`
├ node_modules/
├ `),t("b",{class:"t01"},"package.json"),n(`
├ sass/
│  ├ `),t("b",{class:"t01"},"project.scss"),n(`
│  ├ _conf.scss
│  ├ src/
│  `),t("b",{class:"t03"},"│"),n(`  ├ mod/
│  `),t("b",{class:"t03"},"│"),n(`  │   ├ _base.scss
│  `),t("b",{class:"t03"},"│"),n("  │   └ "),t("b",{class:"t01"},"_module.scss"),n(`
│  `),t("b",{class:"t03"},"│"),n(`  └ lib/
│  `),t("b",{class:"t03"},"│"),n(`    ├ _reset.scss
│  `),t("b",{class:"t03"},"│"),n("    └ "),t("b",{class:"t01"},"_utility.scss"),n(`
│  `),t("b",{class:"t03"},"└ make/"),n(`
│    `),t("b",{class:"t03"},"├ _concat.scss"),n(`
│    `),t("b",{class:"t03"},"└ spr/"),n(`
│      `),t("b",{class:"t03"},"├ _spr_en.scss"),n(`
│      `),t("b",{class:"t03"},"├ _spr_ja.scss"),n(`
│    `),t("b",{class:"t03"},"  └ param"),n(`
│    `),t("b",{class:"t03"},"    └ _base.scss"),n(`
└ `),t("b",{class:"t01"},`sprite/
  ├ en/
  │   ├ 120.png
  │   └ 150.png
  └ ja/
    ├ 120.png
    └ 150.png`),n(`

---

`),t("b",{class:"t02"},"// package.json"),n(`

`),t("b",{class:"t01"},`{
  "name": "project",
  "version": "1.0.1",
  "description": "",
  "main": "",
  "author": "",
  "license": "",
  "scripts": {
  "clean:scss": "sh .lib/clean-scss.sh",
  "clean:ds": "find . -name '.DS_Store' -print -exec rm {} ';'",
  "clean": "npm run clean:scss & npm run clean:ds",
  "sprite": "node .lib/spritesmith.js",
  "concat:scss": "sh .lib/concat-scss.sh",
  "make:css": "npm run concat:scss && sass sass:dest",
  "i": "npm run clean && npm run sprite",
  "l": "npm run make:css"
  },
  "devDependencies": {
  "sass": "",
  "spritesmith": ""
  }
}`),n(`

---

`),t("b",{class:"t02"},"// .lib/clean-scss.sh"),n(`

`),t("b",{class:"t01"},`#!/bin/bash

mkdir img
rm -r img/make
mkdir img/make
rm -r sass/make
mkdir sass/make
mkdir sass/make/spr
mkdir sass/make/spr/param

exit 0`),n(`

---

`),t("b",{class:"t02"},"// .lib/spritesmith.js"),n(`

`),t("b",{class:"t01"},`const pkg = require(\`../package.json\`);
const Spritesmith = require(\`spritesmith\`);
const fs = require(\`fs\`);
const aPath = require(\`path\`);
const getFolders = (dir) => {
  return fs.readdirSync(dir).filter((file) => {
    return fs.statSync(aPath.join(dir, file)).isDirectory();
  });
}

const basePath = \`sass/make/spr/param/_base.scss\`;
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


const writeBase = (str) => {
  fs.writeFileSync(basePath, str);
}

fs.readdir(\`sprite/\`, (err, folders) => {

  if (err) {

    writeBase(\`$spr: null;\\n\`);

  } else {

    baseData += \`$spr: (\`;
    for (let i = 0; i < folders.length; i++) {
      baseData += \`$spr-\${i}, \`;
    }
    baseData += \`);\\n\`;
    writeBase(baseData);
  }
});


const folders = getFolders(\`sprite/\`);
folders.forEach((value, index) => {

  fs.readdir(\`sprite/\${value}/\`, (err, files) => {

    if (err) {

      writeBase(\`$spr: null;\\n\`);
      return;

    } else {

      pngs = [];
      for (let i in files) {
        if (/\\.png$/.test(files[i])) {
          pngs[i] = \`sprite/\${value}/\${files[i]}\`;
        }
      }

      Spritesmith.run({
        src: pngs,
        algorithm: \`binary-tree\`,
        padding: 6

      }, handleResult = (err, result) => {

        sprData = new String();
        sprPath = \`sass/make/spr/_spr_\${value}.scss\`;

        if (result.properties.width === 0 && result.properties.height === 0) {
          fs.appendFileSync(sprPath, \`$spr-\${index}: null;\\n\`);
          return;
        }

        filenameList = [];
        filenameParam = \`\`;

        //imgPath = \`img_org/make/spr-\${value}-\${rdm}.png\`;
        //writePath = \`img/make/spr-\${value}-\${rdm}.png\`;
        imgPath = \`img_org/make/spr-\${value}.png\`;
        writePath = \`img/make/spr-\${value}.png\`;

        fs.writeFileSync(imgPath, result.image);

        for (let n in result.coordinates) {

          filePath = n.split(\`/\`);
          file = (filePath[2].split(\`.\`))[0];
          property = \`$\${value}-\${file}: (\`;
          x = \`\${result.coordinates[n].x}px, \`;
          y = \`\${result.coordinates[n].y}px, \`;
          xx = \`-\${x}\`;
          yy = \`-\${y}\`;
          w = \`\${result.coordinates[n].width}px, \`;
          h = \`\${result.coordinates[n].height}px, \`;
          W = \`\${result.properties.width}px, \`;
          H = \`\${result.properties.height}px, \`;
          img = \`'\${writePath}', \`;
          folder = \`'\${value}-\${file}', );\\n\`;

          sprData += property + x + y + xx + yy + w + h + folder;

          filenameList.push(file);
        }

        for (let i = 0; i < filenameList.length; i++) {
          filenameParam = \`\${filenameParam}$\${value}-\${filenameList[i]}, \`;
        }

        sprData += \`$spr-\${index}-sprites: (\${filenameParam});\\n\`;
        sprData += \`$spr-\${index}: (\${W}\${H}\${img}$spr-\${index}-sprites, );\\n\`;

        fs.appendFileSync(sprPath, sprData);
      });
    }
  });
});`),n(`

---

`),t("b",{class:"t02"},"// .lib/concat-scss.sh"),n(`

`),t("b",{class:"t01"},`#!/bin/bash

cat sass/make/spr/*.scss sass/make/spr/param/*.scss > sass/make/_concat.scss

exit 0`),n(`

---

`),t("b",{class:"t02"},"// project.scss"),n(`

`),t("b",{class:"t01"},'@use "make/concat";'),n(`
`),t("b",{class:"t01"},'@use "src/lib/utility";'),n(`

---

`),t("b",{class:"t02"},"// _conf.scss"),n(`

`),t("b",{class:"t01"},'$path-img: "../";'),n(`

---

`),t("b",{class:"t02"},"// a part of _concat.scss"),n(`

`),t("b",{class:"t03"},`$en-120: (156px, 0px, -156px, -0px, 120px, 120px, 'en-120', );
$en-150: (0px, 0px, -0px, -0px, 150px, 150px, 'en-150', );
$spr-0-sprites: ($en-120, $en-150, );
$spr-0: (276px, 150px, 'img/make/spr-en-*************.png', $spr-0-sprites, );
$ja-120: (156px, 0px, -156px, -0px, 120px, 120px, 'ja-120', );
$ja-150: (0px, 0px, -0px, -0px, 150px, 150px, 'ja-150', );
$spr-1-sprites: ($ja-120, $ja-150, );
$spr-1: (276px, 150px, 'img/make/spr-ja-*************.png', $spr-1-sprites, );

$spr: ($spr-0, $spr-1, );`),n(`

---

`),t("b",{class:"t02"},"// _utility.scss"),n(`

`),t("b",{class:"t01"},`@use "../../conf";
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
}`),n(`

---

`),t("b",{class:"t02"},"// _module.scss"),n(`
`),t("b",{class:"t02"},"// @extend %spr-{foldername}-{filename} // 100%"),n(`
`),t("b",{class:"t02"},"// @extend %spr-r2-{foldername}-{filename} // 50%"),n(`
`),t("b",{class:"t02"},"// @extend %spr-r3-{foldername}-{filename} // 33.3%"),n(`

.foo01 { @extend %spr-`),t("b",{class:"t01"},"ja"),n("-"),t("b",{class:"t01"},"150"),n(`; }
.foo02 { @extend %spr-r2-`),t("b",{class:"t01"},"ja"),n("-"),t("b",{class:"t01"},"150"),n(`; }
.foo03 { @extend %spr-r3-`),t("b",{class:"t01"},"ja"),n("-"),t("b",{class:"t01"},"150"),n(`; }
.foo04 { @extend %spr-`),t("b",{class:"t01"},"en"),n("-"),t("b",{class:"t01"},"150"),n(`; }
.foo05 { @extend %spr-r2-`),t("b",{class:"t01"},"en"),n("-"),t("b",{class:"t01"},"150"),n(`; }
.foo06 { @extend %spr-r3-`),t("b",{class:"t01"},"en"),n("-"),t("b",{class:"t01"},"150"),n(`; }
.foo07 { @extend %spr-`),t("b",{class:"t01"},"ja"),n("-"),t("b",{class:"t01"},"120"),n(`; }
.foo08 { @extend %spr-r2-`),t("b",{class:"t01"},"ja"),n("-"),t("b",{class:"t01"},"120"),n(`; }
.foo09 { @extend %spr-r3-`),t("b",{class:"t01"},"ja"),n("-"),t("b",{class:"t01"},"120"),n(`; }
.foo10 { @extend %spr-`),t("b",{class:"t01"},"en"),n("-"),t("b",{class:"t01"},"120"),n(`; }
.foo11 { @extend %spr-r2-`),t("b",{class:"t01"},"en"),n("-"),t("b",{class:"t01"},"120"),n(`; }
.foo12 { @extend %spr-r3-`),t("b",{class:"t01"},"en"),n("-"),t("b",{class:"t01"},"120"),n(`; }
div { @extend %hide-text; }

---

`),t("b",{class:"t02"},"// project.css"),n(`

`),t("b",{class:"t03"},`.foo10, .foo04 {
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
  background-position: 0px 0px; }`),n(`

---

`),t("b",{class:"t02"},"// html"),n(`

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
`)],-1),t("div",null,[t("div",{class:"foo01"},"ja/150"),t("div",{class:"foo02"},"ja/150"),t("div",{class:"foo03"},"ja/150"),t("div",{class:"foo04"},"en/150"),t("div",{class:"foo05"},"en/150"),t("div",{class:"foo06"},"en/150"),t("div",{class:"foo07"},"ja/120"),t("div",{class:"foo08"},"ja/120"),t("div",{class:"foo09"},"ja/120"),t("div",{class:"foo10"},"en/120"),t("div",{class:"foo11"},"en/120"),t("div",{class:"foo12"},"en/120")],-1),t("pre",null,[n(`
---

`),t("b",{class:"t02"},"// run"),n(`

$ npm run i
$ npm run l
`)],-1)])]),_:1}),l(a,{title:"node package (ex: base64)"},{default:e(()=>[...s[28]||(s[28]=[t("pre",null,[n(""),t("b",{class:"t01"},"$ npm install datauri spritesmith sass --save-dev"),n(`

---

project/
│
├ .lib/
│   `),t("b",{class:"t01"},"├ clean-scss.sh"),n(`
│   `),t("b",{class:"t01"},"├ base64.js"),n(`
│   `),t("b",{class:"t01"},"└ concat-scss.sh"),n(`
├ base64/
│  ├ `),t("b",{class:"t03"},"make/"),n(`
│  │  `),t("b",{class:"t03"},"└ base64.png"),n(`
│  ├ `),t("b",{class:"t01"},"yellow60.png"),n(`
│  └ `),t("b",{class:"t01"},"yellow90.png"),n(`
├ dest/
│   `),t("b",{class:"t03"},"└ project.css"),n(`
├ html/
├ img/
├ node_modules/
├ `),t("b",{class:"t01"},"package.json"),n(`
└ sass/
   ├ `),t("b",{class:"t01"},"project.scss"),n(`
   ├ _conf.scss
   ├ src/
   `),t("b",{class:"t03"},"│"),n(`  ├ mod/
   `),t("b",{class:"t03"},"│"),n(`  │   ├ _base.scss
   `),t("b",{class:"t03"},"│"),n("  │   └ "),t("b",{class:"t01"},"_module.scss"),n(`
   `),t("b",{class:"t03"},"│"),n(`  └ lib/
   `),t("b",{class:"t03"},"│"),n(`    ├ _reset.scss
   `),t("b",{class:"t03"},"│"),n("    └ "),t("b",{class:"t01"},"_utility.scss"),n(`
   `),t("b",{class:"t03"},"└ make/"),n(`
      `),t("b",{class:"t03"},"├ _concat.scss"),n(`
      `),t("b",{class:"t03"},"└ base64/"),n(`
         `),t("b",{class:"t03"},"└ _map.scss"),n(`

---

`),t("b",{class:"t02"},"// package.json"),n(`

`),t("b",{class:"t01"},`{
  "name": "project",
  "version": "1.0.1",
  "description": "",
  "main": "",
  "author": "",
  "license": "",
  "scripts": {
    "clean:scss": "sh .lib/clean-scss.sh",
    "clean:ds": "find . -name '.DS_Store' -print -exec rm {} ';'",
    "clean": "npm run clean:scss & npm run clean:ds",
    "base64": "node .lib/base64.js",
    "sprite": "node .lib/spritesmith.js",
    "concat:scss": "sh .lib/concat-scss.sh",
    "make:css": "npm run concat:scss && sass sass:dest",
    "i": "npm run clean && npm run base64",
    "l": "npm run make:css"
  },
  "devDependencies": {
  "datauri": "",
  "sass": "",
  "spritesmith": ""
  }
}`),n(`

---

`),t("b",{class:"t02"},"// .lib/clean-scss.sh"),n(`

`),t("b",{class:"t01"},`#!/bin/bash

mkdir img
rm -r base64/make
mkdir base64/make
rm -r sass/make
mkdir sass/make
mkdir sass/make/base64

exit 0`),n(`

---

`),t("b",{class:"t02"},"// .lib/base64.js"),n(`

`),t("b",{class:"t01"},`const pkg = require(\`../package.json\`);
const Spritesmith = require(\`spritesmith\`);
const fs = require(\`fs\`);
const aPath = require(\`path\`);
const Datauri = require(\`datauri\`).sync;
const getFolders = (dir) => {
  return fs.readdirSync(dir).filter((file) => {
    return fs.statSync(aPath.join(dir, file)).isDirectory();
  });
}

const target = \`sass/make/base64/_map.scss\`;
const imgPath = \`base64/make/base64.png\`;

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
let filenameParam = \`\`;


const writeData = (str) => {
  fs.writeFileSync(target, str);
};

fs.readdir(\`base64\`, (err, list) => {

  try {

    if (aPath.extname(list.toString(10)) !== \`.png\`) {
      writeData(\`$base64-sprites: null;\\n\`);
      return;
    }

    let pngs = [];

    for(let i = 0; i < list.length; i++) {
      (/\\.png$/.test(list[i])) ? pngs.push(\`base64/\${list[i]}\`) : null;
    }

    Spritesmith.run({
      src: pngs,
      algorithm: \`binary-tree\`,
      padding: 6

    }, handleResult = (err, result) => {

      if (err) { throw err; }

      fs.writeFile(imgPath, result.image, () => {

        for (let n in result.coordinates) {
          filePath = n.split(\`/\`);
          file = (filePath[1].split(\`.\`))[0];
          property = \`$\${file}: (\`;
          x = \`\${result.coordinates[n].x}px, \`;
          y = \`\${result.coordinates[n].y}px, \`;
          xx = \`-\${x}\`;
          yy = \`-\${y}\`;
          w = \`\${result.coordinates[n].width}px, \`;
          h = \`\${result.coordinates[n].height}px, \`;
          W = \`\${result.properties.width}px, \`;
          H = \`\${result.properties.height}px, \`;
          img = \`'\${imgPath}', \`;
          folder = \`'\${file}', );\\n\`;
          base64Data += property + x + y + xx + yy + w + h + folder;
          filenameList.push(file);
        }

        for (let i = 0; i < filenameList.length; i++) {
          filenameParam = \`\${filenameParam}$\${filenameList[i]}, \`;
        }

        base64Data += \`$base64-sprites: (\${filenameParam});\\n\`;
        base64Data += \`$base64: (\${W}\${H}\${img}$base64-sprites, );\\n\`;
        base64Data += \`%base64 { background: url(\${Datauri(imgPath)}); }\\n\`;
        writeData(base64Data);
      });
    });

  } catch (err) {

    console.log(\`no base64 folder\`);
    writeData(\`$base64-sprites: null;\\n\`);
  }
});`),n(`

---

`),t("b",{class:"t02"},"// .lib/concat-scss.sh"),n(`

`),t("b",{class:"t01"},`#!/bin/bash

cat sass/make/base64/*.scss > sass/make/_concat.scss

exit 0`),n(`

---

`),t("b",{class:"t02"},"// project.scss"),n(`

`),t("b",{class:"t01"},'@use "make/concat";'),n(`
`),t("b",{class:"t01"},'@use "src/lib/utility";'),n(`

---

`),t("b",{class:"t02"},"// a part of _concat.scss"),n(`

`),t("b",{class:"t03"},`$yellow60: (96px, 0px, -96px, -0px, 60px, 60px, 'yellow60', );
$yellow90: (0px, 0px, -0px, -0px, 90px, 90px, 'yellow90', );
$base64-sprites: ($yellow60, $yellow90, );
$base64: (156px, 90px, 'base64/make/base64.png', $base64-sprites, );
%base64 { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAABaCAYAAABNCT/kAAAAAklEQVR4AewaftIAAAouSURBVO3BX2wb92HA8e/9eJQoHWnVDiCjif2wG8AiD6SbdkE6pUsjwQWdOnuaFBFtX2KryiAtbmXDcT3/QWxF2ABB9paVGiyrRYslCxkJCdbatRV7FqQHvbRYVxFLoQOivSzZRsDJbOko0ce7G34PBAiB8pJIO0rq7/PR/PIeH+X/naZ/rFGDX97j83tEoCgBEihKgASKEiCBogRIoCgBEihKgASKEiCBogRIoCgBEihKgASKEiCBogRIoCgBEihKgASKEiCBogRIoCgBEihKgASKEiAdZccoFFzeeLPI9V+63Jn26GgXHP5WiIMHIyQTYT6NickiM7MO0p7dGp2dTSQTYTaLjrIjTE2tcuhwkWp3pj3uTHuAw/hYI0ePGKzHtn16eu+RzXlUGxxaYmQ4zPGBGJtBR9n2pqZWOXS4iNTfF+Lb6QgHDjTwwWKZyckVBofK3LvnsR7b9unpvUc255HuFrzc30Q0JlhYcDh7vsSJkw4tLTZHjxhslI6yrRUKLscGVpBGhsMcH4hRkUyESSbCPN22SioVYT3ZXJFsziPdLRgfa8EwNKRkIsyXvhTmwBNL9PSWePLJBpKJMBshULa1N94sYlk+/X0hjg/EqCWVirCeQsGlp7eENDQYxTA0qiUTYUaGw0hjV4tslEDZ1q5cLSN9Ox3h85iZLSGNDIcxTZ21bNvnV792kTKjLoWCy0YIlG1rPu9gWT5SW1sjn8c77z5A+tpTDdRyZWyZbM6jYma2xEYIlG1rYcFB6u8LUbG4WGY+7zCfdygUXP4v2ZyHdOBAA2tNTBY5cdIhHtc4d0ZHyufLbISOsm3dv+8jmX8gKBRcLr62TGbUpdq5MzqnXolhGBprzecdKgxDo9riYpkX0qtIE7ko//mRC5T5+BOfjRAo29Zv/rVMxZ88e5/MqEtHu6C/L0S6WyANDpXp6b2Hbfusp78vRDXb9nnu+SWkt7MRkokwX3w0hJQZddkIHWXbO3HSQXo7G6Grs5mK0z906OpeJpvzePKPljk+EOPTOHX6Ppblc+6MTldnM5tJoOwIN68309XZTLVkIsxELop04qRDoeBSy927PhU//olNZtQl3S049UqMzSZQtr3+vhCpVIRakokwHe0CaWa2RC3ZnIc0N1eip7dEPK4xNBjFMDQ2m0DZ8R5/XKOWqKFRMZ93eLGniPT65SZMU6fa8pKH1N8XYiMEyrb1xJd1NsI0dSq6upexLJ/xsUZSqQhrffiRi7Rnt8ZG6GwB83mH27dXuf5Ll//40OebBwV/eriRVCrCZzExWWRm1kHas1ujs7OJZCLMTrVrl4b0u9/5fF7nzugMDpWxLJ/+vhBHjxjUMjPrICUSOhuhU2dTU6scOlykmmW5ZEaLpLtXGR9rwTA0Hsa2fXp675HNeVQbHFpiZDjM8YEYO9FXv9IArHJn2mM+75BMhKnl1m0PaVdMsNbTbQ1AGen4DwxqKRRcMqMu0jeeaWQjdOpoamqVQ4eLSCPDYQ4ejCAtLDicPV8im/N45JH7/Oj1FtZj2z49vffI5jzS3YKX+5uIxgQLCw5nz5c4cdKhpcXm6BGDncY0ddLdgmzO46/+2uatN7/AWlNTq1iWj/T1rzeyVioVoaN9lTvTHj/9WZGLF3ax1sXXlpFGhsO0tobYCEGd2LbPsYEVpLezEY4PxEgmwiQTYbo6m7lxLYaUGXWZmlplPdlckWzOI90tGB9roa2tkWQiTFdnMxO5KFJPb4n5vMNOdPqHBlI253Hp8hK27VMxn3c4NrCCND7WiGFo1DJ4oQlpcKjMpctLVNi2z6XLS2RGXeJxje9+p5mNCr16vulV6mB6usTf/p1DPK7x95ldrLV7t2D/Po+f/8Kl7Lp0/lmEtQoFl2eetZH+6d0Ye/eGqLZ3b4hdsTLv3fIIhVy+9VyEerlwceUCNbx6vulVNmDv3hD793n8/Bcu793ymHynxMLCA/7hjVX+4uUSd+9Culvwl6djNDRo1LJ/v84fP6Xxxj86vHfL463sKgsLDzh1eoW3si7xuMaNazH27dPZKJ06+bf3HaSXvqeznvZnG4ES2ZzH+JiPYWhUm5ktIY0MhzFNnbVs2+dXv3aRMqMu58+6tLaG2GmOHjHY91iIYwMrWJaPZblUjI81ku5uxjA0HiaVinDzOhwbWMGyfCzLRepoF1y9EsU0dTaDTp0s/ruHtH9/iPWYpk7FB4tlkokw1d559wHS155qoJYrY8tkcx4VM7Mlujqb2YlSqQgL70eYzztU/KGpYxgan1YqFWHh/QjzeQcpamiYps5mEmxx6W6BtLDgsFY25yEdONDAWhOTRU6cdIjHNc6d0ZHy+TI7XTIRJpkIk0yEMQyNzyOZCJNMhDFNnc0mqJMnvqwjzcw6PEyhQE3zeYcKw9CotrhY5oX0KtJELsrTbQ1IH3/io9SXoE72PRZCyoy6FAoutczNlbgz7fEw/X0hqtm2z3PPLyG9nY2QTIT54qMhpMyoi1JfgjpJpSJ0tAuk7w8sYds+1ebmSrzYU+SzOnX6Ppblc+6MTldnM8rWolNHV69Eee75JbI5j3/5zf/w0vd09u8P8c67D8jmPOJxjY52wZ1pj/XcvetT8eOf2GRGXdLdglOvxFC2HkEdmabOjWsxOtoFluVz4qTDC+lVsjmPdLfgxrUYjz+u8TDZnIc0N1eip7dEPK4xNBjFMDSUrUenzkxT559vfYG5uRIffuQiffUrDZimjpQZdZEeezREtaihUTGfd3ixp4j0+uUmTFOn2vKSh9TfF0KpL50toq2tkbVs26ciGhNUM02diq7uZSzLZ3yskVQqwloffuQi7dmtodSXYAv77W8fUJFMhFnr3BkdybJ8+vtCHD1iUMvMrIOUSOgo9SXYwm5OlZBGhsPU8nRbAxXHf2BQS6Hgkhl1kb7xTCNKfQnqrFBwqWU+7zA4VEY6eDBCLalUhI52gfTTnxWp5eJry0gjw2FaW0Mo9SWoo4nJIt8fWKJQcKk2MVmkq3sZaXyskWQizHoGLzQhDQ6VuXR5iQrb9rl0eYnMqEs8rvHd7zSj1J9OnRQKLi+kV5GyuXukuwWPPKJx67aHZflI587oHD1i8DBtbY3cvO5z6HCREycdrlz9hG8eFNy67WFZPvG4xo1rMVpbQyj1p1Mnra0hPrB2celvbDKjLtmcR0VHu+DPX2qgq7OZTyOVinDzOhwbWMGyfCzLRepoF1y9EsU0dZStQaeOTFPnR6+3cP6sy3/9t4cUNTRMU+ezSqUiLLwfYT7vIEUNDdPUUbYWnS2gtTVEa2uIzZBMhFG2LoGiBEigKAHSUepK0z/W+D0iUJQACRQlQAJFCZBAUQIkUJQACRQlQAJFCZBAUQIkUJQACRQlQAJFCZBAUQIkUJQACRQlQAJFCZBAUQIkUJQACRQlQAJFCZBAUQIkUJQACRQlQAJFCZBAUQIkUJQACRQlQAJFCZBAUQIkUJQA/S+kJX2iqO6m5wAAAABJRU5ErkJggg==); }`),n(`

---

`),t("b",{class:"t02"},"// _utility.scss"),n(`

`),t("b",{class:"t01"},`@use "../../make/concat";

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
}`),n(`

---

`),t("b",{class:"t02"},"// _module.scss"),n(`
`),t("b",{class:"t02"},"// @extend %base64-{filename} // 100%"),n(`
`),t("b",{class:"t02"},"// @extend %base64-r2-{filename} // 50%"),n(`
`),t("b",{class:"t02"},"// @extend %base64-r3-{filename} //33.3%"),n(`

.bar01 { @extend %base64-`),t("b",{class:"t01"},"yellow90"),n(`; }
.bar02 { @extend %base64-r2-`),t("b",{class:"t01"},"yellow90"),n(`; }
.bar03 { @extend %base64-r3-`),t("b",{class:"t01"},"yellow90"),n(`; }
.bar04 { @extend %base64-`),t("b",{class:"t01"},"yellow60"),n(`; }
.bar05 { @extend %base64-r2-`),t("b",{class:"t01"},"yellow60"),n(`; }
.bar06 { @extend %base64-r3-`),t("b",{class:"t01"},"yellow60"),n(`; }
div { @extend %hide-text; }

---

`),t("b",{class:"t02"},"// project.css"),n(`

`),t("b",{class:"t03"},`.bar04, .bar01, .bar05, .bar02, .bar06, .bar03 {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAABaCAYAAABNCT/kAAAAAklEQVR4AewaftIAAAouSURBVO3BX2wb92HA8e/9eJQoHWnVDiCjif2wG8AiD6SbdkE6pUsjwQWdOnuaFBFtX2KryiAtbmXDcT3/QWxF2ABB9paVGiyrRYslCxkJCdbatRV7FqQHvbRYVxFLoQOivSzZRsDJbOko0ce7G34PBAiB8pJIO0rq7/PR/PIeH+X/naZ/rFGDX97j83tEoCgBEihKgASKEiCBogRIoCgBEihKgASKEiCBogRIoCgBEihKgASKEiCBogRIoCgBEihKgASKEiCBogRIoCgBEihKgASKEiAdZccoFFzeeLPI9V+63Jn26GgXHP5WiIMHIyQTYT6NickiM7MO0p7dGp2dTSQTYTaLjrIjTE2tcuhwkWp3pj3uTHuAw/hYI0ePGKzHtn16eu+RzXlUGxxaYmQ4zPGBGJtBR9n2pqZWOXS4iNTfF+Lb6QgHDjTwwWKZyckVBofK3LvnsR7b9unpvUc255HuFrzc30Q0JlhYcDh7vsSJkw4tLTZHjxhslI6yrRUKLscGVpBGhsMcH4hRkUyESSbCPN22SioVYT3ZXJFsziPdLRgfa8EwNKRkIsyXvhTmwBNL9PSWePLJBpKJMBshULa1N94sYlk+/X0hjg/EqCWVirCeQsGlp7eENDQYxTA0qiUTYUaGw0hjV4tslEDZ1q5cLSN9Ox3h85iZLSGNDIcxTZ21bNvnV792kTKjLoWCy0YIlG1rPu9gWT5SW1sjn8c77z5A+tpTDdRyZWyZbM6jYma2xEYIlG1rYcFB6u8LUbG4WGY+7zCfdygUXP4v2ZyHdOBAA2tNTBY5cdIhHtc4d0ZHyufLbISOsm3dv+8jmX8gKBRcLr62TGbUpdq5MzqnXolhGBprzecdKgxDo9riYpkX0qtIE7ko//mRC5T5+BOfjRAo29Zv/rVMxZ88e5/MqEtHu6C/L0S6WyANDpXp6b2Hbfusp78vRDXb9nnu+SWkt7MRkokwX3w0hJQZddkIHWXbO3HSQXo7G6Grs5mK0z906OpeJpvzePKPljk+EOPTOHX6Ppblc+6MTldnM5tJoOwIN68309XZTLVkIsxELop04qRDoeBSy927PhU//olNZtQl3S049UqMzSZQtr3+vhCpVIRakokwHe0CaWa2RC3ZnIc0N1eip7dEPK4xNBjFMDQ2m0DZ8R5/XKOWqKFRMZ93eLGniPT65SZMU6fa8pKH1N8XYiMEyrb1xJd1NsI0dSq6upexLJ/xsUZSqQhrffiRi7Rnt8ZG6GwB83mH27dXuf5Ll//40OebBwV/eriRVCrCZzExWWRm1kHas1ujs7OJZCLMTrVrl4b0u9/5fF7nzugMDpWxLJ/+vhBHjxjUMjPrICUSOhuhU2dTU6scOlykmmW5ZEaLpLtXGR9rwTA0Hsa2fXp675HNeVQbHFpiZDjM8YEYO9FXv9IArHJn2mM+75BMhKnl1m0PaVdMsNbTbQ1AGen4DwxqKRRcMqMu0jeeaWQjdOpoamqVQ4eLSCPDYQ4ejCAtLDicPV8im/N45JH7/Oj1FtZj2z49vffI5jzS3YKX+5uIxgQLCw5nz5c4cdKhpcXm6BGDncY0ddLdgmzO46/+2uatN7/AWlNTq1iWj/T1rzeyVioVoaN9lTvTHj/9WZGLF3ax1sXXlpFGhsO0tobYCEGd2LbPsYEVpLezEY4PxEgmwiQTYbo6m7lxLYaUGXWZmlplPdlckWzOI90tGB9roa2tkWQiTFdnMxO5KFJPb4n5vMNOdPqHBlI253Hp8hK27VMxn3c4NrCCND7WiGFo1DJ4oQlpcKjMpctLVNi2z6XLS2RGXeJxje9+p5mNCr16vulV6mB6usTf/p1DPK7x95ldrLV7t2D/Po+f/8Kl7Lp0/lmEtQoFl2eetZH+6d0Ye/eGqLZ3b4hdsTLv3fIIhVy+9VyEerlwceUCNbx6vulVNmDv3hD793n8/Bcu793ymHynxMLCA/7hjVX+4uUSd+9Culvwl6djNDRo1LJ/v84fP6Xxxj86vHfL463sKgsLDzh1eoW3si7xuMaNazH27dPZKJ06+bf3HaSXvqeznvZnG4ES2ZzH+JiPYWhUm5ktIY0MhzFNnbVs2+dXv3aRMqMu58+6tLaG2GmOHjHY91iIYwMrWJaPZblUjI81ku5uxjA0HiaVinDzOhwbWMGyfCzLRepoF1y9EsU0dTaDTp0s/ruHtH9/iPWYpk7FB4tlkokw1d559wHS155qoJYrY8tkcx4VM7Mlujqb2YlSqQgL70eYzztU/KGpYxgan1YqFWHh/QjzeQcpamiYps5mEmxx6W6BtLDgsFY25yEdONDAWhOTRU6cdIjHNc6d0ZHy+TI7XTIRJpkIk0yEMQyNzyOZCJNMhDFNnc0mqJMnvqwjzcw6PEyhQE3zeYcKw9CotrhY5oX0KtJELsrTbQ1IH3/io9SXoE72PRZCyoy6FAoutczNlbgz7fEw/X0hqtm2z3PPLyG9nY2QTIT54qMhpMyoi1JfgjpJpSJ0tAuk7w8sYds+1ebmSrzYU+SzOnX6Ppblc+6MTldnM8rWolNHV69Eee75JbI5j3/5zf/w0vd09u8P8c67D8jmPOJxjY52wZ1pj/XcvetT8eOf2GRGXdLdglOvxFC2HkEdmabOjWsxOtoFluVz4qTDC+lVsjmPdLfgxrUYjz+u8TDZnIc0N1eip7dEPK4xNBjFMDSUrUenzkxT559vfYG5uRIffuQiffUrDZimjpQZdZEeezREtaihUTGfd3ixp4j0+uUmTFOn2vKSh9TfF0KpL50toq2tkbVs26ciGhNUM02diq7uZSzLZ3yskVQqwloffuQi7dmtodSXYAv77W8fUJFMhFnr3BkdybJ8+vtCHD1iUMvMrIOUSOgo9SXYwm5OlZBGhsPU8nRbAxXHf2BQS6Hgkhl1kb7xTCNKfQnqrFBwqWU+7zA4VEY6eDBCLalUhI52gfTTnxWp5eJry0gjw2FaW0Mo9SWoo4nJIt8fWKJQcKk2MVmkq3sZaXyskWQizHoGLzQhDQ6VuXR5iQrb9rl0eYnMqEs8rvHd7zSj1J9OnRQKLi+kV5GyuXukuwWPPKJx67aHZflI587oHD1i8DBtbY3cvO5z6HCREycdrlz9hG8eFNy67WFZPvG4xo1rMVpbQyj1p1Mnra0hPrB2celvbDKjLtmcR0VHu+DPX2qgq7OZTyOVinDzOhwbWMGyfCzLRepoF1y9EsU0dZStQaeOTFPnR6+3cP6sy3/9t4cUNTRMU+ezSqUiLLwfYT7vIEUNDdPUUbYWnS2gtTVEa2uIzZBMhFG2LoGiBEigKAHSUepK0z/W+D0iUJQACRQlQAJFCZBAUQIkUJQACRQlQAJFCZBAUQIkUJQACRQlQAJFCZBAUQIkUJQACRQlQAJFCZBAUQIkUJQACRQlQAJFCZBAUQIkUJQACRQlQAJFCZBAUQIkUJQACRQlQAJFCZBAUQIkUJQA/S+kJX2iqO6m5wAAAABJRU5ErkJggg==); }

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
  background-size: 52px 30px; }`),n(`

---

`),t("b",{class:"t02"},"// html"),n(`

<div class="bar01">90</div>
<div class="bar02">90</div>
<div class="bar03">90</div>
<div class="bar04">60</div>
<div class="bar05">60</div>
<div class="bar06">60</div>
`)],-1),t("div",null,[t("div",{class:"bar01"},"90"),t("div",{class:"bar02"},"90"),t("div",{class:"bar03"},"90"),t("div",{class:"bar04"},"60"),t("div",{class:"bar05"},"60"),t("div",{class:"bar06"},"60")],-1),t("pre",null,[n(`
---

`),t("b",{class:"t02"},"// run"),n(`

$ npm run i
$ npm run l
`)],-1)])]),_:1}),l(a,{title:"node package (ex: stylelint)"},{default:e(()=>[...s[29]||(s[29]=[t("pre",null,[n(""),t("b",{class:"t01"},"$ npm install stylelint stylelint-config-standard stylelint-scss --save-dev"),n(`

---

project/
│
├ node_modules/
├ `),t("b",{class:"t01"},".stylelintignore"),n(`
├ `),t("b",{class:"t01"},".stylelintrc.json"),n(`
├ `),t("b",{class:"t01"},"package.json"),n(`
└ sass/

---

`),t("b",{class:"t02"},"// package.json"),n(`

`),t("b",{class:"t01"},`{
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
}`),n(`

---

`),t("b",{class:"t02"},"// .stylelintignore"),n(`

`),t("b",{class:"t01"},`sass/make/
sass/src/lib/_reset.scss
*.css
*.vue
`),n(`

---

`),t("b",{class:"t02"},"// .stylelintrc.json"),n(`

`),t("b",{class:"t01"},`{
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
}`),n(`

---

`),t("b",{class:"t02"},"// run"),n(`

$ npm run lint:css
`)],-1)])]),_:1}),l(a,{title:"node package (ex: autoprefixer)"},{default:e(()=>[...s[30]||(s[30]=[t("pre",null,[n(""),t("b",{class:"t01"},"$ npm install autoprefixer postcss-cli --save-dev"),n(`

---

project/
│
├ dest/
└ node_modules/

---

`),t("b",{class:"t02"},"// package.json"),n(`

`),t("b",{class:"t01"},`{
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
}`),n(`

---

`),t("b",{class:"t02"},"// run"),n(`

$ npm run autoprefix
`)],-1)])]),_:1}),l(a,{title:"node package (ex: imagemin)"},{default:e(()=>[...s[31]||(s[31]=[t("pre",null,[n(""),t("b",{class:"t01"},"$ npm install imagemin imagemin-mozjpeg imagemin-pngquant --save-dev"),n(`

---

project/
│
├ .lib/
│   `),t("b",{class:"t01"},"└ imagemin.js"),n(`
├ `),t("b",{class:"t03"},"img/"),n(`
├ `),t("b",{class:"t01"},"img_org/"),n(`
├ node_modules/
└ `),t("b",{class:"t01"},"package.json"),n(`

---

`),t("b",{class:"t02"},"// package.json"),n(`

`),t("b",{class:"t01"},`{
  "name": "project",
  "version": "1.0.1",
  "description": "",
  "main": "",
  "author": "",
  "license": "",
  "scripts": {
  "imagemin": "cp -r img_org/* img && node .lib/imagemin.js"
  },
  "devDependencies": {
  "imagemin": "",
  "imagemin-mozjpeg": "",
  "imagemin-pngquant": ""
  }
}`),n(`

---

`),t("b",{class:"t02"},"// .lib/imagemin.js"),n(`

`),t("b",{class:"t01"},`const pkg = require(\`../package.json\`);
const imagemin = require(\`imagemin\`);
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require(\`imagemin-pngquant\`);
const fs = require(\`fs\`);
const async = require(\`async\`);

const folder = \`img/\`;

const getFolders = (folder) => {
  fs.readdir(folder, (err, files) => {
    if (err) {
      throw err;
    }
    async.each(files, (i) => {
      if (!(/\\./.test(i))) {
        getFolders(\`\${folder}\${i}/\`);
        imageMin(\`\${folder}\${i}/\`);
      }
    });
  });
}

const imageMin = (folder) => {
  imagemin([\`\${folder}*.png\`, \`\${folder}*.jpg\`], folder, {
    plugins: [
      imageminMozjpeg({quality: 60}),
      imageminPngquant({quality: \`65-80\`})
    ]
  }).then(files => {
    console.log(\`imagemin: -> \${folder}\`);
  });
}

getFolders(folder);
imageMin(folder);`),n(`

---

`),t("b",{class:"t02"},"// run"),n(`

$ npm run imagemin
`)],-1)])]),_:1}),l(a,{title:"node package (ex: browser-sync, watch)"},{default:e(()=>[...s[32]||(s[32]=[t("pre",null,[n(""),t("b",{class:"t01"},"$ npm install browser-sync sass watch --save-dev"),n(`

---

project/
│
├ .lib/
│   `),t("b",{class:"t01"},"└ browser-sync.sh"),n(`
├ dest/
│   `),t("b",{class:"t03"},"├ project.css"),n(`
│   `),t("b",{class:"t03"},"└ project.js"),n(`
├ html/
├ img/
├ js/
├ node_modules/
├ `),t("b",{class:"t01"},"package.json"),n(`
└ sass/

---

`),t("b",{class:"t02"},"// package.json"),n(`

`),t("b",{class:"t01"},`{
  "name": "project",
  "version": "1.0.1",
  "description": "",
  "main": "",
  "author": "",
  "license": "",
  "scripts": {
  "make:js": "cat js/*.js > dest/project.js",
  "make:css": "sass sass:dest",
  "watch:js": "watch 'npm run make:js' js/src/",
  "watch:sass": "watch 'npm run make:css' sass/src/mod/",
  "browser": "sh .lib/browser-sync.sh",
  "w": "npm run watch:js & npm run watch:sass & npm run browser"
  },
  "devDependencies": {
  "browser-sync": "",
  "sass": "",
  "watch": ""
  }
}`),n(`

---

`),t("b",{class:"t02"},"// .lib/browser-sync.sh"),n(`

`),t("b",{class:"t01"},`#!/bin/bash

pj_title=$(basename \`pwd\`)

browser-sync start --proxy 127.0.0.1:8888/\${pj_title}/html/index.html --files './html/**/*.html,./html/**/*.php,./dest/**/*.css,./dest/**/*.js'

exit 0`),n(`

---

`),t("b",{class:"t02"},"// run"),n(`

`),t("b",{class:"t03"},"terminal 1"),n(`
`),t("b",{class:"t01"},"$ php -S 127.0.0.1:8888 -t={"),n("workspace"),t("b",{class:"t01"},[n(`}
`),t("b",{class:"t03"},"terminal 2"),n(`
$ cd {`)]),n("project"),t("b",{class:"t01"},`}
$ npm run w`),n(`
`)],-1)])]),_:1}),l(a,{title:"node package (ex: webpack)"},{default:e(()=>[t("pre",null,[s[36]||(s[36]=n("",-1)),s[37]||(s[37]=t("b",{class:"t01"},"$ npm install @babel/core @babel/preset-env babel-loader css-loader eslint eslint-loader eslint-config-prettier eslint-plugin-prettier prettier license-info-webpack-plugin sass sass-loader style-loader vue vue-loader vue-template-compiler webpack webpack-cli --save-dev",-1)),s[38]||(s[38]=n(`

---

project/
│
├ `,-1)),s[39]||(s[39]=t("b",{class:"t01"},".eslintrc.js",-1)),s[40]||(s[40]=n(`
├ `,-1)),s[41]||(s[41]=t("b",{class:"t01"},".prettierrc",-1)),s[42]||(s[42]=n(`
├ css/
├ dest/
│   `,-1)),s[43]||(s[43]=t("b",{class:"t03"},"└ project.js",-1)),s[44]||(s[44]=n(`
├ html/
├ img/
├ `,-1)),s[45]||(s[45]=t("b",{class:"t01"},"js/",-1)),s[46]||(s[46]=n(`
│   `,-1)),s[47]||(s[47]=t("b",{class:"t01"},"└ src/",-1)),s[48]||(s[48]=n(`
│     `,-1)),s[49]||(s[49]=t("b",{class:"t01"},"├ fnc/",-1)),s[50]||(s[50]=n(`
│     `,-1)),s[51]||(s[51]=t("b",{class:"t01"},"├ lib/",-1)),s[52]||(s[52]=n(`
│     `,-1)),s[53]||(s[53]=t("b",{class:"t01"},"└ main.js",-1)),s[54]||(s[54]=n(`
├ node_modules/
├ `,-1)),s[55]||(s[55]=t("b",{class:"t01"},"package.json",-1)),s[56]||(s[56]=n(`
├ sass/
└ `,-1)),s[57]||(s[57]=t("b",{class:"t01"},"webpack.config.js",-1)),s[58]||(s[58]=n(`

---

`,-1)),s[59]||(s[59]=t("b",{class:"t02"},"// package.json",-1)),s[60]||(s[60]=n(`

`,-1)),s[61]||(s[61]=t("b",{class:"t01"},`{
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
}`,-1)),s[62]||(s[62]=n(`

---

`,-1)),s[63]||(s[63]=t("b",{class:"t02"},"// .eslintrc.js",-1)),s[64]||(s[64]=n(`

`,-1)),l(o,null,{default:e(()=>[...s[33]||(s[33]=[t("b",{class:"t01"},`module.exports = {
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
};`,-1),n(`
`,-1)])]),_:1}),s[65]||(s[65]=n(`

---

`,-1)),s[66]||(s[66]=t("b",{class:"t02"},"// .prettier",-1)),s[67]||(s[67]=n(`

`,-1)),l(o,null,{default:e(()=>[...s[34]||(s[34]=[t("b",{class:"t01"},`{
  "printWidth": 120,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "es5",
  "semi": true,
  "parser": "typescript"
}`,-1),n(`
`,-1)])]),_:1}),s[68]||(s[68]=n(`

---

`,-1)),s[69]||(s[69]=t("b",{class:"t02"},"// webpack.config.js",-1)),s[70]||(s[70]=n(`

`,-1)),l(o,null,{default:e(()=>[...s[35]||(s[35]=[t("b",{class:"t01"},`const path = require('path');
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
        test: /\\.js$/,
        exclude: /\\/node_modules\\//,
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
        test: /\\.js$/,
        exclude: /node_modules/,
        options: {
          configFile: '.eslintrc.js',
        },
      },
      {
        test: /\\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\\.scss$/,
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

};`,-1),n(`
`,-1)])]),_:1}),s[71]||(s[71]=n(`

---

`,-1)),s[72]||(s[72]=t("b",{class:"t02"},"// run",-1)),s[73]||(s[73]=n(`

$ npm run l
$ npm run r
`,-1))])]),_:1}),l(a,{title:"temp_npm.zip"},{default:e(()=>[t("pre",null,[s[76]||(s[76]=n(`Download and Unzip temp_npm.zip(45KB).

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

`,-1)),s[77]||(s[77]=t("b",{class:"t02"},"// npm install",-1)),s[78]||(s[78]=n(`

`,-1)),s[79]||(s[79]=t("b",{class:"t01"},"$ npm install @babel/core @babel/preset-env babel-loader autoprefixer browser-sync css-loader datauri eslint eslint-config-prettier eslint-loader eslint-plugin-prettier imagemin imagemin-mozjpeg imagemin-pngquant json-minify license-info-webpack-plugin sass postcss-cli prettier replace sass-loader spritesmith style-loader stylelint stylelint-config-standard stylelint-scss vue vue-loader vue-template-compiler watch webpack webpack-cli --save-dev",-1)),s[80]||(s[80]=n(`

---

`,-1)),s[81]||(s[81]=t("b",{class:"t02"},"// package.json",-1)),s[82]||(s[82]=n(`

`,-1)),l(o,null,{default:e(()=>[...s[74]||(s[74]=[n(`{
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
    "make:js": "npm run lint:js && webpack --mode development",
    "make:js:r": "npm run lint:js && webpack --mode production",
    "clean:scss": "sh .lib/clean-scss.sh",
    "clean:ds": "find . -name '.DS_Store' -print -exec rm {} ';'",
    "clean": "npm run clean:scss & npm run clean:ds",
    "base64": "node .lib/base64.js",
    "sprite": "node .lib/spritesmith.js",
    "imagemin": "cp -r img_org/* img && node .lib/imagemin.js",
    "concat:scss": "sh .lib/concat-scss.sh",
    "lint:css": "npx stylelint sass",
    "make:css": "npm run lint:css && npm run concat:scss && sass sass:dest",
    "make:css:r": "npm run lint:css && npm run concat:scss && sass sass:dest --style=compressed",
    "autoprefix": "npx postcss dest/*.css --use autoprefixer -d dest/ --no-map",
    "lint:js": "npx prettier --write js",
    "watch:js": "watch 'npm run make:js' js/src/",
    "watch:sass": "watch 'npm run make:css' sass/src/mod/",
    "browser": "sh .lib/browser-sync.sh",
    "i": "npm run replace && npm run clean && npm run base64 && npm run sprite && npm run imagemin",
    "l": "npm run replace && npm run make:js && npm run make:css && npm run autoprefix",
    "w": "npm run watch:js & npm run watch:sass & npm run browser",
    "r": "npm run make:js:r && npm run make:css:r && npm run autoprefix"
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
`,-1)])]),_:1}),s[83]||(s[83]=n(`

---

`,-1)),s[84]||(s[84]=t("b",{class:"t02"},"// README.md",-1)),s[85]||(s[85]=n(`

`,-1)),l(o,null,{default:e(()=>[...s[75]||(s[75]=[n(`# project information

## php server

\`\`\`
$ php -S 127.0.0.1:8888 -t={workspace}
\`\`\`

## install package

\`\`\`
$ npm install
\`\`\`

## run scripts

\`\`\`
$ npm run l `,-1),t("b",{class:"t02"},"// compile css, js",-1),n(`

$ npm run i `,-1),t("b",{class:"t02"},"// make sprite, base64, imagemin",-1),n(`
$ npm run w `,-1),t("b",{class:"t02"},"// watch, livereload",-1),n(`
$ npm run r `,-1),t("b",{class:"t02"},"// minify css, js",-1),n(`
\`\`\`


## imagemin usage

\`\`\`
project/
│
├ img/  `,-1),t("b",{class:"t02"},"// <- don't touch",-1),n(`
└ img_org/  `,-1),t("b",{class:"t02"},"// <- put images here",-1),n(`
\`\`\`


## sprite usage

\`\`\`
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
\`\`\`


## base64 usage

\`\`\`
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
\`\`\`
`,-1)])]),_:1}),s[86]||(s[86]=n(`
`,-1))])]),_:1})]),_:1})],64))}}),Vt=Object.freeze(Object.defineProperty({__proto__:null,default:Jn,metadata:on},Symbol.toStringTag,{value:"Module"})),an={updateDate:"2020/12/19"},Zn=f({__name:"set-image-thumb",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"set-image-thumb","sample-url":"/sample/html/set-image-thumb.html","update-date":an.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[0]||(s[0]=[t("b",{class:"t02"},`<!doctype html>
<title>setImgThumb</title>
<meta name="viewport" content="width=device-width">
<meta charset="utf-8">

<style>
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
</style>`,-1),n(`


`,-1),t("b",{class:"t03"},`<form>

<div class="attachFile">
<span class="attachText">Select image</span>
<input class="attachImg" type="file" name="">
<div class="attachSub"></div>
</div>

<div class="attachFile">
<span class="attachText">Select image</span>
<input class="attachImg" type="file" name="">
<div class="attachSub"></div>
</div>

<div class="attachFile">
<span class="attachText">Select image</span>
<input class="attachImg" type="file" name="">
<div class="attachSub"></div>
</div>

</form>`,-1),n(`

`,-1),t("b",{class:"t01"},`<script>
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

      sub.innerHTML = \`<span class="attachThumb"></span><span class="attachFileName"></span><span class="attachDelete">delete</span>\`;
      var thumb = parentDiv.getElementsByClassName('attachThumb')[0];
      var attachFileName = parentDiv.getElementsByClassName('attachFileName')[0];
      var deleteBtn = parentDiv.getElementsByClassName('attachDelete')[0];

      var reader = new FileReader();
      reader.onload = function () {
        attachFileName.innerHTML = filename;
        thumb.innerHTML = \`<img src="\${reader.result}" alt="">\`;
        deleteBtn.addEventListener('click', function (ev) {
          sub.parentNode.querySelector('.attachImg').value = '';
          sub.innerHTML = '';
        });
      };
      reader.readAsDataURL(file[0]);
    });
  });
})(window, document);
<\/script>`,-1),n(`
`,-1)])]),_:1}),s[1]||(s[1]=n(`
`,-1))])]),_:1})],64))}}),Ft=Object.freeze(Object.defineProperty({__proto__:null,default:Zn,metadata:an},Symbol.toStringTag,{value:"Module"})),rn={updateDate:"2016/07/16"},Gn=f({__name:"smooth-scroll-jquery",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"smooth-scroll-jquery","sample-url":"/sample/html/smooth-scroll-jquery.html","update-date":rn.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[t("pre",null,[t("code",null,[l(o,null,{default:e(()=>[...s[0]||(s[0]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"><\/script>`,-1),n(`

<script>
jQuery(function($){
  `,-1),t("b",{class:"t01"},`var hash;
  var pos;
  $('a[href ^= \\'#\\']').on('click', (el) => {
    hash = el.target.hash;
    if (hash === '#top') {
      pos = 0;
    } else {
      pos = $(hash).offset().top;
    }
    $('html, body').animate({scrollTop: pos}, `,-1),n("300",-1),t("b",{class:"t01"},", '",-1),n("linear",-1),t("b",{class:"t01"},`');
    return false;
  });`,-1),n(`
});

`,-1),t("b",{class:"t02"},`// $("a[href ^= '#']") ... #から始まるhrefを持つaタグ`,-1),n(`
`,-1),t("b",{class:"t02"},'// htmlで href="#top" にすればtopまでスクロール',-1),n(`
`,-1),t("b",{class:"t02"},"// 300 ... スピード",-1),n(`
`,-1),t("b",{class:"t02"},"// linear, swing ... 動きの種類",-1),n(`
`,-1),t("b",{class:"t02"},"// return false ... preventDefaultの役割",-1),n(`
<\/script>

`,-1),t("b",{class:"t02"},`<style>
html, body, ul, p {margin: 0; padding: 0; font-size: 14px;}
h1 {margin: 0;}
ul {position: fixed; top: 0; right: 0;}
li {list-style: none;}
a {display: block; width: 44px; height: 44px; border: #ddd 1px dotted; background: #fff; cursor: pointer;}
p {height: 400px;}
#a, #c, #e {background: #eee;}
</style>`,-1),n(`

<ul>
<li><a `,-1),t("b",{class:"t03"},'href="#top"',-1),n(`>top</a></li>
<li><a `,-1),t("b",{class:"t03"},'href="#a"',-1),n(`>a</a></li>
<li><a `,-1),t("b",{class:"t03"},'href="#b"',-1),n(`>b</a></li>
<li><a `,-1),t("b",{class:"t03"},'href="#c"',-1),n(`>c</a></li>
<li><a `,-1),t("b",{class:"t03"},'href="#d"',-1),n(`>d</a></li>
<li><a `,-1),t("b",{class:"t03"},'href="#e"',-1),n(`>e</a></li>
<li><a `,-1),t("b",{class:"t03"},'href="#f"',-1),n(`>f</a></li>
</ul>

<h1>smooth scroll</h1>
<p `,-1),t("b",{class:"t04"},'id="a"',-1),n(`>a</p>
<p `,-1),t("b",{class:"t04"},'id="b"',-1),n(`>b</p>
<p `,-1),t("b",{class:"t04"},'id="c"',-1),n(`>c</p>
<p `,-1),t("b",{class:"t04"},'id="d"',-1),n(`>d</p>
<p `,-1),t("b",{class:"t04"},'id="e"',-1),n(`>e</p>
<p `,-1),t("b",{class:"t04"},'id="f"',-1),n(`>f</p>
`,-1)])]),_:1}),s[1]||(s[1]=n(`
`,-1))])])]),_:1})],64))}}),Ut=Object.freeze(Object.defineProperty({__proto__:null,default:Gn,metadata:rn},Symbol.toStringTag,{value:"Module"})),dn={updateDate:"2020/04/01"},Kn=f({__name:"smooth-scroll",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"smooth-scroll","sample-url":"/sample/html/smooth-scroll.html","update-date":dn.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[s[54]||(s[54]=t("p",{class:"text-black"},[n(" // support IE11, iOS Safari and more"),t("br"),n(" // buffer unavailable ")],-1)),t("pre",null,[t("code",null,[s[1]||(s[1]=n(`// npm package

---

`,-1)),s[2]||(s[2]=t("b",{class:"t01"},"npm i --save smoothscroll-polyfill",-1)),s[3]||(s[3]=n(`

---
`,-1)),l(o,null,{default:e(()=>[...s[0]||(s[0]=[n(`
`,-1),t("b",{class:"t01"},[t("b",{class:"t04"},"import smoothscroll from 'smoothscroll-polyfill';"),n(`

export const smoothScroll = (`),t("b",{class:"t05"},"cls"),n(`) => {
  `),t("b",{class:"t04"},"smoothscroll.polyfill();"),n(`
  document.addEventListener('click', (ev) => {
    const target = ev.target;
    if (!target.classList.contains(cls)) {
      return;
    }
    ev.preventDefault();
    const targetId = target.`),t("b",{class:"t06"},"hash"),n(`;
    document.querySelector(targetId).`),t("b",{class:"t03"},`scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })`),n(`;
  });
};`)],-1),n(`
`,-1)])]),_:1}),s[4]||(s[4]=n(`

---

`,-1)),s[5]||(s[5]=t("b",{class:"t04"},"import {smoothScroll} from './fnc/smoothScroll';",-1)),s[6]||(s[6]=n(`

`,-1)),s[7]||(s[7]=t("b",{class:"t01"},[n(`window.onload = () => {
  smoothScroll(`),t("b",{class:"t05"},"smoothScroll"),n(`);
};`)],-1)),s[8]||(s[8]=n(`

---

<ul>
<li><a class="`,-1)),s[9]||(s[9]=t("b",{class:"t05"},"smoothScroll",-1)),s[10]||(s[10]=n('" href="',-1)),s[11]||(s[11]=t("b",{class:"t06"},"#top",-1)),s[12]||(s[12]=n(`">top</a></li>
<li><a class="`,-1)),s[13]||(s[13]=t("b",{class:"t05"},"smoothScroll",-1)),s[14]||(s[14]=n('" href="',-1)),s[15]||(s[15]=t("b",{class:"t06"},"#a",-1)),s[16]||(s[16]=n(`">a</a></li>
<li><a class="`,-1)),s[17]||(s[17]=t("b",{class:"t05"},"smoothScroll",-1)),s[18]||(s[18]=n('" href="',-1)),s[19]||(s[19]=t("b",{class:"t06"},"#b",-1)),s[20]||(s[20]=n(`">b</a></li>
<li><a class="`,-1)),s[21]||(s[21]=t("b",{class:"t05"},"smoothScroll",-1)),s[22]||(s[22]=n('" href="',-1)),s[23]||(s[23]=t("b",{class:"t06"},"#c",-1)),s[24]||(s[24]=n(`">c</a></li>
<li><a class="`,-1)),s[25]||(s[25]=t("b",{class:"t05"},"smoothScroll",-1)),s[26]||(s[26]=n('" href="',-1)),s[27]||(s[27]=t("b",{class:"t06"},"#d",-1)),s[28]||(s[28]=n(`">d</a></li>
<li><a class="`,-1)),s[29]||(s[29]=t("b",{class:"t05"},"smoothScroll",-1)),s[30]||(s[30]=n('" href="',-1)),s[31]||(s[31]=t("b",{class:"t06"},"#e",-1)),s[32]||(s[32]=n(`">e</a></li>
<li><a class="`,-1)),s[33]||(s[33]=t("b",{class:"t05"},"smoothScroll",-1)),s[34]||(s[34]=n('" href="',-1)),s[35]||(s[35]=t("b",{class:"t06"},"#f",-1)),s[36]||(s[36]=n(`">f</a></li>
</ul>

<h1 id="`,-1)),s[37]||(s[37]=t("b",{class:"t06"},"top",-1)),s[38]||(s[38]=n(`">smooth scroll</h1>
<p id="`,-1)),s[39]||(s[39]=t("b",{class:"t06"},"a",-1)),s[40]||(s[40]=n(`">a</p>
<p id="`,-1)),s[41]||(s[41]=t("b",{class:"t06"},"b",-1)),s[42]||(s[42]=n(`">b</p>
<p id="`,-1)),s[43]||(s[43]=t("b",{class:"t06"},"c",-1)),s[44]||(s[44]=n(`">c</p>
<p id="`,-1)),s[45]||(s[45]=t("b",{class:"t06"},"d",-1)),s[46]||(s[46]=n(`">d</p>
<p id="`,-1)),s[47]||(s[47]=t("b",{class:"t06"},"e",-1)),s[48]||(s[48]=n(`">e</p>
<p id="`,-1)),s[49]||(s[49]=t("b",{class:"t06"},"f",-1)),s[50]||(s[50]=n(`">f</p>
`,-1))])]),t("pre",null,[t("code",null,[s[52]||(s[52]=n(`// inline

---
`,-1)),l(o,null,{default:e(()=>[...s[51]||(s[51]=[n(`
<!doctype html>
<title>smoothScroll</title>
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">

<style>
html, body, ul, p {margin: 0; padding: 0; font-size: 14px;}
h1 {margin: 0;}
ul {position: fixed; top: 0; right: 0;}
li {list-style: none;}
a {display: block; width: 44px; height: 44px; border: #ddd 1px dotted; background: #fff; cursor: pointer;}
p {height: 400px;}
#a, #c, #e {background: #eee;}
</style>

<ul>
<li><a class="smoothScroll" href="#top">top</a></li>
<li><a class="smoothScroll" href="#a">a</a></li>
<li><a class="smoothScroll" href="#b">b</a></li>
<li><a class="smoothScroll" href="#c">c</a></li>
<li><a class="smoothScroll" href="#d">d</a></li>
<li><a class="smoothScroll" href="#e">e</a></li>
<li><a class="smoothScroll" href="#f">f</a></li>
</ul>

<h1 id="top">smooth scroll</h1>
<p id="a">a</p>
<p id="b">b</p>
<p id="c">c</p>
<p id="d">d</p>
<p id="e">e</p>
<p id="f">f</p>

<script src="`,-1),t("a",{href:"/sample/js/scroll2/polyfill.min.js"},"polyfill.min.js",-1),n(`"><\/script>
<script>
(function(cls){
  document.addEventListener('click', (ev) => {
    const target = ev.target;
    if (!target.classList.contains(cls)) {
      return;
    }
    ev.preventDefault();
    const targetId = target.hash;
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
})('smoothScroll');
<\/script>
`,-1)])]),_:1}),s[53]||(s[53]=n(`
`,-1))])])]),_:1})],64))}}),Qt=Object.freeze(Object.defineProperty({__proto__:null,default:Kn,metadata:dn},Symbol.toStringTag,{value:"Module"})),pn={updateDate:"2024/03/12"},_n=f({__name:"vue",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"vue","update-date":pn.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[l(a,{title:"cli install"},{default:e(()=>[...s[0]||(s[0]=[t("pre",null,[t("b",{class:"t01"},`npm install -g @vue/cli
npm install -g @vue/cli-service-global`),n(`
`)],-1)])]),_:1}),l(a,{title:"project"},{default:e(()=>[...s[1]||(s[1]=[t("pre",null,[t("b",{class:"t01"},`vue create [project name]
npm run serve
npm run build`),n(`

* change path (vue.config.js)
module.exports = {
  publicPath: './'
}
`)],-1)])]),_:1}),l(a,{title:"mustache"},{default:e(()=>[t("pre",null,[s[3]||(s[3]=n("",-1)),l(o,null,{default:e(()=>[...s[2]||(s[2]=[n(`<!doctype html>
<title>title</title>
<script src="`,-1),t("b",{class:"t01"},"https://cdn.jsdelivr.net/npm/vue",-1),n(`"><\/script>

<div id="`,-1),t("b",{class:"t03"},"target",-1),n(`">
  `,-1),t("b",{class:"t04"},"{{ foo }}",-1),n(`
</div>

<script>
`,-1),t("b",{class:"t01"},"new Vue({",-1),n(),t("b",{class:"t02"},"// const app = new Vue({ is same",-1),n(`
`,-1),t("b",{class:"t01"},"  el: '",-1),t("b",{class:"t03"},"#target",-1),t("b",{class:"t01"},[n(`',
  data: {
    `),t("b",{class:"t04"},"foo"),n(": '")],-1),n("hello",-1),t("b",{class:"t01"},`',
  },
});`,-1),n(`
<\/script>
`,-1)])]),_:1}),s[4]||(s[4]=n(`
`,-1))])]),_:1}),l(a,{title:"$mount"},{default:e(()=>[t("pre",null,[s[6]||(s[6]=n("",-1)),l(o,null,{default:e(()=>[...s[5]||(s[5]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="`,-1),t("b",{class:"t03"},"target",-1),n(`">{{ foo }}</div>

<script>
new Vue({
  data: {
    foo: 'hello',
  },
})`,-1),t("b",{class:"t01"},".$mount(",-1),t("b",{class:"t03"},"'#target'",-1),t("b",{class:"t01"},")",-1),n(`;
<\/script>
`,-1)])]),_:1}),s[7]||(s[7]=n(`
`,-1))])]),_:1}),l(a,{title:"template"},{default:e(()=>[t("pre",null,[s[9]||(s[9]=n("",-1)),l(o,null,{default:e(()=>[...s[8]||(s[8]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="`,-1),t("b",{class:"t03"},"target",-1),n(`"></div>

<script>
new Vue({
  el: '`,-1),t("b",{class:"t03"},"#target",-1),n(`',
  `,-1),t("b",{class:"t01"},"template",-1),n(`: '<p>{{ foo }}</p>',
  data: {
    foo: 'hello',
  },
});
<\/script>
`,-1)])]),_:1}),s[10]||(s[10]=n(`
`,-1))])]),_:1}),l(a,{title:"reactive"},{default:e(()=>[t("pre",null,[s[13]||(s[13]=n(`// onClick

`,-1)),l(o,null,{default:e(()=>[...s[11]||(s[11]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="target">
  {{ foo }}
</div>

<button `,-1),t("b",{class:"t03"},'onclick="action();"',-1),n(`>click </button>

<script>
const data = {
  foo: 'hello',
};

new Vue({
  el: '#target',
  data: data,
});

`,-1),t("b",{class:"t01"},`const action = () => {
  `,-1),n("data.foo = 'clicked';",-1),t("b",{class:"t01"},`
}`,-1),n(`;

`,-1),t("b",{class:"t02"},"// Reactive - Once bound to mustache, the variables set outside the vue object are also updated.",-1),n(`

<\/script>
`,-1)])]),_:1}),s[14]||(s[14]=n(`

---

// onInput

`,-1)),l(o,null,{default:e(()=>[...s[12]||(s[12]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="target">
  {{ foo }}
</div>

<input type="text" `,-1),t("b",{class:"t03"},[n('onInput="action('),t("b",{class:"t01"},"event"),n(');"')],-1),n(`>
`,-1),t("b",{class:"t02"},"<!-- ok) event, ng) ev -->",-1),n(`

<script>
const data = {
  foo: \`let's type\`,
};

new Vue({
  el: '#target',
  data: data,
});

`,-1),t("b",{class:"t01"},`const action = (ev) => {
  `,-1),n("data.foo = ev.target.value;",-1),t("b",{class:"t01"},`
}`,-1),n(`;
<\/script>
`,-1)])]),_:1}),s[15]||(s[15]=n(`
`,-1))])]),_:1}),l(a,{title:"render"},{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[16]||(s[16]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="target">
  {{ foo }}
</div>

<button onclick="action();">click </button>

<script>
const data = {
  foo: 'hello',
};

new Vue({
  el: '#target',
  data: data,
  `,-1),t("b",{class:"t01"},[n("render: ("),t("b",{class:"t03"},"element"),n(") => {")],-1),n(),t("b",{class:"t02"},"// render(element) { is same",-1),n(`
    return `,-1),t("b",{class:"t03"},"element",-1),n(`('p', data.foo);
    `,-1),t("b",{class:"t02"},`// or
    // return element('p',
    // { 'style': 'font-size: 16px; color: #f00;' }, // option
    // data.foo);`,-1),n(`
  `,-1),t("b",{class:"t01"},"}",-1),n(`,
});

const action = () => {
  data.foo = 'clicked (Replaced div with p)';
};
<\/script>
`,-1)])]),_:1}),s[20]||(s[20]=n(`

---

// Nested Virtual DOM

`,-1)),l(o,null,{default:e(()=>[...s[17]||(s[17]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="target"></div>

<script>
const data = {
  text1: 'text1',
  text2: 'text2',
};

new Vue({
  el: '#target',
  data: data,
  `,-1),t("b",{class:"t01"},[n(`render(element) {
    `),t("b",{class:"t03"},[n("return element('"),t("b",{class:"t00"},"ul"),n(`',
      [
        `),t("b",{class:"t05"},[n("element('"),t("b",{class:"t00"},"li"),n("', "),t("b",{class:"t00"},"this.text1"),n(`),
        element('`),t("b",{class:"t00"},"li"),n("', "),t("b",{class:"t00"},"this.text2"),n("),")]),n(`
      ]
    );`)]),n(`
  }`)],-1),n(`,
});
<\/script>
`,-1)])]),_:1}),s[21]||(s[21]=n(`

---

// Options of Virtual DOM

`,-1)),l(o,null,{default:e(()=>[...s[18]||(s[18]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="target"></div>

<script>
const data = {
  text1: 'click1',
  text2: 'click2',
};

new Vue({
  el: '#target',
  data: data,
  render(element) {
    `,-1),t("b",{class:"t03"},[n("return element('"),t("b",{class:"t00"},"ul"),n(`',
      `),t("b",{class:"t01"},[n(`{
        class: '`),t("b",{class:"t00"},"cls"),n(`',
        style: '`),t("b",{class:"t00"},"color: #f00;"),n(`',
        on: {
          click(ev) {`),t("b",{class:"t00"},`
            alert(ev.target.innerHTML);
          `),n(`},
        },
      }`)]),n(`,
      [
        `),t("b",{class:"t00"},`element('li', this.text1),
        element('li', this.text2),`),n(`
      ]
    );`)],-1),n(`
  },
});
<\/script>
`,-1)])]),_:1}),s[22]||(s[22]=n(`

---

// value status

`,-1)),l(o,null,{default:e(()=>[...s[19]||(s[19]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>

<script>`,-1),n(`
const `,-1),t("b",{class:"t01"},"foo",-1),n(` = {
  a: 1,
};

const `,-1),t("b",{class:"t03"},"app",-1),n(` = new Vue({
  data: `,-1),t("b",{class:"t01"},"foo",-1),n(`,
});

console.log(`,-1),t("b",{class:"t03"},"app",-1),n(".a === ",-1),t("b",{class:"t01"},"foo",-1),n(".a); ",-1),t("b",{class:"t02"},"// true",-1),n(`

`,-1),t("b",{class:"t03"},"app",-1),n(`.a = 2;
console.log(`,-1),t("b",{class:"t01"},"foo",-1),n(".a); ",-1),t("b",{class:"t02"},"// 2",-1),n(`

`,-1),t("b",{class:"t01"},"foo",-1),n(`.a = 3;
console.log(`,-1),t("b",{class:"t03"},"app",-1),n(".a); ",-1),t("b",{class:"t02"},"// 3",-1),n(`
`,-1),t("b",{class:"t02"},"<\/script>",-1),n(`
`,-1)])]),_:1}),s[23]||(s[23]=n(`
`,-1))])]),_:1}),l(a,{title:"v-html"},{default:e(()=>[t("pre",null,[s[26]||(s[26]=n("",-1)),l(o,null,{default:e(()=>[...s[24]||(s[24]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <p `,-1),t("b",{class:"t01"},'v-html="',-1),t("b",{class:"t03"},"inner",-1),t("b",{class:"t01"},'"',-1),n(`></p>
</div>

<script>
const data = {
  `,-1),t("b",{class:"t03"},"inner",-1),n(`: \`<span style="color: #f00;">span</span>\`,
};

new Vue({
  el: '#app',
  data: data,
});
<\/script>
`,-1)])]),_:1}),s[27]||(s[27]=n(`

---

`,-1)),l(o,null,{default:e(()=>[...s[25]||(s[25]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <ol v-html="list"></ol>
</div>

<input type="text" onInput="input(event)">

<button onClick="action()">add</button>

<script>
const data = {
  list: \`<li>text</li>\`,
};

new Vue({
  el: '#app',
  data: data,
});

const input = (ev) => {
  data.item = ev.target.value;
}

const action = () => {
  data.list += '<li>' + data.item + '</li>';
}
<\/script>
`,-1)])]),_:1}),s[28]||(s[28]=n(`
`,-1))])]),_:1}),l(a,{title:"v-bind"},{default:e(()=>[t("pre",null,[s[35]||(s[35]=n("",-1)),l(o,null,{default:e(()=>[...s[29]||(s[29]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app" `,-1),t("b",{class:"t01"},"v-bind:",-1),t("b",{class:"t03"},[n('style="'),t("b",{class:"t04"},"bg"),n('"')],-1),n(`>
  {{ foo }}
</div>

<script>
new Vue({
  el: '#app',
  data: {
    foo: 'hello',
    `,-1),t("b",{class:"t04"},"bg",-1),t("b",{class:"t03"},": 'background: #f00;'",-1),n(`,
  },
});

`,-1),t("b",{class:"t02"},`// v-bind:***="***"
// :***="***" // 省略表記`,-1),n(`
<\/script>
`,-1)])]),_:1}),s[36]||(s[36]=n(`

---

// error exsample

`,-1)),l(o,null,{default:e(()=>[...s[30]||(s[30]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app" `,-1),t("b",{class:"t03"},[n('style="'),t("b",{class:"t04"},"{{ bg }}"),n('"')],-1),n(`>
  {{ foo }}
</div>

<script>
new Vue({
  el: '#app',
  data: {
    foo: 'hello',
    `,-1),t("b",{class:"t04"},"bg",-1),t("b",{class:"t03"},": 'background: #f00;'",-1),n(`,
  },
});

`,-1),t("b",{class:"t02"},"// mustache cannot be set to a value",-1),n(`
<\/script>
`,-1)])]),_:1}),s[37]||(s[37]=n(`

---

// array binding

`,-1)),l(o,null,{default:e(()=>[...s[31]||(s[31]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<style>
.isRed { color: #f00; }
.isBlue { color: #00f; }
.isRed.isBlue { color: #f0f; }
</style>

<div id="app" `,-1),t("b",{class:"t01"},"v-bind:",-1),n('class="',-1),t("b",{class:"t03"},"[ paintRed, paintBlue ]",-1),n(`">
  {{ foo }}
</div>

<script>
new Vue({
  el: '#app',
  data: {
    foo: 'hello',
    `,-1),t("b",{class:"t03"},[n("paintRed: "),t("b",{class:"t04"},"'isRed'")],-1),n(`,
    `,-1),t("b",{class:"t03"},[n("paintBlue: "),t("b",{class:"t04"},"null")],-1),n(`,
  },
});
<\/script>
`,-1)])]),_:1}),s[38]||(s[38]=n(`

---

// object binding 1

`,-1)),l(o,null,{default:e(()=>[...s[32]||(s[32]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<style>
.isRed { color: #f00; }
.isBlue { color: #00f; }
.isRed.isBlue { color: #f0f; }
</style>

<div id="app" `,-1),t("b",{class:"t01"},"v-bind:",-1),n('class="',-1),t("b",{class:"t03"},"{ isRed: paintRed, isBlue: paintBlue }",-1),n(`">
  {{ foo }}
</div>

<script>
new Vue({
  el: '#app',
  data: {
    foo: 'hello',
    `,-1),t("b",{class:"t03"},[n("paintRed: "),t("b",{class:"t04"},"true")],-1),n(`,
    `,-1),t("b",{class:"t03"},[n("paintBlue: "),t("b",{class:"t04"},"false")],-1),n(`,
  },
});
<\/script>
`,-1)])]),_:1}),s[39]||(s[39]=n(`

---

// object binding 2

`,-1)),l(o,null,{default:e(()=>[...s[33]||(s[33]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app" `,-1),t("b",{class:"t01"},"v-bind:",-1),n('style="',-1),t("b",{class:"t03"},"styles",-1),n(`">
  {{ foo }}
</div>

<script>
new Vue({
  el: '#app',
  data: {
    foo: 'hello',
    `,-1),t("b",{class:"t03"},`styles: {
      margin: '5px',
      padding: '5px',
      fontSize: '18px',
      fontWeight: 'bold',
      backgroundColor: '#f1f1f1',
    }`,-1),n(`,
  },
});
<\/script>
`,-1)])]),_:1}),s[40]||(s[40]=n(`

---

// disabled

`,-1)),l(o,null,{default:e(()=>[...s[34]||(s[34]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<button id="buy" `,-1),t("b",{class:"t01"},"v-bind:",-1),n('disabled="',-1),t("b",{class:"t03"},"!canBuy",-1),n(`">Buy</button>

<script>
new Vue({
  el: '#buy',
  data: {
    `,-1),t("b",{class:"t03"},[n("canBuy: "),t("b",{class:"t04"},"false")],-1),n(`,
  },
});
<\/script>
`,-1)])]),_:1}),s[41]||(s[41]=n(`
`,-1))])]),_:1}),l(a,{title:"v-if"},{default:e(()=>[t("pre",null,[s[47]||(s[47]=n("",-1)),l(o,null,{default:e(()=>[...s[42]||(s[42]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app" `,-1),t("b",{class:"t01"},[n('v-if="'),t("b",{class:"t04"},"view"),n('"')],-1),n(`>
  {{ foo }}
</div>

<script>
new Vue({
  el: '#app',
  data: {
    foo: 'hello',
    `,-1),t("b",{class:"t04"},[n("view: "),t("b",{class:"t03"},"true")],-1),n(", ",-1),t("b",{class:"t02"},"// false no rendering div",-1),n(`
  },
});
<\/script>
`,-1)])]),_:1}),s[48]||(s[48]=n(`

---

// else

`,-1)),l(o,null,{default:e(()=>[...s[43]||(s[43]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
<p `,-1),t("b",{class:"t01"},[n('v-if="'),t("b",{class:"t04"},"view"),n('"')],-1),n(`>{{ foo }} if</p>
<p `,-1),t("b",{class:"t01"},"v-else",-1),n(`>{{ foo }} else</p>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    foo: 'hello',
    `,-1),t("b",{class:"t04"},[n("view: "),t("b",{class:"t03"},"true")],-1),n(`,
  },
});
<\/script>
`,-1)])]),_:1}),s[49]||(s[49]=n(`

---

// else if

`,-1)),l(o,null,{default:e(()=>[...s[44]||(s[44]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
<p `,-1),t("b",{class:"t01"},[n('v-if="'),t("b",{class:"t04"},"view === 1"),n('"')],-1),n(`>{{ foo }} if</p>
<p `,-1),t("b",{class:"t01"},[n('v-else-if="'),t("b",{class:"t04"},"view === 2"),n('"')],-1),n(`>{{ foo }} else if</p>
<p `,-1),t("b",{class:"t01"},"v-else",-1),n(`>{{ foo }} else</p>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    foo: 'hello',
    `,-1),t("b",{class:"t04"},[n("view: "),t("b",{class:"t03"},"1")],-1),n(`,
  },
});
<\/script>
`,-1)])]),_:1}),s[50]||(s[50]=n(`

---

// show

`,-1)),l(o,null,{default:e(()=>[...s[45]||(s[45]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app" `,-1),t("b",{class:"t01"},[n('v-show="'),t("b",{class:"t04"},"view"),n('"')],-1),n(`>
  {{ foo }}
</div>

<script>
new Vue({
  el: '#app',
  data: {
    foo: 'hello',
    `,-1),t("b",{class:"t04"},[n("view: "),t("b",{class:"t03"},"true")],-1),n(", ",-1),t("b",{class:"t02"},"// false hide div",-1),n(`
  },
});
<\/script>

`,-1),t("b",{class:"t02"},"// falseの場合、if は no rendering、show は hide",-1),n(`
`,-1)])]),_:1}),s[51]||(s[51]=n(`

---

// template tag

`,-1)),l(o,null,{default:e(()=>[...s[46]||(s[46]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <ul>
    `,-1),t("b",{class:"t01"},'<template v-if="flag">',-1),n(`
        <li>1</li>
        <li>2</li>
    `,-1),t("b",{class:"t01"},"</template>",-1),n(`
    `,-1),t("b",{class:"t01"},"<template v-else>",-1),n(`
        <li>3</li>
        <li>4</li>
    `,-1),t("b",{class:"t01"},"</template>",-1),n(`
  </ul>
</div>

<button onClick="action()">toggle</button>

<script>
const data = {
  flag: true,
};

new Vue({
  el: '#app',
  data: data,
});

const action = () => {
  data.flag = !data.flag;
}
<\/script>

`,-1),t("b",{class:"t02"},"// ulの外側や内側にタグを増やせない場合templateタグを使うことで対応できる",-1),n(`
`,-1),t("b",{class:"t02"},"// templateタグはそのものは残らない",-1),n(`
`,-1)])]),_:1}),s[52]||(s[52]=n(`
`,-1))])]),_:1}),l(a,{title:"v-for"},{default:e(()=>[t("pre",null,[s[64]||(s[64]=n("",-1)),l(o,null,{default:e(()=>[...s[53]||(s[53]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <span `,-1),t("b",{class:"t01"},'v-for="',-1),n("n ",-1),t("b",{class:"t01"},"in",-1),n(),t("b",{class:"t03"},"loop",-1),t("b",{class:"t01"},'"',-1),n(`> {{ n }} </span>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    `,-1),t("b",{class:"t03"},"loop",-1),n(`: 10,
  },
});
<\/script>
`,-1)])]),_:1}),s[65]||(s[65]=n(`

---

// array

`,-1)),l(o,null,{default:e(()=>[...s[54]||(s[54]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <ul>
    <li `,-1),t("b",{class:"t01"},[n('v-for="'),t("b",{class:"t05"},"item"),n(" in "),t("b",{class:"t04"},"arr"),n('"')],-1),n(),t("b",{class:"t02"},'v-bind:key="item.text"',-1),n(`>
      {{ `,-1),t("b",{class:"t05"},"item",-1),n(".",-1),t("b",{class:"t03"},"text",-1),n(` }}
    </li>
  </ul>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    `,-1),t("b",{class:"t04"},"arr:",-1),n(` [
      { `,-1),t("b",{class:"t03"},"text:",-1),n(` 'foo' },
      { `,-1),t("b",{class:"t03"},"text:",-1),n(` 'bar' },
      { `,-1),t("b",{class:"t03"},"text:",-1),n(` 'baz' },
    ],
  },
});
<\/script>
`,-1)])]),_:1}),s[66]||(s[66]=n(`

---

// array (index)

`,-1)),l(o,null,{default:e(()=>[...s[55]||(s[55]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <ul>
    <li `,-1),t("b",{class:"t01"},[n('v-for="'),t("b",{class:"t05"},"(item, index)"),n(" in "),t("b",{class:"t04"},"arr"),n('"')],-1),n(),t("b",{class:"t02"},'v-bind:key="item.text"',-1),n(`>
      {{ `,-1),t("b",{class:"t05"},"item",-1),n(".",-1),t("b",{class:"t03"},"text",-1),n(" }} - {{ ",-1),t("b",{class:"t05"},"index",-1),n(` }}
    </li>
  </ul>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    `,-1),t("b",{class:"t04"},"arr:",-1),n(` [
      { `,-1),t("b",{class:"t03"},"text:",-1),n(` 'foo' },
      { `,-1),t("b",{class:"t03"},"text:",-1),n(` 'bar' },
      { `,-1),t("b",{class:"t03"},"text:",-1),n(` 'baz' },
    ],
  },
});
<\/script>
`,-1)])]),_:1}),s[67]||(s[67]=n(`

---

// object

`,-1)),l(o,null,{default:e(()=>[...s[56]||(s[56]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <ul>
    <li `,-1),t("b",{class:"t01"},[n('v-for="'),t("b",{class:"t05"},"value"),n(" in "),t("b",{class:"t04"},"obj"),n('"')],-1),n(),t("b",{class:"t02"},'v-bind:key="value"',-1),n(`>
      {{ `,-1),t("b",{class:"t05"},"value",-1),n(` }}
    </li>
  </ul>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    `,-1),t("b",{class:"t04"},"obj:",-1),n(` {
      `,-1),t("b",{class:"t03"},"property1:",-1),n(` 'value1',
      `,-1),t("b",{class:"t03"},"property2:",-1),n(` 'value2',
      `,-1),t("b",{class:"t03"},"property3:",-1),n(` 'value3',
    },
  },
});
<\/script>
`,-1)])]),_:1}),s[68]||(s[68]=n(`

---

// object (key, index)

`,-1)),l(o,null,{default:e(()=>[...s[57]||(s[57]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <ul>
    <li `,-1),t("b",{class:"t01"},[n('v-for="'),t("b",{class:"t05"},"(value, key, index)"),n(" in "),t("b",{class:"t04"},"obj"),n('"')],-1),n(),t("b",{class:"t02"},'v-bind:key="key"',-1),n(`>
      {{ `,-1),t("b",{class:"t05"},"value",-1),n(" }} - {{ ",-1),t("b",{class:"t05"},"key",-1),n(" }} - {{ ",-1),t("b",{class:"t05"},"index",-1),n(` }}
    </li>
  </ul>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    `,-1),t("b",{class:"t04"},"obj:",-1),n(` {
      `,-1),t("b",{class:"t03"},"property1:",-1),n(` 'value1',
      `,-1),t("b",{class:"t03"},"property2:",-1),n(` 'value2',
      `,-1),t("b",{class:"t03"},"property3:",-1),n(` 'value3',
    },
  },
});
<\/script>
`,-1)])]),_:1}),s[69]||(s[69]=n(`

---

// nested object

`,-1)),l(o,null,{default:e(()=>[...s[58]||(s[58]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <ul>
    <li `,-1),t("b",{class:"t01"},[n('v-for="'),t("b",{class:"t05"},"(value, key, index)"),n(" in "),t("b",{class:"t04"},"obj"),n('"')],-1),n(),t("b",{class:"t02"},'v-bind:key="key"',-1),n(`>
      {{ `,-1),t("b",{class:"t05"},"value.key",-1),n(" }} - {{ ",-1),t("b",{class:"t05"},"key",-1),n(" }} - {{ ",-1),t("b",{class:"t05"},"index",-1),n(` }}
    </li>
  </ul>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    `,-1),t("b",{class:"t04"},"obj:",-1),n(` {
      `,-1),t("b",{class:"t03"},"property1:",-1),n(` { key: 'value1' },
      `,-1),t("b",{class:"t03"},"property2:",-1),n(` { key: 'value2' },
      `,-1),t("b",{class:"t03"},"property3:",-1),n(` { key: 'value3' },
    },
  },
});
<\/script>
`,-1)])]),_:1}),s[70]||(s[70]=n(`

---

// string (char, index)

`,-1)),l(o,null,{default:e(()=>[...s[59]||(s[59]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <ul>
    <li `,-1),t("b",{class:"t01"},[n('v-for="'),t("b",{class:"t05"},"(char, index)"),n(" in "),t("b",{class:"t04"},"string"),n('"')],-1),n(),t("b",{class:"t02"},'v-bind:key="char"',-1),n(`>
      {{ `,-1),t("b",{class:"t05"},"char",-1),n(" }} - {{ ",-1),t("b",{class:"t05"},"index",-1),n(` }}
    </li>
  </ul>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    `,-1),t("b",{class:"t04"},"string:",-1),n(` 'hello',
  },
});
<\/script>
`,-1)])]),_:1}),s[71]||(s[71]=n(`

---

// number (num, index)

`,-1)),l(o,null,{default:e(()=>[...s[60]||(s[60]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <ul>
    <li `,-1),t("b",{class:"t01"},[n('v-for="'),t("b",{class:"t05"},"(num, index)"),n(" in "),t("b",{class:"t04"},"number"),n('"')],-1),n(),t("b",{class:"t02"},'v-bind:key="num"',-1),n(`>
      {{ `,-1),t("b",{class:"t05"},"num",-1),n(" }} - {{ ",-1),t("b",{class:"t05"},"index",-1),n(` }}
    </li>
  </ul>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    `,-1),t("b",{class:"t04"},"number:",-1),n(` 10,
  },
});
<\/script>
`,-1)])]),_:1}),s[72]||(s[72]=n(`

---

// method of change item

`,-1)),l(o,null,{default:e(()=>[...s[61]||(s[61]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <ul>
    <li v-for="item in arr" `,-1),t("b",{class:"t02"},'v-bind:key="item.text"',-1),n(`>
      {{ item.text }}
    </li>
  </ul>
</div>

<script>
const `,-1),t("b",{class:"t03"},"app",-1),n(` = new Vue({
  el: '#app',
  data: {
    arr: [
      { text: 'foo' },
      { text: 'bar' },
      { text: 'baz' },
    ],
  },
});

`,-1),t("b",{class:"t03"},"app",-1),n(".arr.",-1),t("b",{class:"t01"},"push(",-1),n("{ text: 'qux' }",-1),t("b",{class:"t01"},")",-1),n(`;
`,-1),t("b",{class:"t02"},"// push, pop, shift, unshift, splice, sort, reverse",-1),n(`
<\/script>
`,-1)])]),_:1}),s[73]||(s[73]=n(`

---

// extraction of item

`,-1)),l(o,null,{default:e(()=>[...s[62]||(s[62]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <ul>
    <li v-for="item in `,-1),t("b",{class:"t06"},"arr",-1),n('" ',-1),t("b",{class:"t02"},'v-bind:key="item.text"',-1),n(`>
      {{ item.`,-1),t("b",{class:"t05"},"text",-1),n(` }}
    </li>
  </ul>
</div>

<script>
const `,-1),t("b",{class:"t03"},"app",-1),n(` = new Vue({
  el: '#app',
  data: {
    `,-1),t("b",{class:"t06"},"arr",-1),n(`: [
      { `,-1),t("b",{class:"t05"},"text",-1),n(`: 'foo' },
      { `,-1),t("b",{class:"t05"},"text",-1),n(`: 'bar' },
      { `,-1),t("b",{class:"t05"},"text",-1),n(`: 'baz' },
    ],
  },
});

`,-1),t("b",{class:"t03"},"app",-1),n(".",-1),t("b",{class:"t06"},"arr",-1),n(" = ",-1),t("b",{class:"t03"},"app",-1),n(".",-1),t("b",{class:"t06"},"arr",-1),n(".",-1),t("b",{class:"t01"},"filter((",-1),n("item",-1),t("b",{class:"t01"},") => {",-1),n(`
  `,-1),t("b",{class:"t04"},"return",-1),n(" item.",-1),t("b",{class:"t05"},"text",-1),n(".",-1),t("b",{class:"t01"},"match(/",-1),n("ba",-1),t("b",{class:"t01"},`/)
});`,-1),n(`
<\/script>
`,-1)])]),_:1}),s[74]||(s[74]=n(`

---

// with v-if

`,-1)),l(o,null,{default:e(()=>[...s[63]||(s[63]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <ul>
    <li `,-1),t("b",{class:"t03"},"v-for",-1),n('="(item, index) in arr" ',-1),t("b",{class:"t01"},"v-if",-1),n(`="index !== 1">
      {{ item.text }}
    </li>
  </ul>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    arr: [
      { text: 'foo' },
      { text: 'bar' },
      { text: 'baz' },
    ],
  },
});
<\/script>
`,-1)])]),_:1}),s[75]||(s[75]=n(`
`,-1))])]),_:1}),l(a,{title:"v-on"},{default:e(()=>[t("pre",null,[s[79]||(s[79]=n("",-1)),l(o,null,{default:e(()=>[...s[76]||(s[76]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <p>`,-1),t("b",{class:"t05"},"{{ foo }}",-1),n(`</p>
  <button `,-1),t("b",{class:"t01"},[n('v-on:click="'),t("b",{class:"t03"},"reverse"),n('"')],-1),n(`>reverse</button>
</div>

<script>
`,-1),t("b",{class:"t02"},[n(`new Vue({
  el: '#app',
  data: {
    `),t("b",{class:"t05"},"foo"),n(`: 'hello'
  },
  `),t("b",{class:"t01"},"methods: {"),n(`
    `),t("b",{class:"t03"},"reverse() {"),n(`
      `),t("b",{class:"t04"},"this"),n("."),t("b",{class:"t05"},"foo"),n(" = "),t("b",{class:"t04"},"this"),n("."),t("b",{class:"t05"},"foo"),n(`.split('').reverse().join('');
    `),t("b",{class:"t03"},"}"),n(`,
  `),t("b",{class:"t01"},"}"),n(`,
});`)],-1),n(`

`,-1),t("b",{class:"t02"},`// v-click="***"
// @click="***" // 省略表記`,-1),n(`
<\/script>
`,-1)])]),_:1}),s[80]||(s[80]=n(`

---

// preventDefault

`,-1)),l(o,null,{default:e(()=>[...s[77]||(s[77]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <p>{{ foo }}</p>
  <a href="https://google.com" v-on:click`,-1),t("b",{class:"t01"},".prevent",-1),n(`="reverse">reverse</a>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    foo: 'hello',
  },
  methods: {
    reverse() {
      this.foo = this.foo.split('').reverse().join('');
    },
  },
});

`,-1),t("b",{class:"t02"},"// other event modifiers",-1),n(`
`,-1),t("b",{class:"t02"},"// .stop, .capture, .self, .native, .once, .passive,",-1),n(`
<\/script>
`,-1)])]),_:1}),s[81]||(s[81]=n(`

---

// keyup

`,-1)),l(o,null,{default:e(()=>[...s[78]||(s[78]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <p>{{ foo }}</p>
  <input type="button" v-on:`,-1),t("b",{class:"t03"},"keyup",-1),t("b",{class:"t01"},".enter",-1),n(`="reverse" value="onkeyup enter reverse">
</div>

<script>
new Vue({
  el: '#app',
  data: {
    foo: 'hello',
  },
  methods: {
    reverse() {
      this.foo = this.foo.split('').reverse().join('');
    },
  },
});

`,-1),t("b",{class:"t02"},"// other event modifiers",-1),n(`
`,-1),t("b",{class:"t02"},"// .tab, .delete, .esc, .space, .up, .down, .left, .middle, .right",-1),n(`
`,-1),t("b",{class:"t02"},"// .shift, .control, .alt, .meta, .exact",-1),n(`
<\/script>
`,-1)])]),_:1}),s[82]||(s[82]=n(`
`,-1))])]),_:1}),l(a,{title:"v-model"},{default:e(()=>[t("pre",null,[s[88]||(s[88]=n(`// text

`,-1)),l(o,null,{default:e(()=>[...s[83]||(s[83]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <input type="text" `,-1),t("b",{class:"t01"},[n('v-model="'),t("b",{class:"t03"},"foo"),n('"')],-1),n(`>
  <p>`,-1),t("b",{class:"t05"},"{{ foo }}",-1),n(`</p>
</div>

<script>
`,-1),t("b",{class:"t02"},[n(`new Vue({
  el: '#app',
  data: {
    `),t("b",{class:"t05"},"foo"),n(`: 'hello',
  },
});`)],-1),n(`
<\/script>
`,-1)])]),_:1}),s[89]||(s[89]=n(`

---

// checkbox

`,-1)),l(o,null,{default:e(()=>[...s[84]||(s[84]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <input type="checkbox" `,-1),t("b",{class:"t01"},[n('v-model="'),t("b",{class:"t03"},"foo"),n('"')],-1),n(`>
  <p>`,-1),t("b",{class:"t05"},"{{ foo }}",-1),n(`</p>
</div>

<script>
`,-1),t("b",{class:"t02"},[n(`new Vue({
  el: '#app',
  data: {
    `),t("b",{class:"t05"},"foo"),n(`: false,
  },
});`)],-1),n(`
<\/script>
`,-1)])]),_:1}),s[90]||(s[90]=n(`

---

// checkbox array

`,-1)),l(o,null,{default:e(()=>[...s[85]||(s[85]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <input type="checkbox" value="a" `,-1),t("b",{class:"t01"},[n('v-model="'),t("b",{class:"t03"},"foo"),n('"')],-1),n(`>
  <input type="checkbox" value="b" `,-1),t("b",{class:"t01"},[n('v-model="'),t("b",{class:"t03"},"foo"),n('"')],-1),n(`>
  <input type="checkbox" value="c" `,-1),t("b",{class:"t01"},[n('v-model="'),t("b",{class:"t03"},"foo"),n('"')],-1),n(`>
  <p>`,-1),t("b",{class:"t05"},"{{ foo }}",-1),n(`</p>
</div>

<script>
`,-1),t("b",{class:"t02"},[n(`new Vue({
  el: '#app',
  data: {
    `),t("b",{class:"t05"},"foo"),n(`: [],
  },
});`)],-1),n(`
<\/script>
`,-1)])]),_:1}),s[91]||(s[91]=n(`

---

// radio

`,-1)),l(o,null,{default:e(()=>[...s[86]||(s[86]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <input type="radio" value="a" `,-1),t("b",{class:"t01"},[n('v-model="'),t("b",{class:"t03"},"foo"),n('"')],-1),n(`>
  <input type="radio" value="b" `,-1),t("b",{class:"t01"},[n('v-model="'),t("b",{class:"t03"},"foo"),n('"')],-1),n(`>
  <input type="radio" value="c" `,-1),t("b",{class:"t01"},[n('v-model="'),t("b",{class:"t03"},"foo"),n('"')],-1),n(`>
  <p>`,-1),t("b",{class:"t05"},"{{ foo }}",-1),n(`</p>
</div>

<script>
`,-1),t("b",{class:"t02"},[n(`new Vue({
  el: '#app',
  data: {
    `),t("b",{class:"t05"},"foo"),n(`: '',
  },
});`)],-1),n(`
<\/script>
`,-1)])]),_:1}),s[92]||(s[92]=n(`

---

// select

`,-1)),l(o,null,{default:e(()=>[...s[87]||(s[87]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <select `,-1),t("b",{class:"t01"},[n('v-model="'),t("b",{class:"t03"},"foo"),n('"')],-1),n(`>
    <option disabled value="">select</option>
    <option value="a">a</option>
    <option value="b">b</option>
    <option value="c">c</option>
  </select>
  <p>`,-1),t("b",{class:"t05"},"{{ foo }}",-1),n(`</p>
</div>

<script>
`,-1),t("b",{class:"t02"},[n(`new Vue({
  el: '#app',
  data: {
    `),t("b",{class:"t05"},"foo"),n(`: '',
  },
});`)],-1),n(`
<\/script>
`,-1)])]),_:1}),s[93]||(s[93]=n(`
`,-1))])]),_:1}),l(a,{title:"v-once"},{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[94]||(s[94]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app" `,-1),t("b",{class:"t01"},"v-once",-1),n(`>
  `,-1),t("b",{class:"t03"},"{{ foo }}",-1),n(`
</div>

<script>
new Vue({
  el: '#app',
  data: {
    `,-1),t("b",{class:"t03"},"foo",-1),n(`: '1',
  },
});
app.`,-1),t("b",{class:"t04"},"foo",-1),n(" = '2'; ",-1),t("b",{class:"t02"},"// can not overwrite",-1),n(`
<\/script>
`,-1)])]),_:1}),s[95]||(s[95]=n(`
`,-1))])]),_:1}),l(a,{title:"computed"},{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[96]||(s[96]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
<p>`,-1),t("b",{class:"t03"},"{{ foo }}",-1),n(`</p>
<p>`,-1),t("b",{class:"t04"},"{{ bar }}",-1),n(`</p>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    `,-1),t("b",{class:"t03"},"foo",-1),n(`: 'Hello',
  },
  `,-1),t("b",{class:"t01"},"computed: {",-1),n(`
    `,-1),t("b",{class:"t02"},"// getter",-1),n(`
    `,-1),t("b",{class:"t04"},"bar",-1),n(`: function () {
      return `,-1),t("b",{class:"t05"},"this",-1),n(".",-1),t("b",{class:"t03"},"foo",-1),n(`.split('').reverse().join('');
    },
  `,-1),t("b",{class:"t01"},"}",-1),n(`,
});
<\/script>
`,-1)])]),_:1}),s[99]||(s[99]=n(`

---

// cache

`,-1)),l(o,null,{default:e(()=>[...s[97]||(s[97]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
<p>{{ foo }}</p>
</div>

<script>
new Vue({
  el: '#app',
  `,-1),t("b",{class:"t01"},"computed: {",-1),n(`
    foo: function () {
      return `,-1),t("b",{class:"t03"},"Date.now()",-1),n(`;
    },
  `,-1),t("b",{class:"t01"},"}",-1),n(`,
});

console.log(`,-1),t("b",{class:"t04"},"app.foo",-1),n("); ",-1),t("b",{class:"t02"},"// *1",-1),n(`

window.setTimeout(() => {
  console.log(`,-1),t("b",{class:"t04"},"app.foo",-1),n("); ",-1),t("b",{class:"t02"},"// same *1",-1),n(`
}, 1000);
<\/script>
`,-1)])]),_:1}),s[100]||(s[100]=n(`

---

// setter

`,-1)),l(o,null,{default:e(()=>[...s[98]||(s[98]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
<p>{{ foo }}</p>
<p>{{ bar }}</p>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    foo: 'Hello',
  },
  `,-1),t("b",{class:"t01"},"computed: {",-1),n(`
    bar: {
      `,-1),t("b",{class:"t05"},"get() {",-1),n(`
        return this.foo.split('').reverse().join('');
      `,-1),t("b",{class:"t05"},"}",-1),n(`,
      `,-1),t("b",{class:"t05"},[n("set("),t("b",{class:"t00"},"v"),n(") {")],-1),n(`
        return this.foo = v;
      `,-1),t("b",{class:"t05"},"}",-1),n(`,
    },
  `,-1),t("b",{class:"t01"},"}",-1),n(`,
});

console.log(`,-1),t("b",{class:"t03"},"app.bar",-1),n("); ",-1),t("b",{class:"t02"},"// getting",-1),n(`
`,-1),t("b",{class:"t04"},"app.bar",-1),n(" = 'setting'; ",-1),t("b",{class:"t02"},"// setting",-1),n(`
console.log(`,-1),t("b",{class:"t03"},"app.bar",-1),n("); ",-1),t("b",{class:"t02"},"// getting",-1),n(`

<\/script>
`,-1)])]),_:1}),s[101]||(s[101]=n(`
`,-1))])]),_:1}),l(a,{title:"[todo p212] watch"},{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[102]||(s[102]=[n(`

`,-1)])]),_:1}),s[103]||(s[103]=n(`
`,-1))])]),_:1}),l(a,{title:"filters"},{default:e(()=>[t("pre",null,[s[105]||(s[105]=n("",-1)),l(o,null,{default:e(()=>[...s[104]||(s[104]=[n(`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>

<div id="app">
  `,-1),t("b",{class:"t04"},[n("{{ foo "),t("b",{class:"t03"},"| undefinedFoo"),n(" }}")],-1),n(`
</div>

<script>
new Vue({
  el: '#app',
  data: {
    `,-1),t("b",{class:"t04"},"foo:",-1),n(` '',
  },
  `,-1),t("b",{class:"t01"},"filters:",-1),n(` {
    `,-1),t("b",{class:"t03"},"undefinedFoo:",-1),n(` function (v) {
      if (!v) {
        return 'Undefined "foo"';
      }
      return v;
    },
  },
});
<\/script>
`,-1)])]),_:1}),s[106]||(s[106]=n(`
`,-1))])]),_:1}),l(a,{title:"component (global)"},{default:e(()=>[t("pre",null,[s[113]||(s[113]=n("",-1)),l(o,null,{default:e(()=>[...s[107]||(s[107]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="`,-1),t("b",{class:"t03"},"app",-1),n(`">
  `,-1),t("b",{class:"t04"},"<cpn></cpn>",-1),n(`
</div>

<script>
`,-1),t("b",{class:"t02"},"// global setting",-1),n(`
`,-1),t("b",{class:"t01"},"Vue.component('",-1),t("b",{class:"t04"},"cpn",-1),t("b",{class:"t01"},`', {
  template: '`,-1),n("<p>hello</p>",-1),t("b",{class:"t01"},`',
});`,-1),n(`

`,-1),t("b",{class:"t02"},"// root instance",-1),n(`
`,-1),t("b",{class:"t01"},`new Vue({
  el: '`,-1),t("b",{class:"t03"},"#app",-1),t("b",{class:"t01"},`',
});`,-1),n(`
<\/script>
`,-1)])]),_:1}),s[114]||(s[114]=n(`

---

// usage data in component

`,-1)),l(o,null,{default:e(()=>[...s[108]||(s[108]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <cpn></cpn>
</div>

<script>
`,-1),t("b",{class:"t02"},"// global setting",-1),n(`
Vue.component('cpn', {
  template: '<p>{{ text }}</p>',
  `,-1),t("b",{class:"t02"},"// Use a function type to prevent objects from being shared between instances.",-1),n(`
  `,-1),t("b",{class:"t01"},[n(`data() {
    return {
      `),t("b",{class:"t00"},"text: 'hello',"),n(`
    };
  },`)],-1),n(`
});

`,-1),t("b",{class:"t02"},"// root instance",-1),n(`
new Vue({
  el: '#app',
});
<\/script>
`,-1)])]),_:1}),s[115]||(s[115]=n(`

---

// with v-on

`,-1)),l(o,null,{default:e(()=>[...s[109]||(s[109]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <cpn></cpn>
</div>

<script>
Vue.component('cpn', {
  template: '<p `,-1),t("b",{class:"t01"},"v-on",-1),n(":",-1),t("b",{class:"t03"},"click",-1),n(`="counter++">{{ counter }} click</p>',
  data() {
    return {
      counter: 0,
    };
  },
});

new Vue({
  el: '#app',
});
<\/script>
`,-1)])]),_:1}),s[116]||(s[116]=n(`

---

// with v-on and methods

`,-1)),l(o,null,{default:e(()=>[...s[110]||(s[110]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <cpn></cpn>
</div>

<script>
Vue.component('cpn', {
  template: '<p v-on:click="`,-1),t("b",{class:"t03"},"action",-1),n(`">{{ counter }} click</p>',
  `,-1),t("b",{class:"t01"},"methods: {",-1),n(`
    `,-1),t("b",{class:"t03"},"action",-1),n(`() {
      `,-1),t("b",{class:"t04"},"this",-1),n(`.counter++;
    },
  `,-1),t("b",{class:"t01"},"}",-1),n(`,
  data() {
    return {
      counter: 0,
    };
  },
});

new Vue({
  el: '#app',
});
<\/script>
`,-1)])]),_:1}),s[117]||(s[117]=n(`

---

// with v-on and methods (char_counter)

`,-1)),l(o,null,{default:e(()=>[...s[111]||(s[111]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <cpn></cpn>
</div>

<script>
Vue.component('cpn', {
  template: '<div><input type="text" v-on:keyup="`,-1),t("b",{class:"t03"},"action",-1),n(`"><p>{{ counter }}</p></div>',
  `,-1),t("b",{class:"t01"},"methods: {",-1),n(`
    `,-1),t("b",{class:"t03"},"action",-1),n(`() {
      this.counter = this.$vnode.elm.childNodes[0].value.length;
    },
  `,-1),t("b",{class:"t01"},"}",-1),n(`,
  data() {
    return {
      counter: 0,
    };
  },
});

new Vue({
  el: '#app',
});
<\/script>
`,-1)])]),_:1}),s[118]||(s[118]=n(`

---

// with computed

`,-1)),l(o,null,{default:e(()=>[...s[112]||(s[112]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <cpn></cpn>
</div>

<script>
Vue.component('cpn', {
  template: '<div><input type="number" v-model="`,-1),t("b",{class:"t03"},"num",-1),n(`"><p>{{ action }}</p></div>',
  `,-1),t("b",{class:"t01"},"computed: {",-1),n(`
    `,-1),t("b",{class:"t03"},"action",-1),n(`() {
      let total = 0;
      for (let i = 1; i <=this.num; i++) {
        total += i;
      }
      return "total: " + total;
    },
  `,-1),t("b",{class:"t01"},"}",-1),n(`,
  data() {
    return {
      num: 0,
    };
  },
});

new Vue({
  el: '#app',
});
<\/script>
`,-1)])]),_:1}),s[119]||(s[119]=n(`
`,-1))])]),_:1}),l(a,{title:"props"},{default:e(()=>[t("pre",null,[s[123]||(s[123]=n("",-1)),l(o,null,{default:e(()=>[...s[120]||(s[120]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="`,-1),t("b",{class:"t05"},"app",-1),n(`">
  <`,-1),t("b",{class:"t06"},"cpn",-1),n(),t("b",{class:"t03"},"foo",-1),n(`="text1"></cpn>
  <`,-1),t("b",{class:"t06"},"cpn",-1),n(),t("b",{class:"t03"},"foo",-1),n(`="text2"></cpn>
</div>

<script>
`,-1),t("b",{class:"t02"},"// global setting",-1),n(`
Vue.component('`,-1),t("b",{class:"t06"},"cpn",-1),n(`', {
  template: '<p>{{ `,-1),t("b",{class:"t03"},"foo",-1),n(` }}</p>',
  `,-1),t("b",{class:"t01"},[n("props: ["),t("b",{class:"t03"},"'foo'"),n("]")],-1),n(`,
});

`,-1),t("b",{class:"t02"},"// root instance",-1),n(`
new Vue({
  el: '`,-1),t("b",{class:"t05"},"#app",-1),n(`',
});
<\/script>
`,-1)])]),_:1}),s[124]||(s[124]=n(`

---

// with v-bind

`,-1)),l(o,null,{default:e(()=>[...s[121]||(s[121]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="`,-1),t("b",{class:"t05"},"app",-1),n(`">
  <`,-1),t("b",{class:"t06"},"cpn",-1),n(' v-for="text in data" v-bind:',-1),t("b",{class:"t03"},"foo-bar",-1),n('="',-1),t("b",{class:"t04"},"text",-1),n('"></cpn> ',-1),t("b",{class:"t02"},"<!-- kebab case -->",-1),n(`
</div>

<script>
`,-1),t("b",{class:"t02"},"// child scope",-1),n(`
Vue.component('`,-1),t("b",{class:"t06"},"cpn",-1),n(`', {
  template: '<p>{{ `,-1),t("b",{class:"t03"},"fooBar",-1),n(" }}</p>', ",-1),t("b",{class:"t02"},"// camel case",-1),n(`
  `,-1),t("b",{class:"t01"},"props: [",-1),t("b",{class:"t03"},"'fooBar'",-1),n("], ",-1),t("b",{class:"t02"},"// camel case",-1),n(`
});

`,-1),t("b",{class:"t02"},"// parent scope",-1),n(`
new Vue({
  el: '`,-1),t("b",{class:"t05"},"#app",-1),n(`',
  data: {
    data: ['text1', 'text2', 'text3', 'text4', ],
  },
});

`,-1),t("b",{class:"t02"},"// Bind data in parent scope from within child scope",-1),n(`
<\/script>
`,-1)])]),_:1}),s[125]||(s[125]=n(`

---

// with v-model

`,-1)),l(o,null,{default:e(()=>[...s[122]||(s[122]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="`,-1),t("b",{class:"t05"},"app",-1),n(`">
  <`,-1),t("b",{class:"t06"},"cpn",-1),n(" v-bind:",-1),t("b",{class:"t03"},"foo",-1),n('="',-1),t("b",{class:"t03"},"foo",-1),n(`"></cpn>
  <input type="text" v-model="`,-1),t("b",{class:"t03"},"foo",-1),n(`">
</div>

<script>
Vue.component('`,-1),t("b",{class:"t06"},"cpn",-1),n(`', {
  template: '<p>{{ `,-1),t("b",{class:"t03"},"foo",-1),n(` }}</p>',
  `,-1),t("b",{class:"t01"},[n("props: ["),t("b",{class:"t03"},"'foo'"),n("]")],-1),n(`,
});

new Vue({
  el: '`,-1),t("b",{class:"t05"},"#app",-1),n(`',
  data: {
    `,-1),t("b",{class:"t03"},"foo",-1),n(`: 'test',
  },
});
<\/script>
`,-1)])]),_:1}),s[126]||(s[126]=n(`
`,-1))])]),_:1}),l(a,{title:"component (local)"},{default:e(()=>[t("pre",null,[s[130]||(s[130]=n("",-1)),l(o,null,{default:e(()=>[...s[127]||(s[127]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="`,-1),t("b",{class:"t03"},"app",-1),n(`">
  `,-1),t("b",{class:"t04"},"<cpn></cpn>",-1),n(`
</div>

<script>
`,-1),t("b",{class:"t02"},"// root instance",-1),n(`
`,-1),t("b",{class:"t01"},`new Vue({
  el: '`,-1),t("b",{class:"t03"},"#app",-1),t("b",{class:"t01"},[n(`',
  `),t("b",{class:"t02"},"// local setting"),n(`
  components: {
    '`),t("b",{class:"t04"},"cpn"),n(`': {
      template: '`)],-1),n("<p>hello</p>",-1),t("b",{class:"t01"},`',
    },
  },
});`,-1),n(`
<\/script>
`,-1)])]),_:1}),s[131]||(s[131]=n(`

---

// usage data in component

`,-1)),l(o,null,{default:e(()=>[...s[128]||(s[128]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <cpn></cpn>
</div>

<script>
`,-1),t("b",{class:"t02"},`// root instance
new Vue({
  el: '#app',
  // local setting
  components: {
    'cpn': {
      template: '`,-1),n("<p>{{ text }}</p>",-1),t("b",{class:"t02"},[n(`',
      // Use a function type to prevent objects from being shared between instances.
      `),t("b",{class:"t01"},[n(`data() {
        return {
          `),t("b",{class:"t00"},"text: 'hello',"),n(`
        };
      },`)]),n(`
    },
  },
});`)],-1),n(`
<\/script>
`,-1)])]),_:1}),s[132]||(s[132]=n(`

---

// with v-on

`,-1)),l(o,null,{default:e(()=>[...s[129]||(s[129]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <cpn></cpn>
  <cpn></cpn>
  <cpn></cpn>
</div>

<script>
new Vue({
  el: '#app',
  components: {
    cpn: {
      template: '<p `,-1),t("b",{class:"t01"},"v-on",-1),n(":",-1),t("b",{class:"t03"},"click",-1),n(`="counter++">{{ counter }} click</p>',
      data() {
        return {
          counter: 0,
        };
      },
    },
  },
});
<\/script>
`,-1)])]),_:1}),s[133]||(s[133]=n(`
`,-1))])]),_:1}),l(a,{title:"lifecycle hooks"},{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[134]||(s[134]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>

<script>`,-1),n(`
`,-1),t("b",{class:"t01"},"new Vue({",-1),n(`
  data: {
    foo: 'hello',
  },
  `,-1),t("b",{class:"t01"},"created()",-1),n(` {
    console.log(this.foo); `,-1),t("b",{class:"t02"},"// hello",-1),n(`
  `,-1),t("b",{class:"t01"},"}",-1),n(`,
});

`,-1),t("b",{class:"t02"},`// beforeCreate - (before create a instance)
// created - (created a instance)
// beforeMount - (before mount on DOM)
// mounted - (mounted on DOM)
// beforeUpdate - (updated a data and before update DOM)
// updated - (updated a data and DOM)
// beforeDestroy - (before delete the instance)
// destroyed - (deleted the instance)`,-1),n(`
`,-1),t("b",{class:"t02"},"<\/script>",-1),n(`
`,-1)])]),_:1}),s[135]||(s[135]=n(`
`,-1))])]),_:1}),l(a,{title:"x-template"},{default:e(()=>[t("pre",null,[s[137]||(s[137]=n("",-1)),l(o,null,{default:e(()=>[...s[136]||(s[136]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  `,-1),t("b",{class:"t04"},"<cpn></cpn>",-1),n(`
</div>

`,-1),t("b",{class:"t01"},[n('<script type="text/x-template" '),t("b",{class:"t03"},'id="foo"'),n(`>
	`),t("b",{class:"t00"},"<p>hello</p>"),n(`
<\/script>`)],-1),n(`

<script>
Vue.component('`,-1),t("b",{class:"t04"},"cpn",-1),n(`', {
  template: '`,-1),t("b",{class:"t03"},"#foo",-1),n(`',
});

new Vue({
  el: '#app',
});
<\/script>
`,-1)])]),_:1}),s[138]||(s[138]=n(`
`,-1))])]),_:1}),l(a,{title:"slot content"},{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[139]||(s[139]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<div id="app">
  <cpn>
    <p `,-1),t("b",{class:"t01"},"slot",-1),n('="',-1),t("b",{class:"t03"},"text",-1),n(`">title A</p>
    `,-1),t("b",{class:"t02"},`// When there is no p, display slot of template
    // Use when you want to have some patterns in cpn`,-1),n(`
  </cpn>
</div>

<script>
Vue.component('cpn', {
  template: '<`,-1),t("b",{class:"t01"},"slot",-1),n(' name="',-1),t("b",{class:"t03"},"text",-1),n(`"><p>no title</p></slot>',
});

new Vue({
  el: '#app',
});
<\/script>
`,-1)])]),_:1}),s[140]||(s[140]=n(`
`,-1))])]),_:1}),l(a,{title:"vue-router"},{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[141]||(s[141]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`
`,-1),t("b",{class:"t01"},'<script src="https://cdn.jsdelivr.net/npm/vue-router"><\/script>',-1),n(`

<div id="app">
  `,-1),t("b",{class:"t01"},[n('<router-link to="'),t("b",{class:"t00"},"/a"),n('">'),t("b",{class:"t00"},"Page A"),n(`</router-link>
  <router-link to="`),t("b",{class:"t00"},"/b"),n('">'),t("b",{class:"t00"},"Page B"),n(`</router-link>
  <router-view></router-view>`)],-1),n(`
</div>

<script>
const `,-1),t("b",{class:"t03"},"router",-1),n(" = ",-1),t("b",{class:"t01"},[n(`new VueRouter({
  routes: [
    {
      path: '`),t("b",{class:"t00"},"/a"),n(`',
      component: {
        template: '`),t("b",{class:"t04"},"<div>Page A</div>"),n(`',
      },
    },
    {
      path: '`),t("b",{class:"t00"},"/b"),n(`',
      component: {
        template: '`),t("b",{class:"t04"},"<div>Page B</div>"),n(`',
      },
    },
  ],
})`)],-1),n(`;

new Vue({
  el: '#app',
  `,-1),t("b",{class:"t03"},"router",-1),n(`,
});
<\/script>
`,-1)])]),_:1}),s[144]||(s[144]=n(`

---

// params

`,-1)),l(o,null,{default:e(()=>[...s[142]||(s[142]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>
<script src="https://cdn.jsdelivr.net/npm/vue-router"><\/script>`,-1),n(`

<div id="app">
  <router-link `,-1),t("b",{class:"t05"},[n(':to="{ '),t("b",{class:"t03"},[n("name: '"),t("b",{class:"t00"},"user"),n("'")]),n(", "),t("b",{class:"t04"},[n("params: { userId: "),t("b",{class:"t00"},"'foo'"),n(" }")]),n('}"')],-1),n(`>Page A</router-link>
  <router-link to="/b">Page B</router-link>
  <router-view></router-view>
</div>

<script>
const router = new VueRouter({
  routes: [
    {
      path: '/a/`,-1),t("b",{class:"t04"},":userId",-1),n(`',
      `,-1),t("b",{class:"t03"},[n("name: '"),t("b",{class:"t00"},"user"),n("'")],-1),n(`,
      component: {
        template: '<div>Page A (`,-1),t("b",{class:"t01"},[n("{{ $route."),t("b",{class:"t04"},"params.userId"),n(" }}")],-1),n(`)</div>',
      },
    },
    {
      path: '/b',
      component: {
        template: '<div>Page B</div>',
      },
    },
  ],
});

new Vue({
  el: '#app',
  router,
});
<\/script>
`,-1)])]),_:1}),s[145]||(s[145]=n(`

---

// params (router.push)

`,-1)),l(o,null,{default:e(()=>[...s[143]||(s[143]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>
<script src="https://cdn.jsdelivr.net/npm/vue-router"><\/script>`,-1),n(`

<div id="app">
  <router-link to="/a">Page A</router-link>
  <router-link to="/b">Page B</router-link>
  <router-view></router-view>
</div>

<script>
const router = new VueRouter({
  routes: [
    {
      path: '/a',
      name: 'user',
      component: {
        template: '<div>Page A ({{ $route.params.userId }})</div>',
      },
    },
    {
      path: '/b',
      component: {
        template: '<div>Page B</div>',
      },
    },
  ],
});

new Vue({
  el: '#app',
  router,
});

`,-1),t("b",{class:"t01"},[n("router.push("),t("b",{class:"t04"},"{ name: 'user', params: { userId: 'foo' }}"),n(")")],-1),n(`;
`,-1),t("b",{class:"t02"},"//router.push({ path: 'register', query: { plan: 'private' } });",-1),n(`
<\/script>
`,-1)])]),_:1}),s[146]||(s[146]=n(`

`,-1))])]),_:1}),l(a,{title:"[todo modify] single file component"},{default:e(()=>[t("pre",null,[s[152]||(s[152]=n(`project/
│
├ html/
   └ index.html
├ webpack.config.js
├ package.json
└ js/
   ├ `,-1)),s[153]||(s[153]=t("b",{class:"t01"},"main.js",-1)),s[154]||(s[154]=n(`
   └ components/
     ├ `,-1)),s[155]||(s[155]=t("b",{class:"t03"},"header.vue",-1)),s[156]||(s[156]=n(`
     ├ `,-1)),s[157]||(s[157]=t("b",{class:"t03"},"content.vue",-1)),s[158]||(s[158]=n(`
     └ `,-1)),s[159]||(s[159]=t("b",{class:"t03"},"footer.vue",-1)),s[160]||(s[160]=n(`

---

// index.html

`,-1)),l(o,null,{default:e(()=>[...s[147]||(s[147]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="../js/main.js"><\/script>`,-1),n(`

<div `,-1),t("b",{class:"t01"},'id="app"',-1),n(`>
  `,-1),t("b",{class:"t03"},`<sample-header></sample-header>
  <sample-content></sample-content>
  <sample-footer></sample-footer>`,-1),n(`
</div>
`,-1)])]),_:1}),s[161]||(s[161]=n(`

---

// main.js

`,-1)),l(o,null,{default:e(()=>[...s[148]||(s[148]=[n(`import Vue from 'vue';
import SampleHeader from './component/header.vue';
import SampleContent from './component/content.vue';
import SampleFooter from './component/footer.vue';

Vue.config.productionTip = false;

new Vue({
  components: {
    `,-1),t("b",{class:"t03"},"SampleHeader",-1),n(`,
    `,-1),t("b",{class:"t03"},"SampleContent",-1),n(`,
    `,-1),t("b",{class:"t03"},"SampleFooter",-1),n(`,
  },
}).$mount('`,-1),t("b",{class:"t01"},"#app",-1),n(`');
`,-1)])]),_:1}),s[162]||(s[162]=n(`

---

// header.vue

`,-1)),l(o,null,{default:e(()=>[...s[149]||(s[149]=[n(`<template>
  <div class="title">
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'header',
    };
  }
};
<\/script>

<style lang="scss" scoped>
.title {
  height: 60px;
  background: #f1f1f1;
}
</style>
`,-1)])]),_:1}),s[163]||(s[163]=n(`

---

// content.vue

`,-1)),l(o,null,{default:e(()=>[...s[150]||(s[150]=[n(`<template>
  <div class="content">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'content',
    };
  },
};
<\/script>

<style lang="scss" scoped>
.content {
  height: 600px;
  background: #fff;
}
</style>
`,-1)])]),_:1}),s[164]||(s[164]=n(`

---

// footer.vue

`,-1)),l(o,null,{default:e(()=>[...s[151]||(s[151]=[n(`<template>
  <div class="footer">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'footer',
    };
  }
};
<\/script>

<style lang="scss" scoped>
.footer {
  height: 60px;
  background: #f1f1f1;
}
</style>
`,-1)])]),_:1}),s[165]||(s[165]=n(`

---

// webpack.config.js

const path = require('path');
const LicenseInfoWebpackPlugin = require('license-info-webpack-plugin').default;
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {

  entry: {
    'project_name': './js/src/main.js',
  },

  output: {
    path: path.join(__dirname, 'dest'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\\.js$/,
        exclude: /\\/node_modules\\//,
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
        test: /\\.js$/,
        exclude: /node_modules/,
        options: {
        configFile: '.eslintrc.js',
        },
      },
      {
      test: /\\.vue$/,
      loader: 'vue-loader'
      },
      {
      test: /\\.scss$/,
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

  devtool: !process.argv.includes('production') ? 'eval-source-map' : false,

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

};

---

// package.json

  "devDependencies": {
  "@babel/core": "^7.9.0",
  "@babel/preset-env": "^7.9.0",
  "babel-loader": "^8.1.0",
  "css-loader": "^3.5.1",
  "eslint": "^4.19.1",
  "eslint-loader": "^2.2.1",
  "json-minify": "^1.0.0",
  "license-info-webpack-plugin": "^1.0.0",
  "node-sass": "^4.13.1",
  "sass-loader": "^8.0.2",
  "spritesmith": "^3.4.0",
  "style-loader": "^1.1.3",
  "vue": "^2.6.11",
  "vue-loader": "^15.9.1",
  "vue-template-compiler": "^2.6.11",
  "webpack": "^4.42.0",
  "webpack-cli": "^3.3.11"
  }
`,-1))])]),_:1}),l(a,{title:"[todo p235] slot"},{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[166]||(s[166]=[n(`

`,-1)])]),_:1}),s[167]||(s[167]=n(`
`,-1))])]),_:1}),l(a,{title:"[todo p244, p245(JSX)] render in component"},{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[168]||(s[168]=[n(`

`,-1)])]),_:1}),s[169]||(s[169]=n(`
`,-1))])]),_:1}),l(a,{title:"[todo p251] transition"},{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[170]||(s[170]=[n(`

`,-1)])]),_:1}),s[171]||(s[171]=n(`
`,-1))])]),_:1}),l(a,{title:"[todo] nuxt.js"},{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[172]||(s[172]=[t("b",{class:"t01"},`
npx create-nuxt-app `,-1),n("[project name]",-1),t("b",{class:"t01"},`
npm run dev
`,-1)])]),_:1}),s[173]||(s[173]=n(`
`,-1))])]),_:1}),l(a,{title:"///"},{default:e(()=>[t("pre",null,[l(o,null,{default:e(()=>[...s[174]||(s[174]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>`,-1),n(`

<script>

<\/script>
`,-1)])]),_:1}),s[175]||(s[175]=n(`
`,-1))])]),_:1})]),_:1})],64))}}),Yt=Object.freeze(Object.defineProperty({__proto__:null,default:_n,metadata:pn},Symbol.toStringTag,{value:"Module"})),un={updateDate:"2020/04/01"},nt=f({__name:"web-camera",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"web-camera","sample-url":"/sample/html/web-camera.html","update-date":un.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[t("pre",null,[t("code",null,[l(o,null,{default:e(()=>[...s[0]||(s[0]=[n(`<!doctype html>
<title>web-camera</title>

<style>
html, body {margin: 0; padding: 0;}
video {width: 100%; height: auto;}
</style>

<video id="`,-1),t("b",{class:"t04"},"screen",-1),n(`" autoplay></video>

`,-1),t("b",{class:"t01"},`<script>
((d) => {
  const video = d.getElementById('`,-1),t("b",{class:"t04"},"screen",-1),t("b",{class:"t01"},`');
  const media = navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
  media.then((stream) => {
    video.srcObject = stream;
  });
})(document);
<\/script>`,-1),n(`
`,-1)])]),_:1})])])]),_:1})],64))}}),Xt=Object.freeze(Object.defineProperty({__proto__:null,default:nt,metadata:un},Symbol.toStringTag,{value:"Module"})),tt={class:"mt-20"},st={class:"grid gap-20 lg:grid-cols-[1.2fr_0.8fr]"},lt={class:"rounded-lg border border-gray-200 bg-[#f6f7f8] p-20"},et={class:"mt-14 flex flex-wrap gap-10"},ot=["disabled"],at=["disabled"],it=["disabled"],rt={key:0,class:"text-12 flex items-center text-gray-500"},dt={key:0,class:"text-12 mt-10 text-blue-600"},pt={class:"rounded-lg border border-gray-200 bg-white p-20"},ut={class:"mt-16"},ct={class:"relative mt-6"},bt=["value"],ft={class:"mt-18"},mt={class:"text-12 flex items-center justify-between text-gray-600"},gt={class:"mt-18"},vt={class:"text-12 flex items-center justify-between text-gray-600"},yt={class:"mt-18"},xt={class:"mt-8 flex flex-wrap gap-8"},wt={key:0,class:"mt-12"},jt={class:"text-12 flex items-center justify-between text-gray-600"},cn={updateDate:"2026/02/01"},kt=f({__name:"web-speech-api",setup(m){const u=w("Hello. Welcome to the Web Speech API voice generator."),s=w(1),A=w(1),C=w(90),h=w("normal"),M=w([]),$=w(""),j=w(!1),k=w(!1),x=w(""),z=w(!1),S=typeof window<"u"&&"speechSynthesis"in window&&"SpeechSynthesisUtterance"in window,P=W(()=>u.value.trim().length>0),mn=W(()=>M.value.find(v=>v.voiceURI===$.value)??null),gn=v=>{if($.value)return;const i=v.find(y=>/samantha/i.test(y.name)),r=v[0];i?$.value=i.voiceURI:r&&($.value=r.voiceURI)},H=()=>{S&&(M.value=window.speechSynthesis.getVoices(),gn(M.value))},vn=v=>{const i=new SpeechSynthesisUtterance(v),r=mn.value;return r&&(i.voice=r,i.lang=r.lang),i.rate=A.value,i.pitch=s.value,i},D=v=>new Promise(i=>{const r=vn(v);r.onend=()=>i(),r.onerror=()=>i(),window.speechSynthesis.speak(r)}),yn=v=>new Promise(i=>{window.setTimeout(i,v)}),xn=async v=>{const i=v.replace(/\s+/g," ").trim().split(" ").filter(Boolean);if(i.length===0)return;const r=6e4/Math.max(30,Math.min(240,C.value));let y=performance.now();for(const T of i){if(z.value)break;const L=Math.max(0,y-performance.now());if(L>0&&await yn(L),z.value)break;await D(T),y+=r,y<performance.now()&&(y=performance.now())}},N=async()=>{if(!S){x.value="This browser does not support the Web Speech API.";return}if(!P.value){x.value="Please enter some text.";return}x.value="",window.speechSynthesis.cancel(),h.value==="bpm"?await xn(u.value):await D(u.value)},wn=async()=>{if(!(j.value||k.value)){z.value=!1,j.value=!0,x.value=h.value==="bpm"?"Playing with rhythm...":"Playing...";try{await N()}finally{j.value=!1}}},jn=()=>{j.value&&(z.value=!0,S&&window.speechSynthesis.cancel(),x.value="Stopped.",j.value=!1)},kn=()=>typeof MediaRecorder>"u"?"":["audio/mp4","audio/webm;codecs=opus","audio/webm"].find(i=>MediaRecorder.isTypeSupported(i))??"",hn=(v,i)=>{const r=URL.createObjectURL(v),y=document.createElement("a");y.href=r,y.download=i,document.body.appendChild(y),y.click(),y.remove(),URL.revokeObjectURL(r)},$n=async()=>{if(j.value||k.value)return;if(!S){x.value="This browser does not support the Web Speech API.";return}if(!P.value){x.value="Please enter some text.";return}if(typeof navigator>"u"||!navigator.mediaDevices?.getDisplayMedia||typeof MediaRecorder>"u"){x.value="Download requires screen sharing and a MediaRecorder-capable browser.";return}k.value=!0,x.value="Please share the current tab and enable audio sharing.";let v=null;try{v=await navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0});const i=v.getAudioTracks();if(i.length===0)throw new Error("audio track not found");const r=new MediaStream(i),y=kn(),T=new MediaRecorder(r,y?{mimeType:y}:void 0),L=[],Sn=new Promise(Ln=>{T.ondataavailable=O=>{O.data.size>0&&L.push(O.data)},T.onstop=()=>{Ln(new Blob(L,{type:y||"audio/webm"}))}});T.start(),x.value="Recording...",await N(),T.stop();const Tn=await Sn,Bn=y.includes("mp4")?"m4a":"webm";hn(Tn,`speech-${Date.now()}.${Bn}`),x.value="Downloaded the audio file."}catch{x.value="Recording failed. Make sure tab audio sharing is enabled."}finally{k.value=!1,v&&v.getTracks().forEach(i=>i.stop())}};return En(()=>{H(),S&&window.speechSynthesis.addEventListener("voiceschanged",H)}),An(()=>{S&&(window.speechSynthesis.removeEventListener("voiceschanged",H),window.speechSynthesis.cancel())}),(v,i)=>(p(),d(c,null,[l(b,{title:"Web Speech API","update-date":cn.updateDate},null,8,["update-date"]),t("section",tt,[t("div",st,[t("div",lt,[i[7]||(i[7]=t("label",{for:"speech-text",class:"sr-only"},"speech-text",-1)),E(t("textarea",{id:"speech-text","onUpdate:modelValue":i[0]||(i[0]=r=>u.value=r),rows:"4",class:"text-14 w-full resize-y rounded-md border border-gray-300 bg-white p-12 leading-relaxed text-gray-800 focus:border-blue-400 focus:outline-none",placeholder:"Type the text you want to speak"},null,512),[[I,u.value]]),t("div",et,[t("button",{type:"button",disabled:!P.value||j.value||k.value,class:"text-14 rounded-md bg-black px-18 py-8 text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-50",onClick:wn}," play ",8,ot),t("button",{type:"button",disabled:!j.value||k.value,class:"text-14 rounded-md border border-gray-400 px-18 py-8 text-gray-700 transition-opacity disabled:cursor-not-allowed disabled:opacity-50",onClick:jn}," stop ",8,at),t("button",{type:"button",disabled:!P.value||j.value||k.value,class:"text-14 rounded-md border border-gray-400 px-18 py-8 text-gray-700 transition-opacity disabled:cursor-not-allowed disabled:opacity-50",onClick:$n}," download ",8,it),j.value||k.value?(p(),d("span",rt," Working... ")):q("",!0)]),i[8]||(i[8]=t("p",{class:"text-12 mt-12 text-gray-500"}," Download records via “current tab audio sharing”. If unsupported, use playback only. ",-1)),x.value?(p(),d("p",dt,B(x.value),1)):q("",!0)]),t("div",pt,[i[17]||(i[17]=t("h3",{class:"text-14 font-bold text-gray-700"},"Voice Settings",-1)),t("div",ut,[i[10]||(i[10]=t("label",{for:"base-voice-select",class:"text-12 font-bold text-gray-600"}," Base Voice ",-1)),t("div",ct,[E(t("select",{id:"base-voice-select","onUpdate:modelValue":i[1]||(i[1]=r=>$.value=r),class:"text-13 w-full appearance-none rounded-md border border-gray-300 bg-white p-8 pr-30"},[(p(!0),d(c,null,Mn(M.value,r=>(p(),d("option",{key:r.voiceURI,value:r.voiceURI},B(r.name)+" ("+B(r.lang)+") ",9,bt))),128))],512),[[Cn,$.value]]),i[9]||(i[9]=t("svg",{class:"pointer-events-none absolute top-1/2 right-10 h-20 w-20 -translate-y-1/2 text-gray-500",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z","clip-rule":"evenodd"})],-1))]),i[11]||(i[11]=t("p",{class:"text-11 mt-6 text-gray-400"}," Choose from voices installed in your browser. ",-1))]),t("div",ft,[t("div",mt,[i[12]||(i[12]=t("label",{for:"pitch-range",class:"font-bold"},"Pitch",-1)),t("span",null,B(s.value.toFixed(2)),1)]),E(t("input",{id:"pitch-range","onUpdate:modelValue":i[2]||(i[2]=r=>s.value=r),type:"range",min:"0.5",max:"2",step:"0.05",class:"mt-6 w-full"},null,512),[[I,s.value,void 0,{number:!0}]])]),t("div",gt,[t("div",vt,[i[13]||(i[13]=t("label",{for:"speed-range",class:"font-bold"},"Speed",-1)),t("span",null,B(A.value.toFixed(2)),1)]),E(t("input",{id:"speed-range","onUpdate:modelValue":i[3]||(i[3]=r=>A.value=r),type:"range",min:"0.5",max:"2",step:"0.05",class:"mt-6 w-full"},null,512),[[I,A.value,void 0,{number:!0}]])]),t("div",yt,[i[16]||(i[16]=t("p",{class:"text-12 font-bold text-gray-600"},"Playback Mode",-1)),t("div",xt,[t("button",{type:"button",class:R(["text-12 rounded-full border px-14 py-6 transition-colors",h.value==="normal"?"border-black bg-black text-white":"border-gray-300 text-gray-600"]),onClick:i[4]||(i[4]=r=>h.value="normal")}," Normal ",2),t("button",{type:"button",class:R(["text-12 rounded-full border px-14 py-6 transition-colors",h.value==="bpm"?"border-black bg-black text-white":"border-gray-300 text-gray-600"]),onClick:i[5]||(i[5]=r=>h.value="bpm")}," BPM ",2)]),h.value==="bpm"?(p(),d("div",wt,[t("div",jt,[i[14]||(i[14]=t("label",{for:"bpm-range",class:"font-bold"},"BPM",-1)),t("span",null,B(C.value),1)]),E(t("input",{id:"bpm-range","onUpdate:modelValue":i[6]||(i[6]=r=>C.value=r),type:"range",min:"40",max:"200",step:"1",class:"mt-6 w-full"},null,512),[[I,C.value,void 0,{number:!0}]]),i[15]||(i[15]=t("p",{class:"text-11 mt-6 text-gray-400"}," Plays word-by-word on the BPM grid. Long words may drift past the next beat. ",-1))])):q("",!0)])])])]),i[18]||(i[18]=t("section",{class:"mt-20 rounded-lg border border-gray-200 bg-white p-16"},[t("p",{class:"text-12 text-gray-500"}," For commercial use, please verify the licensing status of the voices provided by your browser’s Web Speech API. ")],-1))],64))}}),Jt=Object.freeze(Object.defineProperty({__proto__:null,default:kt,metadata:cn},Symbol.toStringTag,{value:"Module"})),bn={updateDate:"2021/07/20"},ht=f({__name:"youtube-bg-element",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"youtube-bg-element","sample-url":"/sample/html/youtube-bg-element.html","update-date":bn.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[t("pre",null,[t("code",null,[l(o,null,{default:e(()=>[...s[0]||(s[0]=[t("b",{class:"t02"},`<!doctype html>
<title>title</title>
<meta
  name="viewport"
  content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, viewport-fit=cover"
>`,-1),n(`

`,-1),t("b",{class:"t03"},`<style>
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
  background: url(`,-1),n("fornotpc.png",-1),t("b",{class:"t03"},`) center center no-repeat;
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
</style>`,-1),n(`


`,-1),t("b",{class:"t04"},`<div id="screen" class="bgYouTube">
  <div id="player" class="movie"></div>
  <div class="overlay"></div>
  <div class="content">CONTENT</div>
</div>`,-1),n(`

`,-1),t("b",{class:"t06"},`<script>
  var VIDEO_ID = '`,-1),n("4ZUfl0fPg88",-1),t("b",{class:"t06"},`';
<\/script>`,-1),n(`

`,-1),t("b",{class:"t02"},`<script>
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
  })(window, document);`,-1),n(`

  `,-1),t("b",{class:"t01"},`(function (w, doc) {
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
<\/script>`,-1),n(`
`,-1)])]),_:1}),s[1]||(s[1]=n(`
`,-1))])])]),_:1})],64))}}),Zt=Object.freeze(Object.defineProperty({__proto__:null,default:ht,metadata:bn},Symbol.toStringTag,{value:"Module"})),fn={updateDate:"2020/12/19"},$t=f({__name:"youtube-embed-layer",setup(m){return(u,s)=>(p(),d(c,null,[l(b,{title:"youtube-embed-layer","sample-url":"/sample/html/youtube-embed-layer.html","update-date":fn.updateDate},null,8,["update-date"]),l(g,null,{default:e(()=>[t("pre",null,[t("code",null,[l(o,null,{default:e(()=>[...s[0]||(s[0]=[t("b",{class:"t02"},[n(`<!doctype html>
<html>
<head>
<meta name="viewport" content="width=device-width">
<title>title</title>

<style>
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
</style>

</head>
<body>

<div class="play">
<span `),t("b",{class:"t05"},'data-videoid="')],-1),n("4ZUfl0fPg88",-1),t("b",{class:"t02"},[t("b",{class:"t05"},'"'),n(`>play1</span>
<span `),t("b",{class:"t05"},'data-videoid="')],-1),n("uQ2j201BWIg",-1),t("b",{class:"t02"},[t("b",{class:"t05"},'"'),n(`>play2</span>
<span `),t("b",{class:"t05"},'data-videoid="')],-1),n("EXBKfYF7OKU",-1),t("b",{class:"t02"},[t("b",{class:"t05"},'"'),n(`>play3</span>
</div>`)],-1),n(`

`,-1),t("b",{class:"t01"},[n("<div "),t("b",{class:"t05"},'class="setYoutubeLayer"'),n(`></div>

<script>
(function(w, doc){
  var `),t("b",{class:"t06"},"setYoutubeLayer"),n(` = {

    `),t("b",{class:"t04"},"init"),n(`: function () {
      var target = doc.querySelector('.setYoutubeLayer');
      if (!target) {
        return;
      }

      var videoIds = doc.querySelectorAll('[data-videoid]');

      this.appendLayer(target);
      this.operationLayer(target, videoIds);
      this.appendStyles();
    },

    `),t("b",{class:"t04"},"appendLayer"),n(`: function (target) {
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
        return str.replace(/["'\`<>&]/g, function(m) {
          return {
            '"': '&quot;',
            "'": '&#x27;',
            '\`': '&#x60;',
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;',
          }[m]
        });
      };
      var htmlStrings = templateLiteralToHtmlStrings\`<div class="movie">
        <div class="overlay"></div>
        <div class="player">
        <div class="close"></div>
        <iframe src="" frameborder="0" allow="fullscreen"></iframe>
        </div>
        </div>\`;
      target.appendChild(htmlStringsToHtmlElements(htmlStrings));
    },

    `),t("b",{class:"t04"},"operationLayer"),n(`: function (target, videoIds) {
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

      `),t("b",{class:"t02"},"// setPlayer"),n(`
      var setPlayer = function () {
        var w_W = w.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
        var w_H = w.innerHeight || doc.documentElement.clientHeight || doc.body.clientHeight;
        var wLack = w_W < iframe_defaultW;
        var hLack = w_H < iframe_defaultH + (closeMovieH * 2);
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
          if (wLack && !hLack) {
            stickW();
          } else if (!wLack && hLack) {
            stickH();
          } else if (wLack && hLack) {
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
      `),t("b",{class:"t02"},"// openLayer - playMovie"),n(`
      videoIds.forEach(function (el) {
        el.addEventListener('click', function () {
          target.classList.remove('reverse');
          target.style.display = 'block';
          setPlayer();
          iframe.setAttribute('src', '//www.youtube.com/embed/' + el.dataset.videoid + '?loop=1&autoplay=1&playlist=' + el.dataset.videoid);
        });
      });
      `),t("b",{class:"t02"},"// closeLayer - stopMovie"),n(`
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
      `),t("b",{class:"t02"},"// resizeWindow"),n(`
      w.addEventListener('resize', function () {
        setPlayer();
      });
    },

    `),t("b",{class:"t04"},"appendStyles"),n(`: function () {
      var body = doc.querySelector('body');
      var styleStr = \`
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
        \`;
      var styleDom = doc.createElement('style');
      styleDom.innerText = styleStr;
      var brs = styleDom.querySelectorAll('br');
      Object.values(brs).forEach(function (value) {
        value.parentNode.removeChild(value);
      });
      body.appendChild(styleDom);
    },

  }

  `),t("b",{class:"t06"},"setYoutubeLayer"),n("."),t("b",{class:"t04"},"init"),n(`();
})(window, document);
<\/script>`)],-1),n(`

`,-1),t("b",{class:"t02"},`</body>
</html>`,-1),n(`
`,-1)])]),_:1}),s[1]||(s[1]=n(`
`,-1))])])]),_:1})],64))}}),Gt=Object.freeze(Object.defineProperty({__proto__:null,default:$t,metadata:fn},Symbol.toStringTag,{value:"Module"}));export{Bt as a,Lt as b,Et as c,At as d,Ct as e,Mt as f,zt as g,Pt as h,It as i,Ht as j,qt as k,Dt as l,Nt as m,Ot as n,Wt as o,Rt as p,Vt as q,Ut as r,Ft as s,Qt as t,Jt as u,Yt as v,Xt as w,Gt as x,Zt as y};
