const expect = require ('chai');

const globalTestData = require('../Global/globalTestData');
const commonKeywords = require('../Global/commonKeywords');

const loginPageKeywords = require('../LoginPage/LoginPage_Keywords');
const loginPageLocators = require('../LoginPage/LoginPage_Locators');
const testData = require('../LoginPage/LoginPage_TestData');


module.exports = {
    commonKeywords,
    loginPageLocators,
    loginPageKeywords,
    testData,
    globalTestData,
    expect
};