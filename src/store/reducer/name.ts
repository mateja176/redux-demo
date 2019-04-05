import { Action } from "redux"

export type NameState = string

export const initialState = "Jane"

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
