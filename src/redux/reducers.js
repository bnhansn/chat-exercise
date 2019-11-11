import { combineReducers } from 'redux'
import chat from 'reducers/chat'

export default function rootReducer() {
  return combineReducers({
    chat
  })
}
