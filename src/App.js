import React from 'react'
import LandingPage from './pages/LandingPage/LandingPage'
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'

import Login from './pages/login/Login'
import Register from './pages/Register/Register'
import Forming from './components/Form/Forming'
import Former from './components/Form/Former'
import AppState from './context/AppState';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword'
import PasswordAssitance from './pages/ForgetPassword/PasswordAssitance'
import ResetPassword from './pages/ForgetPassword/ResetPassword'
import ResetSuccessful from './pages/ForgetPassword/ResetSuccessful'
import Homepage from './pages/Homepage/Homepage'
import MediaPage from './pages/MediaPage/MediaPage'


const App = () => {
  return (
    <AppState>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/forgetPassword" component={ForgetPassword} />
        <Route exact path="/passwordAssitance" component={PasswordAssitance} />
        <Route exact path="/resetPassword" component={ResetPassword} />
        <Route exact path="/resetSuccessful" component={ResetSuccessful} />
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/media" component={MediaPage} />
        
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/form" component={Forming} />
        

      
      </Switch>
      </Router>
    </AppState>
  )
}

export default App
