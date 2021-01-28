import styled, { css } from 'styled-components'
import { HighlightProps } from '.'

type WrapperProps = Pick<HighlightProps, 'backgroundImage'>

export const Wrapper = styled.section<WrapperProps>`
  ${({ theme, backgroundImage }) => css`
    position: relative;
    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;
    height: 23rem;
    display: grid;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, -0.6);
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    text-align: right;
    padding: ${theme.spacings.xsmall};
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.medium};
  `}
`
