import { IGetSourcesData, IGetSources, GetQuery } from '../../interfaces/appInterfaces';
import './sources.css';

class Sources {
  draw(data: IGetSources) {
    console.log(data)
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');
    const sources: Element | null = document.querySelector('.sources')
    console.log(1, sourceItemTemp)

    data.forEach((item: object) => {
      const sourceClone: Node = (sourceItemTemp as HTMLTemplateElement).content.cloneNode(true);


      (sourceClone as GetQuery<HTMLTemplateElement>).querySelector<HTMLTemplateElement>('.source__item-name')
        .textContent = (item as IGetSourcesData).name;

      (sourceClone as GetQuery<HTMLTemplateElement>).querySelector<HTMLTemplateElement>('.source__item')
        .setAttribute('data-source-id', (item as IGetSourcesData).id);


      fragment.append(sourceClone);
    });

    (sources as Element).append(fragment);
  }
}

export default Sources;
