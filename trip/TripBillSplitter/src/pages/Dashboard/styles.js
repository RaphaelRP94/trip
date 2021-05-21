import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background: #F8F8F8;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Coins = styled.Text`
  letter-spacing: -0.24px;
  font-size: 18px;
  line-height: 27px;
  font-family: 'Montserrat-SemiBold';
  color: #F8B550;
  margin-left: 8px;
`

export const Link = styled.Text`
  text-decoration-line: underline;
  font-family: 'Montserrat-ExtraBold';
  font-size: 14px;
  line-height: 21px;
  color: #E83D5F;
`

export const Name = styled.Text`
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.24px;
  font-family: 'Montserrat-Bold';
  color: #2B2B2B;
`

export const Info = styled.View`
  flex-direction: row;
  margin-top: 32px;
  margin-bottom: 24px;
`

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`

export const EditContainer = styled.View`
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgba(214, 214, 214, 0.15);
  border-radius: 8px;
  padding: 21px 24px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Edit = styled.Text`
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.24px;
  font-family: 'Montserrat-SemiBold';
  color: #E83D5F;
`