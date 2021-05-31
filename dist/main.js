/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 3 */
/***/ (() => {

(function () {
  // scroll variable
  var isScroll = false; // dom selector

  var header = document.body.querySelector('.header');
  var mainLnb = document.body.querySelector('.main-lnb');
  window.addEventListener('scroll', function () {
    scrollHeader();
    fixMainLnb();
    isScroll = true;
  });
  var loop = setInterval(function () {
    if (isScroll) {
      isScroll = false;
    }

    scrollHeader();
  }, 250);

  function scrollHeader() {
    if (isScroll) {
      header.classList.add('is-scroll');
    } else {
      header.classList.remove('is-scroll');
    }
  }

  function fixMainLnb() {
    mainLnb.classList.add('is-scroll');
  }
})();

/***/ }),
/* 4 */
/***/ (() => {

(function () {
  // utilmenu 설정하기
  var utilMenu = document.querySelectorAll('.util-menu');
  utilMenu.forEach(function (menu) {
    menu.addEventListener('click', activeUtilMenu);
  });

  function activeUtilMenu(e) {
    if (e.target.nodeName === 'SPAN') {
      //초기화
      //
      var span = e.target;
      var sub = span.nextElementSibling;

      if (sub.classList.contains('active')) {
        sub.classList.remove('active');
        this.classList.remove('active');
      } else {
        // 초기화
        var li = [].slice.call(this.children[0].children);
        li.forEach(function (li) {
          return li.children[1].classList.remove('active');
        }); // 선택한 섹션 열어줌

        this.classList.add('active');
        sub.classList.add('active');
      }
    }
  } // side bar 작동시키기


  var sidebar = document.querySelector('.lnb');
  var sidebarPC = document.querySelector('.lnb.pc');
  var overlay = document.querySelector('.overlay');
  var btnSidebar = document.querySelectorAll('.btn-trigger');
  var btnSidebarMobile = document.querySelector('.btn-trigger.mobile');
  var btnSidebarPC = document.querySelector('.btn-trigger.pc'); // pc

  btnSidebarPC.addEventListener('click', function () {
    if (this.classList.contains('is-active')) {
      this.classList.remove('is-active');
      sidebarPC.classList.remove('is-shown');
      document.body.style.overflow = 'auto';
    } else {
      this.classList.add('is-active');
      sidebarPC.classList.add('is-shown');
      document.body.style.overflow = 'hidden';
    }
  });
  btnSidebarMobile.addEventListener('click', function () {
    if (this.classList.contains('is-active')) {
      this.classList.remove('is-active');
      overlay.classList.remove('is-shown');
      sidebar.classList.remove('is-shown');
      document.body.style.overflow = 'auto';
    } else {
      this.classList.add('is-active');
      overlay.classList.add('is-shown');
      sidebar.classList.add('is-shown');
      document.body.style.overflow = 'hidden';
    }
  });
  overlay.addEventListener('click', function () {
    btnSidebarMobile.classList.remove('is-active');
    overlay.classList.remove('is-shown');
    sidebar.classList.remove('is-shown');
    document.body.style.overflow = 'auto';
  });
})();

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _js_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _js_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _js_sidebar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_sidebar__WEBPACK_IMPORTED_MODULE_3__);




})();

/******/ })()
;