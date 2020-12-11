import styled from 'styled-components/native'
import {RectButton} from 'react-native-gesture-handler'

interface ContainerProps {
  bg: string
}

export const Container = styled(RectButton)<ContainerProps>`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.bg};
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`
