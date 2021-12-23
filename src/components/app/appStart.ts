import AppController from '../controller/appController';
import { Data, IGetNews, IGetSources } from '../interfaces/types';
import { AppView } from '../view/appView';

class App {
  controller: AppController;
  view: AppView;
  sources: Element;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
    this.sources = document.querySelector('.sources') as Element;
  }

  start(): void {
    this.sources.addEventListener('click', (e: Event) => {
      this.controller.getNews(e, (data: Data) => this.view.drawNews(data as IGetNews));
    });
    this.controller.getSources((data: Data) => this.view.drawSources(data as IGetSources));
  }
}


export default App;
