import { render, screen } from '@testing-library/react'

import OrdersList from '.'

describe('<OrdersList />', () => {
  it('should render the heading', () => {
    const { container } = render(<OrdersList />)

    expect(screen.getByRole('heading', { name: /OrdersList/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
