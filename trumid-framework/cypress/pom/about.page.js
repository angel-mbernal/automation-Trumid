class AboutTab {

    get aboutBtn() {return cy.get('[id="menu-item-218"]')}

    get chiefTechOfficer() {return cy.get('[href="#person_8"]')}

    get chiefTechOfficerName() {return cy.get('h4').eq(8)}

}

export default new AboutTab();