const {Builder, By, until} = require('selenium-webdriver');
(async function example() {
  // Use localhost since PHP server runs on 127.0.0.1:8000 in CI
  let driver = await new Builder().forBrowser('chrome').usingServer('http://localhost:4444/wd/hub').build();
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
