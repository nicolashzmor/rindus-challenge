Feature: Peoples Lead Can Register When an Employee Leaves The Company


  Background:
    Given the below employees are registered
      | name    | surname | work_position        | date_of_birth |
      | Eve     | Nolan   | full-stack developer | 29.09.1987    |
      | Greg    | Ebert   | full-stack developer | 29.09.1987    |
      | Harvey  | Walker  | help desk            | 29.09.1987    |
      | Estelle | Sauer   | product manager      | 29.09.1987    |

  Scenario: User removes an employee from the employee's list
    Given I navigate to EmployeesList
    When I remove the 1st user on the list
    And Confirm Remove Operation by Input User's Name: "Eve Nolan"
    Then I see the belows employees in the list
      | name    | surname |
      | Greg    | Ebert   |
      | Harvey  | Walker  |
      | Estelle | Sauer   |

  Scenario: User is about to remove the wrong employee
    Given I navigate to EmployeesList
    When I remove the 1st user on the list
    And Confirm Remove Operation by Input User's Name: "Greg Ebert"
    And I see the belows employees in the list
      | name    | surname |
      | Eve     | Nolan   |
      | Greg    | Ebert   |
      | Harvey  | Walker  |
      | Estelle | Sauer   |
