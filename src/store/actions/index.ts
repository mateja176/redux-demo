import { Action as ReduxAction } from "redux"

export interface Action extends ReduxAction<string> {}

export interface ActionWithPayload<Payload> extends Action {
  payload: Payload
}

export type ActionCreator = () => Action

export type ActionCreatorWithPayload<Payload> = (
  payload: Payload,
) => ActionWithPayload<Payload>
