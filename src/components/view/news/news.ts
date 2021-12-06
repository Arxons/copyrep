import { IGetNews, GetQuery, IGetNewsData } from '../../interfaces/interfaces';
import './news.css';

class News {
    draw(data: IGetNews) {
        const news: Array<object> = data.length >= 10 ? data.filter((_item: object, idx: number) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        news.forEach((item: object, idx: number) => {
            console.log(10, item)
            const newsClone: Node = (newsItemTemp as HTMLTemplateElement).content.cloneNode(true);

            if (idx % 2) (newsClone as GetQuery<HTMLTemplateElement>).querySelector<HTMLTemplateElement>('.news__item')
                .classList.add('alt');

            ((newsClone as GetQuery<HTMLTemplateElement>).querySelector<HTMLTemplateElement>('.news__meta-photo') as HTMLStyleElement)
                .style.backgroundImage = `url(${(item as IGetNewsData).urlToImage || 'img/news_placeholder.jpg'
                })`;

            (newsClone as GetQuery<HTMLTemplateElement>).querySelector<HTMLTemplateElement>('.news__meta-author')
                .textContent = (item as IGetNewsData).author || (item as IGetNewsData).source.name;

            (newsClone as GetQuery<HTMLTemplateElement>).querySelector<HTMLTemplateElement>('.news__meta-date')
                .textContent = (item as IGetNewsData).publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');

            (newsClone as GetQuery<HTMLTemplateElement>).querySelector<HTMLTemplateElement>('.news__description-title')
                .textContent = (item as IGetNewsData).title;

            (newsClone as GetQuery<HTMLTemplateElement>).querySelector<HTMLTemplateElement>('.news__description-source')
                .textContent = (item as IGetNewsData).source.name;

            (newsClone as GetQuery<HTMLTemplateElement>).querySelector<HTMLTemplateElement>('.news__description-content')
                .textContent = (item as IGetNewsData).description;

            (newsClone as GetQuery<HTMLTemplateElement>).querySelector<HTMLTemplateElement>('.news__read-more a')
                .setAttribute('href', (item as IGetNewsData).url);

            fragment.append(newsClone);
        });

        const appendNews: Element | null = document.querySelector('.news');
        (appendNews as Element).innerHTML = '';
        (appendNews as Element).appendChild(fragment);
    }
}

export default News;
