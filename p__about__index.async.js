"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[289],{

/***/ 40693:
/*!***********************************************!*\
  !*** ./src/pages/about/index.tsx + 3 modules ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ about; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/grid/row.js
var row = __webpack_require__(53825);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/row/index.js

/* harmony default export */ var es_row = (row/* default */.Z);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/grid/col.js
var col = __webpack_require__(22581);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/col/index.js

/* harmony default export */ var es_col = (col/* default */.Z);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 13 modules
var _umi_production_exports = __webpack_require__(310);
;// CONCATENATED MODULE: ./src/pages/about/index.css?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var aboutmodules = ({"box":"box___WWk45","item":"item___ocPxP","title":"title___xL5qW","content":"content___JebCM","green":"green___Yb08L","tipColor":"tipColor___MdiUy","fontBold":"fontBold___dlLlw","bImg":"bImg___k02iN","mobile":"mobile___n2UnJ","web":"web___ZJZlT","mobileBg":"mobileBg___cZNm2","mobileTitle":"mobileTitle___TnhHn","mobileContent":"mobileContent___alJw3"});
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(62086);
;// CONCATENATED MODULE: ./src/pages/about/index.tsx





/* harmony default export */ var about = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: aboutmodules.box,
    style: {
      marginTop: '56px'
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(es_row, {
      className: aboutmodules.web,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_col, {
        span: 12,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: aboutmodules.item,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: aboutmodules.title,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.FormattedMessage, {
              id: "aboutme"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: aboutmodules.content,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.FormattedMessage, {
              id: "description_1"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.FormattedMessage, {
              id: "description_2"
            }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), " \u200B", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.FormattedMessage, {
              id: "description_3"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})]
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_col, {
        span: 12,
        className: aboutmodules.bImg
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(es_row, {
      className: aboutmodules.mobile,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: aboutmodules.mobileBg
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: aboutmodules.mobileTitle,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.FormattedMessage, {
            id: "aboutme"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: aboutmodules.mobileContent,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.FormattedMessage, {
            id: "description_1"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.FormattedMessage, {
            id: "description_2"
          }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.FormattedMessage, {
            id: "description_3"
          })]
        })]
      })]
    })]
  });
});

/***/ }),

/***/ 7345:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/_util/hooks/useFlexGapSupport.js + 1 modules ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ useFlexGapSupport; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(93236);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.0/node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(3770);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/_util/styleChecker.js


const canUseDocElement = () => (0,canUseDom/* default */.Z)() && window.document.documentElement;

let flexGapSupported;
const detectFlexGapSupported = () => {
  if (!canUseDocElement()) {
    return false;
  }
  if (flexGapSupported !== undefined) {
    return flexGapSupported;
  }
  // create flex container with row-gap set
  const flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';
  // create two, elements inside it
  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));
  // append to the DOM (needed to obtain scrollHeight)
  document.body.appendChild(flex);
  flexGapSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
  document.body.removeChild(flex);
  return flexGapSupported;
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/_util/hooks/useFlexGapSupport.js


/* harmony default export */ var useFlexGapSupport = (() => {
  const [flexible, setFlexible] = react.useState(false);
  react.useEffect(() => {
    setFlexible(detectFlexGapSupported());
  }, []);
  return flexible;
});

/***/ }),

/***/ 94232:
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/_util/responsiveObserver.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useResponsiveObserver; },
/* harmony export */   "c": function() { return /* binding */ responsiveArray; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 93236);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/internal */ 53610);


const responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const getResponsiveMap = token => ({
  xs: `(max-width: ${token.screenXSMax}px)`,
  sm: `(min-width: ${token.screenSM}px)`,
  md: `(min-width: ${token.screenMD}px)`,
  lg: `(min-width: ${token.screenLG}px)`,
  xl: `(min-width: ${token.screenXL}px)`,
  xxl: `(min-width: ${token.screenXXL}px)`
});
/**
 * Ensures that the breakpoints token are valid, in good order
 * For each breakpoint : screenMin <= screen <= screenMax and screenMax <= nextScreenMin
 */
const validateBreakpoints = token => {
  const indexableToken = token;
  const revBreakpoints = [].concat(responsiveArray).reverse();
  revBreakpoints.forEach((breakpoint, i) => {
    const breakpointUpper = breakpoint.toUpperCase();
    const screenMin = `screen${breakpointUpper}Min`;
    const screen = `screen${breakpointUpper}`;
    if (!(indexableToken[screenMin] <= indexableToken[screen])) {
      throw new Error(`${screenMin}<=${screen} fails : !(${indexableToken[screenMin]}<=${indexableToken[screen]})`);
    }
    if (i < revBreakpoints.length - 1) {
      const screenMax = `screen${breakpointUpper}Max`;
      if (!(indexableToken[screen] <= indexableToken[screenMax])) {
        throw new Error(`${screen}<=${screenMax} fails : !(${indexableToken[screen]}<=${indexableToken[screenMax]})`);
      }
      const nextBreakpointUpperMin = revBreakpoints[i + 1].toUpperCase();
      const nextScreenMin = `screen${nextBreakpointUpperMin}Min`;
      if (!(indexableToken[screenMax] <= indexableToken[nextScreenMin])) {
        throw new Error(`${screenMax}<=${nextScreenMin} fails : !(${indexableToken[screenMax]}<=${indexableToken[nextScreenMin]})`);
      }
    }
  });
  return token;
};
function useResponsiveObserver() {
  const [, token] = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_1__/* .useToken */ .dQ)();
  const responsiveMap = getResponsiveMap(validateBreakpoints(token));
  // To avoid repeat create instance, we add `useMemo` here.
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    const subscribers = new Map();
    let subUid = -1;
    let screens = {};
    return {
      matchHandlers: {},
      dispatch(pointMap) {
        screens = pointMap;
        subscribers.forEach(func => func(screens));
        return subscribers.size >= 1;
      },
      subscribe(func) {
        if (!subscribers.size) this.register();
        subUid += 1;
        subscribers.set(subUid, func);
        func(screens);
        return subUid;
      },
      unsubscribe(paramToken) {
        subscribers.delete(paramToken);
        if (!subscribers.size) this.unregister();
      },
      unregister() {
        Object.keys(responsiveMap).forEach(screen => {
          const matchMediaQuery = responsiveMap[screen];
          const handler = this.matchHandlers[matchMediaQuery];
          handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
        });
        subscribers.clear();
      },
      register() {
        Object.keys(responsiveMap).forEach(screen => {
          const matchMediaQuery = responsiveMap[screen];
          const listener = _ref => {
            let {
              matches
            } = _ref;
            this.dispatch(Object.assign(Object.assign({}, screens), {
              [screen]: matches
            }));
          };
          const mql = window.matchMedia(matchMediaQuery);
          mql.addListener(listener);
          this.matchHandlers[matchMediaQuery] = {
            mql,
            listener
          };
          listener(mql);
        });
      },
      responsiveMap
    };
  }, [token]);
}

/***/ }),

/***/ 18343:
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/grid/RowContext.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 93236);

const RowContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ __webpack_exports__["Z"] = (RowContext);

/***/ }),

/***/ 22581:
/*!************************************************************************!*\
  !*** ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/grid/col.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ 84875);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 93236);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config-provider */ 1780);
/* harmony import */ var _RowContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RowContext */ 18343);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ 20143);
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





function parseFlex(flex) {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`;
  }
  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }
  return flex;
}
const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const Col = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((props, ref) => {
  const {
    getPrefixCls,
    direction
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_2__/* .ConfigContext */ .E_);
  const {
    gutter,
    wrap,
    supportFlexGap
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_RowContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
  const {
      prefixCls: customizePrefixCls,
      span,
      order,
      offset,
      push,
      pull,
      className,
      children,
      flex,
      style
    } = props,
    others = __rest(props, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]);
  const prefixCls = getPrefixCls('col', customizePrefixCls);
  const [wrapSSR, hashId] = (0,_style__WEBPACK_IMPORTED_MODULE_4__/* .useColStyle */ .c)(prefixCls);
  let sizeClassObj = {};
  sizes.forEach(size => {
    let sizeProps = {};
    const propSize = props[size];
    if (typeof propSize === 'number') {
      sizeProps.span = propSize;
    } else if (typeof propSize === 'object') {
      sizeProps = propSize || {};
    }
    delete others[size];
    sizeClassObj = Object.assign(Object.assign({}, sizeClassObj), {
      [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
      [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
      [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
      [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
      [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
      [`${prefixCls}-${size}-flex-${sizeProps.flex}`]: sizeProps.flex || sizeProps.flex === 'auto',
      [`${prefixCls}-rtl`]: direction === 'rtl'
    });
  });
  const classes = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, {
    [`${prefixCls}-${span}`]: span !== undefined,
    [`${prefixCls}-order-${order}`]: order,
    [`${prefixCls}-offset-${offset}`]: offset,
    [`${prefixCls}-push-${push}`]: push,
    [`${prefixCls}-pull-${pull}`]: pull
  }, className, sizeClassObj, hashId);
  const mergedStyle = {};
  // Horizontal gutter use padding
  if (gutter && gutter[0] > 0) {
    const horizontalGutter = gutter[0] / 2;
    mergedStyle.paddingLeft = horizontalGutter;
    mergedStyle.paddingRight = horizontalGutter;
  }
  // Vertical gutter use padding when gap not support
  if (gutter && gutter[1] > 0 && !supportFlexGap) {
    const verticalGutter = gutter[1] / 2;
    mergedStyle.paddingTop = verticalGutter;
    mergedStyle.paddingBottom = verticalGutter;
  }
  if (flex) {
    mergedStyle.flex = parseFlex(flex);
    // Hack for Firefox to avoid size issue
    // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
    if (wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0;
    }
  }
  return wrapSSR( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", Object.assign({}, others, {
    style: Object.assign(Object.assign({}, mergedStyle), style),
    className: classes,
    ref: ref
  }), children));
});
if (false) {}
/* harmony default export */ __webpack_exports__["Z"] = (Col);

/***/ }),

/***/ 53825:
/*!************************************************************************!*\
  !*** ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/grid/row.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ 84875);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 93236);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config-provider */ 1780);
/* harmony import */ var _util_hooks_useFlexGapSupport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_util/hooks/useFlexGapSupport */ 7345);
/* harmony import */ var _util_responsiveObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_util/responsiveObserver */ 94232);
/* harmony import */ var _RowContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RowContext */ 18343);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ 20143);
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};







const RowAligns = (/* unused pure expression or super */ null && (['top', 'middle', 'bottom', 'stretch']));
const RowJustify = (/* unused pure expression or super */ null && (['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly']));
function useMergePropByScreen(oriProp, screen) {
  const [prop, setProp] = react__WEBPACK_IMPORTED_MODULE_1__.useState(typeof oriProp === 'string' ? oriProp : '');
  const calcMergeAlignOrJustify = () => {
    if (typeof oriProp === 'string') {
      setProp(oriProp);
    }
    if (typeof oriProp !== 'object') {
      return;
    }
    for (let i = 0; i < _util_responsiveObserver__WEBPACK_IMPORTED_MODULE_2__/* .responsiveArray.length */ .c.length; i++) {
      const breakpoint = _util_responsiveObserver__WEBPACK_IMPORTED_MODULE_2__/* .responsiveArray */ .c[i];
      // if do not match, do nothing
      if (!screen[breakpoint]) continue;
      const curVal = oriProp[breakpoint];
      if (curVal !== undefined) {
        setProp(curVal);
        return;
      }
    }
  };
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    calcMergeAlignOrJustify();
  }, [JSON.stringify(oriProp), screen]);
  return prop;
}
const Row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      justify,
      align,
      className,
      style,
      children,
      gutter = 0,
      wrap
    } = props,
    others = __rest(props, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]);
  const {
    getPrefixCls,
    direction
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_3__/* .ConfigContext */ .E_);
  const [screens, setScreens] = react__WEBPACK_IMPORTED_MODULE_1__.useState({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true
  });
  // to save screens info when responsiveObserve callback had been call
  const [curScreens, setCurScreens] = react__WEBPACK_IMPORTED_MODULE_1__.useState({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false
  });
  // ================================== calc responsive data ==================================
  const mergeAlign = useMergePropByScreen(align, curScreens);
  const mergeJustify = useMergePropByScreen(justify, curScreens);
  const supportFlexGap = (0,_util_hooks_useFlexGapSupport__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
  const gutterRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(gutter);
  const responsiveObserver = (0,_util_responsiveObserver__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  // ================================== Effect ==================================
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    const token = responsiveObserver.subscribe(screen => {
      setCurScreens(screen);
      const currentGutter = gutterRef.current || 0;
      if (!Array.isArray(currentGutter) && typeof currentGutter === 'object' || Array.isArray(currentGutter) && (typeof currentGutter[0] === 'object' || typeof currentGutter[1] === 'object')) {
        setScreens(screen);
      }
    });
    return () => responsiveObserver.unsubscribe(token);
  }, []);
  // ================================== Render ==================================
  const getGutter = () => {
    const results = [undefined, undefined];
    const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, undefined];
    normalizedGutter.forEach((g, index) => {
      if (typeof g === 'object') {
        for (let i = 0; i < _util_responsiveObserver__WEBPACK_IMPORTED_MODULE_2__/* .responsiveArray.length */ .c.length; i++) {
          const breakpoint = _util_responsiveObserver__WEBPACK_IMPORTED_MODULE_2__/* .responsiveArray */ .c[i];
          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index] = g;
      }
    });
    return results;
  };
  const prefixCls = getPrefixCls('row', customizePrefixCls);
  const [wrapSSR, hashId] = (0,_style__WEBPACK_IMPORTED_MODULE_5__/* .useRowStyle */ .V)(prefixCls);
  const gutters = getGutter();
  const classes = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, {
    [`${prefixCls}-no-wrap`]: wrap === false,
    [`${prefixCls}-${mergeJustify}`]: mergeJustify,
    [`${prefixCls}-${mergeAlign}`]: mergeAlign,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className, hashId);
  // Add gutter related style
  const rowStyle = {};
  const horizontalGutter = gutters[0] != null && gutters[0] > 0 ? gutters[0] / -2 : undefined;
  const verticalGutter = gutters[1] != null && gutters[1] > 0 ? gutters[1] / -2 : undefined;
  if (horizontalGutter) {
    rowStyle.marginLeft = horizontalGutter;
    rowStyle.marginRight = horizontalGutter;
  }
  if (supportFlexGap) {
    // Set gap direct if flex gap support
    [, rowStyle.rowGap] = gutters;
  } else if (verticalGutter) {
    rowStyle.marginTop = verticalGutter;
    rowStyle.marginBottom = verticalGutter;
  }
  // "gutters" is a new array in each rendering phase, it'll make 'React.useMemo' effectless.
  // So we deconstruct "gutters" variable here.
  const [gutterH, gutterV] = gutters;
  const rowContext = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({
    gutter: [gutterH, gutterV],
    wrap,
    supportFlexGap
  }), [gutterH, gutterV, wrap, supportFlexGap]);
  return wrapSSR( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_RowContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Provider */ .Z.Provider, {
    value: rowContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", Object.assign({}, others, {
    className: classes,
    style: Object.assign(Object.assign({}, rowStyle), style),
    ref: ref
  }), children)));
});
if (false) {}
/* harmony default export */ __webpack_exports__["Z"] = (Row);

/***/ }),

/***/ 20143:
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/grid/style/index.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": function() { return /* binding */ useRowStyle; },
/* harmony export */   "c": function() { return /* binding */ useColStyle; }
/* harmony export */ });
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../theme/internal */ 4533);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/internal */ 43956);

// ============================== Row-Shared ==============================
const genGridRowStyle = token => {
  const {
    componentCls
  } = token;
  return {
    // Grid system
    [componentCls]: {
      display: 'flex',
      flexFlow: 'row wrap',
      minWidth: 0,
      '&::before, &::after': {
        display: 'flex'
      },
      '&-no-wrap': {
        flexWrap: 'nowrap'
      },
      // The origin of the X-axis
      '&-start': {
        justifyContent: 'flex-start'
      },
      // The center of the X-axis
      '&-center': {
        justifyContent: 'center'
      },
      // The opposite of the X-axis
      '&-end': {
        justifyContent: 'flex-end'
      },
      '&-space-between': {
        justifyContent: 'space-between'
      },
      '&-space-around': {
        justifyContent: 'space-around'
      },
      '&-space-evenly': {
        justifyContent: 'space-evenly'
      },
      // Align at the top
      '&-top': {
        alignItems: 'flex-start'
      },
      // Align at the center
      '&-middle': {
        alignItems: 'center'
      },
      '&-bottom': {
        alignItems: 'flex-end'
      }
    }
  };
};
// ============================== Col-Shared ==============================
const genGridColStyle = token => {
  const {
    componentCls
  } = token;
  return {
    // Grid system
    [componentCls]: {
      position: 'relative',
      maxWidth: '100%',
      // Prevent columns from collapsing when empty
      minHeight: 1
    }
  };
};
const genLoopGridColumnsStyle = (token, sizeCls) => {
  const {
    componentCls,
    gridColumns
  } = token;
  const gridColumnsStyle = {};
  for (let i = gridColumns; i >= 0; i--) {
    if (i === 0) {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = {
        display: 'none'
      };
      gridColumnsStyle[`${componentCls}-push-${i}`] = {
        insetInlineStart: 'auto'
      };
      gridColumnsStyle[`${componentCls}-pull-${i}`] = {
        insetInlineEnd: 'auto'
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: 'auto'
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: 'auto'
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineStart: 0
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: 0
      };
    } else {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = {
        display: 'block',
        flex: `0 0 ${i / gridColumns * 100}%`,
        maxWidth: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: i
      };
    }
  }
  return gridColumnsStyle;
};
const genGridStyle = (token, sizeCls) => genLoopGridColumnsStyle(token, sizeCls);
const genGridMediaStyle = (token, screenSize, sizeCls) => ({
  [`@media (min-width: ${screenSize}px)`]: Object.assign({}, genGridStyle(token, sizeCls))
});
// ============================== Export ==============================
const useRowStyle = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('Grid', token => [genGridRowStyle(token)]);
const useColStyle = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('Grid', token => {
  const gridToken = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_1__/* .merge */ .TS)(token, {
    gridColumns: 24 // Row is divided into 24 parts in Grid
  });

  const gridMediaSizesMap = {
    '-sm': gridToken.screenSMMin,
    '-md': gridToken.screenMDMin,
    '-lg': gridToken.screenLGMin,
    '-xl': gridToken.screenXLMin,
    '-xxl': gridToken.screenXXLMin
  };
  return [genGridColStyle(gridToken), genGridStyle(gridToken, ''), genGridStyle(gridToken, '-xs'), Object.keys(gridMediaSizesMap).map(key => genGridMediaStyle(gridToken, gridMediaSizesMap[key], key)).reduce((pre, cur) => Object.assign(Object.assign({}, pre), cur), {})];
});

/***/ }),

/***/ 4533:
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/theme/util/genComponentStyleHook.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ genComponentStyleHook; }
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ 76471);
/* harmony import */ var rc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util */ 7384);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 93236);
/* harmony import */ var _config_provider_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config-provider/context */ 1780);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../style */ 2508);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../internal */ 53610);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal */ 43956);






function genComponentStyleHook(component, styleFn, getDefaultToken, options) {
  return prefixCls => {
    const [theme, token, hashId] = (0,_internal__WEBPACK_IMPORTED_MODULE_3__/* .useToken */ .dQ)();
    const {
      getPrefixCls,
      iconPrefixCls,
      csp
    } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_config_provider_context__WEBPACK_IMPORTED_MODULE_4__/* .ConfigContext */ .E_);
    const rootPrefixCls = getPrefixCls();
    // Shared config
    const sharedConfig = {
      theme,
      token,
      hashId,
      nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce
    };
    // Generate style for all a tags in antd component.
    (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .useStyleRegister */ .xy)(Object.assign(Object.assign({}, sharedConfig), {
      path: ['Shared', rootPrefixCls]
    }), () => [{
      // Link
      '&': (0,_style__WEBPACK_IMPORTED_MODULE_5__/* .genLinkStyle */ .Lx)(token)
    }]);
    return [(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .useStyleRegister */ .xy)(Object.assign(Object.assign({}, sharedConfig), {
      path: [component, prefixCls, iconPrefixCls]
    }), () => {
      const {
        token: proxyToken,
        flush
      } = (0,_internal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)(token);
      const customComponentToken = Object.assign({}, token[component]);
      if (options === null || options === void 0 ? void 0 : options.deprecatedTokens) {
        const {
          deprecatedTokens
        } = options;
        deprecatedTokens.forEach(_ref => {
          let [oldTokenKey, newTokenKey] = _ref;
          var _a;
          if (false) {}
          // Should wrap with `if` clause, or there will be `undefined` in object.
          if ((customComponentToken === null || customComponentToken === void 0 ? void 0 : customComponentToken[oldTokenKey]) || (customComponentToken === null || customComponentToken === void 0 ? void 0 : customComponentToken[newTokenKey])) {
            (_a = customComponentToken[newTokenKey]) !== null && _a !== void 0 ? _a : customComponentToken[newTokenKey] = customComponentToken === null || customComponentToken === void 0 ? void 0 : customComponentToken[oldTokenKey];
          }
        });
      }
      const defaultComponentToken = typeof getDefaultToken === 'function' ? getDefaultToken((0,_internal__WEBPACK_IMPORTED_MODULE_6__/* .merge */ .TS)(proxyToken, customComponentToken !== null && customComponentToken !== void 0 ? customComponentToken : {})) : getDefaultToken;
      const mergedComponentToken = Object.assign(Object.assign({}, defaultComponentToken), customComponentToken);
      const componentCls = `.${prefixCls}`;
      const mergedToken = (0,_internal__WEBPACK_IMPORTED_MODULE_6__/* .merge */ .TS)(proxyToken, {
        componentCls,
        prefixCls,
        iconCls: `.${iconPrefixCls}`,
        antCls: `.${rootPrefixCls}`
      }, mergedComponentToken);
      const styleInterpolation = styleFn(mergedToken, {
        hashId,
        prefixCls,
        rootPrefixCls,
        iconPrefixCls,
        overrideComponentToken: customComponentToken
      });
      flush(component, mergedComponentToken);
      return [(options === null || options === void 0 ? void 0 : options.resetStyle) === false ? null : (0,_style__WEBPACK_IMPORTED_MODULE_5__/* .genCommonStyle */ .du)(token, prefixCls), styleInterpolation];
    }), hashId];
  };
}

/***/ }),

/***/ 43956:
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/theme/util/statistic.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TS": function() { return /* binding */ merge; },
/* harmony export */   "ZP": function() { return /* binding */ statisticToken; }
/* harmony export */ });
/* unused harmony exports statistic, _statistic_build_ */
const enableStatistic =  false || typeof CSSINJS_STATISTIC !== 'undefined';
let recording = true;
/**
 * This function will do as `Object.assign` in production. But will use Object.defineProperty:get to
 * pass all value access in development. To support statistic field usage with alias token.
 */
function merge() {
  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }
  /* istanbul ignore next */
  if (!enableStatistic) {
    return Object.assign.apply(Object, [{}].concat(objs));
  }
  recording = false;
  const ret = {};
  objs.forEach(obj => {
    const keys = Object.keys(obj);
    keys.forEach(key => {
      Object.defineProperty(ret, key, {
        configurable: true,
        enumerable: true,
        get: () => obj[key]
      });
    });
  });
  recording = true;
  return ret;
}
/** @internal Internal Usage. Not use in your production. */
const statistic = {};
/** @internal Internal Usage. Not use in your production. */
// eslint-disable-next-line camelcase
const _statistic_build_ = {};
/* istanbul ignore next */
function noop() {}
/** Statistic token usage case. Should use `merge` function if you do not want spread record. */
function statisticToken(token) {
  let tokenKeys;
  let proxy = token;
  let flush = noop;
  if (enableStatistic) {
    tokenKeys = new Set();
    proxy = new Proxy(token, {
      get(obj, prop) {
        if (recording) {
          tokenKeys.add(prop);
        }
        return obj[prop];
      }
    });
    flush = (componentName, componentToken) => {
      statistic[componentName] = {
        global: Array.from(tokenKeys),
        component: componentToken
      };
    };
  }
  return {
    token: proxy,
    keys: tokenKeys,
    flush
  };
}

/***/ }),

/***/ 36152:
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/rc-util@5.34.0/node_modules/rc-util/es/hooks/useEvent.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useEvent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 93236);

function useEvent(callback) {
  var fnRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  fnRef.current = callback;
  var memoFn = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
    var _fnRef$current;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
  }, []);
  return memoFn;
}

/***/ }),

/***/ 67575:
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/rc-util@5.34.0/node_modules/rc-util/es/hooks/useLayoutEffect.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": function() { return /* binding */ useLayoutUpdateEffect; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 93236);
/* harmony import */ var _Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Dom/canUseDom */ 3770);



/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */
var useInternalLayoutEffect =  true && (0,_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)() ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
var useLayoutEffect = function useLayoutEffect(callback, deps) {
  var firstMountRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);
  useInternalLayoutEffect(function () {
    return callback(firstMountRef.current);
  }, deps);

  // We tell react that first mount has passed
  useInternalLayoutEffect(function () {
    firstMountRef.current = false;
    return function () {
      firstMountRef.current = true;
    };
  }, []);
};
var useLayoutUpdateEffect = function useLayoutUpdateEffect(callback, deps) {
  useLayoutEffect(function (firstMount) {
    if (!firstMount) {
      return callback();
    }
  }, deps);
};
/* harmony default export */ __webpack_exports__["Z"] = (useLayoutEffect);

/***/ }),

/***/ 97453:
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/rc-util@5.34.0/node_modules/rc-util/es/hooks/useMergedState.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useMergedState; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ 15738);
/* harmony import */ var _useEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useEvent */ 36152);
/* harmony import */ var _useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useLayoutEffect */ 67575);
/* harmony import */ var _useState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useState */ 88815);




/** We only think `undefined` is empty */
function hasValue(value) {
  return value !== undefined;
}

/**
 * Similar to `useState` but will use props value if provided.
 * Note that internal use rc-util `useState` hook.
 */
function useMergedState(defaultStateValue, option) {
  var _ref = option || {},
    defaultValue = _ref.defaultValue,
    value = _ref.value,
    onChange = _ref.onChange,
    postState = _ref.postState;

  // ======================= Init =======================
  var _useState = (0,_useState__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function () {
      if (hasValue(value)) {
        return value;
      } else if (hasValue(defaultValue)) {
        return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
      } else {
        return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
      }
    }),
    _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_useState, 2),
    innerValue = _useState2[0],
    setInnerValue = _useState2[1];
  var mergedValue = value !== undefined ? value : innerValue;
  var postMergedValue = postState ? postState(mergedValue) : mergedValue;

  // ====================== Change ======================
  var onChangeFn = (0,_useEvent__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(onChange);
  var _useState3 = (0,_useState__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)([mergedValue]),
    _useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_useState3, 2),
    prevValue = _useState4[0],
    setPrevValue = _useState4[1];
  (0,_useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutUpdateEffect */ .o)(function () {
    var prev = prevValue[0];
    if (innerValue !== prev) {
      onChangeFn(innerValue, prev);
    }
  }, [prevValue]);

  // Sync value back to `undefined` when it from control to un-control
  (0,_useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutUpdateEffect */ .o)(function () {
    if (!hasValue(value)) {
      setInnerValue(value);
    }
  }, [value]);

  // ====================== Update ======================
  var triggerChange = (0,_useEvent__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(function (updater, ignoreDestroy) {
    setInnerValue(updater, ignoreDestroy);
    setPrevValue([mergedValue], ignoreDestroy);
  });
  return [postMergedValue, triggerChange];
}

/***/ }),

/***/ 7384:
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/rc-util@5.34.0/node_modules/rc-util/es/index.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _hooks_useMergedState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks/useMergedState */ 97453);
/* harmony import */ var _utils_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/set */ 9269);
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warning */ 97406);





/***/ })

}]);