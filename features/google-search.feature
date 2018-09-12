Feature: Google Search

  Scenario: Open Google

    Given I open the url "https://www.google.com/"
    Then the title should be "Google"
    And the Google search form exists

  Scenario: Click on I Feel Lucky on Google

    Given I open the url "https://www.google.com/"
    When I click on I Feel Lucky button
    Then the url should be "https://www.google.com/doodles/"
