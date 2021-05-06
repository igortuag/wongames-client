import styled, { css } from 'styled-components'

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    margin: ${theme.spacings.medium} 0;
  `}
`
