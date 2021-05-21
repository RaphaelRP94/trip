import React from 'react';

import { Container, Text } from './styles';

const Badge = ({ text, marginRight, marginBottom }) => (
  <Container marginRight={marginRight} marginBottom={marginBottom}>
    <Text>{text}</Text>
  </Container>
);

export default Badge;