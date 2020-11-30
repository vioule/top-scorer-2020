import { createStore } from 'redux'
import Reducer from './reducer'

export default preloadedState => createStore(Reducer, preloadedState)
