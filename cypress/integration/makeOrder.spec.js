describe('checking the correct operation of DnD and placing orders', function () {
    before(function () {
        cy.visit('http://localhost:3000');
    });

    it('drag the ingredient and drop it into the constructor', function () {
        cy.get('[class^=BurgerConstructor_constructorBlock]')
            .contains('Флюоресцентная булка')
            .should('not.exist');

        cy.contains('Флюоресцентная булка').trigger('dragstart');
        cy.get('[class^=BurgerConstructor_constructorBlock]').trigger('drop');

        cy.get('[class^=BurgerConstructor_constructorBlock]')
            .contains('Флюоресцентная булка')
            .should('exist');

        cy.get('[class^=BurgerConstructor_constructorBlock]')
            .contains('Соус фирменный Space Sauce')
            .should('not.exist');

        cy.contains('Соус фирменный Space Sauce').trigger('dragstart');
        cy.get('[class^=BurgerConstructor_constructorBlock]').trigger('drop');

        cy.get('[class^=BurgerConstructor_constructorBlock]')
            .contains('Соус фирменный Space Sauce')
            .should('exist');
    });

    it('we are trying to place an order but we get to the login page', function () {
        cy.get('button').contains('Оформить заказ').click();
        cy.url().should('eq', 'http://localhost:3000/login');
    });

    it('pass authorization and make order', function () {
        cy.get('input[name="email"]').type('123test123@test.ru');
        cy.get('input[name="pwd"]').type('testtest');
        cy.get('button').contains('Войти').click();
        cy.url().should('eq', 'http://localhost:3000/');
        cy.get('[class^=button_button]').contains('Оформить заказ').click();
        cy.get('[class^=Modal]', {timeout: 30000 }).as('modal').should('exist');
        cy.get('@modal').contains('Ваш заказ Начали готовить');
        cy.get('@modal').contains('Дождитесь готовности на орбитальной станции');
    });
});
