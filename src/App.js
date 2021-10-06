import React from 'react'
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/login/Login'
import Register from './pages/Register/Register'

const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/landing" component={LandingPage} />
        <Route exact path="/homepage" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Register} />

      
      </Switch>
      </Router>
    </>
  )
}

export default App
