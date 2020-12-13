import styled from 'styled-components/native'
import {Platform} from 'react-native'

interface ContainerProps {
  bg: string
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 120px;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 44px;
  background-color: ${(props) => props.bg};
  padding-top: 19px;
`

export const Content = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  padding: 10px;
`

export const TitleWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
