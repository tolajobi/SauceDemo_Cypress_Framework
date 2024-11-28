Feature: Order Multiple Items And View Tax

@OrderItemTax
Scenario: Verify user can Order Multiple Items And View Tax
  Given browser is open
  When user is on the main page "https://www.saucedemo.com/"
  And user enters the username
  And user enters the password
  And user clicks the login button
  And user selects "Price (low to high)" from the dropdown
  Then user selects item "bike-light"
  Then user selects item "fleece-jacket"
  Then user selects shopping cart
  Then user selects checkout
  And user enters First Name "Joe"
  And user enters Last Name "Bloggs"
  And user enters Postal Code "OL7 9AP"
  And user clicks continue
  And user checks tax is "$4.80"
  And user clicks finish
  Then the thank you message should be presented