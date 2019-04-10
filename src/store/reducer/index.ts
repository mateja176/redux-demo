import { combineReducers } from "redux"
import name from "./name"

export interface State {
  name: string
}

export default combineReducers({
  name,
})

export const selectName = ({ name }: State) => name
