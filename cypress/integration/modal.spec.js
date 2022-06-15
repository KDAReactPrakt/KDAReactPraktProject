describe('the modal window of the ingredient with all the data opens/closes correctly', function () {
    before(function () {
        cy.visit('http://localhost:3000');
    });

    it('open the modal window of the ingredient', function () {
        cy.contains('Флюоресцентная булка').click();
        cy.get('[class^=Modal]').as('modal');
        cy.get('@modal').contains('Детали ингредиента');
        cy.get('@modal').contains('Калории, ккал');
        cy.get('@modal').contains('Жиры, г');
        cy.get('@modal').contains('26');
    });

    it('close the modal window', function () {
        cy.get('[class^=Modal_closeIcon]').click();
        cy.get('[class^=Modal_closeIcon]').should('not.exist');
    });
});
