import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as RibbonStyles from 'components/Ribbon/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.colors.white};
    padding: ${theme.spacings.small};
    padding-top: ${theme.spacings.xxlarge};

    ${RibbonStyles.Wrapper} {
      right: -1rem;

      &:before {
        border-right-width: 1rem;
      }
    }

    ${media.greaterThan('small')`
      padding: ${theme.spacings.small};
    `}

    ${media.greaterThan('medium')`
      ${RibbonStyles.Wrapper} {
        right: ${theme.spacings.small};
        top: ${theme.spacings.small};
        front-size: ${theme.font.sizes.large};
        &:before {
          border: none;
        }
      }
    `}
  `}
`

export const Description = styled.p``

export const ButtonsWrapper = styled.div``
