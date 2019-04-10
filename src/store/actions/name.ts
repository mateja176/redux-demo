import { ActionWithPayload, createActionWithPayload } from "."
import { State } from "../reducer/name"

export const NameActionTypes = {
  Set: "[Name] Set",
}

export const setName = createActionWithPayload<State>(NameActionTypes.Set)

export type SetNameAction = ActionWithPayload<State>

export type NameAction = SetNameAction
