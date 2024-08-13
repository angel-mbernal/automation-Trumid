class NewsInsights {

get newsInsightsBtn() {return cy.get('[id="menu-item-1888"]')}

get newsInsightPageTitle() {return cy.get('[class="h2"]')}
}

export default new NewsInsights();