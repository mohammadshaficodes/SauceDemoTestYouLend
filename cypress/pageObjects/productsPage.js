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
}