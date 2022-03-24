import {SectionHeaderComponent} from './section-header.component';
import {render, RenderResult, screen} from "@testing-library/angular";

describe('SectionHeaderComponent', () => {
  let result: RenderResult<SectionHeaderComponent>
  it('should display title', async () => {
    result = await render(SectionHeaderComponent, {componentProperties: {title: 'Section Title'}})
    screen.getByText('Section Title')
  });
  it('should show back arrow', async () => {
    result = await render(SectionHeaderComponent, {componentProperties: {title: 'Section Title'}})
    screen.getByLabelText('Go Back')
  })
  it('should hide back arrow', async () => {
    result = await render(SectionHeaderComponent, {
      componentProperties: {
        title: 'Section Title',
        disableBackButton: true
      }
    })
    const back_anchor = screen.queryByLabelText('Go Back')
    expect(back_anchor).toEqual(null)
  })
});
