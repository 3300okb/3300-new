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
    title="image-viewer"
    sample-url="/sample/html/image-viewer.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><CopyCode>&lt;!doctype html&gt;
&lt;title&gt;image_viewer&lt;/title&gt;

&lt;style&gt;
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
&lt;/style&gt;

&lt;div class='u'&gt;
&lt;span&gt;image viewer&lt;/span&gt;
&lt;span&gt;click - zoom in, out / left - prev / right - next / shift - zoom out / [ - slideshow ( interval&lt;input type="text" value="2"&gt;s ) / ] - slideshow off / return - reset / object-fit cover &lt;input type="checkbox"&gt;&lt;/span&gt;
&lt;/div&gt;
&lt;div class="b"&gt;drop imgs&lt;/div&gt;
&lt;div class="i"&gt;&lt;/div&gt;
&lt;div class="p"&gt;&lt;/div&gt;

&lt;script&gt;
const u = document.querySelector('.u'); // usage
const b = document.querySelector('.b'); // dropbox
const i = document.querySelector('.i'); // imagelist
const p = document.querySelector('.p'); // popup
const img = document.querySelector('.p img'); // image in popup
const files = [];

const interval = u.querySelector('input[type=text]');
let intervalSlideShow = interval.value * 1000;
interval.addEventListener('change', () =&gt; {
  intervalSlideShow = interval.value * 1000;
});
interval.addEventListener('focus', () =&gt; {
  interval.value = '';
});

const cover = u.querySelector('input[type=checkbox]');
cover.addEventListener('change', () =&gt; {
  if (cover.checked) {
    p.classList.add('cover');
  } else {
    p.classList.remove('cover');
  }
});

const makeHash = (file) =&gt; {
  const extention = file.name.slice((file.name.lastIndexOf('.') + 1));
  const size = file.tag.naturalWidth + 'x' + file.tag.naturalHeight;
  const name = file.name.substring(0, file.name.lastIndexOf('.'));
  location.hash = '(' + extention + ',' + size + ')' + name;
};

const nullHash = () =&gt; {
  location.hash = null;
};

const closeLayer = () =&gt; {
  p.style.display = 'none';
  p.classList.remove('slideShow');
  p.innerHTML = '';
  nullHash();
};

const openLayer = (img) =&gt; {
  p.style.display = 'flex';
  p.appendChild(img);
};

const callImg = (num) =&gt; {
  return files[num]['tag'];
};

const cloneImg = (num) =&gt; {
  return callImg(num).cloneNode(true);
};

const recordFilesData = (ev) =&gt; {
  if (!/^image/.test(ev.dataTransfer.files[0].type)) {
    return false;
  };
  Object.values(ev.dataTransfer.files).forEach((file) =&gt; {
    files.push(file);
  });
};

const addEventListenerImg = (img, clone, file) =&gt; {
  img.addEventListener('click', (el) =&gt; {
    openLayer(clone);

    if (clone.naturalWidth &lt; clone.naturalHeight) {
      clone.style.width = 'auto';
    } else {
      clone.style.height = 'auto';
    };

    makeHash(file);
  });
};

const renderImgList = (ev) =&gt; {
  files.forEach((file, index) =&gt; {
    if (index &lt; document.querySelectorAll('img').length) {
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

const renderSlideClone = (num) =&gt; {
  const clone = cloneImg(num);
  clone.classList.add('fadeIn');
  openLayer(clone);
  makeHash(files[num]);
};

const renderSlideClonePrev = (num) =&gt; {
  const clone = cloneImg(num);
  clone.classList.add('fadeOut');
  clone.style.position = 'absolute';
  p.appendChild(clone);
};

let slideId;
const clearSlide = (ev, id) =&gt; {
  if (ev.keyCode !== 219) {
    closeLayer();
  }
  clearInterval(slideId);
};
const slideShow = (order) =&gt; {
  if (files.length === 0) {
    return false;
  }

  const backgroundBlack = () =&gt; {
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

  const id = setInterval(() =&gt; {
    slideId = id;
    const rewind = () =&gt; {
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
    document.addEventListener('keydown', (ev) =&gt; {
      if (ev.keyCode === 221 || ev.keyCode === 16) {
        clearSlide(ev, id);
      }
    });
    p.addEventListener('click', (ev) =&gt; {
      clearSlide(ev, id);
    });
  }, intervalSlideShow);
};

b.addEventListener('dragover', (ev) =&gt; {
  ev.preventDefault();
});

b.addEventListener('drop', (ev) =&gt; {
  ev.preventDefault();
  recordFilesData(ev);
  renderImgList(ev);
});

p.addEventListener('click', () =&gt; {
  closeLayer();
});

document.addEventListener('keydown', (ev) =&gt; {
  const isSlideShow = p.classList.contains('slideShow');

  // reset app - return
  if (ev.keyCode === 13) {
    nullHash();
    location.reload();
  };

  // slideshow
  if (ev.keyCode === 219 &amp;&amp; !isSlideShow) {
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
  const switchImg = (targetNum) =&gt; {
    const clone = cloneImg(targetNum);
    p.removeChild(currentImg);
    p.appendChild(clone);
    makeHash(files[targetNum]);
  };
  const switchPreview = (ev) =&gt; {
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
&lt;/script&gt;
</CopyCode>
</pre>
  </PreCodes>
</template>
