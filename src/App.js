import React from 'react'
import LandingPage from './pages/LandingPage/LandingPage'
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'

import Login from './pages/login/Login'
import Register from './pages/Register/Register'
import Forming from './components/Form/Forming'
import Former from './components/Form/Former'
import AppState from './context/AppState';

const App = () => {
  return (
    <AppState>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/form" component={Forming} />
        

      
      </Switch>
      </Router>
    </AppState>
  )
}

export default App
