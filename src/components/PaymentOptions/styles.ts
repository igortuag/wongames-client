import { tint } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`

export const Body = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `}
`

export const CardList = styled.div``

export const CardItem = styled.div``

export const CardInfo = styled.div``

export const AddCard = styled.div``
