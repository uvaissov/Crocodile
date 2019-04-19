import React, {Component} from 'react'
import { StyleSheet, View} from 'react-native'
import { connect } from 'react-redux'
import { Input, Button, Card } from 'react-native-elements'
import { saveCommand, removeCommand } from '../../actions'
import { BG_COLOR, MAIN_COLOR, WHITE, BORDER_COLOR } from '../../constants/global'
import { Header } from '../../components'

type Props = {};
class EditCommand extends Component<Props> {
  constructor(props) {
    super(props)
    const id = props.navigation.getParam('index')
    this.state = { name: (id ? props.commands.find(element => element.id === id).name : '') }
  }

  _saveCommand = () => {
    this.props.saveCommand(this.props.navigation.getParam('index'), this.state.name)
    this.props.navigation.goBack()
  }

  _removeCommand = () => {
    this.props.removeCommand(this.props.navigation.getParam('index'))
    this.props.navigation.goBack()
  }

  render() {
    const { navigation } = this.props
    const { inputStyle } = styles
    const title = navigation.getParam('index') >= 0 ? 'Редактирование' : 'Создание'

    return (
      <View style={styles.container}>
        <Header title={title} headerColor={MAIN_COLOR} onPress={() => navigation.goBack()} leftIcon='ios-arrow-back' leftColor={WHITE} rightIcon='ios-trash' rightColor={WHITE} onPressRight={this._removeCommand} />
        <Card style={{ flex: 1}}>
          <View>
            <Input label="Наименование" value={this.state.name} style={inputStyle} onChangeText={(text) => this.setState({name: text})} />
          </View>
          <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button title="Сохранить" onPress={this._saveCommand} />
            <Button title="Отмена" onPress={() => navigation.goBack()} />
          </View>
        </Card>
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
    commands: state.setting.commands
  }
}

export default connect(mapStateToProps, { saveCommand, removeCommand })(EditCommand)
