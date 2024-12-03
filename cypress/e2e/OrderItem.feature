Feature: Order item

  Background:
    Given browser is open
    And user is on the main page "https://www.saucedemo.com/"
    When user enters the username
    And user enters the password
    And user clicks the login button

  @OrderItem
  Scenario Outline: Verify user can order items
    When user selects item "<item>"
    And user add item to the cart
    And user selects shopping cart
    And user selects checkout
    And user enters First Name "Joe"
    And user enters Last Name "Bloggs"
    And user enters Postal Code "OL7 9AP"
    And user clicks continue
    And user clicks finish
    Then the thank you message should be presented

    Examples:
      | item          |
      | backpack      |
      | bike-light    |
      | bolt-t-shirt  |
      | fleece-jacket |
      | onesie        |

  @NegativeTest
  Scenario: Verify error message when required fields are missing during checkout
    When user selects item "backpack"
    And user add item to the cart
    And user selects shopping cart
    And user selects checkout
    And user clicks continue
    Then error message "Error: First Name is required" should be displayed
    And user enters First Name "Joe"
    And user clicks continue
    Then error message "Error: Last Name is required" should be displayed
    And user enters Last Name "Bloggs"
    And user clicks continue
    Then error message "Error: Postal Code is required" should be displayed