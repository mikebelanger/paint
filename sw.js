if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,c,r)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const a={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return i;case"module":return a;default:return e(s)}})).then(e=>{const s=r(...e);return i.default||(i.default=s),i})}))}}define("./sw.js",["./workbox-af7d0aae.js"],(function(e){"use strict";e.skipWaiting(),e.precacheAndRoute([{url:"styles.css",revision:"2349d151a833839647417e01e672129f"},{url:"index.html",revision:"e3927ac69f9f824f5f963c6755d17a6a"},{url:"actions/clear-image.js",revision:"c54a78034f79f7915e2924d90be9b8e3"},{url:"actions/copy.js",revision:"222769d905fb778a6b2d746f393b7b38"},{url:"actions/invert-image.js",revision:"98e9de89a543bba3395874ea62b8c686"},{url:"actions/new.js",revision:"0fd3ab55b24aef738e28df4c526cf4ea"},{url:"actions/open.js",revision:"ba4d0cfc246146cb7ffafc263db48005"},{url:"actions/paste.js",revision:"39d1104c71db5e72c4c65bb83b4ac985"},{url:"actions/print.js",revision:"f9f02d76dbde67edb99359711a332b8c"},{url:"actions/save-as.js",revision:"8046fabbedfd444465167a8b95e8d058"},{url:"actions/save.js",revision:"7c1f2f185008c24bb8bbed210c08a97e"},{url:"elements/app.js",revision:"61400d18d2250219734521e4e2d88866"},{url:"elements/canvas.js",revision:"5bacce35462b94c1ca59c1c10e71aa55"},{url:"elements/color-box.js",revision:"e503d982ae9c8c320aca77f9eebc3b19"},{url:"elements/color-picker.js",revision:"bf3699f07e43d33bf3c8d3c37801d049"},{url:"elements/color-switcher.js",revision:"c0f5199f85dc385bea0dc6835c0674b5"},{url:"elements/handle.js",revision:"a962a8feedb9bcbfb2f0ac11cf7305ae"},{url:"elements/index.js",revision:"565bed10e375303b701b2dca39ec834b"},{url:"elements/inset-container.js",revision:"6ec8ff57d538e244fa6dd413c2287f95"},{url:"elements/menu-bar.js",revision:"c4e8dfe7edd7f231e35e6f7b8a3d81c7"},{url:"elements/menu-item.js",revision:"2e544c4ecbf0e95e2ee13f53f2534d27"},{url:"elements/menu.js",revision:"d662fe9a041bce491010fb53f0d95554"},{url:"elements/ruler.js",revision:"8807936ca45c67e038b80fbad8131d2c"},{url:"elements/status-bar.js",revision:"819abc2053e6e88da7ff855ae9c44ea0"},{url:"elements/tool-bar.js",revision:"36eab9d062c2dccc12c080a31b66c0c2"},{url:"elements/tool-box.js",revision:"7397cb04fa56c195077f64e07fe8ccdc"},{url:"elements/tool-color-preview.js",revision:"949699a774211a4e559ca8c8fefc8728"},{url:"elements/tool.js",revision:"46bf746f1a4aa0b321943eded587436b"},{url:"helpers/register-sw.js",revision:"68c1f0821b9ceb5a2894660b917d6891"},{url:"menus/all.js",revision:"1da72ab5b140d4368f492fee7a958fed"},{url:"menus/edit.js",revision:"497ce98d029c9fdef17110e9f3229106"},{url:"menus/file.js",revision:"f8284733b34856eefc9bb4857f825327"},{url:"menus/help.js",revision:"b38d14384c109585a9acb3c522c8a187"},{url:"menus/image.js",revision:"ef2e981c4bdb11ebc96868c10a77a4cc"},{url:"menus/options.js",revision:"183a9c1d3d4a10b2a3df09d9062c8487"},{url:"menus/view.js",revision:"a5fe3e1faf56e5ba4df63738ddbaefbf"},{url:"tools/all.js",revision:"ad3f48f5c4c8cc0c156b7862f6b52b22"},{url:"tools/pencil.js",revision:"bb0e88d937ee30571e10876c4ef9efc1"},{url:"tools/pick.js",revision:"1395a5cd30b1a0321c8924c8c77e43d2"},{url:"web_modules/browser-nativefs.js",revision:"82225e04fcf3f9e00d99e1b4a9e97828"},{url:"web_modules/common/directory-open-legacy-8ad703f7.js",revision:"816372ee4795ffdb93af1842fc47b6f2"},{url:"web_modules/common/directory-open-nativefs-7ac98f26.js",revision:"91d96de461ab5395f2f9643c13306cda"},{url:"web_modules/common/file-open-legacy-37886591.js",revision:"436eea8d91464633a1f6e7196dbcbe35"},{url:"web_modules/common/file-open-nativefs-11792c03.js",revision:"7d0160f05bd6e354971122fdd0342723"},{url:"web_modules/common/file-save-legacy-df95654f.js",revision:"cfcf40db303e17225a904fbb685e301a"},{url:"web_modules/common/file-save-nativefs-b50a0318.js",revision:"fae89dfa12e73a38e168454c3b14aa2d"},{url:"web_modules/lit-element.js",revision:"92a2d82ca6c36e317ec6dd9c2fd48730"},{url:"assets/icon.png",revision:"bfe25a47a2fe6269acb50ada061fbb84"},{url:"manifest.webmanifest",revision:"3a5fc6893bee0c269ad649aabbd29ef0"},{url:"favicon.ico",revision:"ea61015581df267459ed25a0dfd026ee"},{url:"3rdpartylicenses.txt",revision:"06ec155252a4997a17030a2efbdefcac"}],{})}));
