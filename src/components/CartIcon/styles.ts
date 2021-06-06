import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 2.4rem;
    height: 2.4rem;
  `}
`
