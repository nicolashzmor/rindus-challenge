import {WorkPosition, WorkPositionClassValidator} from "./work-position.model";
import {ClassConstructionValidator} from "../helpers/class-construction-validator.class";

export const UNSIGNED_EMPLOYEE = Symbol('UNSIGNED_EMPLOYEE')

export interface EmployeeCreateDTO {
  name: string
  surname: string
  work_position: string
  date_of_birth: string
}

export interface EmployeeUpdateDTO {
  id: string
  name: string
  surname: string
  work_position: string
  date_of_birth: string
}

export interface EmployeeData {
  id?: string | symbol
  name: string
  surname: string
  work_position: string
  date_of_birth: string
}

export class Employee {
  readonly id: string | symbol
  readonly name: string
  readonly surname: string
  readonly work_position: WorkPosition
  readonly date_of_birth: Date

  protected constructor(employee_data: EmployeeData) {
    this.id = employee_data.id || UNSIGNED_EMPLOYEE
    this.name = employee_data.name
    this.surname = employee_data.surname
    this.work_position = WorkPosition.new(employee_data.work_position)
    this.date_of_birth = new Date(employee_data.date_of_birth)
  }

  public static new(employee_data: EmployeeData) {
    const employee_validation = new EmployeeConstructionValidator().validate(employee_data)
    if (!employee_validation.isValid) {
      throw Error(`Employee couldn't be created. Failed: ${employee_validation.failedFields.join(', ')}`)
    }
    return new this(employee_data)
  }

  public isUnsignedEmployee() {
    return this.id === UNSIGNED_EMPLOYEE
  }

  public asCreateDTO(): EmployeeCreateDTO {
    return {
      name: this.name,
      surname: this.surname,
      work_position: this.work_position.position,
      date_of_birth: this.date_of_birth.toDateString()
    }
  }

  public asUpdateDTO(): EmployeeUpdateDTO {
    if (this.isUnsignedEmployee()) {
      throw Error('Cannot generate an UpdateDTO. User does not have a registered ID.')
    }

    return {
      id: this.id.toString(),
      name: this.name,
      surname: this.surname,
      work_position: this.work_position.position,
      date_of_birth: this.date_of_birth.toDateString()
    }
  }

}

export class EmployeeConstructionValidator extends ClassConstructionValidator<Employee> {
  validate(employee_data: EmployeeData): this {
    const work_position_validation = new WorkPositionClassValidator().validate(employee_data.work_position)
    if (!work_position_validation.isValid) {
      this.fail('work_position', (work_position_validation.errors['position'] as string))
    }
    this.validateStringField('name', employee_data.name)
    this.validateStringField('surname', employee_data.surname)
    this.validateDateField('date_of_birth', employee_data.date_of_birth)

    return this;
  }

  protected validateStringField(key: keyof Employee, value: any) {
    if (typeof value !== 'string' || value === '') {
      this.fail(key, `Field ${key} was not provided.`)
    }
  }

  protected validateDateField(field: keyof Employee, date: string) {
    const dateObject = new Date(date)
    if (isNaN(dateObject.getTime())) {
      this.fail(field, "Provided date is bad formatted or invalid")
    }
  }
}


