export class FormsPageReg {

    elements = {
        nameInput: () => cy.get("#inputName"),
        emailInput: () => cy.get("#inputEmail"),
        passwordInput: () => cy.get("#inputPassword"),
        passwordInputConf: () => cy.get("#inputRePassword")
    }
    enterNameValue(value) {
        this.elements.nameInput().type(value);
    }
    enterEmailValue(value) {
        this.elements.emailInput().type(value);
    }
    enterPasswordlValue(value) {
        this.elements.passwordInput().type(value, { sensitive: true });
        this.elements.passwordInput().should("have.value", value);
    }
    enterPasswordConflValue(value) {
        this.elements.passwordInputConf().type(value, { sensitive: true });
        this.elements.passwordInputConf().should("have.value", value);
    }
}
