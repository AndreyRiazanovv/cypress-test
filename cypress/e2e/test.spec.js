describe("First suite" , () => {
    it("First test" , () => {
        cy.visit("/");
        

    })


it("First" , () => {
    cy.visit("/");
    cy.get("[title='Layout']").click();
    cy.get("[title='Accordion']").click();

})
})

describe("Second suite" , () => {
    it("Second test" , () => {
        cy.visit("/");  

    })

    it("Second" , () => {
        cy.visit("/");
        cy.contains("Forms").click();
        cy.contains("Form Layouts").click();

    })
})