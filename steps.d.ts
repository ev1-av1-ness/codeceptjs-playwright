/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type mainPage = typeof import('./pages/mainPage.js');
type mwebMainPage = typeof import('./pages/mobilewebpages/mwebMainPage.js');
type signInForm = typeof import('./pages/signInForm.js');
type MyPlaywright = import('./helpers/myplaywright_helper.js');
type ChaiWrapper = import('codeceptjs-chai');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, mainPage: mainPage, mwebMainPage: mwebMainPage, signInForm: signInForm }
  interface Methods extends Playwright, MyPlaywright, ChaiWrapper {}
  interface I extends ReturnType<steps_file>, WithTranslation<MyPlaywright>, WithTranslation<ChaiWrapper> {}
  namespace Translation {
    interface Actions {}
  }
}
