export interface IResponse {
  bodyUsed: boolean;
  ok: boolean;
  redirected: boolean;
  status: number;
  statusText: string;
  type: string;
  url: string;
  json<T>(): Promise<T>;
}

export interface IGetSources extends Array<object> {
  sources?: Array<object>;
  length: number;
}

export interface IGetSourcesData {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

export interface IGetNews extends Array<object> {
  totalResults?: number;
  articles?: Array<object>;
  lenght?: number;
}

export interface IGetNewsData {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: NewsSources;
  title: string;
  url: string;
  urlToImage: string;
}

interface NewsSources {
  id: string;
  name: string;
}

export interface ILoader {
  baseLink: string;
  options: IOptions<string>;

  getResp(arg0: object, callback: () => void): void;
  errorHandler(arg0: object): object
  makeUrl(options: object, endpoint: string): string;
  load(method: string, endpoint: string, callback: voidCallback, options: IOptions<string>): void;
}

export interface IUrlOptions {
  options: string;
}

export interface IOptions<T> {
  [apiKey: string]: T
}

export interface GetQuery<T> extends HTMLTemplateElement {
  querySelector<T>(selector: string): Element | HTMLStyleElement
}

export type getData = IGetSources | IGetNews

export type voidCallback = (data: getData) => void