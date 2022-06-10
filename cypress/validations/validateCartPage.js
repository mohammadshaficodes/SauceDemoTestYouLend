import { CartPage } from "../pageObjects/cartPage.js"

const CART_PAGE = new CartPage();

export const validateTitle = () => {
    CART_PAGE.pageTitle().should('have.text', 'Your Cart');
};

export const validateItemTitle = () => {
    CART_PAGE.itemTitle().should('have.text', 'Sauce Labs Fleece Jacket')
};

export const validateItemPrice = () => {
    CART_PAGE.itemPrice().should('have.text', '$49.99')
};
