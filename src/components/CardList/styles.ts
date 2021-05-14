import styled from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-self: start;
  `}
`

export const Footer = styled.footer``

export const Total = styled.span``
