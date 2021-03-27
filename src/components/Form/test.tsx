import { renderWithTheme } from 'utils/tests/helper'

import { FormLink, FormWrapper } from '.'

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          My nice <a href="#">link</a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchInlineSnapshot()
  })
})
