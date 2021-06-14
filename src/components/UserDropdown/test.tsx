import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helper'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="Igor Tuag" />)

    expect(screen.getByText(/Igor Tuag/i)).toBeInTheDocument()
  })
})
