import React, {useCallback} from 'react'
import {FlatList, StatusBar} from 'react-native'

import CardResume from '../../components/CardResume'

import {Container, Header, CardsWrapper} from './styles'

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
      <StatusBar barStyle="dark-content" backgroundColor="#ECECEC" />
      <Header />
      <FlatList
        data={dataCardsResume}
        keyExtractor={(item) => item.id.toString()}
        renderItem={handleRenderCards}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingRight: 20}}
      />
    </Container>
  )
}

export default Dashboard
