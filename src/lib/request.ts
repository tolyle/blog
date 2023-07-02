import { notification } from 'antd';
import { history } from 'umi';
import { IKeyValue } from './interface';
import { extend } from 'umi-request';
import sc from '../../config/sys';
import { getToken } from '../lib/token';
import { clearToken } from '../lib/token';



/**
 * 对umi-request进行二次封装，主要方便以下二点
 * 1、对request请求封装携带token
 * 2、统一错误处理机制
 */
const returnCodeMessage: IKeyValue = {
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
  504: '网关超时。',
};

/**
 * 请求服务器时统一错误处理
 * @param error Response
 * @returns
 */
const errorHandler = (error: Response | any) => {
  const response = error;
  if (response && response.status) {
    const errorText = returnCodeMessage[response.status] || response.statusText;
    const { status, url } = response;
    // 处理参数问题
    let noParamUrl = url;
    if (url.indexOf('?') !== -1) {
      noParamUrl = url.substring(0, url.indexOf('?'));
    }

    // 如果调用接口去获取token报错,则证明是账号有误
    if (url.indexOf('/login/account') !== -1) {
      notification.error({
        // message: `请求错误 [20002]: ${noParamUrl}`,
        message: '账号不存在或密码错误',
        // description: '账号不存在或密码错误',
      });
      return response;
    }

    if (status === 401) {
      notification.warning({
        message: '请重新登陆!',
      });
      clearToken();
      history.push('/gp/login');
    } else {
      notification.error({
        message: `请求错误 [${status}]: ${noParamUrl}`,
        description: errorText,
      });
    }
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  return Promise.reject(error);
};
/**
 * 配置request请求时的默认参数
 */
const request = extend({
  prefix: sc.API_PREFIX, // 路径前缀
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
  timeout: sc.HTTP_TIME_OUT,
});
/**
 * 所以请求拦截器
 */
request.interceptors.request.use((url, options) => {
  const req = {
    url,
    options: {
      ...options,
      headers: {
        Authorization: getToken().token,
      },
    },
  };
  console.log('请求发送:');
  console.log(req);

  return req;
});
/**
 * 所有响应拦截器
 */
request.interceptors.response.use(async (response: Response | any, options) => {
  console.log('请求返回:');
  console.log(response);
  const { url, status } = response;
  const { method, params } = options;
  // 获取token的接口,正确返回直接放过
  if (url.indexOf('/system/oauth/token') !== -1) {
    return response;
  }

  // 返回下载流的问题,可以在url添加标识
  if (url.indexOf('/download/') !== -1) {
    if (status !== 200) {
      notification.error({
        message: `下载出错 : ${url}`,
      });
    } else {
      return await response.clone().blob();
    }
    return null;
  }

  if (parseInt(String(status / 100)) == 2 && status % 100 > 0) {
    return undefined;
  }

  // const data = await response.clone().json();
  // console.log(data)
  // if ((parseInt(status / 100) !== 2 && data.code !== 0)) {
  //   notification.error({
  //     message: data.message,
  //   });
  // }

  return response;
});


export default request;
