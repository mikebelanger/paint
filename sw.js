if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,r,a)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}})).then(e=>{const s=a(...e);return i.default||(i.default=s),i})}))}}define("./sw.js",["./workbox-af7d0aae"],(function(e){"use strict";e.skipWaiting(),e.precacheAndRoute([{url:"styles.css",revision:"53d76aace831052c4f4760fd6e724d32"},{url:"index.html",revision:"e3927ac69f9f824f5f963c6755d17a6a"},{url:"actions/clear-image.js",revision:"2db3ed45d6c9603e0007bb97bf99462a"},{url:"actions/invert-image.js",revision:"9d6b7aeb2ebedf45db7f98951aa317ee"},{url:"actions/open.js",revision:"2b1f8e2d74b2c66a6ce211d5efb2d017"},{url:"actions/print.js",revision:"5d0a9d819384a5652d31ee6684efb3f9"},{url:"actions/save.js",revision:"215a95624d1142d0c03b2d189be5c764"},{url:"data/tools.js",revision:"99b432fb902d6c8e5366ef518548b8a1"},{url:"elements/app.js",revision:"2c1b59b37920727df6a4c63d19789878"},{url:"elements/canvas.js",revision:"1932d2323f2db35233de8ac98122bc22"},{url:"elements/color-box.js",revision:"d0958d1c6c25da8952fd42820bff816a"},{url:"elements/color-picker.js",revision:"d84a890e747369017198e133805c3039"},{url:"elements/color-switcher.js",revision:"c1c049e0149ea330d7b596b50bb15569"},{url:"elements/handle.js",revision:"ed102617ac803b09a35deaaa246c6b41"},{url:"elements/index.js",revision:"161c2980e2768df49a5316a611dbf7f2"},{url:"elements/inset-container.js",revision:"9f5f4c9eb69cc7b8f71def9acb8505c6"},{url:"elements/menu-bar.js",revision:"1005c3ca0c4984ae764821c7b35eeaad"},{url:"elements/menu-item.js",revision:"2d168c593d1f584259c850dc1f2b311c"},{url:"elements/menu.js",revision:"74a5ec466aa9ba588cbb146242dec817"},{url:"elements/ruler.js",revision:"cadf572397ddb9ad07a04c4747fac5bb"},{url:"elements/status-bar.js",revision:"d1eb708a4854e9dac686a2f0c45536de"},{url:"elements/tool-bar.js",revision:"afc330eb74562f0911c2ce700bb8900c"},{url:"elements/tool-box.js",revision:"fe969e5d25723ff2ac66a0f6a989de0a"},{url:"elements/tool.js",revision:"4e7be3b308ff8581111e4e83afb2b1e3"},{url:"menus/all.js",revision:"5a78a4f36c48ef8465107774730886bd"},{url:"menus/edit.js",revision:"2377645ea0e9b3dfc138779b4d33ce0f"},{url:"menus/file.js",revision:"efe05066c18238d1ccd2d81086e8e5cd"},{url:"menus/help.js",revision:"bd9cc5bfe3c32b007dfd0908e4469eef"},{url:"menus/image.js",revision:"89f433e4a0cb6a36fd31438f9f675806"},{url:"menus/options.js",revision:"fe1df72714b971359e6ec9e3e02e2ff0"},{url:"menus/view.js",revision:"7b43a6a568c44750b073108da58c1215"},{url:"tools/register-sw.js",revision:"611369edc1ef59792c0c152e87fbd3ad"},{url:"web_modules/browser-nativefs.js",revision:"82225e04fcf3f9e00d99e1b4a9e97828"},{url:"web_modules/common/directory-open-legacy-8ad703f7.js",revision:"816372ee4795ffdb93af1842fc47b6f2"},{url:"web_modules/common/directory-open-nativefs-7ac98f26.js",revision:"91d96de461ab5395f2f9643c13306cda"},{url:"web_modules/common/file-open-legacy-37886591.js",revision:"436eea8d91464633a1f6e7196dbcbe35"},{url:"web_modules/common/file-open-nativefs-11792c03.js",revision:"7d0160f05bd6e354971122fdd0342723"},{url:"web_modules/common/file-save-legacy-df95654f.js",revision:"cfcf40db303e17225a904fbb685e301a"},{url:"web_modules/common/file-save-nativefs-b50a0318.js",revision:"fae89dfa12e73a38e168454c3b14aa2d"},{url:"web_modules/lit-element.js",revision:"92a2d82ca6c36e317ec6dd9c2fd48730"},{url:"assets/icon.png",revision:"bfe25a47a2fe6269acb50ada061fbb84"},{url:"manifest.webmanifest",revision:"3a5fc6893bee0c269ad649aabbd29ef0"},{url:"favicon.ico",revision:"ea61015581df267459ed25a0dfd026ee"}],{})}));
