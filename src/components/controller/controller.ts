import { voidCallback } from '../interfaces/interfaces';
import AppLoader from './appLoader';
import { } from '../interfaces/interfaces';

class AppController extends AppLoader {
    getSources(callback: voidCallback) {
        console.log(callback)
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: MouseEvent, callback: voidCallback) {
        let target: any = e.target;
        const newsContainer: any = e.currentTarget;
        console.log(target)
        console.log(newsContainer)


        while (target !== newsContainer) {
            if (target != null) {
                if (target.classList.contains('source__item')) {
                    const sourceId = target.getAttribute('data-source-id');
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
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
                    return;
                }
                target = target.parentNode;
            }
        }
    }
}

export default AppController;
