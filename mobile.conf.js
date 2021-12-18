const ConfigHelper = require('./helpers/config_helper.js');

const { setHeadlessWhen } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.CI);

exports.config = {
  tests: './*/*_test.js',
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
//   multiple: {
    // basic: {
    //   browsers: [
    //     'firefox',
    //     'chromium',
    //     'webkit'
    //   ]
    // },
    // smoke: {
    //   grep: '@smoke', //yarn 
    //     browsers: [
    //     'chromium',
    //     'firefox',
    //     'webkit'
    //   ]
    // },
    // mobile: {
    //   grep: '@mobileiOS',
    //   browser: 
    //     'webkit',
    //   grep: '@mobileAndroid',
    //   browser:
    //     'chromium'
    // }
//   },
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
  video: true,
  bootstrap: null,
  mocha: {},
  name: 'Codeceptjs-Playwright',
  plugins: {
    //allure: {

   //} 
},
  output: './output/mobile',
  helpers: {
    Playwright: {
      url: ConfigHelper.getUrl(),
      browser: process.env.BROWSER || 'chromium',
      show: true,
      emulate: {
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
        viewport: {
          width: 375, height: 812,
        },
        deviceScaleFactor: 1,
        hasTouch: true,
        ignoreHTTPSErrors: true,
        locale: 'ru-Ru',
        },
      }
    },
    MyPlaywright: {
        require: './helpers/myplaywright_helper.js'
    },
    ChaiWrapper : {
      require: 'codeceptjs-chai'
    }
  }