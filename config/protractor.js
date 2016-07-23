
// config/protractor.js

exports.config = {
    
    specs: ['../test/e2e/**/*.js'],
  
    onPrepare: function() {
    
        //browser.driver.get('http://localhost:3000');
        
        browser.driver.get('http://localhost:3000/#/auth').then(function() {
    	            
            browser.driver.findElement(by.id('entrar')).click();
    
            browser.driver.findElement(by.id('login_field')).sendKeys('aaa');
        
            browser.driver.findElement(by.id('password')).sendKeys('bbb');
        
            browser.driver.findElement(by.name('commit')).click();  
        
        });
                
    }
  
};


