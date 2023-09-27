describe("8homework" , () => {
    beforeEach(() => {
        cy.visit("/");
        
    })


it("colorLightCheck" , () => {
    cy.get("[ng-reflect-klass='select-button']").click();
    cy.contains("Light").click();
    cy.contains("nb-layout-header_nav").should('have.css', 'background-color', 'rgb(255, 255, 255)');
})

it("colorDarkCheck" , () => {
    cy.get("[class='ng-star-inserted']").click();
    cy.contains("Dark").click();
    cy.contains("nb-layout-header_nav").should('have.css', 'background-color', 'rgb(34, 43, 69)');
})

it("colorCosmicCheck" , () => {
    cy.get("[ng-reflect-klass='select-button']").click();
    cy.contains("Cosmic").click();
    cy.contains("nb-layout-header_nav").should('have.css', 'background-color', 'rgb(50, 50, 89)');
})

it("colorCorporateCheck" , () => {
    cy.get("[ng-reflect-klass='select-button']").click();
    cy.contains("Corporate").click();
    cy.contains("nb-layout-header_nav").should('have.css', 'background-color', 'rgb(255, 255, 255)');
})

it("ToogleFirstItemCheck" , () => {
    cy.visit("/");
    cy.get("[title='Layout']").click();
    cy.get("[title='Accordion']").click();
    cy.contains("Product Details", "nb-accordion-item-header").find("item-body").should("not.be.visible");
    cy.contains("Toggle First Item", "button").click();
    cy.contains("Product Details", "nb-accordion-item-header").find("item-body").should("be.visible");
}) 

it("ModalOverlaysCheck" , () => {
    cy.contains("Modal & Overlays", "menu-title").click();
    cy.contains("Popover", "menu-title").click();
    cy.contains("Right", "button").trigger("mouseenter");
    cy.contains("nb-popover","Hello how are you today?" ).should("be.visible");
})
it("ReturnResultFromDialogCheck" , () => {
    cy.contains("Modal & Overlays", "menu-title").click();
    cy.contains("Dialog", "menu-title").click();  
    cy.contains("Enter Name", "button").click();
    const randomName = 'Andres'; //  Довільне ім'я
    cy.get("[nbinput='placeholder=Name']").type(randomName);
    cy.get("[status='success']").click();
    cy.get("[class='ng-star-inserted']").should("be.visible").contains(randomName);

})

})