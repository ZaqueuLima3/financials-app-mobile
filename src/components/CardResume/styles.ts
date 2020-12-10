import styled from 'styled-components/native'

interface TotalType {
  value: number
}

interface ContainerType {
  bg: string
}

interface FooterTye {
  bg: string
}

export const Container = styled.View<ContainerType>`
  width: 244px;
  height: 230px;
  background-color: ${(p) => p.bg};
  border-radius: 10px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14);
  overflow: hidden;
`

export const Header = styled.View`
  padding-top: 24px;
  padding-left: 14px;
  padding-right: 14px;
`

export const Body = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Footer = styled.View<FooterTye>`
  height: 44px;
  background: ${(p) => p.bg};
  justify-content: center;
  align-items: center;
`

export const TextSmall = styled.Text`
  color: #48576b;
  font-family: 'Montserrat-Regular';
  font-size: 10px;
`
