import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  background-color: #ffffff;
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
`

export const Title = styled.Text`
  color: #48576b;
  font-family: 'Montserrat-Bold';
  font-size: 16px;
`

export const ButtonExpand = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const Small = styled.Text`
  color: #48576b;
  font-family: 'Montserrat-Regular';
  font-size: 11px;
  margin-right: 5px;
`

export const Body = styled.View`
  flex: 1;
  padding-top: 10px;
  padding-bottom: 30px;
`

export const TotalWrapper = styled.View`
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
  padding-top: 10px;
`

export const RegularText = styled.Text`
  color: #48576b;
  font-family: 'Montserrat-Regular';
  font-size: 16px;
`

export const Separator = styled.View`
  width: 100%;
  height: 0px;
  border: 0.5px solid rgba(72, 87, 107, 0.3);
  margin-top: 30px;
`

export const More = styled.View`
  margin-top: 15px;
`

export const Footer = styled.View`
  padding-bottom: 16px;
`

export const SmallLinkButton = styled.TouchableOpacity``

export const SmallLinkText = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 11px;
  line-height: 13px;
  color: #0c5ac1;
`
