import styled from 'styled-components/native'

interface ContainerProps {
  bg: string
}

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 30,
  },
})<ContainerProps>`
  flex: 1;
  background-color: ${(p) => p.bg};
  padding-top: 30px;
  padding-bottom: 30px;
`

export const CardsWrapper = styled.View`
  margin-left: 20px;
`
export const Body = styled.View`
  padding-left: 21px;
  padding-right: 21px;
  padding-bottom: 21px;
`
