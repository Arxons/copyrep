import { OptionsConfigValues } from '../interfaces/types';
import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super(OptionsConfigValues.baseLink, {
      apiKey: OptionsConfigValues.apiKey
    });
  }
}

export default AppLoader;
