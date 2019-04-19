import { combineReducers } from 'redux'
import SettingReducer from './SettingReducer'
import GameReducer from './GameReducer'

export default combineReducers({
  setting: SettingReducer,
  game: GameReducer
})
