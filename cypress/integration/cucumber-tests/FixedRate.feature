Feature: Setting Fixed Rate
    I want to be able create my fixed rate
    
    Background:
        Given I am on logged into Deel
    
    Scenario: To input my fixed rate
        And user clicks on create a contract
        Then selects fixed rate
        And fill the contract
        Then user clicks on create contract button