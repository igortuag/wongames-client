import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Dropdown from '.'

describe('<Dropdown />', () => {
  it('should render the heading', () => {
    const { container } = render(<Dropdown />)

    expect(
      screen.getByRole('heading', { name: /Dropdown/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render title', () => {
    expect(screen.getByLabelText(/toogle dropdown/)).toBeInTheDocument()
  })

  it('should handle open/close dropdown', () => {
    const content = screen.getByText(/content/).parentElement!

    expect(content).toHaveStyle({ opacity: 0 })
    expect(content.getAttribute('aria-hidden')).toBe('true')

    userEvent.click(screen.getByAltText(/toogle dropdown/))

    expect(content).toHaveStyle({ opacity: 1 })
    expect(content.getAttribute('aria-hidden')).toBe('false')
  })
})
