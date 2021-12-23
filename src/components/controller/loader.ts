import { IGetNews, IResponse, IGetSources, IOptions, ILoader, VoidCallback, LoaderConfig } from '../interfaces/types';

class Loader implements ILoader {
  baseLink: string;
  options: IOptions<string>;

  constructor(baseLink: string, options: IOptions<string>) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} }: LoaderConfig,
    callback: VoidCallback = () => {
      console.error('No callback for GET response');
    },
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: IResponse): IResponse {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404) {
        console.warn(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      }
      throw Error(res.statusText);
    }
    return res;
  }

  makeUrl(options: IOptions<string>, endpoint: string): string {
    const urlOptions: IOptions<string> = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    const keys: string[] = Object.keys(urlOptions);
    keys.forEach((key: string) => {

      url += `${key}=${urlOptions[key]}&`;
    });
    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: VoidCallback, options: IOptions<string> = {}): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json<IGetSources | IGetNews>())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
