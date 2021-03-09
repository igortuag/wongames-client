import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helper'

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

    expect(screen.getByRole('heading', { name: /Radio/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
