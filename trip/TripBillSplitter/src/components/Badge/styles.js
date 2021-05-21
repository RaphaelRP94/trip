import styled from 'styled-components/native';

export const Container = styled.View`
  background: rgba(232, 61, 95, 0.08);
  border-radius: 24px;
  padding: 7px 16px;
  margin-right: ${props => props.marginRight ? `${props.marginRight}px` : 0};
  margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : 0};
`

export const Text = styled.Text`
  font-size: 12px;
  line-height: 18px;
  font-family: 'Montserrat-SemiBold';
  letter-spacing: -0.24px;
  color: #E83D5F;
`
