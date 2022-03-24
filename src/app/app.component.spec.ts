import {AppComponent} from './app.component';
import {render, RenderResult} from "@testing-library/angular";
import {MockProvider} from "ng-mocks";
import {Store} from "@ngxs/store";

describe('AppComponent', () => {
  let result: RenderResult<AppComponent>
  beforeEach(async () => {
    result = await render(AppComponent, {
      providers: [MockProvider(Store)]
    })
  })

  it('should render', () => {
    expect(result.fixture.componentInstance).toBeTruthy()
  })
});
