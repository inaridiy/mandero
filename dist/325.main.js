(()=>{"use strict";var e,t,r,n,o,a={},i={};function c(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,exports:{}};return a[e](r,r.exports,c),r.exports}c.m=a,e="function"==typeof Symbol?Symbol("webpack then"):"__webpack_then__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r=e=>{e&&(e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},n=e=>!--e.r&&e(),o=(e,t)=>e?e.push(t):n(t),c.a=(a,i,c)=>{var s,p,f,l=c&&[],u=a.exports,h=!0,b=!1,m=(t,r,n)=>{b||(b=!0,r.r+=t.length,t.map(((t,o)=>t[e](r,n))),b=!1)},y=new Promise(((e,t)=>{f=t,p=()=>(e(u),r(l),l=0)}));y[t]=u,y[e]=(e,t)=>{if(h)return n(e);s&&m(s,e,t),o(l,e),y.catch(t)},a.exports=y,i((a=>{if(!a)return p();var i,c;s=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var i=[];a.then((e=>{c[t]=e,r(i),i=0}));var c={};return c[e]=(e,t)=>(o(i,e),a.catch(t)),c}}var s={};return s[e]=e=>n(e),s[t]=a,s})))(a);var f=new Promise(((e,r)=>{(i=()=>e(c=s.map((e=>e[t])))).r=0,m(s,i,r)}));return i.r?f:c})).then(p,f),h=!1},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>e+".main.js",c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof s)return s}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var t=c.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e})(),(()=>{var e={325:1};c.f.i=(t,r)=>{e[t]||importScripts(c.p+c.u(t))};var t=self.webpackChunk=self.webpackChunk||[],r=t.push.bind(t);t.push=t=>{var[n,o,a]=t;for(var i in o)c.o(o,i)&&(c.m[i]=o[i]);for(a&&a(c);n.length;)e[n.pop()]=1;r(t)}})(),c.v=(e,t,r,n)=>{var o=fetch(c.p+""+r+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(o,n).then((t=>Object.assign(e,t.instance.exports))):o.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,n))).then((t=>Object.assign(e,t.instance.exports)))};const s=self,p=new Promise((e=>{s.addEventListener("message",(t=>{e(t)}))}));var f,l,u,h;f=void 0,l=void 0,h=function*(){const[{check_divergence:e},t]=yield Promise.all([c.e(235).then(c.bind(c,235)),p]),{width:r,height:n,thread:o,i:a,pxPer:i,centerX:f,centerY:l}=t.data,u=Math.floor(r/o*a),h=Math.ceil(r/o*(a+1)),b=new Array(h-u).fill(0).map((()=>new Array(n)));for(let t=0;t<h-u;t++)for(let o=0;o<n;o+=1){const a=e((t+u-r/2)*i+f,(o-n/2)*i+l,1024);b[t][o]=a}s.postMessage(b)},new((u=void 0)||(u=Promise))((function(e,t){function r(e){try{o(h.next(e))}catch(e){t(e)}}function n(e){try{o(h.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof u?o:new u((function(e){e(o)}))).then(r,n)}o((h=h.apply(f,l||[])).next())}))})();
//# sourceMappingURL=325.main.js.map