Feature('Authorization main page')

Scenario('Login with correct credentials', ({ I, mainPage, signInForm }) => {
    I.amOnPage('')
    mainPage.openSignUpForm()
    I.click('')
    signInForm.signIn('')
    I.see('')
})
//.tag('@smoke');