import { browser } from 'protractor';
import * as fs from 'fs';

function main() {
    generatePageObjects().then();
}

const pages: IPage[] = [
    {name: 'home', url: '/' }
];

async function generatePageObjects() {
    for (const page of pages) {
        browser.get(page.url);
        browser.sleep(100);
        page.pageElements = await browser.executeScript<IE2EPageElement[]>(function() {
            return window['e2eIdService'].allE2EIds;
        });
        await createPageObject(page);
    }
}

async function createPageObject(page: IPage) {
    const data =
`import { ElementFinder } from 'protractor/built/element';
import { browser, by, element } from 'protractor';
export class ${page.name} {
${createPageElementEntetys(page.pageElements)}
    navigateTo() {
        return browser.get('${page.url}');
    }
}
`;
    await fs.writeFile(page.name + '.po.ts', data);
}

function createPageElementEntetys(pageElements?: IE2EPageElement[]): string {
    if (!pageElements) {
        return '';
    }
    let result = '';
    pageElements.forEach(pageElement => {
        result += '    ' + pageElement.id + ': ElementFinder = element(by.css(\'.e2e-' + pageElement.id + '\'));\n';
    });
    pageElements.forEach(pageElement => {
        switch (pageElement.type.toLowerCase()) {
            case 'button':
                result += createButtonMethodes(pageElement.id);
                break;
            case 'span':
                result += createSpanMethodes(pageElement.id);
                break;
            case 'input':
                result += createInputMethodes(pageElement.id);
                break;
        }
    });
    return result;
}

function createButtonMethodes(selector: string) {
    return `    click${toPascalCase(selector)}() {
        this.${selector}.click();
    }
    get${toPascalCase(selector)}Text(): Promise<string|undefined> {
        return this.${selector}.getText();
    }
`;
}
function createSpanMethodes(selector: string) {
    return `    get${toPascalCase(selector)}Text(): Promise<string|undefined> {
        return this.${selector}.getText();
    }
`;
}
function createInputMethodes(selector: string) {
    return `    sendKeys${toPascalCase(selector)}(value: string) {
        this.${selector}.sendKeys(value);
    }
    get${toPascalCase(selector)}Text(): Promise<string|undefined> {
        return this.${selector}.getText();
    }
`;
}

function toPascalCase(source: string): string {
    return source[0].toUpperCase() + source.substring(1, source.length);
}

main();

interface IE2EPageElement {
    id: string;
    type: string;
}

interface IPage {
    name: string;
    url: string;
    pageElements?: IE2EPageElement[];
}
