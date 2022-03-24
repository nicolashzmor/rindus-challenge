import {ClassConstructionValidator} from "../helpers/class-construction-validator.class";

export enum WORK_POSITION {
  "full-stack developer" = "full-stack developer",
  "front-end developer" = "front-end developer",
  "sw admin" = "sw admin",
  "help desk" = "help desk",
  "scrum master" = "scrum master",
  "product manager" = "product manager"
}

export class WorkPosition {
  public static Labels: Record<WORK_POSITION, string> = {
    "full-stack developer": "Full-Stack Developer",
    "front-end developer": "Front-End Developer",
    "sw admin": "SW Admin",
    "help desk": "Help Desk",
    "scrum master": "Scrum Master",
    "product manager": "Product Manager",
  }
  public static Colors: Record<WORK_POSITION, string> = {
    "full-stack developer": "#3aa981",
    "front-end developer": "#526ed3",
    "sw admin": "#70b6f6",
    "help desk": "#bd65a4",
    "scrum master": "#e38163",
    "product manager": "#fcbb14",
  }

  position: WORK_POSITION
  color: string;
  label: string;

  protected constructor(work_position: WORK_POSITION) {
    this.position = work_position
    this.color = WorkPosition.Colors[work_position]
    this.label = WorkPosition.Labels[work_position]
  }

  public static new(work_position: string) {
    const validation = new WorkPositionClassValidator().validate(work_position)
    if (!validation.isValid) {
      throw Error('Work Position Couldn\'t be created.');
    }
    const sanitized_position = work_position as WORK_POSITION
    return new this(sanitized_position)
  }
}

export class WorkPositionClassValidator extends ClassConstructionValidator<WorkPosition> {
  validate(work_position: string): this {
    if (!Object.values(WORK_POSITION).includes(work_position as WORK_POSITION)) {
      this.fail('position', "Provided Work position is not valid")
    }
    return this;
  }

}
