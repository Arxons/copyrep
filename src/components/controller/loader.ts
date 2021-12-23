import { IGetNews, IResponse, IGetSources, IOptions, ILoader, voidCallback } from '../interfaces/appInterfaces';



class Loader implements ILoader {
  constructor(
    public baseLink: string,
    public options: IOptions<string>
  ) { }

  getResp(
    { endpoint, options = {} }:
      {
        endpoint: string,
        options?: IOptions<string>
      },
    callback: voidCallback = () => {
      console.error('No callback for GET response');
    },
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: IResponse): IResponse {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: IOptions<string>, endpoint: string): string {
    const urlOptions: IOptions<string> = { ...this.options, ...options };
    let url: string = `${this.baseLink}${endpoint}?`;

    const keys: string[] = Object.keys(urlOptions)
    keys.forEach((key: string) => {

      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: voidCallback, options: IOptions<string> = {}): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json<IGetSources | IGetNews>())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
