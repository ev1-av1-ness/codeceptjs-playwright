### Set-up and start tests
First, clone the repo to your local folder.
Navigate to the local folder where your repo was cloned and run:

```
npm install
yarn
```

To run tests:
```
yarn web
yarn mobile
```

### Feature plans:
* Сделать тест хром андройд
* привести в порядок объекты
* написать сложные тесты
* настроить логирование
* настроить конфиги (моб/веб) https://playwright.dev/docs/test-configuration#emulation и дальше уже тест конфиг должен вытянуть через выборку
* докер? сиай? https://playwright.dev/docs/ci#gitlab-ci https://playwright.dev/docs/test-parallel 
* аллюр тестопс и codeceptjs
* параллелизация
* организовать хранение урлов страниц
* как организовать сьюты по браузерам

### Кладбище ссылок
* https://medium.com/digio-australia/what-got-me-to-choose-codeceptjs-b160e2c5c9b9 
* https://codecept.io/ 
* https://docs.w3cub.com/codeceptjs/best/index
* https://codecept.io/basics/#architecture
* https://codecept.io/playwright/#setup
* https://github.com/tomByrer/codecept-playwright-vs-cypressio-fb/blob/master/article.md#quick-cypress-vs-codeceptjsplaywright-comparison
* https://habr.com/ru/post/593577/ 
* https://habr.com/ru/company/superjob/blog/577042/

"Все выбранные нами инструменты принесли нам ожидаемые, а иногда и неожиданные бонусы.
После того, как мы стали использовать Playwright вместо WebDriver, мы получили прирост скорости выполнения теста на 20%. И это только за счет смены инструмента. Кстати, на Хабр есть отличная переводная статья (https://habr.com/ru/company/simbirsoft/blog/539646/), где сравниваются несколько инструментов для автоматизации тестирования, в том числе WebDriver и Playwright."
"Значительно облегчило нам жизнь то, что Playwright из коробки поддерживает кроссбраузерность, в отличие от Puppeteer. Про то, как мы пытались использовать кроссбраузерность для WebDriver и вспоминать страшно: это было очень больно, нестабильно и сложно для настройки. Сейчас же тест, который написан для Chrome, сразу работает и для Safari и для Firefox."

### Плюсы
* Мы можем дотянуться до АПИ Playwright

### Общие плюсы:
* Скорость написания тестов значительно выше, чем на Java или C#.
* Ниже порог входа для старта проекта.
* Больше взаимодействия внутри команды
* Большое количество готовых решений очень разных проблем, которые возникают.
* Кроссбраузерность без лишних бубнов с версиями
* Скорость прохождения - напрямую через протокол
* Поддержка и ревью от FE разработчиков.
* Headless режим
* Даже линтер


### Общие минусы:

### Менее стабильные решения
Для написания хороших тестов нужно понимание, как работает JavaScript

* Схема работы codeceptjs
* Схема работы selenium


CodeceptJS предоставляет дополнительный уровень абстракции над различными библиотечными API. Всё это направлено на то, чтобы разработчик взаимодействовал с тестами, основываясь на сценариях поведения пользователей.

### Сравнение самих JS фреймворков

"In conclusion, our second benchmark showed the following findings:
Cypress exhibits a longer startup time compared to the other tools listed so far. This weighs down short execution scenarios, while it shows less in longer ones.
Cypress seems to be approximating Selenium speed in longer suites, which are the norm in E2E testing. It remains to be seen whether very long-running suites could see Cypress climb up the ranking.
Puppeteer's advantage over Playwright in short tests does not translate to longer executions. Playwright tops the ranking for real-world scenarios.
Playwright and Puppeteer show consistently faster execution times across all three scenarios.
Across real-world scenarios, Playwright showed the highest consistence (lowest variability) in execution time, closely followed by Cypress"
