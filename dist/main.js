/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nnew WebAssembly.Memory({ initial: 10, maximum: 100 });\r\n(() => __awaiter(void 0, void 0, void 0, function* () {\r\n    const wrapper = document.getElementById(\"wrapper\");\r\n    const canvas = document.getElementById(\"canvas\");\r\n    const ctx = canvas.getContext(\"2d\");\r\n    const thread = 16;\r\n    const init = () => __awaiter(void 0, void 0, void 0, function* () {\r\n        console.time(\"loop time\");\r\n        setCanvasSize();\r\n        let pxPer = 6 / canvas.width;\r\n        for (let i = 0; i < 600; i++) {\r\n            pxPer = pxPer / 1.5;\r\n            yield draw(pxPer);\r\n        }\r\n        console.timeEnd(\"loop time\");\r\n    });\r\n    const draw = (pxPer) => __awaiter(void 0, void 0, void 0, function* () {\r\n        const centerX = -1.2622216276238453;\r\n        const centerY = -0.0459170016351388;\r\n        const promises = [];\r\n        for (let i = 0; i < thread; i++) {\r\n            const worker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(\"src_test_worker_ts\"), __webpack_require__.b));\r\n            worker.postMessage({\r\n                width: canvas.width,\r\n                height: canvas.height,\r\n                thread,\r\n                pxPer,\r\n                centerX,\r\n                centerY,\r\n                i,\r\n            });\r\n            const promise = new Promise((resolve) => {\r\n                worker.addEventListener(\"message\", ({ data }) => resolve(data));\r\n            });\r\n            promises.push(promise);\r\n        }\r\n        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);\r\n        const pixels = imageData.data;\r\n        const pxs = (yield Promise.all(promises)).flat(1);\r\n        pxs.forEach((ary, x) => ary.forEach((color, y) => {\r\n            const base = (y * imageData.width + x) * 4;\r\n            if (color !== 0) {\r\n                pixels[base] = (color * 5) % 255;\r\n                pixels[base + 1] = (color * 5) % 255;\r\n                pixels[base + 2] = (color * 4) % 255;\r\n                pixels[base + 3] = 255;\r\n            }\r\n            else {\r\n                pixels[base] = 255;\r\n                pixels[base + 1] = 255;\r\n                pixels[base + 2] = 255;\r\n                pixels[base + 3] = 255;\r\n            }\r\n        }));\r\n        ctx.putImageData(imageData, 0, 0);\r\n    });\r\n    /*const draw = (pxPer: number) => {\r\n      const { width, height } = ctx.canvas;\r\n      //\r\n      for (let x = 0; x < width; x += 1) {\r\n        for (let y = 0; y < height; y += 1) {\r\n          const a = (x - width / 2) * pxPer + centerX;\r\n          const b = (y - height / 2) * pxPer + centerY;\r\n  \r\n          const isDivergence = check_divergence(a, b, 4096);\r\n          if (isDivergence !== 0) {\r\n            ctx.fillStyle = `hsl(${isDivergence * 8},80%,50%)`;\r\n            ctx.fillRect(x, y, 1, 1);\r\n          }\r\n        }\r\n      }\r\n    };*/\r\n    const setCanvasSize = () => {\r\n        canvas.style.height = wrapper.offsetHeight.toString() + \"px\";\r\n        canvas.height = wrapper.offsetHeight;\r\n        canvas.width = wrapper.offsetWidth;\r\n    };\r\n    init();\r\n}))();\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLnRzPzQxOWUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5uZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHsgaW5pdGlhbDogMTAsIG1heGltdW06IDEwMCB9KTtcclxuKCgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid3JhcHBlclwiKTtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIGNvbnN0IHRocmVhZCA9IDE2O1xyXG4gICAgY29uc3QgaW5pdCA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnNvbGUudGltZShcImxvb3AgdGltZVwiKTtcclxuICAgICAgICBzZXRDYW52YXNTaXplKCk7XHJcbiAgICAgICAgbGV0IHB4UGVyID0gNiAvIGNhbnZhcy53aWR0aDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHB4UGVyID0gcHhQZXIgLyAxLjU7XHJcbiAgICAgICAgICAgIHlpZWxkIGRyYXcocHhQZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLnRpbWVFbmQoXCJsb29wIHRpbWVcIik7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRyYXcgPSAocHhQZXIpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IGNlbnRlclggPSAtMS4yNjIyMjE2Mjc2MjM4NDUzO1xyXG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSAtMC4wNDU5MTcwMDE2MzUxMzg4O1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aHJlYWQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB3b3JrZXIgPSBuZXcgV29ya2VyKG5ldyBVUkwoXCIuL3Rlc3Qud29ya2VyLnRzXCIsIGltcG9ydC5tZXRhLnVybCkpO1xyXG4gICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbnZhcy53aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY2FudmFzLmhlaWdodCxcclxuICAgICAgICAgICAgICAgIHRocmVhZCxcclxuICAgICAgICAgICAgICAgIHB4UGVyLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyWCxcclxuICAgICAgICAgICAgICAgIGNlbnRlclksXHJcbiAgICAgICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKHsgZGF0YSB9KSA9PiByZXNvbHZlKGRhdGEpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBjb25zdCBwaXhlbHMgPSBpbWFnZURhdGEuZGF0YTtcclxuICAgICAgICBjb25zdCBweHMgPSAoeWllbGQgUHJvbWlzZS5hbGwocHJvbWlzZXMpKS5mbGF0KDEpO1xyXG4gICAgICAgIHB4cy5mb3JFYWNoKChhcnksIHgpID0+IGFyeS5mb3JFYWNoKChjb2xvciwgeSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlID0gKHkgKiBpbWFnZURhdGEud2lkdGggKyB4KSAqIDQ7XHJcbiAgICAgICAgICAgIGlmIChjb2xvciAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcGl4ZWxzW2Jhc2VdID0gKGNvbG9yICogNSkgJSAyNTU7XHJcbiAgICAgICAgICAgICAgICBwaXhlbHNbYmFzZSArIDFdID0gKGNvbG9yICogNSkgJSAyNTU7XHJcbiAgICAgICAgICAgICAgICBwaXhlbHNbYmFzZSArIDJdID0gKGNvbG9yICogNCkgJSAyNTU7XHJcbiAgICAgICAgICAgICAgICBwaXhlbHNbYmFzZSArIDNdID0gMjU1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGl4ZWxzW2Jhc2VdID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgcGl4ZWxzW2Jhc2UgKyAxXSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIHBpeGVsc1tiYXNlICsgMl0gPSAyNTU7XHJcbiAgICAgICAgICAgICAgICBwaXhlbHNbYmFzZSArIDNdID0gMjU1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcclxuICAgIH0pO1xyXG4gICAgLypjb25zdCBkcmF3ID0gKHB4UGVyOiBudW1iZXIpID0+IHtcclxuICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjdHguY2FudmFzO1xyXG4gICAgICAvL1xyXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4ICs9IDEpIHtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSArPSAxKSB7XHJcbiAgICAgICAgICBjb25zdCBhID0gKHggLSB3aWR0aCAvIDIpICogcHhQZXIgKyBjZW50ZXJYO1xyXG4gICAgICAgICAgY29uc3QgYiA9ICh5IC0gaGVpZ2h0IC8gMikgKiBweFBlciArIGNlbnRlclk7XHJcbiAgXHJcbiAgICAgICAgICBjb25zdCBpc0RpdmVyZ2VuY2UgPSBjaGVja19kaXZlcmdlbmNlKGEsIGIsIDQwOTYpO1xyXG4gICAgICAgICAgaWYgKGlzRGl2ZXJnZW5jZSAhPT0gMCkge1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYGhzbCgke2lzRGl2ZXJnZW5jZSAqIDh9LDgwJSw1MCUpYDtcclxuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHgsIHksIDEsIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTsqL1xyXG4gICAgY29uc3Qgc2V0Q2FudmFzU2l6ZSA9ICgpID0+IHtcclxuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gd3JhcHBlci5vZmZzZXRIZWlnaHQudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gd3JhcHBlci5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd3JhcHBlci5vZmZzZXRXaWR0aDtcclxuICAgIH07XHJcbiAgICBpbml0KCk7XHJcbn0pKSgpO1xyXG5leHBvcnQge307XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;