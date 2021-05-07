import { render, screen } from '@testing-library/react'

import Divider from '.'

describe('<Divider />', () => {
  it('should render the heading', () => {
    const { container } = render(<Divider />)

    expect(screen.getByRole('heading', { name: /Divider/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
