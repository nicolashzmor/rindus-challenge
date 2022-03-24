import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {EmployeeCreateDTO, EmployeeUpdateDTO} from "../../models/employee.model";
import {v4 as uuid4} from 'uuid'
import {Observable, of} from "rxjs";
import {EmployeesModels} from "./employees.models";
import StoredEmployee = EmployeesModels.StoredEmployee;

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  public static API_URL = `${environment.api_url}/employees`

  constructor(protected http: HttpClient) {
  }

  signUpEmployee(employee: EmployeeCreateDTO): Observable<StoredEmployee> {
    // return this.http.post(EmployeesService.API_URL, employee)
    return of({...employee, id: uuid4()})
  }

  updateEmployeeData(employee: EmployeeUpdateDTO): Observable<StoredEmployee> {
    // return this.http.put(`${EmployeesService.API_URL}/${employee.id}`, employee)
    return of(employee)
  }

  signOffEmployee(employee_id: string): Observable<string> {
    // return this.http.delete(`${EmployeesService.API_URL}/${employee_id}`)
    return of(employee_id)
  }

}
