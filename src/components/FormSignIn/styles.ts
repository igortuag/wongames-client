import styled, { css } from 'styled-components'
import { lighten, darken } from 'polished'

import * as TextFieldStyles from 'components/TextField/styles'
import * as ButtonStyles from 'components/Button/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }
    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`
export const ForgetPassword = styled.a``

export const FormLink = styled.div``
