import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 100%;
    height: 23rem;
    background-color: ${theme.colors.lightGray};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;

    ${media.greaterThan('medium')`
      height: 58rem;
    `}
  `}
`

export const Caption = styled.div``

export const Title = styled.h2``

export const Subtitle = styled.h3``
