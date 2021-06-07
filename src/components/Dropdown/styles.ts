import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Title = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 2.4rem;
  `}
`

export const Content = styled.div``
