import {ClassConstructionValidator} from "./class-construction-validator.class";

class TestClass extends ClassConstructionValidator<{ name: string }> {
  public validate(name: string): this {
    if (name !== 'Nicolas') {
      this.fail('name', 'Invalid mail. Expected Nicolas.')
    }
    return this;
  }
}

describe('Class Construction Validator', function () {
  it('should create validator', () => {
    expect(new TestClass()).toBeTruthy()
  })

  it('should validate as valid', () => {
    expect(new TestClass().validate("Nicolas").isValid).toBe(true)
  })
  it('should validate as invalid', () => {
    expect(new TestClass().validate("Jeff").isValid).toBe(false)
  })
  it('should return an error "Invalid mail. Expected Nicolas."', () => {
    expect(new TestClass().validate("Jeff").errors["name"]).toBe("Invalid mail. Expected Nicolas.")
  })

});
