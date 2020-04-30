import "core-js/stable"
import "regenerator-runtime/runtime"
import React from "react"
import ReactDOM, { render } from "react-dom"

import App from "./App"

if (process.env.NODE_ENV !== "production") {
  import("react-axe").then(({ default: axe }) => {
    axe(React, ReactDOM, 1000)
    render(<App />, document.getElementById("root"))
  })
} else {
  render(<App />, document.getElementById("root"))
}
