import logger from "redux-logger"
import { configureStore, Store } from "redux-starter-kit"
import { Environment } from "../models/Environment"
import reducer from "./reducer"

export const middleware = [logger]

export default {
  production: () => configureStore({ reducer }),
  development: () => {
    const store = configureStore({ reducer, middleware })
    ;(module as any).hot.accept("./reducer", () => {
      store.replaceReducer(reducer)
    })

    return store
  },
} as { [key in Environment]: () => Store }
