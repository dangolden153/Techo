import React from 'react'
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/homepage" component={Homepage} />

      
      </Switch>
      </Router>
    </>
  )
}

export default App
