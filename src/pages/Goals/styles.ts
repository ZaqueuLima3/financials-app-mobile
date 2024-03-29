import styled from 'styled-components/native'

interface ContainerProps {
  bg: string
}

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 30,
  },
})<ContainerProps>`
  padding: 30px 22px;
  flex: 1;
  background-color: ${(p) => p.bg};
`
