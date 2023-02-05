// const x = require('../Global/globalDeclarations');

const commonKeywords = require('../Global/commonKeywords');
const loginPageLocators = require('../LoginPage/LoginPage_Locators');


// function loginButton(){ return driver.findElement(By.xpath("//div[contains(text(), 'Log in')]"))};
// function emailField(){ return driver.findElement(By.xpath("(//input[@id='email'])[1]"))};



function clickLoginButton(){
    console.log(loginPageLocators.LoginPage_LoginButton);
    commonKeywords.clickElement(loginPageLocators.LoginPage_LoginButton);
};

// exports.clickLoginButton = () => {
//     commonKeywords.clickElement(x.loginPageLocators.LoginPage_LoginButton);
// };


module.exports = {
    clickLoginButton,
    // passwordField: "//input[@id='password']",
    // submitLoginButton: "//button[@type='submit']"
};

