import styled from 'styled-components/native'

interface ContainerType {
  bg: string
}

export const Container = styled.View<ContainerType>`
  width: 100%;
  height: auto;
  background-color: ${(p) => p.bg};
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14);
  margin-top: 30px;
  padding-top: 22px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 8px;
`

export const Header = styled.View`
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const ButtonExpand = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const Body = styled.View`
  flex: 1;
  padding-bottom: 30px;
`

export const TotalWrapper = styled.View`
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
  padding-top: 10px;
`

export const Separator = styled.View`
  width: 100%;
  height: 0px;
  border-color: rgba(72, 87, 107, 0.3);
  border-top-width: 0.5px;
  margin-top: 30px;
`

export const More = styled.View`
  margin-top: 15px;
`

export const Footer = styled.View`
  padding: 16px 0;
  border-color: rgba(72, 87, 107, 0.3);
  border-top-width: 0.5px;
`

export const SmallLinkButton = styled.TouchableOpacity``
