const { I, mwebheader } = inject();

module.exports = {
    
  signInButton:'#',
  

openSignUpForm() {
    I.click(this.signInButton);
  }

}