import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helper'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('should render without label', () => {
    renderWithTheme(<Checkbox />)

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText('checkbox label')).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should dispatch onCheck when status change', () => {
    const onCheck = jest.fn()

    renderWithTheme(<Checkbox label="CheckBox" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()
  })
})
