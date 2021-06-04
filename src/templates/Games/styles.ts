import styled, { css } from 'styled-components'
import { Container } from 'components/Container'

export const Main = styled(Container)`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 26rem 1fr;
    gap: ${theme.grid.gutter};
  `}
`
