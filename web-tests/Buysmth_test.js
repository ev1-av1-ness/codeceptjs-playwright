var faker = require('faker');

Feature('Buy')

Scenario('Buy smth', ({ I, header, signUpForm }) => {

    var randomEmail = faker.internet.email();
    var randomPass = faker.internet.password();


    I.amOnPage('/')
    header.openSignUpForm()
    signUpForm.signUp(randomEmail,randomPass)
    I.seeInCurrentUrl('/nextpage')
    header.openWithButtonAdd()
    I.seeInCurrentUrl('/afternextpage')
    I.seeElement('#element')
//todo
}).tag('@mobile').tag('@desktop');