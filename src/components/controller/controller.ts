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
        let target = e.target;
        const newsContainer = e.currentTarget;

        this._isFullTargetClasses(target as HTMLSpanElement, newsContainer as HTMLDivElement, callback)

    }

    private _isFullTargetClasses(target: HTMLSpanElement, targetNewsContainer: HTMLDivElement, callback: voidCallback) {
        while (target !== targetNewsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (targetNewsContainer.getAttribute('data-source') !== sourceId) {
                    if (sourceId != null) {
                        targetNewsContainer.setAttribute('data-source', sourceId);

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
            this.changeTarget(target as HTMLSpanElement)
        }
    }

    private changeTarget(target: ParentNode) {
        if (target.parentNode != null) {
            target = target.parentNode;
        }
    }
}

export default AppController;
