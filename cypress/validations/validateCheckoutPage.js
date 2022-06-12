import { CheckoutPage } from "../pageObjects/checkoutPage.js"

const CHECKOUT_PAGE = new CheckoutPage();

export const validateContinueButton = () => {
    CHECKOUT_PAGE.continueButton().should('exist');
};

export const validateFinishButton = () => {
    CHECKOUT_PAGE.finishButton().should('exist');
};

export const validateTotalPrice = () => {
    // getting the sum subtotal of both items
    CHECKOUT_PAGE.itemPriceSubtotal().invoke('text').then((text) => {
        //get the number subtotal
        let strippedText = text.split(' ');
        let subtotal = strippedText[2].split('$');
        let numSubtotal = parseFloat(subtotal[1]);

        // getting the individual price of the fleece
        CHECKOUT_PAGE.fleecePrice().invoke('text').then((text) => {
            let fleeceCostRaw = text;
            let strippedFleeceCost = fleeceCostRaw.split('$');
            let fleeceCost = parseFloat(strippedFleeceCost[1]);

            // getting the individual price of the t shirt
            CHECKOUT_PAGE.boltTShirtPrice().invoke('text').then((text) => {
                let boltTShirtCostRaw = text;
                let strippedTShirtCost = boltTShirtCostRaw.split('$');
                let boltTShirtCost = parseFloat(strippedTShirtCost[1]);

                let sumOfItems = parseFloat(boltTShirtCost) + parseFloat(fleeceCost);
                let calculatedTax = (0.08*sumOfItems).toFixed(2);
                let totalIncTax = parseFloat(sumOfItems) + parseFloat(calculatedTax);

                // getting the tax amount
                CHECKOUT_PAGE.itemPriceTax().invoke('text').then((text) => {
                    //get the Tax
                    let strippedText = text.split(' ');
                    let taxTotal = strippedText[1].split('$');
                    let tax = taxTotal[1];

                    // getting the total including tax 
                    CHECKOUT_PAGE.itemPriceTotal().invoke('text').then((text) => {
                        //get the Tax
                        let strippedText = text.split(' ');
                        let numTotal = strippedText[1].split('$');
                        let total = parseFloat(numTotal[1]);

                        // Assertions - Comparing the sum of both items to the subtotal shown at the bottom
                        expect(sumOfItems).to.equal(numSubtotal);
                        expect(calculatedTax).to.equal(tax);
                        expect(totalIncTax).to.equal(total);
                    });
                });
            });
        });
    });
};
