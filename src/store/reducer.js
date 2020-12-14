import { combineReducers } from 'redux'
import menu from './menu/reducer'
import player from './player/reducer'
import stats from './stats/reducer'

export default combineReducers({
  menu,
  player,
  stats,
})
