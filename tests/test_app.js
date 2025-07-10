const {Builder, By, until} = require('selenium-webdriver');
(async function example() {
  let driver = await new Builder().forBrowser('chrome').usingServer('http://selenium:4444/wd/hub').build();
  try {
    await driver.get('http://web:80');
    let heading = await driver.findElement(By.tagName('h1')).getText();
    console.log('Heading:', heading);
    let jsMessage = await driver.findElement(By.id('js-message')).getText();
    console.log('JS Message:', jsMessage);
  } finally {
    await driver.quit();
  }
})();
