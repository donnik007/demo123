const {Builder, By, until} = require('selenium-webdriver');
(async function example() {
  // Use localhost for both Selenium and PHP server
  let driver = await new Builder().forBrowser('chrome').usingServer('http://127.0.0.1:4444/wd/hub').build();
  try {
    await driver.get('http://127.0.0.1:8000');
    let heading = await driver.findElement(By.tagName('h1')).getText();
    console.log('Heading:', heading);
    let jsMessage = await driver.findElement(By.id('js-message')).getText();
    console.log('JS Message:', jsMessage);
  } finally {
    await driver.quit();
  }
})();
