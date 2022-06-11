import { ProductsPage } from "../pageObjects/productsPage.js"

const PRODUCTS_PAGE = new ProductsPage();

export const validateCartButton = () => {
    PRODUCTS_PAGE.cartButton().should('exist');
};

export const validateLowestPrice = () => {
    PRODUCTS_PAGE.firstPrice().should('have.text', '$7.99')
}

export const validateBackpackImage = () => {
    PRODUCTS_PAGE.backpackImage().should('contain', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg')
}


