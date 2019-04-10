import { NameAction, NameActionTypes } from "../actions/name"

export type State = string

export const initialState: State = "Jane"

export default (state = initialState, { type, payload }: NameAction) => {
  switch (type) {
    case NameActionTypes.Set:
      return payload
    default:
      return state
  }
}
