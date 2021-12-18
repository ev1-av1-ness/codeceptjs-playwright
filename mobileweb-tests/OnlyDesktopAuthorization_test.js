const { devices } = require('playwright');

Feature('Authorization main page')

Scenario.only('Login with not correct credentials', ({I, header, signInForm}) => {
    I.amOnPage('/')
    header.openSignUpForm()
    I.click('[class*=]')
    signInForm.signIn('','12345')
    I.see('incorrect')
}).tag('@desktop'); //а вот этот тест только для десктопа, предположим