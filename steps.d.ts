/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type header = typeof import('.pages/header.js');
type mwebheader = typeof import('.pages/mobilewebpages/mwebheader.js');
type authPage = typeof import('.pages/authPage.js');
type signUpForm = typeof import('.pages/signUpForm.js');
type signInForm = typeof import('.pages/signInForm.js');
type MyPlaywright = import('./helpers/myplaywright_helper.js');
type ChaiWrapper = import ('codeceptjs-chai');


declare namespace CodeceptJS {
  interface SupportObject { 
    I: I, 
    current: any, 
    header: header, 
    mwebheader: mwebheader, 
    authPage: authPage, 
    signUpForm: signUpForm,
    signInForm: signInForm,
  }
  interface Methods extends Playwright, MyPlaywright, ChaiWrapper {}
  interface I extends ReturnType<steps_file>, WithTranslation<MyPlaywright>, WithTranslation<ChaiWrapper> {}
  namespace Translation {
    interface Actions {}
  }
}
