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
    finishButton() {
        return cy.get('[data-test="finish"]')
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
    itemPrices() {
        return cy.get('[class="inventory_item_price"]')
    }
}