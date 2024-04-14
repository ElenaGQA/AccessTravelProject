/// <reference types = "Cypress"/>


describe('access travel main manu sanity test suite', () => {

    const hotels = '.hotels'
    const class_hotels = '[class="hotels"]'
    const guides = '.guides'
    const class_guides = '[class="guides js-list-guides"]'
    const tours = '.js-list-tours'
    const class_tours = '[class="tours js-list-tours"]'
    const things_to_do = '.attraction-link'
    const class_things_to_do = '[class="tours attraction-link"]'



    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
    })

    beforeEach(() => {
        cy.visit('https://www.accesstravel.com/en-US/Home/Index')
    })

    it('verify hotels button', () => {
        cy.get(hotels).should("be.visible")
        cy.get(class_hotels).invoke('text').should('eq', ' Hotels')
        cy.get(class_hotels).click()
        cy.url().should('include', '/Hotel/List')

    })

    it('verify guides button', () => {
        cy.get(guides).should("be.visible")
        cy.get(class_guides).should('have.text', '\n                            Guides\n                        ')
        cy.get(class_guides).click()
        cy.url().should('include', 'Guide/List?DestinationId=2')

    })

    it('verify tours button', () => {
        cy.get(tours).should("be.visible")
        cy.get(class_tours).should('have.text', '\n                            Tours\n                        ')
        cy.get(class_tours).click()
        cy.url().should('include', 'Tour/List?DestinationId=2')

    })

    it('verify things to do button', () => {
        cy.get(things_to_do).should("be.visible")
        cy.get(class_things_to_do).should('have.text', '\n                            Things to do\n                        ')
        cy.get(class_things_to_do).click()
        cy.url().should('include', 'accesstravel.com/en-US')

    })

    it('verify login button', () => {
        cy.get('li.menu-item-new').invoke('css', 'visibility', 'visible');
        cy.contains('Login').should("be.visible")
        cy.contains('Login').should('have.text', "Login")
        cy.contains('Login').click()
        cy.url().should('include', 'Account/Login')

    })

    it('verify signup button', () => {
        cy.get('li.menu-item-new').invoke('css', 'visibility', 'visible');
        cy.contains('Signup').should("be.visible")
        cy.contains('Signup').should('have.text', "Signup")
        cy.contains('Signup').click()
        cy.url().should('include', 'Account/Register')

    })


})