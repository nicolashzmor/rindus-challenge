export type ConstructorValidationError<K = any> = { [k in keyof K]?: string }

export abstract class ClassConstructionValidator<T> {
  public errors: ConstructorValidationError<T> = {}
  public isValid: boolean = true;
  public failedFields: Array<keyof T> = []

  protected fail(key: keyof T, message: string) {
    this.errors = {...this.errors, [key]: message}
    this.failedFields = [...this.failedFields, key]
    this.isValid = false
  }

  protected log(){
    console.error(this.errors)
  }

  public abstract validate(...args: any): this;
}
