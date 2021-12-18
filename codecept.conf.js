const ConfigHelper = require('./helpers/config_helper.js');

const { setHeadlessWhen } = require('@codeceptjs/configure');


// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.CI);

//???now you can use codeceptjs run --profile firefox

exports.config = {
  tests: './web-tests/*_test.js',
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
    // mobile: {
    //   grep: '@mobile',
    //   browsers: [
    //     'chromium',
    //     'webkit'
    //   ]
    // }
    regression: {
      grep: '@regression', //howto:  https://codecept.io/commands/#run-multiple
        browsers: 'chromium'
    }, 
  },
  output: './output',
  helpers: {
    Playwright: {
      url: ConfigHelper.getUrl(),
      browser: ConfigHelper.getBrowser(),
      show: false,
      ignoreHTTPSErrors: true,
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
    cashierPage: './pages/cashierPage/cashierPage.js',
    depositForm: './pages/cashierPage/depositForm.js',
    depositFundsTab: './pages/cashierPage/depositFundsTab.js'
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