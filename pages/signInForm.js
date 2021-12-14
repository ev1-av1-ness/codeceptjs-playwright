const { I, signInForm } = inject();

module.exports = {
    
    fields: {
        email: '',
        password: ''
  },

    signInButton: '',
  

signIn(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.signInButton);
  }
}