

const { expect } = require('@playwright/test');


// Selenium supports 8 different types of locators namely id, name, className, tagName, linkText, partialLinkText, CSS selector and xpath.
// Using id is one of the most reliable and fast methods of element recognition. Usually, the id is always unique on a given web page.
// CSS selector and XPath can identify dynamic elements on a web page. A combination of different attributes and tag names can be used with CSS and xpath to identify any given element.

// In order to perform actions like Click, Type, Drag, and Drop we first need to identify on which web element (like button, checkbox, drop-down, textarea) we need to perform an action. To facilitate this, WebDriver has provided methods to identify web elements using various HTML attributes - like id, name, class, CSS, tag name, XPath, linktext etc.

// for of loop
for (const item of TODO_ITEMS.slice(0, 2)) {
    await newTodo.fill(item);
    await newTodo.press('Enter');
  }

  /**
 * @param {import('@playwright/test').Page} page
 * @param {string} title
 */
// This information helps developers understand what the function expects as inputs and makes it easier to use the function correctly.
async function checkTodosInLocalStorage(page, title) {
    return await page.waitForFunction(t => {
      return JSON.parse(localStorage['react-todos']).map(i => i.title).includes(t);
    }, title);
  }


//   Absolute Xpath - this contains the complete XML path of the element in question.
// Contains( ) - using these functional elements can be searched with partial or full text and can be used to handle dynamic elements.
// Starts-With( ) - this function is based on finding elements using starting text of the attribute under question.

// how to find elements on page

//Playwright can interact with HTML Input elements such as text inputs, checkboxes, radio buttons, select options, mouse clicks, type characters, keys and shortcuts as well as upload files and focus elements.

//11111 Locators

const toggleAll = page.getByLabel('Mark all as complete');
// These are the recommended built in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes. //await page.getByRole('button', { name: 'Sign in' }).click();
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
// Locate by CSS or XPath //use page.locator for this
await page.locator('css=button').click();
await page.locator('xpath=//button').click();
await page.locator('button').click(); //same as above no need to specify css or xpath
await page.locator('//button').click(); //no need to specify css or xpath


//222222 how to interact with elements on page
    await toggleAll.check();
    await toggleAll.expectToBeChecked();
    await toggleAll.uncheck();
    await toggleAll.expectToBeUnchecked();
    await toggleAll.fill();
    .press('Enter');
    .press('Control+ArrowRight');
    await toggleAll.type();
    await toggleAll.getByLabel();
    await toggleAll.includes();
    await toggleAll.map();
    await toggleAll.toHaveClass();
    await toggleAll.toHaveText();
    await toggleAll.click();
    await toggleAll.hover();
    await toggleAll.dblclick();
    await toggleAll.press();
    await toggleAll.selectOption();
    await toggleAll.waitForSelector();
    await toggleAll.waitForElementState();
    await toggleAll.waitForFunction();
    await toggleAll.waitForTimeout();
    await toggleAll.waitForLoadState();
    await toggleAll.waitForNavigation();
    await toggleAll.waitForRequest();
    await toggleAll.waitForResponse();
    await toggleAll.waitForEvent();
    await toggleAll.waitForFileChooser();
    await toggleAll.waitForURL();
    await toggleAll.waitForXPath();
    await toggleAll.waitForFunction();
    await toggleAll.waitForTimeout();
    await toggleAll.waitForLoadState();




// 333333 how to assert elements on page

expect(loacator,custommessage).method() //You can specify a custom error message as a second argument to the expect function, for example:

    await expect(toggleAll).toBeChecked(); //hard assertion
    await expect(secondTodo).not.toHaveClass('completed'); //Negating Matchers
    await expect.soft(page.getByTestId('status')).toHaveText('Success'); //soft assertions

    // The assert method is typically used to verify the state of an element, 
    // the presence of an element, the text content of an element, or the value of a property,
    // among other things. If the assertion fails, the test will throw an error and fail.

    List of assertions
    Assertion	Description
    expect(locator).toBe()	
    expect(locator).toBeChecked()	Checkbox is checked
    expect(locator).toBeDisabled()	Element is disabled
    expect(locator).toBeEditable()	Element is enabled
    expect(locator).toBeEmpty()	Container is empty
    expect(locator).toBeEnabled()	Element is enabled
    expect(locator).toBeFocused()	Element is focused
    expect(locator).toBeHidden()	Element is not visible
    expect(locator).toBeVisible()	Element is visible
    expect(locator).toContainText()	Element contains text
    expect(locator).toHaveAttribute()	Element has a DOM attribute
    expect(locator).toHaveClass()	Element has a class property
    expect(locator).toHaveCount()	List has exact number of children
    expect(locator).toHaveCSS()	Element has CSS property
    expect(locator).toHaveId()	Element has an ID
    expect(locator).toHaveJSProperty()	Element has a JavaScript property
    expect(locator).toHaveScreenshot()	Element has a screenshot
    expect(locator).toHaveText()	Element matches text
    expect(locator).toHaveValue()	Input has a value
    expect(locator).toHaveValues()	Select has options selected
    expect(page).toHaveScreenshot()	Page has a screenshot
    expect(page).toHaveTitle()	Page has a title
    expect(page).toHaveURL()	Page has a URL
    expect(apiResponse).toBeOK()	Response has an OK status


//    4444 // hooks  -- test.describe to declare a group of tests and test.beforeEach and test.afterEach which are executed before/after each test. Other hooks include the test.beforeAll and test.afterAll which are executed once per worker before/after all tests.

//5555 reports
// npx playwright show-report

///6666  debugging
// npm run debug (added showrtcut to package.json) or npx playwright test --debug --> debug with playwright inspector


//8888 codegen
// record steps and code will be generated
// npx playwright codegen demo.playwright.dev/todomvc
// npx playwright codegen --device="iPhone 11" playwright.dev



//9999 configuration and cli
// add this to package.json
// "scripts": {
//     "test": "playwright test --headed", 
//     "debug": "npx playwright test --debug"

// CLI all needed commands
// npm test  --> run tests
// npm run debug  --> debug with playwright inspector
// npx playwright show-report   --> to show report