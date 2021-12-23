import { IGetNews, GetQuery, IGetNewsData } from '../../interfaces/types';
import './news.css';

class News {
  draw(data: Array<IGetNewsData>) {
    const news: Array<IGetNewsData> = data.length >= 10 ? data.filter((_item: object, idx: number) => idx < 10) : data;

    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');
    const imagePath = 'img/news_placeholder.jpg';

    news.forEach((item: IGetNewsData, idx: number) => {
      const newsClone: Node = (newsItemTemp as HTMLTemplateElement).content.cloneNode(true);
      const clone = newsClone as GetQuery<HTMLTemplateElement>

      if (idx % 2) {
        clone.querySelector('.news__item').classList.add('alt');
      }
      clone.querySelector('.news__meta-photo').style.backgroundImage = `url(${item.urlToImage || imagePath})`;
      clone.querySelector('.news__meta-author').textContent = item.author || item.source.name;
      clone.querySelector('.news__meta-date').textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');
      clone.querySelector('.news__description-title').textContent = item.title;
      clone.querySelector('.news__description-source').textContent = item.source.name;
      clone.querySelector('.news__description-content').textContent = item.description;
      clone.querySelector('.news__read-more a').setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    const appendNews: Element = document.querySelector('.news') as Element;
    appendNews.innerHTML = '';
    appendNews.appendChild(fragment);
  }
}

export default News;
