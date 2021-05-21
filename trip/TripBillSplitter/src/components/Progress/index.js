import React from 'react';

import { Container, Content } from './styles';

const Progress = ({ percentage }) => {
  return(
    <Container>
      <Content percentage={percentage} />
    </Container>
  );
}

export default Progress;