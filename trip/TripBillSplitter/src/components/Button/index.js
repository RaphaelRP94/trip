import React from 'react';

import { Container, Text } from './styles'

const Button = ({ onPress, title, color, marginBottom, marginTop, fontColor, transparent }) => {
  return(
    <Container transparent={transparent} onPress={onPress} color={color} marginBottom={marginBottom} marginTop={marginTop}>  
      <Text fontColor={fontColor}>{title}</Text>
    </Container>
  )
}

export default Button;