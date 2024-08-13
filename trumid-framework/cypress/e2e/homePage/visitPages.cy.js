/// <reference types="cypress" />

import ourPlatformTab from "../../pom/platform.page";
import aboutTab from "../../pom/about.page";
import careersPageTab from "../../pom/careers.page";
import quantProdTab from "../../pom/quant.prod";
import newsInsightsTab from "../../pom/news.page";
import downloadTab from "../../pom/download.page";
import contactUsTab from "../../pom/contact.page";

import input from "../../fixtures/homepageTabs.json"

describe("Visit header pages", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should visit our platform page", () => {
    ourPlatformTab.ourPlatformBtn.click();

    //Verification
    ourPlatformTab.ourPlatformPageTitle.should("have.text", input.artScienceTradingTitle);
  });

  it("Should visit about page", () => {
    aboutTab.aboutBtn.click();

    aboutTab.chiefTechOfficer.click();

    //Verification
    aboutTab.chiefTechOfficerName.contains(input.chiefTechOfficerName);
  });

  it("Should visit careers page", () => {
    careersPageTab.careersBtn.click();

    careersPageTab.openPositionsBtn.click();

    careersPageTab.qaAnalystRole.click();

    //Verfication
    careersPageTab.careersRoleTitle.should("have.text", input.qaRoleTitle);
  });

  it("Should visit quantitative products page", () => {
    quantProdTab.quantProdBtn.click();

    //Verification
    quantProdTab.quantProdPageTitle.should("have.text", input.quadProdTitle);
  });

  it("Should visit news and insights page", () => {
    newsInsightsTab.newsInsightsBtn.click();

    //Verification
    newsInsightsTab.newsInsightPageTitle.should("have.text", input.newsInsightsTitle);
  });

  it("Should visit download now page", () => {
    downloadTab.downloadBtn.click();

    //Verification
    downloadTab.downloadPage.should("have.text", input.downloadAppMessage);
  });

  it("Should visit contact us page", () => {
    contactUsTab.contactUsBtn.click();

    contactUsTab.contactUsFirstName.type(input.contactUsFirstName);

    contactUsTab.contactUsLastName.type(input.contactUsLastName);

    contactUsTab.contactUsEmail.type(input.contactUsEmail);

    contactUsTab.contactUsCompanyName.type(input.contactUsCompanyName);

    contactUsTab.contactUsCompanyType.click();

    contactUsTab.contactUsOther.click();

    contactUsTab.contactUsReason.click();

    contactUsTab.contactUsOtherOption.click();

    contactUsTab.contactUsMessage.type(input.contactUsMessage);

    //Verification
    contactUsTab.contactUsForm.contains(input.contactUsScheduleDemo);
  });
});
