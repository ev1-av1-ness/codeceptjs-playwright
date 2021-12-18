const { I, header } = inject();

module.exports = {
    
  signInButton:'#',
  mobSignInButton: '#mobSignInButton',

  addButton:'#',

  

  openSignUpForm() {
    I.click(this.signInButton);
  },

  mobOpenSignUpForm() {
    I.click(this.mobSignInButton);
  },

  openWithButtonAdd() {
    I.click(this.addButton);
  }

}
