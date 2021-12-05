import { IGetNews, IResponse, IGetSources, IOptions, ILoader, voidCallback } from '../interfaces/interfaces';



class Loader implements ILoader {
    baseLink
    options


    constructor(baseLink: string, options: IOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }:
            {
                endpoint: string,
                options?: IOptions
            },
        callback: voidCallback = () => {
            console.error('No callback for GET response');
        },
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: IResponse) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: IOptions, endpoint: string) {
        const urlOptions: IOptions = { ...this.options, ...options };
        let url: string = `${this.baseLink}${endpoint}?`;

        const keys: string[] = Object.keys(urlOptions)
        keys.forEach((key: string) => {

            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: voidCallback, options: IOptions = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json<IGetSources | IGetNews>())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
