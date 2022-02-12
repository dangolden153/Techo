import React, { useEffect } from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
// import './styles/output.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/login/Login";
// import Register from './pages/Register/Register'
import Forming from "./components/Form/Forming";
import Former from "./components/Form/Former";
import AppState from "./context/AppState";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import PasswordAssitance from "./pages/ForgetPassword/PasswordAssitance";
import ResetPassword from "./pages/ForgetPassword/ResetPassword";
import ResetSuccessful from "./pages/ForgetPassword/ResetSuccessful";
import QuestionFeed from "./pages/QuestionFeed/QuestionFeed";
import MediaPage from "./pages/MediaPage/MediaPage";
import TestNav from "./components/Testing/Test";
import Profile from "./pages/ProfilePage/Profile";
import Error from "./pages/ErrorPage/Error";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import { useSelector, useDispatch } from "react-redux";
import CommentPage from "./pages/CommentPage/Comment";
import AskQuestionTest from "./pages/AskQuestion/AskQuestionTest";
import { fetchQuestions } from "./reducers/actions/questions";
import QuestionPage from "./pages/QuestionPage/QuestionPage";
import { getUsersDetails } from "./reducers/actions/users";
import AuthPage from "./pages/AuthPage/AuthPage";
import FormikInput from "./pages/formik";
import {
  getUserAwards,
  getUserCertification,
  getUserEducation,
  getUserExperience,
  getUserProject,
  getUserSkills,
} from "./reducers/actions/profiles";
// import Demo from "./components/demo";

const App = () => {
  const dispatch = useDispatch();

  // **********fetch users details************
  useEffect(() => {
    dispatch(getUsersDetails());
  }, [dispatch]);

  // **********fetch questions************
  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  // **********fetch education profile************
  useEffect(() => {
    dispatch(getUserEducation());
  }, [dispatch]);

  // **********fetch experience from user profile************
  useEffect(() => {
    dispatch(getUserExperience());
  }, [dispatch]);

  // **********fetch project from user profile************
  useEffect(() => {
    dispatch(getUserProject());
  }, [dispatch]);

  // **********fetch skill from user profile************
  useEffect(() => {
    dispatch(getUserSkills());
  }, [dispatch]);

  // **********fetch awards from user profile************
  useEffect(() => {
    dispatch(getUserAwards());
  }, [dispatch]);

  // **********fetch certification from user profile************
  useEffect(() => {
    dispatch(getUserCertification());
  }, [dispatch]);

  return (
    <div>
      <AppState>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/auth" component={AuthPage} />
            <Route exact path="/form" component={FormikInput} />
            <Route exact path="/forgetPassword" component={ForgetPassword} />
            <Route
              exact
              path="/passwordAssitance"
              component={PasswordAssitance}
            />
            <Route exact path="/resetPassword" component={ResetPassword} />
            <Route exact path="/resetSuccessful" component={ResetSuccessful} />
            <Route exact path="/question-feeds" component={QuestionFeed} />
            <Route exact path="/media" component={MediaPage} />
            <Route exact path="/test" component={TestNav} />

            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/register" component={Register} /> */}
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
    </div>
  );
};

export default App;

/// image on ask question ✅
/// deploy ✅
// work on the responsiveness ✅

// authenticate the app and ensure the
// flow is clean enough including the responsiveness ✅ yup and validation..
// fetch data to reducer and populate it to its location...✅
// update user profile picture
// make a logout button ..
// create an authenticated routes
// update user profile 🕗
// the ask question modal
// make the question more responsive
// make forgot access-able
// following and Followers endpoint
// dont have ui design required for adding profile .


