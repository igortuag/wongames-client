import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import Button from '.'

describe('<Button />', () => {
  it('should render a medium size by default', () => {
    renderWithTheme(<Button>Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
  })
})
