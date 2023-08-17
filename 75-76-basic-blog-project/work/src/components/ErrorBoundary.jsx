import React from "react"
import ErrorPage from "./ErrorPage"

export default class ErrorBoundary extends React.Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return <ErrorPage error={this.state.error} />
    }

    return this.props.children
  }
}
