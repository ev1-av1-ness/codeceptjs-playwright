const { I, signUpForm } = inject();

module.exports = {
    
    fields: {
        email: '#qa_auth_input',
        password: '#qa_auth_input'
    },
    
    signUpButton: '#qa_auth_SignUpButton',
    agreementCheckbox: '#qa_auth_agreeCheckbox',
    

    signUp(randomEmail, randomPass) {
        I.fillField(this.fields.email, randomEmail);
        I.fillField(this.fields.password, randomPass);
        I.checkOption(this.agreementCheckbox);
        I.clickAndWaitForNavigation(this.signUpButton);
  }
}