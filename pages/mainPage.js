const { I, mainPage } = inject();

module.exports = {
    
  signInButton:'',
  

openSignUpForm() {
    I.click(this.signInButton);
  }

}
