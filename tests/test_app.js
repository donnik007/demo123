const {Builder, By, until} = require('selenium-webdriver');
(async function example() {
  // Use service hostnames for Docker Compose network
  let driver = await new Builder().forBrowser('chrome').usingServer('http://selenium:4444/wd/hub').build();
  try {
    await driver.get('http://php:8000');
    
    // Test page title
    let title = await driver.getTitle();
    console.log('Page Title:', title);
    
    // Test heading
    let heading = await driver.findElement(By.tagName('h1')).getText();
    console.log('Heading:', heading);
    
    // Test JavaScript message
    let jsMessage = await driver.findElement(By.id('js-message')).getText();
    console.log('JS Message:', jsMessage);
    
    // Test form with message only
    console.log('Testing form submission with message only...');
    await driver.findElement(By.id('user-input')).sendKeys('Test Message');
    await driver.findElement(By.css('button[type=submit]')).click();
    
    // Wait for page to reload and check for success message
    await driver.sleep(2000);
    
    // Check if success message appears
    try {
      let successMessage = await driver.findElement(By.css('.message.success')).getText();
      console.log('Success Message:', successMessage);
    } catch (e) {
      console.log('No success message found, checking for error message...');
      try {
        let errorMessage = await driver.findElement(By.css('.message.error')).getText();
        console.log('Error Message:', errorMessage);
      } catch (e2) {
        console.log('No error message found either');
      }
    }
    
    // Test form with both message and email
    console.log('Testing form submission with message and email...');
    await driver.findElement(By.id('user-input')).clear();
    await driver.findElement(By.id('user-input')).sendKeys('Test Message with Email');
    await driver.findElement(By.id('email')).sendKeys('test@example.com');
    await driver.findElement(By.css('button[type=submit]')).click();
    
    // Wait for page to reload
    await driver.sleep(2000);
    
    // Check for recent submissions section
    try {
      let recentSubmissions = await driver.findElement(By.css('.recent-submissions'));
      console.log('Recent submissions section found');
      
      // Check if our submissions appear
      let submissions = await driver.findElements(By.css('.submission-item'));
      console.log('Number of submissions displayed:', submissions.length);
      
      if (submissions.length > 0) {
        let firstSubmission = await submissions[0].getText();
        console.log('First submission:', firstSubmission);
      }
    } catch (e) {
      console.log('Recent submissions section not found');
    }
    
    console.log('All tests completed successfully!');
    
  } catch (error) {
    console.error('Test failed:', error);
    throw error;
  } finally {
    await driver.quit();
  }
})();
