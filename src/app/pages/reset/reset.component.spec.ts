import {ResetComponent} from './reset.component';
import {render, RenderResult} from "@testing-library/angular";
import {MockProvider} from "ng-mocks";
import {Store} from "@ngxs/store";
import {Observable} from "rxjs";

describe('ResetComponent', () => {
  let result: RenderResult<ResetComponent>
  let component: ResetComponent
  beforeEach(async () => {
    result = await render(ResetComponent, {
      providers: [MockProvider(Store, {dispatch: () => new Observable<any>()})]
    })
    component = result.fixture.componentInstance
  })

  it('should render', () => {
    expect(component).toBeTruthy()
  })
});
