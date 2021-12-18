const ConfigHelper = require('./helpers/config_helper.js');

const { setHeadlessWhen } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.CI);

exports.config = {
  tests: './mobileweb-tests/*_test.js',
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
    //   grep: '@smoke',
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
      browser: ConfigHelper.getBrowserMobile(),
      show: true,
      emulate: ConfigHelper.getOSMobile(),
      //isMobile: true,       
      //deviceScaleFactor: 2
      }
    },
    MyPlaywright: {
        require: './helpers/myplaywright_helper.js'
    },
    ChaiWrapper : {
      require: 'codeceptjs-chai'
    }
  }