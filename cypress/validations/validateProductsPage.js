import { ProductsPage } from "../pageObjects/productsPage.js"

const PRODUCTS_PAGE = new ProductsPage();

export const validateCartButton = () => {
    PRODUCTS_PAGE.cartButton().should('exist');
};


