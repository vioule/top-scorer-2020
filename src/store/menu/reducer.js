import { SET_LEAGUE, SET_TOP } from './action'

const DEFAULT_STATE = {
  league: 'bl',
  top: 1,
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_LEAGUE:
      return { ...state, league: action.payload }
    case SET_TOP:
      return { ...state, top: action.payload }
    default:
      return state
  }
}
