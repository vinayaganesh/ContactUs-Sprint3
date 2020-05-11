describe('Test av Shopizer', function () {
    this.beforeAll('Open shopizer', function(){
        cy.visit('http://localhost:8080/shop/');
        cy.viewport(1300,900)
    });

    it ('As a customer, I want to Search for a Product', function(){
       
        cy.get('[id="searchField"]').type("Laptop").should('have.attr', 'type', 'text')
        //expect('id').to.have.text("Laptop")


        cy.get('[class="btn btn-default btn-block btn-lg searchButton"]').click({force:true});
        cy.wait(1000)

        cy.log("Test Completed Successfully")
       
        
    }); 

    
});
 