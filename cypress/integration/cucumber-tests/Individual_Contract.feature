Feature: Individual Contract
    I want to be able input all my details

    Background:
        Given I am on logged into Deel

    Scenario: To input all my details as an individual contractor
        When user selects i'm an individual
        And input necessary information
        Then click on complete profile
