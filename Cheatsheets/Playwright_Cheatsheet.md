#### Getting started with Playwright and VS Code

- https://playwright.dev/docs/getting-started-vscode#:~:text=To%20run%20a%20test%20click,name%20in%20the%20Playwright%20sidebar.

<br>

#### Initiate Browser and navigate to url

- https://playwright.dev/docs/api/class-browser
- await page.goto('URL_Here');

<br>

#### Example of creating a locator

This can be used when setting up your page object models. This format means the const us reusable, meaning lower maintenance.

- const fakeHyperlink = page.getByRole('link', { name: 'Fake Hyperlink'});
- await fakeHyperlink.click();

_**note**: this piece of code is simply the locator taken from the browser ('link', { name: 'Fake Hyperlink')_
<br>

This is a an inline version of the above, only to be used as single use. These are guenually higher maintence than the exampel above.

- await page.getByRole('link', { name: 'Get started' }).click();

<br>

#### Locators & Locator Assertions

https://playwright.dev/docs/api/class-locatorassertions
https://playwright.dev/docs/api/class-locator
https://playwright.dev/docs/locators
https://playwright.dev/docs/input#introduction

<br>

#### Recommended built-in locators

| Locator                 | Description                                                                                   |
| ----------------------- | --------------------------------------------------------------------------------------------- |
| page.getByRole()        | To locate by explicit and implicit accessibility attributes.                                  |
| page.getByText()        | To locate by text content.                                                                    |
| page.getByLabel()       | To locate a form control by associated label's text.                                          |
| page.getByPlaceholder() | To locate an input by placeholder.                                                            |
| page.getByAltText()     | To locate an element, usually image, by its text alternative.                                 |
| page.getByTitle()       | To locate an element by its title attribute.                                                  |
| page.getByTestId()      | To locate an element based on its data-testid attribute (other attributes can be configured). |

<br>

#### Basic actions - Quick Access

| Action                  | Description                     |
| ----------------------- | ------------------------------- |
| locator.check()         | Check the input checkbox        |
| locator.click()         | Click the element               |
| locator.uncheck()       | Uncheck the input checkbox      |
| locator.hover()         | Hover mouse over the element    |
| locator.fill()          | Fill the form field, input text |
| locator.focus()         | Focus the element               |
| locator.press()         | Press single key                |
| locator.setInputFiles() | Pick files to upload            |
| locator.selectOption()  | Select option in the drop down  |

examples:
await page.getByRole('textbox').fill('Peter');

OR

const CustomerName = page.getByRole('textbox');
CustomerName.fill('Peter');
await expect(CustomerName).toHaveValue('Peter');

<br>

##### Assertions - Quick access

| **Assertion**                     | **Description**                       |
| --------------------------------- | ------------------------------------- |
| expect(locator).toBeChecked()     | Checkbox is checked                   |
| expect(locator).toBeEnabled()     | Control is enabled                    |
| expect(locator).toBeVisible()     | Element is visible                    |
| expect(locator).toContainText()   | Element contains text                 |
| expect(locator).toHaveAttribute() | Element has attribute                 |
| expect(locator).toHaveCount()     | List of elements has given length     |
| expect(locator).toHaveText()      | Element matches text                  |
| expect(locator).toHaveValue()     | Input element has value               |
| expect(page).toHaveTitle()        | Page has title                        |
| expect(page).toHaveURL()          | Page has URL                          |
| expect(locator).toHaveValue();    | Text field contains the correct value |

example:
const locator = page.getByLabel('Name of Label');
await expect(locator).toBeChecked();

<br>

#### Using Test Hooks

Navigate to url - https://playwright.dev/docs/writing-tests#using-test-hooks

<br>

#### How to write a test

https://playwright.dev/docs/writing-tests

Example Test

<br>

#### Running and debuggin tests

- https://playwright.dev/docs/running-tests

<br>

#### Running tests from the console

npx playwright test
Runs the end-to-end tests.

npx playwright test --ui
Starts the interactive UI mode.

npx playwright test --project=chromium
Runs the tests only on Desktop Chrome.

npx playwright test example
Runs the tests in a specific file.

npx playwright codegen
Auto generate tests with Codegen.

<br>

#### Running tests from the "Testing" option in the Primary side bar

<br>

#### Debugging tests

npx playwright test --debug
Runs the tests in debug mode from the console.
