module.exports = `import React from "react"
import { Redirect, Route } from "react-router-dom"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authUser = null
  return (
    <Route
      {...rest}
      render={(props) => {
        return authUser ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }}
    />
  )
}

export default PrivateRoute
`