//创建获取token

import { IToken } from './interface';
import sc from '../../config/sys';

//因为token存储的是对象，此处默认值也是对象'{}'
export const getToken = (): IToken => JSON.parse(localStorage.getItem(sc.TOKEN_KEY) ?? '{"token":"","refresh_token":""}');

// 创建设置token
export const setToken = (token: IToken) => localStorage.setItem(sc.TOKEN_KEY, JSON.stringify(token));

//创建 清楚 token
export const clearToken = () => localStorage.removeItem(sc.TOKEN_KEY);

//是否登陆
export const isAuth = () => !!getToken().token;
