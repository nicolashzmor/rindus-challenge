import {HeaderComponent} from './header.component';
import {render, screen} from "@testing-library/angular";

describe('HeaderComponent', () => {

  it('should create', async () => {
    expect(await render(HeaderComponent)).toBeTruthy();
  });

  it('should have the logo', async () => {
    await render(HeaderComponent)
    await screen.findByAltText('iBillboard Logo')
  })
});
