const { devices } = require('playwright');

Feature('Authorization main page')

Scenario('Login with not correct credentials', ({I, header, signInForm}) => {
    session('mobile user', devices['iPhone 11'], () => {
        I.amOnPage('/')
        header.openSignUpForm()
        I.click('[class*=]')
        signInForm.signIn('','12345')
        I.see('incorrect')
    })
}).tag('@desktop'); //а вот этот тест только для десктопа, предположим