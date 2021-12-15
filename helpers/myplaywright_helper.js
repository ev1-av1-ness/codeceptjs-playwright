const Helper = require('@codeceptjs/helper');

class MyPlaywright extends Helper {
  
  page() {
    return this.helpers.Playwright.page;
  }

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

  // Используем Playwright напрямую: https://playwright.dev/docs/navigations#asynchronous-navigation
  async clickAndWaitForNavigation(locator, options) {
    await Promise.all([
      this.page().waitForNavigation({
        ...options,
      }),
      this.page().click(locator),
    ]);
  }

  // Используем Playwright напрямую: https://playwright.dev/docs/api/class-page#page-wait-for-response
  async clickAndWaitForResponse(locator, url, status = 200) {
    const [response] = await Promise.all([
      this.page().waitForEvent('requestfinished', (request) => request.url().includes(url)),
      this.page().waitForResponse(
        (response) => response.url().includes(url) && response.status() === status,
      ),
      this.page().click(locator),
    ]);
    return response;
  }
}

module.exports = MyPlaywright;
