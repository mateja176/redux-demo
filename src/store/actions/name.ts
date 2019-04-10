import { ActionCreatorWithPayload, createActionWithPayload } from "."
import { State } from "../reducer/name"

export const NameActionTypes = {
  Set: "[Name] Set",
}

export type SetName = ActionCreatorWithPayload<State>

export const setName = createActionWithPayload<State>(NameActionTypes.Set)
