import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const Form = styled.form`
  ${({ theme }) => css`
    max-width: 100%;
    display: grid;
    gap: ${theme.spacings.xsmall};

    > button {
      margin-top: ${theme.spacings.xxlarge};
    }
  `}
`
