const { I, mwebMainPage } = inject();

module.exports = {
    
  signInButton:'',
  

openSignUpForm() {
    I.click(this.signInButton);
  }

}