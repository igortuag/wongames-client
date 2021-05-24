import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import FormProfile from '.'

describe('<FormProfile />', () => {
  it('should render the profile form', () => {
    renderWithTheme(<FormProfile />)

    expect(
      screen.getByRole('heading', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
  })
})
