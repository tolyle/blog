"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[717],{

/***/ 16092:
/*!*******************************************!*\
  !*** ./src/layouts/index.tsx + 2 modules ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Layout; }
});

;// CONCATENATED MODULE: ./src/layouts/index.css?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var layoutsmodules = ({"box":"box___nOxYv","headerBox":"headerBox___oGp4l","headerBoxWrap":"headerBoxWrap___VgggR","headerLeft":"headerLeft___gmzyY","logo":"logo___GRmwv","fixedPadding":"fixedPadding___rSFHE","navLink":"navLink___Dpdi0","navLinkActive":"navLinkActive___zNvhK","mobile":"mobile___rcVu8","web":"web___L9771","menu":"menu___YTCPD","menuBar":"menuBar___O7OBh","menuTitle":"menuTitle___RaHcw","search":"search___BjV5u","archive":"archive___Fql53","pencil":"pencil___YDxDd","contact":"contact___NByEO","about":"about___pgJV2","home":"home___DfTvu","para":"para___yNrrj","open":"open___C6jui","container":"container___Ee0RM"});
;// CONCATENATED MODULE: ./src/assets/logo.png
var logo_namespaceObject = "data:image/png;base64,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";
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/select/index.js + 36 modules
var es_select = __webpack_require__(99306);
// EXTERNAL MODULE: ./node_modules/.pnpm/jquery@3.7.0/node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(55522);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 13 modules
var _umi_production_exports = __webpack_require__(310);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(93236);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(62086);
;// CONCATENATED MODULE: ./src/layouts/index.tsx








function Layout() {
  (0,react.useEffect)(function () {
    jquery_default()('#id1').on('click', function () {
      jquery_default()('#id2').toggleClass(layoutsmodules.open);
    });

    // setting default language
    var lang = navigator.language;
    console.log(lang);
    if (lang === 'zh-CN') {
      (0,_umi_production_exports.setLocale)('zh-CN');
    } else {
      (0,_umi_production_exports.setLocale)('en-US');
    }
  }, []);
  function componentDidMount() {
    console.log('componentDidMount');
  }
  var fun1 = function fun1() {
    alert(1);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "application",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.Helmet, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("script", {
        id: "LA_COLLECT",
        src: "//sdk.51.la/js-sdk-pro.min.js?id=3F0jKPFdPEYMn3mi&ck=3F0jKPFdPEYMn3mi&autoTrack=true&hashMode=true"
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: layoutsmodules.box,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: layoutsmodules.web,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: layoutsmodules.headerBox,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: layoutsmodules.headerBoxWrap,
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: layoutsmodules.headerLeft,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.NavLink, {
                to: "/",
                className: function className(_ref) {
                  var isActive = _ref.isActive;
                  return isActive ? "".concat(layoutsmodules.navLink, " ").concat(layoutsmodules.navLinkActive) : layoutsmodules.navLink;
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.FormattedMessage, {
                  id: "photos"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.NavLink, {
                to: "/about",
                className: function className(_ref2) {
                  var isActive = _ref2.isActive;
                  return isActive ? "".concat(layoutsmodules.navLink, " ").concat(layoutsmodules.navLinkActive) : layoutsmodules.navLink;
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.FormattedMessage, {
                  id: "about"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.NavLink, {
                to: "/linkme",
                className: function className(_ref3) {
                  var isActive = _ref3.isActive;
                  return isActive ? "".concat(layoutsmodules.navLink, " ").concat(layoutsmodules.navLinkActive) : layoutsmodules.navLink;
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.FormattedMessage, {
                  id: "linkme"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.NavLink, {
                to: "/photos",
                className: function className(_ref4) {
                  var isActive = _ref4.isActive;
                  return isActive ? "".concat(layoutsmodules.navLink, " ").concat(layoutsmodules.navLinkActive) : layoutsmodules.navLink;
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.FormattedMessage, {
                  id: "publish"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.NavLink, {
                to: "/admin/list",
                className: function className(_ref5) {
                  var isActive = _ref5.isActive;
                  return isActive ? "".concat(layoutsmodules.navLink, " ").concat(layoutsmodules.navLinkActive) : layoutsmodules.navLink;
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.FormattedMessage, {
                  id: "management"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: layoutsmodules.headerRight,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                src: logo_namespaceObject,
                className: layoutsmodules.logo,
                style: {
                  display: 'none'
                }
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(es_select/* default */.Z, {
                defaultValue: (0,_umi_production_exports.getLocale)(),
                placeholder: "\u9009\u62E9\u8BED\u8A00",
                style: {
                  width: 100
                },
                onChange: function onChange(v) {
                  (0,_umi_production_exports.setLocale)(v, false);
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
                  value: "zh-CN",
                  children: "\u4E2D\u6587"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default.Option */.Z.Option, {
                  value: "en-US",
                  children: "English"
                })]
              })]
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: layoutsmodules.fixedPadding
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
        className: layoutsmodules.menu,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          title: "home",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "#",
            id: "id1",
            className: "".concat(layoutsmodules.menuButton, " ").concat(layoutsmodules.home, " "),
            children: "menu"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: layoutsmodules.menuTitle,
          children: "Bob Wang"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
        id: "id2",
        className: layoutsmodules.menuBar,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "#",
            className: layoutsmodules.menuButton,
            children: "Menu"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "/",
            children: "\u7167\u7247"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "/about",
            children: "\u5173\u4E8E\u6211"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "/linkme",
            children: "\u8054\u7CFB\u65B9\u5F0F"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.Outlet, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          textAlign: 'center',
          paddingTop: "80px",
          paddingBottom: "80px",
          background: "#0e232d"
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            marginTop: "10px",
            color: '#aea194',
            fontSize: "16px"
          },
          children: "Made by Bob Wang"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            marginTop: "15px",
            color: '#6a828b',
            fontSize: "14px"
          },
          children: "2023 - ALL RIGHTS RESERVED - BOB WANG"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            marginTop: "15px",
            color: '#6a828b',
            fontSize: "14px"
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "http://beian.miit.gov.cn",
            style: {
              marginTop: "15px",
              color: '#6a828b',
              fontSize: "14px"
            },
            children: "\u7CA4ICP\u59072023049153\u53F7"
          })
        })]
      })]
    })]
  });
}

/***/ })

}]);