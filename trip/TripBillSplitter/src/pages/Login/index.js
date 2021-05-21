import React from 'react';

import Button from '../../components/Button';

import {Container, Title} from './styles';
import {Input} from '../../styles/components';

const Login = ({navigation}) => {
  return (
    <Container>
      <Title>Welcome back!</Title>
      <Input
        keyboardType="default"
        placeholder="Your e-mail"
        marginBottom={36}
      />
      <Input
        secureTextEntry
        keyboardType="default"
        placeholder="Your password"
        marginBottom={90}
      />

      <Button
        title="Enter"
        color="#E83D5F"
        fontColor="#fff"
        marginBottom={16}
        onPress={() => navigation.navigate('Logged')}
      />
    </Container>
  );
};

export default Login;
