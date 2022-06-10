export class CartPage {
    checkoutButton() {
        return cy.get('[data-test="checkout"]')
    }
    pageTitle() {
        return cy.get('.title')
    }
    itemTitle() {
        return cy.get('[class="inventory_item_name"]')
    }
    itemPrice() {
        return cy.get('[class="inventory_item_price"]')
    }
    continueShopping() {
        return cy.get('[data-test="continue-shopping"]')
    }
}



