import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const Image = styled.img`
  max-width: 100%;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxlarge};
  `}
`

export const Description = styled.h2``
