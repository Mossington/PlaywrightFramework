import { Locator, Page } from '@playwright/test';


export class userLogin{

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly allowEmailscheck: Locator;
    readonly loginButton: Locator;
   

    constructor (page: Page) {
        this.page = page;
        this.username = page.locator("#email");
        this.password = page.locator("#password");
        this.loginButton = page.locator("[name='commit']");
    }
}