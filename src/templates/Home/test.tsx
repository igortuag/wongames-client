import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import Home from '.'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
  })
})
