import React from 'react'
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MainPage from './main/MainPage'
import Game from './game/Game'
import Round from './game/Round'
import Setting from './settings/Setting'
import EditCommand from './settings/EditCommand'
import { MAIN_COLOR } from '../constants/global'

const GameStack = createStackNavigator(
  {
    Game,
    Round
  },
  {
    initialRouteName: 'Game',
    headerMode: 'none'
  }
)

const SettingStack = createStackNavigator(
  {
    Setting,
    EditCommand
  },
  {
    initialRouteName: 'Setting',
    headerMode: 'none'
  }
)

const Screens = createDrawerNavigator({
  Home: {
    screen: MainPage,
    navigationOptions: {
      drawerLabel: 'Главная',
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="grade" size={24} style={{ color: tintColor }} />
      )
    }
  },
  Game: {
    screen: GameStack,
    navigationOptions: {
      drawerLabel: 'Игра',
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="favorite" size={24} style={{ color: tintColor }} />
      )
    }
  },
  Setting: {
    screen: SettingStack,
    navigationOptions: {
      drawerLabel: 'Настройка',
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="pets" size={24} style={{ color: tintColor }} />
      )
    }
  }
},
{
  initialRouteName: 'Game',
  contentOptions: {
    activeTintColor: MAIN_COLOR,
    itemsContainerStyle: {
      marginVertical: 65
    }
  }
})

export default createAppContainer(Screens)
