import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // renderizar o componente `render`
    renderWithTheme(<Logo />)

    // selecionar o elemento a ser testado `screen` (queries) getByLabel ...
    // expect - assertion - asserção - comparação - análise (espero que renderize a logo branca)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })
})
