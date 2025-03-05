const {test, expect} = require(`@playwright/test`);

// List of imports - such as POMs
import {userLogin} from "../Page_Object_Models/pageLogin";
import {userLogout} from "../Page_Object_Models/pageMyCourses";

// list of "let" keyword variables. this allows me to use the same POM for all tests when added to the "befroeEach" hook, instead of declaring a seperate "const" for each test
let userLoginPage: userLogin;
let myCoursesPage: userLogout;


test.describe.parallel("Before Step", () => {
test.beforeEach(async ({page}) => {
    userLoginPage = new userLogin(page);
    myCoursesPage = new userLogout(page)
    await page.goto("https://sso.teachable.com/secure/9521/identity/login/password?force=true");
});



// to trigger intellesnece press Ctrl+space (Page. Ctrl + space)
test (`Scenario: Sign-up  for Rahul Shetty Academy`, async ({browser, page}) => 
    {
        //const context = await browser.newContext();
        //const page = await context.newPage();
        await page.goto("https://sso.teachable.com/secure/9521/identity/sign_up/otp");

        var safdds : string = await (page.title());
        await expect(page).toHaveTitle("Rahul Shetty Academy");
        expect(safdds).toMatch("Rahul Shetty Academy"); // Compare the page title with a case-insensitive expected result
        expect(safdds).toBe("Rahul Shetty Academy"); // Fails if titles don't match exactly
        expect(safdds).toContain("Shetty");  // Check if the page title contains a certain part of the expected text
        expect(safdds).not.toBe("Incorect Value"); // Ensure the title is not equal to an incorrect value

        await page.locator("#name").fill("Greg Moss");
        await page.locator("[placeholder='you@email.com']").fill("greg_moss@hotmail.co.uk");
        await page.locator("[name='allowMarketingEmails']").check();
        //await page.locator("//*[@id='otp-login-btn']").click();
        await page.locator("#otp-login-btn").click();
    }

);


test ("Scenario: sign-in to Rahul Shetty Academy", async ({page}) =>
    {
        //const Page_Login = new pageLogin(page);
        //await page.goto("https://sso.teachable.com/secure/9521/identity/login/password?force=true");
  

        //User Login
        await userLoginPage.username.fill("greg_moss@hotmail.co.uk");
        await userLoginPage.password.fill("PlaywrightIsKing123456");
        await userLoginPage.loginButton.click();
        console.log(await page.title())
        await expect(page).toHaveTitle("Rahul Shetty Academy");

        //User Log-Out
        await myCoursesPage.userProfile_Select.click();
        await myCoursesPage.userProfile_LogOut.click();
        console.log(await page.title())
        await expect(page).toHaveTitle("Home | Rahul Shetty Academy");
    }
);

test.afterEach(async ({ context }) => {
    await context.close();
 });
});