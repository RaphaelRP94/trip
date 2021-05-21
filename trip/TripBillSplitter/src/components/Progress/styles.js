import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  height: 4px;
  position: relative;
  background: #E8E8E8;
  margin-top: 40px;
`

export const Content = styled.View`
  position: absolute;
  width: ${props => `${props.percentage}%`};
  background: #E83D5F;
  height: 4px;
`