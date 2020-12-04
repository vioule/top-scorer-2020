import { combineReducers } from 'redux'
import menu from './menu/reducer'
import player from './player/reducer'

export default combineReducers({
  menu,
  player,
})
