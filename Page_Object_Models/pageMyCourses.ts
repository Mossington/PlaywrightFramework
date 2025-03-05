import {Locator, Page} from "@playwright/test";

export class userLogout{
    readonly page: Page;
    readonly userProfile_Select: Locator;
    readonly userProfile_LogOut: Locator;

    constructor(page: Page){
        this.page = page;
        this.userProfile_Select = page.locator(".navbar-current-user");
        this.userProfile_LogOut = page.locator("[class='user-signout']");
    }

}
