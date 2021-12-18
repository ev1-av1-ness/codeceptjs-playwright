const { devices } = require('playwright');
var faker = require('faker');

Feature('Other authorization') //сюьт

//перезапуск теста тэг платформа 

Scenario('Login withcorrect credentials', ({I, header, signInForm}) => { //наименование теста 
    session('mobile user', devices['Pixel 3'], () => {
        I.amOnPage('/')
        header.mobOpenSignUpForm()
        //этот идентичен "OnlyDesktopAuthorization_test.js", но отличается ровно одним локатором (mobOpenSignUpForm())
        //если это тест для десктопа и для мобилок одновременно, то как лучше 
        //архитектурно объединить и сократить код? не хочется зависеть от одного только
        //локатора и дублировать тест
        I.click('[class*=')
        signInForm.signIn('','12345')
        I.see('Success')
    })
}); //и так для большинства. 
//но есть некоторые только для @desktop. помогут ли тэги их разделить в параллелизации?
//пока сделала 2 конфига, но они опираются на директории. 
//если они будут опираться вот так

// exports.config = {
//     tests: './*/*_test.js',

// на одну только папку, нужен более умный способ решить, как разбить тесты в прогоны в зависимости
// на "десктоп и моб"
// или "только десктоп"

