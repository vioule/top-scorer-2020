import { SET_PLAYER_NAME, SET_PLAYER_IMAGE } from './action'

const DEFAULT_STATE = {
  image: 'bl-1.png',
  name: 'robert lewandowski',
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_PLAYER_NAME:
      return { ...state, name: action.payload }
    case SET_PLAYER_IMAGE:
      return { ...state, image: action.payload }
    default:
      return state
  }
}
