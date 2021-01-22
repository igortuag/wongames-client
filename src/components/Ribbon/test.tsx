import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toBeInTheDocument()
  })
})
