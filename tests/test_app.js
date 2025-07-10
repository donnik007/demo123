const {Builder, By, until} = require('selenium-webdriver');
(async function example() {
  // Use service hostnames for Docker Compose network
  let driver = await new Builder().forBrowser('chrome').usingServer('http://selenium:4444/wd/hub').build();
  try {
    await driver.get('http://php:8000');
    let heading = await driver.findElement(By.tagName('h1')).getText();
    console.log('Heading:', heading);
    let jsMessage = await driver.findElement(By.id('js-message')).getText();
    console.log('JS Message:', jsMessage);

    // Test form submission
    await driver.findElement(By.id('user-input')).sendKeys('Test Input');
    await driver.findElement(By.css('button[type=submit]')).click();
    let confirmationMessage = await driver.findElement(By.id('confirmation-message')).getText();
    console.log('Confirmation Message:', confirmationMessage);
    if (confirmationMessage !== 'Thank you for your input: Test Input') {
        throw new Error('Form submission test failed');
    }
  } finally {
    await driver.quit();
  }
})();
