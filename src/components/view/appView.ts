import { IGetNews, IGetNewsData, IGetSources, IGetSourcesData } from '../interfaces/types';
import News from './news/news';
import Sources from './sources/appSources';

export class AppView {
  news: News;
  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: IGetNews) {
    const values: Array<IGetNewsData> = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: IGetSources) {
    const values: Array<IGetSourcesData> = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
