Feature('Make smth in different ways')

const constantNumber = 100;

//todo регистрация юзеров через UI
//регистрация через REST

Scenario('Make smth', ({ I, mainPage, signInForm }) => {
    I.amOnPage('')
    mainPage.openSignUpForm()
    I.click('')
    signInForm.signIn('')
    I.see('')
    I.click('')
    I.click(locate('').withText(''))

    async function countNumber() {
        await I.grabTextFrom('');
        //через replace
        //return countedNumber
    }
    pause()

    let expectedNumber = countedNumber - constantNumber

    I.fillField('', firstNumber)
    I.click('')
    I.assertEqual(countedNumber, expectedNumber);
}).tag('@smoke');