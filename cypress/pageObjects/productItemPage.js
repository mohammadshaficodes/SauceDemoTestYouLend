export class ProductItemPage {
    productTitle() {
        return cy.get('[class="inventory_details_name large_size"]')
    }
}