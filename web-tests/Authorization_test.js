Feature('Authorization main page')

Scenario('Login with correct credentials', ({ I, header, signInForm }) => {
    I.amOnPage('/')
    header.openSignUpForm()
    I.click('[class*=]')
    signInForm.signIn('','12345')
    I.seeInCurrentUrl('/nextpage');
    I.waitForVisible('#element') 
    //не поняла, чем отличается по доке I.seeElement и I.waitForVisible
});