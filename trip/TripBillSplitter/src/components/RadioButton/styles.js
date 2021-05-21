import styled from 'styled-components';

export const Option = styled.View`
  border-radius: 48px;
  border-width: 1px;
  border-color: #E83D5F;
  padding: 20px 40px;
  margin-bottom: 32px;
  background: ${props => props.selected ? 'rgba(232, 61, 95, 0.08)' : '#fff'};
`

export const Text = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #E83D5F;
  font-family: 'Montserrat-SemiBold'
`