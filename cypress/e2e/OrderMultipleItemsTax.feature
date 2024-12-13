Feature: Order Multiple Items And View Tax

  # Background:
  #   Given browser is open
  #   And user is on the main page "https://www.saucedemo.com/"
  #   When user enters the username
  #   And user enters the password
  #   And user clicks the login button

  @RegressionTest
  Scenario: Verify user can Order Multiple Items And View Tax
    When user selects "Price (low to high)" from the dropdown
    And user selects item "bike-light"
    And user selects item "fleece-jacket"
    And user selects shopping cart
    And user selects checkout
    And user enters First Name "Joe"
    And user enters Last Name "Bloggs"
    And user enters Postal Code "OL7 9AP"
    And user clicks continue
    And user checks tax is "$4.80"
    And user clicks finish
    Then the thank you message should be presented

  @RegressionTest
  Scenario Outline: Verify user can Order Multiple Items And View Tax with different items
    When user selects item "<item>"
    And user selects item "<item2>"
    And user selects shopping cart
    And user selects checkout
    And user enters First Name "Joe"
    And user enters Last Name "Bloggs"
    And user enters Postal Code "OL7 9AP"
    And user clicks continue
    And user clicks finish
    Then the thank you message should be presented

    Examples:
      | item          | item2         |
      | backpack      | bike-light    |
      | bike-light    | bolt-t-shirt  |
      | bolt-t-shirt  | backpack      |
      | fleece-jacket | onesie        |
      | onesie        | fleece-jacket |