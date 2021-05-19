import styled, { css } from 'styled-components'

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacings.large};
    margin: ${theme.spacings.large} 0;
  `}
`
