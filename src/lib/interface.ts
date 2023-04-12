/**
 * 方便取值操作
 */
export interface IKeyValue {
  [key: number]: any;
}
/**
 * 会话token信息，服务器端返回，用于特定资源访问后台的凭证
 */
export interface IToken {
  id: number;
  lastUpdate: Date;
  clentIp: string;
  token: string;
}
