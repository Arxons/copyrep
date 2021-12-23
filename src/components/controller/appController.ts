import { OptionsConfigValues, VoidCallback } from '../interfaces/appInterfaces';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  getSources(callback: VoidCallback): void {
    super.getResp(
      {
        endpoint: OptionsConfigValues.sources,
      },
      callback
    );
  }

  getNews(e: Event, callback: VoidCallback): void {
    let target: EventTarget | null = e.target;
    const newsContainer: EventTarget | null = e.currentTarget;

    while (target !== newsContainer) {
      const isFull: boolean = (target as HTMLSpanElement).classList.contains('source_item');
      if (isFull) {
        const sourceId = (target as HTMLSpanElement).getAttribute('data-source-id');
        const newsContainerAttribute: string | null = (newsContainer as HTMLDivElement).getAttribute('data-source');
        if (newsContainerAttribute !== sourceId) {
          if (sourceId !== null) {
            (newsContainer as HTMLDivElement).setAttribute('data-source', sourceId);

            super.getResp(
              {
                endpoint: OptionsConfigValues.everything,
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
