const { devices } = require('playwright');

Feature('Authorization main page')

Scenario('Login with not correct credentials on mweb-iOS', ({I, mwebMainPage, signInForm}) => {
    session('mobile user', devices['iPhone 11'], () => {
        I.amOnPage('')
        mwebMainPage.openSignUpForm()
        I.click('')
        signInForm.signIn('')
        I.see('')
    })
});