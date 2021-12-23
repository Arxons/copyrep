import AppController from '../controller/appController';
import { GetData } from '../interfaces/appInterfaces';
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
      this.controller.getNews(e, (data: GetData) => this.view.drawNews(data))
    });
    this.controller.getSources((data: GetData) => this.view.drawSources(data));
  }
}


export default App;
