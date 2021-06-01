import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import ExploreSidebar from '.'

describe('<ExploreSidebar />', () => {
  it('Should render headings', () => {
    renderWithTheme(<ExploreSidebar />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })
})
