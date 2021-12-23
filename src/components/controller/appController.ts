import { OptionsConfigValues, VoidCallback } from '../interfaces/types';
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
    // let target: EventTarget | null = e.target;
    // const newsContainer: EventTarget | null = e.currentTarget;
    let { target }: { target: EventTarget | null } = e;
    const { currentTarget: newsContainer }: { currentTarget: EventTarget | null } = e;

    while (target !== newsContainer) {
      const targetAsSpanEl = target as HTMLSpanElement;
      const isSourceItemEl = targetAsSpanEl.classList.contains('source_item');

      if (!isSourceItemEl) {
        const sourceId = targetAsSpanEl.getAttribute('data-source-id');
        const newsContainerDivEl = newsContainer as HTMLDivElement
        const dataSourceAttribute = newsContainerDivEl.getAttribute('data-source');

        if (dataSourceAttribute !== sourceId) {
          if (sourceId !== null) {
            newsContainerDivEl.setAttribute('data-source', sourceId);

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
      target = targetAsSpanEl.parentNode;
    }
  }
}

export default AppController;
