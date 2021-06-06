import { render, screen } from '@testing-library/react'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render the heading', () => {
    const { container } = render(<CartIcon />)

    expect(screen.getByRole('heading', { name: /CartIcon/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
