import React, { useEffect } from "react";
import LandingPage from './pages/LandingPage/LandingPage'
// import './styles/output.css'
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
import TestNav from './components/Testing/Test';
import Profile from './pages/ProfilePage/Profile'
import Error from './pages/ErrorPage/Error'
import AskQuestion from './pages/AskQuestion/AskQuestion';
import {useSelector, useDispatch} from 'react-redux'
import CommentPage from './pages/CommentPage/Comment'
import AskQuestionTest from './pages/AskQuestion/AskQuestionTest';
import { fetchQuestions } from "./reducers/actions/questions";
// import Demo from "./components/demo";




const App = () => {

  const access_token = localStorage.getItem('token');
  console.log(`access_token`, access_token)
  return (
    <AppState>
    <Router>
      <Switch>
      <Route exact path="/" component={LandingPage} />
      {/* <Route exact path="/demo" component={Demo} /> */}
        <Route exact path="/forgetPassword" component={ForgetPassword} />
        <Route exact path="/passwordAssitance" component={PasswordAssitance} />
        <Route exact path="/resetPassword" component={ResetPassword} />
        <Route exact path="/resetSuccessful" component={ResetSuccessful} />
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/media" component={MediaPage} />
        <Route exact path="/test" component={TestNav} />
        
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/form" component={Forming} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/comment" component={CommentPage} />
        <Route exact path="/askTest" component={AskQuestion} />
        <Route exact path="/ask" component={AskQuestionTest} /> 
        <Route path="*">
      <Error />
      </Route>

      
      </Switch>
      </Router>
    </AppState>
  )
}

export default App
