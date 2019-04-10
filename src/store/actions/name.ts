import { ActionCreatorWithPayload } from "."
import { State } from "../reducer/name"

export const NameActionTypes = {
  Set: "[Name] Set",
}

export type SetName = ActionCreatorWithPayload<State>

export const setName: SetName = name => ({
  type: NameActionTypes.Set,
  payload: name,
})
