import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import Button from '../../components/Button';

import {Container, Register, Logo, InnerContainer} from './styles';

const Home = ({navigation}) => (
  <LinearGradient colors={['#E95478', '#E72B4D']} style={{flex: 1}}>
    <Container>
      <Logo
        resizeMode="contain"
        source={require('../../assets/images/logo.png')}
      />

      <InnerContainer>
        <Button
          title="email"
          color="#fff"
          fontColor="#E83D5F"
          marginBottom={16}
          onPress={() => navigation.navigate('Login')}
        />

        <TouchableWithoutFeedback onPress={() => navigation.navigate('login')}>
          <Register>Don't you have an account? Sign up!</Register>
        </TouchableWithoutFeedback>
      </InnerContainer>
    </Container>
  </LinearGradient>
);

export default Home;
