//const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
// setHeadlessWhen(process.env.HEADLESS);

//now you can use codeceptjs run --profile firefox

exports.config = {
  tests: './*/*_test.js',
  multiple: {
  //   basic: {
  //     browsers: [
  //     'firefox',
  //     'chrome'
  // ]
  //   },
      smoke: {
        grep: '@smoke',
        browsers: [
          'chrome',
          'firefox',
          'safari'
        ]
      }
  },
  output: './output',
  helpers: {
    Playwright: {
      url: '',
      //url: process.env.URL,
      //browser: process.profile
      show: false,
      browser: 'chromium'
      //emulate: { devices['iPhone 11', 'Android'],
      //isMobile: true,
      //deviceScaleFactor: 2
      //}
    },
    MyPlaywright: {
      require: './helpers/myplaywright_helper.js',
    },
    ChaiWrapper : {
      require: 'codeceptjs-chai'
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/mainPage.js',
    mwebMainPage: './pages/mobilewebpages/mwebMainPage.js',
    signInForm: './pages/signInForm.js'
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
    }
  }
}