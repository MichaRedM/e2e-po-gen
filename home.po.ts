import { ElementFinder } from 'protractor/built/element';
import { browser, by, element } from 'protractor';
export class home {
    button: ElementFinder = element(by.css('.e2e-button'));
    clickresult: ElementFinder = element(by.css('.e2e-clickresult'));
    number: ElementFinder = element(by.css('.e2e-number'));
    clickButton() {
        this.button.click();
    }
    getButtonText(): Promise<string|undefined> {
        return this.button.getText();
    }
    getClickresultText(): Promise<string|undefined> {
        return this.clickresult.getText();
    }
    getNumberText(): Promise<string|undefined> {
        return this.number.getText();
    }

    navigateTo() {
        return browser.get('/');
    }
}
