import { browser, by, element } from 'protractor';

export class HomePage {
    private cardHeader = element(by.css('app-root .card-header'));
    private cardTitle = element(by.css('app-root .card-title'));
    private cardText = element(by.css('app-root .card-text'));
    private buttonComprar = element(by.css('app-root .btn'));

    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    getCardHeader() {
        return this.cardHeader.getText() as Promise<string>;
    }

    getCardTitle() {
        return this.cardTitle.getText() as Promise<string>;
    }

    getCardText() {
        return this.cardText.getText() as Promise<string>;
    }
    getButton() {
        return this.buttonComprar.getText() as Promise<string>;
    }

    async clickBotonCompras() {
        await this.buttonComprar.click();
    }
}
