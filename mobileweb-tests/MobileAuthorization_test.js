const { devices } = require('playwright');

Feature('Authorization main page')

Scenario('Login with not correct credentials on mweb-iOS', ({I, mwebheader, signInForm}) => {
    session('mobile user', devices['iPhone 11'], () => {
        I.amOnPage('/')
        mwebheader.openSignUpForm()
        I.click('[class*=]')
        signInForm.signIn('','12345')
        I.see('incorrect')
    })
}).tag('@mobileiOS'); //мучаюсь, как запускать iOS только на webkit

Scenario('Login with not correct credentials on mweb-Android', ({I, mwebheader, signInForm}) => {
    session('mobile user', devices['Pixel 3'], () => {
        I.amOnPage('/')
        mwebheader.openSignUpForm()
        I.click('[class*=]')
        signInForm.signIn('','12345')
        I.see('incorrect')
    })
}).tag('@mobileAndroid'); //..а Android только на chromium

//параллельно