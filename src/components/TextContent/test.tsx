import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import TextContent from '.'

const props = {
  title: 'Description',
  content: '<h1>Content</h1>'
}

describe('<TextContent />', () => {
  it('should render the heading', () => {
    renderWithTheme(<TextContent />)

    expect(
      screen.getByRole('heading', { name: /TextContent/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
