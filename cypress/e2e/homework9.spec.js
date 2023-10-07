import { FormsPage } from "../pages/PageObjectLogin";
import { NavMenuComponent } from "../pages/NavigationMenuComponent";
import { FormsPageReg } from "../pages/FormsPageReg";
import { DatepickerModel } from "..//pages/PageObjectCal"

describe("9homeworkLogin" , () => {
    beforeEach(() => {
        cy.visit("/");
        
    })

    it("LoginPageCheck" , () => {
        const menuComponent = new NavMenuComponent();
        menuComponent.openAuthPage
        cy.contains("Login").click();
        const forms = new FormsPage();
        forms.enterEmailValue("value");
        forms.emailInput.should("have.value", "value");
        forms.enterPasswordValue("test");
        cy.contains("LOG IN").click();
        cy.get("[class='user-picture image ng-star-inserted']").should("be.visible");
    })

    it("RegisterPageCheck" , () => {
        const menuComponent = new NavMenuComponent();
        menuComponent.openAuthPage
        cy.contains("Register").click();
        const forms = new FormsPageReg();
        forms.enterNameValue("value");
        forms.nameInput.should("have.value", "value");
        forms.enterEmailValue("value");
        forms.emailInput.should("have.value", "value");
        forms.enterPasswordValue("test");
        forms.enterPasswordConflValue("test");
        cy.get("[class='custom-checkbox']").check();
        cy.contains("Register").click();
        cy.get("[class='user-picture image ng-star-inserted']").should("be.visible");
    })
    it("ForgotPasswordCheck" , () => {
        const menuComponent = new NavMenuComponent();
        menuComponent.openAuthPage
        cy.contains("Request Password").click();
        cy.get('input[name="Email"]').type('andreyryazanov11@gmail.com');
        cy.contains("Request Password").click();
    })
    it("ForgotPasswordButtonsCheck" , () => {
        const menuComponent = new NavMenuComponent();
        menuComponent.openAuthPage
        cy.contains("Request Password").click();
        cy.contains('Back to Log In').click();
    cy.url().should('include', 'Login', 'Hello! Log in with your email'); 
    cy.go('back');
    
    cy.contains('Register').click();
    cy.url().should('include', 'Register');  

    })
    it("DatepickCal" , () => {
        const forms = new DatepickerModel();
        cy.get("[title='Forms']").click();
    cy.contains("Datepicker").click();
    DatepickerPage.openDatepicker();
    DatepickerPage.selectToday();

    // Перевірка значення в інпуті Common Datepicker
    DatepickerPage.getCommonDatepickerValue().should('eq', Cypress.moment().format('YYYY-MM-DD'));
  });
});

