
// config/protractor.js

exports.config = {
    
    specs: ['../test/e2e/**/*.js'],
  
    onPrepare: function() {
    
        //browser.driver.get('http://localhost:3000');
        
        browser.driver.get('http://localhost:3000/#/auth').then(function() {
    	            
            browser.driver.findElement(by.id('entrar')).click();
    
            browser.driver.findElement(by.id('login_field')).sendKeys('netmarvin@gmail.com');
        
            browser.driver.findElement(by.id('password')).sendKeys('Madona#001335');
        
            browser.driver.findElement(by.name('commit')).click();  
        
        });
                
    }
  
};


