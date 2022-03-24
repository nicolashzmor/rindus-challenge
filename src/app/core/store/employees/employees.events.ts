export namespace EmployeesEvents {
  export class SignUpNewEmployeeSucceeded {
    public static type = '[EMPLOYEES] Sign Up Employee Succeeded'
  }

  export class SignUpNewEmployeeFailed {
    public static type = '[EMPLOYEES] Sign Up Employee Failed'
  }

  export class UpdateEmployeeDataSucceeded {
    public static type = '[EMPLOYEES] Update Employee Succeeded'
  }
  export class UpdateEmployeeDataFailed {
    public static type = '[EMPLOYEES] Update Employee Failed'
  }
  export class SignOffEmployeeSucceeded {
    public static type = '[EMPLOYEES] Sign Off Employee Succeeded'
  }
  export class SignOffEmployeeFailed {
    public static type = '[EMPLOYEES] Sign Off Employee Failed'
  }
}
