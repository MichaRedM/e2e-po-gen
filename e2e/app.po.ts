import { ElementFinder } from 'protractor/built/element';
import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getButton() {
    return element(by.css('button'));
  }

  getText() {
    return element(by.css('span')).getText();
  }


}
