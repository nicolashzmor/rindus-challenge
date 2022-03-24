import {WorkPositionTableLabelComponent} from './work-position-table-label.component';
import {render, RenderResult, screen} from "@testing-library/angular";
import {WORK_POSITION, WorkPosition} from "../../../core/models/work-position.model";

describe('WorkPositionTableLabelComponent', () => {
  let result: RenderResult<WorkPositionTableLabelComponent>

  beforeEach(async () => {
    result = await render(WorkPositionTableLabelComponent, {
      componentProperties: {
        position: WorkPosition.new(WORK_POSITION["full-stack developer"])
      }
    })
  })
  it('should display position', () =>{
    screen.getByText('Full-Stack Developer')
  })
});
