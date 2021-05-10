import { render, screen } from '@testing-library/react'

import GameItem from '.'

describe('<GameItem />', () => {
  it('should render the heading', () => {
    const { container } = render(<GameItem />)

    expect(screen.getByRole('heading', { name: /GameItem/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
