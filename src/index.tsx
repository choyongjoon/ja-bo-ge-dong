import "core-js/stable"
import "regenerator-runtime/runtime"
import React from "react"
import ReactDOM, { hydrate, render } from "react-dom"

import App from "./App"

const rootElement = document.getElementById("root")

const renderWithSnap = () => {
  if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement)
  } else {
    render(<App />, rootElement)
  }
}

if (process.env.NODE_ENV !== "production") {
  import("react-axe").then(({ default: axe }) => {
    axe(React, ReactDOM, 1000)
    renderWithSnap()
  })
} else {
  renderWithSnap()
}
