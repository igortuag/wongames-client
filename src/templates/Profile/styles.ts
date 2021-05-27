import styled, { css } from 'styled-components'

export const Main = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    padding: ${theme.spacings.xsmall};
  `}
`
