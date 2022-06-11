import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import { LoginPage } from "../../pageObjects/loginPage.js"
import { ProductsPage } from "../../pageObjects/productsPage.js"
import { CheckoutPage } from "../../pageObjects/checkoutPage.js"
import { CartPage } from "../../pageObjects/cartPage.js"
import { ProductItemPage } from "../../pageObjects/productItemPage.js";
import * as loginValidations from "../../validations/validateLoginPage.js"
import * as cartPageValidations from "../../validations/validateCartPage.js"
import * as checkoutPageValidations from "../../validations/validateCheckoutPage.js"
import * as productsPageValidations from "../../validations/validateProductsPage.js"
import * as productItemValidations from "../../validations/validateProductItemPage.js"
import userTest from "../../fixtures/testUser.json"

const login = new LoginPage();
const productsPage = new ProductsPage();
const checkout = new CheckoutPage();
const cartPage = new CartPage();
const product = new ProductItemPage();

Given('User opens Swag Labs home page', () => {
    login.getUrl();
    login.getTitle();
    loginValidations.validateLogo();
});

When('User logs in as standard user', () => {
    cy.fixture('testUser').as('userTest')
    login.usernameField().type(userTest.username);
    login.passwordField().type(userTest.password);
    login.logInButton().click();
});

And('Adds an item to the cart', () => {
    productsPage.addFleeceToCartButton().click();
});

Then('User views their cart and verifies the correct item is added total price', () => {
    productsPage.cartButton().click();
    cartPageValidations.validateTitle();
    cartPageValidations.validateItemTitle();
    cartPageValidations.validateItemPrice();
});

And('User adds another item to the cart', () => {
    cartPage.continueShopping().click();
    productsPage.addBoltTShirtToCartButton().click();
    productsPage.cartButton().click();
});

Then('User verifies the total price', () => {
    cartPage.checkoutButton().click();
    checkout.firstNameInput().type('Mohammad');
    checkout.lastNameInput().type('Shafi');
    checkout.postcodeInput().type('RM6 4BS');
    checkout.continueButton().click();
    checkoutPageValidations.validateTotalPrice();
})

Given('User Logs out and Attempts to Login as {string}', (user) => {
    checkout.menuButton().click();
    checkout.logoutButton().click();
    login.usernameField().type(user);
    login.passwordField().type('secret_sauce');
    login.logInButton().click();
});

Given('User is shown an error message', () => {
    loginValidations.validateErrorMessage();
});

When('User logs in as problem_user', () => {
    login.usernameField().type('problem_user');
    login.passwordField().type('secret_sauce');
    login.logInButton().click();
});

And('User sorts products from low to high', () => {
    productsPage.sortLoHi();
    //Un comment line below to catch the sorting by price bug
    //productsPageValidations.validateLowestPrice();

    //Uncomment line below to see catch the incorrect product image bug
    //productsPageValidations.validateBackpackImage();
});

And('User clicks on the first product', () => {
    productsPage.firstProduct().click();
    //Un comment line below to catch the bug opening incorrect product pages when clicking on a product
    //productItemValidations.validateItemTitle();
});