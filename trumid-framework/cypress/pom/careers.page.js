class CareersTab {

    get careersBtn() {return cy.get('[id="menu-item-219"]')}

    get openPositionsBtn() {return cy.get('[class="button white scroll-to"]')}

    get qaAnalystRole() {return cy.get('[href="https://www.trumid.com/careers/position/?gh_jid=6028068003"]')}

    get careersRoleTitle() {return cy.get('[class="h2"]')}
    

}

export default new CareersTab();