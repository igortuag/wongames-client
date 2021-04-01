import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import GameInfo from '.'

describe('<GameInfo />', () => {
  it('should render game information', () => {
    renderWithTheme(<GameInfo {...props} />)

    // esperar por um heading (title)
    // esperar por um description
    // esperar pelo price
  })
})
