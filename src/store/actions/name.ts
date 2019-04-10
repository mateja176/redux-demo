import { ActionWithPayload, createActionWithPayload } from "."
import { Name } from "../reducer/name"

export const NameActionTypes = {
  Set: "[Name] Set",
}

export const setName = createActionWithPayload<Name>(NameActionTypes.Set)

export type SetNameAction = ActionWithPayload<Name>

export type NameAction = SetNameAction
