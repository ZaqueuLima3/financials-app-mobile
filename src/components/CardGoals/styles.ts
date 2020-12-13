import styled from 'styled-components/native'

import Icon from 'react-native-vector-icons/Feather'

interface ContainerProps {
  bg: string
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 126px;
  border-radius: 8px;
  background-color: ${(p) => p.bg};
  padding: 14px 25px;
  margin-bottom: 30px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14);
`

export const ProgressInt = styled.View`
  width: 35%;
  height: 100%;
  background-color: #65c7af;
  margin-bottom: 12px;
`
export const Progress = styled.View`
  width: 100%;
  height: 5px;
  background-color: #65c7af50;
  margin-bottom: 12px;
`

export const Content = styled.View`
  flex-direction: row;
`

export const GoalImage = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 34px;
`

export const GoalsInfo = styled.View`
  margin-left: 15px;
`

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`

export const IconFeather = styled(Icon)`
  color: #f4a63d;
  margin-right: 5px;
`
