const { I, header } = inject();

module.exports = {
    
  signInButton:'#',
  addButton:'#',

  

  openSignUpForm() {
    I.click(this.signInButton);
  },

  openWithButtonAdd() {
    I.click(this.addButton);
  }

}
