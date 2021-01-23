import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { RibbonColors, RibbonProps, RibbonSizes } from '.'

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};

    &::before {
      border-left-color: ${darken(0.2, theme.colors[color])};
      border-top-color: ${darken(0.2, theme.colors[color])};
    }
  `,

  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: 0 ${theme.spacings.small};
    height: 3.6rem;
    right: -2rem;

    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 2.6rem;
  `
}

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color, size }) => css`
    ${!!size && wrapperModifiers[size](theme)}
    ${!!color && wrapperModifiers.color(theme, color)}
  `}
`
