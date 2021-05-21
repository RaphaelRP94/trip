import styled from 'styled-components';

export const Input = styled.TextInput`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #C4C4C4;
  font-family: 'Montserrat-SemiBold';
  padding: 8px;
  border-bottom-width: 2px;
  border-bottom-color: #E83D5F;
  /* border-bottom-color: #C4C4C4; */
  margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : 0};
`

export const Label = styled.Text`
  font-size: 28px;
  line-height: 42px;
  letter-spacing: -0.24px;
  font-family: 'Montserrat-ExtraBold';
  color: #333333;
  margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : 0};
`

export const Title = styled.Text`
  font-size: 28px;
  line-height: 42px;
  font-family: 'Montserrat-ExtraBold';
  letter-spacing: -0.24px;
  color: #333333;
`

export const SubTitle = styled.Text`
  font-size: 18px;
  line-height: 27px;
  color: #C4C4C4;
  margin-bottom: 32px;
  font-family: 'Montserrat-SemiBold';
`