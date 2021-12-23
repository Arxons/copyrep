import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '941849fcc9764954b763e931ab561316', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
