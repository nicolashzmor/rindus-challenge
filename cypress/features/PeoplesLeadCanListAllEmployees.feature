Feature: Peoples Lead Can List All Employees

  Background:
    Given the below employees are registered
      | name    | surname | work_position        | date_of_birth |
      | Eve     | Nolan   | full-stack developer | 1987-09-29    |
      | Greg    | Ebert   | full-stack developer | 1987-09-29    |
      | Harvey  | Walker  | help desk            | 1987-09-29    |
      | Estelle | Sauer   | product manager      | 1987-09-29    |

  Scenario: User sees all registered employees
    Given I navigate to EmployeesList
    Then I see the belows employees in the list
      | name    | surname |
      | Eve     | Nolan   |
      | Greg    | Ebert   |
      | Harvey  | Walker  |
      | Estelle | Sauer   |

  Scenario: User searches employees by full name
    Given I navigate to EmployeesList
    When I search "Nol"
    Then I see employee "Eve Nolan" on screen

  Scenario: User searches employees by work position
    Given I navigate to EmployeesList
    When I search "full-stack"
    Then I see employee "Eve Nolan" on screen
    And I see employee "Greg Ebert" on screen

