const { I, signInForm } = inject();

module.exports = {
    
    fields: {
        email: '#qa_auth_input',
        password: '#qa_auth_input'
    },

    signInButton: '#qa_auth_LoginButton',
  

    signIn(email, password) {
        I.fillField(this.fields.email, email);
        I.fillField(this.fields.password, password);
        I.click(this.signInButton);
  }
}