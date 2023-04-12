export interface IKeyValue {
  [key: number]: any;
}

export interface IToken {
  id: number;
  lastUpdate: Date;
  clentIp: string;
  token: string;
}
