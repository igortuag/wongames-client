import { render, screen } from '@testing-library/react'

import OrdersList from '.'

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />
  }
}))

jest.mock('components/GameItem', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock GameItem">{children}</div>
  }
}))

describe('<OrdersList />', () => {
  it('should render the heading', () => {
    const { container } = render(<OrdersList />)

    expect(
      screen.getByRole('heading', { name: /OrdersList/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
