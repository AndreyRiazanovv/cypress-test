import { createYield } from "typescript";

export class FormsPage {

    elements = {
        emailInput: () => cy.get("#inputEmail"),
        passwordInput: () => cy.get("#inputPassword")
    }
    enterEmailValue(value) {
        this.elements.emailInput().type(value);
    }
    enterPasswordlValue(value) {
        this.elements.passwordInput().type(value, {sensitive: true});
        this.elements.passwordInput().should("have.value", value);
    }
}
