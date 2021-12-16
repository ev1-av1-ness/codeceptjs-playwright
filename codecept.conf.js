const ConfigHelper = require('./helpers/config_helper.js');

const { setHeadlessWhen } = require('@codeceptjs/configure');


// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.CI);

//???now you can use codeceptjs run --profile firefox

exports.config = {
  tests: './*/*_test.js',
  multiple: {
    basic: {
      browsers: [
        'firefox',
        'chromium',
        'webkit'
      ]
    },
    smoke: {
      grep: '@smoke',
        browsers: [
        'chromium',
        'firefox',
        'webkit'
      ]
    },
    mobile: {
      grep: '@mobile',
      browsers: [
        'chromium',
        'webkit'
      ]
    }
  },
  output: './output',
  helpers: {
    Playwright: {
      //подразумевается, что в этом блоке здесь я могу добавить 2 конфига, 
      //один для мобильных, другой для десктопа,
      //в каждом из них описать параллелизацию, например, в 4 потока вебмобилки,
      //в 8 потоков десктопвеб
      //как-то так?
      url: ConfigHelper.getUrl(),
      browser: ConfigHelper.getBrowser(),
      show: false,
      //emulate: { devices['iPhone 11', 'Android'],
      //isMobile: true,        //эти три строчки вынести в отдельный конфиг для мобилок?
      //deviceScaleFactor: 2
      //}
    },
    MyPlaywright: {
        require: './helpers/myplaywright_helper.js'
    },
    ChaiWrapper : {
      require: 'codeceptjs-chai'
    }
  },
  include: {
    I: './steps_file.js',
    header: './pages/header.js',
    mwebheader: './pages/mobilewebpages/mwebheader.js',
    signInForm: './pages/signInForm.js',
    signUpForm: './pages/signUpForm.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'Codeceptjs-Playwright',
  plugins: {
    //allure: {

   //}
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    video: true
  }
}