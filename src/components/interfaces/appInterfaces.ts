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
  load(method: string, endpoint: string, callback: VoidCallback, options: IOptions<string>): void;
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

export enum OptionsConfigValues {
  sources = 'sources',
  everything = 'everything',
  apiKey = '941849fcc9764954b763e931ab561316',
  baseLink = 'https://newsapi.org/v2/'
}

export type GetData = IGetSources | IGetNews

export type VoidCallback = (data: GetData) => void