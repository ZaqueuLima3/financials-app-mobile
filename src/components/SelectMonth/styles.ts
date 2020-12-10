import styled from 'styled-components/native'

interface ContainerType {
  bg: string
}

export const Container = styled.TouchableOpacity<ContainerType>`
  background-color: ${(p) => p.bg};
  height: 30px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14);
  margin-bottom: 20px;
  margin-left: 10px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`
