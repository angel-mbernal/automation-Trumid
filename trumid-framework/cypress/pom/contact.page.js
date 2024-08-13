class ContactUs {

    get contactUsBtn() {return cy.get('[class="button"]').eq(0)};

    get contactUsFirstName() {return cy.get('[name="firstname"]')}
    
    get contactUsLastName() {return cy.get('[name="lastname"]')}
    
    get contactUsEmail() {return cy.get('[name="email"]').eq(0)}
    
    get contactUsCompanyName() {return cy.get('[name="company"]')}
    
    get contactUsCompanyType() {return cy.get('[class="jcf-select-text"]').eq(0)}
    
    get contactUsOther() {return cy.get('[data-index="4"]')}
    
    get contactUsReason() {return cy.get('[class="jcf-select-text"]').eq(1)}
    
    get contactUsOtherOption() {return cy.get('[data-index="3"]')}
    
    get contactUsMessage() {return cy.get('[id="message-3d330109-c311-4921-b621-78e54f0f0d1b"]')}

    get contactUsForm() {return cy.get('h4').eq(0)}
}

export default new ContactUs();