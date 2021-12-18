const Helper = require('@codeceptjs/helper');
const { devices } = require('@playwright/test');


//пример из документации плейрайта. то есть по возможности хотелось бы разделить на 2 параллели
//то есть Pixel - chrome, iPhone - webkit

class MobilePlaywright extends Helper {

// playwright.config.js
// @ts-check


/** @type {import('@playwright/test').PlaywrightTestConfig} 
* 
*/
config = {

  projects: [
    // "Pixel 4" tests use Chromium browser.
    {
      name: 'Pixel 4',
      use: {
        browserName: 'chromium',
        ...devices['Pixel 4'],
      },
    },

    // "iPhone 11" tests use WebKit browser.
    {
      name: 'iPhone 11',
      use: {
        browserName: 'webkit',
        ...devices['iPhone 11'],
      },
    },
  ],
};

module.exports = MobilePlaywright;