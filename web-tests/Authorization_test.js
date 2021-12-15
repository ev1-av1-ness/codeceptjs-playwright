Feature('Authorization main page')

Scenario('1-й способ clickAndWaitForNavigation', ({ I, mainPage, signInForm }) => {
    I.amOnPage('https://www.superjob.ru/');
    I.clickAndWaitForNavigation('.f-test-button-Najti'); // Ожидаем окончания навигации после клика
    I.seeInCurrentUrl('/vacancy/search/');
    I.seeElement('.f-test-button-Rasshirennyj_poisk');
});

Scenario('2-й способ clickAndWaitForResponse', ({ I, mainPage, signInForm }) => {
    I.amOnPage('https://www.superjob.ru/');
    I.clickAndWaitForResponse('.f-test-button-Najti', 'vacancySearchInfo'); // Ожидаем какой-нибудь последний запрос от бекенда (преедварительно смотрим что там уходит в Networks)
    I.seeInCurrentUrl('/vacancy/search/'); 
    I.seeElement('.f-test-button-Rasshirennyj_poisk');
});

Scenario('3-й способ: увеличиваем таймаут в конфиге и используем wait', ({ I, mainPage, signInForm }) => {
    I.amOnPage('https://www.superjob.ru/');
    I.click('.f-test-button-Najti');
    I.waitInUrl('/vacancy/search/');
    I.waitForVisible('.f-test-button-Rasshirennyj_poisk');
}).config({ waitForTimeout: 30000 }); // Проще прям в конфиге поставить для всех тестов