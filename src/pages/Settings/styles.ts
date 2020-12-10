import styled from 'styled-components/native'

interface ContainerType {
  bg: string
}

export const Container = styled.View<ContainerType>`
  padding: 30px;
  flex: 1;
  background-color: ${(p) => p.bg};
`

export const Body = styled.View``

export const Item = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  padding: 15px 0;
  border-color: rgba(72, 87, 107, 0.3);
  border-bottom-width: 0.5px;
`
