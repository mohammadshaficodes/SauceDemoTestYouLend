import { CheckoutPage } from "../pageObjects/checkoutPage.js"

const CHECKOUT_PAGE = new CheckoutPage();

export const validateContinueButton = () => {
    CHECKOUT_PAGE.continueButton().should('exist');
};

export const validateFinishButton = () => {
    CHECKOUT_PAGE.finishButton().should('exist');
};

export const validateTotalPrice = () => {

    // getting the individual price of the fleece
    CHECKOUT_PAGE.fleecePrice().invoke('text').then((text) => {
        cy.log(text);
    });

    // getting the individual price of the t shirt
    CHECKOUT_PAGE.boltTShirtPrice().invoke('text').then((text) => {
        cy.log(text);
    });

    // getting the subtotal of both items 
    CHECKOUT_PAGE.itemPriceSubtotal().invoke('text').then((text) => {
        //get the number subtotal
        cy.log(text);
        let strippedText = text.split(' ');
        cy.log(strippedText);
        let subtotal = strippedText[2].split('$');
        let numSubtotal = subtotal[1];
        cy.log(numSubtotal);
    });

    // getting the tax amount
    CHECKOUT_PAGE.itemPriceTax().invoke('text').then((text) => {
        //get the Tax
        cy.log(text);
        let strippedText = text.split(' ');
        cy.log(strippedText);
        let taxTotal = strippedText[1].split('$');
        let tax = taxTotal[1];
        cy.log(tax);
    });

    // getting the total including tax 
    CHECKOUT_PAGE.itemPriceTotal().invoke('text').then((text) => {
        //get the Tax
        cy.log(text);
        let strippedText = text.split(' ');
        cy.log(strippedText);
        let numTotal = strippedText[1].split('$');
        let total = numTotal[1];
        cy.log(total);
    });


    // let theItemPrice = CHECKOUT_PAGE.itemPriceSubtotal();
    // theItemPrice.invoke('text').then((text) => {
    //     let theItemPrice1 = text;

        // CHECKOUT_PAGE.itemPrices().invoke('text').then((text) => {
        //     let yieldedText = text;
        //     let replacedText = yieldedText.split("$");
        //     let shiftedText = replacedText.shift();
        //     const totalPrice = parseFloat(replacedText[0]) + parseFloat(replacedText[1]);
        //     const tax = (0.08*totalPrice).toFixed(2);
        //     const realTotal = (parseFloat(totalPrice) + parseFloat(tax)).toFixed(2);
    
        //     cy.log(realTotal);
    
        //     return realTotal;
        // });



    // }).should('eq', '71.26');

    // CHECKOUT_PAGE.itemPrices().invoke('text').then((text) => {
    //     let yieldedText = text;
    //     let replacedText = yieldedText.split("$");
    //     let shiftedText = replacedText.shift();
    //     const totalPrice = parseFloat(replacedText[0]) + parseFloat(replacedText[1]);
    //     const tax = (0.08*totalPrice).toFixed(2);
    //     const realTotal = (parseFloat(totalPrice) + parseFloat(tax)).toFixed(2);

    //     cy.log(realTotal);

    //     return realTotal;
    // }).should('eq', theItemPrice);
    // //.should('eq', '71.26')

        // CHECKOUT_PAGE.itemPrices().invoke('text').then((text) => {
    //     let yieldedText = text;
    //     let replacedText = yieldedText.split("$");
    //     let shiftedText = replacedText.shift();
    //     const totalPrice = parseFloat(replacedText[0]) + parseFloat(replacedText[1]);
    //     const tax = (0.08*totalPrice).toFixed(2);
    //     const realTotal = (parseFloat(totalPrice) + parseFloat(tax)).toFixed(2);

    //     cy.log(realTotal);

    //     return realTotal;
    // });


};
