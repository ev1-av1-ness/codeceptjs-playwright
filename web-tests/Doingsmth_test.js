var faker = require('faker');

Feature('Doing smth')

const price = 100;

//todo регистрация юзеров нативная
//регистрация через REST

Scenario('Doing smth ', async ({ I, header, signUpForm }) => {

        var randomEmail = faker.internet.email();
        var randomPass = faker.internet.password();


    I.amOnPage('/')
    header.openSignUpForm()
    signUpForm.signUp(randomEmail, randomPass)
    I.seeInCurrentUrl('/nextpage')
    I.seeElement('#element')
    I.click('#')
    I.click(locate('p').withText(''))


        let balance = await I.grabTextFrom('#')
        let balanceAsNumber = balance.replace(/[^0-9]/g, '')/100
        console.log(balanceAsNumber);


    I.clearField('#input')
    I.fillField('#input', price)
    I.click('#button')
    I.wait(1);
    

        let actualBalance= await I.grabTextFrom('#')
        let actualBalanceAsNumber = actualBalance.replace(/[^0-9]/g, '')/100
        console.log(actualBalanceAsNumber);


        let expectedBalance = balanceAsNumber - price
        console.log(expectedBalance);

    I.assertEqual(actualBalanceAsNumber, expectedBalance);
}).tag('@complex');


//написать тест с модалкой