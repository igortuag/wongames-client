import styled from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'size'>

export const Wrapper = styled.button<WrapperProps>``
