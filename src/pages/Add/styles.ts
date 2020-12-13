import styled from 'styled-components/native'

import Icon from 'react-native-vector-icons/Feather'

interface ContainerProp {
  bg: string
}

interface IconWrapperProp {
  bg: string
}

export const Container = styled.View<ContainerProp>`
  background-color: ${(props) => props.bg};
`

export const Content = styled.View<ContainerProp>`
  background-color: ${(props) => props.bg};
  padding: 22px;
  justify-content: center;
  border-top-right-radius: 17px;
  border-top-left-radius: 17px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const Button = styled.TouchableOpacity`
  padding-left: 10px;
  padding-right: 10px;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const OptionWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`
export const IconWrapper = styled.View<IconWrapperProp>`
  margin-right: 8px;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bg};
`
