import { LoginPage } from "../pageObjects/loginPage.js"

const LOG_IN_PAGE = new LoginPage();

export const validateUrl = () => {
    LOG_IN_PAGE.getUrl().should('have.text', 'https://www.saucedemo.com/');

};

export const validateTitle = () => {
    LOG_IN_PAGE.getTitle().should('have.text', 'Swag Labs');
};

export const validateLogo = () => {
    LOG_IN_PAGE.logInLogo().should('exist');
};

export const validateErrorMessage = (error) => {
    LOG_IN_PAGE.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
}
