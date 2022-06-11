export class ProductsPage {
    cartButton() {
        return cy.get('.shopping_cart_link')
    }
    addFleeceToCartButton() {
        return cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
    }
    addBoltTShirtToCartButton() {
        return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
    }
    sortLoHi() {
        return cy.get('select').select('Price (low to high)')
    }
    firstPrice() {
        return cy.get('[class="inventory_item_price"]').eq(0)
    }
    firstProduct() {
        return cy.get('[class="inventory_item_name"]').eq(0)
    }
    backpackImage() {
        return cy.get('[alt="Sauce Labs Backpack"]')
    }
}