import styled from 'styled-components/native'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'

import {Title as TitleComponent} from '../../components/Text'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: ${getStatusBarHeight() + 24}px 30px 0;
  position: relative;
`

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  top: 64px;
`

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`

export const Title = styled(TitleComponent)`
  margin: 24px 0 24px;
`
