import React, {Component} from 'react'
import { Text, StyleSheet, View} from 'react-native'
//import Ionicons from 'react-native-vector-icons/Ionicons'
import { BG_COLOR, MAIN_COLOR, WHITE } from '../../constants/global'
import { Header} from '../../components'

type Props = {};
class Round extends Component<Props> {
  render() {
    const { navigation } = this.props
    const { view } = styles
    return (
      <View style={view} /*<Header title="Настройки" headerColor={MAIN_COLOR} onPress={() => navigation.openDrawer()} leftIcon='ios-menu' leftColor={WHITE} /> */>
        <Text>Тут будет текст</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1, backgroundColor: BG_COLOR
  }
})

export default Round
