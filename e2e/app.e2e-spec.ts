import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('e2e App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getButton().getText()).toBe('Click me');
    const textBefore = page.getText();
    page.getButton().click();
    const textAfter = page.getText();
    expect(textBefore).not.toEqual(textAfter);
  });

  it('should shit', () => {
    browser.executeScript(function() {
      console.log('hey');
      return window.innerHeight;
    }).then(x => {
      console.log(x);
    });
    browser.sleep(100000);
  });
});
