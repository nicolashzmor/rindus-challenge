@custom-parameters
Feature: Peoples Lead Can Hire New Employee

  Scenario Outline: User adds a new hired employee
    Given I am adding a new employee
    When I input the employee's name: <name>
    And I input the employee's surname: <surname>
    And I select the employee's work_position: <work_position>
    And I input the employee's date_of_birth: <date_of_birth>
    And Submit employee
    Then I see employee "<name> <surname>" on screen

    Examples:
      | name    | surname | work_position        | date_of_birth |
      | Eve     | Nolan   | full-stack developer | 1987-09-29    |
      | Greg    | Ebert   | full-stack developer | 1987-09-29    |
      | Harvey  | Walker  | help desk            | 1987-09-29    |
      | Estelle | Sauer   | product manager      | 1987-09-29    |


  Scenario: User sees an error in the data sheet, and want to cancel the process before finishing
    Given I am adding a new employee
    When I input the employee's name: Jeff
    And I input the employee's surname: Fernand
    And Cancel employee sign-up
    Then I am on EmployeesList






