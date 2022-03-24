import {TestBed} from '@angular/core/testing';

import {EmployeesService} from './employees.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {EmployeeCreateDTO, EmployeeUpdateDTO} from "../../models/employee.model";

const EmployeeForCreate: EmployeeCreateDTO = {
  name: 'Eve',
  surname: 'Nolan',
  work_position: 'full-stack developer',
  date_of_birth: '1987-09-29T00:00:00.000Z',
}
const EmployeeForUpdate: EmployeeUpdateDTO = {
  id: '5aec6c1a-29d3-4baf-bb8b-baa91387fe10',
  name: 'Eve',
  surname: 'Nolan',
  work_position: 'full-stack developer',
  date_of_birth: '1987-09-29T00:00:00.000Z',
}

describe('EmployeesService', () => {
  let service: EmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(EmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the employee with associated ID', (done) => {
    service.signUpEmployee(EmployeeForCreate).subscribe((response) => {
      expect(response).toHaveProperty('id')
      done()
    })
  })
  it('should return the updated employee', (done) => {
    service.updateEmployeeData(EmployeeForUpdate).subscribe(response => {
      expect(response).toEqual(EmployeeForUpdate)
      done()
    })
  })
  it('should return the id of the removed employee', (done) => {
    service.signOffEmployee(EmployeeForUpdate.id).subscribe(response => {
      expect(response).toEqual(EmployeeForUpdate.id)
      done()
    })

  })
});
