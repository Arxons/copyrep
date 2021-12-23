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

export interface IGetSources {
  sources?: Array<IGetSourcesData>;
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

export interface IGetNews {
  totalResults?: number;
  articles?: Array<IGetNewsData>;
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

  getResp(config: LoaderConfig, callback: () => void): void;
  errorHandler(res: IResponse): object
  makeUrl(options: IOptions<string>, endpoint: string): string;
  load(method: string, endpoint: string, callback: VoidCallback, options: IOptions<string>): void;
}

export interface IOptions<T> {
  [apiKey: string]: T
}

export interface GetQuery<T> extends HTMLTemplateElement {
  querySelector<T>(selector: string): HTMLStyleElement
}

export interface LoaderConfig {
  endpoint: string;
  options?: IOptions<string>;
}

export enum OptionsConfigValues {
  sources = 'sources',
  everything = 'everything',
  apiKey = 'c7269a97bfc94b9884bb8e305ed67763',
  baseLink = 'https://newsapi.org/v2/'
}

export type Data = IGetSources | IGetNews

export type VoidCallback = (data: Data) => void