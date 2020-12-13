import styled from 'styled-components/native'
import {Platform} from 'react-native'

interface ContainerProps {
  bg: string
}

export const Container = styled.View<ContainerProps>`
  width: 80%;
  height: 82px;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 44px;
  background-color: ${(props) => props.bg};
  padding-top: 19px;
`

export const ProfileWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const ImageProfile = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 20px;
`

export const WelcomeWrapper = styled.View``
