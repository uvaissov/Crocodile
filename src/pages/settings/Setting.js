import React, {Component} from 'react'
import { ScrollView, StyleSheet, View} from 'react-native'
import { connect } from 'react-redux'
import { ListItem, Button, Card, Slider } from 'react-native-elements'
import { changeTime } from '../../actions'
import { BG_COLOR, MAIN_COLOR, WHITE, BORDER_COLOR } from '../../constants/global'
import { Header } from '../../components'

type Props = {};
class Setting extends Component<Props> {
  _changeTime = ({value}) => {
    this.props.changeTime(value)
  }
  keyExtractor = (item) => item.id.toString()
  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={{ source: { uri: item.avatar_url } }}
    />
  )

  render() {
    const { navigation, commands, roundTime } = this.props
    const { listItemConteinerStyle } = styles
    return (
      <View style={styles.container}>
        <Header title="Настройки" headerColor={MAIN_COLOR} onPress={() => navigation.openDrawer()} leftIcon='ios-menu' leftColor={WHITE} />
        <ScrollView ref={(c) => { this.scrollView = c }} onContentSizeChange={(width, height) => this.scrollView.scrollTo({y: height})} >
          <Card title={`Время раунда ${roundTime} секунд`} >
            <Slider
              maximumValue={180}
              value={roundTime}
              onValueChange={value => this._changeTime({ value })}
              minimumValue={10}
              step={5}
            />
          </Card>
          <Card title="Список команд">
            <View>
              {
                commands.map((l) => (
                  <ListItem
                    key={this.keyExtractor(l)}
                    leftIcon={{ name: 'av-timer' }}
                    title={l.name}
                    subtitle={l.subtitle}
                    containerStyle={[listItemConteinerStyle]}
                    chevron
                    onPress={() => navigation.push('EditCommand', { index: l.id })}
                  />
                ))
              }
              <View style={{ }}>
                <Button title="Добавить еще" type="outline" buttonStyle={[listItemConteinerStyle, { height: 55}]} onPress={() => navigation.push('EditCommand')} />
              </View>
            </View>
          </Card >
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR
  },
  inputStyle: {
    borderRadius: 90,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    paddingLeft: 10,
    paddingRight: 10
  },
  listItemConteinerStyle: {
    borderRadius: 5,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: BORDER_COLOR
  }
})

const mapStateToProps = state => {
  return {
    commands: state.setting.commands,
    roundTime: state.setting.roundTime
  }
}

export default connect(mapStateToProps, { changeTime })(Setting)
