import styled, { css } from 'styled-components'

type CoverProps = {
  src: string
}

export const Cover = styled.div<CoverProps>`
  ${({ src }) => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 39.5rem;
    background-image: url(${src});
    background-size: cover;
    background-position: top center;
    opacity: 0.4;
  `}
`
