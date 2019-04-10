import { ActionCreatorWithPayload } from "."
import { State } from "../reducer/name"

export const NameActionTypes = {
  Set: "[Name] Set",
}

export const setName: ActionCreatorWithPayload<State> = name => ({
  type: NameActionTypes.Set,
  payload: name,
})
