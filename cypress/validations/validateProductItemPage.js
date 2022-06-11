import { ProductItemPage } from "../pageObjects/productItemPage";

const PRODUCT_ITEM_PAGE = new ProductItemPage()

export const validateItemTitle = () => {
    PRODUCT_ITEM_PAGE.productTitle().should('have.text', 'Sauce Labs Onesie')
};