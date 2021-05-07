import { renderWithTheme } from 'utils/tests/helper'

import { Divider } from '.'

describe('<Grid />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Divider />)

    expect(container.firstChild).toMatchInlineSnapshot()
  })
})
