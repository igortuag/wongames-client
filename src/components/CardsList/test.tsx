import { render, screen } from '@testing-library/react'

import CardsList from '.'

describe('<CardsList />', () => {
  it('should render the heading', () => {
    const { container } = render(<CardsList />)

    expect(screen.getByRole('heading', { name: /CardsList/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
