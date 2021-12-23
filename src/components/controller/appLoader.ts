import { optionsConfigValues } from '../interfaces/appInterfaces';
import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super(optionsConfigValues.baseLink, {
      apiKey: optionsConfigValues.apiKey
    });
  }
}

export default AppLoader;
