(()=>{"use strict";var t={m:{},u:t=>t+".main.js"};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),t.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var o=t.g.document;if(!e&&o&&(o.currentScript&&(e=o.currentScript.src),!e)){var n=o.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href;var e=function(t,e,o,n){return new(o||(o=Promise))((function(i,r){function c(t){try{s(n.next(t))}catch(t){r(t)}}function a(t){try{s(n.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(c,a)}s((n=n.apply(t,e||[])).next())}))};new WebAssembly.Memory({initial:10,maximum:100}),e(void 0,void 0,void 0,(function*(){const o=document.getElementById("wrapper"),n=document.getElementById("canvas"),i=n.getContext("2d"),r=o=>e(void 0,void 0,void 0,(function*(){const e=[];for(let i=0;i<16;i++){const r=new Worker(new URL(t.p+t.u(325),t.b));r.postMessage({width:n.width,height:n.height,thread:16,pxPer:o,centerX:-1.2622216276238454,centerY:-.0459170016351388,i});const c=new Promise((t=>{r.addEventListener("message",(({data:e})=>t(e)))}));e.push(c)}const r=i.getImageData(0,0,n.width,n.height),c=r.data;(yield Promise.all(e)).flat(1).forEach(((t,e)=>t.forEach(((t,o)=>{const n=4*(o*r.width+e);0!==t?(c[n]=5*t%255,c[n+1]=5*t%255,c[n+2]=4*t%255,c[n+3]=255):(c[n]=255,c[n+1]=255,c[n+2]=255,c[n+3]=255)})))),i.putImageData(r,0,0)}));e(void 0,void 0,void 0,(function*(){console.time("loop time"),n.style.height=o.offsetHeight.toString()+"px",n.height=o.offsetHeight,n.width=o.offsetWidth;let t=6/n.width;for(let e=0;e<600;e++)t/=1.5,yield r(t);console.timeEnd("loop time")}))}))})();
//# sourceMappingURL=main.js.map