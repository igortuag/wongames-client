import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.colors.white};
    padding: ${theme.spacings.small};
    padding-top: ${theme.spacings.xxlarge};

    ${media.greaterThan('small')`
      padding: ${theme.spacings.small};
    `}
  `}
`

export const Description = styled.p``

export const ButtonsWrapper = styled.div``
