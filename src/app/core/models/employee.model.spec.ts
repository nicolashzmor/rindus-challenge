import {Employee} from "./employee.model";

describe('Employee Model', function () {
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

  it('should return a createDTO', () => {
    const employee = ValidEmployeeBuilder()
    expect(employee.asCreateDTO()).toEqual({
      name: 'Eve',
      surname: 'Nolan',
      work_position: 'full-stack developer',
      date_of_birth: 'Mon Sep 28 1987'
    })
  })

  it('should fail when creating an UpdateDTO', () => {
    const employee = ValidEmployeeBuilder()
    expect(() => employee.asUpdateDTO()).toThrowError("Cannot generate an UpdateDTO. User does not have a registered ID.")
  })
});