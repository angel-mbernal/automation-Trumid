class Download {

get downloadBtn() {return cy.get('[id="menu-item-1093"]')}

get downloadPage() {return cy.get('h2').eq(0)}
}
export default new Download();