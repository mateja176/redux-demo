import { Action as ReduxAction } from "redux"

export class Action implements ReduxAction {
  readonly type: string
}

export class ActionWithPayload<Payload> extends Action {
  constructor(public payload: Payload) {
    super()
  }
}
