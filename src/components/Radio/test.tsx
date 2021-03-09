import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helper'
import theme from 'styles/theme'

import Radio from '.'

describe('<Radio />', () => {
  it('should render with label (white)', () => {
    const { container } = renderWithTheme(
      <Radio label="Radio" labelFor="check" value="anyValue" />
    )

    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.white })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with label (black)', () => {
    renderWithTheme(<Radio label="Radio" labelColor="black" />)

    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.black })
  })

    expect(container.firstChild).toMatchSnapshot()
  })
})
