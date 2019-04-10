import { Action } from "redux"

export type State = string

export const initialState: State = "Jane"

export default (
  state = initialState,
  { type, payload }: Action & { payload: string },
) => {
  switch (type) {
    case "[Name] Set":
      return payload
    default:
      return state
  }
}
