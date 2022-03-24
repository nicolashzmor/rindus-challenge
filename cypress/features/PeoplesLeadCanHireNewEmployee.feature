@custom-parameters
Feature: Peoples Lead Can Hire New Employee

  Background:
    Given I navigate to Homepage

  Scenario Outline: User adds a new hired employee
    Given I am adding a new employee
    When I input the employee's name: <name>
    And I input the employee's surname: <surname>
    And I select the employee's work_position: <work_position>
    And I input the employee's date_of_birth: <date_of_birth>
    And Submit employee
    Then I see employee "<name> <surname>" on screen

    Examples:
      | name   | surname | work_position        | date_of_birth |
      | Roger  | Nolan   | Full-Stack Developer | 29.09.1987    |
      | Prenz  | Ebert   | Full-Stack Developer | 29.09.1987    |
      | Hinz   | Walker  | Help Desk            | 29.09.1987    |
      | George | Sauer   | Product Manager      | 29.09.1987    |






