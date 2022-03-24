import {Employee} from "./employee.model";
import {EmployeesDatabase} from "../store/employees/employees.values";

describe('Employee Model', function () {
  const ValidPersistedEmployeeBuilder = () => Employee.new({
    id: 'f59d143d-c206-4bbc-b79a-a7d8dcbedea0',
    name: 'Eve',
    surname: 'Nolan',
    work_position: 'full-stack developer',
    date_of_birth: '1987-09-29'
  })
  const ValidEmployeeBuilder = () => Employee.new({
    name: 'Eve',
    surname: 'Nolan',
    work_position: 'full-stack developer',
    date_of_birth: '1987-09-29'
  })
  const InvalidEmployeeBuilder = () => Employee.new({
    name: '',
    surname: '',
    work_position: 'scrum-master',
    date_of_birth: '1987-15-29'
  })

  it('should create a new employee', () => {
    const employee = ValidEmployeeBuilder()
    expect(employee).toBeTruthy()
  })

  it('should failed when invalid values are provided', () => {
    expect(InvalidEmployeeBuilder).toThrowError("Employee couldn't be created. Failed: work_position, name, surname, date_of_birth")
  })

  it('should return a DTO for creating a customer', () => {
    const employee = ValidEmployeeBuilder()
    expect(employee.asCreateDTO()).toEqual({
      name: 'Eve',
      surname: 'Nolan',
      work_position: 'full-stack developer',
      date_of_birth: '1987-09-29T00:00:00.000Z'
    })
  })

  it('should return a DTO for updating a customer', () => {
    const employee = ValidPersistedEmployeeBuilder()
    expect(employee.asUpdateDTO()).toEqual({
      id: 'f59d143d-c206-4bbc-b79a-a7d8dcbedea0',
      name: 'Eve',
      surname: 'Nolan',
      work_position: 'full-stack developer',
      date_of_birth: '1987-09-29T00:00:00.000Z'
    })
  })

  it('should fail when creating an UpdateDTO', () => {
    const employee = ValidEmployeeBuilder()
    expect(() => employee.asUpdateDTO()).toThrowError("Cannot generate an UpdateDTO. User does not have a registered ID.")
  })

  it('should filter by value', () => {
    const employees = EmployeesDatabase.map(e => Employee.new(e))
    const result = employees.filter(Employee.searchByIndexableKeys('Eve No'))
    expect(result).toHaveLength(1)
  })

});
