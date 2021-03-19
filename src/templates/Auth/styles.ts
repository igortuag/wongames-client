import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'
import * as LogoStyles from 'components/Logo/styles'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-image: url(/img/auth-bg.jpg);
    background-size: cover;
    background-position: center center;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${theme.colors.black};
      opacity: 0.85;
    }
  `}
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    height: 100%;
    position: relative;
    z-index: ${theme.layers.base};
  `}
`

export const Subtitle = styled.h3``

export const Footer = styled.p``

export const Content = styled.div``
