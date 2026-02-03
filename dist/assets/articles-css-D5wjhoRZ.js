import{d as u,c as d,o as r,a as t,b as Y,t as E,r as M,e as I,f as gn,F as p,g as l,w as o,h as s,i as xn,j as vn,u as yn,k as $n,v as kn}from"./vendor-BYORPvVJ.js";const wn={class:"relative mb-20"},zn={class:"flex items-start justify-between gap-10"},Sn={class:"text-20 font-bold break-all"},jn={key:0,class:"text-11 pt-9 pr-3 text-gray-400"},m=u({__name:"ArticleHeader",props:{title:{},sampleUrl:{},updateDate:{}},setup(e){const i=e,n=()=>{i.sampleUrl&&window.open(i.sampleUrl,"_blank")};return(x,$)=>(r(),d("header",wn,[t("div",zn,[t("h2",Sn,E(e.title),1),e.updateDate?(r(),d("div",jn,E(e.updateDate),1)):Y("",!0)]),e.sampleUrl?(r(),d("button",{key:0,onClick:n,class:"underline"}," sample ")):Y("",!0)]))}}),C=(e,i)=>{const n=e.__vccOpts||e;for(const[x,$]of i)n[x]=$;return n},An={},Dn={class:"pre-codes-container flex flex-col gap-10 text-white [&_h3]:cursor-pointer [&_h3]:text-black [&_h3]:underline [&_p]:text-black [&_pre]:rounded-md [&_pre]:bg-[#112233] [&_pre]:p-20 [&_pre]:break-all [&_pre]:whitespace-pre-wrap"};function On(e,i){return r(),d("div",Dn,[M(e.$slots,"default")])}const f=C(An,[["render",On]]),Bn=["title","aria-label"],Tn={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Cn={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},a=u({__name:"CopyCode",setup(e){const i=I(null),n=I("コピー");let x=null;const $=async()=>{if(!i.value)return;const O=i.value.textContent||"";try{await navigator.clipboard.writeText(O),n.value="コピーしました！",x&&window.clearTimeout(x),x=window.setTimeout(()=>{n.value="コピー",x=null},2e3)}catch(v){console.error("Failed to copy:",v)}};return gn(()=>{x&&window.clearTimeout(x)}),(O,v)=>(r(),d(p,null,[t("div",{ref_key:"areaRef",ref:i},[M(O.$slots,"default")],512),t("button",{type:"button",class:"mt-20 inline-flex h-44 w-44 cursor-pointer items-center justify-center rounded border-none bg-blue-500 text-white hover:bg-blue-600",onClick:$,title:n.value,"aria-label":n.value},[n.value==="コピー"?(r(),d("svg",Tn,[...v[0]||(v[0]=[t("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},null,-1),t("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},null,-1)])])):(r(),d("svg",Cn,[...v[1]||(v[1]=[t("polyline",{points:"20 6 9 17 4 12"},null,-1)])]))],8,Bn)],64))}}),F={updateDate:"2016/01/08"},Pn=u({__name:"clearfix-extend",setup(e){return(i,n)=>(r(),d(p,null,[l(m,{title:"clearfix-extend","update-date":F.updateDate},null,8,["update-date"]),l(f,null,{default:o(()=>[...n[0]||(n[0]=[t("section",{class:"foo"},[t("h3",null,"h3"),t("ul",null,[t("li",null,"li"),t("li",null,"li")])],-1),t("pre",null,[t("code",null,[t("b",{class:"t02"},"// ie8 <="),s(`

%clearfix {
  &::after {
    content: "";
    display: block;
    clear: both;
  }
}`)])],-1),t("pre",null,[t("code",null,[t("b",{class:"t02"},"// ie8 >"),s(`

$view-ie7 : true;

%clearfix {
  &:before,
  &:after {
    content: "";
    display: table;
  }
  &:after {
    clear: both;
  }
  @if $view-ie7 {
    & {
      *zoom: 1;
    }
  }
}`)])],-1),t("pre",null,[t("code",null,`.foo {
  position: relative;
  padding: 20px;
  background: #eee;
  @extend %clearfix;
  h3 {
    position: absolute;
    top: -5px;
    left: -5px;
    padding: 10px;
    background: #ccc;
  }
  li {
    float: left;
    padding: 50px;
    background: #ddd;
  }
}`)],-1),t("pre",null,[t("code",null,`<section class="foo">
  <h3>h3</h3>
  <ul>
    <li>li</li>
    <li>li</li>
  </ul>
</section>`)],-1),t("pre",null,"// 「h3」のようにはみ出る要素が無い場合は、clearfixの代わりに「overflow: hidden;」のみでも可",-1)])]),_:1})],64))}}),En=C(Pn,[["__scopeId","data-v-578dec41"]]),dt=Object.freeze(Object.defineProperty({__proto__:null,default:En,metadata:F},Symbol.toStringTag,{value:"Module"})),U={updateDate:"2018/05/06"},In=u({__name:"color-conversion",setup(e){return xn(()=>{const i=document.getElementById("conversion10"),n=document.getElementById("decimal10"),x=document.getElementById("hexadecimal10"),$=document.getElementById("alpha10"),O=document.getElementById("conversion16"),v=document.getElementById("decimal16"),S=document.getElementById("hexadecimal16"),k=document.getElementById("alpha16"),R=document.getElementById("hexadecimal16Palette"),N=document.getElementById("alpha16Palette"),j=[],G=470,H=.3,P=function(){let y=!0;const w=x.value,A=w.length;let z=1;$.value.trim()!==""&&(z=Number($.value.trim()));for(let g=0;g<A;g++)0<=parseInt(w.charAt(g),16)&&parseInt(w.charAt(g),16)<=15||(y=!1);const D=A===6||A===3,B=0<=z&&z<=1;if(y&&D&&B){for(let g=0;g<3;g++)A===6?j[g]=parseInt(w.substr(g*2,2),16):A===3&&(j[g]=parseInt(w.substr(g,1)+w.substr(g,1),16));n.value="rgba("+j[0]+", "+j[1]+", "+j[2]+", "+String(z).replace("0.",".")+")",j[0]+j[1]+j[2]<G&&z>H?n.setAttribute("style","color:#fff; background:"+n.value):n.setAttribute("style","background:"+n.value)}else n.value="error",n.setAttribute("style","opacity: 1; background:#ffffff; color: #000;")},q=function(){let y,w,A,z=v.value.replace(/rgba\(/g,"");z=z.replace(/\)/g,"");const D=z.split(","),B=Number(D[0]),g=Number(D[1]),T=Number(D[2]),L=Number(D[3]),pn=/rgba\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*[01]?\.?\d*\s*\)\s*/.test(v.value),mn=0<=B&&B<=255&&0<=g&&g<=255&&0<=T&&T<=255,fn=0<=L&&L<=1&&D[3]?.trim()!=="";pn&&mn&&fn?(y=B.toString(16),w=g.toString(16),A=T.toString(16),S.value=("00"+y).slice(-2)+("00"+w).slice(-2)+("00"+A).slice(-2),k.value=D[3]?.trim()||"1",B+g+T<G?(S.setAttribute("style","color: #fff;"),k.setAttribute("style","color: #fff;"),Number(k.value)<=H&&(S.setAttribute("style","color: #000;"),k.setAttribute("style","color: #000;"))):(S.setAttribute("style","color: #000;"),k.setAttribute("style","color: #000;")),R?.setAttribute("style","opacity:"+k.value+"; background: #"+S.value),N?.setAttribute("style","opacity:"+k.value+"; background: #"+S.value)):(S.value="error",S.setAttribute("style","color: #000"),R?.setAttribute("style","opacity: 1; background: #fff"),k.value="-",k.setAttribute("style","color: #000"),N?.setAttribute("style","opacity: 1; background: #fff"))};i?.addEventListener("click",P,!1),x?.addEventListener("keyup",y=>{y.key==="Enter"&&P()}),$?.addEventListener("keyup",y=>{y.key==="Enter"&&P()}),O?.addEventListener("click",q,!1),v?.addEventListener("keyup",y=>{y.key==="Enter"&&q()})}),(i,n)=>(r(),d(p,null,[l(m,{title:"color-conversion","update-date":U.updateDate},null,8,["update-date"]),n[0]||(n[0]=vn('<div id="colorConversion" data-v-359a9e41><div id="colorConversion10" class="flex gap-10" data-v-359a9e41><span class="plainText" data-v-359a9e41>#</span><input type="text" id="hexadecimal10" value="ffffff" aria-label="Hexadecimal color value" class="bg-white" data-v-359a9e41><span class="plainText" data-v-359a9e41>alpha</span><input type="text" id="alpha10" value="1" aria-label="Alpha value" class="bg-white" data-v-359a9e41><input type="button" id="conversion10" value="16-&gt;10" aria-label="Convert hexadecimal to decimal" data-v-359a9e41><div class="backSheet" data-v-359a9e41><input type="text" id="decimal10" value="rgba(255, 255, 255, 1)" aria-label="Decimal color value" data-v-359a9e41></div></div><div id="colorConversion16" class="flex gap-10" data-v-359a9e41><input type="text" id="decimal16" value="rgba(255, 255, 255, 1)" aria-label="RGBA color value" data-v-359a9e41><input type="button" id="conversion16" value="10-&gt;16" aria-label="Convert decimal to hexadecimal" data-v-359a9e41><span class="plainText" data-v-359a9e41>#</span><div class="backSheet" id="hexadecimal16Back" data-v-359a9e41><span id="hexadecimal16Palette" data-v-359a9e41></span><input type="text" id="hexadecimal16" value="ffffff" maxlength="6" aria-label="Hexadecimal color code" data-v-359a9e41></div><span class="plainText" data-v-359a9e41>alpha</span><div class="backSheet" id="alpha16Back" data-v-359a9e41><span id="alpha16Palette" data-v-359a9e41></span><input type="text" id="alpha16" value="1" aria-label="Alpha transparency value" data-v-359a9e41></div></div></div>',1))],64))}}),Mn=C(In,[["__scopeId","data-v-359a9e41"]]),rt=Object.freeze(Object.defineProperty({__proto__:null,default:Mn,metadata:U},Symbol.toStringTag,{value:"Module"})),V={updateDate:"2022/02/09"},Rn=u({__name:"darkmode",setup(e){return(i,n)=>(r(),d(p,null,[l(m,{title:"darkmode","sample-url":"/sample/html/darkmode.html","update-date":V.updateDate},null,8,["update-date"]),l(f,null,{default:o(()=>[...n[0]||(n[0]=[t("pre",null,[t("code",null,[s(`:root {
  --main-text: #000;
  --main-bg: #fff;
}

@media (`),t("b",{class:"t01"},"prefers-color-scheme: dark"),s(`) {
  :root {
    --main-text: #ddd;
    --main-bg: #000;
  }
}

body {
  color: var(--main-text);
  background: var(--main-bg);
}
`)])],-1)])]),_:1})],64))}}),bt=Object.freeze(Object.defineProperty({__proto__:null,default:Rn,metadata:V},Symbol.toStringTag,{value:"Module"})),X={updateDate:"2014/11/15"},Nn=u({__name:"fixed-sp",setup(e){return(i,n)=>(r(),d(p,null,[l(m,{title:"fixed-sp","sample-url":"/sample/html/fixed-sp.html","update-date":X.updateDate},null,8,["update-date"]),l(f,null,{default:o(()=>[t("pre",null,[t("code",null,[l(a,null,{default:o(()=>[...n[0]||(n[0]=[s(`<!doctype html>
<html>
<head>
<title>fixed_sp</title>
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.wrap {
  `,-1),t("b",{class:"t01"},"position: relative;",-1),s(`
}
.head {
  `,-1),t("b",{class:"t01"},`position: fixed;
  top: 0;
  width: 100%;
  height:`,-1),s(" 50",-1),t("b",{class:"t01"},"px;",-1),s(`
  background: #ddd;
  opacity: 0.9;
}
</style>
</head>
<body>
<div class="wrap">
  <div class="head">head</div>
  <div class="content">content<br>...</div>
  <div class="foot">foot<br>...</div>
</div>
</body>
</html>
`,-1)])]),_:1}),n[1]||(n[1]=s(`
`,-1))])]),n[2]||(n[2]=t("pre",null,[s("(NG)"),t("br"),s("Android 2.3.6 GALAXY SⅡ LTE SC-03D -> headが遅れて追従"),t("br"),s("Windows Phone 7.10.8 IS12T -> headが追従しない")],-1)),n[3]||(n[3]=t("pre",null,[s("(OK)"),t("br"),s("iOS 6.0.1 iPhone 4S"),t("br"),s("iOS 7.0.4 iPhone 5"),t("br"),s("Android 2.3.4 XPERIA ray SC-03C"),t("br"),s("Android 4.0.4 GALAXY SⅢ SC-06D"),t("br"),s("Android 4.0.4 ARROWS Z ISW13F"),t("br"),s("Android 4.1.2 XPERIA Z SO-02E"),t("br"),s("BlackBerry 7.1.0 Bold 9900")],-1))]),_:1})],64))}}),ut=Object.freeze(Object.defineProperty({__proto__:null,default:Nn,metadata:X},Symbol.toStringTag,{value:"Module"})),W={updateDate:"2022/07/29"},Gn=u({__name:"flex-center",setup(e){return(i,n)=>(r(),d(p,null,[l(m,{title:"flex-center","sample-url":"/sample/html/flex-center.html","update-date":W.updateDate},null,8,["update-date"]),l(f,null,{default:o(()=>[t("pre",null,[t("code",null,[l(a,null,{default:o(()=>[...n[0]||(n[0]=[s(`<!doctype html>
<html>
<head>
<title>vh_center3</title>
<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
body {
  `,-1),t("b",{class:"t01"},`display: flex;
  justify-content: center;
  align-items: center;`,-1),s(`
  `,-1),t("b",{class:"t02"},`/*-- safari5.1以前, iOS8.4以前, Android4.3以前, IE10は要prefix --*/
  /*-- IE9以前は非対応 --*/`,-1),s(`
}
.content {
  width: 200px;
  height: 120px;
  background: #000;
  color: #fff;
}
</style>
</head>
<body>
<div class="content">content</div>
</body>
</html>
`,-1)])]),_:1}),n[1]||(n[1]=s(`
`,-1))])])]),_:1})],64))}}),pt=Object.freeze(Object.defineProperty({__proto__:null,default:Gn,metadata:W},Symbol.toStringTag,{value:"Module"})),Z={updateDate:"2024/11/27"},Hn=u({__name:"font-feature-settings",setup(e){return(i,n)=>(r(),d(p,null,[l(m,{title:"font-feature-settings","sample-url":"/sample/html/font-feature-settings.html","update-date":Z.updateDate},null,8,["update-date"]),l(f,null,{default:o(()=>[...n[0]||(n[0]=[t("pre",null,[t("code",null,"font-feature-settings: 'palt' on;"),s(`
`)],-1)])]),_:1})],64))}}),mt=Object.freeze(Object.defineProperty({__proto__:null,default:Hn,metadata:Z},Symbol.toStringTag,{value:"Module"})),K={updateDate:"2016/02/06"},qn=u({__name:"font-smoothing",setup(e){return(i,n)=>(r(),d(p,null,[l(m,{title:"font-smoothing","sample-url":"/sample/html/font-smoothing.html","update-date":K.updateDate},null,8,["update-date"]),l(f,null,{default:o(()=>[t("pre",null,[t("code",null,[l(a,null,{default:o(()=>[...n[0]||(n[0]=[s(`<!doctype html>
<meta charset="utf-8">
<title>title</title>
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">

<style>
div {
  margin-bottom:20px;
  padding: 6px;
}
.default {
  -moz-osx-font-smoothing: auto;
  -webkit-font-smoothing: auto;
}
`,-1),t("b",{class:"t03"},".smooth",-1),s(` {
  `,-1),t("b",{class:"t01"},`-moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;`,-1),s(`
}
.none {
  -moz-osx-font-smoothing: none;
  -webkit-font-smoothing: none;
}
</style>

<div class="default">abcdefghijklmnopqrstuvwxyzあいうえお<br>default</div>
<div class="`,-1),t("b",{class:"t03"},"smooth",-1),s(`">abcdefghijklmnopqrstuvwxyzあいうえお<br>smooth</div>
<div class="none">abcdefghijklmnopqrstuvwxyzあいうえお<br>none</div>
`,-1)])]),_:1}),n[1]||(n[1]=s(`
`,-1))])])]),_:1})],64))}}),ft=Object.freeze(Object.defineProperty({__proto__:null,default:qn,metadata:K},Symbol.toStringTag,{value:"Module"})),J={updateDate:"2022/07/30"},Ln=u({__name:"grid-center",setup(e){return(i,n)=>(r(),d(p,null,[l(m,{title:"grid-center","sample-url":"/sample/html/grid-center.html","update-date":J.updateDate},null,8,["update-date"]),l(f,null,{default:o(()=>[t("pre",null,[t("code",null,[l(a,null,{default:o(()=>[...n[0]||(n[0]=[s(`<!doctype html>
<html>
<head>
<title>vh_center4</title>
<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
body {
  `,-1),t("b",{class:"t01"},"display: grid;",-1),s(`
  `,-1),t("b",{class:"t01"},"place-content: center;",-1),s(`
}
.content {
  width: 200px;
  height: 120px;
  background: #000;
  color: #fff;
}
</style>
</head>
<body>
<div class="content">content</div>
</body>
</html>
`,-1)])]),_:1}),n[1]||(n[1]=s(`
`,-1))])])]),_:1})],64))}}),gt=Object.freeze(Object.defineProperty({__proto__:null,default:Ln,metadata:J},Symbol.toStringTag,{value:"Module"})),Yn="/assets/gtc-CvObz6fv.png",Fn=["src"],Q={updateDate:"2025/03/12"},Un=u({__name:"grid-template-columns",setup(e){return(i,n)=>(r(),d(p,null,[l(m,{title:"grid-template-columns","sample-url":"/sample/html/grid-template-columns.html","update-date":Q.updateDate},null,8,["update-date"]),t("img",{src:yn(Yn),alt:"grid-template-columns",class:"mb-30 w-full md:w-[450px]",loading:"lazy",decoding:"async"},null,8,Fn),l(f,null,{default:o(()=>[...n[0]||(n[0]=[t("pre",null,[t("code",null,`<dl>
  <dt>氏名</dt>
  <dd>あああああ</dd>
  <dt data-long>今から10年以内に叶えたい夢があるか</dt>
  <dd data-short>ある</dd>
  <dt data-short>将来設計</dt>
  <dd data-long>あああああああああああああああああああああああああああああああああああ</dd>
  <dt>あなたの長所</dt>
  <dd>ああああああああああああああ</dd>
  <dt>好きな食べ物</dt>
  <dd>あああああああ</dd>
</dl>`)],-1),t("pre",null,[t("code",null,[s(`dl {
  `),t("b",{class:"t01"},`display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;`),s(),t("b",{class:"t02"},"// 横4マス"),s(`
  width: 375px;
  margin: 60px auto 0;
  border-bottom: #ddd 1px solid;
  font-size: 15px;
}
dt,
dd {
  border-top: #ddd 1px solid;
  margin: 0;
  padding: 10px 0;
}
dt {
  `),t("b",{class:"t01"},"grid-column: 1 / span 2;"),s(),t("b",{class:"t02"},"// 1から2マス分繋げる"),s(`
  font-weight: 700;
}
dd {
  `),t("b",{class:"t01"},"grid-column: 3 / span 2;"),s(),t("b",{class:"t02"},"// 3から2マス分繋げる"),s(`
  text-align: right;
}
dt[data-long] {
  `),t("b",{class:"t01"},"grid-column: 1 / span 3;"),s(),t("b",{class:"t02"},"// 1から3マス分繋げる"),s(`
}
dt[data-short] {
  `),t("b",{class:"t01"},"grid-column: 1 / span 1;"),s(),t("b",{class:"t02"},"// 1から1マス分"),s(`
}
dd[data-long] {
  `),t("b",{class:"t01"},"grid-column: 2 / span 3;"),s(),t("b",{class:"t02"},"// 2から3マス分繋げる"),s(`
}
dd[data-short] {
  `),t("b",{class:"t01"},"grid-column: 4 / span 1;"),s(),t("b",{class:"t02"},"// 4から1マス分"),s(`
}
`)])],-1)])]),_:1})],64))}}),xt=Object.freeze(Object.defineProperty({__proto__:null,default:Un,metadata:Q},Symbol.toStringTag,{value:"Module"})),_={updateDate:"2022/07/29"},Vn=u({__name:"grid",setup(e){return(i,n)=>(r(),d(p,null,[l(m,{title:"grid","update-date":_.updateDate},null,8,["update-date"]),l(f,null,{default:o(()=>[t("pre",null,[t("code",null,[l(a,null,{default:o(()=>[...n[0]||(n[0]=[t("b",{class:"t01"},`display: grid;
grid-template-columns: 1fr 1fr;
grid-auto-rows: 50px;`,-1),s(`
`,-1)])]),_:1}),n[1]||(n[1]=s(`
`,-1))])]),n[8]||(n[8]=t("div",{class:"sample ex01"},[t("p",null,"a"),t("p",null,"b")],-1)),t("pre",null,[t("code",null,[l(a,null,{default:o(()=>[...n[2]||(n[2]=[t("b",{class:"t01"},`display: grid;
grid-template-columns: 72px 1fr;
word-break: break-all;`,-1),s(`
`,-1)])]),_:1}),n[3]||(n[3]=s(`
`,-1))])]),n[9]||(n[9]=t("div",{class:"sample ex02"},[t("p",null,"a"),t("p",null,"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"),t("p",null,"c"),t("p",null,"d"),t("p",null,"e"),t("p",null," ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff "),t("p",null,"g"),t("p",null,"h")],-1)),t("pre",null,[t("code",null,[l(a,null,{default:o(()=>[...n[4]||(n[4]=[t("b",{class:"t01"},`display: grid;
grid-template-columns: repeat(3, 1fr);
grid-auto-rows: minmax(100px, auto);
row-gap: 20px;
column-gap: 10px;`,-1),s(`
`,-1)])]),_:1}),n[5]||(n[5]=s(`
`,-1))])]),n[10]||(n[10]=t("div",{class:"sample ex03"},[t("p",null,"a"),t("p",null,"b"),t("p",null,"c"),t("p",null,"d"),t("p",null,"e"),t("p",null,"f"),t("p",null,"g"),t("p",null,"h"),t("p",null,"i")],-1)),t("pre",null,[t("code",null,[l(a,null,{default:o(()=>[...n[6]||(n[6]=[t("b",{class:"t01"},`.ex04 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.ex04 p {
  position: relative;
  padding-bottom: 50px;
  word-break: break-all;
}
.ex04 i {
  width: 100%;
  height: 50px;
  border: #d22 3px solid;
  position: absolute;
  left: 0;
  bottom: 0;
}`,-1),s(`
`,-1)])]),_:1}),n[7]||(n[7]=s(`
`,-1))])]),n[11]||(n[11]=t("div",{class:"sample ex04"},[t("p",null,[s("aaaaaaaaaaaaaaaaaaa"),t("i")]),t("p",null,[s("b"),t("i")]),t("p",null,[s("c"),t("i")]),t("p",null,[s("d"),t("i")]),t("p",null,[s("e"),t("i")]),t("p",null,[s("f"),t("i")]),t("p",null,[s("g"),t("i")]),t("p",null,[s("h"),t("i")]),t("p",null,[s("i"),t("i")])],-1))]),_:1})],64))}}),Xn=C(Vn,[["__scopeId","data-v-bac4214d"]]),vt=Object.freeze(Object.defineProperty({__proto__:null,default:Xn,metadata:_},Symbol.toStringTag,{value:"Module"})),c={updateDate:"2024/08/09"},Wn=u({__name:"has",setup(e){return(i,n)=>(r(),d(p,null,[l(m,{title:"has","sample-url":"/sample/html/has.html","update-date":c.updateDate},null,8,["update-date"]),l(f,null,{default:o(()=>[...n[0]||(n[0]=[t("pre",null,[s(`// scss

p {
  display: none;
}

li {
  &`),t("b",{class:"t01"},":has("),s("input:checked"),t("b",{class:"t01"},")"),s(` {
    label {
      font-weight: 700;
    }
    p {
      display: block;
    }
  }
}`)],-1)])]),_:1})],64))}}),yt=Object.freeze(Object.defineProperty({__proto__:null,default:Wn,metadata:c},Symbol.toStringTag,{value:"Module"})),h={updateDate:"2021/09/09"},Zn=u({__name:"keyframes",setup(e){return(i,n)=>(r(),d(p,null,[l(m,{title:"keyframes","update-date":h.updateDate},null,8,["update-date"]),l(f,null,{default:o(()=>[t("pre",null,[t("code",null,[l(a,null,{default:o(()=>[...n[0]||(n[0]=[t("b",{class:"t01"},`@keyframes openMenu {
  0% {
    left: 100vw;
  }

  100% {
    left: 0;
  }
}

@keyframes closeMenu {
  0% {
    left: 0;
  }

  100% {
    left: 100vw;
  }
}

.Open {
  animation-name: openMenu;
  animation-duration: 0.3s;
  left: 0;
}

.Close {
  animation-name: closeMenu;
  animation-duration: 0.3s;
  left: 100vw;
}`,-1),s(`
`,-1)])]),_:1}),n[1]||(n[1]=s(`
`,-1))])])]),_:1})],64))}}),$t=Object.freeze(Object.defineProperty({__proto__:null,default:Zn,metadata:h},Symbol.toStringTag,{value:"Module"})),nn={updateDate:"2021/09/10"},Kn=u({__name:"line-clamp-ellipsis",setup(e){return(i,n)=>(r(),d(p,null,[l(m,{title:"line-clamp-ellipsis","sample-url":"/sample/html/line-clamp-ellipsis.html","update-date":nn.updateDate},null,8,["update-date"]),l(f,null,{default:o(()=>[t("pre",null,[t("code",null,[l(a,null,{default:o(()=>[...n[0]||(n[0]=[t("b",{class:"t01"},`display: -webkit-box;
overflow: hidden;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;`,-1),s(`
`,-1)])]),_:1}),n[1]||(n[1]=s(`
`,-1))])])]),_:1})],64))}}),kt=Object.freeze(Object.defineProperty({__proto__:null,default:Kn,metadata:nn},Symbol.toStringTag,{value:"Module"})),tn={updateDate:"2024/06/25"},Jn=u({__name:"radio-checkbox-image-replacement",setup(e){return(i,n)=>(r(),d(p,null,[l(m,{title:"radio-checkbox-image-replacement","sample-url":"/sample/html/radio-checkbox-image-replacement.html","update-date":tn.updateDate},null,8,["update-date"]),l(f,null,{default:o(()=>[...n[0]||(n[0]=[t("pre",null,[s(`<style>
  li {
    margin-top: 10px;
    list-style: none;
  }

  .foo input[type='radio'] {
    display: none;
  }

  .foo input[type='radio'] + label {
    position: relative;
    display: flex;
    font-size: 14px;
    font-weight: 300;
  }

  .foo input[type='radio'] + label::before {
    content: '';
    `),t("b",{class:"t01"},`background: url(../img/radio-off.svg), url(../img/radio-on.svg);
    background-size: 20px 20px, 0 0;`),s(`
    width: 20px;
    height: 20px;
    display: block;
    margin-right: 8px;
    position: relative;
    top: -1px;
  }

  .foo input[type='radio']:checked + label::before {
    background-size:
      0 0,
      20px 20px;
  }
</style>

<ul>
  <li>
    <div class="foo">
      <input type="radio" name="name1" id="check1" value="" checked="checked" />
      <label for="check1">ああああああ</label>
    </div>
  </li>
  <li>
    <div class="foo">
      <input type="radio" name="name1" id="check2" value="" />
      <label for="check2">いいいいいい</label>
    </div>
  </li>
  <li>
    <div class="foo">
      <input type="radio" name="name1" id="check3" value="" />
      <label for="check3">うううううう</label>
    </div>
  </li>
  <li>
    <div class="foo">
      <input type="radio" name="name1" id="check4" value="" />
      <label for="check4">ええええええ</label>
    </div>
  </li>
  <li>
    <div class="foo">
      <input type="radio" name="name1" id="check5" value="" />
      <label for="check5">おおおおおお</label>
    </div>
  </li>
</ul>`)],-1)])]),_:1})],64))}}),wt=Object.freeze(Object.defineProperty({__proto__:null,default:Jn,metadata:tn},Symbol.toStringTag,{value:"Module"})),sn={updateDate:"2021/09/10"},Qn=u({__name:"remove-scrollbar",setup(e){return(i,n)=>(r(),d(p,null,[l(m,{title:"remove-scrollbar","update-date":sn.updateDate},null,8,["update-date"]),l(f,null,{default:o(()=>[t("pre",null,[t("code",null,[l(a,null,{default:o(()=>[...n[0]||(n[0]=[t("b",{class:"t01"},`overflow-x: scroll;
-ms-overflow-style: none;
scrollbar-width: none;

&::-webkit-scrollbar {
  display: none;
}
`,-1)])]),_:1}),n[1]||(n[1]=s(`
`,-1))])])]),_:1})],64))}}),zt=Object.freeze(Object.defineProperty({__proto__:null,default:Qn,metadata:sn},Symbol.toStringTag,{value:"Module"})),ln={updateDate:"2025/02/05"},_n=u({__name:"rounded-table",setup(e){return(i,n)=>(r(),d(p,null,[l(m,{title:"rounded-table","sample-url":"/sample/html/rounded-table.html","update-date":ln.updateDate},null,8,["update-date"]),l(f,null,{default:o(()=>[...n[0]||(n[0]=[t("pre",null,[t("code",null,[s(`table {
  border: #000 1px solid;
  border-radius: 10px;
  `),t("b",{class:"t01"},`border-collapse: separate;
  border-spacing: 0;`),s(`
}
th, td {
  border-right: #000 1px solid;
  border-bottom: #000 1px solid;
}
th:last-child, td:last-child {
  border-right: none;
}
tr:last-child td {
  border-bottom: none;
}

`),t("b",{class:"t02"},`// border-collapse: separate; （角丸を有効にする。ただし、trにborderが引けなくなる）
// border-spacing: 0; （border-collapse: separate;にした時に発生するセル間の余白を詰める）`)])],-1)])]),_:1})],64))}}),St=Object.freeze(Object.defineProperty({__proto__:null,default:_n,metadata:ln},Symbol.toStringTag,{value:"Module"})),on={updateDate:"2020/12/19"},cn=u({__name:"safearea",setup(e){return(i,n)=>(r(),d(p,null,[l(m,{title:"safearea","update-date":on.updateDate},null,8,["update-date"]),l(f,null,{default:o(()=>[...n[0]||(n[0]=[t("pre",null,[t("code",null,[s(`// viewport

<meta name="viewport" content="width=*******, *******, *******, `),t("b",{class:"t01"},"viewport-fit=cover"),s(`">
`)])],-1),t("pre",null,[t("code",null,[s(`// scss
ex) 16px

$space: 16px;
@each $side in right left bottom {
  padding-#{$side}: $space;
  padding-#{$side}: calc(`),t("b",{class:"t03"},"constant(safe-area-inset-#{$side}"),s(") + #{$space}); "),t("b",{class:"t02"},"// 11.1"),s(`
  padding-#{$side}: calc(`),t("b",{class:"t01"},"env(safe-area-inset-#{$side}"),s(") + #{$space}); "),t("b",{class:"t02"},"// 11.2 ~"),s(`
}
`)])],-1),t("pre",null,[t("code",null,[s(`// css
ex) 16px

padding-right: 16px;
padding-left: 16px;
padding-bottom: 16px;
padding-right: calc(`),t("b",{class:"t03"},"constant(safe-area-inset-right)"),s(" + 16px); "),t("b",{class:"t02"},"// 11.1"),s(`
padding-left: calc(`),t("b",{class:"t03"},"constant(safe-area-inset-left)"),s(" + 16px); "),t("b",{class:"t02"},"// 11.1"),s(`
padding-bottom: calc(`),t("b",{class:"t03"},"constant(safe-area-inset-bottom)"),s(" + 16px); "),t("b",{class:"t02"},"// 11.1"),s(`
padding-right: calc(`),t("b",{class:"t01"},"env(safe-area-inset-right)"),s(" + 16px); "),t("b",{class:"t02"},"// 11.2 ~"),s(`
padding-left: calc(`),t("b",{class:"t01"},"env(safe-area-inset-left)"),s(" + 16px); "),t("b",{class:"t02"},"// 11.2 ~"),s(`
padding-bottom: calc(`),t("b",{class:"t01"},"env(safe-area-inset-bottom)"),s(" + 16px); "),t("b",{class:"t02"},"// 11.2 ~"),s(`
`)])],-1)])]),_:1})],64))}}),jt=Object.freeze(Object.defineProperty({__proto__:null,default:cn,metadata:on},Symbol.toStringTag,{value:"Module"})),hn={"data-switch-box":""},nt=["aria-expanded"],b=u({__name:"SwitchBox",props:{title:{}},setup(e){let i=0;const n=I(!1),x=`switchbox-${i++}`,$=()=>{n.value=!n.value};return(O,v)=>(r(),d("div",hn,[t("h3",null,[t("button",{type:"button",class:"w-full cursor-pointer text-left text-black underline","aria-expanded":n.value,"aria-controls":x,"data-switch-toggle":"",onClick:$},E(e.title),9,nt)]),$n(t("div",{id:x,"data-switch-content":""},[M(O.$slots,"default")],512),[[kn,n.value]])]))}}),an={updateDate:"2021/02/26"},tt=u({__name:"sass",setup(e){return(i,n)=>(r(),d(p,null,[l(m,{title:"sass","update-date":an.updateDate},null,8,["update-date"]),l(f,null,{default:o(()=>[l(b,{title:"ネスト(property)"},{default:o(()=>[t("pre",null,[n[1]||(n[1]=s(`// scss

`,-1)),l(a,null,{default:o(()=>[...n[0]||(n[0]=[s(`div {
  `,-1),t("b",{class:"t01"},"border:",-1),s(` {
    `,-1),t("b",{class:"t01"},"style:",-1),s(),t("b",{class:"t02"},"solid;",-1),s(`
    `,-1),t("b",{class:"t01"},"left:",-1),s(` {
      `,-1),t("b",{class:"t01"},"width:",-1),s(),t("b",{class:"t02"},"1px;",-1),s(`
      `,-1),t("b",{class:"t01"},"color:",-1),s(),t("b",{class:"t02"},"#111;",-1),s(`
    }
    `,-1),t("b",{class:"t01"},"right:",-1),s(` {
      `,-1),t("b",{class:"t01"},"width:",-1),s(),t("b",{class:"t02"},"1px;",-1),s(`
      `,-1),t("b",{class:"t01"},"color:",-1),s(),t("b",{class:"t02"},"#222;",-1),s(`
    }
  }
  `,-1),t("b",{class:"t01"},"margin:",-1),s(),t("b",{class:"t02"},"10px",-1),s(` {
    `,-1),t("b",{class:"t01"},"top:",-1),s(),t("b",{class:"t02"},"0;",-1),s(`
  }
}
`,-1)])]),_:1}),n[2]||(n[2]=s(`

---

// css

div {
  `,-1)),n[3]||(n[3]=t("b",{class:"t01"},"border-style:",-1)),n[4]||(n[4]=s()),n[5]||(n[5]=t("b",{class:"t02"},"solid;",-1)),n[6]||(n[6]=s(`
  `,-1)),n[7]||(n[7]=t("b",{class:"t01"},"border-left-width:",-1)),n[8]||(n[8]=s()),n[9]||(n[9]=t("b",{class:"t02"},"1px;",-1)),n[10]||(n[10]=s(`
  `,-1)),n[11]||(n[11]=t("b",{class:"t01"},"border-left-color:",-1)),n[12]||(n[12]=s()),n[13]||(n[13]=t("b",{class:"t02"},"#111;",-1)),n[14]||(n[14]=s(`
  `,-1)),n[15]||(n[15]=t("b",{class:"t01"},"border-right-width:",-1)),n[16]||(n[16]=s()),n[17]||(n[17]=t("b",{class:"t02"},"1px;",-1)),n[18]||(n[18]=s(`
  `,-1)),n[19]||(n[19]=t("b",{class:"t01"},"border-right-color:",-1)),n[20]||(n[20]=s()),n[21]||(n[21]=t("b",{class:"t02"},"#222;",-1)),n[22]||(n[22]=s(`
  `,-1)),n[23]||(n[23]=t("b",{class:"t01"},"margin:",-1)),n[24]||(n[24]=s()),n[25]||(n[25]=t("b",{class:"t02"},"10px;",-1)),n[26]||(n[26]=s(`
  `,-1)),n[27]||(n[27]=t("b",{class:"t01"},"margin-top:",-1)),n[28]||(n[28]=s()),n[29]||(n[29]=t("b",{class:"t02"},"0;",-1)),n[30]||(n[30]=s(`
}
      `,-1))])]),_:1}),l(b,{title:"ネスト(media query)"},{default:o(()=>[t("pre",null,[n[32]||(n[32]=s(`// scss

`,-1)),l(a,null,{default:o(()=>[...n[31]||(n[31]=[s(`div {
  `,-1),t("b",{class:"t02"},"color: #aaa;",-1),s(`
  `,-1),t("b",{class:"t01"},"@media all and (orientation:landscape) {",-1),s(`
    `,-1),t("b",{class:"t02"},"color: #bbb;",-1),s(`
  `,-1),t("b",{class:"t01"},"}",-1),s(`
}
`,-1)])]),_:1}),n[33]||(n[33]=s(`

---

// css

div {
  `,-1)),n[34]||(n[34]=t("b",{class:"t02"},"color: #aaa;",-1)),n[35]||(n[35]=s(`
}
`,-1)),n[36]||(n[36]=t("b",{class:"t01"},"@media all and (orientation: landscape) {",-1)),n[37]||(n[37]=s(`
  div {
  `,-1)),n[38]||(n[38]=t("b",{class:"t02"},"color: #bbb;",-1)),n[39]||(n[39]=s(`
  }
`,-1)),n[40]||(n[40]=t("b",{class:"t01"},"}",-1)),n[41]||(n[41]=s(`
      `,-1))])]),_:1}),l(b,{title:"変数(データ型)"},{default:o(()=>[t("pre",null,[n[43]||(n[43]=s(`// scss

`,-1)),l(a,null,{default:o(()=>[...n[42]||(n[42]=[t("b",{class:"t01"},"$string_1:",-1),s(' ".foo"',-1),t("b",{class:"t01"},";",-1),s(),t("b",{class:"t02"},"// .(ドット)など記号で始まる場合、引用符が必要",-1),s(`
`,-1),t("b",{class:"t01"},"$string_2:",-1),s(" color",-1),t("b",{class:"t01"},";",-1),s(`
`,-1),t("b",{class:"t01"},"$number_1:",-1),s(" 1",-1),t("b",{class:"t01"},";",-1),s(`
`,-1),t("b",{class:"t01"},"$number_2:",-1),s(" 1px",-1),t("b",{class:"t01"},";",-1),s(),t("b",{class:"t02"},"// cssで有効な単位は数値扱い",-1),s(`
`,-1),t("b",{class:"t01"},"$color_1:",-1),s(" rgba(17,34,51,1.0)",-1),t("b",{class:"t01"},";",-1),s(),t("b",{class:"t02"},"// アルファが1.0だと16進数6桁表記に変換される",-1),s(`
`,-1),t("b",{class:"t01"},"$color_2:",-1),s(" #123",-1),t("b",{class:"t01"},";",-1),s(),t("b",{class:"t02"},"// 6桁表記に変換される",-1),s(`
`,-1),t("b",{class:"t01"},"$boolean:",-1),s(" true",-1),t("b",{class:"t01"},";",-1),s(`
`,-1),t("b",{class:"t01"},"$null:",-1),s(" null",-1),t("b",{class:"t01"},";",-1),s(`
`,-1),t("b",{class:"t01"},"$list:",-1),s(" 0 0 no-repeat",-1),t("b",{class:"t01"},";",-1),s(),t("b",{class:"t02"},"// カンマ区切りも有効",-1),s(`
`,-1),t("b",{class:"t01"},"$map: (",-1),s(`
  img_c`,-1),t("b",{class:"t01"},":",-1),s(' "/img/common/"',-1),t("b",{class:"t01"},",",-1),s(`
  img_s`,-1),t("b",{class:"t01"},":",-1),s(' "/img/sprite/"',-1),t("b",{class:"t01"},",",-1),s(`
  img_f`,-1),t("b",{class:"t01"},":",-1),s(` "/img/figure/"
`,-1),t("b",{class:"t01"},");",-1),s(`
`,-1),t("b",{class:"t02"},"// グローバルスコープ = どこでも有効",-1),s(`
`,-1),t("b",{class:"t02"},"// セレクタ内で宣言した変数はそのセレクタ内でのみ有効(ローカルスコープ)",-1),s(`
`,-1),t("b",{class:"t02"},"// グローバルとローカルで同じ変数名の場合はローカル優先",-1),s(`
`,-1),t("b",{class:"t02"},"// listの値にlistやmapを入れたり、mapの値にlistやmapを入れることができる",-1),s(`
`,-1),t("b",{class:"t02"},"// mapのキーと値はeach文で変数2つとして使うことができる",-1),s(`
`,-1),t("b",{class:"t02"},"// 使えない変数名: 数字から始まる,@などの記号,--(ハイフン2個)から始まる",-1),s(`

`,-1),t("b",{class:"t03"},[s("#{"),t("b",{class:"t01"},"$string_1"),s("}")],-1),s(` {

  line-height: `,-1),t("b",{class:"t01"},"$number_1",-1),s(`;
  box-shadow: 0 `,-1),t("b",{class:"t01"},"$number_2",-1),s(" 1px ",-1),t("b",{class:"t01"},"$color_1",-1),s(`;
  `,-1),t("b",{class:"t03"},[s("#{"),t("b",{class:"t01"},"$string_2"),s("}")],-1),s(": ",-1),t("b",{class:"t01"},"$color_2",-1),s(`;
  background-`,-1),t("b",{class:"t03"},[s("#{"),t("b",{class:"t01"},"$string_2"),s("}")],-1),s(`: #000;

  @if `,-1),t("b",{class:"t01"},"$boolean",-1),s(` == true {
    @if `,-1),t("b",{class:"t01"},"$null",-1),s(` == null {
      background: url(`,-1),t("b",{class:"t03"},[s("#{"),t("b",{class:"t01"},"map-get($map,img_c)"),s("}")],-1),s("bg.png) ",-1),t("b",{class:"t01"},"$list",-1),s(`;
    }
  }
  opacity: `,-1),t("b",{class:"t01"},"$null",-1),s("; ",-1),t("b",{class:"t02"},"// 値にnullが入るとプロパティ名も出力しない",-1),s(`
}
`,-1),t("b",{class:"t02"},"// #{} = インターポレーション = 文字との連結やプロパティやセレクタのとき必要",-1),s(`
`,-1)])]),_:1}),n[44]||(n[44]=s(`

---

// css

`,-1)),n[45]||(n[45]=t("b",{class:"t01"},".foo",-1)),n[46]||(n[46]=s(` {
  line-height: `,-1)),n[47]||(n[47]=t("b",{class:"t01"},"1",-1)),n[48]||(n[48]=s(`;
  box-shadow: 0 `,-1)),n[49]||(n[49]=t("b",{class:"t01"},"1px",-1)),n[50]||(n[50]=s(" 1px ",-1)),n[51]||(n[51]=t("b",{class:"t01"},"#112233",-1)),n[52]||(n[52]=s(`;
  `,-1)),n[53]||(n[53]=t("b",{class:"t01"},"color",-1)),n[54]||(n[54]=s(": ",-1)),n[55]||(n[55]=t("b",{class:"t01"},"#112233",-1)),n[56]||(n[56]=s(`;
  background-`,-1)),n[57]||(n[57]=t("b",{class:"t01"},"color",-1)),n[58]||(n[58]=s(`: #000;
  background: url(`,-1)),n[59]||(n[59]=t("b",{class:"t01"},"/img/common/",-1)),n[60]||(n[60]=s("bg.png) ",-1)),n[61]||(n[61]=t("b",{class:"t01"},"0 0 no-repeat",-1)),n[62]||(n[62]=s(`;
}
      `,-1))])]),_:1}),l(b,{title:"演算(数値)"},{default:o(()=>[t("pre",null,[n[64]||(n[64]=s(`// scss

`,-1)),l(a,null,{default:o(()=>[...n[63]||(n[63]=[s(`div {
  margin: `,-1),t("b",{class:"t01"},"10px + 5",-1),s(`;
  margin: `,-1),t("b",{class:"t01"},"10px - 5",-1),s(`;
  margin: `,-1),t("b",{class:"t01"},"10px * 5",-1),s(`;
  margin: `,-1),t("b",{class:"t01"},"(10px / 5)",-1),s("; ",-1),t("b",{class:"t02"},"// 割算のスラッシュはフォント一括指定と区別するため括弧が必要",-1),s(`
  margin: `,-1),t("b",{class:"t01"},"10px % 5",-1),s(`;

  color: `,-1),t("b",{class:"t01"},"#111 + #aaa",-1),s(`;
  color: `,-1),t("b",{class:"t01"},"#aaa + #aaa",-1),s("; ",-1),t("b",{class:"t02"},"// 範囲を超えたら自動調整",-1),s(`
  color: `,-1),t("b",{class:"t01"},"(#999 / 3)",-1),s(`;
  color: `,-1),t("b",{class:"t01"},"rgba(0, 50, 255, 0.5) + rgba(100, 50, 255, 0.5)",-1),s("; ",-1),t("b",{class:"t02"},"// 255以上は自動調整,アルファは演算不可",-1),s(`

  $size: 20px;
  font: `,-1),t("b",{class:"t01"},"$size",-1),s(),t("b",{class:"t01"},"/ 2",-1),s("; ",-1),t("b",{class:"t02"},"// 変数の時は割算でも括弧が要らない",-1),s(`
  font: `,-1),t("b",{class:"t03"},[s("#{"),t("b",{class:"t01"},"$size"),s("}")],-1),s(),t("b",{class:"t01"},"/ 2",-1),s("; ",-1),t("b",{class:"t02"},"// フォント一括指定にしたいときはインターポレーション",-1),s(`
}
`,-1)])]),_:1}),n[65]||(n[65]=s(`

---

// css

div {
  margin: `,-1)),n[66]||(n[66]=t("b",{class:"t01"},"15px",-1)),n[67]||(n[67]=s(`;
  margin: `,-1)),n[68]||(n[68]=t("b",{class:"t01"},"5px",-1)),n[69]||(n[69]=s(`;
  margin: `,-1)),n[70]||(n[70]=t("b",{class:"t01"},"50px",-1)),n[71]||(n[71]=s(`;
  margin: `,-1)),n[72]||(n[72]=t("b",{class:"t01"},"2px",-1)),n[73]||(n[73]=s(`;
  margin: `,-1)),n[74]||(n[74]=t("b",{class:"t01"},"0px",-1)),n[75]||(n[75]=s(`;
  color: `,-1)),n[76]||(n[76]=t("b",{class:"t01"},"#bbbbbb",-1)),n[77]||(n[77]=s(`;
  color: `,-1)),n[78]||(n[78]=t("b",{class:"t01"},"white",-1)),n[79]||(n[79]=s(`;
  color: `,-1)),n[80]||(n[80]=t("b",{class:"t01"},"#333333",-1)),n[81]||(n[81]=s(`;
  color: `,-1)),n[82]||(n[82]=t("b",{class:"t01"},"rgba(100, 100, 255, 0.5)",-1)),n[83]||(n[83]=s(`;
  font: `,-1)),n[84]||(n[84]=t("b",{class:"t01"},"10px",-1)),n[85]||(n[85]=s(`;
  font: `,-1)),n[86]||(n[86]=t("b",{class:"t01"},"20px / 2",-1)),n[87]||(n[87]=s(`;
}
      `,-1))])]),_:1}),l(b,{title:"演算(文字列)"},{default:o(()=>[t("pre",null,[n[89]||(n[89]=s(`// scss

`,-1)),l(a,null,{default:o(()=>[...n[88]||(n[88]=[s(`div:before {
  content : `,-1),t("b",{class:"t01"},"foo + bar",-1),s(`;
  content : `,-1),t("b",{class:"t01"},'"foo" + bar',-1),s(`;
  content : `,-1),t("b",{class:"t01"},'foo + "bar"',-1),s(`;
  content : `,-1),t("b",{class:"t01"},'"foo" + "bar"',-1),s(`;
  `,-1),t("b",{class:"t02"},"// 先頭の引用符の有無が反映される",-1),s(`

  `,-1),t("b",{class:"t01"},"$root",-1),s(` : "../";
  `,-1),t("b",{class:"t01"},"$kind",-1),s(` : "img/";
  `,-1),t("b",{class:"t01"},"$file",-1),s(` : "bg";
  background: url("`,-1),t("b",{class:"t03"},[s("#{"),t("b",{class:"t01"},"$root + $kind + $file"),s("}")],-1),s(`.png") 0 0 no-repeat;
}
`,-1)])]),_:1}),n[90]||(n[90]=s(`

---

// css

div:before {
  content: `,-1)),n[91]||(n[91]=t("b",{class:"t01"},"foobar",-1)),n[92]||(n[92]=s(`;
  content: `,-1)),n[93]||(n[93]=t("b",{class:"t01"},'"foobar"',-1)),n[94]||(n[94]=s(`;
  content: `,-1)),n[95]||(n[95]=t("b",{class:"t01"},"foobar",-1)),n[96]||(n[96]=s(`;
  content: `,-1)),n[97]||(n[97]=t("b",{class:"t01"},'"foobar"',-1)),n[98]||(n[98]=s(`;
  background: url("`,-1)),n[99]||(n[99]=t("b",{class:"t01"},"../img/bg.png",-1)),n[100]||(n[100]=s(`") 0 0 no-repeat;
}

      `,-1))])]),_:1}),l(b,{title:"条件分岐(@if)"},{default:o(()=>[t("pre",null,[n[102]||(n[102]=s(`// scss

`,-1)),l(a,null,{default:o(()=>[...n[101]||(n[101]=[t("b",{class:"t03"},"$foo",-1),s(` : 1;

.bar {
  `,-1),t("b",{class:"t01"},"@if",-1),s(),t("b",{class:"t03"},"$foo",-1),s(),t("b",{class:"t01"},"{",-1),s(),t("b",{class:"t02"},"/* falseかnull以外の値が存在するとき */",-1),s(`
    color: #111;
  `,-1),t("b",{class:"t01"},"} @else {",-1),s(),t("b",{class:"t02"},"/* 値がfalseかnullのとき */",-1),s(`
    color: #222;
  `,-1),t("b",{class:"t01"},"}",-1),s(`
}
`,-1),t("b",{class:"t02"},"// .bar { color: if($foo == 1, #111, #222); } も同義",-1),s(`

.baz {
  `,-1),t("b",{class:"t01"},"@if",-1),s(),t("b",{class:"t03"},"$foo == 0",-1),s(),t("b",{class:"t01"},"{",-1),s(),t("b",{class:"t02"},"/* 値が0のとき */",-1),s(`
    color: #333;
  `,-1),t("b",{class:"t01"},"} @else if",-1),s(),t("b",{class:"t03"},"$foo == 1",-1),s(),t("b",{class:"t01"},"{",-1),s(),t("b",{class:"t02"},"/* 値が1のとき */",-1),s(`
    color: #444;
  `,-1),t("b",{class:"t01"},"} @else {",-1),s(),t("b",{class:"t02"},"/* 0か1以外の値が存在するとき */",-1),s(`
    color: #555;
  `,-1),t("b",{class:"t01"},"}",-1),s(`
}
`,-1),t("b",{class:"t02"},"// .baz { color: if($foo == 0, #333, if($foo == 1, #444, #555)); } も同義",-1),s(`
`,-1)])]),_:1}),n[103]||(n[103]=s(`

---

// css

.bar {
  `,-1)),n[104]||(n[104]=t("b",{class:"t02"},"/* falseかnull以外の値が存在するとき */",-1)),n[105]||(n[105]=s(`
  color: #111;
}
.baz {
  `,-1)),n[106]||(n[106]=t("b",{class:"t02"},"/* 値が1のとき */",-1)),n[107]||(n[107]=s(`
  color: #444;
}


`,-1)),n[108]||(n[108]=t("b",{class:"t02"},"// 値が存在しない場合はコンパイルエラー",-1)),n[109]||(n[109]=s(`
`,-1)),n[110]||(n[110]=t("b",{class:"t02"},"// 他の演算子は !=, >, <, >=, <=, and, or, not",-1)),n[111]||(n[111]=s(`
      `,-1))])]),_:1}),l(b,{title:"ループ(@for)"},{default:o(()=>[t("pre",null,[n[113]||(n[113]=s(`// scss

`,-1)),l(a,null,{default:o(()=>[...n[112]||(n[112]=[t("b",{class:"t01"},"@for",-1),s(),t("b",{class:"t03"},"$num",-1),s(),t("b",{class:"t01"},"from",-1),s(" 1 ",-1),t("b",{class:"t01"},"through",-1),s(" 3 ",-1),t("b",{class:"t01"},"{",-1),s(`
  .icon_A_`,-1),t("b",{class:"t03"},"#{$num}",-1),s(` {
    background: url(/img/icon_A_`,-1),t("b",{class:"t03"},"#{$num}",-1),s(".png) 0 ((",-1),t("b",{class:"t03"},"$num",-1),s(` - 1)*100px) no-repeat;
  }
`,-1),t("b",{class:"t01"},"}",-1),s(`

`,-1),t("b",{class:"t01"},"@for",-1),s(),t("b",{class:"t03"},"$num",-1),s(),t("b",{class:"t01"},"from",-1),s(" 1 ",-1),t("b",{class:"t01"},"to",-1),s(" 3 ",-1),t("b",{class:"t01"},"{",-1),s(`
  .icon_B_`,-1),t("b",{class:"t03"},"#{$num}",-1),s(` {
    background: url(/img/icon_B_`,-1),t("b",{class:"t03"},"#{$num}",-1),s(".png) 0 ((",-1),t("b",{class:"t03"},"$num",-1),s(` - 1)*100px) no-repeat;
  }
`,-1),t("b",{class:"t01"},"}",-1),s(`
`,-1)])]),_:1}),n[114]||(n[114]=s(`

---

// css

.icon_A_`,-1)),n[115]||(n[115]=t("b",{class:"t01"},"1",-1)),n[116]||(n[116]=s(` {
  background: url(/img/icon_A_`,-1)),n[117]||(n[117]=t("b",{class:"t01"},"1",-1)),n[118]||(n[118]=s(".png) 0 ",-1)),n[119]||(n[119]=t("b",{class:"t01"},"0px",-1)),n[120]||(n[120]=s(` no-repeat;
}
.icon_A_`,-1)),n[121]||(n[121]=t("b",{class:"t01"},"2",-1)),n[122]||(n[122]=s(` {
  background: url(/img/icon_A_`,-1)),n[123]||(n[123]=t("b",{class:"t01"},"2",-1)),n[124]||(n[124]=s(".png) 0 ",-1)),n[125]||(n[125]=t("b",{class:"t01"},"100px",-1)),n[126]||(n[126]=s(` no-repeat;
}
.icon_A_`,-1)),n[127]||(n[127]=t("b",{class:"t01"},"3",-1)),n[128]||(n[128]=s(` {
  background: url(/img/icon_A_`,-1)),n[129]||(n[129]=t("b",{class:"t01"},"3",-1)),n[130]||(n[130]=s(".png) 0 ",-1)),n[131]||(n[131]=t("b",{class:"t01"},"200px",-1)),n[132]||(n[132]=s(` no-repeat;
}

.icon_B_`,-1)),n[133]||(n[133]=t("b",{class:"t01"},"1",-1)),n[134]||(n[134]=s(` {
  background: url(/img/icon_B_`,-1)),n[135]||(n[135]=t("b",{class:"t01"},"1",-1)),n[136]||(n[136]=s(".png) 0 ",-1)),n[137]||(n[137]=t("b",{class:"t01"},"0px",-1)),n[138]||(n[138]=s(` no-repeat;
}
.icon_B_`,-1)),n[139]||(n[139]=t("b",{class:"t01"},"2",-1)),n[140]||(n[140]=s(` {
  background: url(/img/icon_B_`,-1)),n[141]||(n[141]=t("b",{class:"t01"},"2",-1)),n[142]||(n[142]=s(".png) 0 ",-1)),n[143]||(n[143]=t("b",{class:"t01"},"100px",-1)),n[144]||(n[144]=s(` no-repeat;
}
      `,-1))])]),_:1}),l(b,{title:"ループ(@while)"},{default:o(()=>[t("pre",null,[n[146]||(n[146]=s(`// scss

`,-1)),l(a,null,{default:o(()=>[...n[145]||(n[145]=[t("b",{class:"t03"},"$num",-1),s(`: 5;
`,-1),t("b",{class:"t01"},"@while",-1),s(),t("b",{class:"t03"},"$num > 0",-1),s(),t("b",{class:"t01"},"{",-1),s(`
  .icon_`,-1),t("b",{class:"t03"},"#{$num}",-1),s(` {
    background: url(/img/icon_`,-1),t("b",{class:"t03"},"#{$num}",-1),s(".png) 0 ((",-1),t("b",{class:"t03"},"$num",-1),s(` - 1)*100px) no-repeat;
  }
  `,-1),t("b",{class:"t03"},"$num",-1),s(": ",-1),t("b",{class:"t03"},"$num",-1),s(` - 1;
`,-1),t("b",{class:"t01"},"}",-1),s(`
`,-1)])]),_:1}),n[147]||(n[147]=s(`

---

// css

.icon_`,-1)),n[148]||(n[148]=t("b",{class:"t01"},"5",-1)),n[149]||(n[149]=s(` {
  background: url(/img/icon_`,-1)),n[150]||(n[150]=t("b",{class:"t01"},"5",-1)),n[151]||(n[151]=s(".png) 0 ",-1)),n[152]||(n[152]=t("b",{class:"t01"},"400px",-1)),n[153]||(n[153]=s(` no-repeat;
}
.icon_`,-1)),n[154]||(n[154]=t("b",{class:"t01"},"4",-1)),n[155]||(n[155]=s(` {
  background: url(/img/icon_`,-1)),n[156]||(n[156]=t("b",{class:"t01"},"4",-1)),n[157]||(n[157]=s(".png) 0 ",-1)),n[158]||(n[158]=t("b",{class:"t01"},"300px",-1)),n[159]||(n[159]=s(` no-repeat;
}
.icon_`,-1)),n[160]||(n[160]=t("b",{class:"t01"},"3",-1)),n[161]||(n[161]=s(` {
  background: url(/img/icon_`,-1)),n[162]||(n[162]=t("b",{class:"t01"},"3",-1)),n[163]||(n[163]=s(".png) 0 ",-1)),n[164]||(n[164]=t("b",{class:"t01"},"200px",-1)),n[165]||(n[165]=s(` no-repeat;
}
.icon_`,-1)),n[166]||(n[166]=t("b",{class:"t01"},"2",-1)),n[167]||(n[167]=s(` {
  background: url(/img/icon_`,-1)),n[168]||(n[168]=t("b",{class:"t01"},"2",-1)),n[169]||(n[169]=s(".png) 0 ",-1)),n[170]||(n[170]=t("b",{class:"t01"},"100px",-1)),n[171]||(n[171]=s(` no-repeat;
}
.icon_`,-1)),n[172]||(n[172]=t("b",{class:"t01"},"1",-1)),n[173]||(n[173]=s(` {
  background: url(/img/icon_`,-1)),n[174]||(n[174]=t("b",{class:"t01"},"1",-1)),n[175]||(n[175]=s(".png) 0 ",-1)),n[176]||(n[176]=t("b",{class:"t01"},"0px",-1)),n[177]||(n[177]=s(` no-repeat;
}
      `,-1))])]),_:1}),l(b,{title:"ループ(@each)"},{default:o(()=>[t("pre",null,[n[179]||(n[179]=s(`// scss

`,-1)),l(a,null,{default:o(()=>[...n[178]||(n[178]=[t("b",{class:"t02"},"// each文の中に値を適用",-1),s(`
.foo {
  `,-1),t("b",{class:"t01"},"@each",-1),s(),t("b",{class:"t03"},"$prefix",-1),s(),t("b",{class:"t01"},"in",-1),s(" -webkit- -moz- -ms- -o- null ",-1),t("b",{class:"t01"},"{",-1),s(`
    `,-1),t("b",{class:"t03"},"#{$prefix}",-1),s(`border-radius: 10px;
  `,-1),t("b",{class:"t01"},"}",-1),s(`
}

`,-1),t("b",{class:"t02"},"// リストにしてからeach文に適用",-1),s(`
`,-1),t("b",{class:"t03"},"$vendor:",-1),s(" -webkit- -moz- -ms- -o- null",-1),t("b",{class:"t03"},";",-1),s(`
.bar {
  `,-1),t("b",{class:"t01"},"@each",-1),s(),t("b",{class:"t03"},"$prefix",-1),s(),t("b",{class:"t01"},"in",-1),s(),t("b",{class:"t03"},"$vendor",-1),s(),t("b",{class:"t01"},"{",-1),s(`
    `,-1),t("b",{class:"t03"},"#{$prefix}",-1),s(`border-radius: 20px;
  `,-1),t("b",{class:"t01"},"}",-1),s(`
}

`,-1),t("b",{class:"t02"},"// マップにしてからeach文に適用",-1),s(`
`,-1),t("b",{class:"t03"},"$vendor_prefix: (",-1),s(`
  webkit`,-1),t("b",{class:"t03"},":",-1),s(" -webkit-",-1),t("b",{class:"t03"},",",-1),s(`
  mozilla`,-1),t("b",{class:"t03"},":",-1),s(" -moz-",-1),t("b",{class:"t03"},",",-1),s(`
  ie`,-1),t("b",{class:"t03"},":",-1),s(" -ms-",-1),t("b",{class:"t03"},",",-1),s(`
  opera`,-1),t("b",{class:"t03"},":",-1),s(" -o-",-1),t("b",{class:"t03"},",",-1),s(`
  none`,-1),t("b",{class:"t03"},":",-1),s(` null
`,-1),t("b",{class:"t03"},");",-1),s(`
.baz {
  `,-1),t("b",{class:"t01"},"@each",-1),s(),t("b",{class:"t03"},"$vendor",-1),t("b",{class:"t01"},",",-1),s(),t("b",{class:"t03"},"$prefix",-1),s(),t("b",{class:"t01"},"in",-1),s(),t("b",{class:"t03"},"$vendor_prefix",-1),s(),t("b",{class:"t01"},"{",-1),s(`
    `,-1),t("b",{class:"t03"},"#{$prefix}",-1),s("border-radius: 30px; ",-1),t("b",{class:"t02"},[s("/* "),t("b",{class:"t03"},"#{$vendor}"),s(" */")],-1),s(`
  `,-1),t("b",{class:"t01"},"}",-1),s(`
}
`,-1)])]),_:1}),n[180]||(n[180]=s(`

---

// css

.foo {
  `,-1)),n[181]||(n[181]=t("b",{class:"t01"},"-webkit-",-1)),n[182]||(n[182]=s(`border-radius: 10px;
  `,-1)),n[183]||(n[183]=t("b",{class:"t01"},"-moz-",-1)),n[184]||(n[184]=s(`border-radius: 10px;
  `,-1)),n[185]||(n[185]=t("b",{class:"t01"},"-ms-",-1)),n[186]||(n[186]=s(`border-radius: 10px;
  `,-1)),n[187]||(n[187]=t("b",{class:"t01"},"-o-",-1)),n[188]||(n[188]=s(`border-radius: 10px;
  border-radius: 10px;
}

.bar {
  `,-1)),n[189]||(n[189]=t("b",{class:"t01"},"-webkit-",-1)),n[190]||(n[190]=s(`border-radius: 20px;
  `,-1)),n[191]||(n[191]=t("b",{class:"t01"},"-moz-",-1)),n[192]||(n[192]=s(`border-radius: 20px;
  `,-1)),n[193]||(n[193]=t("b",{class:"t01"},"-ms-",-1)),n[194]||(n[194]=s(`border-radius: 20px;
  `,-1)),n[195]||(n[195]=t("b",{class:"t01"},"-o-",-1)),n[196]||(n[196]=s(`border-radius: 20px;
  border-radius: 20px;
}

.baz {
  `,-1)),n[197]||(n[197]=t("b",{class:"t01"},"-webkit-",-1)),n[198]||(n[198]=s(`border-radius: 30px;
  `,-1)),n[199]||(n[199]=t("b",{class:"t02"},[s("/* "),t("b",{class:"t01"},"webkit"),s(" */")],-1)),n[200]||(n[200]=s(`
  `,-1)),n[201]||(n[201]=t("b",{class:"t01"},"-moz-",-1)),n[202]||(n[202]=s(`border-radius: 30px;
  `,-1)),n[203]||(n[203]=t("b",{class:"t02"},[s("/* "),t("b",{class:"t01"},"mozilla"),s(" */")],-1)),n[204]||(n[204]=s(`
  `,-1)),n[205]||(n[205]=t("b",{class:"t01"},"-ms-",-1)),n[206]||(n[206]=s(`border-radius: 30px;
  `,-1)),n[207]||(n[207]=t("b",{class:"t02"},[s("/* "),t("b",{class:"t01"},"ie"),s(" */")],-1)),n[208]||(n[208]=s(`
  `,-1)),n[209]||(n[209]=t("b",{class:"t01"},"-o-",-1)),n[210]||(n[210]=s(`border-radius: 30px;
  `,-1)),n[211]||(n[211]=t("b",{class:"t02"},[s("/* "),t("b",{class:"t01"},"opera"),s(" */")],-1)),n[212]||(n[212]=s(`
  border-radius: 30px;
  `,-1)),n[213]||(n[213]=t("b",{class:"t02"},[s("/* "),t("b",{class:"t01"},"none"),s(" */")],-1)),n[214]||(n[214]=s(`
}
      `,-1))])]),_:1}),l(b,{title:"@use"},{default:o(()=>[...n[215]||(n[215]=[t("pre",null,[s(`// sass template

{project}
│
├ css
│　└ {project}.css
└ sass
　　├ {project}.scss
　　│
　　├ _conf.scss
　　│
　　└ parts
　　　 ├ lib
　　　 │ ├ _reset.scss
　　　 │ └ _utility.scss
　　　 ├ _base.scss
　　　 ├ _layout.scss
　　　 └ _module.scss



// {project}.scss

`),t("b",{class:"t01"},'@use "'),s("conf"),t("b",{class:"t01"},'";'),s(`
`),t("b",{class:"t01"},'@use "'),s("parts/lib/reset"),t("b",{class:"t01"},'";'),s(`
`),t("b",{class:"t01"},'@use "'),s("parts/lib/utility"),t("b",{class:"t01"},'";'),s(`
`),t("b",{class:"t01"},'@use "'),s("parts/base"),t("b",{class:"t01"},'";'),s(`
`),t("b",{class:"t01"},'@use "'),s("parts/layout"),t("b",{class:"t01"},'";'),s(`
`),t("b",{class:"t01"},'@use "'),s("parts/module"),t("b",{class:"t01"},'";'),s(`


`),t("b",{class:"t02"},`// {project}.scss の中にlib,mod内のscssファイルの内容を読み込む
// 名前がアンダーバーで始まるパーシャルファイルは、sassフォルダごとコンパイルしても個別に出力しない
// @use文の値で、パーシャルファイルの最初のアンダーバーと拡張子は省略可能`),s(`
      `)],-1)])]),_:1}),l(b,{title:"!default"},{default:o(()=>[t("pre",null,[n[219]||(n[219]=s("",-1)),l(a,null,{default:o(()=>[...n[216]||(n[216]=[s(`.foo {

  `,-1),t("b",{class:"t02"},"// A",-1),s(`
  `,-1),t("b",{class:"t01"},"$body_font_size",-1),s(": ",-1),t("b",{class:"t01"},"12px",-1),s(`;
  `,-1),t("b",{class:"t01"},"$body_line_height",-1),s(": ",-1),t("b",{class:"t01"},"1em",-1),s(`;

  `,-1),t("b",{class:"t02"},"// B",-1),s(`
  body {
    font-size: $body_font_size; `,-1),t("b",{class:"t02"},"// 12px",-1),s(`
    line-height: $body_line_height; `,-1),t("b",{class:"t02"},"// 1em",-1),s(`
  }
}
`,-1)])]),_:1}),n[220]||(n[220]=s(`

`,-1)),n[221]||(n[221]=t("b",{class:"t02"},`// Aが別ファイルのパーシャルなどからimportしたものの場合、上記のコードならBは問題無くcssに反映される
// しかし、Aのパーシャル内で仮に変更があった下記のような場合、`,-1)),n[222]||(n[222]=s(`

`,-1)),l(a,null,{default:o(()=>[...n[217]||(n[217]=[s(`.foo {

  `,-1),t("b",{class:"t02"},"// A'",-1),s(`
  `,-1),t("b",{class:"t01"},"$body_font_size",-1),s(": ",-1),t("b",{class:"t03"},"14px",-1),s("; ",-1),t("b",{class:"t02"},"// 値が更新されていた",-1),s(`
  `,-1),t("b",{class:"t01"},[t("b",{class:"t03"},"$text"),s("_line_height")],-1),s(": ",-1),t("b",{class:"t03"},"1.5em",-1),s("; ",-1),t("b",{class:"t02"},"// 変数名と値が更新されていた",-1),s(`

  `,-1),t("b",{class:"t02"},"// B",-1),s(`
  body {
    font-size: $body_font_size; `,-1),t("b",{class:"t02"},"// 14px",-1),s(`
    line-height: $body_line_height; `,-1),t("b",{class:"t02"},"// コンパイルエラー",-1),s(`
  }
}
`,-1)])]),_:1}),n[223]||(n[223]=s(`

`,-1)),n[224]||(n[224]=t("b",{class:"t02"},`// Bの $body_font_size には問題なくA'の値が適用されるが、$body_line_height は定義されていないのでエラーになる
// そこで、下記のようにBで!defaultを指定しておくことにより、`,-1)),n[225]||(n[225]=s(`


`,-1)),l(a,null,{default:o(()=>[...n[218]||(n[218]=[s(`.foo {

  `,-1),t("b",{class:"t02"},"// A'",-1),s(`
  `,-1),t("b",{class:"t01"},"$body_font_size",-1),s(": ",-1),t("b",{class:"t03"},"14px",-1),s("; ",-1),t("b",{class:"t02"},"// 値が更新されていた",-1),s(`
  `,-1),t("b",{class:"t01"},[t("b",{class:"t03"},"$text"),s("_line_height")],-1),s(": ",-1),t("b",{class:"t03"},"1.5em",-1),s("; ",-1),t("b",{class:"t02"},"// 変数名と値が更新されていた",-1),s(`

  `,-1),t("b",{class:"t02"},"// B",-1),s(`
  $body_font_size: 12px `,-1),t("b",{class:"t01"},"!default",-1),s(`;
  $body_line_height: 1em `,-1),t("b",{class:"t01"},"!default",-1),s(`;
  body {
    font-size: $body_font_size; `,-1),t("b",{class:"t02"},"// 14px",-1),s(`
    line-height: $body_line_height; `,-1),t("b",{class:"t02"},"// 1em",-1),s(`
  }
}
`,-1)])]),_:1}),n[226]||(n[226]=s(`

`,-1)),n[227]||(n[227]=t("b",{class:"t02"},"// A'の変数宣言はBにとって問題が無く、値が更新された $body_font_size には A'の値が適用され、A'の変数宣言に問題がある $body_line_height には !default の値が適用される",-1)),n[228]||(n[228]=s(`
      `,-1))])]),_:1}),l(b,{title:"@mixin"},{default:o(()=>[t("pre",null,[n[230]||(n[230]=s(`// scss

`,-1)),l(a,null,{default:o(()=>[...n[229]||(n[229]=[t("b",{class:"t01"},"@mixin baz {",-1),s(`
  margin: 0;
  padding: 10px;
`,-1),t("b",{class:"t01"},"}",-1),s(`

.foo {
  `,-1),t("b",{class:"t01"},"@include baz;",-1),s(`
  color: #000;
}

.bar {
  `,-1),t("b",{class:"t01"},"@include baz;",-1),s(`
  color: #f00;
}
`,-1)])]),_:1}),n[231]||(n[231]=s(`

---

// css

.foo {
  `,-1)),n[232]||(n[232]=t("b",{class:"t03"},"margin: 0;",-1)),n[233]||(n[233]=s(`
  `,-1)),n[234]||(n[234]=t("b",{class:"t03"},"padding: 10px;",-1)),n[235]||(n[235]=s(`
  color: #000;
}

.bar {
  `,-1)),n[236]||(n[236]=t("b",{class:"t03"},"margin: 0;",-1)),n[237]||(n[237]=s(`
  `,-1)),n[238]||(n[238]=t("b",{class:"t03"},"padding: 10px;",-1)),n[239]||(n[239]=s(`
  color: #f00;
}

`,-1)),n[240]||(n[240]=t("b",{class:"t02"},"// includeした場所にmixinの内容を読み込む",-1)),n[241]||(n[241]=s(`
`,-1)),n[242]||(n[242]=t("b",{class:"t02"},"// includeした場所よりmixinの表記場所が下にあるとコンパイルエラー",-1)),n[243]||(n[243]=s(`
`,-1)),n[244]||(n[244]=t("b",{class:"t02"},"// mixinの中でincludeすることも可",-1)),n[245]||(n[245]=s(`
`,-1)),n[246]||(n[246]=t("b",{class:"t02"},"// mixinの中でincludeする場合は互いのmixinの表記順にルールは無い",-1)),n[247]||(n[247]=s(`
`,-1)),n[248]||(n[248]=t("b",{class:"t02"},"// 使えないmixin名: 数字から始まる,@などの記号,--(ハイフン2個)から始まる",-1)),n[249]||(n[249]=s(`
      `,-1))])]),_:1}),l(b,{title:"@mixin(引数)"},{default:o(()=>[t("pre",null,[n[251]||(n[251]=s(`// scss

`,-1)),l(a,null,{default:o(()=>[...n[250]||(n[250]=[t("b",{class:"t01"},"@mixin baz($value: 10px) {",-1),s("  ",-1),t("b",{class:"t02"},"// : 10px = 初期値",-1),s(`
  margin: 0;
  padding: `,-1),t("b",{class:"t01"},"$value",-1),s(`;
`,-1),t("b",{class:"t01"},"}",-1),s(`

.foo {
  `,-1),t("b",{class:"t01"},"@include baz;",-1),s(`
  color: #000;
}

.bar{
  `,-1),t("b",{class:"t01"},"@include baz(20px);",-1),s(`
  color: #f00;
}
`,-1)])]),_:1}),n[252]||(n[252]=s(`

---

// css

.foo {
  `,-1)),n[253]||(n[253]=t("b",{class:"t03"},"margin: 0;",-1)),n[254]||(n[254]=s(`
  `,-1)),n[255]||(n[255]=t("b",{class:"t03"},"padding: 10px;",-1)),n[256]||(n[256]=s("  ",-1)),n[257]||(n[257]=t("b",{class:"t02"},"// 引数を指定しなければ初期値が反映される",-1)),n[258]||(n[258]=s(`
  color: #000;
}

.bar {
  `,-1)),n[259]||(n[259]=t("b",{class:"t03"},"margin: 0;",-1)),n[260]||(n[260]=s(`
  `,-1)),n[261]||(n[261]=t("b",{class:"t03"},"padding: 20px;",-1)),n[262]||(n[262]=s(`
  color: #f00;
}

`,-1)),n[263]||(n[263]=t("b",{class:"t02"},"// 初期値は未設定でも可 @mixin baz($value) { 〜 }",-1)),n[264]||(n[264]=s(`
`,-1)),n[265]||(n[265]=t("b",{class:"t02"},"// 初期値が未設定の時、includeで引数を設定しなければエラー",-1)),n[266]||(n[266]=s(`
`,-1)),n[267]||(n[267]=t("b",{class:"t02"},"// 引数の複数設定可 @mixin baz($value1: 10px, $value2: 20px, 〜 ) { 〜 }",-1)),n[268]||(n[268]=s(`
      `,-1))])]),_:1}),l(b,{title:"@mixin(可変長引数)"},{default:o(()=>[t("pre",null,[n[271]||(n[271]=s("",-1)),l(a,null,{default:o(()=>[...n[269]||(n[269]=[s(`@mixin foo1($value) {
  text-shadow: $value;
}

.bar1 {
  @include foo1(1px 1px 0 #555, -1px -1px 0 #eee); `,-1),t("b",{class:"t02"},"// 1つの引数に2つの値を渡しているのでエラー",-1),s(`
  @include foo1(`,-1),t("b",{class:"t03"},"(",-1),s("1px 1px 0 #555, -1px -1px 0 #eee",-1),t("b",{class:"t03"},")",-1),s("); ",-1),t("b",{class:"t02"},"// valid",-1),s(`
  @include foo1(`,-1),t("b",{class:"t03"},'unquote("',-1),s("1px 1px 0 #555, -1px -1px 0 #eee",-1),t("b",{class:"t03"},'")',-1),s("); ",-1),t("b",{class:"t02"},"// valid",-1),s(`
}


@mixin foo2(`,-1),t("b",{class:"t01"},"$value...",-1),s(") { ",-1),t("b",{class:"t02"},"// 引数の数を限定しない",-1),s(`
  text-shadow: $value;
}

.bar2 {
  @include foo2(1px 1px 0 #555, -1px -1px 0 #eee); `,-1),t("b",{class:"t02"},"// valid",-1),s(`
}
`,-1)])]),_:1}),n[272]||(n[272]=s(`


---


`,-1)),l(a,null,{default:o(()=>[...n[270]||(n[270]=[s(`@mixin foo($t, $r, $b, $l) {
  padding-top: $t;
  padding-right: $r;
  padding-bottom: $b;
  padding-left: $l;
}

.bar {
  $value: 10px, 20px, 30px, 40px;

  @include foo($value); `,-1),t("b",{class:"t02"},"// $t に4つの値を渡し、$r,$b,$l に値が入らないのでエラー",-1),s(`
  @include foo(`,-1),t("b",{class:"t01"},"$value...",-1),s("); ",-1),t("b",{class:"t02"},"// valid",-1),s(`
}
`,-1)])]),_:1}),n[273]||(n[273]=s(`
      `,-1))])]),_:1}),l(b,{title:"@mixin(@content)"},{default:o(()=>[t("pre",null,[n[275]||(n[275]=s(`// scss

`,-1)),l(a,null,{default:o(()=>[...n[274]||(n[274]=[t("b",{class:"t01"},"@mixin media($value) {",-1),s(`

  @if $value == pc {
    @media(min-width:769px){
      `,-1),t("b",{class:"t01"},"@content;",-1),s(`
    }
  }
  @if $value == tablet {
    @media(max-width:768px) and (min-width: 321px){
      `,-1),t("b",{class:"t01"},"@content;",-1),s(`
    }
  }
  @if $value == sp {
    @media(max-width:320px){
      `,-1),t("b",{class:"t01"},"@content;",-1),s(`
    }
  }
`,-1),t("b",{class:"t01"},"}",-1),s(`

#header {

  background: #edf;
  color: #222;

  `,-1),t("b",{class:"t01"},"@include media(pc) {",-1),s(`
    height: 100px;
    font-size: 18px;
  `,-1),t("b",{class:"t01"},"}",-1),s(`
  `,-1),t("b",{class:"t01"},"@include media(tablet) {",-1),s(`
    height: 60px;
    font-size: 16px;
  `,-1),t("b",{class:"t01"},"}",-1),s(`
  `,-1),t("b",{class:"t01"},"@include media(sp) {",-1),s(`
    height: 30px;
    font-size: 12px;
  `,-1),t("b",{class:"t01"},"}",-1),s(`
}
`,-1)])]),_:1}),n[276]||(n[276]=s(`

---

// css

#header {
  background: #edf;
  color: #222;
}
`,-1)),n[277]||(n[277]=t("b",{class:"t03"},"@media (min-width: 769px) {",-1)),n[278]||(n[278]=s(`
  #header {
  `,-1)),n[279]||(n[279]=t("b",{class:"t03"},`height: 100px;
  font-size: 18px;`,-1)),n[280]||(n[280]=s(`
  }
`,-1)),n[281]||(n[281]=t("b",{class:"t03"},"}",-1)),n[282]||(n[282]=s(`
`,-1)),n[283]||(n[283]=t("b",{class:"t03"},"@media (max-width: 768px) and (min-width: 321px) {",-1)),n[284]||(n[284]=s(`
  #header {
  `,-1)),n[285]||(n[285]=t("b",{class:"t03"},`height: 60px;
  font-size: 16px;`,-1)),n[286]||(n[286]=s(`
  }
`,-1)),n[287]||(n[287]=t("b",{class:"t03"},"}",-1)),n[288]||(n[288]=s(`
`,-1)),n[289]||(n[289]=t("b",{class:"t03"},"@media (max-width: 320px) {",-1)),n[290]||(n[290]=s(`
  #header {
  `,-1)),n[291]||(n[291]=t("b",{class:"t03"},`height: 30px;
  font-size: 12px;`,-1)),n[292]||(n[292]=s(`
  }
`,-1)),n[293]||(n[293]=t("b",{class:"t03"},"}",-1)),n[294]||(n[294]=s(`

`,-1)),n[295]||(n[295]=t("b",{class:"t02"},"// includeした場所にmixinの内容を読み込み、contentした場所にはincludeの{}の内容が入る",-1)),n[296]||(n[296]=s(`
`,-1)),n[297]||(n[297]=t("b",{class:"t02"},"// 上記はレスポンシブのmediaquery表記を簡素化するためmixinに纏めた例",-1)),n[298]||(n[298]=s(`
      `,-1))])]),_:1}),l(b,{title:"@extend"},{default:o(()=>[t("pre",null,[n[300]||(n[300]=s(`// scss

`,-1)),l(a,null,{default:o(()=>[...n[299]||(n[299]=[s(`.baz {
  margin: 0;
  padding: 10px;
}

.foo {
  `,-1),t("b",{class:"t01"},"@extend",-1),s(` .baz;
  color: #000;
}

.bar {
  `,-1),t("b",{class:"t01"},"@extend",-1),s(` .baz;
  color: #f00;
}
`,-1)])]),_:1}),n[301]||(n[301]=s(`

---

// css

.baz`,-1)),n[302]||(n[302]=t("b",{class:"t03"},", .foo, .bar",-1)),n[303]||(n[303]=s(` {
  margin: 0;
  padding: 10px;
}

.foo {
  color: #000;
}

.bar {
  color: #f00;
}

`,-1)),n[304]||(n[304]=t("b",{class:"t02"},"// extendした場所のセレクタ(.fooと.bar)が、指定したセレクタ(.baz)の後に追記される",-1)),n[305]||(n[305]=s(`
`,-1)),n[306]||(n[306]=t("b",{class:"t02"},"// mixinと違い、指定したセレクタの場所が上になければエラー、というルールは無い",-1)),n[307]||(n[307]=s(`
`,-1)),n[308]||(n[308]=t("b",{class:"t02"},"// 指定したセレクタが無い場合はエラーになるが、@extend .baz !optional; とすれば回避する",-1)),n[309]||(n[309]=s(`
`,-1)),n[310]||(n[310]=t("b",{class:"t02"},"// @mediaの中から、外にあるセレクタはextendできない",-1)),n[311]||(n[311]=s(`
      `,-1))])]),_:1}),l(b,{title:"@extend(placeholder selector)"},{default:o(()=>[t("pre",null,[n[313]||(n[313]=s(`// scss

`,-1)),l(a,null,{default:o(()=>[...n[312]||(n[312]=[t("b",{class:"t01"},"%",-1),s(`baz {
  margin: 0;
  padding: 10px;
}

.foo {
  `,-1),t("b",{class:"t01"},"@extend %",-1),s(`baz;
  color: #000;
}

.bar {
  `,-1),t("b",{class:"t01"},"@extend %",-1),s(`baz;
  color: #f00;
}
`,-1)])]),_:1}),n[314]||(n[314]=s(`

---

// css

`,-1)),n[315]||(n[315]=t("b",{class:"t03"},".foo, .bar",-1)),n[316]||(n[316]=s(` {
  margin: 0;
  padding: 10px;
}

.foo {
  color: #000;
}

.bar {
  color: #f00;
}

`,-1)),n[317]||(n[317]=t("b",{class:"t02"},"// extendした場所のセレクタ(.fooと.bar)が、指定したセレクタ(%baz)に代わって表記される",-1)),n[318]||(n[318]=s(`
`,-1)),n[319]||(n[319]=t("b",{class:"t02"},"// mixinと違い、指定したセレクタの場所がextendした場所より上になければエラーというルールは無い",-1)),n[320]||(n[320]=s(`
`,-1)),n[321]||(n[321]=t("b",{class:"t02"},"// 指定したセレクタが無い場合はエラーになるが、@extend %baz !optional; とすれば回避する",-1)),n[322]||(n[322]=s(`
`,-1)),n[323]||(n[323]=t("b",{class:"t02"},"// @mediaの中から、外にあるプレースホルダセレクタはextendできない",-1)),n[324]||(n[324]=s(`
      `,-1))])]),_:1}),l(b,{title:"@at-root"},{default:o(()=>[t("pre",null,[n[326]||(n[326]=s(`// sass

`,-1)),l(a,null,{default:o(()=>[...n[325]||(n[325]=[s(`.foo_1 {
  `,-1),t("b",{class:"t02"},'content: "1";',-1),s(`

  .foo_2a {
    `,-1),t("b",{class:"t02"},'content: "2a";',-1),s(`
  }
  `,-1),t("b",{class:"t01"},"@at-root",-1),s(" .foo_2b { ",-1),t("b",{class:"t02"},"/* セレクタの前に付けることで親(.foo_1)の外に出す */",-1),s(`
    `,-1),t("b",{class:"t02"},'content: "2b";',-1),s(`
  }
}

.bar_1 {
  `,-1),t("b",{class:"t02"},'content: "1";',-1),s(`

  `,-1),t("b",{class:"t01"},"@at-root {",-1),s(),t("b",{class:"t02"},"/* 複数のセレクタを親(.bar_1)の外に出す */",-1),s(`
    .bar_2 {
      `,-1),t("b",{class:"t02"},'content: "2";',-1),s(`
    }
    .bar_3 {
      `,-1),t("b",{class:"t02"},'content: "3";',-1),s(`
    }
  `,-1),t("b",{class:"t01"},"}",-1),s(`
}

@media all and (orientation:landscape) {
  .baz_1 {
    `,-1),t("b",{class:"t02"},'content: "1";',-1),s(`

    `,-1),t("b",{class:"t01"},"@at-root",-1),s(" .baz_2a { ",-1),t("b",{class:"t02"},"/* @mediaの外に出ない */",-1),s(`
      `,-1),t("b",{class:"t02"},'content: "2a";',-1),s(`
    }
    `,-1),t("b",{class:"t01"},"@at-root (without: media)",-1),s(` {
      .baz_2b { `,-1),t("b",{class:"t02"},"/* @mediaの外に出る */",-1),s(`
        `,-1),t("b",{class:"t02"},'content: "2b";',-1),s(`
      }
    }
    `,-1),t("b",{class:"t01"},"@at-root (without: media rule)",-1),s(` {
      .baz_2c { `,-1),t("b",{class:"t02"},"/* @mediaの外に出て親(.baz_1)からも出る */",-1),s(`
        `,-1),t("b",{class:"t02"},'content: "2c";',-1),s(`
      }
    }
    `,-1),t("b",{class:"t01"},"@at-root (with: media)",-1),s(` {
      .baz_2d { `,-1),t("b",{class:"t02"},"/* @mediaの外に同じ@mediaを作り、親(.baz_1)からは出る */",-1),s(`
        `,-1),t("b",{class:"t02"},'content: "2d";',-1),s(`
      }
    }
  }
}
`,-1)])]),_:1}),n[327]||(n[327]=s(`

---

// css


.foo_1 {
  `,-1)),n[328]||(n[328]=t("b",{class:"t02"},'content: "1";',-1)),n[329]||(n[329]=s(`
}
.foo_1 .foo_2a {
  `,-1)),n[330]||(n[330]=t("b",{class:"t02"},'content: "2a";',-1)),n[331]||(n[331]=s(`
}
`,-1)),n[332]||(n[332]=t("b",{class:"t03"},".foo_2b {",-1)),n[333]||(n[333]=s(`
  `,-1)),n[334]||(n[334]=t("b",{class:"t02"},"/* セレクタの前に付けることで親(.foo_1)の外に出す */",-1)),n[335]||(n[335]=s(`
  `,-1)),n[336]||(n[336]=t("b",{class:"t02"},'content: "2b";',-1)),n[337]||(n[337]=s(`
`,-1)),n[338]||(n[338]=t("b",{class:"t03"},"}",-1)),n[339]||(n[339]=s(`


.bar_1 {
  `,-1)),n[340]||(n[340]=t("b",{class:"t02"},'content: "1";',-1)),n[341]||(n[341]=s(`
}
`,-1)),n[342]||(n[342]=t("b",{class:"t02"},"/* 複数のセレクタを親(.bar_1)の外に出す */",-1)),n[343]||(n[343]=s(`
`,-1)),n[344]||(n[344]=t("b",{class:"t03"},".bar_2 {",-1)),n[345]||(n[345]=s(`
  `,-1)),n[346]||(n[346]=t("b",{class:"t02"},'content: "2";',-1)),n[347]||(n[347]=s(`
`,-1)),n[348]||(n[348]=t("b",{class:"t03"},"}",-1)),n[349]||(n[349]=s(`
`,-1)),n[350]||(n[350]=t("b",{class:"t03"},".bar_3 {",-1)),n[351]||(n[351]=s(`
  `,-1)),n[352]||(n[352]=t("b",{class:"t02"},'content: "3";',-1)),n[353]||(n[353]=s(`
`,-1)),n[354]||(n[354]=t("b",{class:"t03"},"}",-1)),n[355]||(n[355]=s(`


@media all and (orientation: landscape) {
  .baz_1 {
  `,-1)),n[356]||(n[356]=t("b",{class:"t02"},'content: "1";',-1)),n[357]||(n[357]=s(`
  }
  .baz_2a {
  `,-1)),n[358]||(n[358]=t("b",{class:"t02"},"/* @mediaの外に出ない */",-1)),n[359]||(n[359]=s(`
  `,-1)),n[360]||(n[360]=t("b",{class:"t02"},'content: "2a";',-1)),n[361]||(n[361]=s(`
  }
}
.baz_1 `,-1)),n[362]||(n[362]=t("b",{class:"t03"},".baz_2b {",-1)),n[363]||(n[363]=s(`
  `,-1)),n[364]||(n[364]=t("b",{class:"t02"},"/* @mediaの外に出る */",-1)),n[365]||(n[365]=s(`
  `,-1)),n[366]||(n[366]=t("b",{class:"t02"},'content: "2b";',-1)),n[367]||(n[367]=s(`
`,-1)),n[368]||(n[368]=t("b",{class:"t03"},"}",-1)),n[369]||(n[369]=s(`
`,-1)),n[370]||(n[370]=t("b",{class:"t03"},".baz_2c {",-1)),n[371]||(n[371]=s(`
  `,-1)),n[372]||(n[372]=t("b",{class:"t02"},"/* @mediaの外に出て親(.baz_1)からも出る */",-1)),n[373]||(n[373]=s(`
  `,-1)),n[374]||(n[374]=t("b",{class:"t02"},'content: "2c";',-1)),n[375]||(n[375]=s(`
`,-1)),n[376]||(n[376]=t("b",{class:"t03"},"}",-1)),n[377]||(n[377]=s(`
@media all and (orientation: landscape) {
  `,-1)),n[378]||(n[378]=t("b",{class:"t03"},".baz_2d {",-1)),n[379]||(n[379]=s(`
  `,-1)),n[380]||(n[380]=t("b",{class:"t02"},"/* @mediaの外に同じ@mediaを作り、親(.baz_1)からは出る */",-1)),n[381]||(n[381]=s(`
  `,-1)),n[382]||(n[382]=t("b",{class:"t02"},'content: "2d";',-1)),n[383]||(n[383]=s(`
  `,-1)),n[384]||(n[384]=t("b",{class:"t03"},"}",-1)),n[385]||(n[385]=s(`
}
      `,-1))])]),_:1}),l(b,{title:"関数"},{default:o(()=>[t("pre",null,[n[387]||(n[387]=s(`// scss

`,-1)),l(a,null,{default:o(()=>[...n[386]||(n[386]=[s(`$path: (
  img_c: "/img/common/",
  img_s: "/img/sprite/",
  img_f: "/img/figure/"
);

div {
  background-image: url(#{`,-1),t("b",{class:"t01"},"map-get(",-1),s("$path",-1),t("b",{class:"t01"},",",-1),s("img_c",-1),t("b",{class:"t01"},")",-1),s(`}bg.png);
}
`,-1),t("b",{class:"t02"},"// map-get($map, $key) -> マップのキーから値を返す関数",-1),s(`
`,-1),t("b",{class:"t02"},"// 関数一覧 -> http://sass-lang.com/documentation/Sass/Script/Functions.html",-1),s(`
`,-1)])]),_:1}),n[388]||(n[388]=s(`

---

// css

div {
  background-image: url(`,-1)),n[389]||(n[389]=t("b",{class:"t01"},"/img/common/",-1)),n[390]||(n[390]=s(`bg.png);
}
      `,-1))])]),_:1}),l(b,{title:"@function"},{default:o(()=>[t("pre",null,[n[392]||(n[392]=s(`// scss

`,-1)),l(a,null,{default:o(()=>[...n[391]||(n[391]=[t("b",{class:"t01"},"@function",-1),s(" function_name",-1),t("b",{class:"t01"},"(",-1),s("$value",-1),t("b",{class:"t01"},") {",-1),s("  ",-1),t("b",{class:"t02"},"// 自作関数",-1),s(`
  `,-1),t("b",{class:"t01"},"@return",-1),s(" $value * 100",-1),t("b",{class:"t01"},";",-1),s(`
`,-1),t("b",{class:"t01"},"}",-1),s(`

div {
  content: function_name(1px);
}
`,-1)])]),_:1}),n[393]||(n[393]=s(`

---

// css

div {
  content: `,-1)),n[394]||(n[394]=t("b",{class:"t01"},"100px",-1)),n[395]||(n[395]=s(`;
}
      `,-1))])]),_:1}),l(b,{title:"@debug"},{default:o(()=>[t("pre",null,[n[397]||(n[397]=s(`// scss

`,-1)),l(a,null,{default:o(()=>[...n[396]||(n[396]=[s(`@function double($value) {
  `,-1),t("b",{class:"t01"},"@debug",-1),s(` $value;
  $value: $value * 2;
  `,-1),t("b",{class:"t01"},"@debug",-1),s(` $value;
  @return $value;
}

.foo {
  content: double(10px);
}
`,-1)])]),_:1}),n[398]||(n[398]=s(`

---

// css

.foo {
  content: 20px;
}

---

// console

sass/filename.scss`,-1)),n[399]||(n[399]=t("b",{class:"t01"},":2 DEBUG: 10px",-1)),n[400]||(n[400]=s(`
sass/filename.scss`,-1)),n[401]||(n[401]=t("b",{class:"t01"},":4 DEBUG: 20px",-1)),n[402]||(n[402]=s(`
      `,-1))])]),_:1}),l(b,{title:"@warn"},{default:o(()=>[t("pre",null,[n[404]||(n[404]=s(`// scss

`,-1)),l(a,null,{default:o(()=>[...n[403]||(n[403]=[s(`@function double($value) {
  @if type-of($value) == number { `,-1),t("b",{class:"t02"},"// type-of() -> 値のタイプを返す関数",-1),s(`
    @return $value * 2;
  } @else {
    `,-1),t("b",{class:"t01"},'@warn "',-1),t("b",{class:"t03"},"引数には数値を入れてください",-1),t("b",{class:"t01"},'"',-1),s(`;
    @return null;
  }
}

.foo {
  content: double(null);
}
`,-1)])]),_:1}),n[405]||(n[405]=s(`

---

// css

---

// console

`,-1)),n[406]||(n[406]=t("b",{class:"t01"},[s("WARNING: "),t("b",{class:"t03"},"引数には数値を入れてください")],-1)),n[407]||(n[407]=s(`
     `,-1)),n[408]||(n[408]=t("b",{class:"t01"},"on line 5 of",-1)),n[409]||(n[409]=s(` sass/filename.scss
      `,-1))])]),_:1}),l(b,{title:"///"},{default:o(()=>[t("pre",null,[n[411]||(n[411]=s(`
`,-1)),l(a,null,{default:o(()=>[...n[410]||(n[410]=[s(`

`,-1)])]),_:1}),n[412]||(n[412]=s(`

      `,-1))])]),_:1}),l(b,{title:"old(ruby-sass)"},{default:o(()=>[t("pre",null,[n[414]||(n[414]=s("",-1)),n[415]||(n[415]=t("b",{class:"t01"},"ruby -v",-1)),n[416]||(n[416]=s("  ",-1)),n[417]||(n[417]=t("b",{class:"t02"},"// Rubyバージョン確認",-1)),n[418]||(n[418]=s(`
`,-1)),n[419]||(n[419]=t("b",{class:"t01"},"gem -v",-1)),n[420]||(n[420]=s("  ",-1)),n[421]||(n[421]=t("b",{class:"t02"},"// RubyGemsバージョン確認",-1)),n[422]||(n[422]=s(`
`,-1)),n[423]||(n[423]=t("b",{class:"t01"},"sass -v",-1)),n[424]||(n[424]=s("  ",-1)),n[425]||(n[425]=t("b",{class:"t02"},"// sassバージョン確認",-1)),n[426]||(n[426]=s(`

`,-1)),n[427]||(n[427]=t("b",{class:"t01"},"sudo gem install sass",-1)),n[428]||(n[428]=s("  ",-1)),n[429]||(n[429]=t("b",{class:"t02"},"// sassインストール",-1)),n[430]||(n[430]=s(`
`,-1)),n[431]||(n[431]=t("b",{class:"t01"},"sudo gem install sass -v",-1)),n[432]||(n[432]=s(" [version]  ",-1)),n[433]||(n[433]=t("b",{class:"t02"},"// バージョン指定インストール",-1)),n[434]||(n[434]=s(`
`,-1)),n[435]||(n[435]=t("b",{class:"t02"},"// sudo gem install sass -v 3.2.17",-1)),n[436]||(n[436]=s(`
`,-1)),n[437]||(n[437]=t("b",{class:"t01"},"sudo gem install sass --pre",-1)),n[438]||(n[438]=s("  ",-1)),n[439]||(n[439]=t("b",{class:"t02"},"// アルファ版インストール",-1)),n[440]||(n[440]=s(`

`,-1)),n[441]||(n[441]=t("b",{class:"t01"},"sudo gem install oily_png",-1)),n[442]||(n[442]=s("  ",-1)),n[443]||(n[443]=t("b",{class:"t02"},"// スプライト画像生成の高速化",-1)),n[444]||(n[444]=s(`

`,-1)),n[445]||(n[445]=t("b",{class:"t01"},"sudo gem update --system",-1)),n[446]||(n[446]=s("  ",-1)),n[447]||(n[447]=t("b",{class:"t02"},"// RubyGemsアップデート",-1)),n[448]||(n[448]=s(`
`,-1)),n[449]||(n[449]=t("b",{class:"t01"},"sudo gem update sass",-1)),n[450]||(n[450]=s("  ",-1)),n[451]||(n[451]=t("b",{class:"t02"},"// sassアップデート",-1)),n[452]||(n[452]=s(`

`,-1)),n[453]||(n[453]=t("b",{class:"t01"},"sudo gem uninstall sass",-1)),n[454]||(n[454]=s("  ",-1)),n[455]||(n[455]=t("b",{class:"t02"},"// sassアンインストール",-1)),n[456]||(n[456]=s(`

`,-1)),n[457]||(n[457]=t("b",{class:"t01"},"sass -?",-1)),n[458]||(n[458]=s("  ",-1)),n[459]||(n[459]=t("b",{class:"t02"},"// ヘルプ表示",-1)),n[460]||(n[460]=s(`

`,-1)),n[461]||(n[461]=t("b",{class:"t01"},"http://sass-lang.com/documentation/file.SASS_REFERENCE.html",-1)),n[462]||(n[462]=s("  ",-1)),n[463]||(n[463]=t("b",{class:"t02"},"// Reference",-1)),n[464]||(n[464]=s(`
`,-1)),n[465]||(n[465]=t("b",{class:"t01"},"http://sass-lang.com/documentation/file.SASS_CHANGELOG.html",-1)),n[466]||(n[466]=s("  ",-1)),n[467]||(n[467]=t("b",{class:"t02"},"// Changelog",-1)),n[468]||(n[468]=s(`

---

// compile

scssが以下のとき
`,-1)),l(a,null,{default:o(()=>[...n[413]||(n[413]=[t("b",{class:"t02"},`/*
 * comment A
 */

/*!
 * comment B
 */

// comment C

body {
  margin: 0;
  padding: 0;
  div {
    display: block;
  }
}`,-1),s(`
`,-1)])]),_:1}),n[469]||(n[469]=s(`

`,-1)),n[470]||(n[470]=t("b",{class:"t01"},"sass",-1)),n[471]||(n[471]=s(" [scss path]",-1)),n[472]||(n[472]=t("b",{class:"t01"},":",-1)),n[473]||(n[473]=s(`[css path]
`,-1)),n[474]||(n[474]=t("b",{class:"t01"},"sass",-1)),n[475]||(n[475]=s(" [scss path]",-1)),n[476]||(n[476]=t("b",{class:"t01"},":",-1)),n[477]||(n[477]=s("[css path] ",-1)),n[478]||(n[478]=t("b",{class:"t01"},"-t nested",-1)),n[479]||(n[479]=s(`
`,-1)),n[480]||(n[480]=t("b",{class:"t02"},`/*
 * comment A
 */
/*!
 * comment B
 */
body {
  margin: 0;
  padding: 0; }
  body div {
  display: block; }`,-1)),n[481]||(n[481]=s(`

`,-1)),n[482]||(n[482]=t("b",{class:"t01"},"sass",-1)),n[483]||(n[483]=s(" [scss path]",-1)),n[484]||(n[484]=t("b",{class:"t01"},":",-1)),n[485]||(n[485]=s("[css path] ",-1)),n[486]||(n[486]=t("b",{class:"t01"},"-t expanded",-1)),n[487]||(n[487]=s(`
`,-1)),n[488]||(n[488]=t("b",{class:"t02"},`/*
 * comment A
 */
/*!
 * comment B
 */
body {
  margin: 0;
  padding: 0;
}
body div {
  display: block;
}`,-1)),n[489]||(n[489]=s(`

`,-1)),n[490]||(n[490]=t("b",{class:"t01"},"sass",-1)),n[491]||(n[491]=s(" [scss path]",-1)),n[492]||(n[492]=t("b",{class:"t01"},":",-1)),n[493]||(n[493]=s("[css path] ",-1)),n[494]||(n[494]=t("b",{class:"t01"},"-t compact",-1)),n[495]||(n[495]=s(`
`,-1)),n[496]||(n[496]=t("b",{class:"t02"},`/* comment A */
/*!
 * comment B
 */
body { margin: 0; padding: 0; }
body div { display: block; }`,-1)),n[497]||(n[497]=s(`

`,-1)),n[498]||(n[498]=t("b",{class:"t01"},"sass",-1)),n[499]||(n[499]=s(" [scss path]",-1)),n[500]||(n[500]=t("b",{class:"t01"},":",-1)),n[501]||(n[501]=s("[css path] ",-1)),n[502]||(n[502]=t("b",{class:"t01"},"-t compressed",-1)),n[503]||(n[503]=s(`
`,-1)),n[504]||(n[504]=t("b",{class:"t02"},`/*!
 * comment B
 */body{margin:0;padding:0}body div{display:block}`,-1)),n[505]||(n[505]=s(`



---

監視コンパイル

`,-1)),n[506]||(n[506]=t("b",{class:"t01"},"sass -w",-1)),n[507]||(n[507]=s(" [scss path]",-1)),n[508]||(n[508]=t("b",{class:"t01"},":",-1)),n[509]||(n[509]=s(`[css path]
`,-1)),n[510]||(n[510]=t("b",{class:"t01"},"sass -w",-1)),n[511]||(n[511]=s(" [scss dir]",-1)),n[512]||(n[512]=t("b",{class:"t01"},":",-1)),n[513]||(n[513]=s("[css dir]  ",-1)),n[514]||(n[514]=t("b",{class:"t02"},"// フォルダ指定",-1)),n[515]||(n[515]=s(`
`,-1)),n[516]||(n[516]=t("b",{class:"t01"},"sass -w --line-comments",-1)),n[517]||(n[517]=s(" [scss dir]",-1)),n[518]||(n[518]=t("b",{class:"t01"},":",-1)),n[519]||(n[519]=s("[css dir]  ",-1)),n[520]||(n[520]=t("b",{class:"t02"},"// line comment付き",-1)),n[521]||(n[521]=s(`
`,-1)),n[522]||(n[522]=t("b",{class:"t01"},"sass -w --no-cache",-1)),n[523]||(n[523]=s(" [scss dir]",-1)),n[524]||(n[524]=t("b",{class:"t01"},":",-1)),n[525]||(n[525]=s("[css dir]  ",-1)),n[526]||(n[526]=t("b",{class:"t02"},"// キャッシュフォルダを作らない",-1)),n[527]||(n[527]=s(`
`,-1)),n[528]||(n[528]=t("b",{class:"t01"},"sass -w",-1)),n[529]||(n[529]=s(" [scss dir]",-1)),n[530]||(n[530]=t("b",{class:"t01"},":",-1)),n[531]||(n[531]=s("[css dir] ",-1)),n[532]||(n[532]=t("b",{class:"t01"},"--load-path",-1)),n[533]||(n[533]=s(" [other project dir]  ",-1)),n[534]||(n[534]=t("b",{class:"t02"},"// 別プロジェクトからライブラリ等をimport",-1)),n[535]||(n[535]=s(`

---

cssからscssにコンパイル

`,-1)),n[536]||(n[536]=t("b",{class:"t01"},"sass-convert --to scss",-1)),n[537]||(n[537]=s(` [css path] [scss path]
`,-1)),n[538]||(n[538]=t("b",{class:"t01"},"sass-convert --recursive --from css --to scss",-1)),n[539]||(n[539]=s(" [dir] [dir]",-1)),n[540]||(n[540]=t("b",{class:"t02"},"// フォルダごと",-1)),n[541]||(n[541]=s(`
      `,-1))])]),_:1}),l(b,{title:"old(gulp-sass)"},{default:o(()=>[t("pre",null,[n[543]||(n[543]=s(`// npm command

`,-1)),n[544]||(n[544]=t("b",{class:"t01"},"npm install gulp-sass --save-dev",-1)),n[545]||(n[545]=s()),n[546]||(n[546]=t("b",{class:"t02"},"// install",-1)),n[547]||(n[547]=s(`
`,-1)),n[548]||(n[548]=t("b",{class:"t01"},"npm uninstall gulp-sass --save-dev",-1)),n[549]||(n[549]=s()),n[550]||(n[550]=t("b",{class:"t02"},"// uninstall",-1)),n[551]||(n[551]=s(`
`,-1)),n[552]||(n[552]=t("b",{class:"t01"},"npm install gulp-sass@",-1)),n[553]||(n[553]=s("x.x.x",-1)),n[554]||(n[554]=t("b",{class:"t01"}," --save-dev",-1)),n[555]||(n[555]=s()),n[556]||(n[556]=t("b",{class:"t02"},"// specified version install",-1)),n[557]||(n[557]=s(`
`,-1)),n[558]||(n[558]=t("b",{class:"t01"},"npm info gulp-sass",-1)),n[559]||(n[559]=s()),n[560]||(n[560]=t("b",{class:"t02"},"// check version",-1)),n[561]||(n[561]=s(`


// gulpfile.js

`,-1)),l(a,null,{default:o(()=>[...n[542]||(n[542]=[t("b",{class:"t01"},`var sass = require('gulp-sass');

gulp.task('sass', function(){
  gulp.src('`,-1),s("scssのパス",-1),t("b",{class:"t01"},`')
    .pipe(sass())
    .pipe(gulp.dest('`,-1),s("出力するcssのパス",-1),t("b",{class:"t01"},`'));
});

gulp.task('default', ['sass']);`,-1),s(`
`,-1)])]),_:1}),n[562]||(n[562]=s(`
      `,-1))])]),_:1}),l(b,{title:"old (node-sass)"},{default:o(()=>[...n[563]||(n[563]=[t("pre",null,[t("b",{class:"t01"},"npm install node-sass --save-dev"),s(),t("b",{class:"t02"},"// install"),s(`

`),t("b",{class:"t01"},"node-sass -o {"),s("css folder"),t("b",{class:"t01"},"} {"),s("sass folder"),t("b",{class:"t01"},"}"),s(),t("b",{class:"t02"},"// compile"),s(`
      `)],-1)])]),_:1})]),_:1})],64))}}),At=Object.freeze(Object.defineProperty({__proto__:null,default:tt,metadata:an},Symbol.toStringTag,{value:"Module"})),en={updateDate:"2022/07/29"},st=u({__name:"scroll-behavior",setup(e){return(i,n)=>(r(),d(p,null,[l(m,{title:"scroll-behavior","sample-url":"/sample/html/scroll-behavior.html","update-date":en.updateDate},null,8,["update-date"]),l(f,null,{default:o(()=>[...n[0]||(n[0]=[t("pre",null,[t("code",null,[s(`<!DOCTYPE html>
<html>
  <head>
    <title>scroll-behavior</title>
    <style>
      html,
      body {
        margin: 0;
        padding: 0;
        height: 100%;
      }
      html {
        `),t("b",{class:"t01"},"scroll-behavior: smooth;"),s(`
      }
      .header {
        width: 100%;
        `),t("b",{class:"t01"},"height:"),s(" 60px"),t("b",{class:"t01"},";"),s(`
        position: fixed;
      }
      .header ul {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 0;
      }
      .header li {
        list-style: none;
      }
      .header a {
        color: #fff;
      }
      .inner {
        position: relative;
      }
      .overlay {
        width: 100%;
        height: 60px;
        position: absolute;
        opacity: 0.6;
        background: #000;
      }
      .menu {
        width: 100%;
        display: grid;
        place-content: center;
        position: absolute;
      }
      .content {
        `),t("b",{class:"t01"},"padding-top:"),s(" 60px"),t("b",{class:"t01"},";"),s(`
      }
      section {
        height: calc(100vh - 60px);
        border: #000 1px solid;
      }
      section a {
        `),t("b",{class:"t01"},"scroll-margin-top:"),s(" 60px"),t("b",{class:"t01"},";"),s(`
      }
      h1 {
        margin: 0;
        padding: 30px;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <div class="inner">
        <div class="overlay"></div>
        <div class="menu">
          <ul>
            <li><a href="#a">scroll a</a></li>
            <li><a href="#b">scroll b</a></li>
            <li><a href="#c">scroll c</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content">
      <section>
        <a name="a"></a>
        <h1>a</h1>
      </section>
      <section>
        <a name="b"></a>
        <h1>b</h1>
      </section>
      <section>
        <a name="c"></a>
        <h1>c</h1>
      </section>
    </div>
  </body>
</html>
`)])],-1)])]),_:1})],64))}}),Dt=Object.freeze(Object.defineProperty({__proto__:null,default:st,metadata:en},Symbol.toStringTag,{value:"Module"})),dn={updateDate:"2014/10/30"},lt=u({__name:"selector-specificity",setup(e){return(i,n)=>(r(),d(p,null,[l(m,{title:"selector-specificity","update-date":dn.updateDate},null,8,["update-date"]),l(f,null,{default:o(()=>[...n[0]||(n[0]=[t("pre",null,[t("code",null,[t("b",{class:"t02"},"(high)"),s(`
!important
インライン
idセレクタ
classセレクタ,属性セレクタ,擬似クラス
要素セレクタ,擬似要素
ユニバーサルセレクタ
`),t("b",{class:"t02"},"(low)"),s(`
`)])],-1),t("p",null,[t("a",{href:"http://specificity.keegan.st/",target:"_blank",class:"text-blue-500 underline"},"Specificity Calculator")],-1)])]),_:1})],64))}}),Ot=Object.freeze(Object.defineProperty({__proto__:null,default:lt,metadata:dn},Symbol.toStringTag,{value:"Module"})),rn={updateDate:"2015/10/03"},ot=u({__name:"selectors",setup(e){return(i,n)=>(r(),d(p,null,[l(m,{title:"selectors","sample-url":"/sample/html/selectors.html","update-date":rn.updateDate},null,8,["update-date"]),l(f,null,{default:o(()=>[...n[0]||(n[0]=[t("pre",null,[t("code",null,[s(),t("b",{class:"t02"},`// その他

:target
:root
:required
:optional
:valid
:invalid
:in-range

:out-of-range
::first-line
::first-letter
::after
::before
::selection

※コロン2つなのは擬似クラスとの区別のため推奨される`),s(`
`)])],-1)])]),_:1})],64))}}),Bt=Object.freeze(Object.defineProperty({__proto__:null,default:ot,metadata:rn},Symbol.toStringTag,{value:"Module"})),bn={updateDate:"2016/07/27"},at=u({__name:"thin-border",setup(e){return(i,n)=>(r(),d(p,null,[l(m,{title:"thin-border","sample-url":"/sample/html/thin-border.html","update-date":bn.updateDate},null,8,["update-date"]),l(f,null,{default:o(()=>[...n[0]||(n[0]=[t("pre",null,[t("code",null,[s(`<!doctype html>
<title>title</title>
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">

<style>
div {
  margin: 20px 10px;
  padding-top: 6px;
}
.normal {
  height: 100px;
  border-top: `),t("b",{class:"t03"},"#333 1px solid"),s(`;
}
`),t("b",{class:"t04"},".thin"),s(` {
  height: 100px;
  `),t("b",{class:"t01"},"position: relative;"),s(`
}
`),t("b",{class:"t04"},".thin"),t("b",{class:"t01"},[s(`::after {
  content: "";
  width: 100%;
  height: 1px;
  border-top: `),t("b",{class:"t03"},"#333 1px solid"),s(`;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}`)]),s(`
</style>

<div class="normal">normal 1px</div>
<div class="`),t("b",{class:"t04"},"thin"),s('">thin scaleY(0.5)</div>')])],-1)])]),_:1})],64))}}),Tt=Object.freeze(Object.defineProperty({__proto__:null,default:at,metadata:bn},Symbol.toStringTag,{value:"Module"})),un={updateDate:"2024/11/15"},et=u({__name:"tooltip",setup(e){return(i,n)=>(r(),d(p,null,[l(m,{title:"tooltip","sample-url":"/sample/html/tooltip.html","update-date":un.updateDate},null,8,["update-date"]),l(f,null,{default:o(()=>[...n[0]||(n[0]=[t("pre",null,`<style>
  h1 {
    margin: 0;
    padding: 0;
    font-size: 0.8125rem;
    line-height: 1;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 1.125rem;
    margin-top: 1.25rem;
  }
  .title__inner {
    display: flex;
    align-items: center;
  }
  .title__label {
    font-size: 0.875rem;
    font-weight: 700;
  }
  .help {
    display: inline-flex;
    position: relative;
    margin-left: 0.1875rem;
  }
  .help__budge {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.1875rem;
    height: 1.1875rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: rgb(107, 114, 128);
    background: rgb(249, 250, 251);
    border: rgb(209, 213, 219) 0.0625rem solid;
    border-radius: 9999px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
    transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease,
      box-shadow 0.2s ease;
  }
  .help:hover .help__budge {
    color: rgb(55, 65, 81);
    border-color: rgb(156, 163, 175);
    background: rgb(255, 255, 255);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
  }
  .help__tooltip {
    position: absolute;
    z-index: 10;
    top: 0.625rem;
    left: 1.6875rem;
    transform: translateY(-50%) translateX(4px);
    width: max-content;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }
  .help:hover .help__tooltip {
    opacity: 1;
    visibility: visible;
    transform: translateY(-50%) translateX(0);
  }
  .help__tooltipInner {
    display: flex;
    align-items: center;
  }
  .help__tooltipTriangle {
    display: none;
  }
  .help__tooltipText {
    max-width: 25rem;
    color: rgb(255, 255, 255);
    font-size: 0.6875rem;
    font-weight: 400;
    line-height: calc(1.6);
    padding: 0.5rem 0.6875rem;
    border-radius: 0.3125rem;
    background: rgba(37, 99, 235, 0.9);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
  }
</style>

<div class="title">
  <div class="title__inner">
    <h1><label class="title__label">aaaaa</label></h1>

    <div class="help">
      <span class="help__budge">?</span>
      <div class="help__tooltip">
        <div class="help__tooltipInner">
          <p class="help__tooltipText">あああああ</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  <input id="aaaaaa" name="aaaaaa" placeholder="placeholder" value="" />
</div>

<div class="title">
  <div class="title__inner">
    <h1><label class="title__label">aaaaaaaaaa</label></h1>

    <div class="help">
      <span class="help__budge">?</span>
      <div class="help__tooltip">
        <div class="help__tooltipInner">
          <p class="help__tooltipText">
            あああああああああああああああああああああああああああああああああああああああああああああああああああ
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div>
  <input
    id="aaaaaaaaaaa"
    name="aaaaaaaaaaa"
    placeholder="placeholder"
    value=""
  />
</div>`,-1)])]),_:1})],64))}}),Ct=Object.freeze(Object.defineProperty({__proto__:null,default:et,metadata:un},Symbol.toStringTag,{value:"Module"}));export{f as P,m as _,b as a,a as b,C as c,dt as d,rt as e,bt as f,ut as g,pt as h,mt as i,ft as j,gt as k,xt as l,vt as m,yt as n,$t as o,kt as p,zt as q,wt as r,St as s,jt as t,At as u,Dt as v,Ot as w,Bt as x,Tt as y,Ct as z};
