/// <reference types = "Cypress"/>

describe('access travel main manu sanity test suite', () => {


    const destination = '[name="Filter.DestinationId"]'
    const search_button = '[class="btn"]'
    const children_number = '[name="Filter.ChildrenNum"]'
    const children_age0 = '[name="Filter.ChildrensAge[0]"]'
    const children_age1 = '[name="Filter.ChildrensAge[1]"]'
    const children_age2 = '[name="Filter.ChildrensAge[2]"]'
    const children_age3 = '[name="Filter.ChildrensAge[3]"]'
    const children_age4 = '[name="Filter.ChildrensAge[4]"]'
    const checkin = '[name="Filter.CheckIn"]'
    const checkout = '[name="Filter.CheckOut"]'
    const error = '[class="field-validation-error"]'
    const adults_number = '[name="Filter.AdultNum"]'

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
    })

    beforeEach(() => {
        cy.visit('https://www.accesstravel.com/en-US/Hotel/List')
    })

    it('verifying valid destination Jerusalem ', () => {
        cy.get(destination).should('be.visible')
        cy.get(destination).select('Jerusalem').should('have.value', '8')
        cy.get(search_button).click()
        cy.url().should('include', 'Filter.DestinationId=8')

    })

    it('verifying valid destination London ', () => {
        cy.get(destination).should('be.visible')
        cy.get(destination).select('London').should('have.value', '31')
        cy.get(search_button).click()
        cy.url().should('include', 'Filter.DestinationId=31')

    })

    it('verifying valid destination New York ', () => {
        cy.get(destination).should('be.visible')
        cy.get(destination).select('New York').should('have.value', '51')
        cy.get(search_button).click()
        cy.url().should('include', 'Filter.DestinationId=51')

    })

    it('positive test valid number of chidren - 1 ', () => {
        cy.get(destination).select('London')
        cy.get(children_number).should('be.visible')
        cy.get(children_number).clear().type('1').should('have.value', '1', { force: true })
        cy.get('.hotels-wrap').click()
        cy.get('[class="row children-age"]').should('be.visible')
        cy.get('[name="Filter.ChildrensAge[0]').clear().type('1', { force: true })
        cy.get(children_age0).should('be.visible')
        cy.get(children_age0).clear().type('13').should('have.value', '13', { force: true })
        cy.get(search_button).click()
        cy.url().should('include', 'Filter.ChildrensAge%5B0%5D=13')

    })

    it('positive test valid number of chidren - 5 ', () => {
        cy.get(destination).select('London')
        cy.get(children_number).should('be.visible')
        cy.get(children_number).clear().type('5').should('have.value', '5', { force: true })
        cy.get('.hotels-wrap').click()
        cy.get('[class="row children-age"]').should('be.visible')
        cy.get('[name="Filter.ChildrensAge[0]').clear().type('1', { force: true })
        cy.get(children_age0).should('be.visible')
        cy.get(children_age0).clear().type('13').should('have.value', '13', { force: true })
        cy.get(children_age1).should('be.visible')
        cy.get(children_age1).clear().type('11').should('have.value', '11', { force: true })
        cy.get(children_age2).should('be.visible')
        cy.get(children_age2).clear().type('9').should('have.value', '9', { force: true })
        cy.get(children_age3).should('be.visible')
        cy.get(children_age3).clear().type('7').should('have.value', '7', { force: true })
        cy.get(children_age4).should('be.visible')
        cy.get(children_age4).clear().type('5').should('have.value', '5', { force: true })
        cy.get(search_button).click()
        cy.url().should('include', 'Filter.ChildrensAge', '13', '11', '9', '7', '5')

    })

    it('negative test - invalid checkin date ', () => {
        cy.get(destination).select('London')
        cy.get(checkin).clear().type('2023-11-11').invoke("val").should('eq', '2023-11-11')
        cy.get(search_button).click()
        cy.get(error).should('be.visible').should('have.text', 'Filter_CheckIn_MinValue_en-US')

    })

    it('negative test - invalid checkout date ', () => {
        cy.get(destination).select('London')
        cy.get(checkout).clear().type('2023-12-12').invoke("val").should('eq', '2023-12-12')
        cy.get(search_button).click()
        cy.get(error).should('be.visible').should('have.text', 'Invalid Check out Date')

    })


    it('negative test - invalid number of adults ', () => {
        cy.get(destination).select('London')
        cy.get(adults_number).clear().type(10).invoke("val").should('eq', '10')
        cy.get(search_button).click()
        cy.get(error).should('be.visible').should('have.text', 'Invalid value')

    })

    it('negative test - invalid number of children', () => {
        cy.get(destination).select('London')
        cy.get(children_number).clear().type(11).invoke("val").should('eq', '11')
        cy.get(search_button).click()
        cy.get(error).should('be.visible').should('have.text', 'Invalid number')

    })


})



