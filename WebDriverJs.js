const {Builder, By, until} = require('selenium-webdriver');

let driver = new Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://www.google.com/');
driver.quit();
