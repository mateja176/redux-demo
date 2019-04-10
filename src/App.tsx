import React, { SFC, useState } from "react"
import { connect } from "react-redux"
import "./App.css"
import { setName } from "./store/actions/name"
import { selectName, State } from "./store/reducer"
import { State as Name } from "./store/reducer/name"

export interface AppProps {
  name: Name
  setName: (name: Name) => void
}

const App: SFC<AppProps> = ({ name, setName }) => {
  const [value, setValue] = useState("")

  return (
    <form
      className="App"
      onSubmit={e => {
        e.preventDefault()

        setName(value)
      }}
    >
      <input value={name} readOnly />
      <hr />
      <input
        value={value}
        onChange={({ target: { value: newValue } }) => setValue(newValue)}
      />
      <input type="submit" />
    </form>
  )
}

const mapStateToProps = (state: State) => ({ name: selectName(state) })

export default connect(
  mapStateToProps,
  { setName },
)(App)
