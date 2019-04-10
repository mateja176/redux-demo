import { NameAction, NameActionTypes } from "../actions/name"

export type Name = string

export const initialName: Name = "Jane"

export default (name = initialName, { type, payload }: NameAction) => {
  switch (type) {
    case NameActionTypes.Set:
      return payload
    default:
      return name
  }
}
