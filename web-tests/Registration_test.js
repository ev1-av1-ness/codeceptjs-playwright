var faker = require('faker');

Feature('Registration main page')

Scenario('Registration with correct credentials', ({ I, header, signUpForm }) => {

    var randomEmail = faker.internet.email();
    var randomPass = faker.internet.password();


    I.amOnPage('/')
    header.openSignUpForm()
    signUpForm.signUp(randomEmail, randomPass)
    I.seeInCurrentUrl('/nextPage');
    I.seeElement('#element') 
}).tag('@mobile').tag('@desktop');