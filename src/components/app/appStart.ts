import AppController from '../controller/controller';
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
    this.sources.addEventListener('click', (e) => {
      console.log(e)
      this.controller.getNews(e, (data) => this.view.drawNews(data))
    });
    this.controller.getSources((data) => this.view.drawSources(data));
  }
}


export default App;
