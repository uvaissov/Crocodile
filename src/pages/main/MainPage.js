import React, {Component} from 'react'
import { Text, StyleSheet, View} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BG_COLOR, MAIN_COLOR, WHITE, BLACK } from '../../constants/global'
import { Header} from '../../components'

type Props = {};
class MainPage extends Component<Props> {
  render() {
    const { navigation } = this.props
    const { viewStyle, textHeaderStyle, textNormalStyle, textLeftNormalStyle, textLeftGreenStyle, textLeftRedStyle } = styles
    return (
      <View style={{ flex: 1, backgroundColor: BG_COLOR}}>
        <Header title="Настройки" headerColor={MAIN_COLOR} onPress={() => navigation.openDrawer()} leftIcon='ios-menu' leftColor={WHITE} />
        <View style={viewStyle}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={textHeaderStyle}>{'Правила игры «Крокодил»'}</Text>
          <Text ellipsizeMode="tail" style={textNormalStyle}>{'Необходимо объяснить загадонное слово командой противником, своей команде'}</Text>
          <Text ellipsizeMode="tail" style={textLeftNormalStyle}>{'Разрешается:'}</Text>
          <Text ellipsizeMode="tail" style={textLeftGreenStyle}><Ionicons name="md-add" />{' Использовать жесты и мимику, пляски, прыжки и ужимки;'}</Text>
          <Text ellipsizeMode="tail" style={textLeftGreenStyle}><Ionicons name="md-add" />{' Принимать любые позы;'}</Text>
          <Text ellipsizeMode="tail" style={textLeftGreenStyle}><Ionicons name="md-add" />{' Показывать слово целиком или по частям;'}</Text>
          <Text ellipsizeMode="tail" style={textLeftGreenStyle}><Ionicons name="md-add" />{' Кивать или мотать головой: «да» и «нет»'}</Text>
          <Text ellipsizeMode="tail" style={textLeftNormalStyle}>{'Запрещается:'}</Text>
          <Text ellipsizeMode="tail" style={textLeftRedStyle}><Ionicons name="md-remove" />{' Писать и рисовать;'}</Text>
          <Text ellipsizeMode="tail" style={textLeftRedStyle}><Ionicons name="md-remove" />{' Произносить слоги и буквы (даже без звука, одними губами);'}</Text>
          <Text ellipsizeMode="tail" style={textLeftRedStyle}><Ionicons name="md-remove" />{' Показывать буквы или передавать буквы языком глухонемых'}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    position: 'relative',
    padding: 15,
    backgroundColor: BG_COLOR
  },
  textHeaderStyle: {
    textAlign: 'center',
    color: BLACK,
    fontSize: 20,
    fontFamily: 'AvenirNext-DemiBold',
    fontWeight: 'bold',
    paddingTop: 10
  },
  textNormalStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: BLACK,
    fontSize: 15,
    paddingTop: 5
  },
  textLeftNormalStyle: {
    color: BLACK,
    fontSize: 15,
    paddingTop: 5,
    fontWeight: 'bold'
  },
  textLeftGreenStyle: {
    color: MAIN_COLOR,
    fontSize: 15,
    paddingTop: 5
  },
  textLeftRedStyle: {
    color: MAIN_COLOR,
    fontSize: 15,
    paddingTop: 5
  }
})

export default MainPage
