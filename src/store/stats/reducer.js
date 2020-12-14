import { SET_STATS_MENU, SET_STATS_LEAGUE } from './action'

const DEFAULT_STATE = {
  menu: 'infos',
  league: 'bl',
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_STATS_MENU:
      return { ...state, menu: action.payload }
    case SET_STATS_LEAGUE:
      return { ...state, league: action.payload }
    default:
      return state
  }
}
