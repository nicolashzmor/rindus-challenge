import {MainHeaderComponent} from './main-header.component';
import {render, RenderResult, screen} from "@testing-library/angular";

describe('HeaderComponent', () => {
  let result: RenderResult<MainHeaderComponent>
  it('should create', async () => {
    expect(await render(MainHeaderComponent)).toBeTruthy();
  });

  it('should have the logo', async () => {
    result = await render(MainHeaderComponent)
    screen.getByLabelText('iBillboard Logo')
  })
});
