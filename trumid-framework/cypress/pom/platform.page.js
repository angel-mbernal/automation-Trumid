class OurPlatformTab {

    get ourPlatformBtn() {return cy.get ('[id="menu-item-223"]')}

    get ourPlatformPageTitle() {return cy.get ('[class="h2"]')}
}

export default new OurPlatformTab();
