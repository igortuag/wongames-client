import { render, screen } from '@testing-library/react'

import CartDropdown from '.'

describe('<CartDropdown />', () => {
  it('should render the heading', () => {
    const { container } = render(<CartDropdown />)

    expect(screen.getByRole('heading', { name: /CartDropdown/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
