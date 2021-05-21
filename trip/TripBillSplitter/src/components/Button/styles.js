import styled from 'styled-components';

const handleBackground = ({ transparent, color }) => {
  if (transparent || !color) {
    return '#E83D5F';
  }

  return color;
}

const handleTextColor = ({ transparent, fontColor }) => {
  if (transparent || !fontColor) {
    return '#fff'
  }

  return fontColor;
}

export const Container = styled.TouchableOpacity`
  width: 100%;
  background: ${handleBackground};
  border-radius: 53px;
  width: 100%;
  padding: 18px 24px;
  margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : 0};
  margin-top: ${props => props.marginTop ? `${props.marginTop}px` : 0};
  border-width: ${props => props.transparent ? '2px': 0};
  border-color: ${props => props.transparent ? '#fff': 0};
`

export const InnerContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Text = styled.Text`
  color: ${handleTextColor};
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  font-family: 'Montserrat-SemiBold';
`

export const Icon = styled.Image`
  margin-right: 16px;
`