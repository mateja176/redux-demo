import { applyMiddleware, createStore, Store } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import logger from "redux-logger"
import reducer, { State } from "./reducer"

export const middleware = [logger]

const configureStore = (env: string): Store<State> => {
  switch (env) {
    case "production":
      return createStore(reducer)
    default:
      return createStore(
        reducer,
        composeWithDevTools(applyMiddleware(...middleware)),
      )
  }
}

export default configureStore
