import { IGetSourcesData, GetQuery } from '../../interfaces/types';
import './sources.css';

class Sources {
  draw(data: Array<IGetSourcesData>) {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
    const sources: Element = document.querySelector('.sources') as Element;

    data.forEach((item: IGetSourcesData) => {
      const sourceClone: Node = sourceItemTemp.content.cloneNode(true);
      const clone = sourceClone as GetQuery<HTMLTemplateElement>

      clone.querySelector('.source__item-name').textContent = item.name;
      clone.querySelector('.source__item').setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    sources.append(fragment);
  }
}

export default Sources;
