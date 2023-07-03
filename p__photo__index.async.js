(self["webpackChunk"] = self["webpackChunk"] || []).push([[675],{

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

/***/ 60209:
/*!***********************************************!*\
  !*** ./src/pages/photo/index.tsx + 1 modules ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ photo; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(57213);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(93525);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(54306);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/tag/index.js + 3 modules
var tag = __webpack_require__(29200);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/form/index.js + 21 modules
var es_form = __webpack_require__(13315);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/input/index.js + 17 modules
var input = __webpack_require__(64437);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/button/index.js
var es_button = __webpack_require__(32333);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(93236);
;// CONCATENATED MODULE: ./src/pages/photo/index.css?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var photomodules = ({"box":"box___zRzLh"});
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4/node_modules/@ant-design/icons/es/icons/UploadOutlined.js + 1 modules
var UploadOutlined = __webpack_require__(40890);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/upload/index.js + 40 modules
var upload = __webpack_require__(85230);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.3/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(2808);
// EXTERNAL MODULE: ./src/services/admin.ts
var admin = __webpack_require__(83862);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(62086);
;// CONCATENATED MODULE: ./src/pages/photo/index.tsx











var Dragger = upload/* default.Dragger */.Z.Dragger;
/* harmony default export */ var photo = (function () {
  var CheckableTag = tag/* default.CheckableTag */.Z.CheckableTag;
  var tagsData = ['人像', '风光', '建筑', '城市', '活动', '美食', '宠物'];
  var _useState = (0,react.useState)(''),
    _useState2 = slicedToArray_default()(_useState, 2),
    selectedTags = _useState2[0],
    setSelectedTags = _useState2[1];
  var inputRef = (0,react.useRef)(null);
  var editInputRef = (0,react.useRef)(null);
  var _useState3 = (0,react.useState)(''),
    _useState4 = slicedToArray_default()(_useState3, 2),
    inputValue = _useState4[0],
    setInputValue = _useState4[1];
  var _useState5 = (0,react.useState)(['Unremovable', 'Tag 2', 'Tag 3']),
    _useState6 = slicedToArray_default()(_useState5, 2),
    tags = _useState6[0],
    setTags = _useState6[1];
  var _useState7 = (0,react.useState)(1),
    _useState8 = slicedToArray_default()(_useState7, 2),
    percent = _useState8[0],
    setPercent = _useState8[1];
  var _useState9 = (0,react.useState)([]),
    _useState10 = slicedToArray_default()(_useState9, 2),
    fileList = _useState10[0],
    setFileList = _useState10[1];
  var _useState11 = (0,react.useState)(false),
    _useState12 = slicedToArray_default()(_useState11, 2),
    uploading = _useState12[0],
    setUploading = _useState12[1];
  var _Form$useForm = es_form/* default.useForm */.Z.useForm(),
    _Form$useForm2 = slicedToArray_default()(_Form$useForm, 1),
    formInstance = _Form$useForm2[0];
  var props = {
    multiple: true,
    onRemove: function onRemove(file) {
      var index = fileList.indexOf(file);
      var newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: function beforeUpload(file, fileList1) {
      console.log('选中的图片数量:' + fileList1.length);
      setFileList([].concat(toConsumableArray_default()(fileList), toConsumableArray_default()(fileList1)));
      return false;
    },
    fileList: fileList
  };
  onUploadProgress: (function (progressEvent) {
    console.log(progressEvent);
    console.log(Math.round(progressEvent.loaded / progressEvent.total * 100));
  });
  var handleUpload = function handleUpload() {
    console.log('要上传的文件数量' + fileList.length);

    //表单元素都通过验证后
    formInstance.validateFields().then(function (values) {
      var formData = new FormData();
      fileList.forEach(function (file) {
        formData.append('files', file);
      });
      formData.append('title', values.title);
      formData.append('city', values.city);
      formData.append('tags', selectedTags);
      formData.append('spot', values.spot);
      setUploading(true);
      (0,admin/* savePhoto */.Ju)(formData).then(function (res) {
        if (res.code == 200) {
          message/* default.success */.ZP.success('保存成功');
          setUploading(false);
          setFileList([]);
        } else {
          message/* default.error */.ZP.error(res.statusText);
        }
      });
    });
  };
  var handleChange = function handleChange(tag, checked) {
    var nextSelectedTags = checked ? [].concat(toConsumableArray_default()(selectedTags), [tag]) : selectedTags.filter(function (t) {
      return t !== tag;
    });
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };
  var handleInputChange = function handleInputChange(e) {
    setInputValue(e.target.value);
  };
  var tagInputStyle = {
    width: 78,
    verticalAlign: 'top'
  };
  var tagPlusStyle = {
    background: '#666',
    borderStyle: 'dashed'
  };
  var onFinish = function onFinish(values) {
    console.log('Success:', values);
  };
  var onFinishFailed = function onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  };
  var _useState13 = (0,react.useState)([]),
    _useState14 = slicedToArray_default()(_useState13, 2),
    slist2 = _useState14[0],
    setSlist2 = _useState14[1];
  var showModal = function showModal() {
    setSlist2([].concat(toConsumableArray_default()(slist2), ['s' + new Date()]));
  };
  var showModal1 = function showModal1() {
    console.log(slist2 === null || slist2 === void 0 ? void 0 : slist2.length);
    slist2.forEach(function (s) {
      console.log(s);
    });
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: photomodules.box,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.Z, {
      name: "basic",
      form: formInstance,
      labelCol: {
        span: 2
      },
      initialValues: {
        remember: true
      },
      onFinish: onFinish,
      onFinishFailed: onFinishFailed,
      autoComplete: "off",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item, {
        label: "\u6807\u9898",
        name: "title",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
          value: "\u65E0\u6807\u9898"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item, {
        label: "\u62CD\u6444\u57CE\u5E02",
        name: "city",
        rules: [{
          required: true,
          message: '拍摄照片所在城市'
        }],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {})
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item, {
        label: "\u666F\u70B9",
        name: "spot",
        rules: [{
          required: true,
          message: '景点名称'
        }],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {})
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item, {
        label: "Tag",
        name: "tag",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: tagsData.map(function (tag) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(CheckableTag, {
              style: {
                fontSize: 14
              },
              checked: selectedTags.includes(tag),
              onChange: function onChange(checked) {
                return handleChange(tag, checked);
              },
              children: tag
            }, tag);
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(upload/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, props), {}, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(UploadOutlined/* default */.Z, {}),
          children: "\u9009\u62E9\u7167\u7247"
        })
      })), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        type: "primary",
        onClick: handleUpload,
        disabled: fileList.length === 0,
        loading: uploading,
        style: {
          marginTop: 16
        },
        children: uploading ? '上传中' : '开始上传'
      })]
    })
  });
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