import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import ExploreSidebar from '.'

describe('<ExploreSidebar />', () => {
  it('should render the headings', () => {
    renderWithTheme(<ExploreSidebar />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
  })
})
