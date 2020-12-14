import { SET_STATS } from './action'

const DEFAULT_STATE = 'infos'

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_STATS:
      return action.payload
    default:
      return state
  }
}
