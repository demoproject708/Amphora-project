Feature: verify product list items and newsletter signup
  
  Scenario: verify all dropdowns in products

    Given user navigate to the homepage
    When  user click on Symphony CTRM dropdown
    Then  user should be Symphony CTRM page
    When user click on Alchemy CTRM dropdown
    Then user should be Alchemy CTRM page
    When user click on VaR Module dropdown
    Then user should be VaR Module page
    When user click on Trade confirmations manager dropdown
    Then user should be Trade confirmations manager page
    When user click on Freight manager dropdown
    Then user should be Freight manager page
    When user click on Claims manager dropdown
    Then user should be Claims manager page
    When user click on Symphony Credit dropdown
    Then user should be Symphony Credit page


  Scenario: verify newsletter signup
    And user in Homepage
    When user able to click on Newsletter signup
    Then user should in newslwttersignup page 
    When user enter a valid email for signup
    Then user should Enter the FirstName 
    And  user should Enter the LastName
    And  user should able to click on signup button
    And  user click on close button
    And  wait For SpecificTime
    Then  user should see the success message 


    
    

  
    
