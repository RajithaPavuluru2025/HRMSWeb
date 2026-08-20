import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly okButton:Locator;

    constructor(page: Page) {
        this.page = page;

        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.locator('button[type="submit"]');
        this.okButton =page.getByRole('button', { name: 'OK' });

    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
        await this.okButton.waitFor({ state: 'visible' });
        await this.okButton.click();
       
}

}