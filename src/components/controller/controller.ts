import { voidCallback } from '../interfaces/interfaces';
import AppLoader from './appLoader';

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

    getNews(e: Event, callback: voidCallback) {
        let target: EventTarget | null = e.target;
        const newsContainer: EventTarget | null = e.currentTarget;

        // this._isFullTargetClasses(target as HTMLSpanElement, newsContainer as HTMLDivElement, callback)
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
    // while LOOPS!
    // private _isFullTargetClasses(target: HTMLSpanElement, targetNewsContainer: HTMLDivElement, callback: voidCallback) {
    //     while (target !== targetNewsContainer) {
    //         if (target.classList.contains('source__item')) {
    //             const sourceId = target.getAttribute('data-source-id');
    //             if (targetNewsContainer.getAttribute('data-source') !== sourceId) {
    //                 if (sourceId != null) {
    //                     targetNewsContainer.setAttribute('data-source', sourceId);

    //                     super.getResp(
    //                         {
    //                             endpoint: 'everything',
    //                             options: {
    //                                 sources: sourceId,
    //                             },
    //                         },
    //                         callback
    //                     );
    //                 }
    //             }
    //             return;
    //         }
    //         target = target.parentNode
    //     }
    // }

    // private changeTarget(target: ParentNode) {
    //     if (target.parentNode != null) {
    //         target = target.parentNode;
    //     }
    // }
}

export default AppController;
