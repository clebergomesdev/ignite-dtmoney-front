import React from 'react'

import { Container, ContainerProps } from './styles'

interface ButtonProps extends ContainerProps {}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>
}

export default Button
