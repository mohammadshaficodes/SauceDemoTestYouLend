Feature: Standard adds 2 items to cart and checks total price

I want to check that a standard user can sort products and make a purchase

Scenario: Adding 2 items to cart and verifying the total cost
Given User opens Swag Labs home page
And User logs in as standard user
And Adds an item to the cart
And User views their cart and verifies the correct item is added total price
When User adds another item to the cart
Then User verifies the total price
When User Logs out and Attempts to Login as "locked_out_user"
Then User is shown an error message

Scenario: Logging in as problem_user and finds 3 problems
Given User opens Swag Labs home page
And User logs in as problem_user
When User sorts products from low to high
And User clicks on the first product
# Then The Onesie product page shoulld be displayed