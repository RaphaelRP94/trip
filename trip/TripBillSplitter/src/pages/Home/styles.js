import styled from 'styled-components';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  padding-top: 100px;
`

export const Register = styled.Text`
  color: #fff;
  font-size: 14px;
  line-height: 21px;
  padding-bottom: 50px;
  text-align: center;
  font-family: 'Montserrat-SemiBold';
`

export const Logo = styled.Image`
  width: 182px;
  margin-top: ${props => `${Dimensions.get('window').height/30}%`};
`

export const InnerContainer = styled.View`
  width: 100%;
`