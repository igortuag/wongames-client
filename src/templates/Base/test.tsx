import { render, screen } from '@testing-library/react'

import Base from '.'

jest.mock(`components/Menu`, () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>
    }
  }
})

jest.mock(`components/Footer`, () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

describe('<Base />', () => {
  it('should render the heading', () => {
    const { container } = render(<Base />)

    expect(screen.getByRole('heading', { name: /Base/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
