import { voidCallback } from '../interfaces/interfaces';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  getSources(callback: voidCallback): void {
    console.log(callback)
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: Event, callback: voidCallback): void {
    let target: EventTarget | null = e.target;
    const newsContainer: EventTarget | null = e.currentTarget;

    while (target as EventTarget !== newsContainer) {
      if ((target as HTMLSpanElement).classList.contains('source__item')) {
        const sourceId = (target as HTMLSpanElement).getAttribute('data-source-id');
        if ((newsContainer as HTMLDivElement).getAttribute('data-source') !== sourceId) {
          if (sourceId != null) {
            (newsContainer as HTMLDivElement).setAttribute('data-source', sourceId);

            super.getResp(
              {
                endpoint: 'everything',
                options: {
                  sources: sourceId,
                },
              },
              callback
            );
          }
        }
        return;
      }
      target = (target as HTMLSpanElement).parentNode
    }

  }
}

export default AppController;
