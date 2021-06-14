module.exports = `import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./App.scss"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <main className="page-wrapper">
        <Switch>
          <Route path={["/", "/home"]} exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App
`