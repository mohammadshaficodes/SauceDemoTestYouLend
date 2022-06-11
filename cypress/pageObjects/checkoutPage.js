export class CheckoutPage {
    firstNameInput(firstName) {
        return cy.get('[data-test="firstName"]')
    }
    lastNameInput(lastName) {
        return cy.get('[data-test="lastName"]')
    }
    postcodeInput(postcode) {
        return cy.get('[data-test="postalCode"]')
    }
    continueButton() {
        return cy.get('[data-test="continue"]')
    }
    itemPriceSubtotal() {
        return cy.get('[class="summary_subtotal_label"]')
    }
    itemPriceTax() {
        return cy.get('[class="summary_tax_label"]')
    }
    itemPriceTotal() {
        return cy.get('[class="summary_total_label"]')
    }
    fleeceJacket() {
        return cy.get('[class="inventory_item_name"]').eq(0)
    }
    boltTShirt() {
        return cy.get('[class="inventory_item_name"]').eq(1)
    }
    fleecePrice() {
        return cy.get('[class="inventory_item_price"]').eq(0)
    }
    boltTShirtPrice() {
        return cy.get('[class="inventory_item_price"]').eq(1)
    }
    menuButton() {
        return cy.get('[class="bm-burger-button"]')
    }
    logoutButton() {
        return cy.get('[id="logout_sidebar_link"]')
    }
}