import {WorkPosition} from "./work-position.model";

describe('Work Position Model', () => {

  const ValidWorkPositionBuilder = () => WorkPosition.new('full-stack developer')
  const InvalidWorkPositionBuilder = () => WorkPosition.new('scrum-master')

  it('should create', () => {
    expect(ValidWorkPositionBuilder()).toBeTruthy()
  })
  it('should fail before creation', () => {
    expect(InvalidWorkPositionBuilder).toThrowError("Work Position Couldn't be created.")
  })
})
