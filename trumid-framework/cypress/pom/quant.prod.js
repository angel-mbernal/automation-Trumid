class QuantProd {

get quantProdBtn() {return cy.get('[id="menu-item-338"]')}

get quantProdPageTitle() {return cy.get('[class="h2"]')}
}

export default new QuantProd();