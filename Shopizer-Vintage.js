describe('Test av Shopizer', function () {
    this.beforeAll('Open shopizer', function(){
        cy.visit('http://localhost:8080/shop/');
    });
 
    xit ('As a customer, I want to Contact us feature', function(){
        cy.get('a').contains("Contact us").click({ force: true });
        cy.get('[id="name"]').type('Team Yellow');
        cy.get('[id="email"]').type('teamyellow@gmail.com');
        cy.get('[id="subject"]').type('Wrong Size');
        cy.get('[id="comment"]').type('Team Yellow received Wrong size of Bag with ID 2020-001');
       
        cy.get('[id="submitContact"]').click({ force: true });
        //cy.contains('Team Yellow');
    });

    
});
 