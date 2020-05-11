describe('Test av Shopizer', function () {
    this.beforeAll('Open shopizer', function(){
        cy.visit('http://localhost:8080/shop/');
        cy.viewport(1300,900)
    });
 
    it ('As a customer, I want to Sign In to my Account to Change my password', function(){
       
        cy.get('[id="registerLink"]').contains("Sign in").click({force:true})

        cy.get('[id="signin_userName"]').type('sprint4@gmail.com').should('have.class', 'form-control');

        cy.get('[id="signin_password"]').type('sweden20').should('have.class', 'form-control');
        cy.get('[id="genericLogin-button"]').click()
        cy.wait(1000)
         
        //cy.get('[class="fa fa-angle-right"]').contains('Change password').click({ force: true });
        cy.contains(' Change password').click();
        cy.wait(500)
        //cy.expect("Wrong Size");
        cy.get('[id="currentPassword"]').type('sweden20');
        cy.get('[id="password"]').type('sweden2020').should('have.class', 'span3 required password form-control form-control-md');
        cy.wait(500)
        cy.get('[id="checkPassword"]').type('sweden2020').should('have.class', 'span3 required checkPassword form-control form-control-md');
        cy.get('[id="submitChangePassword"]').click({ force: true });
        cy.wait(1000)
        cy.log("Test Completed Successfully")
        //cy.get('a').contains(' Change password').click({ force: true });
        //cy.contains('Team Yellow');
    }); 

    
});
 