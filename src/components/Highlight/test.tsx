import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import Highlight from '.'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /Heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Heading 2/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
