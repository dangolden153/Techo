import React from 'react'
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/login/Login'
import Signup from './pages/login/Signup'

const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/homepage" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

      
      </Switch>
      </Router>
    </>
  )
}

export default App
