import {EmployeeData} from "../../models/employee.model";

export namespace EmployeesModels {
  export type State = { employees: EmployeesModels.StoredEmployee[], filterBy: string | null }
  export type StoredEmployee = EmployeeData & { id: string | symbol }
}
