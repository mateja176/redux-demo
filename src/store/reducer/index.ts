import { combineReducers } from "redux"
import name from "./name"

export interface State {
  name: string
}

export default combineReducers({
  name,
})
