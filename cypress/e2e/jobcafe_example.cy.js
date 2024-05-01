/// <reference types = "Cypress"/>



describe('Job Cafe sanity spec', { defaultCommandTimeout: 10000 }, () => {


    beforeEach(() => {
        cy.visit('/')
        cy.get('[id="3"]').click()
        //cy.visit('job-page')
    })


    // it('test jobs page with 10 sec wait', { defaultCommandTimeout: 10000 }, () => {
    //     //cy.wait(5000)
    //     // cypress will wait 5 sec for response in case site loading timme is small.
    //     // not the best way of doing it
    //     cy.get('[class="post-item clearfix"]').should('be.visible')


    // })


    // it('test jobs page with 1 sec wait', { defaultCommandTimeout: 1000 }, () => {
    //     cy.get('[class="post-item clearfix"]').should('be.visible')

    // })


    // it('test jobs page with 1 sec wait', () => {
    //     cy.get('[class="post-item clearfix"]', { timeout: 1000 }).should('be.visible')

    // })

    it('test jobs page, search for QA position', { defaultCommandTimeout: 10000 }, () => {
        //cy.get('[placeholder="position"]').type('QA', { force: true })
        //cy.get('button').contains('search').click({ force: true })
        cy.searchForPosition('QA', 'USA', 'Apple')
        cy.get('[class="post-item clearfix"]').contains('QA').should('be.visible')
        cy.get('p').contains ('Apple').should ('be.visibale')
        cy.get('span').contains ('USA').should ('be.visibale') 

    })

    it('test jobs page, search for Developer position', { defaultCommandTimeout: 50000 }, () => {
        // cy.get('[placeholder="position"]').type('developer', { force: true })
        // cy.get('button').contains('search').click({ force: true })
        cy.searchForPosition('Developer')
        cy.get('[class="post-item clearfix"]').contains('Developer').should('be.visible')

    })




})

