(self["webpackChunk"] = self["webpackChunk"] || []).push([[866],{

/***/ 27271:
/*!***********************!*\
  !*** ./config/sys.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({
  TOKEN_KEY: 'USER_LOGIN_TOKEN',
  /**
   * HTTP请求超时时间
   */
  HTTP_TIME_OUT: 600000,
  /**
   * 后端服务器请求前缀
   */
  API_PREFIX: '/api',
  /**
   * 幻灯片播放音乐
   */
  // SLIDESHOW_MUSIC: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',

  SLIDESHOW_MUSIC: ''
});

/***/ }),

/***/ 3708:
/*!****************************!*\
  !*** ./src/lib/request.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/regeneratorRuntime.js */ 25359);
/* harmony import */ var _home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 49811);
/* harmony import */ var _home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/objectSpread2.js */ 57213);
/* harmony import */ var _home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ 32066);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! umi */ 310);
/* harmony import */ var umi_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! umi-request */ 50659);
/* harmony import */ var _config_sys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/sys */ 27271);
/* harmony import */ var _lib_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/token */ 96754);










/**
 * 对umi-request进行二次封装，主要方便以下二点
 * 1、对request请求封装携带token
 * 2、统一错误处理机制
 */
var returnCodeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};

/**
 * 请求服务器时统一错误处理
 * @param error Response
 * @returns
 */
var errorHandler = function errorHandler(error) {
  var response = error;
  if (response && response.status) {
    var errorText = returnCodeMessage[response.status] || response.statusText;
    var status = response.status,
      url = response.url;
    // 处理参数问题
    var noParamUrl = url;
    if (url.indexOf('?') !== -1) {
      noParamUrl = url.substring(0, url.indexOf('?'));
    }

    // 如果调用接口去获取token报错,则证明是账号有误
    if (url.indexOf('/login/account') !== -1) {
      antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"].error */ .Z.error({
        // message: `请求错误 [20002]: ${noParamUrl}`,
        message: '账号不存在或密码错误'
        // description: '账号不存在或密码错误',
      });

      return response;
    }
    if (status === 401) {
      antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"].warning */ .Z.warning({
        message: '请重新登陆!'
      });
      (0,_lib_token__WEBPACK_IMPORTED_MODULE_6__/* .clearToken */ .qz)();
      umi__WEBPACK_IMPORTED_MODULE_3__.history.push('/gp/login');
    } else {
      antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"].error */ .Z.error({
        message: "\u8BF7\u6C42\u9519\u8BEF [".concat(status, "]: ").concat(noParamUrl),
        description: errorText
      });
    }
  } else if (!response) {
    antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"].error */ .Z.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常'
    });
  }
  return Promise.reject(error);
};
/**
 * 配置request请求时的默认参数
 */
var request = (0,umi_request__WEBPACK_IMPORTED_MODULE_4__/* .extend */ .l7)({
  prefix: _config_sys__WEBPACK_IMPORTED_MODULE_5__/* ["default"].API_PREFIX */ .Z.API_PREFIX,
  // 路径前缀
  errorHandler: errorHandler,
  // 默认错误处理
  credentials: 'include',
  // 默认请求是否带上cookie
  timeout: _config_sys__WEBPACK_IMPORTED_MODULE_5__/* ["default"].HTTP_TIME_OUT */ .Z.HTTP_TIME_OUT
});
/**
 * 所以请求拦截器
 */
request.interceptors.request.use(function (url, options) {
  var req = {
    url: url,
    options: _home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2___default()(_home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2___default()({}, options), {}, {
      headers: {
        Authorization: (0,_lib_token__WEBPACK_IMPORTED_MODULE_6__/* .getToken */ .LP)().token
      }
    })
  };
  console.log('请求发送:');
  console.log(req);
  return req;
});
/**
 * 所有响应拦截器
 */
request.interceptors.response.use( /*#__PURE__*/function () {
  var _ref = _home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee(response, options) {
    var url, status, method, params;
    return _home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log('请求返回:');
          console.log(response);
          url = response.url, status = response.status;
          method = options.method, params = options.params; // 获取token的接口,正确返回直接放过
          if (!(url.indexOf('/system/oauth/token') !== -1)) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", response);
        case 6:
          if (!(url.indexOf('/download/') !== -1)) {
            _context.next = 15;
            break;
          }
          if (!(status !== 200)) {
            _context.next = 11;
            break;
          }
          antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"].error */ .Z.error({
            message: "\u4E0B\u8F7D\u51FA\u9519 : ".concat(url)
          });
          _context.next = 14;
          break;
        case 11:
          _context.next = 13;
          return response.clone().blob();
        case 13:
          return _context.abrupt("return", _context.sent);
        case 14:
          return _context.abrupt("return", null);
        case 15:
          if (!(parseInt(String(status / 100)) == 2 && status % 100 > 0)) {
            _context.next = 17;
            break;
          }
          return _context.abrupt("return", undefined);
        case 17:
          return _context.abrupt("return", response);
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
/* harmony default export */ __webpack_exports__["Z"] = (request);

/***/ }),

/***/ 96754:
/*!**************************!*\
  !*** ./src/lib/token.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LP": function() { return /* binding */ getToken; },
/* harmony export */   "o4": function() { return /* binding */ setToken; },
/* harmony export */   "qz": function() { return /* binding */ clearToken; }
/* harmony export */ });
/* harmony import */ var _config_sys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/sys */ 27271);


/**
 * token常用方法
 */

/**
 * 获取token
 * @returns IToken
 */
var getToken = function getToken() {
  var _localStorage$getItem;
  return JSON.parse((_localStorage$getItem = localStorage.getItem(_config_sys__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TOKEN_KEY */ .Z.TOKEN_KEY)) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : '{"token":""}');
};

/**
 *
 * @param token 创建token
 * @returns
 */
var setToken = function setToken(token) {
  return localStorage.setItem(_config_sys__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TOKEN_KEY */ .Z.TOKEN_KEY, JSON.stringify(token));
};

/**
 *
 * @returns 清空token
 */
var clearToken = function clearToken() {
  return localStorage.removeItem(_config_sys__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TOKEN_KEY */ .Z.TOKEN_KEY);
};

/***/ }),

/***/ 84575:
/*!*****************************************!*\
  !*** ./src/pages/index.tsx + 4 modules ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(93525);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(54306);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/spin/index.js + 2 modules
var spin = __webpack_require__(1283);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(93236);
;// CONCATENATED MODULE: ./src/components/waterfall/index.css?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var waterfallmodules = ({"box":"box___CkXLi","rowBox":"rowBox___GN3KZ","col":"col___auaqy","colImg":"colImg___vzbqg","lightBoxExif":"lightBoxExif___CQhE7","headerRight":"headerRight___rIMiV","loading":"loading___Be02f","dispCity":"dispCity___MexHL"});
// EXTERNAL MODULE: ./node_modules/.pnpm/yet-another-react-lightbox@3.11.3/node_modules/yet-another-react-lightbox/dist/styles.css
var styles = __webpack_require__(43745);
// EXTERNAL MODULE: ./node_modules/.pnpm/yet-another-react-lightbox@3.11.3/node_modules/yet-another-react-lightbox/dist/plugins/thumbnails/thumbnails.css
var thumbnails = __webpack_require__(34306);
// EXTERNAL MODULE: ./node_modules/.pnpm/yet-another-react-lightbox@3.11.3/node_modules/yet-another-react-lightbox/dist/plugins/captions/captions.css
var captions = __webpack_require__(45500);
;// CONCATENATED MODULE: ./src/lib/utils.ts
/**
 * 获取当前时间戳
 */
var timeStamp = function timeStamp() {
  return Date.parse(new Date().toString());
};
/**
 * 格式化日期
 */
var timeFormat = function timeFormat(time, format) {
  var date = new Date(time);
  var year = '0' + date.getFullYear();
  var month = '0' + (date.getMonth() + 1);
  var day = '0' + date.getDate();
  var hour = '0' + date.getHours();
  var minute = '0' + date.getMinutes();
  var second = '0' + date.getSeconds();
  if (format.includes('y')) {
    format = format.replace(/y+/, year.slice(-format.match(/y+/)[0].length));
  }
  if (format.includes('M')) {
    format = format.replace(/M+/, month.slice(-format.match(/M+/)[0].length));
  }
  if (format.includes('d')) {
    format = format.replace(/d+/, day.slice(-format.match(/d+/)[0].length));
  }
  if (format.includes('h')) {
    format = format.replace(/h+/, hour.slice(-format.match(/h+/)[0].length));
  }
  if (format.includes('m')) {
    format = format.replace(/m+/, minute.slice(-format.match(/m+/)[0].length));
  }
  if (format.includes('s')) {
    format = format.replace(/s+/, second.slice(-format.match(/s+/)[0].length));
  }
  return format;
};

/**
 * 格式化当前日期
 */
var timeFormatCurrent = function timeFormatCurrent(format) {
  var date = new Date();
  var year = '0' + date.getFullYear();
  var month = '0' + (date.getMonth() + 1);
  var day = '0' + date.getDate();
  var hour = '0' + date.getHours();
  var minute = '0' + date.getMinutes();
  var second = '0' + date.getSeconds();
  if (format.includes('y')) {
    format = format.replace(/y+/, year.slice(-format.match(/y+/)[0].length));
  }
  if (format.includes('M')) {
    format = format.replace(/M+/, month.slice(-format.match(/M+/)[0].length));
  }
  if (format.includes('d')) {
    format = format.replace(/d+/, day.slice(-format.match(/d+/)[0].length));
  }
  if (format.includes('h')) {
    format = format.replace(/h+/, hour.slice(-format.match(/h+/)[0].length));
  }
  if (format.includes('m')) {
    format = format.replace(/m+/, minute.slice(-format.match(/m+/)[0].length));
  }
  if (format.includes('s')) {
    format = format.replace(/s+/, second.slice(-format.match(/s+/)[0].length));
  }
  return format;
};

/**
 * 获取文件扩展名
 */
var fileExt = function fileExt(fileName) {
  return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.lastIndexOf('.') + 1 + 3);
};
// EXTERNAL MODULE: ./node_modules/.pnpm/react-infinite-scroll-component@6.1.0/node_modules/react-infinite-scroll-component/dist/index.es.js
var index_es = __webpack_require__(55282);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-grid-gallery@1.0.0/node_modules/react-grid-gallery/dist/react-grid-gallery.umd.js
var react_grid_gallery_umd = __webpack_require__(93669);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(25359);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(49811);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./src/lib/request.ts
var request = __webpack_require__(3708);
;// CONCATENATED MODULE: ./src/services/item.ts



function queryItems(_x) {
  return _queryItems.apply(this, arguments);
}
function _queryItems() {
  _queryItems = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(page) {
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", request/* default.get */.Z.get("/index?currentPage=".concat(page)).then(function (data) {
            return data;
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _queryItems.apply(this, arguments);
}
// EXTERNAL MODULE: ./src/services/admin.ts
var admin = __webpack_require__(83862);
// EXTERNAL MODULE: ./node_modules/.pnpm/yet-another-react-lightbox@3.11.3/node_modules/yet-another-react-lightbox/dist/index.js
var dist = __webpack_require__(19025);
// EXTERNAL MODULE: ./node_modules/.pnpm/yet-another-react-lightbox@3.11.3/node_modules/yet-another-react-lightbox/dist/plugins/fullscreen/index.js
var fullscreen = __webpack_require__(48433);
// EXTERNAL MODULE: ./node_modules/.pnpm/yet-another-react-lightbox@3.11.3/node_modules/yet-another-react-lightbox/dist/plugins/slideshow/index.js
var slideshow = __webpack_require__(51196);
// EXTERNAL MODULE: ./node_modules/.pnpm/yet-another-react-lightbox@3.11.3/node_modules/yet-another-react-lightbox/dist/plugins/zoom/index.js
var zoom = __webpack_require__(62517);
// EXTERNAL MODULE: ./node_modules/.pnpm/yet-another-react-lightbox@3.11.3/node_modules/yet-another-react-lightbox/dist/plugins/captions/index.js
var plugins_captions = __webpack_require__(75999);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(62086);
;// CONCATENATED MODULE: ./src/components/waterfall/index.tsx






















/* harmony default export */ var waterfall = (function () {
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react.useState)(1),
    _useState4 = slicedToArray_default()(_useState3, 2),
    page = _useState4[0],
    setPage = _useState4[1];
  var _useState5 = (0,react.useState)(true),
    _useState6 = slicedToArray_default()(_useState5, 2),
    hasMore = _useState6[0],
    setHasMore = _useState6[1];
  var _useState7 = (0,react.useState)([]),
    _useState8 = slicedToArray_default()(_useState7, 2),
    data = _useState8[0],
    setData = _useState8[1];
  var ref = (0,react.useRef)(null);
  var loadMoreData = function loadMoreData() {
    var photoData = queryItems(page);
    if (hasMore == false) {
      return;
    }
    if (loading) {
      return;
    }
    setLoading(true);
    photoData.then(function (res) {
      res.data.data.forEach(function (element) {
        element.src = element.url;
        //element.thumbnailCaption = <span style={{ color: '#cbb878', textAlign: 'center', display: 'block', background: '#0e232d', paddingTop: '20px', paddingBottom: '20px' }}>{element.title}</span>;
        element.customOverlay = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: 'white'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              style: {
                textAlign: "center"
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                children: element.city
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                style: {
                  fontSize: 18,
                  marginTop: 15,
                  color: "#b7b7b7"
                },
                children: element.photoTouristSpot
              })]
            })
          })
        });
      });
      setLoading(false);
      setData([].concat(toConsumableArray_default()(data), toConsumableArray_default()(res.data.data)));
      if (res.data.data.length == 0) {
        setHasMore(false);
      } else {
        setHasMore(true);
        setPage(page + 1);
      }
    })["catch"](function (err) {
      console.log('err = ', err);
    });
  };
  (0,react.useEffect)(function () {
    loadMoreData();
  }, []);
  var handleClick = function handleClick(index, item) {};
  var handleClick2 = function handleClick2(index, item) {
    setIndex(index);
    (0,admin/* click */.V4)(item.id);
  };

  // const audio = new Audio();
  // audio.src = sys.SLIDESHOW_MUSIC;

  var slides = data.map(function (obj) {
    return {
      src: obj.url,
      fileName: 'test.jpg',
      id: obj.id,
      title: obj.city + ' / ' + obj.photoTouristSpot,
      downloadUrl: obj.srcImgURL,
      downloadFilename: obj.downloadFilename,
      description: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: waterfallmodules.lightBoxExif,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            style: {
              width: '210px'
            },
            children: ["\u62CD\u6444\u65F6\u95F4\uFF1A", timeFormat(obj.photoTime, 'yyyy-MM-dd hh:mm')]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            style: {
              width: '160px'
            },
            children: ["\u5206\u8FA8\u7387\uFF1A", obj.resolution]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            style: {
              width: '110px'
            },
            children: ["\u5927\u5C0F\uFF1A", obj.size, "M"]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            style: {
              width: '270px'
            },
            children: ["\u76F8\u673A\u54C1\u724C\uFF1A", obj.cameraBrand]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            style: {
              width: '100px'
            },
            children: ["\u5149\u5708\uFF1AF", obj.AValue]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            style: {
              width: '110px'
            },
            children: ["ISO:", obj.isoValue]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            style: {
              width: '160px'
            },
            children: ["\u66DD\u5149\u8865\u507F\uFF1A", obj.evValue]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            style: {
              width: '110px'
            },
            children: ["\u7126\u8DDD\uFF1A", obj.FValue, "MM"]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            style: {
              width: '270px'
            },
            children: ["\u76F8\u673A\u955C\u5934\uFF1A", obj.lens]
          })]
        })]
      })
    };
  });
  var _useState9 = (0,react.useState)(-1),
    _useState10 = slicedToArray_default()(_useState9, 2),
    index = _useState10[0],
    setIndex = _useState10[1];
  var DownloadIcon = (0,dist/* createIcon */.U2)('DownloadIcon', /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
    d: "M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z"
  }));
  function downloadImage(url, fileName) {
    fetch(url).then(function (response) {
      return response.blob();
    }).then(function (blob) {
      var link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      link.target = "_blank";
      link.click();
      window.URL.revokeObjectURL(link.href);
    });
  }
  function DownloadButton() {
    var _useLightboxState = (0,dist/* useLightboxState */.oc)(),
      currentSlide = _useLightboxState.currentSlide;
    var downloadUrl = '';
    downloadUrl = (currentSlide === null || currentSlide === void 0 ? void 0 : currentSlide.downloadUrl) || (currentSlide && (0,dist/* isImageSlide */.QB)(currentSlide) ? currentSlide.src : 'undefined');
    var fileName = (currentSlide === null || currentSlide === void 0 ? void 0 : currentSlide.downloadFilename) || "".concat(timeStamp(), ".").concat(fileExt(downloadUrl));
    var handleDownload = function handleDownload() {
      //window.location.href = downloadUrl;
      if (downloadUrl) {
        //fileDownload(downloadUrl, fileName);
        downloadImage(downloadUrl, fileName);
      }
    };
    return /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* IconButton */.hU, {
      label: "Download",
      icon: DownloadIcon,
      onClick: handleDownload
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: waterfallmodules.box,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(index_es/* default */.Z, {
      dataLength: data.length,
      next: loadMoreData,
      style: {
        overflow: "hidden"
      },
      hasMore: hasMore,
      loader: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: waterfallmodules.loading,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.Z, {})
      })
      //endMessage={<Divider plain>已经是全部了, 没有更多啦 🤐</Divider>}
      ,
      scrollableTarget: "scrollableDiv",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: waterfallmodules.rowBox,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_grid_gallery_umd.Gallery, {
          rowHeight: 600,
          margin: 3,
          enableImageSelection: false,
          images: data,
          onClick: handleClick2
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* default */.ZP, {
      controller: {
        ref: ref
      },
      slides: slides,
      open: index >= 0,
      index: index,
      close: function close() {
        return setIndex(-1);
      },
      on: {
        slideshowStart: function slideshowStart() {
          //audio.play();
        },
        slideshowStop: function slideshowStop() {
          // audio.pause();
        },
        view: function view(showIndex) {
          (0,admin/* click */.V4)(slides[showIndex.index].id);
        }
      }
      // enable optional lightbox plugins
      ,
      plugins: [fullscreen/* default */.Z, slideshow/* default */.Z, zoom/* default */.Z, plugins_captions/* default */.Z],
      toolbar: {
        buttons: [/*#__PURE__*/(0,jsx_runtime.jsx)(DownloadButton, {}, "download"), 'close']
      }
    })]
  });
});
// EXTERNAL MODULE: ./src/lib/token.ts
var token = __webpack_require__(96754);
;// CONCATENATED MODULE: ./src/pages/index.tsx


/* harmony default export */ var pages = (function () {
  var tk = {
    token: 'asdfasdfasdfasdfasdf',
    id: 23,
    clentIp: '127.0.0.1',
    lastUpdate: new Date()
  };
  (0,token/* setToken */.o4)(tk);

  // notification.config({
  //   placement: 'bottomRight',
  //   bottom: 500,
  //   duration: 3,
  //   rtl: true,
  // });

  // notification.open({
  //   message: 'Notification Title',
  //   description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  //   onClick: () => {
  //     console.log('Notification Clicked!');
  //   },
  // });

  var view = waterfall();
  return view;
});

/***/ }),

/***/ 83862:
/*!*******************************!*\
  !*** ./src/services/admin.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jp": function() { return /* binding */ deleteById; },
/* harmony export */   "Ju": function() { return /* binding */ savePhoto; },
/* harmony export */   "V4": function() { return /* binding */ click; },
/* harmony export */   "uT": function() { return /* binding */ queryPhotos; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/regeneratorRuntime.js */ 25359);
/* harmony import */ var _home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 49811);
/* harmony import */ var _home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/request */ 3708);



function queryPhotos(_x) {
  return _queryPhotos.apply(this, arguments);
}
function _queryPhotos() {
  _queryPhotos = _home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee(page) {
    return _home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", _lib_request__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get("/api/admin/photoList?currentPage=".concat(page)).then(function (data) {
            return data;
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _queryPhotos.apply(this, arguments);
}
function savePhoto(_x2) {
  return _savePhoto.apply(this, arguments);
}
function _savePhoto() {
  _savePhoto = _home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee2(formDate) {
    return _home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", _lib_request__WEBPACK_IMPORTED_MODULE_2__/* ["default"].post */ .Z.post("/api/admin/addPhoto", {
            data: formDate //上传进度事件的回调函数
          }).then(function (res) {
            return res;
          }));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _savePhoto.apply(this, arguments);
}
function click(_x3) {
  return _click.apply(this, arguments);
}
function _click() {
  _click = _home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee3(id) {
    return _home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", _lib_request__WEBPACK_IMPORTED_MODULE_2__/* ["default"].post */ .Z.post("/api/admin/click", {
            data: {
              id: id
            }
          }).then(function (res) {
            return res;
          }));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _click.apply(this, arguments);
}
function deleteById(_x4) {
  return _deleteById.apply(this, arguments);
}
function _deleteById() {
  _deleteById = _home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee4(id) {
    return _home_runner_work_blog_blog_node_modules_pnpm_babel_runtime_7_21_0_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", _lib_request__WEBPACK_IMPORTED_MODULE_2__/* ["default"]["delete"] */ .Z["delete"]("/api/admin/deleteById", {
            data: {
              id: id
            }
          }).then(function (res) {
            return res;
          }));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _deleteById.apply(this, arguments);
}

/***/ }),

/***/ 57002:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (function() {

/* (ignored) */

/***/ })

}]);