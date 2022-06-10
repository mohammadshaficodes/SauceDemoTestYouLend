Feature: Standard adds 2 items to cart and checks total price

I want to check that a standard user can sort products and make a purchase

Scenario: Opening a search engine page
Given User opens Swag Labs home page
When User logs in as standard user
And Adds an item to the cart
Then User views their cart and verifies the correct item is added total price
And User adds another item to the cart
Then User verifies the total price
# And User views their cart and verify that the correct item is added
# And User inputs "bart", "simpson" and "e12 6se" and completes their purchase