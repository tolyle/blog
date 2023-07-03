(self["webpackChunk"] = self["webpackChunk"] || []).push([[844],{

/***/ 45500:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/yet-another-react-lightbox@3.11.3/node_modules/yet-another-react-lightbox/dist/plugins/captions/captions.css ***!
  \*****************************************************************************************************************************************/
/***/ (function() {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 34306:
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/yet-another-react-lightbox@3.11.3/node_modules/yet-another-react-lightbox/dist/plugins/thumbnails/thumbnails.css ***!
  \*********************************************************************************************************************************************/
/***/ (function() {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 43745:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/yet-another-react-lightbox@3.11.3/node_modules/yet-another-react-lightbox/dist/styles.css ***!
  \**********************************************************************************************************************/
/***/ (function() {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 1283:
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/spin/index.js + 2 modules ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ spin; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.0/node_modules/rc-util/es/omit.js
var omit = __webpack_require__(73800);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(93236);
;// CONCATENATED MODULE: ./node_modules/.pnpm/throttle-debounce@5.0.0/node_modules/throttle-debounce/esm/index.js
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param {number} delay -                  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher)
 *                                            are most useful.
 * @param {Function} callback -               A function to be executed after delay milliseconds. The `this` context and all arguments are passed through,
 *                                            as-is, to `callback` when the throttled-function is executed.
 * @param {object} [options] -              An object to configure options.
 * @param {boolean} [options.noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds
 *                                            while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed
 *                                            one final time after the last throttled-function call. (After the throttled-function has not been called for
 *                                            `delay` milliseconds, the internal counter is reset).
 * @param {boolean} [options.noLeading] -   Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback
 *                                            immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that
 *                                            callback will never executed if both noLeading = true and noTrailing = true.
 * @param {boolean} [options.debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is
 *                                            false (at end), schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function} A new, throttled, function.
 */
function throttle (delay, callback, options) {
  var _ref = options || {},
      _ref$noTrailing = _ref.noTrailing,
      noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing,
      _ref$noLeading = _ref.noLeading,
      noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading,
      _ref$debounceMode = _ref.debounceMode,
      debounceMode = _ref$debounceMode === void 0 ? undefined : _ref$debounceMode;
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */


  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel(options) {
    var _ref2 = options || {},
        _ref2$upcomingOnly = _ref2.upcomingOnly,
        upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;

    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (!noLeading && debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`
       * and noLeading != true.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      if (noLeading) {
        /*
         * In throttle mode with noLeading, if `delay` time has
         * been exceeded, update `lastExec` and schedule `callback`
         * to execute after `delay` ms.
         */
        lastExec = Date.now();

        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay);
        }
      } else {
        /*
         * In throttle mode without noLeading, if `delay` time has been exceeded, execute
         * `callback`.
         */
        exec();
      }
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param {number} delay -               A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param {Function} callback -          A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                        to `callback` when the debounced-function is executed.
 * @param {object} [options] -           An object to configure options.
 * @param {boolean} [options.atBegin] -  Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                        after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                        (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 *
 * @returns {Function} A new, debounced function.
 */

function debounce (delay, callback, options) {
  var _ref = options || {},
      _ref$atBegin = _ref.atBegin,
      atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;

  return throttle(delay, callback, {
    debounceMode: atBegin !== false
  });
}


//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(5210);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(1780);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.10.1/node_modules/@ant-design/cssinjs/es/index.js + 28 modules
var es = __webpack_require__(76471);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(4533);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(43956);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/style/index.js
var style = __webpack_require__(2508);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/spin/style/index.js



const antSpinMove = new es/* Keyframes */.E4('antSpinMove', {
  to: {
    opacity: 1
  }
});
const antRotate = new es/* Keyframes */.E4('antRotate', {
  to: {
    transform: 'rotate(405deg)'
  }
});
const genSpinStyle = token => ({
  [`${token.componentCls}`]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
    position: 'absolute',
    display: 'none',
    color: token.colorPrimary,
    fontSize: 0,
    textAlign: 'center',
    verticalAlign: 'middle',
    opacity: 0,
    transition: `transform ${token.motionDurationSlow} ${token.motionEaseInOutCirc}`,
    '&-spinning': {
      position: 'static',
      display: 'inline-block',
      opacity: 1
    },
    '&-nested-loading': {
      position: 'relative',
      [`> div > ${token.componentCls}`]: {
        position: 'absolute',
        top: 0,
        insetInlineStart: 0,
        zIndex: 4,
        display: 'block',
        width: '100%',
        height: '100%',
        maxHeight: token.contentHeight,
        [`${token.componentCls}-dot`]: {
          position: 'absolute',
          top: '50%',
          insetInlineStart: '50%',
          margin: -token.spinDotSize / 2
        },
        [`${token.componentCls}-text`]: {
          position: 'absolute',
          top: '50%',
          width: '100%',
          paddingTop: (token.spinDotSize - token.fontSize) / 2 + 2,
          textShadow: `0 1px 2px ${token.colorBgContainer}`,
          fontSize: token.fontSize
        },
        [`&${token.componentCls}-show-text ${token.componentCls}-dot`]: {
          marginTop: -(token.spinDotSize / 2) - 10
        },
        '&-sm': {
          [`${token.componentCls}-dot`]: {
            margin: -token.spinDotSizeSM / 2
          },
          [`${token.componentCls}-text`]: {
            paddingTop: (token.spinDotSizeSM - token.fontSize) / 2 + 2
          },
          [`&${token.componentCls}-show-text ${token.componentCls}-dot`]: {
            marginTop: -(token.spinDotSizeSM / 2) - 10
          }
        },
        '&-lg': {
          [`${token.componentCls}-dot`]: {
            margin: -(token.spinDotSizeLG / 2)
          },
          [`${token.componentCls}-text`]: {
            paddingTop: (token.spinDotSizeLG - token.fontSize) / 2 + 2
          },
          [`&${token.componentCls}-show-text ${token.componentCls}-dot`]: {
            marginTop: -(token.spinDotSizeLG / 2) - 10
          }
        }
      },
      [`${token.componentCls}-container`]: {
        position: 'relative',
        transition: `opacity ${token.motionDurationSlow}`,
        '&::after': {
          position: 'absolute',
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          zIndex: 10,
          width: '100%',
          height: '100%',
          background: token.colorBgContainer,
          opacity: 0,
          transition: `all ${token.motionDurationSlow}`,
          content: '""',
          pointerEvents: 'none'
        }
      },
      [`${token.componentCls}-blur`]: {
        clear: 'both',
        opacity: 0.5,
        userSelect: 'none',
        pointerEvents: 'none',
        [`&::after`]: {
          opacity: 0.4,
          pointerEvents: 'auto'
        }
      }
    },
    // tip
    // ------------------------------
    [`&-tip`]: {
      color: token.spinDotDefault
    },
    // dots
    // ------------------------------
    [`${token.componentCls}-dot`]: {
      position: 'relative',
      display: 'inline-block',
      fontSize: token.spinDotSize,
      width: '1em',
      height: '1em',
      '&-item': {
        position: 'absolute',
        display: 'block',
        width: (token.spinDotSize - token.marginXXS / 2) / 2,
        height: (token.spinDotSize - token.marginXXS / 2) / 2,
        backgroundColor: token.colorPrimary,
        borderRadius: '100%',
        transform: 'scale(0.75)',
        transformOrigin: '50% 50%',
        opacity: 0.3,
        animationName: antSpinMove,
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
        animationDirection: 'alternate',
        '&:nth-child(1)': {
          top: 0,
          insetInlineStart: 0
        },
        '&:nth-child(2)': {
          top: 0,
          insetInlineEnd: 0,
          animationDelay: '0.4s'
        },
        '&:nth-child(3)': {
          insetInlineEnd: 0,
          bottom: 0,
          animationDelay: '0.8s'
        },
        '&:nth-child(4)': {
          bottom: 0,
          insetInlineStart: 0,
          animationDelay: '1.2s'
        }
      },
      '&-spin': {
        transform: 'rotate(45deg)',
        animationName: antRotate,
        animationDuration: '1.2s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear'
      }
    },
    // Sizes
    // ------------------------------
    // small
    [`&-sm ${token.componentCls}-dot`]: {
      fontSize: token.spinDotSizeSM,
      i: {
        width: (token.spinDotSizeSM - token.marginXXS / 2) / 2,
        height: (token.spinDotSizeSM - token.marginXXS / 2) / 2
      }
    },
    // large
    [`&-lg ${token.componentCls}-dot`]: {
      fontSize: token.spinDotSizeLG,
      i: {
        width: (token.spinDotSizeLG - token.marginXXS) / 2,
        height: (token.spinDotSizeLG - token.marginXXS) / 2
      }
    },
    [`&${token.componentCls}-show-text ${token.componentCls}-text`]: {
      display: 'block'
    }
  })
});
// ============================== Export ==============================
/* harmony default export */ var spin_style = ((0,genComponentStyleHook/* default */.Z)('Spin', token => {
  const spinToken = (0,statistic/* merge */.TS)(token, {
    spinDotDefault: token.colorTextDescription,
    spinDotSize: token.controlHeightLG / 2,
    spinDotSizeSM: token.controlHeightLG * 0.35,
    spinDotSizeLG: token.controlHeight
  });
  return [genSpinStyle(spinToken)];
}, {
  contentHeight: 400
}));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/spin/index.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};








const SpinSizes = (/* unused pure expression or super */ null && (['small', 'default', 'large']));
// Render indicator
let defaultIndicator = null;
function renderIndicator(prefixCls, props) {
  const {
    indicator
  } = props;
  const dotClassName = `${prefixCls}-dot`;
  // should not be render default indicator when indicator value is null
  if (indicator === null) {
    return null;
  }
  if ((0,reactNode/* isValidElement */.l$)(indicator)) {
    return (0,reactNode/* cloneElement */.Tm)(indicator, {
      className: classnames_default()(indicator.props.className, dotClassName)
    });
  }
  if ((0,reactNode/* isValidElement */.l$)(defaultIndicator)) {
    return (0,reactNode/* cloneElement */.Tm)(defaultIndicator, {
      className: classnames_default()(defaultIndicator.props.className, dotClassName)
    });
  }
  return /*#__PURE__*/react.createElement("span", {
    className: classnames_default()(dotClassName, `${prefixCls}-dot-spin`)
  }, /*#__PURE__*/react.createElement("i", {
    className: `${prefixCls}-dot-item`
  }), /*#__PURE__*/react.createElement("i", {
    className: `${prefixCls}-dot-item`
  }), /*#__PURE__*/react.createElement("i", {
    className: `${prefixCls}-dot-item`
  }), /*#__PURE__*/react.createElement("i", {
    className: `${prefixCls}-dot-item`
  }));
}
function shouldDelay(spinning, delay) {
  return !!spinning && !!delay && !isNaN(Number(delay));
}
const Spin = props => {
  const {
      spinPrefixCls: prefixCls,
      spinning: customSpinning = true,
      delay = 0,
      className,
      rootClassName,
      size = 'default',
      tip,
      wrapperClassName,
      style,
      children,
      hashId
    } = props,
    restProps = __rest(props, ["spinPrefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "hashId"]);
  const [spinning, setSpinning] = react.useState(() => customSpinning && !shouldDelay(customSpinning, delay));
  react.useEffect(() => {
    if (customSpinning) {
      const showSpinning = debounce(delay, () => {
        setSpinning(true);
      });
      showSpinning();
      return () => {
        var _a;
        (_a = showSpinning === null || showSpinning === void 0 ? void 0 : showSpinning.cancel) === null || _a === void 0 ? void 0 : _a.call(showSpinning);
      };
    }
    setSpinning(false);
  }, [delay, customSpinning]);
  const isNestedPattern = react.useMemo(() => typeof children !== 'undefined', [children]);
  if (false) {}
  const {
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const spinClassName = classnames_default()(prefixCls, {
    [`${prefixCls}-sm`]: size === 'small',
    [`${prefixCls}-lg`]: size === 'large',
    [`${prefixCls}-spinning`]: spinning,
    [`${prefixCls}-show-text`]: !!tip,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className, rootClassName, hashId);
  const containerClassName = classnames_default()(`${prefixCls}-container`, {
    [`${prefixCls}-blur`]: spinning
  });
  // fix https://fb.me/react-unknown-prop
  const divProps = (0,omit/* default */.Z)(restProps, ['indicator', 'prefixCls']);
  const spinElement = /*#__PURE__*/react.createElement("div", Object.assign({}, divProps, {
    style: style,
    className: spinClassName,
    "aria-live": "polite",
    "aria-busy": spinning
  }), renderIndicator(prefixCls, props), tip && isNestedPattern ? /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-text`
  }, tip) : null);
  if (isNestedPattern) {
    return /*#__PURE__*/react.createElement("div", Object.assign({}, divProps, {
      className: classnames_default()(`${prefixCls}-nested-loading`, wrapperClassName, hashId)
    }), spinning && /*#__PURE__*/react.createElement("div", {
      key: "loading"
    }, spinElement), /*#__PURE__*/react.createElement("div", {
      className: containerClassName,
      key: "container"
    }, children));
  }
  return spinElement;
};
const SpinFC = props => {
  const {
    prefixCls: customizePrefixCls
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const spinPrefixCls = getPrefixCls('spin', customizePrefixCls);
  const [wrapSSR, hashId] = spin_style(spinPrefixCls);
  const spinClassProps = Object.assign(Object.assign({}, props), {
    spinPrefixCls,
    hashId
  });
  return wrapSSR( /*#__PURE__*/react.createElement(Spin, Object.assign({}, spinClassProps)));
};
SpinFC.setDefaultIndicator = indicator => {
  defaultIndicator = indicator;
};
if (false) {}
/* harmony default export */ var spin = (SpinFC);

/***/ }),

/***/ 93669:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-grid-gallery@1.0.0/node_modules/react-grid-gallery/dist/react-grid-gallery.umd.js ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports, __webpack_require__(/*! react */ 93236)) :
    0;
})(this, (function (exports, require$$0) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    var jsxRuntime = {exports: {}};

    var reactJsxRuntime_production_min = {};

    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var hasRequiredReactJsxRuntime_production_min;

    function requireReactJsxRuntime_production_min () {
    	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
    	hasRequiredReactJsxRuntime_production_min = 1;
    var f=require$$0__default["default"],k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
    	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
    	return reactJsxRuntime_production_min;
    }

    (function (module) {

    	{
    	  module.exports = requireReactJsxRuntime_production_min();
    	}
    } (jsxRuntime));

    var getStyle = function (styleProp, fallback, context) {
        if (typeof styleProp === "function") {
            return styleProp(context);
        }
        if (typeof styleProp === "object") {
            return styleProp;
        }
        return fallback(context);
    };
    var rotationTransformMap = {
        3: "rotate(180deg)",
        2: "rotateY(180deg)",
        4: "rotate(180deg) rotateY(180deg)",
        5: "rotate(270deg) rotateY(180deg)",
        6: "rotate(90deg)",
        7: "rotate(90deg) rotateY(180deg)",
        8: "rotate(270deg)",
    };
    var SELECTION_MARGIN = 16;
    var gallery = {
        display: "flex",
        flexWrap: "wrap",
    };
    var thumbnail = function (_a) {
        var item = _a.item;
        var rotationTransformValue = rotationTransformMap[item.orientation];
        var style = {
            cursor: "pointer",
            maxWidth: "none",
            width: item.scaledWidth,
            height: item.scaledHeight,
            marginLeft: item.marginLeft,
            marginTop: 0,
            transform: rotationTransformValue,
        };
        if (item.isSelected) {
            var ratio = item.scaledWidth / item.scaledHeight;
            var viewportHeight = item.scaledHeight - SELECTION_MARGIN * 2;
            var viewportWidth = item.viewportWidth - SELECTION_MARGIN * 2;
            var height = void 0, width = void 0;
            if (item.scaledWidth > item.scaledHeight) {
                width = item.scaledWidth - SELECTION_MARGIN * 2;
                height = Math.floor(width / ratio);
            }
            else {
                height = item.scaledHeight - SELECTION_MARGIN * 2;
                width = Math.floor(height * ratio);
            }
            var marginTop = Math.abs(Math.floor((viewportHeight - height) / 2));
            var marginLeft = Math.abs(Math.floor((viewportWidth - width) / 2));
            style.width = width;
            style.height = height;
            style.marginLeft = marginLeft === 0 ? 0 : -marginLeft;
            style.marginTop = marginTop === 0 ? 0 : -marginTop;
        }
        return style;
    };
    var tileViewport = function (_a) {
        var item = _a.item;
        var styles = {
            width: item.viewportWidth,
            height: item.scaledHeight,
            overflow: "hidden",
        };
        if (item.nano) {
            styles.background = "url(".concat(item.nano, ")");
            styles.backgroundSize = "cover";
            styles.backgroundPosition = "center center";
        }
        if (item.isSelected) {
            styles.width = item.viewportWidth - SELECTION_MARGIN * 2;
            styles.height = item.scaledHeight - SELECTION_MARGIN * 2;
            styles.margin = SELECTION_MARGIN;
        }
        return styles;
    };
    var customOverlay = function (_a) {
        var hover = _a.hover;
        return ({
            pointerEvents: "none",
            opacity: hover ? 1 : 0,
            position: "absolute",
            height: "100%",
            width: "100%",
        });
    };
    var galleryItem = function (_a) {
        var margin = _a.margin;
        return ({
            margin: margin,
            WebkitUserSelect: "none",
            position: "relative",
            background: "#eee",
            padding: "0px",
        });
    };
    var tileOverlay = function (_a) {
        var showOverlay = _a.showOverlay;
        return ({
            pointerEvents: "none",
            opacity: 1,
            position: "absolute",
            height: "100%",
            width: "100%",
            background: showOverlay
                ? "linear-gradient(to bottom,rgba(0,0,0,0.26),transparent 56px,transparent)"
                : "none",
        });
    };
    var tileIconBar = {
        pointerEvents: "none",
        opacity: 1,
        position: "absolute",
        height: "36px",
        width: "100%",
    };
    var tileDescription = {
        background: "white",
        width: "100%",
        margin: 0,
        userSelect: "text",
        WebkitUserSelect: "text",
        MozUserSelect: "text",
        overflow: "hidden",
    };
    var bottomBar = {
        padding: "2px",
        pointerEvents: "none",
        position: "absolute",
        minHeight: "0px",
        maxHeight: "160px",
        width: "100%",
        bottom: "0px",
        overflow: "hidden",
    };
    var tagItemBlock = {
        display: "inline-block",
        cursor: "pointer",
        pointerEvents: "visible",
        margin: "2px",
    };
    var tagItem = function () { return ({
        display: "inline",
        padding: ".2em .6em .3em",
        fontSize: "75%",
        fontWeight: "600",
        lineHeight: "1",
        color: "yellow",
        background: "rgba(0,0,0,0.65)",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "baseline",
        borderRadius: ".25em",
    }); };
    var checkButton = function (_a) {
        var isVisible = _a.isVisible;
        return ({
            visibility: isVisible ? "visible" : "hidden",
            background: "none",
            float: "left",
            width: 36,
            height: 36,
            border: "none",
            padding: 6,
            cursor: "pointer",
            pointerEvents: "visible",
        });
    };

    var CheckButton = function (props) {
        var isSelected = props.isSelected, isVisible = props.isVisible, onClick = props.onClick;
        var selectedColor = props.selectedColor, hoverColor = props.hoverColor, color = props.color;
        var _a = require$$0.useState(false), hover = _a[0], setHover = _a[1];
        var circleStyle = { display: isSelected ? "block" : "none" };
        var fillColor = isSelected ? selectedColor : hover ? hoverColor : color;
        var handleMouseOver = function () { return setHover(true); };
        var handleMouseOut = function () { return setHover(false); };
        return (jsxRuntime.exports.jsx("div", __assign({ "data-testid": "grid-gallery-item_check-button", title: "Select", style: checkButton({ isVisible: isVisible }), onClick: onClick, onMouseOver: handleMouseOver, onMouseOut: handleMouseOut }, { children: jsxRuntime.exports.jsxs("svg", __assign({ fill: fillColor, height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" }, { children: [jsxRuntime.exports.jsxs("radialGradient", __assign({ id: "shadow", cx: "38", cy: "95.488", r: "10.488", gradientTransform: "matrix(1 0 0 -1 -26 109)", gradientUnits: "userSpaceOnUse" }, { children: [jsxRuntime.exports.jsx("stop", { offset: ".832", stopColor: "#010101" }), jsxRuntime.exports.jsx("stop", { offset: "1", stopColor: "#010101", stopOpacity: "0" })] })), jsxRuntime.exports.jsx("circle", { style: circleStyle, opacity: ".26", fill: "url(#shadow)", cx: "12", cy: "13.512", r: "10.488" }), jsxRuntime.exports.jsx("circle", { style: circleStyle, fill: "#FFF", cx: "12", cy: "12.2", r: "8.292" }), jsxRuntime.exports.jsx("path", { d: "M0 0h24v24H0z", fill: "none" }), jsxRuntime.exports.jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })] })) })));
    };
    CheckButton.defaultProps = {
        isSelected: false,
        isVisible: true,
        color: "#FFFFFFB2",
        selectedColor: "#4285F4FF",
        hoverColor: "#FFFFFFFF",
    };

    var Image = function (props) {
        var item = props.item, ThumbnailImageComponent = props.thumbnailImageComponent;
        var styleContext = { item: item };
        var _a = require$$0.useState(false), hover = _a[0], setHover = _a[1];
        var thumbnailProps = {
            key: props.index,
            "data-testid": "grid-gallery-item_thumbnail",
            src: item.src,
            alt: item.alt ? item.alt : "",
            title: typeof item.caption === "string" ? item.caption : null,
            style: getStyle(props.thumbnailStyle, thumbnail, styleContext),
        };
        var handleCheckButtonClick = function (event) {
            if (!props.isSelectable) {
                return;
            }
            props.onSelect(props.index, event);
        };
        var handleViewportClick = function (event) {
            props.onClick(props.index, event);
        };
        return (jsxRuntime.exports.jsxs("div", __assign({ className: "ReactGridGallery_tile", "data-testid": "grid-gallery-item", onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, style: galleryItem({ margin: props.margin }) }, { children: [jsxRuntime.exports.jsx("div", __assign({ className: "ReactGridGallery_tile-icon-bar", style: tileIconBar }, { children: jsxRuntime.exports.jsx(CheckButton, { isSelected: item.isSelected, isVisible: item.isSelected || (props.isSelectable && hover), onClick: handleCheckButtonClick }) })), !!item.tags && (jsxRuntime.exports.jsx("div", __assign({ className: "ReactGridGallery_tile-bottom-bar", style: bottomBar }, { children: item.tags.map(function (tag, index) { return (jsxRuntime.exports.jsx("div", __assign({ title: tag.title, style: tagItemBlock }, { children: jsxRuntime.exports.jsx("span", __assign({ style: getStyle(props.tagStyle, tagItem, styleContext) }, { children: tag.value })) }), tag.key || index)); }) }))), !!item.customOverlay && (jsxRuntime.exports.jsx("div", __assign({ className: "ReactGridGallery_custom-overlay", style: customOverlay({ hover: hover }) }, { children: item.customOverlay }))), jsxRuntime.exports.jsx("div", { className: "ReactGridGallery_tile-overlay", style: tileOverlay({
                        showOverlay: hover && !item.isSelected && props.isSelectable,
                    }) }), jsxRuntime.exports.jsx("div", __assign({ className: "ReactGridGallery_tile-viewport", "data-testid": "grid-gallery-item_viewport", style: getStyle(props.tileViewportStyle, tileViewport, styleContext), onClick: handleViewportClick }, { children: ThumbnailImageComponent ? (jsxRuntime.exports.jsx(ThumbnailImageComponent, __assign({}, props, { imageProps: thumbnailProps }))) : (jsxRuntime.exports.jsx("img", __assign({}, thumbnailProps))) })), item.thumbnailCaption && (jsxRuntime.exports.jsx("div", __assign({ className: "ReactGridGallery_tile-description", style: tileDescription }, { children: item.thumbnailCaption })))] })));
    };
    Image.defaultProps = {
        isSelectable: true,
    };

    var objectStyles = {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        pointerEvents: "none",
        zIndex: -1,
        opacity: 0,
    };
    var ResizeListener = function (_a) {
        var onResize = _a.onResize;
        var objectRef = require$$0.useRef(null);
        var onResizeRef = require$$0.useRef(onResize);
        onResizeRef.current = onResize;
        var _onResize = require$$0.useCallback(function () {
            onResizeRef.current();
        }, []);
        var handleLoad = require$$0.useCallback(function () {
            var obj = objectRef.current;
            if (obj && obj.contentDocument && obj.contentDocument.defaultView) {
                obj.contentDocument.defaultView.addEventListener("resize", _onResize);
            }
        }, []);
        require$$0.useEffect(function () {
            return function () {
                var obj = objectRef.current;
                if (obj && obj.contentDocument && obj.contentDocument.defaultView) {
                    obj.contentDocument.defaultView.removeEventListener("resize", _onResize);
                }
            };
        }, []);
        return (jsxRuntime.exports.jsx("object", { onLoad: handleLoad, ref: objectRef, tabIndex: -1, type: "text/html", data: "about:blank", title: "", style: objectStyles }));
    };

    var calculateCutOff = function (items, totalRowWidth, protrudingWidth) {
        var cutOff = [];
        var cutSum = 0;
        for (var i in items) {
            var item = items[i];
            var fractionOfWidth = item.scaledWidth / totalRowWidth;
            cutOff[i] = Math.floor(fractionOfWidth * protrudingWidth);
            cutSum += cutOff[i];
        }
        var stillToCutOff = protrudingWidth - cutSum;
        while (stillToCutOff > 0) {
            for (var i in cutOff) {
                cutOff[i]++;
                stillToCutOff--;
                if (stillToCutOff < 0)
                    break;
            }
        }
        return cutOff;
    };
    var getRow = function (images, _a) {
        var containerWidth = _a.containerWidth, rowHeight = _a.rowHeight, margin = _a.margin;
        var row = [];
        var imgMargin = 2 * margin;
        var items = __spreadArray([], images, true);
        var totalRowWidth = 0;
        while (items.length > 0 && totalRowWidth < containerWidth) {
            var item = items.shift();
            var scaledWidth = Math.floor(rowHeight * (item.width / item.height));
            var extendedItem = __assign(__assign({}, item), { scaledHeight: rowHeight, scaledWidth: scaledWidth, viewportWidth: scaledWidth, marginLeft: 0 });
            row.push(extendedItem);
            totalRowWidth += extendedItem.scaledWidth + imgMargin;
        }
        var protrudingWidth = totalRowWidth - containerWidth;
        if (row.length > 0 && protrudingWidth > 0) {
            var cutoff = calculateCutOff(row, totalRowWidth, protrudingWidth);
            for (var i in row) {
                var pixelsToRemove = cutoff[i];
                var item = row[i];
                item.marginLeft = -Math.abs(Math.floor(pixelsToRemove / 2));
                item.viewportWidth = item.scaledWidth - pixelsToRemove;
            }
        }
        return [row, items];
    };
    var getRows = function (images, options, rows) {
        if (rows === void 0) { rows = []; }
        var _a = getRow(images, options), row = _a[0], imagesLeft = _a[1];
        var nextRows = __spreadArray(__spreadArray([], rows, true), [row], false);
        if (options.maxRows && nextRows.length >= options.maxRows) {
            return nextRows;
        }
        if (imagesLeft.length) {
            return getRows(imagesLeft, options, nextRows);
        }
        return nextRows;
    };
    var buildLayout = function (images, _a) {
        var containerWidth = _a.containerWidth, maxRows = _a.maxRows, rowHeight = _a.rowHeight, margin = _a.margin;
        rowHeight = typeof rowHeight === "undefined" ? 180 : rowHeight;
        margin = typeof margin === "undefined" ? 2 : margin;
        if (!images)
            return [];
        if (!containerWidth)
            return [];
        var options = { containerWidth: containerWidth, maxRows: maxRows, rowHeight: rowHeight, margin: margin };
        return getRows(images, options);
    };
    var buildLayoutFlat = function (images, options) {
        var rows = buildLayout(images, options);
        return [].concat.apply([], rows);
    };

    var Gallery = function (props) {
        var galleryRef = require$$0.useRef(null);
        var maxRows = props.maxRows, rowHeight = props.rowHeight, margin = props.margin, enableImageSelection = props.enableImageSelection;
        var defaultContainerWidth = props.defaultContainerWidth, images = props.images;
        var _a = require$$0.useState(defaultContainerWidth), containerWidth = _a[0], setContainerWidth = _a[1];
        var handleResize = require$$0.useCallback(function () {
            if (!galleryRef.current) {
                return;
            }
            var width = galleryRef.current.clientWidth;
            try {
                width = galleryRef.current.getBoundingClientRect().width;
            }
            catch (err) { }
            setContainerWidth(Math.floor(width));
        }, []);
        require$$0.useEffect(function () {
            handleResize();
        }, []);
        var thumbnails = buildLayoutFlat(images, {
            containerWidth: containerWidth,
            maxRows: maxRows,
            rowHeight: rowHeight,
            margin: margin,
        });
        var handleSelect = function (index, event) {
            event.preventDefault();
            props.onSelect(index, images[index], event);
        };
        var handleClick = function (index, event) {
            props.onClick(index, images[index], event);
        };
        return (jsxRuntime.exports.jsxs("div", __assign({ id: props.id, className: "ReactGridGallery", ref: galleryRef }, { children: [jsxRuntime.exports.jsx(ResizeListener, { onResize: handleResize }), jsxRuntime.exports.jsx("div", __assign({ style: gallery }, { children: thumbnails.map(function (item, index) { return (jsxRuntime.exports.jsx(Image, { item: item, index: index, margin: margin, height: rowHeight, isSelectable: enableImageSelection, onClick: handleClick, onSelect: handleSelect, tagStyle: props.tagStyle, tileViewportStyle: props.tileViewportStyle, thumbnailStyle: props.thumbnailStyle, thumbnailImageComponent: props.thumbnailImageComponent }, item.key || index)); }) }))] })));
    };
    Gallery.displayName = "Gallery";
    Gallery.defaultProps = {
        id: "ReactGridGallery",
        enableImageSelection: true,
        rowHeight: 180,
        margin: 2,
        defaultContainerWidth: 0,
        onClick: function () { },
        onSelect: function () { },
    };

    exports.CheckButton = CheckButton;
    exports.Gallery = Gallery;
    exports.buildLayout = buildLayout;
    exports.buildLayoutFlat = buildLayoutFlat;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=react-grid-gallery.umd.js.map


/***/ }),

/***/ 55282:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-infinite-scroll-component@6.1.0/node_modules/react-infinite-scroll-component/dist/index.es.js ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 93236);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */
function throttle (delay, noTrailing, callback, debounceMode) {
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  } // `noTrailing` defaults to falsy.


  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    var self = this;
    var elapsed = Date.now() - lastExec;
    var args = arguments;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, args);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      /*
       * In throttle mode, if `delay` time has been exceeded, execute
       * `callback`.
       */
      exec();
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

var ThresholdUnits = {
    Pixel: 'Pixel',
    Percent: 'Percent',
};
var defaultThreshold = {
    unit: ThresholdUnits.Percent,
    value: 0.8,
};
function parseThreshold(scrollThreshold) {
    if (typeof scrollThreshold === 'number') {
        return {
            unit: ThresholdUnits.Percent,
            value: scrollThreshold * 100,
        };
    }
    if (typeof scrollThreshold === 'string') {
        if (scrollThreshold.match(/^(\d*(\.\d+)?)px$/)) {
            return {
                unit: ThresholdUnits.Pixel,
                value: parseFloat(scrollThreshold),
            };
        }
        if (scrollThreshold.match(/^(\d*(\.\d+)?)%$/)) {
            return {
                unit: ThresholdUnits.Percent,
                value: parseFloat(scrollThreshold),
            };
        }
        console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...');
        return defaultThreshold;
    }
    console.warn('scrollThreshold should be string or number');
    return defaultThreshold;
}

var InfiniteScroll = /** @class */ (function (_super) {
    __extends(InfiniteScroll, _super);
    function InfiniteScroll(props) {
        var _this = _super.call(this, props) || this;
        _this.lastScrollTop = 0;
        _this.actionTriggered = false;
        // variables to keep track of pull down behaviour
        _this.startY = 0;
        _this.currentY = 0;
        _this.dragging = false;
        // will be populated in componentDidMount
        // based on the height of the pull down element
        _this.maxPullDownDistance = 0;
        _this.getScrollableTarget = function () {
            if (_this.props.scrollableTarget instanceof HTMLElement)
                return _this.props.scrollableTarget;
            if (typeof _this.props.scrollableTarget === 'string') {
                return document.getElementById(_this.props.scrollableTarget);
            }
            if (_this.props.scrollableTarget === null) {
                console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      ");
            }
            return null;
        };
        _this.onStart = function (evt) {
            if (_this.lastScrollTop)
                return;
            _this.dragging = true;
            if (evt instanceof MouseEvent) {
                _this.startY = evt.pageY;
            }
            else if (evt instanceof TouchEvent) {
                _this.startY = evt.touches[0].pageY;
            }
            _this.currentY = _this.startY;
            if (_this._infScroll) {
                _this._infScroll.style.willChange = 'transform';
                _this._infScroll.style.transition = "transform 0.2s cubic-bezier(0,0,0.31,1)";
            }
        };
        _this.onMove = function (evt) {
            if (!_this.dragging)
                return;
            if (evt instanceof MouseEvent) {
                _this.currentY = evt.pageY;
            }
            else if (evt instanceof TouchEvent) {
                _this.currentY = evt.touches[0].pageY;
            }
            // user is scrolling down to up
            if (_this.currentY < _this.startY)
                return;
            if (_this.currentY - _this.startY >=
                Number(_this.props.pullDownToRefreshThreshold)) {
                _this.setState({
                    pullToRefreshThresholdBreached: true,
                });
            }
            // so you can drag upto 1.5 times of the maxPullDownDistance
            if (_this.currentY - _this.startY > _this.maxPullDownDistance * 1.5)
                return;
            if (_this._infScroll) {
                _this._infScroll.style.overflow = 'visible';
                _this._infScroll.style.transform = "translate3d(0px, " + (_this.currentY -
                    _this.startY) + "px, 0px)";
            }
        };
        _this.onEnd = function () {
            _this.startY = 0;
            _this.currentY = 0;
            _this.dragging = false;
            if (_this.state.pullToRefreshThresholdBreached) {
                _this.props.refreshFunction && _this.props.refreshFunction();
                _this.setState({
                    pullToRefreshThresholdBreached: false,
                });
            }
            requestAnimationFrame(function () {
                // this._infScroll
                if (_this._infScroll) {
                    _this._infScroll.style.overflow = 'auto';
                    _this._infScroll.style.transform = 'none';
                    _this._infScroll.style.willChange = 'unset';
                }
            });
        };
        _this.onScrollListener = function (event) {
            if (typeof _this.props.onScroll === 'function') {
                // Execute this callback in next tick so that it does not affect the
                // functionality of the library.
                setTimeout(function () { return _this.props.onScroll && _this.props.onScroll(event); }, 0);
            }
            var target = _this.props.height || _this._scrollableNode
                ? event.target
                : document.documentElement.scrollTop
                    ? document.documentElement
                    : document.body;
            // return immediately if the action has already been triggered,
            // prevents multiple triggers.
            if (_this.actionTriggered)
                return;
            var atBottom = _this.props.inverse
                ? _this.isElementAtTop(target, _this.props.scrollThreshold)
                : _this.isElementAtBottom(target, _this.props.scrollThreshold);
            // call the `next` function in the props to trigger the next data fetch
            if (atBottom && _this.props.hasMore) {
                _this.actionTriggered = true;
                _this.setState({ showLoader: true });
                _this.props.next && _this.props.next();
            }
            _this.lastScrollTop = target.scrollTop;
        };
        _this.state = {
            showLoader: false,
            pullToRefreshThresholdBreached: false,
            prevDataLength: props.dataLength,
        };
        _this.throttledOnScrollListener = throttle(150, _this.onScrollListener).bind(_this);
        _this.onStart = _this.onStart.bind(_this);
        _this.onMove = _this.onMove.bind(_this);
        _this.onEnd = _this.onEnd.bind(_this);
        return _this;
    }
    InfiniteScroll.prototype.componentDidMount = function () {
        if (typeof this.props.dataLength === 'undefined') {
            throw new Error("mandatory prop \"dataLength\" is missing. The prop is needed" +
                " when loading more content. Check README.md for usage");
        }
        this._scrollableNode = this.getScrollableTarget();
        this.el = this.props.height
            ? this._infScroll
            : this._scrollableNode || window;
        if (this.el) {
            this.el.addEventListener('scroll', this
                .throttledOnScrollListener);
        }
        if (typeof this.props.initialScrollY === 'number' &&
            this.el &&
            this.el instanceof HTMLElement &&
            this.el.scrollHeight > this.props.initialScrollY) {
            this.el.scrollTo(0, this.props.initialScrollY);
        }
        if (this.props.pullDownToRefresh && this.el) {
            this.el.addEventListener('touchstart', this.onStart);
            this.el.addEventListener('touchmove', this.onMove);
            this.el.addEventListener('touchend', this.onEnd);
            this.el.addEventListener('mousedown', this.onStart);
            this.el.addEventListener('mousemove', this.onMove);
            this.el.addEventListener('mouseup', this.onEnd);
            // get BCR of pullDown element to position it above
            this.maxPullDownDistance =
                (this._pullDown &&
                    this._pullDown.firstChild &&
                    this._pullDown.firstChild.getBoundingClientRect()
                        .height) ||
                    0;
            this.forceUpdate();
            if (typeof this.props.refreshFunction !== 'function') {
                throw new Error("Mandatory prop \"refreshFunction\" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage'");
            }
        }
    };
    InfiniteScroll.prototype.componentWillUnmount = function () {
        if (this.el) {
            this.el.removeEventListener('scroll', this
                .throttledOnScrollListener);
            if (this.props.pullDownToRefresh) {
                this.el.removeEventListener('touchstart', this.onStart);
                this.el.removeEventListener('touchmove', this.onMove);
                this.el.removeEventListener('touchend', this.onEnd);
                this.el.removeEventListener('mousedown', this.onStart);
                this.el.removeEventListener('mousemove', this.onMove);
                this.el.removeEventListener('mouseup', this.onEnd);
            }
        }
    };
    InfiniteScroll.prototype.componentDidUpdate = function (prevProps) {
        // do nothing when dataLength is unchanged
        if (this.props.dataLength === prevProps.dataLength)
            return;
        this.actionTriggered = false;
        // update state when new data was sent in
        this.setState({
            showLoader: false,
        });
    };
    InfiniteScroll.getDerivedStateFromProps = function (nextProps, prevState) {
        var dataLengthChanged = nextProps.dataLength !== prevState.prevDataLength;
        // reset when data changes
        if (dataLengthChanged) {
            return __assign(__assign({}, prevState), { prevDataLength: nextProps.dataLength });
        }
        return null;
    };
    InfiniteScroll.prototype.isElementAtTop = function (target, scrollThreshold) {
        if (scrollThreshold === void 0) { scrollThreshold = 0.8; }
        var clientHeight = target === document.body || target === document.documentElement
            ? window.screen.availHeight
            : target.clientHeight;
        var threshold = parseThreshold(scrollThreshold);
        if (threshold.unit === ThresholdUnits.Pixel) {
            return (target.scrollTop <=
                threshold.value + clientHeight - target.scrollHeight + 1);
        }
        return (target.scrollTop <=
            threshold.value / 100 + clientHeight - target.scrollHeight + 1);
    };
    InfiniteScroll.prototype.isElementAtBottom = function (target, scrollThreshold) {
        if (scrollThreshold === void 0) { scrollThreshold = 0.8; }
        var clientHeight = target === document.body || target === document.documentElement
            ? window.screen.availHeight
            : target.clientHeight;
        var threshold = parseThreshold(scrollThreshold);
        if (threshold.unit === ThresholdUnits.Pixel) {
            return (target.scrollTop + clientHeight >= target.scrollHeight - threshold.value);
        }
        return (target.scrollTop + clientHeight >=
            (threshold.value / 100) * target.scrollHeight);
    };
    InfiniteScroll.prototype.render = function () {
        var _this = this;
        var style = __assign({ height: this.props.height || 'auto', overflow: 'auto', WebkitOverflowScrolling: 'touch' }, this.props.style);
        var hasChildren = this.props.hasChildren ||
            !!(this.props.children &&
                this.props.children instanceof Array &&
                this.props.children.length);
        // because heighted infiniteScroll visualy breaks
        // on drag down as overflow becomes visible
        var outerDivStyle = this.props.pullDownToRefresh && this.props.height
            ? { overflow: 'auto' }
            : {};
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: outerDivStyle, className: "infinite-scroll-component__outerdiv" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "infinite-scroll-component " + (this.props.className || ''), ref: function (infScroll) { return (_this._infScroll = infScroll); }, style: style },
                this.props.pullDownToRefresh && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { position: 'relative' }, ref: function (pullDown) { return (_this._pullDown = pullDown); } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: -1 * this.maxPullDownDistance,
                        } }, this.state.pullToRefreshThresholdBreached
                        ? this.props.releaseToRefreshContent
                        : this.props.pullDownToRefreshContent))),
                this.props.children,
                !this.state.showLoader &&
                    !hasChildren &&
                    this.props.hasMore &&
                    this.props.loader,
                this.state.showLoader && this.props.hasMore && this.props.loader,
                !this.props.hasMore && this.props.endMessage)));
    };
    return InfiniteScroll;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

/* harmony default export */ __webpack_exports__["Z"] = (InfiniteScroll);
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ 19025:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/yet-another-react-lightbox@3.11.3/node_modules/yet-another-react-lightbox/dist/index.js ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$0": function() { return /* binding */ useEventCallback; },
/* harmony export */   "Eq": function() { return /* binding */ cleanup; },
/* harmony export */   "Fy": function() { return /* binding */ makeUseContext; },
/* harmony export */   "KL": function() { return /* binding */ devicePixelRatio; },
/* harmony export */   "NM": function() { return /* binding */ round; },
/* harmony export */   "Nc": function() { return /* binding */ cssClass; },
/* harmony export */   "OL": function() { return /* binding */ useMotionPreference; },
/* harmony export */   "P0": function() { return /* binding */ ImageSlide; },
/* harmony export */   "QB": function() { return /* binding */ isImageSlide; },
/* harmony export */   "RD": function() { return /* binding */ useLightboxProps; },
/* harmony export */   "TX": function() { return /* binding */ createIconDisabled; },
/* harmony export */   "U2": function() { return /* binding */ createIcon; },
/* harmony export */   "VI": function() { return /* binding */ isImageFitCover; },
/* harmony export */   "Wy": function() { return /* binding */ clsx; },
/* harmony export */   "ZP": function() { return /* binding */ Lightbox; },
/* harmony export */   "aU": function() { return /* binding */ useTimeouts; },
/* harmony export */   "bQ": function() { return /* binding */ usePointerEvents; },
/* harmony export */   "bc": function() { return /* binding */ useController; },
/* harmony export */   "bt": function() { return /* binding */ useLayoutEffect; },
/* harmony export */   "d8": function() { return /* binding */ useLoseFocus; },
/* harmony export */   "gJ": function() { return /* binding */ cssVar; },
/* harmony export */   "hI": function() { return /* binding */ useEvents; },
/* harmony export */   "hU": function() { return /* binding */ IconButton; },
/* harmony export */   "l6": function() { return /* binding */ createModule; },
/* harmony export */   "oc": function() { return /* binding */ useLightboxState; },
/* harmony export */   "wQ": function() { return /* binding */ addToolbarButton; }
/* harmony export */ });
/* unused harmony exports Carousel, CarouselModule, CloseIcon, Controller, ControllerContext, ControllerModule, ErrorIcon, EventsContext, EventsProvider, Lightbox, LightboxDefaultProps, LightboxDispatchContext, LightboxPropsContext, LightboxPropsProvider, LightboxStateContext, LightboxStateProvider, LoadingIcon, Navigation, NavigationButton, NavigationModule, NextIcon, NoScroll, NoScrollModule, Portal, PortalModule, PreviousIcon, Root, RootModule, SwipeState, TimeoutsContext, TimeoutsProvider, Toolbar, ToolbarModule, composePrefix, computeSlideRect, createNode, getSlide, getSlideIfPresent, getSlideIndex, hasSlides, hasWindow, label, makeComposePrefix, parseLengthPercentage, setRef, stopNavigationEventsPropagation, useAnimation, useContainerRect, useDelay, useForkRef, useLightboxDispatch, usePointerSwipe, usePreventSwipeNavigation, useRTL, useSensors, useThrottle, useWheelSwipe, withPlugins */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 93236);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ 70270);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 19103);
'use client';





const LightboxDefaultProps = {
    open: false,
    close: () => { },
    index: 0,
    slides: [],
    render: {},
    plugins: [],
    toolbar: { buttons: [_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_CLOSE */ .t9] },
    labels: {},
    animation: {
        fade: 250,
        swipe: 500,
        easing: {
            fade: "ease",
            swipe: "ease-out",
            navigation: "ease-in-out",
        },
    },
    carousel: {
        finite: false,
        preload: 2,
        padding: "16px",
        spacing: "30%",
        imageFit: _types_js__WEBPACK_IMPORTED_MODULE_2__/* .IMAGE_FIT_CONTAIN */ .j3,
        imageProps: {},
    },
    controller: {
        ref: null,
        focus: true,
        aria: false,
        touchAction: "none",
        closeOnPullDown: false,
        closeOnBackdropClick: false,
    },
    portal: {},
    on: {},
    styles: {},
    className: "",
};

function createModule(name, component) {
    return { name, component };
}
function createNode(module, children) {
    return { module, children };
}
function traverseNode(node, target, apply) {
    if (node.module.name === target) {
        return apply(node);
    }
    if (node.children) {
        return [
            createNode(node.module, node.children.flatMap((n) => { var _a; return (_a = traverseNode(n, target, apply)) !== null && _a !== void 0 ? _a : []; })),
        ];
    }
    return [node];
}
function traverse(nodes, target, apply) {
    return nodes.flatMap((node) => { var _a; return (_a = traverseNode(node, target, apply)) !== null && _a !== void 0 ? _a : []; });
}
function withPlugins(root, plugins = [], augmentations = []) {
    let config = root;
    const contains = (target) => {
        const nodes = [...config];
        while (nodes.length > 0) {
            const node = nodes.pop();
            if ((node === null || node === void 0 ? void 0 : node.module.name) === target)
                return true;
            if (node === null || node === void 0 ? void 0 : node.children)
                nodes.push(...node.children);
        }
        return false;
    };
    const addParent = (target, module) => {
        if (target === "") {
            config = [createNode(module, config)];
            return;
        }
        config = traverse(config, target, (node) => [createNode(module, [node])]);
    };
    const append = (target, module) => {
        config = traverse(config, target, (node) => [createNode(node.module, [createNode(module, node.children)])]);
    };
    const addChild = (target, module, precede) => {
        config = traverse(config, target, (node) => {
            var _a;
            return [
                createNode(node.module, [
                    ...(precede ? [createNode(module)] : []),
                    ...((_a = node.children) !== null && _a !== void 0 ? _a : []),
                    ...(!precede ? [createNode(module)] : []),
                ]),
            ];
        });
    };
    const addSibling = (target, module, precede) => {
        config = traverse(config, target, (node) => [
            ...(precede ? [createNode(module)] : []),
            node,
            ...(!precede ? [createNode(module)] : []),
        ]);
    };
    const addModule = (module) => {
        append(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_CONTROLLER */ .l4, module);
    };
    const replace = (target, module) => {
        config = traverse(config, target, (node) => [createNode(module, node.children)]);
    };
    const remove = (target) => {
        config = traverse(config, target, (node) => node.children);
    };
    const augment = (augmentation) => {
        augmentations.push(augmentation);
    };
    plugins.forEach((plugin) => {
        plugin({
            contains,
            addParent,
            append,
            addChild,
            addSibling,
            addModule,
            replace,
            remove,
            augment,
        });
    });
    return {
        config,
        augmentation: (props) => augmentations.reduce((acc, augmentation) => augmentation(acc), props),
    };
}

const clsx = (...classes) => [...classes].filter((cls) => Boolean(cls)).join(" ");
const cssPrefix$3 = "yarl__";
const cssClass = (name) => `${cssPrefix$3}${name}`;
const cssVar = (name) => `--${cssPrefix$3}${name}`;
const composePrefix = (base, prefix) => `${base}${prefix ? `_${prefix}` : ""}`;
const makeComposePrefix = (base) => (prefix) => composePrefix(base, prefix);
const label = (labels, lbl) => (labels && labels[lbl] ? labels[lbl] : lbl);
const cleanup = (...cleaners) => () => {
    cleaners.forEach((cleaner) => {
        cleaner();
    });
};
const makeUseContext = (name, contextName, context) => () => {
    const ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(context);
    if (!ctx) {
        throw new Error(`${name} must be used within a ${contextName}.Provider`);
    }
    return ctx;
};
const hasWindow = () => typeof window !== "undefined";
function round(value, decimals = 0) {
    const factor = 10 ** decimals;
    return Math.round((value + Number.EPSILON) * factor) / factor;
}
const isImageSlide = (slide) => slide.type === undefined || slide.type === "image";
const isImageFitCover = (image, imageFit) => image.imageFit === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .IMAGE_FIT_COVER */ .rO || (image.imageFit !== _types_js__WEBPACK_IMPORTED_MODULE_2__/* .IMAGE_FIT_CONTAIN */ .j3 && imageFit === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .IMAGE_FIT_COVER */ .rO);
function parseLengthPercentage(input) {
    if (typeof input === "number") {
        return { pixel: input };
    }
    if (typeof input === "string") {
        const value = parseInt(input, 10);
        return input.endsWith("%") ? { percent: value } : { pixel: value };
    }
    return { pixel: 0 };
}
function computeSlideRect(containerRect, padding) {
    const paddingValue = parseLengthPercentage(padding);
    const paddingPixels = paddingValue.percent !== undefined ? (containerRect.width / 100) * paddingValue.percent : paddingValue.pixel;
    return {
        width: Math.max(containerRect.width - 2 * paddingPixels, 0),
        height: Math.max(containerRect.height - 2 * paddingPixels, 0),
    };
}
const devicePixelRatio = () => (hasWindow() ? window === null || window === void 0 ? void 0 : window.devicePixelRatio : undefined) || 1;
const getSlideIndex = (index, slidesCount) => slidesCount > 0 ? ((index % slidesCount) + slidesCount) % slidesCount : 0;
const hasSlides = (slides) => slides.length > 0;
const getSlide = (slides, index) => slides[getSlideIndex(index, slides.length)];
const getSlideIfPresent = (slides, index) => hasSlides(slides) ? getSlide(slides, index) : undefined;
function addToolbarButton(toolbar, key, button) {
    if (!button)
        return toolbar;
    const { buttons, ...restToolbar } = toolbar;
    const index = buttons.findIndex((item) => item === key);
    const buttonWithKey = react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(button) ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(button, { key }, null) : button;
    if (index >= 0) {
        const result = [...buttons];
        result.splice(index, 1, buttonWithKey);
        return { buttons: result, ...restToolbar };
    }
    return { buttons: [buttonWithKey, ...buttons], ...restToolbar };
}
function stopNavigationEventsPropagation() {
    const stopPropagation = (event) => {
        event.stopPropagation();
    };
    return { onPointerDown: stopPropagation, onKeyDown: stopPropagation, onWheel: stopPropagation };
}

const EventsContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useEvents = makeUseContext("useEvents", "EventsContext", EventsContext);
function EventsProvider({ children }) {
    const [subscriptions] = react__WEBPACK_IMPORTED_MODULE_0__.useState({});
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => () => {
        Object.keys(subscriptions).forEach((topic) => delete subscriptions[topic]);
    }, [subscriptions]);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        const unsubscribe = (topic, callback) => {
            var _a;
            (_a = subscriptions[topic]) === null || _a === void 0 ? void 0 : _a.splice(0, subscriptions[topic].length, ...subscriptions[topic].filter((cb) => cb !== callback));
        };
        const subscribe = (topic, callback) => {
            if (!subscriptions[topic]) {
                subscriptions[topic] = [];
            }
            subscriptions[topic].push(callback);
            return () => unsubscribe(topic, callback);
        };
        const publish = (...[topic, event]) => {
            var _a;
            (_a = subscriptions[topic]) === null || _a === void 0 ? void 0 : _a.forEach((callback) => callback(event));
        };
        return { publish, subscribe, unsubscribe };
    }, [subscriptions]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(EventsContext.Provider, { value: context }, children);
}

const LightboxPropsContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useLightboxProps = makeUseContext("useLightboxProps", "LightboxPropsContext", LightboxPropsContext);
function LightboxPropsProvider({ children, ...props }) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightboxPropsContext.Provider, { value: props }, children);
}

const LightboxStateContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useLightboxState = makeUseContext("useLightboxState", "LightboxStateContext", LightboxStateContext);
const LightboxDispatchContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useLightboxDispatch = makeUseContext("useLightboxDispatch", "LightboxDispatchContext", LightboxDispatchContext);
function reducer(state, action) {
    switch (action.type) {
        case "swipe": {
            const { slides } = state;
            const increment = (action === null || action === void 0 ? void 0 : action.increment) || 0;
            const globalIndex = state.globalIndex + increment;
            const currentIndex = getSlideIndex(globalIndex, slides.length);
            const currentSlide = getSlideIfPresent(slides, currentIndex);
            const animation = increment || action.duration
                ? {
                    increment,
                    duration: action.duration,
                    easing: action.easing,
                }
                : undefined;
            return { slides, currentIndex, globalIndex, currentSlide, animation };
        }
        case "update":
            return {
                slides: action.slides,
                currentIndex: action.index,
                globalIndex: action.index,
                currentSlide: getSlideIfPresent(action.slides, action.index),
            };
        default:
            throw new Error(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .UNKNOWN_ACTION_TYPE */ .c3);
    }
}
function LightboxStateProvider({ slides, index, children }) {
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__.useReducer(reducer, {
        slides,
        currentIndex: index,
        globalIndex: index,
        currentSlide: getSlideIfPresent(slides, index),
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        dispatch({ type: "update", slides, index });
    }, [slides, index]);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({ ...state, state, dispatch }), [state, dispatch]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightboxDispatchContext.Provider, { value: dispatch },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightboxStateContext.Provider, { value: context }, children)));
}

const TimeoutsContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useTimeouts = makeUseContext("useTimeouts", "TimeoutsContext", TimeoutsContext);
function TimeoutsProvider({ children }) {
    const [timeouts] = react__WEBPACK_IMPORTED_MODULE_0__.useState([]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => () => {
        timeouts.forEach((tid) => window.clearTimeout(tid));
        timeouts.splice(0, timeouts.length);
    }, [timeouts]);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        const removeTimeout = (id) => {
            timeouts.splice(0, timeouts.length, ...timeouts.filter((tid) => tid !== id));
        };
        const setTimeout = (fn, delay) => {
            const id = window.setTimeout(() => {
                removeTimeout(id);
                fn();
            }, delay);
            timeouts.push(id);
            return id;
        };
        const clearTimeout = (id) => {
            if (id !== undefined) {
                removeTimeout(id);
                window.clearTimeout(id);
            }
        };
        return { setTimeout, clearTimeout };
    }, [timeouts]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TimeoutsContext.Provider, { value: context }, children);
}

const IconButton = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function IconButton({ label: label$1, className, icon: Icon, renderIcon, onClick, style, ...rest }, ref) {
    const { styles, labels } = useLightboxProps();
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { ref: ref, type: "button", "aria-label": label(labels, label$1), className: clsx(cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ELEMENT_BUTTON */ .bg), className), onClick: onClick, style: { ...style, ...styles.button }, ...rest }, renderIcon ? renderIcon() : react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon, { className: cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ELEMENT_ICON */ .vg), style: styles.icon })));
});

function svgIcon(name, children) {
    const icon = (props) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", "aria-hidden": "true", focusable: "false", ...props }, children));
    icon.displayName = name;
    return icon;
}
function createIcon(name, glyph) {
    return svgIcon(name, react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", { fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        glyph));
}
function createIconDisabled(name, glyph) {
    return svgIcon(name, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("mask", { id: "strike" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M0 0h24v24H0z", fill: "white" }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M0 0L24 24", stroke: "black", strokeWidth: 4 }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M0.70707 2.121320L21.878680 23.292883", stroke: "currentColor", strokeWidth: 2 }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", { fill: "currentColor", mask: "url(#strike)" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
            glyph)));
}
const CloseIcon = createIcon("Close", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }));
const PreviousIcon = createIcon("Previous", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }));
const NextIcon = createIcon("Next", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }));
const LoadingIcon = createIcon("Loading", react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, Array.from({ length: 8 }).map((_, index, array) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { key: index, x1: "12", y1: "6.5", x2: "12", y2: "1.8", strokeLinecap: "round", strokeWidth: "2.6", stroke: "currentColor", strokeOpacity: (1 / array.length) * (index + 1), transform: `rotate(${(360 / array.length) * index}, 12, 12)` })))));
const ErrorIcon = createIcon("Error", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z" }));

const useLayoutEffect = hasWindow() ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

function useMotionPreference() {
    const [reduceMotion, setReduceMotion] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        var _a, _b;
        const mediaQuery = (_a = window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, "(prefers-reduced-motion: reduce)");
        setReduceMotion(mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.matches);
        const listener = (event) => setReduceMotion(event.matches);
        (_b = mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.addEventListener) === null || _b === void 0 ? void 0 : _b.call(mediaQuery, "change", listener);
        return () => { var _a; return (_a = mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.removeEventListener) === null || _a === void 0 ? void 0 : _a.call(mediaQuery, "change", listener); };
    }, []);
    return reduceMotion;
}

function currentTransformation(node) {
    let x = 0;
    let y = 0;
    let z = 0;
    const matrix = window.getComputedStyle(node).transform;
    const matcher = matrix.match(/matrix.*\((.+)\)/);
    if (matcher) {
        const values = matcher[1].split(",").map((str) => Number.parseInt(str, 10));
        if (values.length === 6) {
            x = values[4];
            y = values[5];
        }
        else if (values.length === 16) {
            x = values[12];
            y = values[13];
            z = values[14];
        }
    }
    return { x, y, z };
}
function useAnimation(nodeRef, computeAnimation) {
    const snapshot = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const animation = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const reduceMotion = useMotionPreference();
    useLayoutEffect(() => {
        var _a, _b, _c;
        if (nodeRef.current && snapshot.current !== undefined && !reduceMotion) {
            const { keyframes, duration, easing, onfinish } = computeAnimation(snapshot.current, nodeRef.current.getBoundingClientRect(), currentTransformation(nodeRef.current)) || {};
            if (keyframes && duration) {
                (_a = animation.current) === null || _a === void 0 ? void 0 : _a.cancel();
                animation.current = undefined;
                try {
                    animation.current = (_c = (_b = nodeRef.current).animate) === null || _c === void 0 ? void 0 : _c.call(_b, keyframes, { duration, easing });
                }
                catch (err) {
                    console.error(err);
                }
                if (animation.current) {
                    animation.current.onfinish = () => {
                        animation.current = undefined;
                        onfinish === null || onfinish === void 0 ? void 0 : onfinish();
                    };
                }
            }
        }
        snapshot.current = undefined;
    });
    return {
        prepareAnimation: (currentSnapshot) => {
            snapshot.current = currentSnapshot;
        },
        isAnimationPlaying: () => { var _a; return ((_a = animation.current) === null || _a === void 0 ? void 0 : _a.playState) === "running"; },
    };
}

function useContainerRect() {
    const [containerRect, setContainerRect] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const containerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const observerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const setContainerRef = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node) => {
        containerRef.current = node;
        if (observerRef.current) {
            observerRef.current.disconnect();
            observerRef.current = undefined;
        }
        const updateContainerRect = () => {
            if (node) {
                const styles = window.getComputedStyle(node);
                const parse = (value) => parseFloat(value) || 0;
                setContainerRect({
                    width: Math.round(node.clientWidth - parse(styles.paddingLeft) - parse(styles.paddingRight)),
                    height: Math.round(node.clientHeight - parse(styles.paddingTop) - parse(styles.paddingBottom)),
                });
            }
            else {
                setContainerRect(undefined);
            }
        };
        updateContainerRect();
        if (node && typeof ResizeObserver !== "undefined") {
            observerRef.current = new ResizeObserver(updateContainerRect);
            observerRef.current.observe(node);
        }
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
        setContainerRef,
        containerRef,
        containerRect,
    }), [setContainerRef, containerRef, containerRect]);
}

function useDelay() {
    const timeoutId = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const { setTimeout, clearTimeout } = useTimeouts();
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((callback, delay) => {
        clearTimeout(timeoutId.current);
        timeoutId.current = setTimeout(callback, delay > 0 ? delay : 0);
    }, [setTimeout, clearTimeout]);
}

function useEventCallback(fn) {
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(fn);
    useLayoutEffect(() => {
        ref.current = fn;
    });
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...args) => { var _a; return (_a = ref.current) === null || _a === void 0 ? void 0 : _a.call(ref, ...args); }, []);
}

function setRef(ref, value) {
    if (typeof ref === "function") {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
}
function useForkRef(refA, refB) {
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => refA == null && refB == null
        ? null
        : (refValue) => {
            setRef(refA, refValue);
            setRef(refB, refValue);
        }, [refA, refB]);
}

function useLoseFocus(focus, disabled = false) {
    const focused = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    useLayoutEffect(() => {
        if (disabled && focused.current) {
            focused.current = false;
            focus();
        }
    }, [disabled, focus]);
    const onFocus = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        focused.current = true;
    }, []);
    const onBlur = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        focused.current = false;
    }, []);
    return { onFocus, onBlur };
}

function useRTL() {
    const [isRTL, setIsRTL] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    useLayoutEffect(() => {
        setIsRTL(window.getComputedStyle(window.document.documentElement).direction === "rtl");
    }, []);
    return isRTL;
}

function useSensors() {
    const [subscribers] = react__WEBPACK_IMPORTED_MODULE_0__.useState({});
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        const notifySubscribers = (type, event) => {
            var _a;
            (_a = subscribers[type]) === null || _a === void 0 ? void 0 : _a.forEach((listener) => {
                if (!event.isPropagationStopped())
                    listener(event);
            });
        };
        return {
            registerSensors: {
                onPointerDown: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_DOWN */ .NZ, event),
                onPointerMove: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_MOVE */ .N4, event),
                onPointerUp: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_UP */ .S2, event),
                onPointerLeave: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_LEAVE */ .pE, event),
                onPointerCancel: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_CANCEL */ .Vt, event),
                onKeyDown: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_KEY_DOWN */ .ds, event),
                onKeyUp: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_KEY_UP */ .Bm, event),
                onWheel: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_WHEEL */ .yq, event),
            },
            subscribeSensors: (type, callback) => {
                if (!subscribers[type]) {
                    subscribers[type] = [];
                }
                subscribers[type].unshift(callback);
                return () => {
                    const listeners = subscribers[type];
                    if (listeners) {
                        listeners.splice(0, listeners.length, ...listeners.filter((el) => el !== callback));
                    }
                };
            },
        };
    }, [subscribers]);
}

function useThrottle(callback, delay) {
    const lastCallbackTime = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const delayCallback = useDelay();
    const executeCallback = useEventCallback((...args) => {
        lastCallbackTime.current = Date.now();
        callback(args);
    });
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...args) => {
        delayCallback(() => {
            executeCallback(args);
        }, delay - (Date.now() - lastCallbackTime.current));
    }, [delay, executeCallback, delayCallback]);
}

const slidePrefix = makeComposePrefix("slide");
const slideImagePrefix = makeComposePrefix("slide_image");
function ImageSlide({ slide: image, offset, render, rect, imageFit, imageProps, onClick, onLoad, style, }) {
    var _a, _b, _c, _d, _e, _f, _g;
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_0__.useState(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_LOADING */ .Xe);
    const { publish } = useEvents();
    const { setTimeout } = useTimeouts();
    const imageRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (offset === 0) {
            publish((0,_types_js__WEBPACK_IMPORTED_MODULE_2__/* .activeSlideStatus */ .J1)(status));
        }
    }, [offset, status, publish]);
    const handleLoading = useEventCallback((img) => {
        ("decode" in img ? img.decode() : Promise.resolve())
            .catch(() => { })
            .then(() => {
            if (!img.parentNode) {
                return;
            }
            setStatus(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_COMPLETE */ .Zv);
            setTimeout(() => {
                onLoad === null || onLoad === void 0 ? void 0 : onLoad(img);
            }, 0);
        });
    });
    const setImageRef = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((img) => {
        imageRef.current = img;
        if (img === null || img === void 0 ? void 0 : img.complete) {
            handleLoading(img);
        }
    }, [handleLoading]);
    const handleOnLoad = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        handleLoading(event.currentTarget);
    }, [handleLoading]);
    const onError = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        setStatus(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_ERROR */ .fS);
    }, []);
    const cover = isImageFitCover(image, imageFit);
    const nonInfinite = (value, fallback) => (Number.isFinite(value) ? value : fallback);
    const maxWidth = nonInfinite(Math.max(...((_b = (_a = image.srcSet) === null || _a === void 0 ? void 0 : _a.map((x) => x.width)) !== null && _b !== void 0 ? _b : []).concat(image.width ? [image.width] : [])), ((_c = imageRef.current) === null || _c === void 0 ? void 0 : _c.naturalWidth) || 0);
    const maxHeight = nonInfinite(Math.max(...((_e = (_d = image.srcSet) === null || _d === void 0 ? void 0 : _d.map((x) => x.height)) !== null && _e !== void 0 ? _e : []).concat(image.height ? [image.height] : [])), ((_f = imageRef.current) === null || _f === void 0 ? void 0 : _f.naturalHeight) || 0);
    const defaultStyle = maxWidth && maxHeight
        ? {
            maxWidth: `min(${maxWidth}px, 100%)`,
            maxHeight: `min(${maxHeight}px, 100%)`,
        }
        : {
            maxWidth: "100%",
            maxHeight: "100%",
        };
    const srcSet = (_g = image.srcSet) === null || _g === void 0 ? void 0 : _g.sort((a, b) => a.width - b.width).map((item) => `${item.src} ${item.width}w`).join(", ");
    const estimateActualWidth = () => rect && !cover && image.width && image.height ? (rect.height / image.height) * image.width : Number.MAX_VALUE;
    const sizes = srcSet && rect && hasWindow() ? `${Math.round(Math.min(estimateActualWidth(), rect.width))}px` : undefined;
    const { style: imagePropsStyle, className: imagePropsClassName, ...restImageProps } = imageProps || {};
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { ref: setImageRef, onLoad: handleOnLoad, onError: onError, onClick: onClick, draggable: false, className: clsx(cssClass(slideImagePrefix()), cover && cssClass(slideImagePrefix("cover")), status !== _types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_COMPLETE */ .Zv && cssClass(slideImagePrefix("loading")), imagePropsClassName), style: { ...defaultStyle, ...style, ...imagePropsStyle }, ...restImageProps, alt: image.alt, sizes: sizes, srcSet: srcSet, src: image.src }),
        status !== _types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_COMPLETE */ .Zv && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClass(slidePrefix(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_PLACEHOLDER */ .$L)) },
            status === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_LOADING */ .Xe &&
                ((render === null || render === void 0 ? void 0 : render.iconLoading) ? (render.iconLoading()) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadingIcon, { className: clsx(cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ELEMENT_ICON */ .vg), cssClass(slidePrefix(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_LOADING */ .Xe))) }))),
            status === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_ERROR */ .fS &&
                ((render === null || render === void 0 ? void 0 : render.iconError) ? (render.iconError()) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorIcon, { className: clsx(cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ELEMENT_ICON */ .vg), cssClass(slidePrefix(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_ERROR */ .fS))) })))))));
}

var SwipeState;
(function (SwipeState) {
    SwipeState[SwipeState["NONE"] = 0] = "NONE";
    SwipeState[SwipeState["SWIPE"] = 1] = "SWIPE";
    SwipeState[SwipeState["PULL_DOWN"] = 2] = "PULL_DOWN";
    SwipeState[SwipeState["ANIMATION"] = 3] = "ANIMATION";
})(SwipeState || (SwipeState = {}));

function usePointerEvents(subscribeSensors, onPointerDown, onPointerMove, onPointerUp, disabled) {
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (disabled)
            return () => { };
        return cleanup(subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_DOWN */ .NZ, onPointerDown), subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_MOVE */ .N4, onPointerMove), subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_UP */ .S2, onPointerUp), subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_LEAVE */ .pE, onPointerUp), subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_CANCEL */ .Vt, onPointerUp));
    }, [subscribeSensors, onPointerDown, onPointerMove, onPointerUp, disabled]);
}

var Gesture;
(function (Gesture) {
    Gesture[Gesture["NONE"] = 0] = "NONE";
    Gesture[Gesture["SWIPE"] = 1] = "SWIPE";
    Gesture[Gesture["PULL_DOWN"] = 2] = "PULL_DOWN";
})(Gesture || (Gesture = {}));
const SWIPE_THRESHOLD = 30;
function usePointerSwipe(subscribeSensors, isSwipeValid, containerWidth, swipeAnimationDuration, onSwipeStart, onSwipeProgress, onSwipeFinish, onSwipeCancel, pullDownEnabled, onPullDownStart, onPullDownProgress, onPullDownFinish, onPullDownCancel) {
    const offset = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const pointers = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);
    const activePointer = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const startTime = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const gesture = react__WEBPACK_IMPORTED_MODULE_0__.useRef(Gesture.NONE);
    const clearPointer = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        if (activePointer.current === event.pointerId) {
            activePointer.current = undefined;
            gesture.current = Gesture.NONE;
        }
        const currentPointers = pointers.current;
        currentPointers.splice(0, currentPointers.length, ...currentPointers.filter((p) => p.pointerId !== event.pointerId));
    }, []);
    const addPointer = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        clearPointer(event);
        event.persist();
        pointers.current.push(event);
    }, [clearPointer]);
    const onPointerDown = useEventCallback((event) => {
        addPointer(event);
    });
    const onPointerUp = useEventCallback((event) => {
        if (pointers.current.find((x) => x.pointerId === event.pointerId) &&
            activePointer.current === event.pointerId) {
            const duration = Date.now() - startTime.current;
            const currentOffset = offset.current;
            if (gesture.current === Gesture.SWIPE) {
                if (Math.abs(currentOffset) > 0.3 * containerWidth ||
                    (Math.abs(currentOffset) > 5 && duration < swipeAnimationDuration)) {
                    onSwipeFinish(currentOffset, duration);
                }
                else {
                    onSwipeCancel(currentOffset);
                }
            }
            else if (gesture.current === Gesture.PULL_DOWN) {
                if (currentOffset > 2 * SWIPE_THRESHOLD) {
                    onPullDownFinish(currentOffset, duration);
                }
                else {
                    onPullDownCancel(currentOffset);
                }
            }
            offset.current = 0;
            gesture.current = Gesture.NONE;
        }
        clearPointer(event);
    });
    const onPointerMove = useEventCallback((event) => {
        const pointer = pointers.current.find((p) => p.pointerId === event.pointerId);
        if (pointer) {
            const isCurrentPointer = activePointer.current === event.pointerId;
            if (event.buttons === 0) {
                if (isCurrentPointer && offset.current !== 0) {
                    onPointerUp(event);
                }
                else {
                    clearPointer(pointer);
                }
                return;
            }
            const deltaX = event.clientX - pointer.clientX;
            const deltaY = event.clientY - pointer.clientY;
            if (activePointer.current === undefined) {
                const startGesture = (newGesture) => {
                    addPointer(event);
                    activePointer.current = event.pointerId;
                    startTime.current = Date.now();
                    gesture.current = newGesture;
                };
                if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD && isSwipeValid(deltaX)) {
                    startGesture(Gesture.SWIPE);
                    onSwipeStart();
                }
                else if (pullDownEnabled && Math.abs(deltaY) > Math.abs(deltaX) && deltaY > SWIPE_THRESHOLD) {
                    startGesture(Gesture.PULL_DOWN);
                    onPullDownStart();
                }
            }
            else if (isCurrentPointer) {
                if (gesture.current === Gesture.SWIPE) {
                    offset.current = deltaX;
                    onSwipeProgress(deltaX);
                }
                else if (gesture.current === Gesture.PULL_DOWN) {
                    offset.current = deltaY;
                    onPullDownProgress(deltaY);
                }
            }
        }
    });
    usePointerEvents(subscribeSensors, onPointerDown, onPointerMove, onPointerUp);
}

const WHEEL = "wheel";
function preventDefault(event) {
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.ctrlKey) {
        event.preventDefault();
    }
}
function usePreventSwipeNavigation() {
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node) => {
        var _a;
        if (node) {
            node.addEventListener(WHEEL, preventDefault, { passive: false });
        }
        else {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener(WHEEL, preventDefault);
        }
        ref.current = node;
    }, []);
}

function useWheelSwipe(swipeState, subscribeSensors, isSwipeValid, containerWidth, swipeAnimationDuration, onSwipeStart, onSwipeProgress, onSwipeFinish, onSwipeCancel) {
    const offset = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const intent = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const intentCleanup = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const resetCleanup = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const wheelResidualMomentum = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const startTime = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const { setTimeout, clearTimeout } = useTimeouts();
    const cancelSwipeIntentCleanup = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        if (intentCleanup.current) {
            clearTimeout(intentCleanup.current);
            intentCleanup.current = undefined;
        }
    }, [clearTimeout]);
    const cancelSwipeResetCleanup = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        if (resetCleanup.current) {
            clearTimeout(resetCleanup.current);
            resetCleanup.current = undefined;
        }
    }, [clearTimeout]);
    const handleCleanup = useEventCallback(() => {
        if (swipeState !== SwipeState.SWIPE) {
            offset.current = 0;
            startTime.current = 0;
            cancelSwipeIntentCleanup();
            cancelSwipeResetCleanup();
        }
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(handleCleanup, [swipeState, handleCleanup]);
    const handleCancelSwipe = useEventCallback((currentSwipeOffset) => {
        resetCleanup.current = undefined;
        if (offset.current === currentSwipeOffset) {
            onSwipeCancel(offset.current);
        }
    });
    const onWheel = useEventCallback((event) => {
        if (event.ctrlKey) {
            return;
        }
        if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
            return;
        }
        if (swipeState === SwipeState.NONE) {
            if (Math.abs(event.deltaX) <= 1.2 * Math.abs(wheelResidualMomentum.current)) {
                wheelResidualMomentum.current = event.deltaX;
                return;
            }
            if (!isSwipeValid(-event.deltaX)) {
                return;
            }
            intent.current += event.deltaX;
            cancelSwipeIntentCleanup();
            if (Math.abs(intent.current) > 30) {
                intent.current = 0;
                wheelResidualMomentum.current = 0;
                startTime.current = Date.now();
                onSwipeStart();
            }
            else {
                const currentSwipeIntent = intent.current;
                intentCleanup.current = setTimeout(() => {
                    intentCleanup.current = undefined;
                    if (currentSwipeIntent === intent.current) {
                        intent.current = 0;
                    }
                }, swipeAnimationDuration);
            }
        }
        else if (swipeState === SwipeState.SWIPE) {
            let newSwipeOffset = offset.current - event.deltaX;
            newSwipeOffset = Math.min(Math.abs(newSwipeOffset), containerWidth) * Math.sign(newSwipeOffset);
            offset.current = newSwipeOffset;
            onSwipeProgress(newSwipeOffset);
            cancelSwipeResetCleanup();
            if (Math.abs(newSwipeOffset) > 0.2 * containerWidth) {
                wheelResidualMomentum.current = event.deltaX;
                onSwipeFinish(newSwipeOffset, Date.now() - startTime.current);
                return;
            }
            resetCleanup.current = setTimeout(() => handleCancelSwipe(newSwipeOffset), 2 * swipeAnimationDuration);
        }
        else {
            wheelResidualMomentum.current = event.deltaX;
        }
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_WHEEL */ .yq, onWheel), [subscribeSensors, onWheel]);
}

const cssContainerPrefix = makeComposePrefix("container");
const ControllerContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useController = makeUseContext("useController", "ControllerContext", ControllerContext);
function Controller({ children, ...props }) {
    var _a;
    const { carousel, animation, controller, on, styles, render } = props;
    const [toolbarWidth, setToolbarWidth] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const state = useLightboxState();
    const dispatch = useLightboxDispatch();
    const [swipeState, setSwipeState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(SwipeState.NONE);
    const swipeOffset = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const pullDownOffset = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const pullDownOpacity = react__WEBPACK_IMPORTED_MODULE_0__.useRef(1);
    const { registerSensors, subscribeSensors } = useSensors();
    const { subscribe, publish } = useEvents();
    const cleanupAnimationIncrement = useDelay();
    const cleanupSwipeOffset = useDelay();
    const cleanupPullDownOffset = useDelay();
    const { containerRef, setContainerRef, containerRect } = useContainerRect();
    const handleContainerRef = useForkRef(usePreventSwipeNavigation(), setContainerRef);
    const carouselRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const setCarouselRef = useForkRef(carouselRef, undefined);
    const isRTL = useRTL();
    const rtl = (value) => (isRTL ? -1 : 1) * (typeof value === "number" ? value : 1);
    const focus = useEventCallback(() => { var _a; return (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.focus(); });
    const getLightboxProps = useEventCallback(() => props);
    const getLightboxState = useEventCallback(() => state);
    const prev = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((params) => publish(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_PREV */ .KN, params), [publish]);
    const next = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((params) => publish(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_NEXT */ .Eb, params), [publish]);
    const close = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => publish(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_CLOSE */ .t9), [publish]);
    const isSwipeValid = (offset) => !(carousel.finite &&
        ((rtl(offset) > 0 && state.currentIndex === 0) ||
            (rtl(offset) < 0 && state.currentIndex === state.slides.length - 1)));
    const setSwipeOffset = (offset) => {
        var _a;
        swipeOffset.current = offset;
        (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.style.setProperty(cssVar("swipe_offset"), `${Math.round(offset)}px`);
    };
    const pullDownEnabled = controller.closeOnPullDown;
    const setPullDownOffset = (offset) => {
        var _a, _b;
        pullDownOffset.current = offset;
        pullDownOpacity.current = (() => {
            const threshold = 60;
            const minOpacity = 0.5;
            return Math.min(Math.max(round(1 - (offset / threshold) * (1 - minOpacity), 2), minOpacity), 1);
        })();
        (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.style.setProperty(cssVar("pull_down_offset"), `${Math.round(offset)}px`);
        (_b = containerRef.current) === null || _b === void 0 ? void 0 : _b.style.setProperty(cssVar("pull_down_opacity"), `${pullDownOpacity.current}`);
    };
    const { prepareAnimation: preparePullDownAnimation } = useAnimation(carouselRef, (snapshot, rect, translate) => {
        if (carouselRef.current && containerRect) {
            return {
                keyframes: [
                    {
                        transform: `translate(0, ${snapshot.rect.y - rect.y + translate.y}px)`,
                        opacity: snapshot.opacity,
                    },
                    { transform: "translate(0, 0)", opacity: 1 },
                ],
                duration: snapshot.duration,
                easing: animation.easing.fade,
            };
        }
        return undefined;
    });
    const pullDown = (offset, cancel) => {
        if (pullDownEnabled) {
            setPullDownOffset(offset);
            let duration = 0;
            if (carouselRef.current) {
                duration = animation.fade * (cancel ? 2 : 1);
                preparePullDownAnimation({
                    rect: carouselRef.current.getBoundingClientRect(),
                    opacity: pullDownOpacity.current,
                    duration,
                });
            }
            cleanupPullDownOffset(() => {
                setPullDownOffset(0);
                setSwipeState(SwipeState.NONE);
            }, duration);
            setSwipeState(SwipeState.ANIMATION);
            if (!cancel) {
                close();
            }
        }
    };
    const { prepareAnimation, isAnimationPlaying } = useAnimation(carouselRef, (snapshot, rect, translate) => {
        var _a;
        if (carouselRef.current && containerRect && ((_a = state.animation) === null || _a === void 0 ? void 0 : _a.duration)) {
            const parsedSpacing = parseLengthPercentage(carousel.spacing);
            const spacingValue = (parsedSpacing.percent
                ? (parsedSpacing.percent * containerRect.width) / 100
                : parsedSpacing.pixel) || 0;
            return {
                keyframes: [
                    {
                        transform: `translate(${rtl(state.globalIndex - snapshot.index) * (containerRect.width + spacingValue) +
                            snapshot.rect.x -
                            rect.x +
                            translate.x}px, 0)`,
                    },
                    { transform: "translate(0, 0)" },
                ],
                duration: state.animation.duration,
                easing: state.animation.easing,
            };
        }
        return undefined;
    });
    const swipe = useEventCallback((action) => {
        var _a, _b;
        const currentSwipeOffset = action.offset || 0;
        const swipeDuration = !currentSwipeOffset ? (_a = animation.navigation) !== null && _a !== void 0 ? _a : animation.swipe : animation.swipe;
        const swipeEasing = !currentSwipeOffset && !isAnimationPlaying() ? animation.easing.navigation : animation.easing.swipe;
        let { direction } = action;
        const count = (_b = action.count) !== null && _b !== void 0 ? _b : 1;
        let newSwipeState = SwipeState.ANIMATION;
        let newSwipeAnimationDuration = swipeDuration * count;
        if (!direction) {
            const containerWidth = containerRect === null || containerRect === void 0 ? void 0 : containerRect.width;
            const elapsedTime = action.duration || 0;
            const expectedTime = containerWidth
                ? (swipeDuration / containerWidth) * Math.abs(currentSwipeOffset)
                : swipeDuration;
            if (count !== 0) {
                if (elapsedTime < expectedTime) {
                    newSwipeAnimationDuration =
                        (newSwipeAnimationDuration / expectedTime) * Math.max(elapsedTime, expectedTime / 5);
                }
                else if (containerWidth) {
                    newSwipeAnimationDuration =
                        (swipeDuration / containerWidth) * (containerWidth - Math.abs(currentSwipeOffset));
                }
                direction = rtl(currentSwipeOffset) > 0 ? _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_PREV */ .KN : _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_NEXT */ .Eb;
            }
            else {
                newSwipeAnimationDuration = swipeDuration / 2;
            }
        }
        let increment = 0;
        if (direction === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_PREV */ .KN) {
            if (isSwipeValid(rtl(1))) {
                increment = -count;
            }
            else {
                newSwipeState = SwipeState.NONE;
                newSwipeAnimationDuration = swipeDuration;
            }
        }
        else if (direction === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_NEXT */ .Eb) {
            if (isSwipeValid(rtl(-1))) {
                increment = count;
            }
            else {
                newSwipeState = SwipeState.NONE;
                newSwipeAnimationDuration = swipeDuration;
            }
        }
        newSwipeAnimationDuration = Math.round(newSwipeAnimationDuration);
        cleanupSwipeOffset(() => {
            setSwipeOffset(0);
            setSwipeState(SwipeState.NONE);
        }, newSwipeAnimationDuration);
        if (carouselRef.current) {
            prepareAnimation({
                rect: carouselRef.current.getBoundingClientRect(),
                index: state.globalIndex,
            });
        }
        setSwipeState(newSwipeState);
        publish(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_SWIPE */ .Tn, {
            type: "swipe",
            increment,
            duration: newSwipeAnimationDuration,
            easing: swipeEasing,
        });
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        var _a, _b;
        if (((_a = state.animation) === null || _a === void 0 ? void 0 : _a.increment) && ((_b = state.animation) === null || _b === void 0 ? void 0 : _b.duration)) {
            cleanupAnimationIncrement(() => dispatch({ type: "swipe", increment: 0 }), state.animation.duration);
        }
    }, [state.animation, dispatch, cleanupAnimationIncrement]);
    const swipeParams = [
        subscribeSensors,
        isSwipeValid,
        (containerRect === null || containerRect === void 0 ? void 0 : containerRect.width) || 0,
        animation.swipe,
        () => setSwipeState(SwipeState.SWIPE),
        (offset) => setSwipeOffset(offset),
        (offset, duration) => swipe({ offset, duration, count: 1 }),
        (offset) => swipe({ offset, count: 0 }),
    ];
    const pullDownParams = [
        () => {
            if (pullDownEnabled) {
                setSwipeState(SwipeState.PULL_DOWN);
            }
        },
        (offset) => setPullDownOffset(offset),
        (offset) => pullDown(offset),
        (offset) => pullDown(offset, true),
    ];
    usePointerSwipe(...swipeParams, pullDownEnabled, ...pullDownParams);
    useWheelSwipe(swipeState, ...swipeParams);
    const focusOnMount = useEventCallback(() => {
        var _a;
        if (controller.focus) {
            (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(focusOnMount, [focusOnMount]);
    const onViewCallback = useEventCallback(() => {
        var _a;
        (_a = on.view) === null || _a === void 0 ? void 0 : _a.call(on, { index: state.currentIndex });
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(onViewCallback, [state.globalIndex, onViewCallback]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => cleanup(subscribe(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_PREV */ .KN, (action) => swipe({ direction: _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_PREV */ .KN, ...action })), subscribe(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_NEXT */ .Eb, (action) => swipe({ direction: _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_NEXT */ .Eb, ...action })), subscribe(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_SWIPE */ .Tn, (action) => dispatch(action))), [subscribe, swipe, dispatch]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_KEY_UP */ .Bm, (event) => {
        if (event.key === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .VK_ESCAPE */ .PU) {
            close();
        }
    }), [subscribeSensors, close]);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
        prev,
        next,
        close,
        focus,
        slideRect: containerRect ? computeSlideRect(containerRect, carousel.padding) : { width: 0, height: 0 },
        containerRect: containerRect || { width: 0, height: 0 },
        subscribeSensors,
        containerRef,
        setCarouselRef,
        toolbarWidth,
        setToolbarWidth,
    }), [
        prev,
        next,
        close,
        focus,
        subscribeSensors,
        containerRect,
        containerRef,
        setCarouselRef,
        toolbarWidth,
        setToolbarWidth,
        carousel.padding,
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(controller.ref, () => ({
        prev,
        next,
        close,
        focus,
        getLightboxProps,
        getLightboxState,
    }), [prev, next, close, focus, getLightboxProps, getLightboxState]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: handleContainerRef, className: clsx(cssClass(cssContainerPrefix()), cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_FLEX_CENTER */ .aN)), style: {
            ...(swipeState === SwipeState.SWIPE
                ? { [cssVar("swipe_offset")]: `${Math.round(swipeOffset.current)}px` }
                : null),
            ...(swipeState === SwipeState.PULL_DOWN
                ? {
                    [cssVar("pull_down_offset")]: `${Math.round(pullDownOffset.current)}px`,
                    [cssVar("pull_down_opacity")]: `${pullDownOpacity.current}`,
                }
                : null),
            ...(controller.touchAction !== "none"
                ? { [cssVar("controller_touch_action")]: controller.touchAction }
                : null),
            ...styles.container,
        }, ...(controller.aria ? { role: "presentation", "aria-live": "polite" } : null), tabIndex: -1, ...registerSensors }, containerRect && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ControllerContext.Provider, { value: context },
        children, (_a = render.controls) === null || _a === void 0 ? void 0 :
        _a.call(render)))));
}
const ControllerModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_CONTROLLER */ .l4, Controller);

function cssPrefix$2(value) {
    return composePrefix(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_CAROUSEL */ .k0, value);
}
function cssSlidePrefix(value) {
    return composePrefix("slide", value);
}
function CarouselSlide({ slide, offset }) {
    const containerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const { currentIndex } = useLightboxState();
    const { slideRect, close } = useController();
    const { render, carousel: { imageFit, imageProps }, on: { click: onClick }, controller: { closeOnBackdropClick }, styles: { slide: style }, } = useLightboxProps();
    const renderSlide = () => {
        var _a, _b, _c, _d;
        let rendered = (_a = render.slide) === null || _a === void 0 ? void 0 : _a.call(render, { slide, offset, rect: slideRect });
        if (!rendered && isImageSlide(slide)) {
            rendered = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ImageSlide, { slide: slide, offset: offset, render: render, rect: slideRect, imageFit: imageFit, imageProps: imageProps, onClick: offset === 0 ? () => onClick === null || onClick === void 0 ? void 0 : onClick({ index: currentIndex }) : undefined }));
        }
        return rendered ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (_b = render.slideHeader) === null || _b === void 0 ? void 0 :
            _b.call(render, { slide }),
            ((_c = render.slideContainer) !== null && _c !== void 0 ? _c : (({ children }) => children))({ slide, children: rendered }), (_d = render.slideFooter) === null || _d === void 0 ? void 0 :
            _d.call(render, { slide }))) : null;
    };
    const handleBackdropClick = (event) => {
        const container = containerRef.current;
        const target = event.target instanceof HTMLElement ? event.target : undefined;
        if (closeOnBackdropClick &&
            target &&
            container &&
            (target === container ||
                (Array.from(container.children).find((x) => x === target) &&
                    target.classList.contains(cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_FULLSIZE */ .yS))))) {
            close();
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: containerRef, className: clsx(cssClass(cssSlidePrefix()), offset === 0 && cssClass(cssSlidePrefix("current")), cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_FLEX_CENTER */ .aN)), onClick: handleBackdropClick, style: style }, renderSlide()));
}
function Placeholder() {
    const style = useLightboxProps().styles.slide;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClass("slide"), style: style });
}
function Carousel({ carousel: { finite, preload, padding, spacing } }) {
    const { slides, currentIndex, globalIndex } = useLightboxState();
    const { setCarouselRef } = useController();
    const spacingValue = parseLengthPercentage(spacing);
    const paddingValue = parseLengthPercentage(padding);
    const items = [];
    if ((slides === null || slides === void 0 ? void 0 : slides.length) > 0) {
        for (let i = currentIndex - preload; i < currentIndex; i += 1) {
            const key = globalIndex + i - currentIndex;
            items.push(!finite || i >= 0 ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CarouselSlide, { key: key, slide: slides[(i + preload * slides.length) % slides.length], offset: i - currentIndex })) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Placeholder, { key: key })));
        }
        items.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(CarouselSlide, { key: globalIndex, slide: slides[currentIndex], offset: 0 }));
        for (let i = currentIndex + 1; i <= currentIndex + preload; i += 1) {
            const key = globalIndex + i - currentIndex;
            items.push(!finite || i <= slides.length - 1 ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CarouselSlide, { key: key, slide: slides[i % slides.length], offset: i - currentIndex })) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Placeholder, { key: key })));
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: setCarouselRef, className: clsx(cssClass(cssPrefix$2()), items.length > 0 && cssClass(cssPrefix$2("with_slides"))), style: {
            [`${cssVar(cssPrefix$2("slides_count"))}`]: items.length,
            [`${cssVar(cssPrefix$2("spacing_px"))}`]: spacingValue.pixel || 0,
            [`${cssVar(cssPrefix$2("spacing_percent"))}`]: spacingValue.percent || 0,
            [`${cssVar(cssPrefix$2("padding_px"))}`]: paddingValue.pixel || 0,
            [`${cssVar(cssPrefix$2("padding_percent"))}`]: paddingValue.percent || 0,
        } }, items));
}
const CarouselModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_CAROUSEL */ .k0, Carousel);

function NavigationButton({ label, icon, renderIcon, action, onClick, disabled }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconButton, { label: label, icon: icon, renderIcon: renderIcon, className: cssClass(`navigation_${action}`), disabled: disabled, onClick: onClick, ...useLoseFocus(useController().focus, disabled) }));
}
function Navigation({ carousel: { finite }, animation, render: { buttonPrev, buttonNext, iconPrev, iconNext }, }) {
    var _a;
    const { slides, currentIndex } = useLightboxState();
    const { prev, next, subscribeSensors } = useController();
    const isRTL = useRTL();
    const prevDisabled = slides.length === 0 || (finite && currentIndex === 0);
    const nextDisabled = slides.length === 0 || (finite && currentIndex === slides.length - 1);
    const throttle = ((_a = animation.navigation) !== null && _a !== void 0 ? _a : animation.swipe) / 2;
    const prevThrottled = useThrottle(prev, throttle);
    const nextThrottled = useThrottle(next, throttle);
    const handleKeyDown = useEventCallback((event) => {
        if (event.key === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .VK_ARROW_LEFT */ .Sl && !(isRTL ? nextDisabled : prevDisabled)) {
            (isRTL ? nextThrottled : prevThrottled)();
        }
        if (event.key === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .VK_ARROW_RIGHT */ .NH && !(isRTL ? prevDisabled : nextDisabled)) {
            (isRTL ? prevThrottled : nextThrottled)();
        }
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_KEY_DOWN */ .ds, handleKeyDown), [subscribeSensors, handleKeyDown]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        buttonPrev ? (buttonPrev()) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationButton, { label: "Previous", action: _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_PREV */ .KN, icon: PreviousIcon, renderIcon: iconPrev, disabled: prevDisabled, onClick: prev })),
        buttonNext ? (buttonNext()) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationButton, { label: "Next", action: _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_NEXT */ .Eb, icon: NextIcon, renderIcon: iconNext, disabled: nextDisabled, onClick: next }))));
}
const NavigationModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_NAVIGATION */ .Op, Navigation);

const noScroll = cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_NO_SCROLL */ .Tf);
const noScrollPadding = cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_NO_SCROLL_PADDING */ .M9);
function isHTMLElement(element) {
    return "style" in element;
}
function padScrollbar(element, padding, rtl) {
    const styles = window.getComputedStyle(element);
    const property = rtl ? "padding-left" : "padding-right";
    const computedValue = rtl ? styles.paddingLeft : styles.paddingRight;
    const originalValue = element.style.getPropertyValue(property);
    element.style.setProperty(property, `${(parseInt(computedValue, 10) || 0) + padding}px`);
    return () => {
        if (originalValue) {
            element.style.setProperty(property, originalValue);
        }
        else {
            element.style.removeProperty(property);
        }
    };
}
function NoScroll({ children }) {
    const rtl = useRTL();
    useLayoutEffect(() => {
        const cleanup = [];
        const { body, documentElement } = document;
        const scrollbar = Math.round(window.innerWidth - documentElement.clientWidth);
        if (scrollbar > 0) {
            cleanup.push(padScrollbar(body, scrollbar, rtl));
            const elements = body.getElementsByTagName("*");
            for (let i = 0; i < elements.length; i += 1) {
                const element = elements[i];
                if (isHTMLElement(element) &&
                    window.getComputedStyle(element).getPropertyValue("position") === "fixed" &&
                    !element.classList.contains(noScrollPadding)) {
                    cleanup.push(padScrollbar(element, scrollbar, rtl));
                }
            }
        }
        body.classList.add(noScroll);
        return () => {
            body.classList.remove(noScroll);
            cleanup.forEach((clean) => clean());
        };
    }, [rtl]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children);
}
const NoScrollModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_NO_SCROLL */ .HE, NoScroll);

function cssPrefix$1(value) {
    return composePrefix(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_PORTAL */ .SA, value);
}
function setAttribute(element, attribute, value) {
    const previousValue = element.getAttribute(attribute);
    element.setAttribute(attribute, value);
    return () => {
        if (previousValue) {
            element.setAttribute(attribute, previousValue);
        }
        else {
            element.removeAttribute(attribute);
        }
    };
}
function Portal({ children, animation, styles, className, on, portal, close }) {
    const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const cleanup = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);
    const { setTimeout } = useTimeouts();
    const { subscribe } = useEvents();
    const reduceMotion = useMotionPreference();
    const animationDuration = !reduceMotion ? animation.fade : 0;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        setMounted(true);
        return () => {
            setMounted(false);
            setVisible(false);
        };
    }, []);
    const handleClose = useEventCallback(() => {
        var _a;
        setVisible(false);
        (_a = on.exiting) === null || _a === void 0 ? void 0 : _a.call(on);
        setTimeout(() => {
            var _a;
            (_a = on.exited) === null || _a === void 0 ? void 0 : _a.call(on);
            close();
        }, animationDuration);
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => subscribe(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_CLOSE */ .t9, handleClose), [subscribe, handleClose]);
    const handleEnter = useEventCallback((node) => {
        var _a, _b, _c;
        node.scrollTop;
        setVisible(true);
        (_a = on.entering) === null || _a === void 0 ? void 0 : _a.call(on);
        const elements = (_c = (_b = node.parentNode) === null || _b === void 0 ? void 0 : _b.children) !== null && _c !== void 0 ? _c : [];
        for (let i = 0; i < elements.length; i += 1) {
            const element = elements[i];
            if (["TEMPLATE", "SCRIPT", "STYLE"].indexOf(element.tagName) === -1 && element !== node) {
                cleanup.current.push(setAttribute(element, "inert", "true"));
                cleanup.current.push(setAttribute(element, "aria-hidden", "true"));
            }
        }
        setTimeout(() => {
            var _a;
            (_a = on.entered) === null || _a === void 0 ? void 0 : _a.call(on);
        }, animationDuration);
    });
    const handleExit = useEventCallback(() => {
        cleanup.current.forEach((clean) => clean());
        cleanup.current = [];
    });
    const handleRef = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node) => {
        if (node) {
            handleEnter(node);
        }
        else {
            handleExit();
        }
    }, [handleEnter, handleExit]);
    return mounted
        ? (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: handleRef, className: clsx(className, cssClass("root"), cssClass(cssPrefix$1()), cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_NO_SCROLL_PADDING */ .M9), visible && cssClass(cssPrefix$1("open"))), role: "presentation", "aria-live": "polite", style: {
                ...(animation.fade !== LightboxDefaultProps.animation.fade
                    ? { [cssVar("fade_animation_duration")]: `${animationDuration}ms` }
                    : null),
                ...(animation.easing.fade !== LightboxDefaultProps.animation.easing.fade
                    ? { [cssVar("fade_animation_timing_function")]: animation.easing.fade }
                    : null),
                ...styles.root,
            } }, children), portal.root || document.body)
        : null;
}
const PortalModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_PORTAL */ .SA, Portal);

function Root({ children }) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children);
}
const RootModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_ROOT */ .lT, Root);

function cssPrefix(value) {
    return composePrefix(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_TOOLBAR */ .hb, value);
}
function Toolbar({ toolbar: { buttons }, render: { buttonClose, iconClose } }) {
    const { close, setToolbarWidth } = useController();
    const { setContainerRef, containerRect } = useContainerRect();
    useLayoutEffect(() => {
        setToolbarWidth(containerRect === null || containerRect === void 0 ? void 0 : containerRect.width);
    }, [setToolbarWidth, containerRect === null || containerRect === void 0 ? void 0 : containerRect.width]);
    const renderCloseButton = () => {
        if (buttonClose)
            return buttonClose();
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconButton, { key: _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_CLOSE */ .t9, label: "Close", icon: CloseIcon, renderIcon: iconClose, onClick: close });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: setContainerRef, className: cssClass(cssPrefix()), ...stopNavigationEventsPropagation() }, buttons === null || buttons === void 0 ? void 0 : buttons.map((button) => (button === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_CLOSE */ .t9 ? renderCloseButton() : button))));
}
const ToolbarModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_TOOLBAR */ .hb, Toolbar);

function renderNode(node, props) {
    var _a;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(node.module.component, { key: node.module.name, ...props }, (_a = node.children) === null || _a === void 0 ? void 0 : _a.map((child) => renderNode(child, props)));
}
function mergeAnimation(defaultAnimation, animation = {}) {
    const { easing: defaultAnimationEasing, ...restDefaultAnimation } = defaultAnimation;
    const { easing, ...restAnimation } = animation;
    return {
        easing: { ...defaultAnimationEasing, ...easing },
        ...restDefaultAnimation,
        ...restAnimation,
    };
}
function Lightbox({ carousel, animation, render, toolbar, controller, on, plugins, slides, index, ...restProps }) {
    const { animation: defaultAnimation, carousel: defaultCarousel, render: defaultRender, toolbar: defaultToolbar, controller: defaultController, on: defaultOn, slides: defaultSlides, index: defaultIndex, plugins: defaultPlugins, ...restDefaultProps } = LightboxDefaultProps;
    const { config, augmentation } = withPlugins([
        createNode(PortalModule, [
            createNode(NoScrollModule, [
                createNode(ControllerModule, [
                    createNode(CarouselModule),
                    createNode(ToolbarModule),
                    createNode(NavigationModule),
                ]),
            ]),
        ]),
    ], plugins || defaultPlugins);
    const props = augmentation({
        animation: mergeAnimation(defaultAnimation, animation),
        carousel: { ...defaultCarousel, ...carousel },
        render: { ...defaultRender, ...render },
        toolbar: { ...defaultToolbar, ...toolbar },
        controller: { ...defaultController, ...controller },
        on: { ...defaultOn, ...on },
        ...restDefaultProps,
        ...restProps,
    });
    if (!props.open)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightboxPropsProvider, { ...props },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightboxStateProvider, { slides: slides || defaultSlides, index: index || defaultIndex },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(TimeoutsProvider, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(EventsProvider, null, renderNode(createNode(RootModule, config), props))))));
}



/***/ }),

/***/ 75999:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/yet-another-react-lightbox@3.11.3/node_modules/yet-another-react-lightbox/dist/plugins/captions/index.js ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Captions; }
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index.js */ 19025);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 93236);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ 70270);




const cssPrefix = (className) => (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(`slide_${className}`);

const defaultCaptionsProps = {
    descriptionTextAlign: "start",
    descriptionMaxLines: 3,
    showToggle: false,
};
const resolveCaptionsProps = (captions) => ({
    ...defaultCaptionsProps,
    ...captions,
});
function useCaptionsProps() {
    const { captions } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    return resolveCaptionsProps(captions);
}

const CaptionsContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useCaptions = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeUseContext */ .Fy)("useCaptions", "CaptionsContext", CaptionsContext);
function CaptionsContextProvider({ captions, children }) {
    const { ref } = resolveCaptionsProps(captions);
    const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_0__.useState(true);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
        visible,
        show: () => setVisible(true),
        hide: () => setVisible(false),
    }), [visible]);
    react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, () => context, [context]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(CaptionsContext.Provider, { value: context }, children);
}

function Title({ title }) {
    const { toolbarWidth } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useController */ .bc)();
    const { styles } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    const { visible } = useCaptions();
    if (!visible)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: styles.captionsTitleContainer, className: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .Wy)(cssPrefix("captions_container"), cssPrefix("title_container")) },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssPrefix("title"), style: {
                ...(toolbarWidth ? { [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)("toolbar_width")]: `${toolbarWidth}px` } : null),
                ...styles.captionsTitle,
            } }, title)));
}

function Description({ description }) {
    const { descriptionTextAlign, descriptionMaxLines } = useCaptionsProps();
    const { styles } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    const { visible } = useCaptions();
    if (!visible)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: styles.captionsDescriptionContainer, className: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .Wy)(cssPrefix("captions_container"), cssPrefix("description_container")) },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssPrefix("description"), style: {
                ...(descriptionTextAlign !== defaultCaptionsProps.descriptionTextAlign ||
                    descriptionMaxLines !== defaultCaptionsProps.descriptionMaxLines
                    ? {
                        [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)("slide_description_text_align")]: descriptionTextAlign,
                        [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)("slide_description_max_lines")]: descriptionMaxLines,
                    }
                    : null),
                ...styles.captionsDescription,
            } }, typeof description === "string"
            ? description
                .split("\n")
                .flatMap((line, index) => [...(index > 0 ? [react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", { key: index })] : []), line])
            : description)));
}

const captionsIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { strokeWidth: 2, stroke: "currentColor", strokeLinejoin: "round", fill: "none", d: "M3 5l18 0l0 14l-18 0l0-14z" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M7 15h3c.55 0 1-.45 1-1v-1H9.5v.5h-2v-3h2v.5H11v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm7 0h3c.55 0 1-.45 1-1v-1h-1.5v.5h-2v-3h2v.5H18v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1z" })));
const CaptionsVisible = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .U2)("CaptionsVisible", captionsIcon());
const CaptionsHidden = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createIconDisabled */ .TX)("CaptionsVisible", captionsIcon());
function CaptionsButton() {
    const { visible, show, hide } = useCaptions();
    const { render } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    if (render.buttonCaptions) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, render.buttonCaptions({ visible, show, hide }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__/* .IconButton */ .hU, { label: visible ? "Hide captions" : "Show captions", icon: visible ? CaptionsVisible : CaptionsHidden, renderIcon: visible ? render.iconCaptionsVisible : render.iconCaptionsHidden, onClick: visible ? hide : show }));
}

function Captions({ augment, addModule }) {
    augment(({ captions: captionsProps, render: { slideFooter: renderFooter, ...restRender }, toolbar, ...restProps }) => {
        const captions = resolveCaptionsProps(captionsProps);
        return {
            render: {
                slideFooter: ({ slide }) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderFooter === null || renderFooter === void 0 ? void 0 :
                    renderFooter({ slide }),
                    slide.title && react__WEBPACK_IMPORTED_MODULE_0__.createElement(Title, { title: slide.title }),
                    slide.description && react__WEBPACK_IMPORTED_MODULE_0__.createElement(Description, { description: slide.description }))),
                ...restRender,
            },
            toolbar: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .addToolbarButton */ .wQ)(toolbar, _types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_CAPTIONS */ .JT, captions.showToggle ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(CaptionsButton, null) : null),
            captions,
            ...restProps,
        };
    });
    addModule((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createModule */ .l6)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_CAPTIONS */ .JT, CaptionsContextProvider));
}




/***/ }),

/***/ 48433:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/yet-another-react-lightbox@3.11.3/node_modules/yet-another-react-lightbox/dist/plugins/fullscreen/index.js ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Fullscreen; }
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index.js */ 19025);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 93236);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ 70270);




const defaultFullscreenProps = {
    auto: false,
    ref: null,
};
const resolveFullscreenProps = (fullscreen) => ({
    ...defaultFullscreenProps,
    ...fullscreen,
});

const FullscreenContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useFullscreen = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeUseContext */ .Fy)("useFullscreen", "FullscreenContext", FullscreenContext);
function FullscreenContextProvider({ fullscreen: fullscreenProps, children }) {
    const { auto, ref } = resolveFullscreenProps(fullscreenProps);
    const containerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const [fullscreen, setFullscreen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const [disabled, setDisabled] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(() => {
        var _a, _b, _c, _d;
        setDisabled(!((_d = (_c = (_b = (_a = document.fullscreenEnabled) !== null && _a !== void 0 ? _a : document.webkitFullscreenEnabled) !== null && _b !== void 0 ? _b : document.mozFullScreenEnabled) !== null && _c !== void 0 ? _c : document.msFullscreenEnabled) !== null && _d !== void 0 ? _d : false));
    }, []);
    const getFullscreenElement = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        var _a, _b, _c;
        return (_c = (_b = (_a = document.fullscreenElement) !== null && _a !== void 0 ? _a : document.webkitFullscreenElement) !== null && _b !== void 0 ? _b : document.mozFullScreenElement) !== null && _c !== void 0 ? _c : document.msFullscreenElement;
    }, []);
    const enter = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        const container = containerRef.current;
        if (container) {
            try {
                if (container.requestFullscreen) {
                    container.requestFullscreen().catch(() => { });
                }
                else if (container.webkitRequestFullscreen) {
                    container.webkitRequestFullscreen();
                }
                else if (container.mozRequestFullScreen) {
                    container.mozRequestFullScreen();
                }
                else if (container.msRequestFullscreen) {
                    container.msRequestFullscreen();
                }
            }
            catch (err) {
            }
        }
    }, []);
    const exit = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        if (getFullscreenElement()) {
            try {
                if (document.exitFullscreen) {
                    document.exitFullscreen().catch(() => { });
                }
                else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
                else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                }
                else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
            catch (err) {
            }
        }
    }, [getFullscreenElement]);
    const fullscreenChangeListener = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        if (getFullscreenElement() === containerRef.current) {
            setFullscreen(true);
        }
        else {
            setFullscreen(false);
        }
    }, [getFullscreenElement]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const events = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
        events.forEach((event) => {
            document.addEventListener(event, fullscreenChangeListener);
        });
        return () => {
            events.forEach((event) => {
                document.removeEventListener(event, fullscreenChangeListener);
            });
        };
    }, [fullscreenChangeListener]);
    const handleAutoFullscreen = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)(() => { var _a; return (_a = (auto ? enter : null)) === null || _a === void 0 ? void 0 : _a(); });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        handleAutoFullscreen();
        return () => exit();
    }, [handleAutoFullscreen, exit]);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
        fullscreen,
        disabled,
        enter,
        exit,
    }), [fullscreen, disabled, enter, exit]);
    react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, () => context, [context]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: containerRef, className: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .Wy)((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_FULLSCREEN */ .zr), (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_FULLSIZE */ .yS)) },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(FullscreenContext.Provider, { value: context }, children)));
}

const EnterFullscreenIcon = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .U2)("EnterFullscreen", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" }));
const ExitFullscreenIcon = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .U2)("ExitFullscreen", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" }));
function FullscreenButton() {
    var _a;
    const { fullscreen, disabled, enter, exit } = useFullscreen();
    const { render } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    if (disabled)
        return null;
    if (render.buttonFullscreen) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (_a = render.buttonFullscreen) === null || _a === void 0 ? void 0 : _a.call(render, { fullscreen, disabled, enter, exit }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__/* .IconButton */ .hU, { disabled: disabled, label: fullscreen ? "Exit Fullscreen" : "Enter Fullscreen", icon: fullscreen ? ExitFullscreenIcon : EnterFullscreenIcon, renderIcon: fullscreen ? render.iconExitFullscreen : render.iconEnterFullscreen, onClick: fullscreen ? exit : enter }));
}

function Fullscreen({ augment, contains, addParent }) {
    augment(({ fullscreen, toolbar, ...restProps }) => ({
        toolbar: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .addToolbarButton */ .wQ)(toolbar, _types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_FULLSCREEN */ .zr, react__WEBPACK_IMPORTED_MODULE_0__.createElement(FullscreenButton, null)),
        fullscreen: resolveFullscreenProps(fullscreen),
        ...restProps,
    }));
    addParent(contains(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_THUMBNAILS */ .dA) ? _types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_THUMBNAILS */ .dA : _types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_CONTROLLER */ .l4, (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createModule */ .l6)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_FULLSCREEN */ .zr, FullscreenContextProvider));
}




/***/ }),

/***/ 51196:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/yet-another-react-lightbox@3.11.3/node_modules/yet-another-react-lightbox/dist/plugins/slideshow/index.js ***!
  \**************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Slideshow; }
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index.js */ 19025);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 93236);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ 70270);




const defaultSlideshowProps = {
    autoplay: false,
    delay: 3000,
    ref: null,
};
const resolveSlideshowProps = (slideshow) => ({
    ...defaultSlideshowProps,
    ...slideshow,
});

const SlideshowContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useSlideshow = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeUseContext */ .Fy)("useSlideshow", "SlideshowContext", SlideshowContext);
function SlideshowContextProvider({ slideshow, carousel: { finite }, on, children }) {
    const { autoplay, delay, ref } = resolveSlideshowProps(slideshow);
    const wasPlaying = react__WEBPACK_IMPORTED_MODULE_0__.useRef(autoplay);
    const [playing, setPlaying] = react__WEBPACK_IMPORTED_MODULE_0__.useState(autoplay);
    const scheduler = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const slideStatus = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const { slides, currentIndex } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxState */ .oc)();
    const { setTimeout, clearTimeout } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useTimeouts */ .aU)();
    const { subscribe } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEvents */ .hI)();
    const { next } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useController */ .bc)();
    const disabled = slides.length === 0 || (finite && currentIndex === slides.length - 1);
    const play = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        if (!playing && !disabled) {
            setPlaying(true);
        }
    }, [playing, disabled]);
    const pause = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        if (playing) {
            setPlaying(false);
        }
    }, [playing]);
    const cancelScheduler = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        clearTimeout(scheduler.current);
        scheduler.current = undefined;
    }, [clearTimeout]);
    const scheduleNextSlide = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)(() => {
        cancelScheduler();
        if (!playing ||
            disabled ||
            slideStatus.current === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_LOADING */ .Xe ||
            slideStatus.current === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_PLAYING */ .hP) {
            return;
        }
        scheduler.current = setTimeout(() => {
            if (playing) {
                slideStatus.current = undefined;
                next();
            }
        }, delay);
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(scheduleNextSlide, [currentIndex, playing, scheduleNextSlide]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (playing && disabled) {
            setPlaying(false);
        }
    }, [currentIndex, playing, disabled]);
    const onSlideshowStart = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)(() => { var _a; return (_a = on.slideshowStart) === null || _a === void 0 ? void 0 : _a.call(on); });
    const onSlideshowStop = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)(() => { var _a; return (_a = on.slideshowStop) === null || _a === void 0 ? void 0 : _a.call(on); });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (playing) {
            onSlideshowStart();
        }
        else if (wasPlaying.current) {
            onSlideshowStop();
        }
        wasPlaying.current = playing;
    }, [playing, onSlideshowStart, onSlideshowStop]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cleanup */ .Eq)(cancelScheduler, subscribe(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTIVE_SLIDE_LOADING */ .p7, () => {
        slideStatus.current = _types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_LOADING */ .Xe;
        cancelScheduler();
    }), subscribe(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTIVE_SLIDE_PLAYING */ .fV, () => {
        slideStatus.current = _types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_PLAYING */ .hP;
        cancelScheduler();
    }), subscribe(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTIVE_SLIDE_ERROR */ .vP, () => {
        slideStatus.current = _types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_ERROR */ .fS;
        scheduleNextSlide();
    }), subscribe(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTIVE_SLIDE_COMPLETE */ .LN, () => {
        slideStatus.current = _types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_COMPLETE */ .Zv;
        scheduleNextSlide();
    })), [subscribe, cancelScheduler, scheduleNextSlide]);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({ playing, disabled, play, pause }), [playing, disabled, play, pause]);
    react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, () => context, [context]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SlideshowContext.Provider, { value: context }, children);
}

const PlayIcon = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .U2)("Play", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M8 5v14l11-7z" }));
const PauseIcon = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .U2)("Pause", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" }));
function SlideshowButton() {
    const { playing, disabled, play, pause } = useSlideshow();
    const { render } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    const focusListeners = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLoseFocus */ .d8)((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useController */ .bc)().focus, disabled);
    if (render.buttonSlideshow) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, render.buttonSlideshow({ playing, disabled, play, pause }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__/* .IconButton */ .hU, { label: playing ? "Pause" : "Play", icon: playing ? PauseIcon : PlayIcon, renderIcon: playing ? render.iconSlideshowPause : render.iconSlideshowPlay, onClick: playing ? pause : play, disabled: disabled, ...focusListeners }));
}

function Slideshow({ augment, addModule }) {
    augment(({ slideshow, toolbar, ...restProps }) => ({
        toolbar: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .addToolbarButton */ .wQ)(toolbar, _types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_SLIDESHOW */ .HY, react__WEBPACK_IMPORTED_MODULE_0__.createElement(SlideshowButton, null)),
        slideshow: resolveSlideshowProps(slideshow),
        ...restProps,
    }));
    addModule((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createModule */ .l6)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_SLIDESHOW */ .HY, SlideshowContextProvider));
}




/***/ }),

/***/ 62517:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/yet-another-react-lightbox@3.11.3/node_modules/yet-another-react-lightbox/dist/plugins/zoom/index.js ***!
  \*********************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Zoom; }
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index.js */ 19025);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 93236);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ 70270);




const defaultZoomProps = {
    maxZoomPixelRatio: 1,
    zoomInMultiplier: 2,
    doubleTapDelay: 300,
    doubleClickDelay: 500,
    doubleClickMaxStops: 2,
    keyboardMoveDistance: 50,
    wheelZoomDistanceFactor: 100,
    pinchZoomDistanceFactor: 100,
    scrollToZoom: false,
};
const resolveZoomProps = (zoom) => ({
    ...defaultZoomProps,
    ...zoom,
});

function useZoomAnimation(zoom, offsetX, offsetY, zoomWrapperRef) {
    const zoomAnimation = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const zoomAnimationStart = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const { zoom: zoomAnimationDuration } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)().animation;
    const reduceMotion = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useMotionPreference */ .OL)();
    const playZoomAnimation = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)(() => {
        var _a, _b, _c;
        (_a = zoomAnimation.current) === null || _a === void 0 ? void 0 : _a.cancel();
        zoomAnimation.current = undefined;
        if (zoomAnimationStart.current && (zoomWrapperRef === null || zoomWrapperRef === void 0 ? void 0 : zoomWrapperRef.current)) {
            try {
                zoomAnimation.current = (_c = (_b = zoomWrapperRef.current).animate) === null || _c === void 0 ? void 0 : _c.call(_b, [
                    { transform: zoomAnimationStart.current },
                    { transform: `scale(${zoom}) translateX(${offsetX}px) translateY(${offsetY}px)` },
                ], {
                    duration: !reduceMotion ? zoomAnimationDuration !== null && zoomAnimationDuration !== void 0 ? zoomAnimationDuration : 500 : 0,
                    easing: zoomAnimation.current ? "ease-out" : "ease-in-out",
                });
            }
            catch (err) {
                console.error(err);
            }
            zoomAnimationStart.current = undefined;
            if (zoomAnimation.current) {
                zoomAnimation.current.onfinish = () => {
                    zoomAnimation.current = undefined;
                };
            }
        }
    });
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(playZoomAnimation, [zoom, offsetX, offsetY, playZoomAnimation]);
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        zoomAnimationStart.current = (zoomWrapperRef === null || zoomWrapperRef === void 0 ? void 0 : zoomWrapperRef.current)
            ? window.getComputedStyle(zoomWrapperRef.current).transform
            : undefined;
    }, [zoomWrapperRef]);
}

function useZoomCallback(zoom, disabled) {
    const { on } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    const onZoomCallback = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)(() => {
        var _a;
        if (!disabled) {
            (_a = on.zoom) === null || _a === void 0 ? void 0 : _a.call(on, { zoom });
        }
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(onZoomCallback, [zoom, onZoomCallback]);
}

function useZoomProps() {
    const { zoom } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    return resolveZoomProps(zoom);
}

function useZoomImageRect(slideRect, imageDimensions) {
    var _a, _b;
    let imageRect = { width: 0, height: 0 };
    let maxImageRect = { width: 0, height: 0 };
    const { slides, currentIndex } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxState */ .oc)();
    const { imageFit } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)().carousel;
    const { maxZoomPixelRatio } = useZoomProps();
    if (slideRect && currentIndex < slides.length) {
        const slide = { ...slides[currentIndex], ...imageDimensions };
        if ((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isImageSlide */ .QB)(slide)) {
            const cover = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isImageFitCover */ .VI)(slide, imageFit);
            const width = Math.max(...(((_a = slide.srcSet) === null || _a === void 0 ? void 0 : _a.map((x) => x.width)) || []).concat(slide.width ? [slide.width] : []));
            const height = Math.max(...(((_b = slide.srcSet) === null || _b === void 0 ? void 0 : _b.map((x) => x.height)) || []).concat(slide.height ? [slide.height] : []));
            if (width > 0 && height > 0 && slideRect.width > 0 && slideRect.height > 0) {
                maxImageRect = cover
                    ? {
                        width: Math.round(Math.min(width, (slideRect.width / slideRect.height) * height)),
                        height: Math.round(Math.min(height, (slideRect.height / slideRect.width) * width)),
                    }
                    : { width, height };
                maxImageRect = {
                    width: maxImageRect.width * maxZoomPixelRatio,
                    height: maxImageRect.height * maxZoomPixelRatio,
                };
                imageRect = cover
                    ? {
                        width: Math.min(slideRect.width, maxImageRect.width, width),
                        height: Math.min(slideRect.height, maxImageRect.height, height),
                    }
                    : {
                        width: Math.round(Math.min(slideRect.width, (slideRect.height / height) * width, width)),
                        height: Math.round(Math.min(slideRect.height, (slideRect.width / width) * height, height)),
                    };
            }
        }
    }
    const maxZoom = imageRect.width ? Math.max((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .round */ .NM)(maxImageRect.width / imageRect.width, 5), 1) : 1;
    return { imageRect, maxZoom };
}

function distance(pointerA, pointerB) {
    return ((pointerA.clientX - pointerB.clientX) ** 2 + (pointerA.clientY - pointerB.clientY) ** 2) ** 0.5;
}
function useZoomSensors(zoom, maxZoom, disabled, changeZoom, changeOffsets, zoomWrapperRef) {
    const activePointers = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);
    const lastPointerDown = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const pinchZoomDistance = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const { globalIndex } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxState */ .oc)();
    const { containerRef, subscribeSensors } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useController */ .bc)();
    const { keyboardMoveDistance, zoomInMultiplier, wheelZoomDistanceFactor, scrollToZoom, doubleTapDelay, doubleClickDelay, doubleClickMaxStops, pinchZoomDistanceFactor, } = useZoomProps();
    const translateCoordinates = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        if (containerRef.current) {
            const { pageX, pageY } = event;
            const { scrollX, scrollY } = window;
            const { left, top, width, height } = containerRef.current.getBoundingClientRect();
            return [pageX - left - scrollX - width / 2, pageY - top - scrollY - height / 2];
        }
        return [];
    }, [containerRef]);
    const onKeyDown = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)((event) => {
        const preventDefault = () => {
            event.preventDefault();
            event.stopPropagation();
        };
        if (zoom > 1) {
            const move = (deltaX, deltaY) => {
                preventDefault();
                changeOffsets(deltaX, deltaY);
            };
            if (event.key === "ArrowDown") {
                move(0, keyboardMoveDistance);
            }
            else if (event.key === "ArrowUp") {
                move(0, -keyboardMoveDistance);
            }
            else if (event.key === "ArrowLeft") {
                move(-keyboardMoveDistance, 0);
            }
            else if (event.key === "ArrowRight") {
                move(keyboardMoveDistance, 0);
            }
        }
        const handleChangeZoom = (zoomValue) => {
            preventDefault();
            changeZoom(zoomValue);
        };
        const hasMeta = () => event.getModifierState("Meta");
        if (event.key === "+" || (event.key === "=" && hasMeta())) {
            handleChangeZoom(zoom * zoomInMultiplier);
        }
        else if (event.key === "-" || (event.key === "_" && hasMeta())) {
            handleChangeZoom(zoom / zoomInMultiplier);
        }
        else if (event.key === "0" && hasMeta()) {
            handleChangeZoom(1);
        }
    });
    const onWheel = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)((event) => {
        if (event.ctrlKey || scrollToZoom) {
            if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
                event.stopPropagation();
                changeZoom(zoom * (1 - event.deltaY / wheelZoomDistanceFactor), true, ...translateCoordinates(event));
                return;
            }
        }
        if (zoom > 1) {
            event.stopPropagation();
            if (!scrollToZoom) {
                changeOffsets(event.deltaX, event.deltaY);
            }
        }
    });
    const clearPointer = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        const pointers = activePointers.current;
        pointers.splice(0, pointers.length, ...pointers.filter((p) => p.pointerId !== event.pointerId));
    }, []);
    const replacePointer = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        clearPointer(event);
        event.persist();
        activePointers.current.push(event);
    }, [clearPointer]);
    const onPointerDown = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)((event) => {
        var _a;
        const pointers = activePointers.current;
        if (!((_a = zoomWrapperRef === null || zoomWrapperRef === void 0 ? void 0 : zoomWrapperRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
            return;
        }
        if (zoom > 1) {
            event.stopPropagation();
        }
        const { timeStamp } = event;
        if (pointers.length === 0 &&
            timeStamp - lastPointerDown.current < (event.pointerType === "touch" ? doubleTapDelay : doubleClickDelay)) {
            lastPointerDown.current = 0;
            changeZoom(zoom !== maxZoom ? zoom * Math.max(maxZoom ** (1 / doubleClickMaxStops), zoomInMultiplier) : 1, false, ...translateCoordinates(event));
        }
        else {
            lastPointerDown.current = timeStamp;
        }
        replacePointer(event);
        if (pointers.length === 2) {
            pinchZoomDistance.current = distance(pointers[0], pointers[1]);
        }
    });
    const onPointerMove = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)((event) => {
        const pointers = activePointers.current;
        const activePointer = pointers.find((p) => p.pointerId === event.pointerId);
        if (pointers.length === 2 && pinchZoomDistance.current) {
            event.stopPropagation();
            replacePointer(event);
            const currentDistance = distance(pointers[0], pointers[1]);
            const delta = currentDistance - pinchZoomDistance.current;
            if (Math.abs(delta) > 0) {
                changeZoom(zoom * (1 + delta / pinchZoomDistanceFactor), true, ...pointers
                    .map((x) => translateCoordinates(x))
                    .reduce((acc, coordinate) => coordinate.map((x, i) => acc[i] + x / 2)));
                pinchZoomDistance.current = currentDistance;
            }
            return;
        }
        if (zoom > 1) {
            event.stopPropagation();
            if (activePointer) {
                if (pointers.length === 1) {
                    changeOffsets((activePointer.clientX - event.clientX) / zoom, (activePointer.clientY - event.clientY) / zoom);
                }
                replacePointer(event);
            }
        }
    });
    const onPointerUp = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        const pointers = activePointers.current;
        if (pointers.length === 2 && pointers.find((p) => p.pointerId === event.pointerId)) {
            pinchZoomDistance.current = undefined;
        }
        clearPointer(event);
    }, [clearPointer]);
    const cleanupSensors = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        const pointers = activePointers.current;
        pointers.splice(0, pointers.length);
        lastPointerDown.current = 0;
        pinchZoomDistance.current = undefined;
    }, []);
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .usePointerEvents */ .bQ)(subscribeSensors, onPointerDown, onPointerMove, onPointerUp, disabled);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(cleanupSensors, [globalIndex, cleanupSensors]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (!disabled) {
            return (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cleanup */ .Eq)(cleanupSensors, subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_KEY_DOWN */ .ds, onKeyDown), subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_WHEEL */ .yq, onWheel));
        }
        return () => { };
    }, [disabled, subscribeSensors, cleanupSensors, onKeyDown, onWheel]);
}

function getCurrentSource(slides, currentIndex) {
    if (currentIndex < slides.length) {
        const slide = slides[currentIndex];
        if ((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isImageSlide */ .QB)(slide))
            return slide.src;
    }
    return undefined;
}
function useZoomState(imageRect, maxZoom, zoomWrapperRef) {
    const [zoom, setZoom] = react__WEBPACK_IMPORTED_MODULE_0__.useState(1);
    const [offsetX, setOffsetX] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
    const [offsetY, setOffsetY] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
    const animate = useZoomAnimation(zoom, offsetX, offsetY, zoomWrapperRef);
    const { slides, currentIndex, globalIndex } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxState */ .oc)();
    const { containerRect, slideRect } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useController */ .bc)();
    const { zoomInMultiplier } = useZoomProps();
    const currentSource = getCurrentSource(slides, currentIndex);
    const disabled = !currentSource || !(zoomWrapperRef === null || zoomWrapperRef === void 0 ? void 0 : zoomWrapperRef.current);
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(() => {
        setZoom(1);
        setOffsetX(0);
        setOffsetY(0);
    }, [globalIndex, currentSource]);
    const changeOffsets = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((dx, dy, targetZoom) => {
        const newZoom = targetZoom || zoom;
        const newOffsetX = offsetX - (dx || 0);
        const newOffsetY = offsetY - (dy || 0);
        const maxOffsetX = (imageRect.width * newZoom - slideRect.width) / 2 / newZoom;
        const maxOffsetY = (imageRect.height * newZoom - slideRect.height) / 2 / newZoom;
        setOffsetX(Math.min(Math.abs(newOffsetX), Math.max(maxOffsetX, 0)) * Math.sign(newOffsetX));
        setOffsetY(Math.min(Math.abs(newOffsetY), Math.max(maxOffsetY, 0)) * Math.sign(newOffsetY));
    }, [zoom, offsetX, offsetY, slideRect, imageRect.width, imageRect.height]);
    const changeZoom = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((value, rapid, dx, dy) => {
        const newZoom = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .round */ .NM)(Math.min(Math.max(value + 0.001 < maxZoom ? value : maxZoom, 1), maxZoom), 5);
        if (newZoom === zoom)
            return;
        if (!rapid) {
            animate();
        }
        changeOffsets(dx ? dx * (1 / zoom - 1 / newZoom) : 0, dy ? dy * (1 / zoom - 1 / newZoom) : 0, newZoom);
        setZoom(newZoom);
    }, [zoom, maxZoom, changeOffsets, animate]);
    const handleControllerRectChange = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)(() => {
        if (zoom > 1) {
            if (zoom > maxZoom) {
                changeZoom(maxZoom, true);
            }
            changeOffsets();
        }
    });
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(handleControllerRectChange, [
        containerRect.width,
        containerRect.height,
        handleControllerRectChange,
    ]);
    const zoomIn = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => changeZoom(zoom * zoomInMultiplier), [zoom, zoomInMultiplier, changeZoom]);
    const zoomOut = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => changeZoom(zoom / zoomInMultiplier), [zoom, zoomInMultiplier, changeZoom]);
    return { zoom, offsetX, offsetY, disabled, changeOffsets, changeZoom, zoomIn, zoomOut };
}

const ZoomControllerContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useZoom = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeUseContext */ .Fy)("useZoom", "ZoomControllerContext", ZoomControllerContext);
function ZoomContextProvider({ children }) {
    const [zoomWrapper, setZoomWrapper] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const { slideRect } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useController */ .bc)();
    const { imageRect, maxZoom } = useZoomImageRect(slideRect, zoomWrapper === null || zoomWrapper === void 0 ? void 0 : zoomWrapper.imageDimensions);
    const { zoom, offsetX, offsetY, disabled, changeZoom, changeOffsets, zoomIn, zoomOut } = useZoomState(imageRect, maxZoom, zoomWrapper === null || zoomWrapper === void 0 ? void 0 : zoomWrapper.zoomWrapperRef);
    useZoomCallback(zoom, disabled);
    useZoomSensors(zoom, maxZoom, disabled, changeZoom, changeOffsets, zoomWrapper === null || zoomWrapper === void 0 ? void 0 : zoomWrapper.zoomWrapperRef);
    const zoomRef = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({ zoom, maxZoom, offsetX, offsetY, disabled, zoomIn, zoomOut }), [zoom, maxZoom, offsetX, offsetY, disabled, zoomIn, zoomOut]);
    react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(useZoomProps().ref, () => zoomRef, [zoomRef]);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({ ...zoomRef, setZoomWrapper }), [zoomRef, setZoomWrapper]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ZoomControllerContext.Provider, { value: context }, children);
}

const ZoomInIcon = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .U2)("ZoomIn", react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" })));
const ZoomOutIcon = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .U2)("ZoomOut", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" }));
const ZoomButton = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function ZoomButton({ zoomIn, onLoseFocus }, ref) {
    const wasEnabled = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const wasFocused = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const { zoom, maxZoom, zoomIn: zoomInCallback, zoomOut: zoomOutCallback, disabled: zoomDisabled } = useZoom();
    const { render } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    const disabled = zoomDisabled || (zoomIn ? zoom >= maxZoom : zoom <= 1);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (disabled && wasEnabled.current && wasFocused.current) {
            onLoseFocus();
        }
        if (!disabled) {
            wasEnabled.current = true;
        }
    }, [disabled, onLoseFocus]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__/* .IconButton */ .hU, { ref: ref, disabled: disabled, label: zoomIn ? "Zoom in" : "Zoom out", icon: zoomIn ? ZoomInIcon : ZoomOutIcon, renderIcon: zoomIn ? render.iconZoomIn : render.iconZoomOut, onClick: zoomIn ? zoomInCallback : zoomOutCallback, onFocus: () => {
            wasFocused.current = true;
        }, onBlur: () => {
            wasFocused.current = false;
        } }));
});

function ZoomButtonsGroup() {
    const zoomInRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const zoomOutRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const { focus } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useController */ .bc)();
    const focusSibling = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((sibling) => {
        var _a, _b;
        if (!((_a = sibling.current) === null || _a === void 0 ? void 0 : _a.disabled)) {
            (_b = sibling.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
        else {
            focus();
        }
    }, [focus]);
    const focusZoomIn = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => focusSibling(zoomInRef), [focusSibling]);
    const focusZoomOut = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => focusSibling(zoomOutRef), [focusSibling]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(ZoomButton, { zoomIn: true, ref: zoomInRef, onLoseFocus: focusZoomOut }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(ZoomButton, { ref: zoomOutRef, onLoseFocus: focusZoomIn })));
}

function ZoomToolbarControl() {
    const { render } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    const zoomRef = useZoom();
    if (render.buttonZoom) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, render.buttonZoom(zoomRef));
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ZoomButtonsGroup, null);
}

function isResponsiveImageSlide(slide) {
    var _a;
    return (((_a = slide.srcSet) === null || _a === void 0 ? void 0 : _a.length) || 0) > 0;
}
function reducer({ current, preload }, { type, source }) {
    switch (type) {
        case "fetch":
            if (!current) {
                return { current: source };
            }
            return { current, preload: source };
        case "done":
            if (source === preload) {
                return { current: source };
            }
            return { current, preload };
        default:
            throw new Error(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .UNKNOWN_ACTION_TYPE */ .c3);
    }
}
function ResponsiveImage(props) {
    var _a, _b;
    const [{ current, preload }, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__.useReducer(reducer, {});
    const { slide: image, rect, imageFit, render } = props;
    const srcSet = image.srcSet.sort((a, b) => a.width - b.width);
    const width = (_a = image.width) !== null && _a !== void 0 ? _a : srcSet[srcSet.length - 1].width;
    const height = (_b = image.height) !== null && _b !== void 0 ? _b : srcSet[srcSet.length - 1].height;
    const cover = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isImageFitCover */ .VI)(image, imageFit);
    const maxWidth = Math.max(...srcSet.map((x) => x.width));
    const targetWidth = Math.min((cover ? Math.max : Math.min)(rect.width, width * (rect.height / height)), maxWidth);
    const pixelDensity = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .devicePixelRatio */ .KL)();
    const handleResize = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)(() => {
        var _a;
        const targetSource = (_a = srcSet.find((x) => x.width >= targetWidth * pixelDensity)) !== null && _a !== void 0 ? _a : srcSet[srcSet.length - 1];
        if (!current || srcSet.findIndex((x) => x.src === current) < srcSet.findIndex((x) => x === targetSource)) {
            dispatch({ type: "fetch", source: targetSource.src });
        }
    });
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(handleResize, [rect.width, rect.height, pixelDensity, handleResize]);
    const handlePreload = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)((currentPreload) => dispatch({ type: "done", source: currentPreload }));
    const style = {
        WebkitTransform: "translateZ(0)",
    };
    if (!cover) {
        Object.assign(style, rect.width / rect.height < width / height
            ? { width: "100%", height: "auto" }
            : { width: "auto", height: "100%" });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        preload && preload !== current && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ImageSlide */ .P0, { key: "preload", ...props, slide: { ...image, src: preload, srcSet: undefined }, style: { position: "absolute", visibility: "hidden", ...style }, onLoad: () => handlePreload(preload), render: {
                ...render,
                iconLoading: () => null,
                iconError: () => null,
            } })),
        current && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ImageSlide */ .P0, { key: "current", ...props, slide: { ...image, src: current, srcSet: undefined }, style: style }))));
}

function ZoomWrapper({ render, slide, offset, rect }) {
    var _a;
    const [imageDimensions, setImageDimensions] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const zoomWrapperRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const { zoom, maxZoom, offsetX, offsetY, setZoomWrapper } = useZoom();
    const { carousel, on } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    const { currentIndex } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxState */ .oc)();
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(() => {
        if (offset === 0) {
            setZoomWrapper({ zoomWrapperRef, imageDimensions });
            return () => setZoomWrapper(undefined);
        }
        return () => { };
    }, [offset, imageDimensions, setZoomWrapper]);
    let rendered = (_a = render.slide) === null || _a === void 0 ? void 0 : _a.call(render, { slide, offset, rect, zoom, maxZoom });
    if (!rendered && (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isImageSlide */ .QB)(slide)) {
        const slideProps = {
            slide,
            offset,
            rect,
            render,
            imageFit: carousel.imageFit,
            imageProps: carousel.imageProps,
            onClick: offset === 0 ? () => { var _a; return (_a = on.click) === null || _a === void 0 ? void 0 : _a.call(on, { index: currentIndex }); } : undefined,
        };
        rendered = isResponsiveImageSlide(slide) ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ResponsiveImage, { key: slide.src, ...slideProps, slide: slide, rect: offset === 0 ? { width: rect.width * zoom, height: rect.height * zoom } : rect })) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ImageSlide */ .P0, { key: slide.src, onLoad: (img) => setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight }), ...slideProps }));
    }
    if (!rendered)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: zoomWrapperRef, className: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .Wy)((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_FULLSIZE */ .yS), (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_FLEX_CENTER */ .aN)), style: offset === 0
            ? { transform: `scale(${zoom}) translateX(${offsetX}px) translateY(${offsetY}px)` }
            : undefined }, rendered));
}

const Zoom = ({ augment, addModule }) => {
    augment(({ toolbar, render, zoom, ...restProps }) => ({
        zoom: resolveZoomProps(zoom),
        toolbar: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .addToolbarButton */ .wQ)(toolbar, _types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ZOOM */ .xc, react__WEBPACK_IMPORTED_MODULE_0__.createElement(ZoomToolbarControl, null)),
        render: {
            ...render,
            slide: (props) => { var _a; return (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isImageSlide */ .QB)(props.slide) ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(ZoomWrapper, { render: render, ...props }) : (_a = render.slide) === null || _a === void 0 ? void 0 : _a.call(render, props); },
        },
        ...restProps,
    }));
    addModule((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createModule */ .l6)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ZOOM */ .xc, ZoomContextProvider));
};




/***/ }),

/***/ 70270:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/yet-another-react-lightbox@3.11.3/node_modules/yet-another-react-lightbox/dist/types.js ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$L": function() { return /* binding */ SLIDE_STATUS_PLACEHOLDER; },
/* harmony export */   "Bm": function() { return /* binding */ EVENT_ON_KEY_UP; },
/* harmony export */   "Eb": function() { return /* binding */ ACTION_NEXT; },
/* harmony export */   "HE": function() { return /* binding */ MODULE_NO_SCROLL; },
/* harmony export */   "HY": function() { return /* binding */ PLUGIN_SLIDESHOW; },
/* harmony export */   "J1": function() { return /* binding */ activeSlideStatus; },
/* harmony export */   "JT": function() { return /* binding */ PLUGIN_CAPTIONS; },
/* harmony export */   "KN": function() { return /* binding */ ACTION_PREV; },
/* harmony export */   "LN": function() { return /* binding */ ACTIVE_SLIDE_COMPLETE; },
/* harmony export */   "M9": function() { return /* binding */ CLASS_NO_SCROLL_PADDING; },
/* harmony export */   "N4": function() { return /* binding */ EVENT_ON_POINTER_MOVE; },
/* harmony export */   "NH": function() { return /* binding */ VK_ARROW_RIGHT; },
/* harmony export */   "NZ": function() { return /* binding */ EVENT_ON_POINTER_DOWN; },
/* harmony export */   "Op": function() { return /* binding */ MODULE_NAVIGATION; },
/* harmony export */   "PU": function() { return /* binding */ VK_ESCAPE; },
/* harmony export */   "S2": function() { return /* binding */ EVENT_ON_POINTER_UP; },
/* harmony export */   "SA": function() { return /* binding */ MODULE_PORTAL; },
/* harmony export */   "Sl": function() { return /* binding */ VK_ARROW_LEFT; },
/* harmony export */   "Tf": function() { return /* binding */ CLASS_NO_SCROLL; },
/* harmony export */   "Tn": function() { return /* binding */ ACTION_SWIPE; },
/* harmony export */   "Vt": function() { return /* binding */ EVENT_ON_POINTER_CANCEL; },
/* harmony export */   "Xe": function() { return /* binding */ SLIDE_STATUS_LOADING; },
/* harmony export */   "Zv": function() { return /* binding */ SLIDE_STATUS_COMPLETE; },
/* harmony export */   "aN": function() { return /* binding */ CLASS_FLEX_CENTER; },
/* harmony export */   "bg": function() { return /* binding */ ELEMENT_BUTTON; },
/* harmony export */   "c3": function() { return /* binding */ UNKNOWN_ACTION_TYPE; },
/* harmony export */   "dA": function() { return /* binding */ PLUGIN_THUMBNAILS; },
/* harmony export */   "ds": function() { return /* binding */ EVENT_ON_KEY_DOWN; },
/* harmony export */   "fS": function() { return /* binding */ SLIDE_STATUS_ERROR; },
/* harmony export */   "fV": function() { return /* binding */ ACTIVE_SLIDE_PLAYING; },
/* harmony export */   "hP": function() { return /* binding */ SLIDE_STATUS_PLAYING; },
/* harmony export */   "hb": function() { return /* binding */ MODULE_TOOLBAR; },
/* harmony export */   "j3": function() { return /* binding */ IMAGE_FIT_CONTAIN; },
/* harmony export */   "k0": function() { return /* binding */ MODULE_CAROUSEL; },
/* harmony export */   "l4": function() { return /* binding */ MODULE_CONTROLLER; },
/* harmony export */   "lT": function() { return /* binding */ MODULE_ROOT; },
/* harmony export */   "p7": function() { return /* binding */ ACTIVE_SLIDE_LOADING; },
/* harmony export */   "pE": function() { return /* binding */ EVENT_ON_POINTER_LEAVE; },
/* harmony export */   "rO": function() { return /* binding */ IMAGE_FIT_COVER; },
/* harmony export */   "t9": function() { return /* binding */ ACTION_CLOSE; },
/* harmony export */   "vP": function() { return /* binding */ ACTIVE_SLIDE_ERROR; },
/* harmony export */   "vg": function() { return /* binding */ ELEMENT_ICON; },
/* harmony export */   "xc": function() { return /* binding */ PLUGIN_ZOOM; },
/* harmony export */   "yS": function() { return /* binding */ CLASS_FULLSIZE; },
/* harmony export */   "yq": function() { return /* binding */ EVENT_ON_WHEEL; },
/* harmony export */   "zr": function() { return /* binding */ PLUGIN_FULLSCREEN; }
/* harmony export */ });
/* unused harmony exports PLUGIN_COUNTER, PLUGIN_DOWNLOAD, PLUGIN_INLINE, PLUGIN_SHARE */
const MODULE_CAROUSEL = "carousel";
const MODULE_CONTROLLER = "controller";
const MODULE_NAVIGATION = "navigation";
const MODULE_NO_SCROLL = "no-scroll";
const MODULE_PORTAL = "portal";
const MODULE_ROOT = "root";
const MODULE_TOOLBAR = "toolbar";
const PLUGIN_CAPTIONS = "captions";
const PLUGIN_COUNTER = "counter";
const PLUGIN_DOWNLOAD = "download";
const PLUGIN_FULLSCREEN = "fullscreen";
const PLUGIN_INLINE = "inline";
const PLUGIN_SHARE = "share";
const PLUGIN_SLIDESHOW = "slideshow";
const PLUGIN_THUMBNAILS = "thumbnails";
const PLUGIN_ZOOM = "zoom";
const SLIDE_STATUS_LOADING = "loading";
const SLIDE_STATUS_PLAYING = "playing";
const SLIDE_STATUS_ERROR = "error";
const SLIDE_STATUS_COMPLETE = "complete";
const SLIDE_STATUS_PLACEHOLDER = "placeholder";
const activeSlideStatus = (status) => `active-slide-${status}`;
const ACTIVE_SLIDE_LOADING = activeSlideStatus(SLIDE_STATUS_LOADING);
const ACTIVE_SLIDE_PLAYING = activeSlideStatus(SLIDE_STATUS_PLAYING);
const ACTIVE_SLIDE_ERROR = activeSlideStatus(SLIDE_STATUS_ERROR);
const ACTIVE_SLIDE_COMPLETE = activeSlideStatus(SLIDE_STATUS_COMPLETE);
const CLASS_FULLSIZE = "fullsize";
const CLASS_FLEX_CENTER = "flex_center";
const CLASS_NO_SCROLL = "no_scroll";
const CLASS_NO_SCROLL_PADDING = "no_scroll_padding";
const ACTION_PREV = "prev";
const ACTION_NEXT = "next";
const ACTION_SWIPE = "swipe";
const ACTION_CLOSE = "close";
const EVENT_ON_POINTER_DOWN = "onPointerDown";
const EVENT_ON_POINTER_MOVE = "onPointerMove";
const EVENT_ON_POINTER_UP = "onPointerUp";
const EVENT_ON_POINTER_LEAVE = "onPointerLeave";
const EVENT_ON_POINTER_CANCEL = "onPointerCancel";
const EVENT_ON_KEY_DOWN = "onKeyDown";
const EVENT_ON_KEY_UP = "onKeyUp";
const EVENT_ON_WHEEL = "onWheel";
const VK_ESCAPE = "Escape";
const VK_ARROW_LEFT = "ArrowLeft";
const VK_ARROW_RIGHT = "ArrowRight";
const ELEMENT_BUTTON = "button";
const ELEMENT_ICON = "icon";
const IMAGE_FIT_CONTAIN = "contain";
const IMAGE_FIT_COVER = "cover";
const UNKNOWN_ACTION_TYPE = "Unknown action type";




/***/ })

}]);