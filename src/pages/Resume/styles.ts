import styled from 'styled-components/native'
import {Platform} from 'react-native'

interface ContainerProps {
  bg: string
}

export const Container = styled.ScrollView<ContainerProps>`
  flex: 1;
  background-color: ${(p) => p.bg};
  padding-left: 46px;
  padding-right: 46px;
`
export const Header = styled.View`
  padding-top: ${Platform.OS === 'ios' ? '100px' : '51px'};
  align-items: center;
`

export const ImageProfile = styled.Image`
  width: 118px;
  height: 118px;
  border-radius: 57px;
  margin-bottom: 27px;
`

export const Separator = styled.View`
  width: 100%;
  height: 0px;
  border-color: rgba(72, 87, 107, 0.3);
  border-top-width: 1px;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const Body = styled.View`
  flex: 1;
  align-items: center;
`

export const Goals = styled.View`
  align-items: center;
`

export const CurrentResume = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const ResumeWrapper = styled.View`
  align-items: center;
`

export const Footer = styled.View`
  margin-top: 30px;
  padding-bottom: 46px;
`

export const OkButton = styled.TouchableOpacity`
  background-color: #65c7af;
  width: 100%;
  height: 50px;
  border-radius: 4px;
  margin-top: 12px;
  margin-bottom: 9px;
  justify-content: center;
  align-items: center;
`
