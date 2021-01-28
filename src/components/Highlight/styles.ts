import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    position: relative;
    height: 23rem;
    display: grid;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, -0.6);
    }
  `}
`

export const Title = styled.h2``

export const Subtitle = styled.h3``
