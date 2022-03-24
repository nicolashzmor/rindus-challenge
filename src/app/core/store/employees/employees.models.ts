import {EmployeeData} from "../../models/employee.model";

export namespace EmployeesModels {
  export type State = EmployeesModels.StoredEmployee[]
  export type StoredEmployee = EmployeeData & { id: string | symbol }
}
