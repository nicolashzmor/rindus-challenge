Feature: Peoples Lead Can Update Employee's Registry

  Background:
    Given the below employees are registered
      | name    | surname | work_position        | date_of_birth |
      | Eve     | Nolan   | full-stack developer | 29.09.1987    |
      | Greg    | Ebert   | full-stack developer | 29.09.1987    |
      | Harvey  | Walker  | help desk            | 29.09.1987    |
      | Estelle | Sauer   | product manager      | 29.09.1987    |

  Scenario: User changes the name of an existing Employee
    Given I navigate to EmployeesList
    When I edit the 1st employee
    And I input the employee's name: Eva
    And Submit employee
    Then I see the belows employees in the list
      | name    | surname | work_position        |
      | Eva     | Nolan   | Full-Stack Developer |
      | Greg    | Ebert   | Full-Stack Developer |
      | Harvey  | Walker  | Help Desk            |
      | Estelle | Sauer   | Product Manager      |


  Scenario: User changes the work position of an existing Employee
    Given I navigate to EmployeesList
    When I edit the 1st employee
    When I select the employee's work_position: Front-End Developer
    And Submit employee
    Then I see the belows employees in the list
      | name    | surname | work_position        |
      | Eve     | Nolan   | Front-End Developer  |
      | Greg    | Ebert   | Full-Stack Developer |
      | Harvey  | Walker  | Help Desk            |
      | Estelle | Sauer   | Product Manager      |
