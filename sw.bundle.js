if(!self.define){let e,i={};const n=(n,a)=>(n=new URL(n+".js",a).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const f=e=>n(e,r),c={module:{uri:r},exports:s,require:f};i[r]=Promise.all(a.map((e=>c[e]||f(e)))).then((e=>(d(...e),s)))}}define(["./workbox-a0858171"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2.bundle.js",revision:"32c21b920ed0bba910fb152d93008b81"},{url:"946.bundle.js",revision:"747f129fc2b1686b8c86f01150233de2"},{url:"app.webmanifest",revision:"b6a857af994bf20b4c0f612de594312e"},{url:"app~4e5ec22b.bundle.js",revision:"afde64773d60afcf8ac658ddc747fddb"},{url:"app~a51fa3f5.bundle.js",revision:"d443f1dfc13c196e7c653d2747ff75dc"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"294412f3d8480155d0fd4381623e93c7"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"711f4864bc117e0e41f0b05f323ecc25"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"favicon.png",revision:"7d7d9a388c3f3e1aed80372a865f33e4"},{url:"icons/icon-144x144.png",revision:"b49bacb207d27e9b2e9fc1deeff3c0af"},{url:"icons/icon-152x152.png",revision:"7711dac9eda51c561d6297dbb3891735"},{url:"icons/icon-192x192.png",revision:"1c7780a4d2f68a331acea344885c631a"},{url:"icons/icon-512x512.png",revision:"4e5f6d7ee108bd0f7ffdbda521bd1771"},{url:"icons/icon-72x72.png",revision:"f1f06db0d1150da10615eb7ae4b0b002"},{url:"icons/icon-96x96.png",revision:"b4b9c1c6b645622051ec6c55b8be1cb4"},{url:"images/hero-image_4-large.jpg",revision:"36ecae0a6af53108b75d1787208640de"},{url:"images/hero-image_4-small.jpg",revision:"09473ff37a1d35aa80e34d57e615e863"},{url:"images/hero-image_4.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"index.html",revision:"9f956f0456d821d0fe9a9e8817d7cd94"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"restaurant-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/small/")),new e.StaleWhileRevalidate({cacheName:"restaurant-img-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
