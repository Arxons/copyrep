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

export interface IGetSources extends IResponse {
    sources?: Array<object>
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

export interface IGetNews extends IResponse {
    totalResults?: number;
    articles?: Array<object>;
}

export interface IGetNewsData {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: object;
    title: string;
    url: string;
    urlToImage: string;
}

export interface ILoader {
    baseLink: string;
    options: IOptions<string>;

    getResp(arg0: object, arg1: () => void): void;
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

export type getData = IGetSources | IGetNews

export type voidCallback = (data: getData) => void