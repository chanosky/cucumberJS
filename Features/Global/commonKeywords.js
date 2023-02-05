const { By } = require("selenium-webdriver");
const webDriver = require("selenium-webdriver");

const {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60*1000);


function initDriver(){
    driver = new webDriver.Builder()
    .forBrowser('chrome')
    .build()
    return driver;
};


function clickElement(url){
    console.log("driver.findElement(By.xpath(\"+url+\")).click();");
    driver.findElement(By.xpath(url)).click();
};


module.exports = {
    initDriver,
    clickElement
};

