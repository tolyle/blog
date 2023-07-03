"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[306],{

/***/ 11251:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ant-design+icons@5.1.4/node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_DownOutlined; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(31966);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(93236);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-svg@4.2.1/node_modules/@ant-design/icons-svg/es/asn/DownOutlined.js
// This icon file is generated automatically.
var DownOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, "name": "down", "theme": "outlined" };
/* harmony default export */ var asn_DownOutlined = (DownOutlined);

// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4/node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(12174);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4/node_modules/@ant-design/icons/es/icons/DownOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var DownOutlined_DownOutlined = function DownOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref,
    icon: asn_DownOutlined
  }));
};
if (false) {}
/* harmony default export */ var icons_DownOutlined = (/*#__PURE__*/react.forwardRef(DownOutlined_DownOutlined));

/***/ }),

/***/ 38739:
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/_util/PurePanel.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ genPurePanel; }
/* harmony export */ });
/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-util/es/hooks/useMergedState */ 97453);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 93236);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config-provider */ 1780);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config-provider */ 45768);



/* istanbul ignore next */
function genPurePanel(Component, defaultPrefixCls, getDropdownCls, postProps) {
  return function PurePanel(props) {
    const {
      prefixCls: customizePrefixCls,
      style
    } = props;
    const holderRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    const [popupHeight, setPopupHeight] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);
    const [popupWidth, setPopupWidth] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);
    const [open, setOpen] = (0,rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(false, {
      value: props.open
    });
    const {
      getPrefixCls
    } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_2__/* .ConfigContext */ .E_);
    const prefixCls = getPrefixCls(defaultPrefixCls || 'select', customizePrefixCls);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
      // We do not care about ssr
      setOpen(true);
      if (typeof ResizeObserver !== 'undefined') {
        const resizeObserver = new ResizeObserver(entries => {
          const element = entries[0].target;
          setPopupHeight(element.offsetHeight + 8);
          setPopupWidth(element.offsetWidth);
        });
        const interval = setInterval(() => {
          var _a;
          const dropdownCls = getDropdownCls ? `.${getDropdownCls(prefixCls)}` : `.${prefixCls}-dropdown`;
          const popup = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(dropdownCls);
          if (popup) {
            clearInterval(interval);
            resizeObserver.observe(popup);
          }
        }, 10);
        return () => {
          clearInterval(interval);
          resizeObserver.disconnect();
        };
      }
    }, []);
    let mergedProps = Object.assign(Object.assign({}, props), {
      style: Object.assign(Object.assign({}, style), {
        margin: 0
      }),
      open,
      visible: open,
      getPopupContainer: () => holderRef.current
    });
    if (postProps) {
      mergedProps = postProps(mergedProps);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_config_provider__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
      theme: {
        token: {
          motion: false
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      ref: holderRef,
      style: {
        paddingBottom: popupHeight,
        position: 'relative',
        minWidth: popupWidth
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Component, Object.assign({}, mergedProps))));
  };
}

/***/ }),

/***/ 67553:
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/config-provider/defaultRenderEmpty.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 93236);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ 1780);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../empty */ 68754);



const DefaultRenderEmpty = props => {
  const {
    componentName
  } = props;
  const {
    getPrefixCls
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_1__/* .ConfigContext */ .E_);
  const prefix = getPrefixCls('empty');
  switch (componentName) {
    case 'Table':
    case 'List':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_empty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        image: _empty__WEBPACK_IMPORTED_MODULE_2__/* ["default"].PRESENTED_IMAGE_SIMPLE */ .Z.PRESENTED_IMAGE_SIMPLE
      });
    case 'Select':
    case 'TreeSelect':
    case 'Cascader':
    case 'Transfer':
    case 'Mentions':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_empty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        image: _empty__WEBPACK_IMPORTED_MODULE_2__/* ["default"].PRESENTED_IMAGE_SIMPLE */ .Z.PRESENTED_IMAGE_SIMPLE,
        className: `${prefix}-small`
      });
    /* istanbul ignore next */
    default:
      // Should never hit if we take all the component into consider.
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_empty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, null);
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (DefaultRenderEmpty);

/***/ }),

/***/ 68754:
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/empty/index.js + 3 modules ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ es_empty; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(93236);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(1780);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/locale/useLocale.js
var useLocale = __webpack_require__(14042);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ctrl+tinycolor@3.6.0/node_modules/@ctrl/tinycolor/dist/module/index.js
var dist_module = __webpack_require__(99590);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/theme/internal.js + 2 modules
var internal = __webpack_require__(53610);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/empty/empty.js



const Empty = () => {
  const [, token] = (0,internal/* useToken */.dQ)();
  const bgColor = new dist_module/* TinyColor */.C(token.colorBgBase);
  // Dark Theme need more dark of this
  const themeStyle = bgColor.toHsl().l < 0.5 ? {
    opacity: 0.65
  } : {};
  return /*#__PURE__*/react.createElement("svg", {
    style: themeStyle,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("g", {
    transform: "translate(24 31.67)"
  }, /*#__PURE__*/react.createElement("ellipse", {
    fillOpacity: ".8",
    fill: "#F5F5F7",
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
    fill: "#AEB8C2"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    fill: "url(#linearGradient-1)",
    transform: "translate(13.56)"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
    fill: "#F5F5F7"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
    fill: "#DCE0E6"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
    fill: "#DCE0E6"
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(149.65 15.383)",
    fill: "#FFF"
  }, /*#__PURE__*/react.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};
if (false) {}
/* harmony default export */ var empty = (Empty);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/empty/simple.js




const Simple = () => {
  const [, token] = (0,internal/* useToken */.dQ)();
  const {
    colorFill,
    colorFillTertiary,
    colorFillQuaternary,
    colorBgContainer
  } = token;
  const {
    borderColor,
    shadowColor,
    contentColor
  } = (0,react.useMemo)(() => ({
    borderColor: new dist_module/* TinyColor */.C(colorFill).onBackground(colorBgContainer).toHexShortString(),
    shadowColor: new dist_module/* TinyColor */.C(colorFillTertiary).onBackground(colorBgContainer).toHexShortString(),
    contentColor: new dist_module/* TinyColor */.C(colorFillQuaternary).onBackground(colorBgContainer).toHexShortString()
  }), [colorFill, colorFillTertiary, colorFillQuaternary, colorBgContainer]);
  return /*#__PURE__*/react.createElement("svg", {
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("ellipse", {
    fill: shadowColor,
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /*#__PURE__*/react.createElement("g", {
    fillRule: "nonzero",
    stroke: borderColor
  }, /*#__PURE__*/react.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: contentColor
  }))));
};
if (false) {}
/* harmony default export */ var simple = (Simple);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(4533);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(43956);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/empty/style/index.js

// ============================== Shared ==============================
const genSharedEmptyStyle = token => {
  const {
    componentCls,
    margin,
    marginXS,
    marginXL,
    fontSize,
    lineHeight
  } = token;
  return {
    [componentCls]: {
      marginInline: marginXS,
      fontSize,
      lineHeight,
      textAlign: 'center',
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${componentCls}-image`]: {
        height: token.emptyImgHeight,
        marginBottom: marginXS,
        opacity: token.opacityImage,
        img: {
          height: '100%'
        },
        svg: {
          maxWidth: '100%',
          height: '100%',
          margin: 'auto'
        }
      },
      [`${componentCls}-description`]: {
        color: token.colorText
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${componentCls}-footer`]: {
        marginTop: margin
      },
      '&-normal': {
        marginBlock: marginXL,
        color: token.colorTextDisabled,
        [`${componentCls}-description`]: {
          color: token.colorTextDisabled
        },
        [`${componentCls}-image`]: {
          height: token.emptyImgHeightMD
        }
      },
      '&-small': {
        marginBlock: marginXS,
        color: token.colorTextDisabled,
        [`${componentCls}-image`]: {
          height: token.emptyImgHeightSM
        }
      }
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ var style = ((0,genComponentStyleHook/* default */.Z)('Empty', token => {
  const {
    componentCls,
    controlHeightLG
  } = token;
  const emptyToken = (0,statistic/* merge */.TS)(token, {
    emptyImgCls: `${componentCls}-img`,
    emptyImgHeight: controlHeightLG * 2.5,
    emptyImgHeightMD: controlHeightLG,
    emptyImgHeightSM: controlHeightLG * 0.875
  });
  return [genSharedEmptyStyle(emptyToken)];
}));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/empty/index.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};







const defaultEmptyImg = /*#__PURE__*/react.createElement(empty, null);
const simpleEmptyImg = /*#__PURE__*/react.createElement(simple, null);
const empty_Empty = _a => {
  var {
      className,
      rootClassName,
      prefixCls: customizePrefixCls,
      image = defaultEmptyImg,
      description,
      children,
      imageStyle
    } = _a,
    restProps = __rest(_a, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle"]);
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('empty', customizePrefixCls);
  const [wrapSSR, hashId] = style(prefixCls);
  const [locale] = (0,useLocale/* default */.Z)('Empty');
  const des = typeof description !== 'undefined' ? description : locale === null || locale === void 0 ? void 0 : locale.description;
  const alt = typeof des === 'string' ? des : 'empty';
  let imageNode = null;
  if (typeof image === 'string') {
    imageNode = /*#__PURE__*/react.createElement("img", {
      alt: alt,
      src: image
    });
  } else {
    imageNode = image;
  }
  return wrapSSR( /*#__PURE__*/react.createElement("div", Object.assign({
    className: classnames_default()(hashId, prefixCls, {
      [`${prefixCls}-normal`]: image === simpleEmptyImg,
      [`${prefixCls}-rtl`]: direction === 'rtl'
    }, className, rootClassName)
  }, restProps), /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-image`,
    style: imageStyle
  }, imageNode), des && /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-description`
  }, des), children && /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-footer`
  }, children)));
};
empty_Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
empty_Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
if (false) {}
/* harmony default export */ var es_empty = (empty_Empty);

/***/ }),

/***/ 99306:
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/select/index.js + 36 modules ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ es_select; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(31966);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(12922);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(96164);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(30001);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(15738);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(39427);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(3452);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.0/node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(97453);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.0/node_modules/rc-util/es/warning.js
var es_warning = __webpack_require__(97406);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(93236);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.0/node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(67575);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.0/node_modules/rc-util/es/isMobile.js
var isMobile = __webpack_require__(1515);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.0/node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.0/node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(50232);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/hooks/useBaseProps.js
/**
 * BaseSelect provide some parsed data into context.
 * You can use this hooks to get them.
 */


var BaseSelectContext = /*#__PURE__*/react.createContext(null);
function useBaseProps() {
  return react.useContext(BaseSelectContext);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/hooks/useDelayReset.js



/**
 * Similar with `useLock`, but this hook will always execute last value.
 * When set to `true`, it will keep `true` for a short time even if `false` is set.
 */
function useDelayReset() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    bool = _React$useState2[0],
    setBool = _React$useState2[1];
  var delayRef = react.useRef(null);
  var cancelLatest = function cancelLatest() {
    window.clearTimeout(delayRef.current);
  };
  react.useEffect(function () {
    return cancelLatest;
  }, []);
  var delaySetBool = function delaySetBool(value, callback) {
    cancelLatest();
    delayRef.current = window.setTimeout(function () {
      setBool(value);
      if (callback) {
        callback();
      }
    }, timeout);
  };
  return [bool, delaySetBool, cancelLatest];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/hooks/useLock.js


/**
 * Locker return cached mark.
 * If set to `true`, will return `true` in a short time even if set `false`.
 * If set to `false` and then set to `true`, will change to `true`.
 * And after time duration, it will back to `null` automatically.
 */
function useLock() {
  var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
  var lockRef = react.useRef(null);
  var timeoutRef = react.useRef(null);

  // Clean up
  react.useEffect(function () {
    return function () {
      window.clearTimeout(timeoutRef.current);
    };
  }, []);
  function doLock(locked) {
    if (locked || lockRef.current === null) {
      lockRef.current = locked;
    }
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(function () {
      lockRef.current = null;
    }, duration);
  }
  return [function () {
    return lockRef.current;
  }, doLock];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/hooks/useSelectTriggerControl.js

function useSelectTriggerControl(elements, open, triggerOpen, customizedTrigger) {
  var propsRef = react.useRef(null);
  propsRef.current = {
    open: open,
    triggerOpen: triggerOpen,
    customizedTrigger: customizedTrigger
  };
  react.useEffect(function () {
    function onGlobalMouseDown(event) {
      var _propsRef$current;
      // If trigger is customized, Trigger will take control of popupVisible
      if ((_propsRef$current = propsRef.current) !== null && _propsRef$current !== void 0 && _propsRef$current.customizedTrigger) {
        return;
      }
      var target = event.target;
      if (target.shadowRoot && event.composed) {
        target = event.composedPath()[0] || target;
      }
      if (propsRef.current.open && elements().filter(function (element) {
        return element;
      }).every(function (element) {
        return !element.contains(target) && element !== target;
      })) {
        // Should trigger close
        propsRef.current.triggerOpen(false);
      }
    }
    window.addEventListener('mousedown', onGlobalMouseDown);
    return function () {
      return window.removeEventListener('mousedown', onGlobalMouseDown);
    };
  }, []);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.0/node_modules/rc-util/es/pickAttrs.js
var pickAttrs = __webpack_require__(5273);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-overflow@1.3.1/node_modules/rc-overflow/es/index.js + 6 modules
var es = __webpack_require__(84026);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/TransBtn.js


var TransBtn = function TransBtn(_ref) {
  var className = _ref.className,
    customizeIcon = _ref.customizeIcon,
    customizeIconProps = _ref.customizeIconProps,
    _onMouseDown = _ref.onMouseDown,
    onClick = _ref.onClick,
    children = _ref.children;
  var icon;
  if (typeof customizeIcon === 'function') {
    icon = customizeIcon(customizeIconProps);
  } else {
    icon = customizeIcon;
  }
  return /*#__PURE__*/react.createElement("span", {
    className: className,
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      if (_onMouseDown) {
        _onMouseDown(event);
      }
    },
    style: {
      userSelect: 'none',
      WebkitUserSelect: 'none'
    },
    unselectable: "on",
    onClick: onClick,
    "aria-hidden": true
  }, icon !== undefined ? icon : /*#__PURE__*/react.createElement("span", {
    className: classnames_default()(className.split(/\s+/).map(function (cls) {
      return "".concat(cls, "-icon");
    }))
  }, children));
};
/* harmony default export */ var es_TransBtn = (TransBtn);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/Selector/Input.js





var Input = function Input(_ref, ref) {
  var _inputNode2, _inputNode2$props;
  var prefixCls = _ref.prefixCls,
    id = _ref.id,
    inputElement = _ref.inputElement,
    disabled = _ref.disabled,
    tabIndex = _ref.tabIndex,
    autoFocus = _ref.autoFocus,
    autoComplete = _ref.autoComplete,
    editable = _ref.editable,
    activeDescendantId = _ref.activeDescendantId,
    value = _ref.value,
    maxLength = _ref.maxLength,
    _onKeyDown = _ref.onKeyDown,
    _onMouseDown = _ref.onMouseDown,
    _onChange = _ref.onChange,
    onPaste = _ref.onPaste,
    _onCompositionStart = _ref.onCompositionStart,
    _onCompositionEnd = _ref.onCompositionEnd,
    open = _ref.open,
    attrs = _ref.attrs;
  var inputNode = inputElement || /*#__PURE__*/react.createElement("input", null);
  var _inputNode = inputNode,
    originRef = _inputNode.ref,
    originProps = _inputNode.props;
  var onOriginKeyDown = originProps.onKeyDown,
    onOriginChange = originProps.onChange,
    onOriginMouseDown = originProps.onMouseDown,
    onOriginCompositionStart = originProps.onCompositionStart,
    onOriginCompositionEnd = originProps.onCompositionEnd,
    style = originProps.style;
  (0,es_warning/* warning */.Kp)(!('maxLength' in inputNode.props), "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled.");
  inputNode = /*#__PURE__*/react.cloneElement(inputNode, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    type: 'search'
  }, originProps), {}, {
    // Override over origin props
    id: id,
    ref: (0,es_ref/* composeRef */.sQ)(ref, originRef),
    disabled: disabled,
    tabIndex: tabIndex,
    autoComplete: autoComplete || 'off',
    autoFocus: autoFocus,
    className: classnames_default()("".concat(prefixCls, "-selection-search-input"), (_inputNode2 = inputNode) === null || _inputNode2 === void 0 ? void 0 : (_inputNode2$props = _inputNode2.props) === null || _inputNode2$props === void 0 ? void 0 : _inputNode2$props.className),
    role: 'combobox',
    'aria-expanded': open,
    'aria-haspopup': 'listbox',
    'aria-owns': "".concat(id, "_list"),
    'aria-autocomplete': 'list',
    'aria-controls': "".concat(id, "_list"),
    'aria-activedescendant': activeDescendantId
  }, attrs), {}, {
    value: editable ? value : '',
    maxLength: maxLength,
    readOnly: !editable,
    unselectable: !editable ? 'on' : null,
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), {}, {
      opacity: editable ? null : 0
    }),
    onKeyDown: function onKeyDown(event) {
      _onKeyDown(event);
      if (onOriginKeyDown) {
        onOriginKeyDown(event);
      }
    },
    onMouseDown: function onMouseDown(event) {
      _onMouseDown(event);
      if (onOriginMouseDown) {
        onOriginMouseDown(event);
      }
    },
    onChange: function onChange(event) {
      _onChange(event);
      if (onOriginChange) {
        onOriginChange(event);
      }
    },
    onCompositionStart: function onCompositionStart(event) {
      _onCompositionStart(event);
      if (onOriginCompositionStart) {
        onOriginCompositionStart(event);
      }
    },
    onCompositionEnd: function onCompositionEnd(event) {
      _onCompositionEnd(event);
      if (onOriginCompositionEnd) {
        onOriginCompositionEnd(event);
      }
    },
    onPaste: onPaste
  }));
  return inputNode;
};
var RefInput = /*#__PURE__*/react.forwardRef(Input);
RefInput.displayName = 'Input';
/* harmony default export */ var Selector_Input = (RefInput);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/utils/commonUtil.js

function commonUtil_toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }
  return value !== undefined ? [value] : [];
}
var isClient = typeof window !== 'undefined' && window.document && window.document.documentElement;

/** Is client side and not jsdom */
var isBrowserClient =  true && isClient;
function hasValue(value) {
  return value !== undefined && value !== null;
}
function isTitleType(title) {
  return ['string', 'number'].includes((0,esm_typeof/* default */.Z)(title));
}
function getTitle(item) {
  var title = undefined;
  if (item) {
    if (isTitleType(item.title)) {
      title = item.title.toString();
    } else if (isTitleType(item.label)) {
      title = item.label.toString();
    }
  }
  return title;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/hooks/useLayoutEffect.js
/* eslint-disable react-hooks/rules-of-hooks */



/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */
function useLayoutEffect_useLayoutEffect(effect, deps) {
  // Never happen in test env
  if (isBrowserClient) {
    /* istanbul ignore next */
    react.useLayoutEffect(effect, deps);
  } else {
    react.useEffect(effect, deps);
  }
}
/* eslint-enable */
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/Selector/MultipleSelector.js











function itemKey(value) {
  var _value$key;
  return (_value$key = value.key) !== null && _value$key !== void 0 ? _value$key : value.value;
}
var onPreventMouseDown = function onPreventMouseDown(event) {
  event.preventDefault();
  event.stopPropagation();
};
var SelectSelector = function SelectSelector(props) {
  var id = props.id,
    prefixCls = props.prefixCls,
    values = props.values,
    open = props.open,
    searchValue = props.searchValue,
    autoClearSearchValue = props.autoClearSearchValue,
    inputRef = props.inputRef,
    placeholder = props.placeholder,
    disabled = props.disabled,
    mode = props.mode,
    showSearch = props.showSearch,
    autoFocus = props.autoFocus,
    autoComplete = props.autoComplete,
    activeDescendantId = props.activeDescendantId,
    tabIndex = props.tabIndex,
    removeIcon = props.removeIcon,
    maxTagCount = props.maxTagCount,
    maxTagTextLength = props.maxTagTextLength,
    _props$maxTagPlacehol = props.maxTagPlaceholder,
    maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function (omittedValues) {
      return "+ ".concat(omittedValues.length, " ...");
    } : _props$maxTagPlacehol,
    tagRender = props.tagRender,
    onToggleOpen = props.onToggleOpen,
    onRemove = props.onRemove,
    onInputChange = props.onInputChange,
    onInputPaste = props.onInputPaste,
    onInputKeyDown = props.onInputKeyDown,
    onInputMouseDown = props.onInputMouseDown,
    onInputCompositionStart = props.onInputCompositionStart,
    onInputCompositionEnd = props.onInputCompositionEnd;
  var measureRef = react.useRef(null);
  var _useState = (0,react.useState)(0),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    inputWidth = _useState2[0],
    setInputWidth = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    focused = _useState4[0],
    setFocused = _useState4[1];
  var selectionPrefixCls = "".concat(prefixCls, "-selection");

  // ===================== Search ======================
  var inputValue = open || mode === "multiple" && autoClearSearchValue === false || mode === 'tags' ? searchValue : '';
  var inputEditable = mode === 'tags' || mode === "multiple" && autoClearSearchValue === false || showSearch && (open || focused);

  // We measure width and set to the input immediately
  useLayoutEffect_useLayoutEffect(function () {
    setInputWidth(measureRef.current.scrollWidth);
  }, [inputValue]);

  // ===================== Render ======================
  // >>> Render Selector Node. Includes Item & Rest
  function defaultRenderSelector(item, content, itemDisabled, closable, onClose) {
    return /*#__PURE__*/react.createElement("span", {
      className: classnames_default()("".concat(selectionPrefixCls, "-item"), (0,defineProperty/* default */.Z)({}, "".concat(selectionPrefixCls, "-item-disabled"), itemDisabled)),
      title: getTitle(item)
    }, /*#__PURE__*/react.createElement("span", {
      className: "".concat(selectionPrefixCls, "-item-content")
    }, content), closable && /*#__PURE__*/react.createElement(es_TransBtn, {
      className: "".concat(selectionPrefixCls, "-item-remove"),
      onMouseDown: onPreventMouseDown,
      onClick: onClose,
      customizeIcon: removeIcon
    }, "\xD7"));
  }
  function customizeRenderSelector(value, content, itemDisabled, closable, onClose) {
    var onMouseDown = function onMouseDown(e) {
      onPreventMouseDown(e);
      onToggleOpen(!open);
    };
    return /*#__PURE__*/react.createElement("span", {
      onMouseDown: onMouseDown
    }, tagRender({
      label: content,
      value: value,
      disabled: itemDisabled,
      closable: closable,
      onClose: onClose
    }));
  }
  function renderItem(valueItem) {
    var itemDisabled = valueItem.disabled,
      label = valueItem.label,
      value = valueItem.value;
    var closable = !disabled && !itemDisabled;
    var displayLabel = label;
    if (typeof maxTagTextLength === 'number') {
      if (typeof label === 'string' || typeof label === 'number') {
        var strLabel = String(displayLabel);
        if (strLabel.length > maxTagTextLength) {
          displayLabel = "".concat(strLabel.slice(0, maxTagTextLength), "...");
        }
      }
    }
    var onClose = function onClose(event) {
      if (event) event.stopPropagation();
      onRemove(valueItem);
    };
    return typeof tagRender === 'function' ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose) : defaultRenderSelector(valueItem, displayLabel, itemDisabled, closable, onClose);
  }
  function renderRest(omittedValues) {
    var content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
    return defaultRenderSelector({
      title: content
    }, content, false);
  }

  // >>> Input Node
  var inputNode = /*#__PURE__*/react.createElement("div", {
    className: "".concat(selectionPrefixCls, "-search"),
    style: {
      width: inputWidth
    },
    onFocus: function onFocus() {
      setFocused(true);
    },
    onBlur: function onBlur() {
      setFocused(false);
    }
  }, /*#__PURE__*/react.createElement(Selector_Input, {
    ref: inputRef,
    open: open,
    prefixCls: prefixCls,
    id: id,
    inputElement: null,
    disabled: disabled,
    autoFocus: autoFocus,
    autoComplete: autoComplete,
    editable: inputEditable,
    activeDescendantId: activeDescendantId,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: onInputChange,
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex: tabIndex,
    attrs: (0,pickAttrs/* default */.Z)(props, true)
  }), /*#__PURE__*/react.createElement("span", {
    ref: measureRef,
    className: "".concat(selectionPrefixCls, "-search-mirror"),
    "aria-hidden": true
  }, inputValue, "\xA0"));

  // >>> Selections
  var selectionNode = /*#__PURE__*/react.createElement(es/* default */.Z, {
    prefixCls: "".concat(selectionPrefixCls, "-overflow"),
    data: values,
    renderItem: renderItem,
    renderRest: renderRest,
    suffix: inputNode,
    itemKey: itemKey,
    maxCount: maxTagCount
  });
  return /*#__PURE__*/react.createElement(react.Fragment, null, selectionNode, !values.length && !inputValue && /*#__PURE__*/react.createElement("span", {
    className: "".concat(selectionPrefixCls, "-placeholder")
  }, placeholder));
};
/* harmony default export */ var MultipleSelector = (SelectSelector);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/Selector/SingleSelector.js





var SingleSelector = function SingleSelector(props) {
  var inputElement = props.inputElement,
    prefixCls = props.prefixCls,
    id = props.id,
    inputRef = props.inputRef,
    disabled = props.disabled,
    autoFocus = props.autoFocus,
    autoComplete = props.autoComplete,
    activeDescendantId = props.activeDescendantId,
    mode = props.mode,
    open = props.open,
    values = props.values,
    placeholder = props.placeholder,
    tabIndex = props.tabIndex,
    showSearch = props.showSearch,
    searchValue = props.searchValue,
    activeValue = props.activeValue,
    maxLength = props.maxLength,
    onInputKeyDown = props.onInputKeyDown,
    onInputMouseDown = props.onInputMouseDown,
    onInputChange = props.onInputChange,
    onInputPaste = props.onInputPaste,
    onInputCompositionStart = props.onInputCompositionStart,
    onInputCompositionEnd = props.onInputCompositionEnd,
    title = props.title;
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    inputChanged = _React$useState2[0],
    setInputChanged = _React$useState2[1];
  var combobox = mode === 'combobox';
  var inputEditable = combobox || showSearch;
  var item = values[0];
  var inputValue = searchValue || '';
  if (combobox && activeValue && !inputChanged) {
    inputValue = activeValue;
  }
  react.useEffect(function () {
    if (combobox) {
      setInputChanged(false);
    }
  }, [combobox, activeValue]);

  // Not show text when closed expect combobox mode
  var hasTextInput = mode !== 'combobox' && !open && !showSearch ? false : !!inputValue;

  // Get title of selection item
  var selectionTitle = title === undefined ? getTitle(item) : title;
  var renderPlaceholder = function renderPlaceholder() {
    if (item) {
      return null;
    }
    var hiddenStyle = hasTextInput ? {
      visibility: 'hidden'
    } : undefined;
    return /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-selection-placeholder"),
      style: hiddenStyle
    }, placeholder);
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-selection-search")
  }, /*#__PURE__*/react.createElement(Selector_Input, {
    ref: inputRef,
    prefixCls: prefixCls,
    id: id,
    open: open,
    inputElement: inputElement,
    disabled: disabled,
    autoFocus: autoFocus,
    autoComplete: autoComplete,
    editable: inputEditable,
    activeDescendantId: activeDescendantId,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: function onChange(e) {
      setInputChanged(true);
      onInputChange(e);
    },
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex: tabIndex,
    attrs: (0,pickAttrs/* default */.Z)(props, true),
    maxLength: combobox ? maxLength : undefined
  })), !combobox && item ? /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-selection-item"),
    title: selectionTitle
    // 当 Select 已经选中选项时，还需 selection 隐藏但留在原地占位
    // https://github.com/ant-design/ant-design/issues/27688
    // https://github.com/ant-design/ant-design/issues/41530
    ,
    style: hasTextInput ? {
      visibility: 'hidden'
    } : undefined
  }, item.label) : null, renderPlaceholder());
};
/* harmony default export */ var Selector_SingleSelector = (SingleSelector);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/utils/keyUtil.js


/** keyCode Judgment function */
function isValidateOpenKey(currentKeyCode) {
  return ![
  // System function button
  KeyCode/* default.ESC */.Z.ESC, KeyCode/* default.SHIFT */.Z.SHIFT, KeyCode/* default.BACKSPACE */.Z.BACKSPACE, KeyCode/* default.TAB */.Z.TAB, KeyCode/* default.WIN_KEY */.Z.WIN_KEY, KeyCode/* default.ALT */.Z.ALT, KeyCode/* default.META */.Z.META, KeyCode/* default.WIN_KEY_RIGHT */.Z.WIN_KEY_RIGHT, KeyCode/* default.CTRL */.Z.CTRL, KeyCode/* default.SEMICOLON */.Z.SEMICOLON, KeyCode/* default.EQUALS */.Z.EQUALS, KeyCode/* default.CAPS_LOCK */.Z.CAPS_LOCK, KeyCode/* default.CONTEXT_MENU */.Z.CONTEXT_MENU,
  // F1-F12
  KeyCode/* default.F1 */.Z.F1, KeyCode/* default.F2 */.Z.F2, KeyCode/* default.F3 */.Z.F3, KeyCode/* default.F4 */.Z.F4, KeyCode/* default.F5 */.Z.F5, KeyCode/* default.F6 */.Z.F6, KeyCode/* default.F7 */.Z.F7, KeyCode/* default.F8 */.Z.F8, KeyCode/* default.F9 */.Z.F9, KeyCode/* default.F10 */.Z.F10, KeyCode/* default.F11 */.Z.F11, KeyCode/* default.F12 */.Z.F12].includes(currentKeyCode);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/Selector/index.js


/**
 * Cursor rule:
 * 1. Only `showSearch` enabled
 * 2. Only `open` is `true`
 * 3. When typing, set `open` to `true` which hit rule of 2
 *
 * Accessibility:
 * - https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html
 */








var Selector = function Selector(props, ref) {
  var inputRef = (0,react.useRef)(null);
  var compositionStatusRef = (0,react.useRef)(false);
  var prefixCls = props.prefixCls,
    open = props.open,
    mode = props.mode,
    showSearch = props.showSearch,
    tokenWithEnter = props.tokenWithEnter,
    autoClearSearchValue = props.autoClearSearchValue,
    onSearch = props.onSearch,
    onSearchSubmit = props.onSearchSubmit,
    onToggleOpen = props.onToggleOpen,
    onInputKeyDown = props.onInputKeyDown,
    domRef = props.domRef;

  // ======================= Ref =======================
  react.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        inputRef.current.focus();
      },
      blur: function blur() {
        inputRef.current.blur();
      }
    };
  });

  // ====================== Input ======================
  var _useLock = useLock(0),
    _useLock2 = (0,slicedToArray/* default */.Z)(_useLock, 2),
    getInputMouseDown = _useLock2[0],
    setInputMouseDown = _useLock2[1];
  var onInternalInputKeyDown = function onInternalInputKeyDown(event) {
    var which = event.which;
    if (which === KeyCode/* default.UP */.Z.UP || which === KeyCode/* default.DOWN */.Z.DOWN) {
      event.preventDefault();
    }
    if (onInputKeyDown) {
      onInputKeyDown(event);
    }
    if (which === KeyCode/* default.ENTER */.Z.ENTER && mode === 'tags' && !compositionStatusRef.current && !open) {
      // When menu isn't open, OptionList won't trigger a value change
      // So when enter is pressed, the tag's input value should be emitted here to let selector know
      onSearchSubmit === null || onSearchSubmit === void 0 ? void 0 : onSearchSubmit(event.target.value);
    }
    if (isValidateOpenKey(which)) {
      onToggleOpen(true);
    }
  };

  /**
   * We can not use `findDOMNode` sine it will get warning,
   * have to use timer to check if is input element.
   */
  var onInternalInputMouseDown = function onInternalInputMouseDown() {
    setInputMouseDown(true);
  };

  // When paste come, ignore next onChange
  var pastedTextRef = (0,react.useRef)(null);
  var triggerOnSearch = function triggerOnSearch(value) {
    if (onSearch(value, true, compositionStatusRef.current) !== false) {
      onToggleOpen(true);
    }
  };
  var onInputCompositionStart = function onInputCompositionStart() {
    compositionStatusRef.current = true;
  };
  var onInputCompositionEnd = function onInputCompositionEnd(e) {
    compositionStatusRef.current = false;

    // Trigger search again to support `tokenSeparators` with typewriting
    if (mode !== 'combobox') {
      triggerOnSearch(e.target.value);
    }
  };
  var onInputChange = function onInputChange(event) {
    var value = event.target.value;

    // Pasted text should replace back to origin content
    if (tokenWithEnter && pastedTextRef.current && /[\r\n]/.test(pastedTextRef.current)) {
      // CRLF will be treated as a single space for input element
      var replacedText = pastedTextRef.current.replace(/[\r\n]+$/, '').replace(/\r\n/g, ' ').replace(/[\r\n]/g, ' ');
      value = value.replace(replacedText, pastedTextRef.current);
    }
    pastedTextRef.current = null;
    triggerOnSearch(value);
  };
  var onInputPaste = function onInputPaste(e) {
    var clipboardData = e.clipboardData;
    var value = clipboardData.getData('text');
    pastedTextRef.current = value;
  };
  var onClick = function onClick(_ref) {
    var target = _ref.target;
    if (target !== inputRef.current) {
      // Should focus input if click the selector
      var isIE = document.body.style.msTouchAction !== undefined;
      if (isIE) {
        setTimeout(function () {
          inputRef.current.focus();
        });
      } else {
        inputRef.current.focus();
      }
    }
  };
  var onMouseDown = function onMouseDown(event) {
    var inputMouseDown = getInputMouseDown();

    // when mode is combobox, don't prevent default behavior
    // https://github.com/ant-design/ant-design/issues/37320
    if (event.target !== inputRef.current && !inputMouseDown && mode !== 'combobox') {
      event.preventDefault();
    }
    if (mode !== 'combobox' && (!showSearch || !inputMouseDown) || !open) {
      if (open && autoClearSearchValue !== false) {
        onSearch('', true, false);
      }
      onToggleOpen();
    }
  };

  // ================= Inner Selector ==================
  var sharedProps = {
    inputRef: inputRef,
    onInputKeyDown: onInternalInputKeyDown,
    onInputMouseDown: onInternalInputMouseDown,
    onInputChange: onInputChange,
    onInputPaste: onInputPaste,
    onInputCompositionStart: onInputCompositionStart,
    onInputCompositionEnd: onInputCompositionEnd
  };
  var selectNode = mode === 'multiple' || mode === 'tags' ? /*#__PURE__*/react.createElement(MultipleSelector, (0,esm_extends/* default */.Z)({}, props, sharedProps)) : /*#__PURE__*/react.createElement(Selector_SingleSelector, (0,esm_extends/* default */.Z)({}, props, sharedProps));
  return /*#__PURE__*/react.createElement("div", {
    ref: domRef,
    className: "".concat(prefixCls, "-selector"),
    onClick: onClick,
    onMouseDown: onMouseDown
  }, selectNode);
};
var ForwardSelector = /*#__PURE__*/react.forwardRef(Selector);
ForwardSelector.displayName = 'Selector';
/* harmony default export */ var es_Selector = (ForwardSelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+trigger@1.14.1/node_modules/@rc-component/trigger/es/index.js + 11 modules
var trigger_es = __webpack_require__(25771);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/SelectTrigger.js




var _excluded = ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "builtinPlacements", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"];



var getBuiltInPlacements = function getBuiltInPlacements(dropdownMatchSelectWidth) {
  // Enable horizontal overflow auto-adjustment when a custom dropdown width is provided
  var adjustX = dropdownMatchSelectWidth === true ? 0 : 1;
  return {
    bottomLeft: {
      points: ['tl', 'bl'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      },
      htmlRegion: 'scroll'
    },
    bottomRight: {
      points: ['tr', 'br'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      },
      htmlRegion: 'scroll'
    },
    topLeft: {
      points: ['bl', 'tl'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      },
      htmlRegion: 'scroll'
    },
    topRight: {
      points: ['br', 'tr'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      },
      htmlRegion: 'scroll'
    }
  };
};
var SelectTrigger = function SelectTrigger(props, ref) {
  var prefixCls = props.prefixCls,
    disabled = props.disabled,
    visible = props.visible,
    children = props.children,
    popupElement = props.popupElement,
    containerWidth = props.containerWidth,
    animation = props.animation,
    transitionName = props.transitionName,
    dropdownStyle = props.dropdownStyle,
    dropdownClassName = props.dropdownClassName,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'ltr' : _props$direction,
    placement = props.placement,
    builtinPlacements = props.builtinPlacements,
    dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
    dropdownRender = props.dropdownRender,
    dropdownAlign = props.dropdownAlign,
    getPopupContainer = props.getPopupContainer,
    empty = props.empty,
    getTriggerDOMNode = props.getTriggerDOMNode,
    onPopupVisibleChange = props.onPopupVisibleChange,
    onPopupMouseEnter = props.onPopupMouseEnter,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
  var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
  var popupNode = popupElement;
  if (dropdownRender) {
    popupNode = dropdownRender(popupElement);
  }
  var mergedBuiltinPlacements = react.useMemo(function () {
    return builtinPlacements || getBuiltInPlacements(dropdownMatchSelectWidth);
  }, [builtinPlacements, dropdownMatchSelectWidth]);

  // ===================== Motion ======================
  var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName;

  // ======================= Ref =======================
  var popupRef = react.useRef(null);
  react.useImperativeHandle(ref, function () {
    return {
      getPopupElement: function getPopupElement() {
        return popupRef.current;
      }
    };
  });
  var popupStyle = (0,objectSpread2/* default */.Z)({
    minWidth: containerWidth
  }, dropdownStyle);
  if (typeof dropdownMatchSelectWidth === 'number') {
    popupStyle.width = dropdownMatchSelectWidth;
  } else if (dropdownMatchSelectWidth) {
    popupStyle.width = containerWidth;
  }
  return /*#__PURE__*/react.createElement(trigger_es/* default */.Z, (0,esm_extends/* default */.Z)({}, restProps, {
    showAction: onPopupVisibleChange ? ['click'] : [],
    hideAction: onPopupVisibleChange ? ['click'] : [],
    popupPlacement: placement || (direction === 'rtl' ? 'bottomRight' : 'bottomLeft'),
    builtinPlacements: mergedBuiltinPlacements,
    prefixCls: dropdownPrefixCls,
    popupTransitionName: mergedTransitionName,
    popup: /*#__PURE__*/react.createElement("div", {
      ref: popupRef,
      onMouseEnter: onPopupMouseEnter
    }, popupNode),
    popupAlign: dropdownAlign,
    popupVisible: visible,
    getPopupContainer: getPopupContainer,
    popupClassName: classnames_default()(dropdownClassName, (0,defineProperty/* default */.Z)({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
    popupStyle: popupStyle,
    getTriggerDOMNode: getTriggerDOMNode,
    onPopupVisibleChange: onPopupVisibleChange
  }), children);
};
var RefSelectTrigger = /*#__PURE__*/react.forwardRef(SelectTrigger);
RefSelectTrigger.displayName = 'SelectTrigger';
/* harmony default export */ var es_SelectTrigger = (RefSelectTrigger);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/toArray.js
var esm_toArray = __webpack_require__(77094);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/utils/valueUtil.js




function getKey(data, index) {
  var key = data.key;
  var value;
  if ('value' in data) {
    value = data.value;
  }
  if (key !== null && key !== undefined) {
    return key;
  }
  if (value !== undefined) {
    return value;
  }
  return "rc-index-key-".concat(index);
}
function fillFieldNames(fieldNames, childrenAsData) {
  var _ref = fieldNames || {},
    label = _ref.label,
    value = _ref.value,
    options = _ref.options,
    groupLabel = _ref.groupLabel;
  var mergedLabel = label || (childrenAsData ? 'children' : 'label');
  return {
    label: mergedLabel,
    value: value || 'value',
    options: options || 'options',
    groupLabel: groupLabel || mergedLabel
  };
}

/**
 * Flat options into flatten list.
 * We use `optionOnly` here is aim to avoid user use nested option group.
 * Here is simply set `key` to the index if not provided.
 */
function flattenOptions(options) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    fieldNames = _ref2.fieldNames,
    childrenAsData = _ref2.childrenAsData;
  var flattenList = [];
  var _fillFieldNames = fillFieldNames(fieldNames, false),
    fieldLabel = _fillFieldNames.label,
    fieldValue = _fillFieldNames.value,
    fieldOptions = _fillFieldNames.options,
    groupLabel = _fillFieldNames.groupLabel;
  function dig(list, isGroupOption) {
    list.forEach(function (data) {
      if (isGroupOption || !(fieldOptions in data)) {
        var value = data[fieldValue];

        // Option
        flattenList.push({
          key: getKey(data, flattenList.length),
          groupOption: isGroupOption,
          data: data,
          label: data[fieldLabel],
          value: value
        });
      } else {
        var grpLabel = data[groupLabel];
        if (grpLabel === undefined && childrenAsData) {
          grpLabel = data.label;
        }

        // Option Group
        flattenList.push({
          key: getKey(data, flattenList.length),
          group: true,
          data: data,
          label: grpLabel
        });
        dig(data[fieldOptions], true);
      }
    });
  }
  dig(options, false);
  return flattenList;
}

/**
 * Inject `props` into `option` for legacy usage
 */
function injectPropsWithOption(option) {
  var newOption = (0,objectSpread2/* default */.Z)({}, option);
  if (!('props' in newOption)) {
    Object.defineProperty(newOption, 'props', {
      get: function get() {
        (0,es_warning/* default */.ZP)(false, 'Return type is option instead of Option instance. Please read value directly instead of reading from `props`.');
        return newOption;
      }
    });
  }
  return newOption;
}
function getSeparatedContent(text, tokens) {
  if (!tokens || !tokens.length) {
    return null;
  }
  var match = false;
  function separate(str, _ref3) {
    var _ref4 = (0,esm_toArray/* default */.Z)(_ref3),
      token = _ref4[0],
      restTokens = _ref4.slice(1);
    if (!token) {
      return [str];
    }
    var list = str.split(token);
    match = match || list.length > 1;
    return list.reduce(function (prevList, unitStr) {
      return [].concat((0,toConsumableArray/* default */.Z)(prevList), (0,toConsumableArray/* default */.Z)(separate(unitStr, restTokens)));
    }, []).filter(function (unit) {
      return unit;
    });
  }
  var list = separate(text, tokens);
  return match ? list : null;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/BaseSelect.js







var BaseSelect_excluded = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "showArrow", "inputIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "builtinPlacements", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"];















var DEFAULT_OMIT_PROPS = ['value', 'onChange', 'removeIcon', 'placeholder', 'autoFocus', 'maxTagCount', 'maxTagTextLength', 'maxTagPlaceholder', 'choiceTransitionName', 'onInputKeyDown', 'onPopupScroll', 'tabIndex'];
function BaseSelect_isMultiple(mode) {
  return mode === 'tags' || mode === 'multiple';
}
var BaseSelect = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _customizeRawInputEle, _classNames2;
  var id = props.id,
    prefixCls = props.prefixCls,
    className = props.className,
    showSearch = props.showSearch,
    tagRender = props.tagRender,
    direction = props.direction,
    omitDomProps = props.omitDomProps,
    displayValues = props.displayValues,
    onDisplayValuesChange = props.onDisplayValuesChange,
    emptyOptions = props.emptyOptions,
    _props$notFoundConten = props.notFoundContent,
    notFoundContent = _props$notFoundConten === void 0 ? 'Not Found' : _props$notFoundConten,
    onClear = props.onClear,
    mode = props.mode,
    disabled = props.disabled,
    loading = props.loading,
    getInputElement = props.getInputElement,
    getRawInputElement = props.getRawInputElement,
    open = props.open,
    defaultOpen = props.defaultOpen,
    onDropdownVisibleChange = props.onDropdownVisibleChange,
    activeValue = props.activeValue,
    onActiveValueChange = props.onActiveValueChange,
    activeDescendantId = props.activeDescendantId,
    searchValue = props.searchValue,
    autoClearSearchValue = props.autoClearSearchValue,
    onSearch = props.onSearch,
    onSearchSplit = props.onSearchSplit,
    tokenSeparators = props.tokenSeparators,
    allowClear = props.allowClear,
    showArrow = props.showArrow,
    inputIcon = props.inputIcon,
    clearIcon = props.clearIcon,
    OptionList = props.OptionList,
    animation = props.animation,
    transitionName = props.transitionName,
    dropdownStyle = props.dropdownStyle,
    dropdownClassName = props.dropdownClassName,
    dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
    dropdownRender = props.dropdownRender,
    dropdownAlign = props.dropdownAlign,
    placement = props.placement,
    builtinPlacements = props.builtinPlacements,
    getPopupContainer = props.getPopupContainer,
    _props$showAction = props.showAction,
    showAction = _props$showAction === void 0 ? [] : _props$showAction,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    onKeyUp = props.onKeyUp,
    onKeyDown = props.onKeyDown,
    onMouseDown = props.onMouseDown,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, BaseSelect_excluded);

  // ============================== MISC ==============================
  var multiple = BaseSelect_isMultiple(mode);
  var mergedShowSearch = (showSearch !== undefined ? showSearch : multiple) || mode === 'combobox';
  var domProps = (0,objectSpread2/* default */.Z)({}, restProps);
  DEFAULT_OMIT_PROPS.forEach(function (propName) {
    delete domProps[propName];
  });
  omitDomProps === null || omitDomProps === void 0 ? void 0 : omitDomProps.forEach(function (propName) {
    delete domProps[propName];
  });

  // ============================= Mobile =============================
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    mobile = _React$useState2[0],
    setMobile = _React$useState2[1];
  react.useEffect(function () {
    // Only update on the client side
    setMobile((0,isMobile/* default */.Z)());
  }, []);

  // ============================== Refs ==============================
  var containerRef = react.useRef(null);
  var selectorDomRef = react.useRef(null);
  var triggerRef = react.useRef(null);
  var selectorRef = react.useRef(null);
  var listRef = react.useRef(null);

  /** Used for component focused management */
  var _useDelayReset = useDelayReset(),
    _useDelayReset2 = (0,slicedToArray/* default */.Z)(_useDelayReset, 3),
    mockFocused = _useDelayReset2[0],
    setMockFocused = _useDelayReset2[1],
    cancelSetMockFocused = _useDelayReset2[2];

  // =========================== Imperative ===========================
  react.useImperativeHandle(ref, function () {
    var _selectorRef$current, _selectorRef$current2;
    return {
      focus: (_selectorRef$current = selectorRef.current) === null || _selectorRef$current === void 0 ? void 0 : _selectorRef$current.focus,
      blur: (_selectorRef$current2 = selectorRef.current) === null || _selectorRef$current2 === void 0 ? void 0 : _selectorRef$current2.blur,
      scrollTo: function scrollTo(arg) {
        var _listRef$current;
        return (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(arg);
      }
    };
  });

  // ========================== Search Value ==========================
  var mergedSearchValue = react.useMemo(function () {
    var _displayValues$;
    if (mode !== 'combobox') {
      return searchValue;
    }
    var val = (_displayValues$ = displayValues[0]) === null || _displayValues$ === void 0 ? void 0 : _displayValues$.value;
    return typeof val === 'string' || typeof val === 'number' ? String(val) : '';
  }, [searchValue, mode, displayValues]);

  // ========================== Custom Input ==========================
  // Only works in `combobox`
  var customizeInputElement = mode === 'combobox' && typeof getInputElement === 'function' && getInputElement() || null;

  // Used for customize replacement for `rc-cascader`
  var customizeRawInputElement = typeof getRawInputElement === 'function' && getRawInputElement();
  var customizeRawInputRef = (0,es_ref/* useComposeRef */.x1)(selectorDomRef, customizeRawInputElement === null || customizeRawInputElement === void 0 ? void 0 : (_customizeRawInputEle = customizeRawInputElement.props) === null || _customizeRawInputEle === void 0 ? void 0 : _customizeRawInputEle.ref);

  // ============================== Open ==============================
  // SSR not support Portal which means we need delay `open` for the first time render
  var _React$useState3 = react.useState(false),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    rendered = _React$useState4[0],
    setRendered = _React$useState4[1];
  (0,useLayoutEffect/* default */.Z)(function () {
    setRendered(true);
  }, []);
  var _useMergedState = (0,useMergedState/* default */.Z)(false, {
      defaultValue: defaultOpen,
      value: open
    }),
    _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
    innerOpen = _useMergedState2[0],
    setInnerOpen = _useMergedState2[1];
  var mergedOpen = rendered ? innerOpen : false;

  // Not trigger `open` in `combobox` when `notFoundContent` is empty
  var emptyListContent = !notFoundContent && emptyOptions;
  if (disabled || emptyListContent && mergedOpen && mode === 'combobox') {
    mergedOpen = false;
  }
  var triggerOpen = emptyListContent ? false : mergedOpen;
  var onToggleOpen = react.useCallback(function (newOpen) {
    var nextOpen = newOpen !== undefined ? newOpen : !mergedOpen;
    if (!disabled) {
      setInnerOpen(nextOpen);
      if (mergedOpen !== nextOpen) {
        onDropdownVisibleChange === null || onDropdownVisibleChange === void 0 ? void 0 : onDropdownVisibleChange(nextOpen);
      }
    }
  }, [disabled, mergedOpen, setInnerOpen, onDropdownVisibleChange]);

  // ============================= Search =============================
  var tokenWithEnter = react.useMemo(function () {
    return (tokenSeparators || []).some(function (tokenSeparator) {
      return ['\n', '\r\n'].includes(tokenSeparator);
    });
  }, [tokenSeparators]);
  var onInternalSearch = function onInternalSearch(searchText, fromTyping, isCompositing) {
    var ret = true;
    var newSearchText = searchText;
    onActiveValueChange === null || onActiveValueChange === void 0 ? void 0 : onActiveValueChange(null);

    // Check if match the `tokenSeparators`
    var patchLabels = isCompositing ? null : getSeparatedContent(searchText, tokenSeparators);

    // Ignore combobox since it's not split-able
    if (mode !== 'combobox' && patchLabels) {
      newSearchText = '';
      onSearchSplit === null || onSearchSplit === void 0 ? void 0 : onSearchSplit(patchLabels);

      // Should close when paste finish
      onToggleOpen(false);

      // Tell Selector that break next actions
      ret = false;
    }
    if (onSearch && mergedSearchValue !== newSearchText) {
      onSearch(newSearchText, {
        source: fromTyping ? 'typing' : 'effect'
      });
    }
    return ret;
  };

  // Only triggered when menu is closed & mode is tags
  // If menu is open, OptionList will take charge
  // If mode isn't tags, press enter is not meaningful when you can't see any option
  var onInternalSearchSubmit = function onInternalSearchSubmit(searchText) {
    // prevent empty tags from appearing when you click the Enter button
    if (!searchText || !searchText.trim()) {
      return;
    }
    onSearch(searchText, {
      source: 'submit'
    });
  };

  // Close will clean up single mode search text
  react.useEffect(function () {
    if (!mergedOpen && !multiple && mode !== 'combobox') {
      onInternalSearch('', false, false);
    }
  }, [mergedOpen]);

  // ============================ Disabled ============================
  // Close dropdown & remove focus state when disabled change
  react.useEffect(function () {
    if (innerOpen && disabled) {
      setInnerOpen(false);
    }
    if (disabled) {
      setMockFocused(false);
    }
  }, [disabled]);

  // ============================ Keyboard ============================
  /**
   * We record input value here to check if can press to clean up by backspace
   * - null: Key is not down, this is reset by key up
   * - true: Search text is empty when first time backspace down
   * - false: Search text is not empty when first time backspace down
   */
  var _useLock = useLock(),
    _useLock2 = (0,slicedToArray/* default */.Z)(_useLock, 2),
    getClearLock = _useLock2[0],
    setClearLock = _useLock2[1];

  // KeyDown
  var onInternalKeyDown = function onInternalKeyDown(event) {
    var clearLock = getClearLock();
    var which = event.which;
    if (which === KeyCode/* default.ENTER */.Z.ENTER) {
      // Do not submit form when type in the input
      if (mode !== 'combobox') {
        event.preventDefault();
      }

      // We only manage open state here, close logic should handle by list component
      if (!mergedOpen) {
        onToggleOpen(true);
      }
    }
    setClearLock(!!mergedSearchValue);

    // Remove value by `backspace`
    if (which === KeyCode/* default.BACKSPACE */.Z.BACKSPACE && !clearLock && multiple && !mergedSearchValue && displayValues.length) {
      var cloneDisplayValues = (0,toConsumableArray/* default */.Z)(displayValues);
      var removedDisplayValue = null;
      for (var i = cloneDisplayValues.length - 1; i >= 0; i -= 1) {
        var current = cloneDisplayValues[i];
        if (!current.disabled) {
          cloneDisplayValues.splice(i, 1);
          removedDisplayValue = current;
          break;
        }
      }
      if (removedDisplayValue) {
        onDisplayValuesChange(cloneDisplayValues, {
          type: 'remove',
          values: [removedDisplayValue]
        });
      }
    }
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }
    if (mergedOpen && listRef.current) {
      var _listRef$current2;
      (_listRef$current2 = listRef.current).onKeyDown.apply(_listRef$current2, [event].concat(rest));
    }
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown.apply(void 0, [event].concat(rest));
  };

  // KeyUp
  var onInternalKeyUp = function onInternalKeyUp(event) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }
    if (mergedOpen && listRef.current) {
      var _listRef$current3;
      (_listRef$current3 = listRef.current).onKeyUp.apply(_listRef$current3, [event].concat(rest));
    }
    onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp.apply(void 0, [event].concat(rest));
  };

  // ============================ Selector ============================
  var onSelectorRemove = function onSelectorRemove(val) {
    var newValues = displayValues.filter(function (i) {
      return i !== val;
    });
    onDisplayValuesChange(newValues, {
      type: 'remove',
      values: [val]
    });
  };

  // ========================== Focus / Blur ==========================
  /** Record real focus status */
  var focusRef = react.useRef(false);
  var onContainerFocus = function onContainerFocus() {
    setMockFocused(true);
    if (!disabled) {
      if (onFocus && !focusRef.current) {
        onFocus.apply(void 0, arguments);
      }

      // `showAction` should handle `focus` if set
      if (showAction.includes('focus')) {
        onToggleOpen(true);
      }
    }
    focusRef.current = true;
  };
  var onContainerBlur = function onContainerBlur() {
    setMockFocused(false, function () {
      focusRef.current = false;
      onToggleOpen(false);
    });
    if (disabled) {
      return;
    }
    if (mergedSearchValue) {
      // `tags` mode should move `searchValue` into values
      if (mode === 'tags') {
        onSearch(mergedSearchValue, {
          source: 'submit'
        });
      } else if (mode === 'multiple') {
        // `multiple` mode only clean the search value but not trigger event
        onSearch('', {
          source: 'blur'
        });
      }
    }
    if (onBlur) {
      onBlur.apply(void 0, arguments);
    }
  };

  // Give focus back of Select
  var activeTimeoutIds = [];
  react.useEffect(function () {
    return function () {
      activeTimeoutIds.forEach(function (timeoutId) {
        return clearTimeout(timeoutId);
      });
      activeTimeoutIds.splice(0, activeTimeoutIds.length);
    };
  }, []);
  var onInternalMouseDown = function onInternalMouseDown(event) {
    var _triggerRef$current;
    var target = event.target;
    var popupElement = (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : _triggerRef$current.getPopupElement();

    // We should give focus back to selector if clicked item is not focusable
    if (popupElement && popupElement.contains(target)) {
      var timeoutId = setTimeout(function () {
        var index = activeTimeoutIds.indexOf(timeoutId);
        if (index !== -1) {
          activeTimeoutIds.splice(index, 1);
        }
        cancelSetMockFocused();
        if (!mobile && !popupElement.contains(document.activeElement)) {
          var _selectorRef$current3;
          (_selectorRef$current3 = selectorRef.current) === null || _selectorRef$current3 === void 0 ? void 0 : _selectorRef$current3.focus();
        }
      });
      activeTimeoutIds.push(timeoutId);
    }
    for (var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      restArgs[_key3 - 1] = arguments[_key3];
    }
    onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown.apply(void 0, [event].concat(restArgs));
  };

  // ============================ Dropdown ============================
  var _React$useState5 = react.useState(null),
    _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
    containerWidth = _React$useState6[0],
    setContainerWidth = _React$useState6[1];
  var _React$useState7 = react.useState({}),
    _React$useState8 = (0,slicedToArray/* default */.Z)(_React$useState7, 2),
    forceUpdate = _React$useState8[1];
  // We need force update here since popup dom is render async
  function onPopupMouseEnter() {
    forceUpdate({});
  }
  (0,useLayoutEffect/* default */.Z)(function () {
    if (triggerOpen) {
      var _containerRef$current;
      var newWidth = Math.ceil((_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.offsetWidth);
      if (containerWidth !== newWidth && !Number.isNaN(newWidth)) {
        setContainerWidth(newWidth);
      }
    }
  }, [triggerOpen]);

  // Used for raw custom input trigger
  var onTriggerVisibleChange;
  if (customizeRawInputElement) {
    onTriggerVisibleChange = function onTriggerVisibleChange(newOpen) {
      onToggleOpen(newOpen);
    };
  }

  // Close when click on non-select element
  useSelectTriggerControl(function () {
    var _triggerRef$current2;
    return [containerRef.current, (_triggerRef$current2 = triggerRef.current) === null || _triggerRef$current2 === void 0 ? void 0 : _triggerRef$current2.getPopupElement()];
  }, triggerOpen, onToggleOpen, !!customizeRawInputElement);

  // ============================ Context =============================
  var baseSelectContext = react.useMemo(function () {
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
      notFoundContent: notFoundContent,
      open: mergedOpen,
      triggerOpen: triggerOpen,
      id: id,
      showSearch: mergedShowSearch,
      multiple: multiple,
      toggleOpen: onToggleOpen
    });
  }, [props, notFoundContent, triggerOpen, mergedOpen, id, mergedShowSearch, multiple, onToggleOpen]);

  // ==================================================================
  // ==                            Render                            ==
  // ==================================================================

  // ============================= Arrow ==============================
  var mergedShowArrow = showArrow !== undefined ? showArrow : loading || !multiple && mode !== 'combobox';
  var arrowNode;
  if (mergedShowArrow) {
    arrowNode = /*#__PURE__*/react.createElement(es_TransBtn, {
      className: classnames_default()("".concat(prefixCls, "-arrow"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-arrow-loading"), loading)),
      customizeIcon: inputIcon,
      customizeIconProps: {
        loading: loading,
        searchValue: mergedSearchValue,
        open: mergedOpen,
        focused: mockFocused,
        showSearch: mergedShowSearch
      }
    });
  }

  // ============================= Clear ==============================
  var clearNode;
  var onClearMouseDown = function onClearMouseDown() {
    var _selectorRef$current4;
    onClear === null || onClear === void 0 ? void 0 : onClear();
    (_selectorRef$current4 = selectorRef.current) === null || _selectorRef$current4 === void 0 ? void 0 : _selectorRef$current4.focus();
    onDisplayValuesChange([], {
      type: 'clear',
      values: displayValues
    });
    onInternalSearch('', false, false);
  };
  if (!disabled && allowClear && (displayValues.length || mergedSearchValue) && !(mode === 'combobox' && mergedSearchValue === '')) {
    clearNode = /*#__PURE__*/react.createElement(es_TransBtn, {
      className: "".concat(prefixCls, "-clear"),
      onMouseDown: onClearMouseDown,
      customizeIcon: clearIcon
    }, "\xD7");
  }

  // =========================== OptionList ===========================
  var optionList = /*#__PURE__*/react.createElement(OptionList, {
    ref: listRef
  });

  // ============================= Select =============================
  var mergedClassName = classnames_default()(prefixCls, className, (_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-focused"), mockFocused), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-multiple"), multiple), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-single"), !multiple), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-allow-clear"), allowClear), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-show-arrow"), mergedShowArrow), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-loading"), loading), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-open"), mergedOpen), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-customize-input"), customizeInputElement), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-show-search"), mergedShowSearch), _classNames2));

  // >>> Selector
  var selectorNode = /*#__PURE__*/react.createElement(es_SelectTrigger, {
    ref: triggerRef,
    disabled: disabled,
    prefixCls: prefixCls,
    visible: triggerOpen,
    popupElement: optionList,
    containerWidth: containerWidth,
    animation: animation,
    transitionName: transitionName,
    dropdownStyle: dropdownStyle,
    dropdownClassName: dropdownClassName,
    direction: direction,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth,
    dropdownRender: dropdownRender,
    dropdownAlign: dropdownAlign,
    placement: placement,
    builtinPlacements: builtinPlacements,
    getPopupContainer: getPopupContainer,
    empty: emptyOptions,
    getTriggerDOMNode: function getTriggerDOMNode() {
      return selectorDomRef.current;
    },
    onPopupVisibleChange: onTriggerVisibleChange,
    onPopupMouseEnter: onPopupMouseEnter
  }, customizeRawInputElement ? /*#__PURE__*/react.cloneElement(customizeRawInputElement, {
    ref: customizeRawInputRef
  }) : /*#__PURE__*/react.createElement(es_Selector, (0,esm_extends/* default */.Z)({}, props, {
    domRef: selectorDomRef,
    prefixCls: prefixCls,
    inputElement: customizeInputElement,
    ref: selectorRef,
    id: id,
    showSearch: mergedShowSearch,
    autoClearSearchValue: autoClearSearchValue,
    mode: mode,
    activeDescendantId: activeDescendantId,
    tagRender: tagRender,
    values: displayValues,
    open: mergedOpen,
    onToggleOpen: onToggleOpen,
    activeValue: activeValue,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch,
    onSearchSubmit: onInternalSearchSubmit,
    onRemove: onSelectorRemove,
    tokenWithEnter: tokenWithEnter
  })));

  // >>> Render
  var renderNode;

  // Render raw
  if (customizeRawInputElement) {
    renderNode = selectorNode;
  } else {
    renderNode = /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
      className: mergedClassName
    }, domProps, {
      ref: containerRef,
      onMouseDown: onInternalMouseDown,
      onKeyDown: onInternalKeyDown,
      onKeyUp: onInternalKeyUp,
      onFocus: onContainerFocus,
      onBlur: onContainerBlur
    }), mockFocused && !mergedOpen && /*#__PURE__*/react.createElement("span", {
      style: {
        width: 0,
        height: 0,
        position: 'absolute',
        overflow: 'hidden',
        opacity: 0
      },
      "aria-live": "polite"
    }, "".concat(displayValues.map(function (_ref) {
      var label = _ref.label,
        value = _ref.value;
      return ['number', 'string'].includes((0,esm_typeof/* default */.Z)(label)) ? label : value;
    }).join(', '))), selectorNode, arrowNode, clearNode);
  }
  return /*#__PURE__*/react.createElement(BaseSelectContext.Provider, {
    value: baseSelectContext
  }, renderNode);
});

// Set display name for dev
if (false) {}
/* harmony default export */ var es_BaseSelect = (BaseSelect);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/hooks/useCache.js


/**
 * Cache `value` related LabeledValue & options.
 */
/* harmony default export */ var useCache = (function (labeledValues, valueOptions) {
  var cacheRef = react.useRef({
    values: new Map(),
    options: new Map()
  });
  var filledLabeledValues = react.useMemo(function () {
    var _cacheRef$current = cacheRef.current,
      prevValueCache = _cacheRef$current.values,
      prevOptionCache = _cacheRef$current.options;

    // Fill label by cache
    var patchedValues = labeledValues.map(function (item) {
      if (item.label === undefined) {
        var _prevValueCache$get;
        return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, {
          label: (_prevValueCache$get = prevValueCache.get(item.value)) === null || _prevValueCache$get === void 0 ? void 0 : _prevValueCache$get.label
        });
      }
      return item;
    });

    // Refresh cache
    var valueCache = new Map();
    var optionCache = new Map();
    patchedValues.forEach(function (item) {
      valueCache.set(item.value, item);
      optionCache.set(item.value, valueOptions.get(item.value) || prevOptionCache.get(item.value));
    });
    cacheRef.current.values = valueCache;
    cacheRef.current.options = optionCache;
    return patchedValues;
  }, [labeledValues, valueOptions]);
  var getOption = react.useCallback(function (val) {
    return valueOptions.get(val) || cacheRef.current.options.get(val);
  }, [valueOptions]);
  return [filledLabeledValues, getOption];
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/hooks/useFilterOptions.js





function includes(test, search) {
  return commonUtil_toArray(test).join('').toUpperCase().includes(search);
}
/* harmony default export */ var useFilterOptions = (function (options, fieldNames, searchValue, filterOption, optionFilterProp) {
  return react.useMemo(function () {
    if (!searchValue || filterOption === false) {
      return options;
    }
    var fieldOptions = fieldNames.options,
      fieldLabel = fieldNames.label,
      fieldValue = fieldNames.value;
    var filteredOptions = [];
    var customizeFilter = typeof filterOption === 'function';
    var upperSearch = searchValue.toUpperCase();
    var filterFunc = customizeFilter ? filterOption : function (_, option) {
      // Use provided `optionFilterProp`
      if (optionFilterProp) {
        return includes(option[optionFilterProp], upperSearch);
      }

      // Auto select `label` or `value` by option type
      if (option[fieldOptions]) {
        // hack `fieldLabel` since `OptionGroup` children is not `label`
        return includes(option[fieldLabel !== 'children' ? fieldLabel : 'label'], upperSearch);
      }
      return includes(option[fieldValue], upperSearch);
    };
    var wrapOption = customizeFilter ? function (opt) {
      return injectPropsWithOption(opt);
    } : function (opt) {
      return opt;
    };
    options.forEach(function (item) {
      // Group should check child options
      if (item[fieldOptions]) {
        // Check group first
        var matchGroup = filterFunc(searchValue, wrapOption(item));
        if (matchGroup) {
          filteredOptions.push(item);
        } else {
          // Check option
          var subOptions = item[fieldOptions].filter(function (subItem) {
            return filterFunc(searchValue, wrapOption(subItem));
          });
          if (subOptions.length) {
            filteredOptions.push((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, (0,defineProperty/* default */.Z)({}, fieldOptions, subOptions)));
          }
        }
        return;
      }
      if (filterFunc(searchValue, wrapOption(item))) {
        filteredOptions.push(item);
      }
    });
    return filteredOptions;
  }, [options, filterOption, optionFilterProp, searchValue, fieldNames]);
});
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.0/node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(3770);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/hooks/useId.js



var uuid = 0;

/** Is client side and not jsdom */
var useId_isBrowserClient =  true && (0,canUseDom/* default */.Z)();

/** Get unique id for accessibility usage */
function getUUID() {
  var retId;

  // Test never reach
  /* istanbul ignore if */
  if (useId_isBrowserClient) {
    retId = uuid;
    uuid += 1;
  } else {
    retId = 'TEST_OR_SSR';
  }
  return retId;
}
function useId(id) {
  // Inner id for accessibility usage. Only work in client side
  var _React$useState = react.useState(),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    innerId = _React$useState2[0],
    setInnerId = _React$useState2[1];
  react.useEffect(function () {
    setInnerId("rc_select_".concat(getUUID()));
  }, []);
  return id || innerId;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.0/node_modules/rc-util/es/Children/toArray.js
var Children_toArray = __webpack_require__(92781);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/utils/legacyUtil.js


var legacyUtil_excluded = ["children", "value"],
  _excluded2 = ["children"];


function convertNodeToOption(node) {
  var _ref = node,
    key = _ref.key,
    _ref$props = _ref.props,
    children = _ref$props.children,
    value = _ref$props.value,
    restProps = (0,objectWithoutProperties/* default */.Z)(_ref$props, legacyUtil_excluded);
  return (0,objectSpread2/* default */.Z)({
    key: key,
    value: value !== undefined ? value : key,
    children: children
  }, restProps);
}
function legacyUtil_convertChildrenToData(nodes) {
  var optionOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return (0,Children_toArray/* default */.Z)(nodes).map(function (node, index) {
    if (! /*#__PURE__*/react.isValidElement(node) || !node.type) {
      return null;
    }
    var _ref2 = node,
      isSelectOptGroup = _ref2.type.isSelectOptGroup,
      key = _ref2.key,
      _ref2$props = _ref2.props,
      children = _ref2$props.children,
      restProps = (0,objectWithoutProperties/* default */.Z)(_ref2$props, _excluded2);
    if (optionOnly || !isSelectOptGroup) {
      return convertNodeToOption(node);
    }
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
      key: "__RC_SELECT_GRP__".concat(key === null ? index : key, "__"),
      label: key
    }, restProps), {}, {
      options: legacyUtil_convertChildrenToData(children)
    });
  }).filter(function (data) {
    return data;
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/hooks/useOptions.js



/**
 * Parse `children` to `options` if `options` is not provided.
 * Then flatten the `options`.
 */
function useOptions(options, children, fieldNames, optionFilterProp, optionLabelProp) {
  return react.useMemo(function () {
    var mergedOptions = options;
    var childrenAsData = !options;
    if (childrenAsData) {
      mergedOptions = legacyUtil_convertChildrenToData(children);
    }
    var valueOptions = new Map();
    var labelOptions = new Map();
    var setLabelOptions = function setLabelOptions(labelOptionsMap, option, key) {
      if (key && typeof key === 'string') {
        labelOptionsMap.set(option[key], option);
      }
    };
    function dig(optionList) {
      var isChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // for loop to speed up collection speed
      for (var i = 0; i < optionList.length; i += 1) {
        var option = optionList[i];
        if (!option[fieldNames.options] || isChildren) {
          valueOptions.set(option[fieldNames.value], option);
          setLabelOptions(labelOptions, option, fieldNames.label);
          // https://github.com/ant-design/ant-design/issues/35304
          setLabelOptions(labelOptions, option, optionFilterProp);
          setLabelOptions(labelOptions, option, optionLabelProp);
        } else {
          dig(option[fieldNames.options], true);
        }
      }
    }
    dig(mergedOptions);
    return {
      options: mergedOptions,
      valueOptions: valueOptions,
      labelOptions: labelOptions
    };
  }, [options, children, fieldNames, optionFilterProp, optionLabelProp]);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/hooks/useRefFunc.js


/**
 * Same as `React.useCallback` but always return a memoized function
 * but redirect to real function.
 */
function useRefFunc(callback) {
  var funcRef = react.useRef();
  funcRef.current = callback;
  var cacheFn = react.useCallback(function () {
    return funcRef.current.apply(funcRef, arguments);
  }, []);
  return cacheFn;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/OptGroup.js
/* istanbul ignore file */

/** This is a placeholder, not real render in dom */
var OptGroup = function OptGroup() {
  return null;
};
OptGroup.isSelectOptGroup = true;
/* harmony default export */ var es_OptGroup = (OptGroup);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/Option.js
/* istanbul ignore file */

/** This is a placeholder, not real render in dom */
var Option = function Option() {
  return null;
};
Option.isSelectOption = true;
/* harmony default export */ var es_Option = (Option);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.0/node_modules/rc-util/es/hooks/useMemo.js
var useMemo = __webpack_require__(438);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.0/node_modules/rc-util/es/omit.js
var omit = __webpack_require__(73800);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-virtual-list@3.5.2/node_modules/rc-virtual-list/es/index.js + 14 modules
var rc_virtual_list_es = __webpack_require__(91276);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/SelectContext.js

var SelectContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ var es_SelectContext = (SelectContext);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/utils/platformUtil.js
/* istanbul ignore file */
function isPlatformMac() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/OptionList.js





var OptionList_excluded = ["disabled", "title", "children", "style", "className"];













// export interface OptionListProps<OptionsType extends object[]> {

function OptionList_isTitleType(content) {
  return typeof content === 'string' || typeof content === 'number';
}

/**
 * Using virtual list of option display.
 * Will fallback to dom if use customize render.
 */
var OptionList = function OptionList(_, ref) {
  var _useBaseProps = useBaseProps(),
    prefixCls = _useBaseProps.prefixCls,
    id = _useBaseProps.id,
    open = _useBaseProps.open,
    multiple = _useBaseProps.multiple,
    mode = _useBaseProps.mode,
    searchValue = _useBaseProps.searchValue,
    toggleOpen = _useBaseProps.toggleOpen,
    notFoundContent = _useBaseProps.notFoundContent,
    onPopupScroll = _useBaseProps.onPopupScroll;
  var _React$useContext = react.useContext(es_SelectContext),
    flattenOptions = _React$useContext.flattenOptions,
    onActiveValue = _React$useContext.onActiveValue,
    defaultActiveFirstOption = _React$useContext.defaultActiveFirstOption,
    onSelect = _React$useContext.onSelect,
    menuItemSelectedIcon = _React$useContext.menuItemSelectedIcon,
    rawValues = _React$useContext.rawValues,
    fieldNames = _React$useContext.fieldNames,
    virtual = _React$useContext.virtual,
    direction = _React$useContext.direction,
    listHeight = _React$useContext.listHeight,
    listItemHeight = _React$useContext.listItemHeight;
  var itemPrefixCls = "".concat(prefixCls, "-item");
  var memoFlattenOptions = (0,useMemo/* default */.Z)(function () {
    return flattenOptions;
  }, [open, flattenOptions], function (prev, next) {
    return next[0] && prev[1] !== next[1];
  });

  // =========================== List ===========================
  var listRef = react.useRef(null);
  var onListMouseDown = function onListMouseDown(event) {
    event.preventDefault();
  };
  var scrollIntoView = function scrollIntoView(args) {
    if (listRef.current) {
      listRef.current.scrollTo(typeof args === 'number' ? {
        index: args
      } : args);
    }
  };

  // ========================== Active ==========================
  var getEnabledActiveIndex = function getEnabledActiveIndex(index) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var len = memoFlattenOptions.length;
    for (var i = 0; i < len; i += 1) {
      var current = (index + i * offset + len) % len;
      var _memoFlattenOptions$c = memoFlattenOptions[current],
        group = _memoFlattenOptions$c.group,
        data = _memoFlattenOptions$c.data;
      if (!group && !data.disabled) {
        return current;
      }
    }
    return -1;
  };
  var _React$useState = react.useState(function () {
      return getEnabledActiveIndex(0);
    }),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    activeIndex = _React$useState2[0],
    setActiveIndex = _React$useState2[1];
  var setActive = function setActive(index) {
    var fromKeyboard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setActiveIndex(index);
    var info = {
      source: fromKeyboard ? 'keyboard' : 'mouse'
    };

    // Trigger active event
    var flattenItem = memoFlattenOptions[index];
    if (!flattenItem) {
      onActiveValue(null, -1, info);
      return;
    }
    onActiveValue(flattenItem.value, index, info);
  };

  // Auto active first item when list length or searchValue changed
  (0,react.useEffect)(function () {
    setActive(defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
  }, [memoFlattenOptions.length, searchValue]);

  // https://github.com/ant-design/ant-design/issues/34975
  var isSelected = react.useCallback(function (value) {
    return rawValues.has(value) && mode !== 'combobox';
  }, [mode, (0,toConsumableArray/* default */.Z)(rawValues).toString(), rawValues.size]);

  // Auto scroll to item position in single mode
  (0,react.useEffect)(function () {
    /**
     * React will skip `onChange` when component update.
     * `setActive` function will call root accessibility state update which makes re-render.
     * So we need to delay to let Input component trigger onChange first.
     */
    var timeoutId = setTimeout(function () {
      if (!multiple && open && rawValues.size === 1) {
        var value = Array.from(rawValues)[0];
        var index = memoFlattenOptions.findIndex(function (_ref) {
          var data = _ref.data;
          return data.value === value;
        });
        if (index !== -1) {
          setActive(index);
          scrollIntoView(index);
        }
      }
    });

    // Force trigger scrollbar visible when open
    if (open) {
      var _listRef$current;
      (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(undefined);
    }
    return function () {
      return clearTimeout(timeoutId);
    };
  }, [open, searchValue, flattenOptions.length]);

  // ========================== Values ==========================
  var onSelectValue = function onSelectValue(value) {
    if (value !== undefined) {
      onSelect(value, {
        selected: !rawValues.has(value)
      });
    }

    // Single mode should always close by select
    if (!multiple) {
      toggleOpen(false);
    }
  };

  // ========================= Keyboard =========================
  react.useImperativeHandle(ref, function () {
    return {
      onKeyDown: function onKeyDown(event) {
        var which = event.which,
          ctrlKey = event.ctrlKey;
        switch (which) {
          // >>> Arrow keys & ctrl + n/p on Mac
          case KeyCode/* default.N */.Z.N:
          case KeyCode/* default.P */.Z.P:
          case KeyCode/* default.UP */.Z.UP:
          case KeyCode/* default.DOWN */.Z.DOWN:
            {
              var offset = 0;
              if (which === KeyCode/* default.UP */.Z.UP) {
                offset = -1;
              } else if (which === KeyCode/* default.DOWN */.Z.DOWN) {
                offset = 1;
              } else if (isPlatformMac() && ctrlKey) {
                if (which === KeyCode/* default.N */.Z.N) {
                  offset = 1;
                } else if (which === KeyCode/* default.P */.Z.P) {
                  offset = -1;
                }
              }
              if (offset !== 0) {
                var nextActiveIndex = getEnabledActiveIndex(activeIndex + offset, offset);
                scrollIntoView(nextActiveIndex);
                setActive(nextActiveIndex, true);
              }
              break;
            }

          // >>> Select
          case KeyCode/* default.ENTER */.Z.ENTER:
            {
              // value
              var item = memoFlattenOptions[activeIndex];
              if (item && !item.data.disabled) {
                onSelectValue(item.value);
              } else {
                onSelectValue(undefined);
              }
              if (open) {
                event.preventDefault();
              }
              break;
            }

          // >>> Close
          case KeyCode/* default.ESC */.Z.ESC:
            {
              toggleOpen(false);
              if (open) {
                event.stopPropagation();
              }
            }
        }
      },
      onKeyUp: function onKeyUp() {},
      scrollTo: function scrollTo(index) {
        scrollIntoView(index);
      }
    };
  });

  // ========================== Render ==========================
  if (memoFlattenOptions.length === 0) {
    return /*#__PURE__*/react.createElement("div", {
      role: "listbox",
      id: "".concat(id, "_list"),
      className: "".concat(itemPrefixCls, "-empty"),
      onMouseDown: onListMouseDown
    }, notFoundContent);
  }
  var omitFieldNameList = Object.keys(fieldNames).map(function (key) {
    return fieldNames[key];
  });
  var getLabel = function getLabel(item) {
    return item.label;
  };
  function getItemAriaProps(item, index) {
    var group = item.group;
    return {
      role: group ? 'presentation' : 'option',
      id: "".concat(id, "_list_").concat(index)
    };
  }
  var renderItem = function renderItem(index) {
    var item = memoFlattenOptions[index];
    if (!item) return null;
    var itemData = item.data || {};
    var value = itemData.value;
    var group = item.group;
    var attrs = (0,pickAttrs/* default */.Z)(itemData, true);
    var mergedLabel = getLabel(item);
    return item ? /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
      "aria-label": typeof mergedLabel === 'string' && !group ? mergedLabel : null
    }, attrs, {
      key: index
    }, getItemAriaProps(item, index), {
      "aria-selected": isSelected(value)
    }), value) : null;
  };
  var a11yProps = {
    role: 'listbox',
    id: "".concat(id, "_list")
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, virtual && /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, a11yProps, {
    style: {
      height: 0,
      width: 0,
      overflow: 'hidden'
    }
  }), renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)), /*#__PURE__*/react.createElement(rc_virtual_list_es/* default */.Z, {
    itemKey: "key",
    ref: listRef,
    data: memoFlattenOptions,
    height: listHeight,
    itemHeight: listItemHeight,
    fullHeight: false,
    onMouseDown: onListMouseDown,
    onScroll: onPopupScroll,
    virtual: virtual,
    direction: direction,
    innerProps: virtual ? null : a11yProps
  }, function (item, itemIndex) {
    var _classNames;
    var group = item.group,
      groupOption = item.groupOption,
      data = item.data,
      label = item.label,
      value = item.value;
    var key = data.key;

    // Group
    if (group) {
      var _data$title;
      var groupTitle = (_data$title = data.title) !== null && _data$title !== void 0 ? _data$title : OptionList_isTitleType(label) ? label.toString() : undefined;
      return /*#__PURE__*/react.createElement("div", {
        className: classnames_default()(itemPrefixCls, "".concat(itemPrefixCls, "-group")),
        title: groupTitle
      }, label !== undefined ? label : key);
    }
    var disabled = data.disabled,
      title = data.title,
      children = data.children,
      style = data.style,
      className = data.className,
      otherProps = (0,objectWithoutProperties/* default */.Z)(data, OptionList_excluded);
    var passedProps = (0,omit/* default */.Z)(otherProps, omitFieldNameList);

    // Option
    var selected = isSelected(value);
    var optionPrefixCls = "".concat(itemPrefixCls, "-option");
    var optionClassName = classnames_default()(itemPrefixCls, optionPrefixCls, className, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(optionPrefixCls, "-grouped"), groupOption), (0,defineProperty/* default */.Z)(_classNames, "".concat(optionPrefixCls, "-active"), activeIndex === itemIndex && !disabled), (0,defineProperty/* default */.Z)(_classNames, "".concat(optionPrefixCls, "-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames, "".concat(optionPrefixCls, "-selected"), selected), _classNames));
    var mergedLabel = getLabel(item);
    var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === 'function' || selected;

    // https://github.com/ant-design/ant-design/issues/34145
    var content = typeof mergedLabel === 'number' ? mergedLabel : mergedLabel || value;
    // https://github.com/ant-design/ant-design/issues/26717
    var optionTitle = OptionList_isTitleType(content) ? content.toString() : undefined;
    if (title !== undefined) {
      optionTitle = title;
    }
    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, (0,pickAttrs/* default */.Z)(passedProps), !virtual ? getItemAriaProps(item, itemIndex) : {}, {
      "aria-selected": selected,
      className: optionClassName,
      title: optionTitle,
      onMouseMove: function onMouseMove() {
        if (activeIndex === itemIndex || disabled) {
          return;
        }
        setActive(itemIndex);
      },
      onClick: function onClick() {
        if (!disabled) {
          onSelectValue(value);
        }
      },
      style: style
    }), /*#__PURE__*/react.createElement("div", {
      className: "".concat(optionPrefixCls, "-content")
    }, content), /*#__PURE__*/react.isValidElement(menuItemSelectedIcon) || selected, iconVisible && /*#__PURE__*/react.createElement(es_TransBtn, {
      className: "".concat(itemPrefixCls, "-option-state"),
      customizeIcon: menuItemSelectedIcon,
      customizeIconProps: {
        isSelected: selected
      }
    }, selected ? '✓' : null));
  }));
};
var RefOptionList = /*#__PURE__*/react.forwardRef(OptionList);
RefOptionList.displayName = 'OptionList';
/* harmony default export */ var es_OptionList = (RefOptionList);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/utils/warningPropsUtil.js







function warningProps(props) {
  var mode = props.mode,
    options = props.options,
    children = props.children,
    backfill = props.backfill,
    allowClear = props.allowClear,
    placeholder = props.placeholder,
    getInputElement = props.getInputElement,
    showSearch = props.showSearch,
    onSearch = props.onSearch,
    defaultOpen = props.defaultOpen,
    autoFocus = props.autoFocus,
    labelInValue = props.labelInValue,
    value = props.value,
    inputValue = props.inputValue,
    optionLabelProp = props.optionLabelProp;
  var multiple = isMultiple(mode);
  var mergedShowSearch = showSearch !== undefined ? showSearch : multiple || mode === 'combobox';
  var mergedOptions = options || convertChildrenToData(children);

  // `tags` should not set option as disabled
  warning(mode !== 'tags' || mergedOptions.every(function (opt) {
    return !opt.disabled;
  }), 'Please avoid setting option to disabled in tags mode since user can always type text as tag.');

  // `combobox` & `tags` should option be `string` type
  if (mode === 'tags' || mode === 'combobox') {
    var hasNumberValue = mergedOptions.some(function (item) {
      if (item.options) {
        return item.options.some(function (opt) {
          return typeof ('value' in opt ? opt.value : opt.key) === 'number';
        });
      }
      return typeof ('value' in item ? item.value : item.key) === 'number';
    });
    warning(!hasNumberValue, '`value` of Option should not use number type when `mode` is `tags` or `combobox`.');
  }

  // `combobox` should not use `optionLabelProp`
  warning(mode !== 'combobox' || !optionLabelProp, '`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly.');

  // Only `combobox` support `backfill`
  warning(mode === 'combobox' || !backfill, '`backfill` only works with `combobox` mode.');

  // Only `combobox` support `getInputElement`
  warning(mode === 'combobox' || !getInputElement, '`getInputElement` only work with `combobox` mode.');

  // Customize `getInputElement` should not use `allowClear` & `placeholder`
  noteOnce(mode !== 'combobox' || !getInputElement || !allowClear || !placeholder, 'Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`.');

  // `onSearch` should use in `combobox` or `showSearch`
  if (onSearch && !mergedShowSearch && mode !== 'combobox' && mode !== 'tags') {
    warning(false, '`onSearch` should work with `showSearch` instead of use alone.');
  }
  noteOnce(!defaultOpen || autoFocus, '`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed.');
  if (value !== undefined && value !== null) {
    var values = toArray(value);
    warning(!labelInValue || values.every(function (val) {
      return _typeof(val) === 'object' && ('key' in val || 'value' in val);
    }), '`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`');
    warning(!multiple || Array.isArray(value), '`value` should be array when `mode` is `multiple` or `tags`');
  }

  // Syntactic sugar should use correct children type
  if (children) {
    var invalidateChildType = null;
    toNodeArray(children).some(function (node) {
      if (! /*#__PURE__*/React.isValidElement(node) || !node.type) {
        return false;
      }
      var _ref = node,
        type = _ref.type;
      if (type.isSelectOption) {
        return false;
      }
      if (type.isSelectOptGroup) {
        var allChildrenValid = toNodeArray(node.props.children).every(function (subNode) {
          if (! /*#__PURE__*/React.isValidElement(subNode) || !node.type || subNode.type.isSelectOption) {
            return true;
          }
          invalidateChildType = subNode.type;
          return false;
        });
        if (allChildrenValid) {
          return false;
        }
        return true;
      }
      invalidateChildType = type;
      return true;
    });
    if (invalidateChildType) {
      warning(false, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(invalidateChildType.displayName || invalidateChildType.name || invalidateChildType, "`."));
    }
    warning(inputValue === undefined, '`inputValue` is deprecated, please use `searchValue` instead.');
  }
}

// value in Select option should not be null
// note: OptGroup has options too
function warningNullOptions(options, fieldNames) {
  if (options) {
    var recursiveOptions = function recursiveOptions(optionsList) {
      var inGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      for (var i = 0; i < optionsList.length; i++) {
        var option = optionsList[i];
        if (option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.value] === null) {
          warning(false, '`value` in Select options should not be `null`.');
          return true;
        }
        if (!inGroup && Array.isArray(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.options]) && recursiveOptions(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.options], true)) {
          break;
        }
      }
    };
    recursiveOptions(options);
  }
}
/* harmony default export */ var warningPropsUtil = ((/* unused pure expression or super */ null && (warningProps)));
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/Select.js







var Select_excluded = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "direction", "listHeight", "listItemHeight", "value", "defaultValue", "labelInValue", "onChange"];
/**
 * To match accessibility requirement, we always provide an input in the component.
 * Other element will not set `tabIndex` to avoid `onBlur` sequence problem.
 * For focused select, we set `aria-live="polite"` to update the accessibility content.
 *
 * ref:
 * - keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role#Keyboard_interactions
 *
 * New api:
 * - listHeight
 * - listItemHeight
 * - component
 *
 * Remove deprecated api:
 * - multiple
 * - tags
 * - combobox
 * - firstActiveValue
 * - dropdownMenuStyle
 * - openClassName (Not list in api)
 *
 * Update:
 * - `backfill` only support `combobox` mode
 * - `combobox` mode not support `labelInValue` since it's meaningless
 * - `getInputElement` only support `combobox` mode
 * - `onChange` return OptionData instead of ReactNode
 * - `filterOption` `onChange` `onSelect` accept OptionData instead of ReactNode
 * - `combobox` mode trigger `onChange` will get `undefined` if no `value` match in Option
 * - `combobox` mode not support `optionLabelProp`
 */

















var OMIT_DOM_PROPS = ['inputValue'];
function isRawValue(value) {
  return !value || (0,esm_typeof/* default */.Z)(value) !== 'object';
}
var Select = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var id = props.id,
    mode = props.mode,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-select' : _props$prefixCls,
    backfill = props.backfill,
    fieldNames = props.fieldNames,
    inputValue = props.inputValue,
    searchValue = props.searchValue,
    onSearch = props.onSearch,
    _props$autoClearSearc = props.autoClearSearchValue,
    autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc,
    onSelect = props.onSelect,
    onDeselect = props.onDeselect,
    _props$dropdownMatchS = props.dropdownMatchSelectWidth,
    dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS,
    filterOption = props.filterOption,
    filterSort = props.filterSort,
    optionFilterProp = props.optionFilterProp,
    optionLabelProp = props.optionLabelProp,
    options = props.options,
    children = props.children,
    defaultActiveFirstOption = props.defaultActiveFirstOption,
    menuItemSelectedIcon = props.menuItemSelectedIcon,
    virtual = props.virtual,
    direction = props.direction,
    _props$listHeight = props.listHeight,
    listHeight = _props$listHeight === void 0 ? 200 : _props$listHeight,
    _props$listItemHeight = props.listItemHeight,
    listItemHeight = _props$listItemHeight === void 0 ? 20 : _props$listItemHeight,
    value = props.value,
    defaultValue = props.defaultValue,
    labelInValue = props.labelInValue,
    onChange = props.onChange,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, Select_excluded);
  var mergedId = useId(id);
  var multiple = BaseSelect_isMultiple(mode);
  var childrenAsData = !!(!options && children);
  var mergedFilterOption = react.useMemo(function () {
    if (filterOption === undefined && mode === 'combobox') {
      return false;
    }
    return filterOption;
  }, [filterOption, mode]);

  // ========================= FieldNames =========================
  var mergedFieldNames = react.useMemo(function () {
    return fillFieldNames(fieldNames, childrenAsData);
  }, /* eslint-disable react-hooks/exhaustive-deps */
  [
  // We stringify fieldNames to avoid unnecessary re-renders.
  JSON.stringify(fieldNames), childrenAsData]
  /* eslint-enable react-hooks/exhaustive-deps */);

  // =========================== Search ===========================
  var _useMergedState = (0,useMergedState/* default */.Z)('', {
      value: searchValue !== undefined ? searchValue : inputValue,
      postState: function postState(search) {
        return search || '';
      }
    }),
    _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
    mergedSearchValue = _useMergedState2[0],
    setSearchValue = _useMergedState2[1];

  // =========================== Option ===========================
  var parsedOptions = useOptions(options, children, mergedFieldNames, optionFilterProp, optionLabelProp);
  var valueOptions = parsedOptions.valueOptions,
    labelOptions = parsedOptions.labelOptions,
    mergedOptions = parsedOptions.options;

  // ========================= Wrap Value =========================
  var convert2LabelValues = react.useCallback(function (draftValues) {
    // Convert to array
    var valueList = commonUtil_toArray(draftValues);

    // Convert to labelInValue type
    return valueList.map(function (val) {
      var rawValue;
      var rawLabel;
      var rawKey;
      var rawDisabled;
      var rawTitle;

      // Fill label & value
      if (isRawValue(val)) {
        rawValue = val;
      } else {
        var _val$value;
        rawKey = val.key;
        rawLabel = val.label;
        rawValue = (_val$value = val.value) !== null && _val$value !== void 0 ? _val$value : rawKey;
      }
      var option = valueOptions.get(rawValue);
      if (option) {
        var _option$key;
        // Fill missing props
        if (rawLabel === undefined) rawLabel = option === null || option === void 0 ? void 0 : option[optionLabelProp || mergedFieldNames.label];
        if (rawKey === undefined) rawKey = (_option$key = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key !== void 0 ? _option$key : rawValue;
        rawDisabled = option === null || option === void 0 ? void 0 : option.disabled;
        rawTitle = option === null || option === void 0 ? void 0 : option.title;

        // Warning if label not same as provided
        if (false) { var optionLabel; }
      }
      return {
        label: rawLabel,
        value: rawValue,
        key: rawKey,
        disabled: rawDisabled,
        title: rawTitle
      };
    });
  }, [mergedFieldNames, optionLabelProp, valueOptions]);

  // =========================== Values ===========================
  var _useMergedState3 = (0,useMergedState/* default */.Z)(defaultValue, {
      value: value
    }),
    _useMergedState4 = (0,slicedToArray/* default */.Z)(_useMergedState3, 2),
    internalValue = _useMergedState4[0],
    setInternalValue = _useMergedState4[1];

  // Merged value with LabelValueType
  var rawLabeledValues = react.useMemo(function () {
    var _values$;
    var values = convert2LabelValues(internalValue);

    // combobox no need save value when it's no value
    if (mode === 'combobox' && !((_values$ = values[0]) !== null && _values$ !== void 0 && _values$.value)) {
      return [];
    }
    return values;
  }, [internalValue, convert2LabelValues, mode]);

  // Fill label with cache to avoid option remove
  var _useCache = useCache(rawLabeledValues, valueOptions),
    _useCache2 = (0,slicedToArray/* default */.Z)(_useCache, 2),
    mergedValues = _useCache2[0],
    getMixedOption = _useCache2[1];
  var displayValues = react.useMemo(function () {
    // `null` need show as placeholder instead
    // https://github.com/ant-design/ant-design/issues/25057
    if (!mode && mergedValues.length === 1) {
      var firstValue = mergedValues[0];
      if (firstValue.value === null && (firstValue.label === null || firstValue.label === undefined)) {
        return [];
      }
    }
    return mergedValues.map(function (item) {
      var _item$label;
      return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, {
        label: (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : item.value
      });
    });
  }, [mode, mergedValues]);

  /** Convert `displayValues` to raw value type set */
  var rawValues = react.useMemo(function () {
    return new Set(mergedValues.map(function (val) {
      return val.value;
    }));
  }, [mergedValues]);
  react.useEffect(function () {
    if (mode === 'combobox') {
      var _mergedValues$;
      var strValue = (_mergedValues$ = mergedValues[0]) === null || _mergedValues$ === void 0 ? void 0 : _mergedValues$.value;
      setSearchValue(hasValue(strValue) ? String(strValue) : '');
    }
  }, [mergedValues]);

  // ======================= Display Option =======================
  // Create a placeholder item if not exist in `options`
  var createTagOption = useRefFunc(function (val, label) {
    var _ref;
    var mergedLabel = label !== null && label !== void 0 ? label : val;
    return _ref = {}, (0,defineProperty/* default */.Z)(_ref, mergedFieldNames.value, val), (0,defineProperty/* default */.Z)(_ref, mergedFieldNames.label, mergedLabel), _ref;
  });

  // Fill tag as option if mode is `tags`
  var filledTagOptions = react.useMemo(function () {
    if (mode !== 'tags') {
      return mergedOptions;
    }

    // >>> Tag mode
    var cloneOptions = (0,toConsumableArray/* default */.Z)(mergedOptions);

    // Check if value exist in options (include new patch item)
    var existOptions = function existOptions(val) {
      return valueOptions.has(val);
    };

    // Fill current value as option
    (0,toConsumableArray/* default */.Z)(mergedValues).sort(function (a, b) {
      return a.value < b.value ? -1 : 1;
    }).forEach(function (item) {
      var val = item.value;
      if (!existOptions(val)) {
        cloneOptions.push(createTagOption(val, item.label));
      }
    });
    return cloneOptions;
  }, [createTagOption, mergedOptions, valueOptions, mergedValues, mode]);
  var filteredOptions = useFilterOptions(filledTagOptions, mergedFieldNames, mergedSearchValue, mergedFilterOption, optionFilterProp);

  // Fill options with search value if needed
  var filledSearchOptions = react.useMemo(function () {
    if (mode !== 'tags' || !mergedSearchValue || filteredOptions.some(function (item) {
      return item[optionFilterProp || 'value'] === mergedSearchValue;
    })) {
      return filteredOptions;
    }

    // Fill search value as option
    return [createTagOption(mergedSearchValue)].concat((0,toConsumableArray/* default */.Z)(filteredOptions));
  }, [createTagOption, optionFilterProp, mode, filteredOptions, mergedSearchValue]);
  var orderedFilteredOptions = react.useMemo(function () {
    if (!filterSort) {
      return filledSearchOptions;
    }
    return (0,toConsumableArray/* default */.Z)(filledSearchOptions).sort(function (a, b) {
      return filterSort(a, b);
    });
  }, [filledSearchOptions, filterSort]);
  var displayOptions = react.useMemo(function () {
    return flattenOptions(orderedFilteredOptions, {
      fieldNames: mergedFieldNames,
      childrenAsData: childrenAsData
    });
  }, [orderedFilteredOptions, mergedFieldNames, childrenAsData]);

  // =========================== Change ===========================
  var triggerChange = function triggerChange(values) {
    var labeledValues = convert2LabelValues(values);
    setInternalValue(labeledValues);
    if (onChange && (
    // Trigger event only when value changed
    labeledValues.length !== mergedValues.length || labeledValues.some(function (newVal, index) {
      var _mergedValues$index;
      return ((_mergedValues$index = mergedValues[index]) === null || _mergedValues$index === void 0 ? void 0 : _mergedValues$index.value) !== (newVal === null || newVal === void 0 ? void 0 : newVal.value);
    }))) {
      var returnValues = labelInValue ? labeledValues : labeledValues.map(function (v) {
        return v.value;
      });
      var returnOptions = labeledValues.map(function (v) {
        return injectPropsWithOption(getMixedOption(v.value));
      });
      onChange(
      // Value
      multiple ? returnValues : returnValues[0],
      // Option
      multiple ? returnOptions : returnOptions[0]);
    }
  };

  // ======================= Accessibility ========================
  var _React$useState = react.useState(null),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    activeValue = _React$useState2[0],
    setActiveValue = _React$useState2[1];
  var _React$useState3 = react.useState(0),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    accessibilityIndex = _React$useState4[0],
    setAccessibilityIndex = _React$useState4[1];
  var mergedDefaultActiveFirstOption = defaultActiveFirstOption !== undefined ? defaultActiveFirstOption : mode !== 'combobox';
  var onActiveValue = react.useCallback(function (active, index) {
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$source = _ref2.source,
      source = _ref2$source === void 0 ? 'keyboard' : _ref2$source;
    setAccessibilityIndex(index);
    if (backfill && mode === 'combobox' && active !== null && source === 'keyboard') {
      setActiveValue(String(active));
    }
  }, [backfill, mode]);

  // ========================= OptionList =========================
  var triggerSelect = function triggerSelect(val, selected, type) {
    var getSelectEnt = function getSelectEnt() {
      var _option$key2;
      var option = getMixedOption(val);
      return [labelInValue ? {
        label: option === null || option === void 0 ? void 0 : option[mergedFieldNames.label],
        value: val,
        key: (_option$key2 = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key2 !== void 0 ? _option$key2 : val
      } : val, injectPropsWithOption(option)];
    };
    if (selected && onSelect) {
      var _getSelectEnt = getSelectEnt(),
        _getSelectEnt2 = (0,slicedToArray/* default */.Z)(_getSelectEnt, 2),
        wrappedValue = _getSelectEnt2[0],
        _option = _getSelectEnt2[1];
      onSelect(wrappedValue, _option);
    } else if (!selected && onDeselect && type !== 'clear') {
      var _getSelectEnt3 = getSelectEnt(),
        _getSelectEnt4 = (0,slicedToArray/* default */.Z)(_getSelectEnt3, 2),
        _wrappedValue = _getSelectEnt4[0],
        _option2 = _getSelectEnt4[1];
      onDeselect(_wrappedValue, _option2);
    }
  };

  // Used for OptionList selection
  var onInternalSelect = useRefFunc(function (val, info) {
    var cloneValues;

    // Single mode always trigger select only with option list
    var mergedSelect = multiple ? info.selected : true;
    if (mergedSelect) {
      cloneValues = multiple ? [].concat((0,toConsumableArray/* default */.Z)(mergedValues), [val]) : [val];
    } else {
      cloneValues = mergedValues.filter(function (v) {
        return v.value !== val;
      });
    }
    triggerChange(cloneValues);
    triggerSelect(val, mergedSelect);

    // Clean search value if single or configured
    if (mode === 'combobox') {
      // setSearchValue(String(val));
      setActiveValue('');
    } else if (!BaseSelect_isMultiple || autoClearSearchValue) {
      setSearchValue('');
      setActiveValue('');
    }
  });

  // ======================= Display Change =======================
  // BaseSelect display values change
  var onDisplayValuesChange = function onDisplayValuesChange(nextValues, info) {
    triggerChange(nextValues);
    var type = info.type,
      values = info.values;
    if (type === 'remove' || type === 'clear') {
      values.forEach(function (item) {
        triggerSelect(item.value, false, type);
      });
    }
  };

  // =========================== Search ===========================
  var onInternalSearch = function onInternalSearch(searchText, info) {
    setSearchValue(searchText);
    setActiveValue(null);

    // [Submit] Tag mode should flush input
    if (info.source === 'submit') {
      var formatted = (searchText || '').trim();
      // prevent empty tags from appearing when you click the Enter button
      if (formatted) {
        var newRawValues = Array.from(new Set([].concat((0,toConsumableArray/* default */.Z)(rawValues), [formatted])));
        triggerChange(newRawValues);
        triggerSelect(formatted, true);
        setSearchValue('');
      }
      return;
    }
    if (info.source !== 'blur') {
      if (mode === 'combobox') {
        triggerChange(searchText);
      }
      onSearch === null || onSearch === void 0 ? void 0 : onSearch(searchText);
    }
  };
  var onInternalSearchSplit = function onInternalSearchSplit(words) {
    var patchValues = words;
    if (mode !== 'tags') {
      patchValues = words.map(function (word) {
        var opt = labelOptions.get(word);
        return opt === null || opt === void 0 ? void 0 : opt.value;
      }).filter(function (val) {
        return val !== undefined;
      });
    }
    var newRawValues = Array.from(new Set([].concat((0,toConsumableArray/* default */.Z)(rawValues), (0,toConsumableArray/* default */.Z)(patchValues))));
    triggerChange(newRawValues);
    newRawValues.forEach(function (newRawValue) {
      triggerSelect(newRawValue, true);
    });
  };

  // ========================== Context ===========================
  var selectContext = react.useMemo(function () {
    var realVirtual = virtual !== false && dropdownMatchSelectWidth !== false;
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, parsedOptions), {}, {
      flattenOptions: displayOptions,
      onActiveValue: onActiveValue,
      defaultActiveFirstOption: mergedDefaultActiveFirstOption,
      onSelect: onInternalSelect,
      menuItemSelectedIcon: menuItemSelectedIcon,
      rawValues: rawValues,
      fieldNames: mergedFieldNames,
      virtual: realVirtual,
      direction: direction,
      listHeight: listHeight,
      listItemHeight: listItemHeight,
      childrenAsData: childrenAsData
    });
  }, [parsedOptions, displayOptions, onActiveValue, mergedDefaultActiveFirstOption, onInternalSelect, menuItemSelectedIcon, rawValues, mergedFieldNames, virtual, dropdownMatchSelectWidth, listHeight, listItemHeight, childrenAsData]);

  // ========================== Warning ===========================
  if (false) {}

  // ==============================================================
  // ==                          Render                          ==
  // ==============================================================
  return /*#__PURE__*/react.createElement(es_SelectContext.Provider, {
    value: selectContext
  }, /*#__PURE__*/react.createElement(es_BaseSelect, (0,esm_extends/* default */.Z)({}, restProps, {
    // >>> MISC
    id: mergedId,
    prefixCls: prefixCls,
    ref: ref,
    omitDomProps: OMIT_DOM_PROPS,
    mode: mode
    // >>> Values
    ,
    displayValues: displayValues,
    onDisplayValuesChange: onDisplayValuesChange
    // >>> Trigger
    ,
    direction: direction
    // >>> Search
    ,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch,
    autoClearSearchValue: autoClearSearchValue,
    onSearchSplit: onInternalSearchSplit,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth
    // >>> OptionList
    ,
    OptionList: es_OptionList,
    emptyOptions: !displayOptions.length
    // >>> Accessibility
    ,
    activeValue: activeValue,
    activeDescendantId: "".concat(mergedId, "_list_").concat(accessibilityIndex)
  })));
});
if (false) {}
var TypedSelect = Select;
TypedSelect.Option = es_Option;
TypedSelect.OptGroup = es_OptGroup;
/* harmony default export */ var es_Select = (TypedSelect);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.5.2/node_modules/rc-select/es/index.js






/* harmony default export */ var rc_select_es = (es_Select);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/_util/PurePanel.js
var PurePanel = __webpack_require__(38739);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(71300);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/_util/statusUtils.js
var statusUtils = __webpack_require__(32724);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(1780);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(1871);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/config-provider/defaultRenderEmpty.js
var defaultRenderEmpty = __webpack_require__(67553);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/config-provider/hooks/useSize.js
var useSize = __webpack_require__(4891);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/form/context.js
var form_context = __webpack_require__(50310);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/space/Compact.js
var Compact = __webpack_require__(20061);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/style/index.js
var style = __webpack_require__(2508);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/style/compact-item.js
var compact_item = __webpack_require__(7773);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(43956);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(4533);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/style/motion/slide.js
var slide = __webpack_require__(85348);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/style/motion/move.js
var move = __webpack_require__(38539);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/select/style/dropdown.js


const genItemStyle = token => {
  const {
    controlPaddingHorizontal
  } = token;
  return {
    position: 'relative',
    display: 'block',
    minHeight: token.controlHeight,
    padding: `${(token.controlHeight - token.fontSize * token.lineHeight) / 2}px ${controlPaddingHorizontal}px`,
    color: token.colorText,
    fontWeight: 'normal',
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    boxSizing: 'border-box'
  };
};
const genSingleStyle = token => {
  const {
    antCls,
    componentCls
  } = token;
  const selectItemCls = `${componentCls}-item`;
  return [{
    [`${componentCls}-dropdown`]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      position: 'absolute',
      top: -9999,
      zIndex: token.zIndexPopup,
      boxSizing: 'border-box',
      padding: token.paddingXXS,
      overflow: 'hidden',
      fontSize: token.fontSize,
      // Fix select render lag of long text in chrome
      // https://github.com/ant-design/ant-design/issues/11456
      // https://github.com/ant-design/ant-design/issues/11843
      fontVariant: 'initial',
      backgroundColor: token.colorBgElevated,
      borderRadius: token.borderRadiusLG,
      outline: 'none',
      boxShadow: token.boxShadowSecondary,
      [`
            &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-dropdown-placement-bottomLeft,
            &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-dropdown-placement-bottomLeft
          `]: {
        animationName: slide/* slideUpIn */.fJ
      },
      [`
            &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-dropdown-placement-topLeft,
            &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-dropdown-placement-topLeft
          `]: {
        animationName: slide/* slideDownIn */.Qt
      },
      [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-dropdown-placement-bottomLeft`]: {
        animationName: slide/* slideUpOut */.Uw
      },
      [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-dropdown-placement-topLeft`]: {
        animationName: slide/* slideDownOut */.ly
      },
      '&-hidden': {
        display: 'none'
      },
      [`${selectItemCls}`]: Object.assign(Object.assign({}, genItemStyle(token)), {
        cursor: 'pointer',
        transition: `background ${token.motionDurationSlow} ease`,
        borderRadius: token.borderRadiusSM,
        // =========== Group ============
        '&-group': {
          color: token.colorTextDescription,
          fontSize: token.fontSizeSM,
          cursor: 'default'
        },
        // =========== Option ===========
        '&-option': {
          display: 'flex',
          '&-content': Object.assign({
            flex: 'auto'
          }, style/* textEllipsis */.vS),
          '&-state': {
            flex: 'none',
            display: 'flex',
            alignItems: 'center'
          },
          [`&-active:not(${selectItemCls}-option-disabled)`]: {
            backgroundColor: token.controlItemBgHover
          },
          [`&-selected:not(${selectItemCls}-option-disabled)`]: {
            color: token.colorText,
            fontWeight: token.fontWeightStrong,
            backgroundColor: token.controlItemBgActive,
            [`${selectItemCls}-option-state`]: {
              color: token.colorPrimary
            }
          },
          '&-disabled': {
            [`&${selectItemCls}-option-selected`]: {
              backgroundColor: token.colorBgContainerDisabled
            },
            color: token.colorTextDisabled,
            cursor: 'not-allowed'
          },
          '&-grouped': {
            paddingInlineStart: token.controlPaddingHorizontal * 2
          }
        }
      }),
      // =========================== RTL ===========================
      '&-rtl': {
        direction: 'rtl'
      }
    })
  },
  // Follow code may reuse in other components
  (0,slide/* initSlideMotion */.oN)(token, 'slide-up'), (0,slide/* initSlideMotion */.oN)(token, 'slide-down'), (0,move/* initMoveMotion */.Fm)(token, 'move-up'), (0,move/* initMoveMotion */.Fm)(token, 'move-down')];
};
/* harmony default export */ var dropdown = (genSingleStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/select/style/multiple.js


const FIXED_ITEM_MARGIN = 2;
const getSelectItemStyle = _ref => {
  let {
    controlHeightSM,
    controlHeight,
    lineWidth: borderWidth
  } = _ref;
  const selectItemDist = (controlHeight - controlHeightSM) / 2 - borderWidth;
  const selectItemMargin = Math.ceil(selectItemDist / 2);
  return [selectItemDist, selectItemMargin];
};
function genSizeStyle(token, suffix) {
  const {
    componentCls,
    iconCls
  } = token;
  const selectOverflowPrefixCls = `${componentCls}-selection-overflow`;
  const selectItemHeight = token.controlHeightSM;
  const [selectItemDist] = getSelectItemStyle(token);
  const suffixCls = suffix ? `${componentCls}-${suffix}` : '';
  return {
    [`${componentCls}-multiple${suffixCls}`]: {
      fontSize: token.fontSize,
      /**
       * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
       * may update to redesign with its align logic.
       */
      // =========================== Overflow ===========================
      [selectOverflowPrefixCls]: {
        position: 'relative',
        display: 'flex',
        flex: 'auto',
        flexWrap: 'wrap',
        maxWidth: '100%',
        '&-item': {
          flex: 'none',
          alignSelf: 'center',
          maxWidth: '100%',
          display: 'inline-flex'
        }
      },
      // ========================= Selector =========================
      [`${componentCls}-selector`]: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        // Multiple is little different that horizontal is follow the vertical
        padding: `${selectItemDist - FIXED_ITEM_MARGIN}px ${FIXED_ITEM_MARGIN * 2}px`,
        borderRadius: token.borderRadius,
        [`${componentCls}-show-search&`]: {
          cursor: 'text'
        },
        [`${componentCls}-disabled&`]: {
          background: token.colorBgContainerDisabled,
          cursor: 'not-allowed'
        },
        '&:after': {
          display: 'inline-block',
          width: 0,
          margin: `${FIXED_ITEM_MARGIN}px 0`,
          lineHeight: `${selectItemHeight}px`,
          visibility: 'hidden',
          content: '"\\a0"'
        }
      },
      [`
        &${componentCls}-show-arrow ${componentCls}-selector,
        &${componentCls}-allow-clear ${componentCls}-selector
      `]: {
        paddingInlineEnd: token.fontSizeIcon + token.controlPaddingHorizontal
      },
      // ======================== Selections ========================
      [`${componentCls}-selection-item`]: {
        position: 'relative',
        display: 'flex',
        flex: 'none',
        boxSizing: 'border-box',
        maxWidth: '100%',
        height: selectItemHeight,
        marginTop: FIXED_ITEM_MARGIN,
        marginBottom: FIXED_ITEM_MARGIN,
        lineHeight: `${selectItemHeight - token.lineWidth * 2}px`,
        background: token.colorFillSecondary,
        borderRadius: token.borderRadiusSM,
        cursor: 'default',
        transition: `font-size ${token.motionDurationSlow}, line-height ${token.motionDurationSlow}, height ${token.motionDurationSlow}`,
        userSelect: 'none',
        marginInlineEnd: FIXED_ITEM_MARGIN * 2,
        paddingInlineStart: token.paddingXS,
        paddingInlineEnd: token.paddingXS / 2,
        [`${componentCls}-disabled&`]: {
          color: token.colorTextDisabled,
          cursor: 'not-allowed'
        },
        // It's ok not to do this, but 24px makes bottom narrow in view should adjust
        '&-content': {
          display: 'inline-block',
          marginInlineEnd: token.paddingXS / 2,
          overflow: 'hidden',
          whiteSpace: 'pre',
          textOverflow: 'ellipsis'
        },
        '&-remove': Object.assign(Object.assign({}, (0,style/* resetIcon */.Ro)()), {
          display: 'inline-flex',
          alignItems: 'center',
          color: token.colorIcon,
          fontWeight: 'bold',
          fontSize: 10,
          lineHeight: 'inherit',
          cursor: 'pointer',
          [`> ${iconCls}`]: {
            verticalAlign: '-0.2em'
          },
          '&:hover': {
            color: token.colorIconHover
          }
        })
      },
      // ========================== Input ==========================
      [`${selectOverflowPrefixCls}-item + ${selectOverflowPrefixCls}-item`]: {
        [`${componentCls}-selection-search`]: {
          marginInlineStart: 0
        }
      },
      [`${componentCls}-selection-search`]: {
        display: 'inline-flex',
        position: 'relative',
        maxWidth: '100%',
        marginInlineStart: token.inputPaddingHorizontalBase - selectItemDist,
        [`
          &-input,
          &-mirror
        `]: {
          height: selectItemHeight,
          fontFamily: token.fontFamily,
          lineHeight: `${selectItemHeight}px`,
          transition: `all ${token.motionDurationSlow}`
        },
        '&-input': {
          width: '100%',
          minWidth: 4.1 // fix search cursor missing
        },

        '&-mirror': {
          position: 'absolute',
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: 'auto',
          zIndex: 999,
          whiteSpace: 'pre',
          visibility: 'hidden'
        }
      },
      // ======================= Placeholder =======================
      [`${componentCls}-selection-placeholder `]: {
        position: 'absolute',
        top: '50%',
        insetInlineStart: token.inputPaddingHorizontalBase,
        insetInlineEnd: token.inputPaddingHorizontalBase,
        transform: 'translateY(-50%)',
        transition: `all ${token.motionDurationSlow}`
      }
    }
  };
}
const genMultipleStyle = token => {
  const {
    componentCls
  } = token;
  const smallToken = (0,statistic/* merge */.TS)(token, {
    controlHeight: token.controlHeightSM,
    controlHeightSM: token.controlHeightXS,
    borderRadius: token.borderRadiusSM,
    borderRadiusSM: token.borderRadiusXS
  });
  const largeToken = (0,statistic/* merge */.TS)(token, {
    fontSize: token.fontSizeLG,
    controlHeight: token.controlHeightLG,
    controlHeightSM: token.controlHeight,
    borderRadius: token.borderRadiusLG,
    borderRadiusSM: token.borderRadius
  });
  const [, smSelectItemMargin] = getSelectItemStyle(token);
  return [genSizeStyle(token),
  // ======================== Small ========================
  genSizeStyle(smallToken, 'sm'),
  // Padding
  {
    [`${componentCls}-multiple${componentCls}-sm`]: {
      [`${componentCls}-selection-placeholder`]: {
        insetInline: token.controlPaddingHorizontalSM - token.lineWidth
      },
      // https://github.com/ant-design/ant-design/issues/29559
      [`${componentCls}-selection-search`]: {
        marginInlineStart: smSelectItemMargin
      }
    }
  },
  // ======================== Large ========================
  genSizeStyle(largeToken, 'lg')];
};
/* harmony default export */ var multiple = (genMultipleStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/select/style/single.js


function single_genSizeStyle(token, suffix) {
  const {
    componentCls,
    inputPaddingHorizontalBase,
    borderRadius
  } = token;
  const selectHeightWithoutBorder = token.controlHeight - token.lineWidth * 2;
  const selectionItemPadding = Math.ceil(token.fontSize * 1.25);
  const suffixCls = suffix ? `${componentCls}-${suffix}` : '';
  return {
    [`${componentCls}-single${suffixCls}`]: {
      fontSize: token.fontSize,
      // ========================= Selector =========================
      [`${componentCls}-selector`]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
        display: 'flex',
        borderRadius,
        [`${componentCls}-selection-search`]: {
          position: 'absolute',
          top: 0,
          insetInlineStart: inputPaddingHorizontalBase,
          insetInlineEnd: inputPaddingHorizontalBase,
          bottom: 0,
          '&-input': {
            width: '100%'
          }
        },
        [`
          ${componentCls}-selection-item,
          ${componentCls}-selection-placeholder
        `]: {
          padding: 0,
          lineHeight: `${selectHeightWithoutBorder}px`,
          transition: `all ${token.motionDurationSlow}, visibility 0s`,
          // Firefox inline-block position calculation is not same as Chrome & Safari. Patch this:
          '@supports (-moz-appearance: meterbar)': {
            lineHeight: `${selectHeightWithoutBorder}px`
          }
        },
        [`${componentCls}-selection-item`]: {
          position: 'relative',
          userSelect: 'none'
        },
        [`${componentCls}-selection-placeholder`]: {
          transition: 'none',
          pointerEvents: 'none'
        },
        // For common baseline align
        [['&:after', /* For '' value baseline align */
        `${componentCls}-selection-item:after`, /* For undefined value baseline align */
        `${componentCls}-selection-placeholder:after`].join(',')]: {
          display: 'inline-block',
          width: 0,
          visibility: 'hidden',
          content: '"\\a0"'
        }
      }),
      [`
        &${componentCls}-show-arrow ${componentCls}-selection-item,
        &${componentCls}-show-arrow ${componentCls}-selection-placeholder
      `]: {
        paddingInlineEnd: selectionItemPadding
      },
      // Opacity selection if open
      [`&${componentCls}-open ${componentCls}-selection-item`]: {
        color: token.colorTextPlaceholder
      },
      // ========================== Input ==========================
      // We only change the style of non-customize input which is only support by `combobox` mode.
      // Not customize
      [`&:not(${componentCls}-customize-input)`]: {
        [`${componentCls}-selector`]: {
          width: '100%',
          height: token.controlHeight,
          padding: `0 ${inputPaddingHorizontalBase}px`,
          [`${componentCls}-selection-search-input`]: {
            height: selectHeightWithoutBorder
          },
          '&:after': {
            lineHeight: `${selectHeightWithoutBorder}px`
          }
        }
      },
      [`&${componentCls}-customize-input`]: {
        [`${componentCls}-selector`]: {
          '&:after': {
            display: 'none'
          },
          [`${componentCls}-selection-search`]: {
            position: 'static',
            width: '100%'
          },
          [`${componentCls}-selection-placeholder`]: {
            position: 'absolute',
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${inputPaddingHorizontalBase}px`,
            '&:after': {
              display: 'none'
            }
          }
        }
      }
    }
  };
}
function single_genSingleStyle(token) {
  const {
    componentCls
  } = token;
  const inputPaddingHorizontalSM = token.controlPaddingHorizontalSM - token.lineWidth;
  return [single_genSizeStyle(token),
  // ======================== Small ========================
  // Shared
  single_genSizeStyle((0,statistic/* merge */.TS)(token, {
    controlHeight: token.controlHeightSM,
    borderRadius: token.borderRadiusSM
  }), 'sm'),
  // padding
  {
    [`${componentCls}-single${componentCls}-sm`]: {
      [`&:not(${componentCls}-customize-input)`]: {
        [`${componentCls}-selection-search`]: {
          insetInlineStart: inputPaddingHorizontalSM,
          insetInlineEnd: inputPaddingHorizontalSM
        },
        [`${componentCls}-selector`]: {
          padding: `0 ${inputPaddingHorizontalSM}px`
        },
        // With arrow should provides `padding-right` to show the arrow
        [`&${componentCls}-show-arrow ${componentCls}-selection-search`]: {
          insetInlineEnd: inputPaddingHorizontalSM + token.fontSize * 1.5
        },
        [`
            &${componentCls}-show-arrow ${componentCls}-selection-item,
            &${componentCls}-show-arrow ${componentCls}-selection-placeholder
          `]: {
          paddingInlineEnd: token.fontSize * 1.5
        }
      }
    }
  },
  // ======================== Large ========================
  // Shared
  single_genSizeStyle((0,statistic/* merge */.TS)(token, {
    controlHeight: token.controlHeightLG,
    fontSize: token.fontSizeLG,
    borderRadius: token.borderRadiusLG
  }), 'lg')];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/select/style/index.js






// ============================= Selector =============================
const genSelectorStyle = token => {
  const {
    componentCls
  } = token;
  return {
    position: 'relative',
    backgroundColor: token.colorBgContainer,
    border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
    transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
    input: {
      cursor: 'pointer'
    },
    [`${componentCls}-show-search&`]: {
      cursor: 'text',
      input: {
        cursor: 'auto',
        color: 'inherit'
      }
    },
    [`${componentCls}-disabled&`]: {
      color: token.colorTextDisabled,
      background: token.colorBgContainerDisabled,
      cursor: 'not-allowed',
      [`${componentCls}-multiple&`]: {
        background: token.colorBgContainerDisabled
      },
      input: {
        cursor: 'not-allowed'
      }
    }
  };
};
// ============================== Status ==============================
const genStatusStyle = function (rootSelectCls, token) {
  let overwriteDefaultBorder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const {
    componentCls,
    borderHoverColor,
    outlineColor,
    antCls
  } = token;
  const overwriteStyle = overwriteDefaultBorder ? {
    [`${componentCls}-selector`]: {
      borderColor: borderHoverColor
    }
  } : {};
  return {
    [rootSelectCls]: {
      [`&:not(${componentCls}-disabled):not(${componentCls}-customize-input):not(${antCls}-pagination-size-changer)`]: Object.assign(Object.assign({}, overwriteStyle), {
        [`${componentCls}-focused& ${componentCls}-selector`]: {
          borderColor: borderHoverColor,
          boxShadow: `0 0 0 ${token.controlOutlineWidth}px ${outlineColor}`,
          outline: 0
        },
        [`&:hover ${componentCls}-selector`]: {
          borderColor: borderHoverColor
        }
      })
    }
  };
};
// ============================== Styles ==============================
// /* Reset search input style */
const getSearchInputWithoutBorderStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-selection-search-input`]: {
      margin: 0,
      padding: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      appearance: 'none',
      '&::-webkit-search-cancel-button': {
        display: 'none',
        '-webkit-appearance': 'none'
      }
    }
  };
};
// =============================== Base ===============================
const genBaseStyle = token => {
  const {
    componentCls,
    inputPaddingHorizontalBase,
    iconCls
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      position: 'relative',
      display: 'inline-block',
      cursor: 'pointer',
      [`&:not(${componentCls}-customize-input) ${componentCls}-selector`]: Object.assign(Object.assign({}, genSelectorStyle(token)), getSearchInputWithoutBorderStyle(token)),
      // [`&:not(&-disabled):hover ${selectCls}-selector`]: {
      //   ...genHoverStyle(token),
      // },
      // ======================== Selection ========================
      [`${componentCls}-selection-item`]: Object.assign({
        flex: 1,
        fontWeight: 'normal'
      }, style/* textEllipsis */.vS),
      // ======================= Placeholder =======================
      [`${componentCls}-selection-placeholder`]: Object.assign(Object.assign({}, style/* textEllipsis */.vS), {
        flex: 1,
        color: token.colorTextPlaceholder,
        pointerEvents: 'none'
      }),
      // ========================== Arrow ==========================
      [`${componentCls}-arrow`]: Object.assign(Object.assign({}, (0,style/* resetIcon */.Ro)()), {
        position: 'absolute',
        top: '50%',
        insetInlineStart: 'auto',
        insetInlineEnd: inputPaddingHorizontalBase,
        height: token.fontSizeIcon,
        marginTop: -token.fontSizeIcon / 2,
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        lineHeight: 1,
        textAlign: 'center',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        [iconCls]: {
          verticalAlign: 'top',
          transition: `transform ${token.motionDurationSlow}`,
          '> svg': {
            verticalAlign: 'top'
          },
          [`&:not(${componentCls}-suffix)`]: {
            pointerEvents: 'auto'
          }
        },
        [`${componentCls}-disabled &`]: {
          cursor: 'not-allowed'
        },
        '> *:not(:last-child)': {
          marginInlineEnd: 8 // FIXME: magic
        }
      }),

      // ========================== Clear ==========================
      [`${componentCls}-clear`]: {
        position: 'absolute',
        top: '50%',
        insetInlineStart: 'auto',
        insetInlineEnd: inputPaddingHorizontalBase,
        zIndex: 1,
        display: 'inline-block',
        width: token.fontSizeIcon,
        height: token.fontSizeIcon,
        marginTop: -token.fontSizeIcon / 2,
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        fontStyle: 'normal',
        lineHeight: 1,
        textAlign: 'center',
        textTransform: 'none',
        background: token.colorBgContainer,
        cursor: 'pointer',
        opacity: 0,
        transition: `color ${token.motionDurationMid} ease, opacity ${token.motionDurationSlow} ease`,
        textRendering: 'auto',
        '&:before': {
          display: 'block'
        },
        '&:hover': {
          color: token.colorTextTertiary
        }
      },
      '&:hover': {
        [`${componentCls}-clear`]: {
          opacity: 1
        }
      }
    }),
    // ========================= Feedback ==========================
    [`${componentCls}-has-feedback`]: {
      [`${componentCls}-clear`]: {
        insetInlineEnd: inputPaddingHorizontalBase + token.fontSize + token.paddingXXS
      }
    }
  };
};
// ============================== Styles ==============================
const genSelectStyle = token => {
  const {
    componentCls
  } = token;
  return [{
    [componentCls]: {
      // ==================== BorderLess ====================
      [`&-borderless ${componentCls}-selector`]: {
        backgroundColor: `transparent !important`,
        borderColor: `transparent !important`,
        boxShadow: `none !important`
      },
      // ==================== In Form ====================
      [`&${componentCls}-in-form-item`]: {
        width: '100%'
      }
    }
  },
  // =====================================================
  // ==                       LTR                       ==
  // =====================================================
  // Base
  genBaseStyle(token),
  // Single
  single_genSingleStyle(token),
  // Multiple
  multiple(token),
  // Dropdown
  dropdown(token),
  // =====================================================
  // ==                       RTL                       ==
  // =====================================================
  {
    [`${componentCls}-rtl`]: {
      direction: 'rtl'
    }
  },
  // =====================================================
  // ==                     Status                      ==
  // =====================================================
  genStatusStyle(componentCls, (0,statistic/* merge */.TS)(token, {
    borderHoverColor: token.colorPrimaryHover,
    outlineColor: token.controlOutline
  })), genStatusStyle(`${componentCls}-status-error`, (0,statistic/* merge */.TS)(token, {
    borderHoverColor: token.colorErrorHover,
    outlineColor: token.colorErrorOutline
  }), true), genStatusStyle(`${componentCls}-status-warning`, (0,statistic/* merge */.TS)(token, {
    borderHoverColor: token.colorWarningHover,
    outlineColor: token.colorWarningOutline
  }), true),
  // =====================================================
  // ==             Space Compact                       ==
  // =====================================================
  (0,compact_item/* genCompactItemStyle */.c)(token, {
    borderElCls: `${componentCls}-selector`,
    focusElCls: `${componentCls}-focused`
  })];
};
// ============================== Export ==============================
/* harmony default export */ var select_style = ((0,genComponentStyleHook/* default */.Z)('Select', (token, _ref) => {
  let {
    rootPrefixCls
  } = _ref;
  const selectToken = (0,statistic/* merge */.TS)(token, {
    rootPrefixCls,
    inputPaddingHorizontalBase: token.paddingSM - 1
  });
  return [genSelectStyle(selectToken)];
}, token => ({
  zIndexPopup: token.zIndexPopupBase + 50
})));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/select/useBuiltinPlacements.js
const useBuiltinPlacements_getBuiltInPlacements = popupOverflow => {
  const htmlRegion = popupOverflow === 'scroll' ? 'scroll' : 'visible';
  const sharedConfig = {
    overflow: {
      adjustX: true,
      adjustY: true,
      shiftY: true
    },
    htmlRegion
  };
  return {
    bottomLeft: Object.assign(Object.assign({}, sharedConfig), {
      points: ['tl', 'bl'],
      offset: [0, 4]
    }),
    bottomRight: Object.assign(Object.assign({}, sharedConfig), {
      points: ['tr', 'br'],
      offset: [0, 4]
    }),
    topLeft: Object.assign(Object.assign({}, sharedConfig), {
      points: ['bl', 'tl'],
      offset: [0, -4]
    }),
    topRight: Object.assign(Object.assign({}, sharedConfig), {
      points: ['br', 'tr'],
      offset: [0, -4]
    })
  };
};
function useBuiltinPlacements(buildInPlacements, popupOverflow) {
  return buildInPlacements || useBuiltinPlacements_getBuiltInPlacements(popupOverflow);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/select/useShowArrow.js
/**
 * Since Select, TreeSelect, Cascader is same Select like component.
 * We just use same hook to handle this logic.
 *
 * If `showArrow` not configured, always show it.
 */
function useShowArrow(showArrow) {
  return showArrow !== null && showArrow !== void 0 ? showArrow : true;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4/node_modules/@ant-design/icons/es/icons/CheckOutlined.js + 1 modules
var CheckOutlined = __webpack_require__(12415);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(73648);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4/node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(37059);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4/node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__(11251);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(96706);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4/node_modules/@ant-design/icons/es/icons/SearchOutlined.js + 1 modules
var SearchOutlined = __webpack_require__(44950);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/select/utils/iconUtil.js







function getIcons(_ref) {
  let {
    suffixIcon,
    clearIcon,
    menuItemSelectedIcon,
    removeIcon,
    loading,
    multiple,
    hasFeedback,
    prefixCls,
    showArrow,
    feedbackIcon
  } = _ref;
  // Clear Icon
  const mergedClearIcon = clearIcon !== null && clearIcon !== void 0 ? clearIcon : /*#__PURE__*/react.createElement(CloseCircleFilled/* default */.Z, null);
  // Validation Feedback Icon
  const getSuffixIconNode = arrowIcon => /*#__PURE__*/react.createElement(react.Fragment, null, showArrow !== false && arrowIcon, hasFeedback && feedbackIcon);
  // Arrow item icon
  let mergedSuffixIcon = null;
  if (suffixIcon !== undefined) {
    mergedSuffixIcon = getSuffixIconNode(suffixIcon);
  } else if (loading) {
    mergedSuffixIcon = getSuffixIconNode( /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, {
      spin: true
    }));
  } else {
    const iconCls = `${prefixCls}-suffix`;
    mergedSuffixIcon = _ref2 => {
      let {
        open,
        showSearch
      } = _ref2;
      if (open && showSearch) {
        return getSuffixIconNode( /*#__PURE__*/react.createElement(SearchOutlined/* default */.Z, {
          className: iconCls
        }));
      }
      return getSuffixIconNode( /*#__PURE__*/react.createElement(DownOutlined/* default */.Z, {
        className: iconCls
      }));
    };
  }
  // Checked item icon
  let mergedItemIcon = null;
  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = /*#__PURE__*/react.createElement(CheckOutlined/* default */.Z, null);
  } else {
    mergedItemIcon = null;
  }
  let mergedRemoveIcon = null;
  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, null);
  }
  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/select/index.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
// TODO: 4.0 - codemod should help to change `filterOption` to support node props.


















const SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
const InternalSelect = (_a, ref) => {
  var _b;
  var {
      prefixCls: customizePrefixCls,
      bordered = true,
      className,
      rootClassName,
      getPopupContainer,
      popupClassName,
      dropdownClassName,
      listHeight = 256,
      placement,
      listItemHeight = 24,
      size: customizeSize,
      disabled: customDisabled,
      notFoundContent,
      status: customStatus,
      showArrow,
      builtinPlacements,
      dropdownMatchSelectWidth,
      popupMatchSelectWidth,
      direction: propDirection
    } = _a,
    props = __rest(_a, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "showArrow", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "direction"]);
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    renderEmpty,
    direction: contextDirection,
    virtual,
    popupMatchSelectWidth: contextPopupMatchSelectWidth,
    popupOverflow,
    select
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('select', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const direction = propDirection !== null && propDirection !== void 0 ? propDirection : contextDirection;
  const {
    compactSize,
    compactItemClassnames
  } = (0,Compact/* useCompactItemContext */.ri)(prefixCls, direction);
  const [wrapSSR, hashId] = select_style(prefixCls);
  const mode = react.useMemo(() => {
    const {
      mode: m
    } = props;
    if (m === 'combobox') {
      return undefined;
    }
    if (m === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
      return 'combobox';
    }
    return m;
  }, [props.mode]);
  const isMultiple = mode === 'multiple' || mode === 'tags';
  const mergedShowArrow = useShowArrow(showArrow);
  const mergedPopupMatchSelectWidth = (_b = popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth) !== null && _b !== void 0 ? _b : contextPopupMatchSelectWidth;
  // ===================== Form Status =====================
  const {
    status: contextStatus,
    hasFeedback,
    isFormItemInput,
    feedbackIcon
  } = react.useContext(form_context/* FormItemInputContext */.aM);
  const mergedStatus = (0,statusUtils/* getMergedStatus */.F)(contextStatus, customStatus);
  // ===================== Empty =====================
  let mergedNotFound;
  if (notFoundContent !== undefined) {
    mergedNotFound = notFoundContent;
  } else if (mode === 'combobox') {
    mergedNotFound = null;
  } else {
    mergedNotFound = (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty('Select')) || /*#__PURE__*/react.createElement(defaultRenderEmpty/* default */.Z, {
      componentName: "Select"
    });
  }
  // ===================== Icons =====================
  const {
    suffixIcon,
    itemIcon,
    removeIcon,
    clearIcon
  } = getIcons(Object.assign(Object.assign({}, props), {
    multiple: isMultiple,
    hasFeedback,
    feedbackIcon,
    showArrow: mergedShowArrow,
    prefixCls
  }));
  const selectProps = (0,omit/* default */.Z)(props, ['suffixIcon', 'itemIcon']);
  const rcSelectRtlDropdownClassName = classnames_default()(popupClassName || dropdownClassName, {
    [`${prefixCls}-dropdown-${direction}`]: direction === 'rtl'
  }, rootClassName, hashId);
  const mergedSize = (0,useSize/* default */.Z)(ctx => {
    var _a;
    return (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a !== void 0 ? _a : ctx;
  });
  // ===================== Disabled =====================
  const disabled = react.useContext(DisabledContext/* default */.Z);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const mergedClassName = classnames_default()({
    [`${prefixCls}-lg`]: mergedSize === 'large',
    [`${prefixCls}-sm`]: mergedSize === 'small',
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-borderless`]: !bordered,
    [`${prefixCls}-in-form-item`]: isFormItemInput
  }, (0,statusUtils/* getStatusClassNames */.Z)(prefixCls, mergedStatus, hasFeedback), compactItemClassnames, className, rootClassName, hashId);
  // ===================== Placement =====================
  const memoPlacement = react.useMemo(() => {
    if (placement !== undefined) {
      return placement;
    }
    return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  }, [placement, direction]);
  const mergedBuiltinPlacements = useBuiltinPlacements(builtinPlacements, popupOverflow);
  // ====================== Warning ======================
  if (false) {}
  // ====================== Render =======================
  return wrapSSR( /*#__PURE__*/react.createElement(rc_select_es, Object.assign({
    ref: ref,
    virtual: virtual,
    showSearch: select === null || select === void 0 ? void 0 : select.showSearch
  }, selectProps, {
    dropdownMatchSelectWidth: mergedPopupMatchSelectWidth,
    builtinPlacements: mergedBuiltinPlacements,
    transitionName: (0,motion/* getTransitionName */.mL)(rootPrefixCls, (0,motion/* getTransitionDirection */.q0)(placement), props.transitionName),
    listHeight: listHeight,
    listItemHeight: listItemHeight,
    mode: mode,
    prefixCls: prefixCls,
    placement: memoPlacement,
    direction: direction,
    inputIcon: suffixIcon,
    menuItemSelectedIcon: itemIcon,
    removeIcon: removeIcon,
    clearIcon: clearIcon,
    notFoundContent: mergedNotFound,
    className: mergedClassName,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    dropdownClassName: rcSelectRtlDropdownClassName,
    showArrow: hasFeedback || mergedShowArrow,
    disabled: mergedDisabled
  })));
};
if (false) {}
const select_Select = /*#__PURE__*/react.forwardRef(InternalSelect);
// We don't care debug panel
/* istanbul ignore next */
const select_PurePanel = (0,PurePanel/* default */.Z)(select_Select);
select_Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
select_Select.Option = es_Option;
select_Select.OptGroup = es_OptGroup;
select_Select._InternalPanelDoNotUseOrYouWillBeFired = select_PurePanel;
/* harmony default export */ var es_select = (select_Select);

/***/ }),

/***/ 38539:
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/style/motion/move.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fm": function() { return /* binding */ initMoveMotion; }
/* harmony export */ });
/* unused harmony exports moveDownIn, moveDownOut, moveLeftIn, moveLeftOut, moveRightIn, moveRightOut, moveUpIn, moveUpOut */
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ 76471);
/* harmony import */ var _motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./motion */ 97782);


const moveDownIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveDownIn', {
  '0%': {
    transform: 'translate3d(0, 100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveDownOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveDownOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(0, 100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveLeftIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveLeftIn', {
  '0%': {
    transform: 'translate3d(-100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveLeftOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveLeftOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(-100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveRightIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveRightIn', {
  '0%': {
    transform: 'translate3d(100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveRightOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveRightOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveUpIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveUpIn', {
  '0%': {
    transform: 'translate3d(0, -100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveUpOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antMoveUpOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(0, -100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveMotion = {
  'move-up': {
    inKeyframes: moveUpIn,
    outKeyframes: moveUpOut
  },
  'move-down': {
    inKeyframes: moveDownIn,
    outKeyframes: moveDownOut
  },
  'move-left': {
    inKeyframes: moveLeftIn,
    outKeyframes: moveLeftOut
  },
  'move-right': {
    inKeyframes: moveRightIn,
    outKeyframes: moveRightOut
  }
};
const initMoveMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = moveMotion[motionName];
  return [(0,_motion__WEBPACK_IMPORTED_MODULE_1__/* .initMotion */ .R)(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};

/***/ }),

/***/ 85348:
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/style/motion/slide.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qt": function() { return /* binding */ slideDownIn; },
/* harmony export */   "Uw": function() { return /* binding */ slideUpOut; },
/* harmony export */   "fJ": function() { return /* binding */ slideUpIn; },
/* harmony export */   "ly": function() { return /* binding */ slideDownOut; },
/* harmony export */   "oN": function() { return /* binding */ initSlideMotion; }
/* harmony export */ });
/* unused harmony exports slideLeftIn, slideLeftOut, slideRightIn, slideRightOut */
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ 76471);
/* harmony import */ var _motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./motion */ 97782);


const slideUpIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideUpIn', {
  '0%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  }
});
const slideUpOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideUpOut', {
  '0%': {
    transform: 'scaleY(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  }
});
const slideDownIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideDownIn', {
  '0%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '100% 100%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 100%',
    opacity: 1
  }
});
const slideDownOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideDownOut', {
  '0%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 100%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '100% 100%',
    opacity: 0
  }
});
const slideLeftIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideLeftIn', {
  '0%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleX(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  }
});
const slideLeftOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideLeftOut', {
  '0%': {
    transform: 'scaleX(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  }
});
const slideRightIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideRightIn', {
  '0%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '100% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleX(1)',
    transformOrigin: '100% 0%',
    opacity: 1
  }
});
const slideRightOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideRightOut', {
  '0%': {
    transform: 'scaleX(1)',
    transformOrigin: '100% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '100% 0%',
    opacity: 0
  }
});
const slideMotion = {
  'slide-up': {
    inKeyframes: slideUpIn,
    outKeyframes: slideUpOut
  },
  'slide-down': {
    inKeyframes: slideDownIn,
    outKeyframes: slideDownOut
  },
  'slide-left': {
    inKeyframes: slideLeftIn,
    outKeyframes: slideLeftOut
  },
  'slide-right': {
    inKeyframes: slideRightIn,
    outKeyframes: slideRightOut
  }
};
const initSlideMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = slideMotion[motionName];
  return [(0,_motion__WEBPACK_IMPORTED_MODULE_1__/* .initMotion */ .R)(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
      ${motionCls}-enter,
      ${motionCls}-appear
    `]: {
      transform: 'scale(0)',
      transformOrigin: '0% 0%',
      opacity: 0,
      animationTimingFunction: token.motionEaseOutQuint,
      [`&-prepare`]: {
        transform: 'scale(1)'
      }
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInQuint
    }
  }];
};

/***/ }),

/***/ 84026:
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/rc-overflow@1.3.1/node_modules/rc-overflow/es/index.js + 6 modules ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ rc_overflow_es; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(31966);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(30001);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(15738);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(39427);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(93236);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-resize-observer@1.3.1/node_modules/rc-resize-observer/es/index.js + 5 modules
var es = __webpack_require__(20537);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.0/node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(67575);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-overflow@1.3.1/node_modules/rc-overflow/es/Item.js



var _excluded = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"];



// Use shared variable to save bundle size
var UNDEFINED = undefined;
function InternalItem(props, ref) {
  var prefixCls = props.prefixCls,
    invalidate = props.invalidate,
    item = props.item,
    renderItem = props.renderItem,
    responsive = props.responsive,
    responsiveDisabled = props.responsiveDisabled,
    registerSize = props.registerSize,
    itemKey = props.itemKey,
    className = props.className,
    style = props.style,
    children = props.children,
    display = props.display,
    order = props.order,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
  var mergedHidden = responsive && !display;
  // ================================ Effect ================================
  function internalRegisterSize(width) {
    registerSize(itemKey, width);
  }
  react.useEffect(function () {
    return function () {
      internalRegisterSize(null);
    };
  }, []);
  // ================================ Render ================================
  var childNode = renderItem && item !== UNDEFINED ? renderItem(item) : children;
  var overflowStyle;
  if (!invalidate) {
    overflowStyle = {
      opacity: mergedHidden ? 0 : 1,
      height: mergedHidden ? 0 : UNDEFINED,
      overflowY: mergedHidden ? 'hidden' : UNDEFINED,
      order: responsive ? order : UNDEFINED,
      pointerEvents: mergedHidden ? 'none' : UNDEFINED,
      position: mergedHidden ? 'absolute' : UNDEFINED
    };
  }
  var overflowProps = {};
  if (mergedHidden) {
    overflowProps['aria-hidden'] = true;
  }
  var itemNode = /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    className: classnames_default()(!invalidate && prefixCls, className),
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, overflowStyle), style)
  }, overflowProps, restProps, {
    ref: ref
  }), childNode);
  if (responsive) {
    itemNode = /*#__PURE__*/react.createElement(es/* default */.Z, {
      onResize: function onResize(_ref) {
        var offsetWidth = _ref.offsetWidth;
        internalRegisterSize(offsetWidth);
      },
      disabled: responsiveDisabled
    }, itemNode);
  }
  return itemNode;
}
var Item = /*#__PURE__*/react.forwardRef(InternalItem);
Item.displayName = 'Item';
/* harmony default export */ var es_Item = (Item);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.0/node_modules/rc-util/es/hooks/useEvent.js
var useEvent = __webpack_require__(36152);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@18.1.0_react@18.1.0/node_modules/react-dom/index.js
var react_dom = __webpack_require__(19103);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.0/node_modules/rc-util/es/raf.js
var raf = __webpack_require__(15902);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-overflow@1.3.1/node_modules/rc-overflow/es/hooks/channelUpdate.js

function channelUpdate(callback) {
  if (typeof MessageChannel === 'undefined') {
    (0,raf/* default */.Z)(callback);
  } else {
    var channel = new MessageChannel();
    channel.port1.onmessage = function () {
      return callback();
    };
    channel.port2.postMessage(undefined);
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-overflow@1.3.1/node_modules/rc-overflow/es/hooks/useEffectState.js





/**
 * Batcher for record any `useEffectState` need update.
 */
function useBatcher() {
  // Updater Trigger
  var updateFuncRef = react.useRef(null);
  // Notify update
  var notifyEffectUpdate = function notifyEffectUpdate(callback) {
    if (!updateFuncRef.current) {
      updateFuncRef.current = [];
      channelUpdate(function () {
        (0,react_dom.unstable_batchedUpdates)(function () {
          updateFuncRef.current.forEach(function (fn) {
            fn();
          });
          updateFuncRef.current = null;
        });
      });
    }
    updateFuncRef.current.push(callback);
  };
  return notifyEffectUpdate;
}
/**
 * Trigger state update by `useLayoutEffect` to save perf.
 */
function useEffectState(notifyEffectUpdate, defaultValue) {
  // Value
  var _React$useState = react.useState(defaultValue),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    stateValue = _React$useState2[0],
    setStateValue = _React$useState2[1];
  // Set State
  var setEffectVal = (0,useEvent/* default */.Z)(function (nextValue) {
    notifyEffectUpdate(function () {
      setStateValue(nextValue);
    });
  });
  return [stateValue, setEffectVal];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-overflow@1.3.1/node_modules/rc-overflow/es/context.js

var OverflowContext = /*#__PURE__*/react.createContext(null);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-overflow@1.3.1/node_modules/rc-overflow/es/RawItem.js


var RawItem_excluded = ["component"],
  _excluded2 = ["className"],
  _excluded3 = ["className"];




var InternalRawItem = function InternalRawItem(props, ref) {
  var context = react.useContext(OverflowContext);
  // Render directly when context not provided
  if (!context) {
    var _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _restProps = (0,objectWithoutProperties/* default */.Z)(props, RawItem_excluded);
    return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({}, _restProps, {
      ref: ref
    }));
  }
  var contextClassName = context.className,
    restContext = (0,objectWithoutProperties/* default */.Z)(context, _excluded2);
  var className = props.className,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded3);
  // Do not pass context to sub item to avoid multiple measure
  return /*#__PURE__*/react.createElement(OverflowContext.Provider, {
    value: null
  }, /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({
    ref: ref,
    className: classnames_default()(contextClassName, className)
  }, restContext, restProps)));
};
var RawItem = /*#__PURE__*/react.forwardRef(InternalRawItem);
RawItem.displayName = 'RawItem';
/* harmony default export */ var es_RawItem = (RawItem);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-overflow@1.3.1/node_modules/rc-overflow/es/Overflow.js




var Overflow_excluded = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"];









var RESPONSIVE = 'responsive';
var INVALIDATE = 'invalidate';

function defaultRenderRest(omittedItems) {
  return "+ ".concat(omittedItems.length, " ...");
}
function Overflow(props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-overflow' : _props$prefixCls,
    _props$data = props.data,
    data = _props$data === void 0 ? [] : _props$data,
    renderItem = props.renderItem,
    renderRawItem = props.renderRawItem,
    itemKey = props.itemKey,
    _props$itemWidth = props.itemWidth,
    itemWidth = _props$itemWidth === void 0 ? 10 : _props$itemWidth,
    ssr = props.ssr,
    style = props.style,
    className = props.className,
    maxCount = props.maxCount,
    renderRest = props.renderRest,
    renderRawRest = props.renderRawRest,
    suffix = props.suffix,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    itemComponent = props.itemComponent,
    onVisibleChange = props.onVisibleChange,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, Overflow_excluded);
  var fullySSR = ssr === 'full';
  var notifyEffectUpdate = useBatcher();
  var _useEffectState = useEffectState(notifyEffectUpdate, null),
    _useEffectState2 = (0,slicedToArray/* default */.Z)(_useEffectState, 2),
    containerWidth = _useEffectState2[0],
    setContainerWidth = _useEffectState2[1];
  var mergedContainerWidth = containerWidth || 0;
  var _useEffectState3 = useEffectState(notifyEffectUpdate, new Map()),
    _useEffectState4 = (0,slicedToArray/* default */.Z)(_useEffectState3, 2),
    itemWidths = _useEffectState4[0],
    setItemWidths = _useEffectState4[1];
  var _useEffectState5 = useEffectState(notifyEffectUpdate, 0),
    _useEffectState6 = (0,slicedToArray/* default */.Z)(_useEffectState5, 2),
    prevRestWidth = _useEffectState6[0],
    setPrevRestWidth = _useEffectState6[1];
  var _useEffectState7 = useEffectState(notifyEffectUpdate, 0),
    _useEffectState8 = (0,slicedToArray/* default */.Z)(_useEffectState7, 2),
    restWidth = _useEffectState8[0],
    setRestWidth = _useEffectState8[1];
  var _useEffectState9 = useEffectState(notifyEffectUpdate, 0),
    _useEffectState10 = (0,slicedToArray/* default */.Z)(_useEffectState9, 2),
    suffixWidth = _useEffectState10[0],
    setSuffixWidth = _useEffectState10[1];
  var _useState = (0,react.useState)(null),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    suffixFixedStart = _useState2[0],
    setSuffixFixedStart = _useState2[1];
  var _useState3 = (0,react.useState)(null),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    displayCount = _useState4[0],
    setDisplayCount = _useState4[1];
  var mergedDisplayCount = react.useMemo(function () {
    if (displayCount === null && fullySSR) {
      return Number.MAX_SAFE_INTEGER;
    }
    return displayCount || 0;
  }, [displayCount, containerWidth]);
  var _useState5 = (0,react.useState)(false),
    _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
    restReady = _useState6[0],
    setRestReady = _useState6[1];
  var itemPrefixCls = "".concat(prefixCls, "-item");
  // Always use the max width to avoid blink
  var mergedRestWidth = Math.max(prevRestWidth, restWidth);
  // ================================= Data =================================
  var isResponsive = maxCount === RESPONSIVE;
  var shouldResponsive = data.length && isResponsive;
  var invalidate = maxCount === INVALIDATE;
  /**
   * When is `responsive`, we will always render rest node to get the real width of it for calculation
   */
  var showRest = shouldResponsive || typeof maxCount === 'number' && data.length > maxCount;
  var mergedData = (0,react.useMemo)(function () {
    var items = data;
    if (shouldResponsive) {
      if (containerWidth === null && fullySSR) {
        items = data;
      } else {
        items = data.slice(0, Math.min(data.length, mergedContainerWidth / itemWidth));
      }
    } else if (typeof maxCount === 'number') {
      items = data.slice(0, maxCount);
    }
    return items;
  }, [data, itemWidth, containerWidth, maxCount, shouldResponsive]);
  var omittedItems = (0,react.useMemo)(function () {
    if (shouldResponsive) {
      return data.slice(mergedDisplayCount + 1);
    }
    return data.slice(mergedData.length);
  }, [data, mergedData, shouldResponsive, mergedDisplayCount]);
  // ================================= Item =================================
  var getKey = (0,react.useCallback)(function (item, index) {
    var _ref;
    if (typeof itemKey === 'function') {
      return itemKey(item);
    }
    return (_ref = itemKey && (item === null || item === void 0 ? void 0 : item[itemKey])) !== null && _ref !== void 0 ? _ref : index;
  }, [itemKey]);
  var mergedRenderItem = (0,react.useCallback)(renderItem || function (item) {
    return item;
  }, [renderItem]);
  function updateDisplayCount(count, suffixFixedStartVal, notReady) {
    // React 18 will sync render even when the value is same in some case.
    // We take `mergedData` as deps which may cause dead loop if it's dynamic generate.
    // ref: https://github.com/ant-design/ant-design/issues/36559
    if (displayCount === count && (suffixFixedStartVal === undefined || suffixFixedStartVal === suffixFixedStart)) {
      return;
    }
    setDisplayCount(count);
    if (!notReady) {
      setRestReady(count < data.length - 1);
      onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(count);
    }
    if (suffixFixedStartVal !== undefined) {
      setSuffixFixedStart(suffixFixedStartVal);
    }
  }
  // ================================= Size =================================
  function onOverflowResize(_, element) {
    setContainerWidth(element.clientWidth);
  }
  function registerSize(key, width) {
    setItemWidths(function (origin) {
      var clone = new Map(origin);
      if (width === null) {
        clone.delete(key);
      } else {
        clone.set(key, width);
      }
      return clone;
    });
  }
  function registerOverflowSize(_, width) {
    setRestWidth(width);
    setPrevRestWidth(restWidth);
  }
  function registerSuffixSize(_, width) {
    setSuffixWidth(width);
  }
  // ================================ Effect ================================
  function getItemWidth(index) {
    return itemWidths.get(getKey(mergedData[index], index));
  }
  (0,useLayoutEffect/* default */.Z)(function () {
    if (mergedContainerWidth && typeof mergedRestWidth === 'number' && mergedData) {
      var totalWidth = suffixWidth;
      var len = mergedData.length;
      var lastIndex = len - 1;
      // When data count change to 0, reset this since not loop will reach
      if (!len) {
        updateDisplayCount(0, null);
        return;
      }
      for (var i = 0; i < len; i += 1) {
        var currentItemWidth = getItemWidth(i);
        // Fully will always render
        if (fullySSR) {
          currentItemWidth = currentItemWidth || 0;
        }
        // Break since data not ready
        if (currentItemWidth === undefined) {
          updateDisplayCount(i - 1, undefined, true);
          break;
        }
        // Find best match
        totalWidth += currentItemWidth;
        if (
        // Only one means `totalWidth` is the final width
        lastIndex === 0 && totalWidth <= mergedContainerWidth ||
        // Last two width will be the final width
        i === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= mergedContainerWidth) {
          // Additional check if match the end
          updateDisplayCount(lastIndex, null);
          break;
        } else if (totalWidth + mergedRestWidth > mergedContainerWidth) {
          // Can not hold all the content to show rest
          updateDisplayCount(i - 1, totalWidth - currentItemWidth - suffixWidth + restWidth);
          break;
        }
      }
      if (suffix && getItemWidth(0) + suffixWidth > mergedContainerWidth) {
        setSuffixFixedStart(null);
      }
    }
  }, [mergedContainerWidth, itemWidths, restWidth, suffixWidth, getKey, mergedData]);
  // ================================ Render ================================
  var displayRest = restReady && !!omittedItems.length;
  var suffixStyle = {};
  if (suffixFixedStart !== null && shouldResponsive) {
    suffixStyle = {
      position: 'absolute',
      left: suffixFixedStart,
      top: 0
    };
  }
  var itemSharedProps = {
    prefixCls: itemPrefixCls,
    responsive: shouldResponsive,
    component: itemComponent,
    invalidate: invalidate
  };
  // >>>>> Choice render fun by `renderRawItem`
  var internalRenderItemNode = renderRawItem ? function (item, index) {
    var key = getKey(item, index);
    return /*#__PURE__*/react.createElement(OverflowContext.Provider, {
      key: key,
      value: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, itemSharedProps), {}, {
        order: index,
        item: item,
        itemKey: key,
        registerSize: registerSize,
        display: index <= mergedDisplayCount
      })
    }, renderRawItem(item, index));
  } : function (item, index) {
    var key = getKey(item, index);
    return /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({}, itemSharedProps, {
      order: index,
      key: key,
      item: item,
      renderItem: mergedRenderItem,
      itemKey: key,
      registerSize: registerSize,
      display: index <= mergedDisplayCount
    }));
  };
  // >>>>> Rest node
  var restNode;
  var restContextProps = {
    order: displayRest ? mergedDisplayCount : Number.MAX_SAFE_INTEGER,
    className: "".concat(itemPrefixCls, "-rest"),
    registerSize: registerOverflowSize,
    display: displayRest
  };
  if (!renderRawRest) {
    var mergedRenderRest = renderRest || defaultRenderRest;
    restNode = /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({}, itemSharedProps, restContextProps), typeof mergedRenderRest === 'function' ? mergedRenderRest(omittedItems) : mergedRenderRest);
  } else if (renderRawRest) {
    restNode = /*#__PURE__*/react.createElement(OverflowContext.Provider, {
      value: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, itemSharedProps), restContextProps)
    }, renderRawRest(omittedItems));
  }
  var overflowNode = /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    className: classnames_default()(!invalidate && prefixCls, className),
    style: style,
    ref: ref
  }, restProps), mergedData.map(internalRenderItemNode), showRest ? restNode : null, suffix && /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({}, itemSharedProps, {
    responsive: isResponsive,
    responsiveDisabled: !shouldResponsive,
    order: mergedDisplayCount,
    className: "".concat(itemPrefixCls, "-suffix"),
    registerSize: registerSuffixSize,
    display: true,
    style: suffixStyle
  }), suffix));
  if (isResponsive) {
    overflowNode = /*#__PURE__*/react.createElement(es/* default */.Z, {
      onResize: onOverflowResize,
      disabled: !shouldResponsive
    }, overflowNode);
  }
  return overflowNode;
}
var ForwardOverflow = /*#__PURE__*/react.forwardRef(Overflow);
ForwardOverflow.displayName = 'Overflow';
ForwardOverflow.Item = es_RawItem;
ForwardOverflow.RESPONSIVE = RESPONSIVE;
ForwardOverflow.INVALIDATE = INVALIDATE;
// Convert to generic type
/* harmony default export */ var es_Overflow = (ForwardOverflow);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-overflow@1.3.1/node_modules/rc-overflow/es/index.js

/* harmony default export */ var rc_overflow_es = (es_Overflow);

/***/ }),

/***/ 91276:
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/rc-virtual-list@3.5.2/node_modules/rc-virtual-list/es/index.js + 14 modules ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ rc_virtual_list_es; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(31966);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(30001);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(96164);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(15738);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(39427);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(93236);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-resize-observer@1.3.1/node_modules/rc-resize-observer/es/index.js + 5 modules
var es = __webpack_require__(20537);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.5.2/node_modules/rc-virtual-list/es/Filler.js






/**
 * Fill component to provided the scroll content real height.
 */
var Filler = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var height = _ref.height,
    offset = _ref.offset,
    children = _ref.children,
    prefixCls = _ref.prefixCls,
    onInnerResize = _ref.onInnerResize,
    innerProps = _ref.innerProps;
  var outerStyle = {};
  var innerStyle = {
    display: 'flex',
    flexDirection: 'column'
  };
  if (offset !== undefined) {
    outerStyle = {
      height: height,
      position: 'relative',
      overflow: 'hidden'
    };
    innerStyle = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, innerStyle), {}, {
      transform: "translateY(".concat(offset, "px)"),
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0
    });
  }
  return /*#__PURE__*/react.createElement("div", {
    style: outerStyle
  }, /*#__PURE__*/react.createElement(es/* default */.Z, {
    onResize: function onResize(_ref2) {
      var offsetHeight = _ref2.offsetHeight;
      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    style: innerStyle,
    className: classnames_default()((0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-holder-inner"), prefixCls)),
    ref: ref
  }, innerProps), children)));
});
Filler.displayName = 'Filler';
/* harmony default export */ var es_Filler = (Filler);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(86305);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(49325);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(60828);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.0/node_modules/rc-util/es/raf.js
var raf = __webpack_require__(15902);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.5.2/node_modules/rc-virtual-list/es/ScrollBar.js









var MIN_SIZE = 20;
function getPageY(e) {
  return 'touches' in e ? e.touches[0].pageY : e.pageY;
}
var ScrollBar = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(ScrollBar, _React$Component);
  var _super = (0,createSuper/* default */.Z)(ScrollBar);
  function ScrollBar() {
    var _this;
    (0,classCallCheck/* default */.Z)(this, ScrollBar);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.moveRaf = null;
    _this.scrollbarRef = /*#__PURE__*/react.createRef();
    _this.thumbRef = /*#__PURE__*/react.createRef();
    _this.visibleTimeout = null;
    _this.state = {
      dragging: false,
      pageY: null,
      startTop: null,
      visible: false
    };
    _this.delayHidden = function () {
      clearTimeout(_this.visibleTimeout);
      _this.setState({
        visible: true
      });
      _this.visibleTimeout = setTimeout(function () {
        _this.setState({
          visible: false
        });
      }, 2000);
    };
    _this.onScrollbarTouchStart = function (e) {
      e.preventDefault();
    };
    _this.onContainerMouseDown = function (e) {
      e.stopPropagation();
      e.preventDefault();
    };
    // ======================= Clean =======================
    _this.patchEvents = function () {
      window.addEventListener('mousemove', _this.onMouseMove);
      window.addEventListener('mouseup', _this.onMouseUp);
      _this.thumbRef.current.addEventListener('touchmove', _this.onMouseMove);
      _this.thumbRef.current.addEventListener('touchend', _this.onMouseUp);
    };
    _this.removeEvents = function () {
      var _this$scrollbarRef$cu;
      window.removeEventListener('mousemove', _this.onMouseMove);
      window.removeEventListener('mouseup', _this.onMouseUp);
      (_this$scrollbarRef$cu = _this.scrollbarRef.current) === null || _this$scrollbarRef$cu === void 0 ? void 0 : _this$scrollbarRef$cu.removeEventListener('touchstart', _this.onScrollbarTouchStart);
      if (_this.thumbRef.current) {
        _this.thumbRef.current.removeEventListener('touchstart', _this.onMouseDown);
        _this.thumbRef.current.removeEventListener('touchmove', _this.onMouseMove);
        _this.thumbRef.current.removeEventListener('touchend', _this.onMouseUp);
      }
      raf/* default.cancel */.Z.cancel(_this.moveRaf);
    };
    // ======================= Thumb =======================
    _this.onMouseDown = function (e) {
      var onStartMove = _this.props.onStartMove;
      _this.setState({
        dragging: true,
        pageY: getPageY(e),
        startTop: _this.getTop()
      });
      onStartMove();
      _this.patchEvents();
      e.stopPropagation();
      e.preventDefault();
    };
    _this.onMouseMove = function (e) {
      var _this$state = _this.state,
        dragging = _this$state.dragging,
        pageY = _this$state.pageY,
        startTop = _this$state.startTop;
      var onScroll = _this.props.onScroll;
      raf/* default.cancel */.Z.cancel(_this.moveRaf);
      if (dragging) {
        var offsetY = getPageY(e) - pageY;
        var newTop = startTop + offsetY;
        var enableScrollRange = _this.getEnableScrollRange();
        var enableHeightRange = _this.getEnableHeightRange();
        var ptg = enableHeightRange ? newTop / enableHeightRange : 0;
        var newScrollTop = Math.ceil(ptg * enableScrollRange);
        _this.moveRaf = (0,raf/* default */.Z)(function () {
          onScroll(newScrollTop);
        });
      }
    };
    _this.onMouseUp = function () {
      var onStopMove = _this.props.onStopMove;
      _this.setState({
        dragging: false
      });
      onStopMove();
      _this.removeEvents();
    };
    // ===================== Calculate =====================
    _this.getSpinHeight = function () {
      var _this$props = _this.props,
        height = _this$props.height,
        count = _this$props.count;
      var baseHeight = height / count * 10;
      baseHeight = Math.max(baseHeight, MIN_SIZE);
      baseHeight = Math.min(baseHeight, height / 2);
      return Math.floor(baseHeight);
    };
    _this.getEnableScrollRange = function () {
      var _this$props2 = _this.props,
        scrollHeight = _this$props2.scrollHeight,
        height = _this$props2.height;
      return scrollHeight - height || 0;
    };
    _this.getEnableHeightRange = function () {
      var height = _this.props.height;
      var spinHeight = _this.getSpinHeight();
      return height - spinHeight || 0;
    };
    _this.getTop = function () {
      var scrollTop = _this.props.scrollTop;
      var enableScrollRange = _this.getEnableScrollRange();
      var enableHeightRange = _this.getEnableHeightRange();
      if (scrollTop === 0 || enableScrollRange === 0) {
        return 0;
      }
      var ptg = scrollTop / enableScrollRange;
      return ptg * enableHeightRange;
    };
    // Not show scrollbar when height is large than scrollHeight
    _this.showScroll = function () {
      var _this$props3 = _this.props,
        height = _this$props3.height,
        scrollHeight = _this$props3.scrollHeight;
      return scrollHeight > height;
    };
    return _this;
  }
  (0,createClass/* default */.Z)(ScrollBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollbarRef.current.addEventListener('touchstart', this.onScrollbarTouchStart);
      this.thumbRef.current.addEventListener('touchstart', this.onMouseDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.scrollTop !== this.props.scrollTop) {
        this.delayHidden();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvents();
      clearTimeout(this.visibleTimeout);
    }
  }, {
    key: "render",
    value:
    // ====================== Render =======================
    function render() {
      var _this$state2 = this.state,
        dragging = _this$state2.dragging,
        visible = _this$state2.visible;
      var _this$props4 = this.props,
        prefixCls = _this$props4.prefixCls,
        direction = _this$props4.direction;
      var spinHeight = this.getSpinHeight();
      var top = this.getTop();
      var canScroll = this.showScroll();
      var mergedVisible = canScroll && visible;
      var scrollBarDirection = direction === 'rtl' ? {
        left: 0
      } : {
        right: 0
      };
      return /*#__PURE__*/react.createElement("div", {
        ref: this.scrollbarRef,
        className: classnames_default()("".concat(prefixCls, "-scrollbar"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-scrollbar-show"), canScroll)),
        style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
          width: 8,
          top: 0,
          bottom: 0
        }, scrollBarDirection), {}, {
          position: 'absolute',
          display: mergedVisible ? null : 'none'
        }),
        onMouseDown: this.onContainerMouseDown,
        onMouseMove: this.delayHidden
      }, /*#__PURE__*/react.createElement("div", {
        ref: this.thumbRef,
        className: classnames_default()("".concat(prefixCls, "-scrollbar-thumb"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-scrollbar-thumb-moving"), dragging)),
        style: {
          width: '100%',
          height: spinHeight,
          top: top,
          left: 0,
          position: 'absolute',
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: 99,
          cursor: 'pointer',
          userSelect: 'none'
        },
        onMouseDown: this.onMouseDown
      }));
    }
  }]);
  return ScrollBar;
}(react.Component);

;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.5.2/node_modules/rc-virtual-list/es/Item.js

function Item(_ref) {
  var children = _ref.children,
    setRef = _ref.setRef;
  var refFunc = react.useCallback(function (node) {
    setRef(node);
  }, []);
  return /*#__PURE__*/react.cloneElement(children, {
    ref: refFunc
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.5.2/node_modules/rc-virtual-list/es/hooks/useChildren.js


function useChildren(list, startIndex, endIndex, setNodeRef, renderFunc, _ref) {
  var getKey = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function (item, index) {
    var eleIndex = startIndex + index;
    var node = renderFunc(item, eleIndex, {
      // style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    });
    var key = getKey(item);
    return /*#__PURE__*/react.createElement(Item, {
      key: key,
      setRef: function setRef(ele) {
        return setNodeRef(item, ele);
      }
    }, node);
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.0/node_modules/rc-util/es/Dom/findDOMNode.js
var findDOMNode = __webpack_require__(89228);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.5.2/node_modules/rc-virtual-list/es/utils/CacheMap.js


// Firefox has low performance of map.
var CacheMap = /*#__PURE__*/function () {
  function CacheMap() {
    (0,classCallCheck/* default */.Z)(this, CacheMap);
    this.maps = void 0;
    this.maps = Object.create(null);
  }
  (0,createClass/* default */.Z)(CacheMap, [{
    key: "set",
    value: function set(key, value) {
      this.maps[key] = value;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.maps[key];
    }
  }]);
  return CacheMap;
}();
/* harmony default export */ var utils_CacheMap = (CacheMap);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.5.2/node_modules/rc-virtual-list/es/hooks/useHeights.js






function useHeights(getKey, onItemAdd, onItemRemove) {
  var _React$useState = react.useState(0),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    updatedMark = _React$useState2[0],
    setUpdatedMark = _React$useState2[1];
  var instanceRef = (0,react.useRef)(new Map());
  var heightsRef = (0,react.useRef)(new utils_CacheMap());
  var collectRafRef = (0,react.useRef)();
  function cancelRaf() {
    raf/* default.cancel */.Z.cancel(collectRafRef.current);
  }
  function collectHeight() {
    cancelRaf();
    collectRafRef.current = (0,raf/* default */.Z)(function () {
      instanceRef.current.forEach(function (element, key) {
        if (element && element.offsetParent) {
          var htmlElement = (0,findDOMNode/* default */.Z)(element);
          var offsetHeight = htmlElement.offsetHeight;
          if (heightsRef.current.get(key) !== offsetHeight) {
            heightsRef.current.set(key, htmlElement.offsetHeight);
          }
        }
      });
      // Always trigger update mark to tell parent that should re-calculate heights when resized
      setUpdatedMark(function (c) {
        return c + 1;
      });
    });
  }
  function setInstanceRef(item, instance) {
    var key = getKey(item);
    var origin = instanceRef.current.get(key);
    if (instance) {
      instanceRef.current.set(key, instance);
      collectHeight();
    } else {
      instanceRef.current.delete(key);
    }
    // Instance changed
    if (!origin !== !instance) {
      if (instance) {
        onItemAdd === null || onItemAdd === void 0 ? void 0 : onItemAdd(item);
      } else {
        onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(item);
      }
    }
  }
  (0,react.useEffect)(function () {
    return cancelRaf;
  }, []);
  return [setInstanceRef, collectHeight, heightsRef.current, updatedMark];
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(3452);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.5.2/node_modules/rc-virtual-list/es/hooks/useScrollTo.js

/* eslint-disable no-param-reassign */


function useScrollTo(containerRef, data, heights, itemHeight, getKey, collectHeight, syncScrollTop, triggerFlash) {
  var scrollRef = react.useRef();
  return function (arg) {
    // When not argument provided, we think dev may want to show the scrollbar
    if (arg === null || arg === undefined) {
      triggerFlash();
      return;
    }
    // Normal scroll logic
    raf/* default.cancel */.Z.cancel(scrollRef.current);
    if (typeof arg === 'number') {
      syncScrollTop(arg);
    } else if (arg && (0,esm_typeof/* default */.Z)(arg) === 'object') {
      var index;
      var align = arg.align;
      if ('index' in arg) {
        index = arg.index;
      } else {
        index = data.findIndex(function (item) {
          return getKey(item) === arg.key;
        });
      }
      var _arg$offset = arg.offset,
        offset = _arg$offset === void 0 ? 0 : _arg$offset;
      // We will retry 3 times in case dynamic height shaking
      var syncScroll = function syncScroll(times, targetAlign) {
        if (times < 0 || !containerRef.current) return;
        var height = containerRef.current.clientHeight;
        var needCollectHeight = false;
        var newTargetAlign = targetAlign;
        // Go to next frame if height not exist
        if (height) {
          var mergedAlign = targetAlign || align;
          // Get top & bottom
          var stackTop = 0;
          var itemTop = 0;
          var itemBottom = 0;
          var maxLen = Math.min(data.length, index);
          for (var i = 0; i <= maxLen; i += 1) {
            var key = getKey(data[i]);
            itemTop = stackTop;
            var cacheHeight = heights.get(key);
            itemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
            stackTop = itemBottom;
            if (i === index && cacheHeight === undefined) {
              needCollectHeight = true;
            }
          }
          // Scroll to
          var targetTop = null;
          switch (mergedAlign) {
            case 'top':
              targetTop = itemTop - offset;
              break;
            case 'bottom':
              targetTop = itemBottom - height + offset;
              break;
            default:
              {
                var scrollTop = containerRef.current.scrollTop;
                var scrollBottom = scrollTop + height;
                if (itemTop < scrollTop) {
                  newTargetAlign = 'top';
                } else if (itemBottom > scrollBottom) {
                  newTargetAlign = 'bottom';
                }
              }
          }
          if (targetTop !== null && targetTop !== containerRef.current.scrollTop) {
            syncScrollTop(targetTop);
          }
        }
        // We will retry since element may not sync height as it described
        scrollRef.current = (0,raf/* default */.Z)(function () {
          if (needCollectHeight) {
            collectHeight();
          }
          syncScroll(times - 1, newTargetAlign);
        }, 2); // Delay 2 to wait for List collect heights
      };

      syncScroll(3);
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.5.2/node_modules/rc-virtual-list/es/utils/algorithmUtil.js
/**
 * Get index with specific start index one by one. e.g.
 * min: 3, max: 9, start: 6
 *
 * Return index is:
 * [0]: 6
 * [1]: 7
 * [2]: 5
 * [3]: 8
 * [4]: 4
 * [5]: 9
 * [6]: 3
 */
function getIndexByStartLoc(min, max, start, index) {
  var beforeCount = start - min;
  var afterCount = max - start;
  var balanceCount = Math.min(beforeCount, afterCount) * 2;
  // Balance
  if (index <= balanceCount) {
    var stepIndex = Math.floor(index / 2);
    if (index % 2) {
      return start + stepIndex + 1;
    }
    return start - stepIndex;
  }
  // One is out of range
  if (beforeCount > afterCount) {
    return start - (index - afterCount);
  }
  return start + (index - beforeCount);
}
/**
 * We assume that 2 list has only 1 item diff and others keeping the order.
 * So we can use dichotomy algorithm to find changed one.
 */
function findListDiffIndex(originList, targetList, getKey) {
  var originLen = originList.length;
  var targetLen = targetList.length;
  var shortList;
  var longList;
  if (originLen === 0 && targetLen === 0) {
    return null;
  }
  if (originLen < targetLen) {
    shortList = originList;
    longList = targetList;
  } else {
    shortList = targetList;
    longList = originList;
  }
  var notExistKey = {
    __EMPTY_ITEM__: true
  };
  function getItemKey(item) {
    if (item !== undefined) {
      return getKey(item);
    }
    return notExistKey;
  }
  // Loop to find diff one
  var diffIndex = null;
  var multiple = Math.abs(originLen - targetLen) !== 1;
  for (var i = 0; i < longList.length; i += 1) {
    var shortKey = getItemKey(shortList[i]);
    var longKey = getItemKey(longList[i]);
    if (shortKey !== longKey) {
      diffIndex = i;
      multiple = multiple || shortKey !== getItemKey(longList[i + 1]);
      break;
    }
  }
  return diffIndex === null ? null : {
    index: diffIndex,
    multiple: multiple
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.5.2/node_modules/rc-virtual-list/es/hooks/useDiffItem.js



function useDiffItem(data, getKey, onDiff) {
  var _React$useState = react.useState(data),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    prevData = _React$useState2[0],
    setPrevData = _React$useState2[1];
  var _React$useState3 = react.useState(null),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    diffItem = _React$useState4[0],
    setDiffItem = _React$useState4[1];
  react.useEffect(function () {
    var diff = findListDiffIndex(prevData || [], data || [], getKey);
    if ((diff === null || diff === void 0 ? void 0 : diff.index) !== undefined) {
      onDiff === null || onDiff === void 0 ? void 0 : onDiff(diff.index);
      setDiffItem(data[diff.index]);
    }
    setPrevData(data);
  }, [data]);
  return [diffItem];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.5.2/node_modules/rc-virtual-list/es/utils/isFirefox.js

var isFF = (typeof navigator === "undefined" ? "undefined" : (0,esm_typeof/* default */.Z)(navigator)) === 'object' && /Firefox/i.test(navigator.userAgent);
/* harmony default export */ var isFirefox = (isFF);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.5.2/node_modules/rc-virtual-list/es/hooks/useOriginScroll.js

/* harmony default export */ var useOriginScroll = (function (isScrollAtTop, isScrollAtBottom) {
  // Do lock for a wheel when scrolling
  var lockRef = (0,react.useRef)(false);
  var lockTimeoutRef = (0,react.useRef)(null);
  function lockScroll() {
    clearTimeout(lockTimeoutRef.current);
    lockRef.current = true;
    lockTimeoutRef.current = setTimeout(function () {
      lockRef.current = false;
    }, 50);
  }
  // Pass to ref since global add is in closure
  var scrollPingRef = (0,react.useRef)({
    top: isScrollAtTop,
    bottom: isScrollAtBottom
  });
  scrollPingRef.current.top = isScrollAtTop;
  scrollPingRef.current.bottom = isScrollAtBottom;
  return function (deltaY) {
    var smoothOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var originScroll =
    // Pass origin wheel when on the top
    deltaY < 0 && scrollPingRef.current.top ||
    // Pass origin wheel when on the bottom
    deltaY > 0 && scrollPingRef.current.bottom;
    if (smoothOffset && originScroll) {
      // No need lock anymore when it's smooth offset from touchMove interval
      clearTimeout(lockTimeoutRef.current);
      lockRef.current = false;
    } else if (!originScroll || lockRef.current) {
      lockScroll();
    }
    return !lockRef.current && originScroll;
  };
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.5.2/node_modules/rc-virtual-list/es/hooks/useFrameWheel.js




function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, onWheelDelta) {
  var offsetRef = (0,react.useRef)(0);
  var nextFrameRef = (0,react.useRef)(null);
  // Firefox patch
  var wheelValueRef = (0,react.useRef)(null);
  var isMouseScrollRef = (0,react.useRef)(false);
  // Scroll status sync
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
  function onWheel(event) {
    if (!inVirtual) return;
    raf/* default.cancel */.Z.cancel(nextFrameRef.current);
    var deltaY = event.deltaY;
    offsetRef.current += deltaY;
    wheelValueRef.current = deltaY;
    // Do nothing when scroll at the edge, Skip check when is in scroll
    if (originScroll(deltaY)) return;
    // Proxy of scroll events
    if (!isFirefox) {
      event.preventDefault();
    }
    nextFrameRef.current = (0,raf/* default */.Z)(function () {
      // Patch a multiple for Firefox to fix wheel number too small
      // ref: https://github.com/ant-design/ant-design/issues/26372#issuecomment-679460266
      var patchMultiple = isMouseScrollRef.current ? 10 : 1;
      onWheelDelta(offsetRef.current * patchMultiple);
      offsetRef.current = 0;
    });
  }
  // A patch for firefox
  function onFireFoxScroll(event) {
    if (!inVirtual) return;
    isMouseScrollRef.current = event.detail === wheelValueRef.current;
  }
  return [onWheel, onFireFoxScroll];
}
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.0/node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(67575);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.5.2/node_modules/rc-virtual-list/es/hooks/useMobileTouchMove.js


var SMOOTH_PTG = 14 / 15;
function useMobileTouchMove(inVirtual, listRef, callback) {
  var touchedRef = (0,react.useRef)(false);
  var touchYRef = (0,react.useRef)(0);
  var elementRef = (0,react.useRef)(null);
  // Smooth scroll
  var intervalRef = (0,react.useRef)(null);
  /* eslint-disable prefer-const */
  var cleanUpEvents;
  var onTouchMove = function onTouchMove(e) {
    if (touchedRef.current) {
      var currentY = Math.ceil(e.touches[0].pageY);
      var offsetY = touchYRef.current - currentY;
      touchYRef.current = currentY;
      if (callback(offsetY)) {
        e.preventDefault();
      }
      // Smooth interval
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(function () {
        offsetY *= SMOOTH_PTG;
        if (!callback(offsetY, true) || Math.abs(offsetY) <= 0.1) {
          clearInterval(intervalRef.current);
        }
      }, 16);
    }
  };
  var onTouchEnd = function onTouchEnd() {
    touchedRef.current = false;
    cleanUpEvents();
  };
  var onTouchStart = function onTouchStart(e) {
    cleanUpEvents();
    if (e.touches.length === 1 && !touchedRef.current) {
      touchedRef.current = true;
      touchYRef.current = Math.ceil(e.touches[0].pageY);
      elementRef.current = e.target;
      elementRef.current.addEventListener('touchmove', onTouchMove);
      elementRef.current.addEventListener('touchend', onTouchEnd);
    }
  };
  cleanUpEvents = function cleanUpEvents() {
    if (elementRef.current) {
      elementRef.current.removeEventListener('touchmove', onTouchMove);
      elementRef.current.removeEventListener('touchend', onTouchEnd);
    }
  };
  (0,useLayoutEffect/* default */.Z)(function () {
    if (inVirtual) {
      listRef.current.addEventListener('touchstart', onTouchStart);
    }
    return function () {
      var _listRef$current;
      (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.removeEventListener('touchstart', onTouchStart);
      cleanUpEvents();
      clearInterval(intervalRef.current);
    };
  }, [inVirtual]);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.5.2/node_modules/rc-virtual-list/es/List.js





var _excluded = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "component", "onScroll", "onVisibleChange", "innerProps"];













var EMPTY_DATA = [];
var ScrollStyle = {
  overflowY: 'auto',
  overflowAnchor: 'none'
};
function RawList(props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-virtual-list' : _props$prefixCls,
    className = props.className,
    height = props.height,
    itemHeight = props.itemHeight,
    _props$fullHeight = props.fullHeight,
    fullHeight = _props$fullHeight === void 0 ? true : _props$fullHeight,
    style = props.style,
    data = props.data,
    children = props.children,
    itemKey = props.itemKey,
    virtual = props.virtual,
    direction = props.direction,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    onScroll = props.onScroll,
    onVisibleChange = props.onVisibleChange,
    innerProps = props.innerProps,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
  // ================================= MISC =================================
  var useVirtual = !!(virtual !== false && height && itemHeight);
  var inVirtual = useVirtual && data && itemHeight * data.length > height;
  var _useState = (0,react.useState)(0),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    scrollTop = _useState2[0],
    setScrollTop = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    scrollMoving = _useState4[0],
    setScrollMoving = _useState4[1];
  var mergedClassName = classnames_default()(prefixCls, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
  var mergedData = data || EMPTY_DATA;
  var componentRef = (0,react.useRef)();
  var fillerInnerRef = (0,react.useRef)();
  var scrollBarRef = (0,react.useRef)(); // Hack on scrollbar to enable flash call
  // =============================== Item Key ===============================
  var getKey = react.useCallback(function (item) {
    if (typeof itemKey === 'function') {
      return itemKey(item);
    }
    return item === null || item === void 0 ? void 0 : item[itemKey];
  }, [itemKey]);
  var sharedConfig = {
    getKey: getKey
  };
  // ================================ Scroll ================================
  function syncScrollTop(newTop) {
    setScrollTop(function (origin) {
      var value;
      if (typeof newTop === 'function') {
        value = newTop(origin);
      } else {
        value = newTop;
      }
      var alignedTop = keepInRange(value);
      componentRef.current.scrollTop = alignedTop;
      return alignedTop;
    });
  }
  // ================================ Legacy ================================
  // Put ref here since the range is generate by follow
  var rangeRef = (0,react.useRef)({
    start: 0,
    end: mergedData.length
  });
  var diffItemRef = (0,react.useRef)();
  var _useDiffItem = useDiffItem(mergedData, getKey),
    _useDiffItem2 = (0,slicedToArray/* default */.Z)(_useDiffItem, 1),
    diffItem = _useDiffItem2[0];
  diffItemRef.current = diffItem;
  // ================================ Height ================================
  var _useHeights = useHeights(getKey, null, null),
    _useHeights2 = (0,slicedToArray/* default */.Z)(_useHeights, 4),
    setInstanceRef = _useHeights2[0],
    collectHeight = _useHeights2[1],
    heights = _useHeights2[2],
    heightUpdatedMark = _useHeights2[3];
  // ========================== Visible Calculation =========================
  var _React$useMemo = react.useMemo(function () {
      if (!useVirtual) {
        return {
          scrollHeight: undefined,
          start: 0,
          end: mergedData.length - 1,
          offset: undefined
        };
      }
      // Always use virtual scroll bar in avoid shaking
      if (!inVirtual) {
        var _fillerInnerRef$curre;
        return {
          scrollHeight: ((_fillerInnerRef$curre = fillerInnerRef.current) === null || _fillerInnerRef$curre === void 0 ? void 0 : _fillerInnerRef$curre.offsetHeight) || 0,
          start: 0,
          end: mergedData.length - 1,
          offset: undefined
        };
      }
      var itemTop = 0;
      var startIndex;
      var startOffset;
      var endIndex;
      var dataLen = mergedData.length;
      for (var i = 0; i < dataLen; i += 1) {
        var item = mergedData[i];
        var key = getKey(item);
        var cacheHeight = heights.get(key);
        var currentItemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
        // Check item top in the range
        if (currentItemBottom >= scrollTop && startIndex === undefined) {
          startIndex = i;
          startOffset = itemTop;
        }
        // Check item bottom in the range. We will render additional one item for motion usage
        if (currentItemBottom > scrollTop + height && endIndex === undefined) {
          endIndex = i;
        }
        itemTop = currentItemBottom;
      }
      // When scrollTop at the end but data cut to small count will reach this
      if (startIndex === undefined) {
        startIndex = 0;
        startOffset = 0;
        endIndex = Math.ceil(height / itemHeight);
      }
      if (endIndex === undefined) {
        endIndex = mergedData.length - 1;
      }
      // Give cache to improve scroll experience
      endIndex = Math.min(endIndex + 1, mergedData.length);
      return {
        scrollHeight: itemTop,
        start: startIndex,
        end: endIndex,
        offset: startOffset
      };
    }, [inVirtual, useVirtual, scrollTop, mergedData, heightUpdatedMark, height]),
    scrollHeight = _React$useMemo.scrollHeight,
    start = _React$useMemo.start,
    end = _React$useMemo.end,
    offset = _React$useMemo.offset;
  rangeRef.current.start = start;
  rangeRef.current.end = end;
  // =============================== In Range ===============================
  var maxScrollHeight = scrollHeight - height;
  var maxScrollHeightRef = (0,react.useRef)(maxScrollHeight);
  maxScrollHeightRef.current = maxScrollHeight;
  function keepInRange(newScrollTop) {
    var newTop = newScrollTop;
    if (!Number.isNaN(maxScrollHeightRef.current)) {
      newTop = Math.min(newTop, maxScrollHeightRef.current);
    }
    newTop = Math.max(newTop, 0);
    return newTop;
  }
  var isScrollAtTop = scrollTop <= 0;
  var isScrollAtBottom = scrollTop >= maxScrollHeight;
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
  // ================================ Scroll ================================
  function onScrollBar(newScrollTop) {
    var newTop = newScrollTop;
    syncScrollTop(newTop);
  }
  // When data size reduce. It may trigger native scroll event back to fit scroll position
  function onFallbackScroll(e) {
    var newScrollTop = e.currentTarget.scrollTop;
    if (newScrollTop !== scrollTop) {
      syncScrollTop(newScrollTop);
    }
    // Trigger origin onScroll
    onScroll === null || onScroll === void 0 ? void 0 : onScroll(e);
  }
  // Since this added in global,should use ref to keep update
  var _useFrameWheel = useFrameWheel(useVirtual, isScrollAtTop, isScrollAtBottom, function (offsetY) {
      syncScrollTop(function (top) {
        var newTop = top + offsetY;
        return newTop;
      });
    }),
    _useFrameWheel2 = (0,slicedToArray/* default */.Z)(_useFrameWheel, 2),
    onRawWheel = _useFrameWheel2[0],
    onFireFoxScroll = _useFrameWheel2[1];
  // Mobile touch move
  useMobileTouchMove(useVirtual, componentRef, function (deltaY, smoothOffset) {
    if (originScroll(deltaY, smoothOffset)) {
      return false;
    }
    onRawWheel({
      preventDefault: function preventDefault() {},
      deltaY: deltaY
    });
    return true;
  });
  (0,useLayoutEffect/* default */.Z)(function () {
    // Firefox only
    function onMozMousePixelScroll(e) {
      if (useVirtual) {
        e.preventDefault();
      }
    }
    componentRef.current.addEventListener('wheel', onRawWheel);
    componentRef.current.addEventListener('DOMMouseScroll', onFireFoxScroll);
    componentRef.current.addEventListener('MozMousePixelScroll', onMozMousePixelScroll);
    return function () {
      if (componentRef.current) {
        componentRef.current.removeEventListener('wheel', onRawWheel);
        componentRef.current.removeEventListener('DOMMouseScroll', onFireFoxScroll);
        componentRef.current.removeEventListener('MozMousePixelScroll', onMozMousePixelScroll);
      }
    };
  }, [useVirtual]);
  // ================================= Ref ==================================
  var scrollTo = useScrollTo(componentRef, mergedData, heights, itemHeight, getKey, collectHeight, syncScrollTop, function () {
    var _scrollBarRef$current;
    (_scrollBarRef$current = scrollBarRef.current) === null || _scrollBarRef$current === void 0 ? void 0 : _scrollBarRef$current.delayHidden();
  });
  react.useImperativeHandle(ref, function () {
    return {
      scrollTo: scrollTo
    };
  });
  // ================================ Effect ================================
  /** We need told outside that some list not rendered */
  (0,useLayoutEffect/* default */.Z)(function () {
    if (onVisibleChange) {
      var renderList = mergedData.slice(start, end + 1);
      onVisibleChange(renderList, mergedData);
    }
  }, [start, end, mergedData]);
  // ================================ Render ================================
  var listChildren = useChildren(mergedData, start, end, setInstanceRef, children, sharedConfig);
  var componentStyle = null;
  if (height) {
    componentStyle = (0,objectSpread2/* default */.Z)((0,defineProperty/* default */.Z)({}, fullHeight ? 'height' : 'maxHeight', height), ScrollStyle);
    if (useVirtual) {
      componentStyle.overflowY = 'hidden';
      if (scrollMoving) {
        componentStyle.pointerEvents = 'none';
      }
    }
  }
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), {}, {
      position: 'relative'
    }),
    className: mergedClassName
  }, restProps), /*#__PURE__*/react.createElement(Component, {
    className: "".concat(prefixCls, "-holder"),
    style: componentStyle,
    ref: componentRef,
    onScroll: onFallbackScroll
  }, /*#__PURE__*/react.createElement(es_Filler, {
    prefixCls: prefixCls,
    height: scrollHeight,
    offset: offset,
    onInnerResize: collectHeight,
    ref: fillerInnerRef,
    innerProps: innerProps
  }, listChildren)), useVirtual && /*#__PURE__*/react.createElement(ScrollBar, {
    ref: scrollBarRef,
    prefixCls: prefixCls,
    scrollTop: scrollTop,
    height: height,
    scrollHeight: scrollHeight,
    count: mergedData.length,
    direction: direction,
    onScroll: onScrollBar,
    onStartMove: function onStartMove() {
      setScrollMoving(true);
    },
    onStopMove: function onStopMove() {
      setScrollMoving(false);
    }
  }));
}
var List = /*#__PURE__*/react.forwardRef(RawList);
List.displayName = 'List';
/* harmony default export */ var es_List = (List);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.5.2/node_modules/rc-virtual-list/es/index.js

/* harmony default export */ var rc_virtual_list_es = (es_List);

/***/ })

}]);