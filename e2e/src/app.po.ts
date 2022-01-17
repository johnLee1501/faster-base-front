import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getH2Text(){
    return element(by.css('app-root h2')).getText() as Promise<string>;
  }

  getParText(){
    return element(by.css('app-root .par')).getText() as Promise<string>;
  }

  getCardHeader(){
    return element(by.css('app-root .card-title')).getText()  as Promise<string>;
  }

  getCardTitle(){
    return element(by.css('app-root .card-title')).getText() as Promise<string>;
  }

  getCardText(){
    return element(by.css('app-root .card-text')).getText() as Promise<string>;
  }
  getButton(){
    return element(by.css('app-root .btn')).getText() as Promise<string>;
  }
}
