<script lang="ts">
export const metadata = {
  updateDate: '2020/12/19',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import CopyCode from '@/components/CopyCode.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader
    title="html5-tag"
    sample-url="/sample/html/html5-tag.html"
    :update-date="metadata.updateDate"
  />
  <PreCodes>
    <pre><CopyCode>
&lt;div&gt;
  &lt;h1&gt;Heading 1&lt;/h1&gt;
  &lt;h2&gt;Heading 2&lt;/h2&gt;
  &lt;h3&gt;Heading 3&lt;/h3&gt;
  &lt;h4&gt;Heading 4&lt;/h4&gt;
  &lt;h5&gt;Heading 5&lt;/h5&gt;
  &lt;h6&gt;Heading 6&lt;/h6&gt;

  &lt;section&gt;
    &lt;h2&gt;Heading 2 (in section)&lt;/h2&gt;
    &lt;h3&gt;Heading 3 (in section)&lt;/h3&gt;
    &lt;h4&gt;Heading 4 (in section)&lt;/h4&gt;
    &lt;h5&gt;Heading 5 (in section)&lt;/h5&gt;
    &lt;h6&gt;Heading 6 (in section)&lt;/h6&gt;
  &lt;/section&gt;

  &lt;article&gt;
    &lt;h2&gt;Heading 2 (in article)&lt;/h2&gt;
    &lt;h3&gt;Heading 3 (in article)&lt;/h3&gt;
    &lt;h4&gt;Heading 4 (in article)&lt;/h4&gt;
    &lt;h5&gt;Heading 5 (in article)&lt;/h5&gt;
    &lt;h6&gt;Heading 6 (in article)&lt;/h6&gt;
  &lt;/article&gt;

  &lt;header&gt;
    &lt;h1&gt;Heading 1 (in header)&lt;/h1&gt;
    &lt;nav&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="#"&gt;navigation item #1&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;navigation item #2&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;navigation item #3&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
  &lt;/header&gt;

  &lt;h1&gt;Text-level semantics&lt;/h1&gt;

  &lt;p hidden&gt;This should be hidden in all browsers, apart from IE6&lt;/p&gt;

  &lt;p&gt;
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et m. Lorem
    ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
    eget dolor. Aenean massa. Cum sociis natoque penatibus et m. Lorem ipsum
    dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
    dolor. Aenean massa. Cum sociis natoque penatibus et m.
  &lt;/p&gt;
  &lt;p&gt;
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et m. Lorem
    ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
    eget dolor. Aenean massa. Cum sociis natoque penatibus et m. Lorem ipsum
    dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
    dolor. Aenean massa. Cum sociis natoque penatibus et m.
  &lt;/p&gt;

  &lt;address&gt;Address: somewhere, world&lt;/address&gt;

  &lt;p&gt;
    The &lt;a href="#"&gt;a element&lt;/a&gt; example&lt;br /&gt;
    The &lt;abbr&gt;abbr element&lt;/abbr&gt; and
    &lt;abbr title="Title text"&gt;abbr element with title&lt;/abbr&gt; examples&lt;br /&gt;
    The &lt;b&gt;b element&lt;/b&gt; example&lt;br /&gt;
    The &lt;cite&gt;cite element&lt;/cite&gt; example&lt;br /&gt;
    The &lt;code&gt;code element&lt;/code&gt; example&lt;br /&gt;
    The &lt;del&gt;del element&lt;/del&gt; example&lt;br /&gt;
    The &lt;dfn&gt;dfn element&lt;/dfn&gt; and
    &lt;dfn title="Title text"&gt;dfn element with title&lt;/dfn&gt; examples&lt;br /&gt;
    The &lt;em&gt;em element&lt;/em&gt; example&lt;br /&gt;
    The &lt;i&gt;i element&lt;/i&gt; example&lt;br /&gt;
    The img element
    &lt;img
      src="http://lorempixel.com/16/16"
      alt=""
      loading="lazy"
      decoding="async"
    /&gt;
    example&lt;br /&gt;
    The &lt;ins&gt;ins element&lt;/ins&gt; example&lt;br /&gt;
    The &lt;kbd&gt;kbd element&lt;/kbd&gt; example&lt;br /&gt;
    The &lt;mark&gt;mark element&lt;/mark&gt; example&lt;br /&gt;
    The &lt;q&gt;q element &lt;q&gt;inside&lt;/q&gt; a q element&lt;/q&gt; example&lt;br /&gt;
    The &lt;s&gt;s element&lt;/s&gt; example&lt;br /&gt;
    The &lt;samp&gt;samp element&lt;/samp&gt; example&lt;br /&gt;
    The &lt;small&gt;small element&lt;/small&gt; example&lt;br /&gt;
    The &lt;span&gt;span element&lt;/span&gt; example&lt;br /&gt;
    The &lt;strong&gt;strong element&lt;/strong&gt; example&lt;br /&gt;
    The &lt;sub&gt;sub element&lt;/sub&gt; example&lt;br /&gt;
    The &lt;sup&gt;sup element&lt;/sup&gt; example&lt;br /&gt;
    The &lt;u&gt;u element&lt;/u&gt; example&lt;br /&gt;
    The &lt;var&gt;var element&lt;/var&gt; example
  &lt;/p&gt;

&lt;h1&gt;Embedded content&lt;/h1&gt;

  &lt;h3&gt;audio&lt;/h3&gt;

  &lt;audio controls&gt;&lt;/audio&gt;
  &lt;audio&gt;&lt;/audio&gt;

  &lt;h3&gt;img&lt;/h3&gt;

  &lt;img
    src="http://lorempixel.com/100/100"
    alt=""
    loading="lazy"
    decoding="async"
  /&gt;
  &lt;a href="#"&gt;
    &lt;img
      src="http://lorempixel.com/100/100"
      alt=""
      loading="lazy"
      decoding="async"
    /&gt;
  &lt;/a&gt;
  &lt;br /&gt;
  &lt;img
    src="http://lorempixel.com/100/100"
    alt=""
    loading="lazy"
    decoding="async"
  /&gt;

  &lt;h3&gt;svg element&lt;/h3&gt;

  &lt;svg width="100px" height="100px"&gt;
    &lt;circle cx="100" cy="100" r="100" fill="#ff0000" /&gt;
  &lt;/svg&gt;

  &lt;h3&gt;video&lt;/h3&gt;

  &lt;video controls preload="metadata"&gt;&lt;/video&gt;
  &lt;video preload="metadata"&gt;&lt;/video&gt;

  &lt;h1&gt;Interactive content&lt;/h1&gt;

  &lt;h3&gt;details / summary&lt;/h3&gt;
  &lt;details&gt;
    &lt;summary&gt;More info&lt;/summary&gt;
    &lt;p&gt;Additional information&lt;/p&gt;
    &lt;ul&gt;
      &lt;li&gt;Point 1&lt;/li&gt;
      &lt;li&gt;Point 2&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/details&gt;

  &lt;h3&gt;object, embed element&lt;/h3&gt;
  &lt;object
    id="Movie1"
    width="100"
    height="30"
    type="application/x-shockwave-flash"
  &gt;
    &lt;param name="movie" value="http://3300.me/top/swf/elementSample.swf" /&gt;
    &lt;param name="quality" value="high" /&gt;
    &lt;param name="wmode" value="transparent" /&gt;
    &lt;param name="bgcolor" value="#FFFFFF" /&gt;
    &lt;embed
      src="http://3300.me/top/swf/elementSample.swf"
      quality="high"
      wmode="transparent"
      bgcolor="#FFFFFF"
      width="100"
      height="30"
      type="application/x-shockwave-flash"
      pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"
    /&gt;
  &lt;/object&gt;

  &lt;h1&gt;Grouping content&lt;/h1&gt;

  &lt;p&gt;
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et m.
  &lt;/p&gt;

  &lt;h3&gt;pre, code element&lt;/h3&gt;

  &lt;pre&gt;
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et me.&lt;/pre&gt;

  &lt;pre&gt;&lt;code&gt;&amp;lt;html&amp;gt;
  &amp;lt;head&amp;gt;
  &amp;lt;/head&amp;gt;
  &amp;lt;body&amp;gt;
    &amp;lt;div class="main"&amp;gt; &amp;lt;div&amp;gt;
  &amp;lt;/body&amp;gt;
&amp;lt;/html&amp;gt;&lt;/code&gt;&lt;/pre&gt;

  &lt;h3&gt;blockquote element&lt;/h3&gt;

  &lt;blockquote&gt;
    &lt;p&gt;
      Some sort of famous witty quote marked up with a &amp;lt;blockquote&amp;gt; and a
      child &amp;lt;p&amp;gt; element.
    &lt;/p&gt;
  &lt;/blockquote&gt;

  &lt;blockquote&gt;
    Even better philosophical quote marked up with just a &amp;lt;blockquote&amp;gt;
    element.
  &lt;/blockquote&gt;

  &lt;h3&gt;ol element&lt;/h3&gt;

  &lt;ol&gt;
    &lt;li&gt;list item 1&lt;/li&gt;
    &lt;li&gt;
      list item 1
      &lt;ol&gt;
        &lt;li&gt;list item 2&lt;/li&gt;
        &lt;li&gt;
          list item 2
          &lt;ol&gt;
            &lt;li&gt;list item 3&lt;/li&gt;
            &lt;li&gt;list item 3&lt;/li&gt;
          &lt;/ol&gt;
        &lt;/li&gt;
        &lt;li&gt;list item 2&lt;/li&gt;
        &lt;li&gt;list item 2&lt;/li&gt;
      &lt;/ol&gt;
    &lt;/li&gt;
    &lt;li&gt;list item 1&lt;/li&gt;
    &lt;li&gt;list item 1&lt;/li&gt;
  &lt;/ol&gt;

  &lt;h3&gt;ul element&lt;/h3&gt;

  &lt;ul&gt;
    &lt;li&gt;list item 1&lt;/li&gt;
    &lt;li&gt;
      list item 1
      &lt;ul&gt;
        &lt;li&gt;list item 2&lt;/li&gt;
        &lt;li&gt;
          list item 2
          &lt;ul&gt;
            &lt;li&gt;list item 3&lt;/li&gt;
            &lt;li&gt;list item 3&lt;/li&gt;
          &lt;/ul&gt;
        &lt;/li&gt;
        &lt;li&gt;list item 2&lt;/li&gt;
        &lt;li&gt;list item 2&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;list item 1&lt;/li&gt;
    &lt;li&gt;list item 1&lt;/li&gt;
  &lt;/ul&gt;

  &lt;h3&gt;dl element&lt;/h3&gt;

  &lt;dl&gt;
    &lt;dt&gt;Description name&lt;/dt&gt;
    &lt;dd&gt;Description value&lt;/dd&gt;
    &lt;dt&gt;Description name&lt;/dt&gt;
    &lt;dd&gt;Description value&lt;/dd&gt;
    &lt;dd&gt;Description value&lt;/dd&gt;
    &lt;dt&gt;Description name&lt;/dt&gt;
    &lt;dt&gt;Description name&lt;/dt&gt;
    &lt;dd&gt;Description value&lt;/dd&gt;
  &lt;/dl&gt;

  &lt;h3&gt;figure element&lt;/h3&gt;

  &lt;figure&gt;
    &lt;img
      src="http://lorempixel.com/300/180"
      alt=""
      loading="lazy"
      decoding="async"
    /&gt;
    &lt;figcaption&gt;Figcaption content&lt;/figcaption&gt;
  &lt;/figure&gt;

  &lt;h1&gt;table element&lt;/h1&gt;

  &lt;table&gt;
    &lt;caption&gt;
      Jimi Hendrix - albums
    &lt;/caption&gt;
    &lt;colgroup&gt;
      &lt;col span="1" /&gt;
      &lt;col span="1" /&gt;
      &lt;col span="1" /&gt;
    &lt;/colgroup&gt;
    &lt;thead&gt;
      &lt;tr&gt;
        &lt;th&gt;Album&lt;/th&gt;
        &lt;th&gt;Year&lt;/th&gt;
        &lt;th&gt;Price&lt;/th&gt;
      &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
      &lt;tr&gt;
        &lt;td&gt;Are You Experienced&lt;/td&gt;
        &lt;td&gt;1967&lt;/td&gt;
        &lt;td&gt;$10.00&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;Axis: Bold as Love&lt;/td&gt;
        &lt;td&gt;1967&lt;/td&gt;
        &lt;td&gt;$12.00&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;Electric Ladyland&lt;/td&gt;
        &lt;td&gt;1968&lt;/td&gt;
        &lt;td&gt;$10.00&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td&gt;Band of Gypsys&lt;/td&gt;
        &lt;td&gt;1970&lt;/td&gt;
        &lt;td&gt;$12.00&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/tbody&gt;
    &lt;tfoot&gt;
      &lt;tr&gt;
        &lt;th&gt;Album&lt;/th&gt;
        &lt;th&gt;Year&lt;/th&gt;
        &lt;th&gt;Price&lt;/th&gt;
      &lt;/tr&gt;
    &lt;/tfoot&gt;
  &lt;/table&gt;

  &lt;h1&gt;Forms&lt;/h1&gt;

  &lt;form&gt;
    &lt;fieldset&gt;
      &lt;legend&gt;
        Inputs as descendents of labels (form legend). This doubles up as a long
        legend that can test word wrapping.
      &lt;/legend&gt;
      &lt;p&gt;
        &lt;label&gt;
          Text input
          &lt;input
            type="text"
            value="default value that goes on and on without stopping or punctuation"
          /&gt;
        &lt;/label&gt;
      &lt;/p&gt;
      &lt;p&gt;
        &lt;label&gt;Email input &lt;input type="email" /&gt;&lt;/label&gt;
      &lt;/p&gt;
      &lt;p&gt;
        &lt;label&gt;Search input &lt;input type="search" /&gt;&lt;/label&gt;
      &lt;/p&gt;
      &lt;p&gt;
        &lt;label&gt;Tel input &lt;input type="tel" /&gt;&lt;/label&gt;
      &lt;/p&gt;
      &lt;p&gt;
        &lt;label&gt;URL input &lt;input type="url" placeholder="http://" /&gt;&lt;/label&gt;
      &lt;/p&gt;
      &lt;p&gt;
        &lt;label&gt;PW input &lt;input type="password" value="password" /&gt;&lt;/label&gt;
      &lt;/p&gt;
      &lt;p&gt;
        &lt;label&gt;Date input &lt;input type="date" value="2020-12-19" /&gt;&lt;/label&gt;
      &lt;/p&gt;
      &lt;b class="t02"&gt;&lt;!-- &lt;p&gt;&lt;label&gt;File input &lt;input type="file"&gt;&lt;/label&gt;&lt;/p&gt; //「ファイルが選択されていません」がiPhoneではみ出るので消しておく--&gt;&lt;/b&gt;

      &lt;p&gt;
        &lt;label&gt;Radio input &lt;input type="radio" name="rad" /&gt;&lt;/label&gt;
      &lt;/p&gt;
      &lt;p&gt;
        &lt;label&gt;Checkbox input &lt;input type="checkbox" /&gt;&lt;/label&gt;
      &lt;/p&gt;
      &lt;p&gt;
        &lt;label&gt;&lt;input type="radio" name="rad" /&gt; Radio input&lt;/label&gt;
      &lt;/p&gt;
      &lt;p&gt;
        &lt;label&gt;&lt;input type="checkbox" /&gt; Checkbox input&lt;/label&gt;
      &lt;/p&gt;

      &lt;p&gt;
        &lt;label&gt;
          Select field
          &lt;select&gt;
            &lt;optgroup label="optgroup01"&gt;
              &lt;option&gt;
                Option01Option01Option01Option01Option01Option01Option01Option01Option01Option01Option01
              &lt;/option&gt;
              &lt;option&gt;Option02&lt;/option&gt;
            &lt;/optgroup&gt;
          &lt;/select&gt;
        &lt;/label&gt;
      &lt;/p&gt;
      &lt;p&gt;
        &lt;label&gt;
          Textarea &lt;textarea cols="30" rows="5"&gt;Textarea text&lt;/textarea&gt;
        &lt;/label&gt;
      &lt;/p&gt;
    &lt;/fieldset&gt;
  &lt;/form&gt;

&lt;fieldset&gt;
      &lt;legend&gt;Inputs as siblings of labels&lt;/legend&gt;
      &lt;p&gt;
        &lt;label for="in"&gt;Number input&lt;/label&gt;
        &lt;input type="number" id="in" min="0" max="10" value="5" /&gt;
      &lt;/p&gt;
      &lt;p&gt;
        &lt;label for="ir"&gt;Range input&lt;/label&gt;
        &lt;input type="range" id="ir" value="10" /&gt;
      &lt;/p&gt;

      &lt;p&gt;
        &lt;label for="irb"&gt;Radio input&lt;/label&gt;
        &lt;input type="radio" id="irb" name="rad" /&gt;
      &lt;/p&gt;
      &lt;p&gt;
        &lt;label for="icb"&gt;Checkbox input&lt;/label&gt;
        &lt;input type="checkbox" id="icb" /&gt;
      &lt;/p&gt;
      &lt;p&gt;
        &lt;input type="radio" id="irb2" name="rad" /&gt;
        &lt;label for="irb2"&gt;Radio input&lt;/label&gt;
      &lt;/p&gt;
      &lt;p&gt;
        &lt;input type="checkbox" id="icb2" /&gt;
        &lt;label for="icb2"&gt;Checkbox input&lt;/label&gt;
      &lt;/p&gt;

      &lt;p&gt;
        &lt;label for="s"&gt;Select field&lt;/label&gt;
        &lt;select id="s"&gt;
          &lt;option&gt;Option 01&lt;/option&gt;
          &lt;option&gt;Option 02&lt;/option&gt;
        &lt;/select&gt;
      &lt;/p&gt;
      &lt;p&gt;
        &lt;label for="t"&gt;Textarea&lt;/label&gt;
        &lt;textarea id="t" cols="30" rows="5"&gt;Textarea text&lt;/textarea&gt;
      &lt;/p&gt;
    &lt;/fieldset&gt;

    &lt;fieldset&gt;
      &lt;legend&gt;Clickable inputs and buttons&lt;/legend&gt;
      &lt;p&gt;
        &lt;input
          type="image"
          src="http://lorempixel.com/90/24"
          alt="Image (input)"
        /&gt;
      &lt;/p&gt;
      &lt;p&gt;&lt;input type="reset" value="Reset (input)" /&gt;&lt;/p&gt;
      &lt;p&gt;&lt;input type="button" value="Button (input)" /&gt;&lt;/p&gt;
      &lt;p&gt;&lt;input type="submit" value="Submit (input)" /&gt;&lt;/p&gt;
      &lt;p&gt;&lt;input type="submit" value="Disabled (input)" disabled /&gt;&lt;/p&gt;

      &lt;p&gt;&lt;button type="reset"&gt;Reset (button)&lt;/button&gt;&lt;/p&gt;
      &lt;p&gt;&lt;button type="button"&gt;Button (button)&lt;/button&gt;&lt;/p&gt;
      &lt;p&gt;&lt;button type="submit"&gt;Submit (button)&lt;/button&gt;&lt;/p&gt;
      &lt;p&gt;&lt;button type="submit" disabled&gt;Disabled (button)&lt;/button&gt;&lt;/p&gt;
    &lt;/fieldset&gt;

    &lt;fieldset id="boxsize"&gt;
      &lt;legend&gt;box-sizing tests&lt;/legend&gt;
      &lt;div&gt;&lt;input type="text" value="text" /&gt;&lt;/div&gt;
      &lt;div&gt;&lt;input type="email" value="email" /&gt;&lt;/div&gt;
      &lt;div&gt;&lt;input type="search" value="search" /&gt;&lt;/div&gt;
      &lt;div&gt;&lt;input type="url" value="http://example.com" /&gt;&lt;/div&gt;
      &lt;div&gt;&lt;input type="password" value="password" /&gt;&lt;/div&gt;

      &lt;div&gt;&lt;input type="number" value="5" /&gt;&lt;/div&gt;
      &lt;div&gt;&lt;input type="range" value="10" /&gt;&lt;/div&gt;

      &lt;div&gt;&lt;input type="radio" /&gt;&lt;/div&gt;
      &lt;div&gt;&lt;input type="checkbox" /&gt;&lt;/div&gt;

      &lt;div&gt;
        &lt;select&gt;
          &lt;option&gt;Option 01&lt;/option&gt;
          &lt;option&gt;Option 02&lt;/option&gt;
        &lt;/select&gt;
      &lt;/div&gt;
      &lt;div&gt;&lt;textarea cols="30" rows="5"&gt;Textarea text&lt;/textarea&gt;&lt;/div&gt;

      &lt;div&gt;
        &lt;input
          type="image"
          src="http://lorempixel.com/90/24"
          alt="Image (input)"
        /&gt;
      &lt;/div&gt;
      &lt;div&gt;&lt;input type="reset" value="Reset (input)" /&gt;&lt;/div&gt;
      &lt;div&gt;&lt;input type="button" value="Button (input)" /&gt;&lt;/div&gt;
      &lt;div&gt;&lt;input type="submit" value="Submit (input)" /&gt;&lt;/div&gt;

      &lt;div&gt;&lt;button type="reset"&gt;Reset (button)&lt;/button&gt;&lt;/div&gt;
      &lt;div&gt;&lt;button type="button"&gt;Button (button)&lt;/button&gt;&lt;/div&gt;
      &lt;div&gt;&lt;button type="submit"&gt;Submit (button)&lt;/button&gt;&lt;/div&gt;
    &lt;/fieldset&gt;
  &lt;/form&gt;

  &lt;h3&gt;etc content&lt;/h3&gt;

  &lt;aside&gt;
    &lt;h3&gt;aside element&lt;/h3&gt;
    &lt;p&gt;aside contents&lt;/p&gt;
  &lt;/aside&gt;

  &lt;section&gt;
    &lt;h3&gt;map, area(rect,ciecle,poly) element&lt;/h3&gt;
    &lt;img
      src="http://lorempixel.com/384/128"
      usemap="#sample"
      alt="サンプル"
      width="300"
      height="128"
      loading="lazy"
      decoding="async"
    /&gt;
    &lt;map name="sample"&gt;
      &lt;area href="" shape="rect" alt="四角形" coords="15,19,126,104" /&gt;
      &lt;area href="" shape="circle" alt="円形" coords="197,69,54" /&gt;
      &lt;area href="" shape="poly" alt="多角形" coords="306,12,261,109,290,92" /&gt;
    &lt;/map&gt;
  &lt;/section&gt;

  &lt;h3&gt;canvas element&lt;/h3&gt;
  &lt;p&gt;
    &lt;canvas id="canvas" width="300" height="300"&gt;
      このWebブラウザはcanvasの描画に対応していません。
    &lt;/canvas&gt;
  &lt;/p&gt;
  &lt;script type="text/javascript"&gt;
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
    var rad = 3.14159265358979 / 180
    ctx.beginPath()
    ctx.moveTo(390, 200)
    for (var i = 0; i &lt;= 360; i++) &#123;
      var x = Math.cos(3 * i * rad) * 190 + 200
      var y = Math.sin(5 * i * rad) * 190 + 200
      ctx.lineTo(x, y)
    &#125;
    ctx.stroke()
    ctx.closePath()
  &lt;/script&gt;

  &lt;h3&gt;datalist element&lt;/h3&gt;
  &lt;form&gt;
    &lt;fieldset&gt;
      &lt;input type="search" name="q" autocomplete="on" list="keywords" /&gt;
      &lt;datalist id="keywords"&gt;
        &lt;option value="ウィキペディア"&gt;&lt;/option&gt;
        &lt;option value="ウィルス対策"&gt;&lt;/option&gt;
        &lt;option value="ウィンドウズ"&gt;&lt;/option&gt;
      &lt;/datalist&gt;

      &lt;input type="submit" value="送信" /&gt;
    &lt;/fieldset&gt;
  &lt;/form&gt;

  &lt;h3&gt;math element&lt;/h3&gt;
  &lt;math&gt;
    &lt;mi&gt;x&lt;/mi&gt;
    &lt;mo&gt;=&lt;/mo&gt;
    &lt;mfrac&gt;
      &lt;mrow&gt;
        &lt;mo form="prefix"&gt;−&lt;/mo&gt; &lt;mi&gt;b&lt;/mi&gt;
        &lt;mo&gt;±&lt;/mo&gt;
        &lt;msqrt&gt;
          &lt;msup&gt; &lt;mi&gt;b&lt;/mi&gt; &lt;mn&gt;2&lt;/mn&gt; &lt;/msup&gt;
          &lt;mo&gt;−&lt;/mo&gt;
          &lt;mn&gt;4&lt;/mn&gt; &lt;mo&gt;⁢&lt;/mo&gt; &lt;mi&gt;a&lt;/mi&gt; &lt;mo&gt;⁢&lt;/mo&gt; &lt;mi&gt;c&lt;/mi&gt;
        &lt;/msqrt&gt;
      &lt;/mrow&gt;
      &lt;mrow&gt; &lt;mn&gt;2&lt;/mn&gt; &lt;mo&gt;⁢&lt;/mo&gt; &lt;mi&gt;a&lt;/mi&gt; &lt;/mrow&gt;
    &lt;/mfrac&gt;
  &lt;/math&gt;

  &lt;h3&gt;meter element&lt;/h3&gt;
  Storage space usage:
  &lt;meter value="6" max="8"&gt;6 blocks used (out of 8 total)&lt;/meter&gt; Voter turnout:
  &lt;meter value="0.75"&gt;&lt;/meter&gt; Tickets sold:
  &lt;meter min="0" max="100" value="75"&gt;&lt;/meter&gt;

  &lt;h3&gt;optgroup element&lt;/h3&gt;
  &lt;form action="courseselector.dll" method="get"&gt;
    &lt;p&gt;Which course would you like to watch today?&lt;/p&gt;
    &lt;p&gt;
      &lt;label
        &gt;Course:
        &lt;select name="c"&gt;
          &lt;optgroup
            label="8.01 Physics I: Claaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          &gt;
            &lt;option value="8.01.1"&gt;Lecture 01: Powers of Teni&lt;/option&gt;
            &lt;option value="8.01.2"&gt;
              Lecture 02: 1D Kinematics
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            &lt;/option&gt;
            &lt;option value="8.01.3"&gt;Lecture 03: Vectors&lt;/option&gt;
          &lt;/optgroup&gt;

          &lt;optgroup label="8.02 Electricity a"&gt;
            &lt;option value="8.02.1"&gt;
              Lecture 01: What holds
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            &lt;/option&gt;
            &lt;option value="8.02.2"&gt;Lecture 02: Electric Field&lt;/option&gt;
            &lt;option value="8.02.3"&gt;Lecture 03: Electric Flux&lt;/option&gt;
          &lt;/optgroup&gt;

          &lt;optgroup label="8.03 Physics III: V"&gt;
            &lt;option value="8.03.1"&gt;Lecture 01: Periodic&lt;/option&gt;
            &lt;option value="8.03.2"&gt;Lecture 02: Beats&lt;/option&gt;
            &lt;option value="8.03.3"&gt;Lecture 03: Forced Osc&lt;/option&gt;
          &lt;/optgroup&gt;
        &lt;/select&gt;
      &lt;/label&gt;
      &lt;label&gt;
        &lt;select&gt;
          &lt;optgroup label&gt;
            &lt;option&gt;
              ああああああああああああああああああああああああああああああああああああああああああああ
            &lt;/option&gt;
            &lt;option&gt;
              ああああああああああああああああああああああああああああああああああああああああああああ
            &lt;/option&gt;
          &lt;/optgroup&gt;
        &lt;/select&gt;
      &lt;/label&gt;
      &lt;label&gt;
        &lt;select&gt;
          &lt;option&gt;
            あああああああああああああああああああああああああああああああああああああああ
          &lt;/option&gt;
          &lt;option&gt;
            ああああああああああああああああああああああああああああああああああああああああああああ
          &lt;/option&gt;
        &lt;/select&gt;
      &lt;/label&gt;
    &lt;/p&gt;
  &lt;/form&gt;

  &lt;h3&gt;ruby element&lt;/h3&gt;
  &lt;ruby&gt;漢&lt;rt&gt;かん&lt;/rt&gt;字&lt;rt&gt;じ　&lt;/rt&gt;&lt;/ruby&gt;

  &lt;h3&gt;time element&lt;/h3&gt;
  &lt;p&gt;Our first date was &lt;time datetime="2006-09-23"&gt;a Saturday&lt;/time&gt;.&lt;/p&gt;
&lt;/div&gt;

      </CopyCode>
  </pre>
  </PreCodes>
</template>
