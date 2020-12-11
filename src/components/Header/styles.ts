import styled from 'styled-components/native'
import {Platform} from 'react-native'

interface ContainerProps {
  bg: string
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 82px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 44px;
  background-color: ${(p) => p.bg};
  padding-top: 19px;
  padding-left: ${Platform.OS === 'ios' ? '54px' : '24px'};
  padding-right: ${Platform.OS === 'ios' ? '54px' : '24px'};
`

export const ProfileWrapper = styled.View`
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
