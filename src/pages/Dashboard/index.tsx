import React, {useCallback} from 'react'
import {FlatList, StatusBar} from 'react-native'

import CardResume from '../../components/CardResume'
import CardCollapse from '../../components/CardCollapse'

import {Container, Header, Title, TextName, CardsWrapper, Body} from './styles'

import {dataCardsResume} from './mockData'

const Dashboard: React.FC = () => {
  const handleRenderCards = useCallback(({item}) => {
    return (
      <CardsWrapper>
        <CardResume item={item} />
      </CardsWrapper>
    )
  }, [])
  return (
    <Container>
      <FlatList
        data={dataCardsResume}
        keyExtractor={(item) => item.id.toString()}
        renderItem={handleRenderCards}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingRight: 20}}
      />

      <Body>
        <CardCollapse />

        <CardCollapse />

        <CardCollapse />
      </Body>
    </Container>
  )
}

export default Dashboard
