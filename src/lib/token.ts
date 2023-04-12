import { IToken } from './interface';
import sc from '../../config/sys';

/**
 * token常用方法
 */

/**
 * 获取token
 * @returns IToken
 */
export const getToken = (): IToken => JSON.parse(localStorage.getItem(sc.TOKEN_KEY) ?? '{"token":""}');

/**
 *
 * @param token 创建token
 * @returns
 */
export const setToken = (token: IToken) => localStorage.setItem(sc.TOKEN_KEY, JSON.stringify(token));

/**
 *
 * @returns 清空token
 */
export const clearToken = () => localStorage.removeItem(sc.TOKEN_KEY);
