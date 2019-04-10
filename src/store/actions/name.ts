import { ActionWithPayload } from "."
import { Name } from "../reducer/name"

export const NameActionTypes = {
  Set: "[Name] Set",
}

export class SetName extends ActionWithPayload<Name> {
  type = NameActionTypes.Set
}

const a = new SetName("abc")
