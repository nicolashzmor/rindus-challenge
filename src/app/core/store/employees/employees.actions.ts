import {Employee} from "../../models/employee.model";

export namespace EmployeesActions {
  export class FetchEmployees {
    // THIS WON'T FO ANYTHING AS ALL STAT IS MANAGED LOCALLY
    public static type = '[EMPLOYEES] Fetch Employees'
  }

  export class ResetEmployeesDatabase {
    // THIS ACTION IS ONLY FOR TESTING PURPOSES BECAUSE LACK OF DB
    public static type = '[EMPLOYEES] Reset Employees Database'
  }

  export class SignUpNewEmployee {
    public static type = '[EMPLOYEES] Sign Up New Employee'

    constructor(public employee: Employee) {
    }
  }

  export class UpdateEmployeeData {
    public static type = '[EMPLOYEES] Update Employee Data'

    constructor(public employee: Employee) {
    }
  }

  export class SignOffEmployee {
    public static type = '[EMPLOYEES] Sign Off Employee'

    constructor(public employee: Employee, public verification: string) {
    }
  }

  export class UpdateFilterBy {
    public static type = '[EMPLOYEES] Update Filter By'

    public filterBy: string | null

    constructor(filterBy: string) {
      this.filterBy = filterBy || null
    }
  }

}
