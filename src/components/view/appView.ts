import { IGetNews, IGetSources } from '../interfaces/appInterfaces';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
  news: News;
  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: IGetNews) {
    const values: IGetNews['articles'] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: IGetSources) {
    const values: IGetSources['sources'] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
