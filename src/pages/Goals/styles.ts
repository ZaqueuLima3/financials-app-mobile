import styled from 'styled-components/native'

interface ContainerType {
  bg: string
}

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 30,
  },
})<ContainerType>`
  padding: 30px 22px;
  flex: 1;
  background-color: ${(p) => p.bg};
`
