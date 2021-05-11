import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    ${media.greaterThan('medium')`
      display: flex;
    `}
  `}
`

export const GameContent = styled.div``

export const ImageBox = styled.div``

export const Content = styled.div``

export const Title = styled.h3``

export const Price = styled.p``
