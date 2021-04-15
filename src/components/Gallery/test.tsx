import 'match-media-mock'
import { screen } from '@testing-library/react'

import Gallery from '.'
import { renderWithTheme } from 'utils/tests/helper'

describe('<Gallery />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Gallery />)

    expect(
      screen.getByRole('heading', { name: /Gallery/i })
    ).toBeInTheDocument()
  })
})
