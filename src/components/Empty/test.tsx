import { render, screen } from '@testing-library/react'

import Empty from '.'

describe('<Empty />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Empty />)

    expect(
      screen.getByRole('image', {
        name: /a gamer in a couch playing videogame/i
      })
    ).toBeInTheDocument()
  })
})
