const {Given, When, Then, Before, After} = require ('@cucumber/cucumber');
const x = require('../Global/globalDeclarations');
const loginPageKeywords = require('../LoginPage/LoginPage_Keywords');
const {initDriver} = require('../Global/commonKeywords');

Before(function () {
    driver = initDriver();
});

After(function () {
    driver.quit();
});


Given('user is at login page', async function () {
    await loginPageKeywords.clickLoginButton();
    await driver.get(x.testData.pinterestUrl);
    // await x.locators.loginButton().click();
    console.log('testing');
});

When('user logs in using valid credentials', async function () {
    await x.locators.emailField().sendKeys(x.globalTestData.userEmail);

    await driver.findElement(By.xpath(x.locators.passwordField)).sendKeys(x.globalTestData.userPassword);
    await driver.findElement(By.xpath(x.locators.loginButton)).click();
});


Then('user is successfully logged in', function () {

});