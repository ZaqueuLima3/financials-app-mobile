import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 30,
  },
})`
  flex: 1;
  background-color: #f0f2f5;
  padding-top: 30px;
  padding-bottom: 30px;
`
export const Header = styled.View`
  width: 100%;
  height: 82px;
  margin-bottom: 44px;
  background-color: #fff;
  padding-top: 19px;
  padding-left: 24px;
`

export const Title = styled.Text`
  color: #48576b;
  font-family: 'Montserrat-Regular';
  font-size: 16px;
`

export const TextName = styled.Text`
  color: #f4a63d;
  font-family: 'Montserrat-Bold';
  font-size: 16px;
`

export const CardsWrapper = styled.View`
  margin-left: 20px;
`
export const Body = styled.View`
  padding-left: 21px;
  padding-right: 21px;
  padding-bottom: 21px;
`
