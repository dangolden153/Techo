import React,{useState,useContext} from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './styles.css' 
import { useHistory } from 'react-router';
import appContext from '../../context/app-context';

const GoogleAuth = () => {
    const history = useHistory();
    const {setGoogleData} = useContext(appContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginButton, setShowLoginButton] = useState(true);
    const [showLogoutButton, setShowLogoutButton] = useState(false);
    const clientId = "294593151688-664n87nepifpao2ftnfknlb5ek60eha5.apps.googleusercontent.com";
    const onLoginSuccess = (response) => { 
        console.log("Login success");
        console.log(response.profileObj);
        setGoogleData(response.profileObj);
        setShowLoginButton(false);
        const {name, email, imageUrl} = response.profileObj;
        localStorage.setItem('user', JSON.stringify({name, email, imageUrl})); 
        history.push('/home'); 
        showLogoutButton(true);

    }
    const onFailureSuccess = (response) => { 
        console.log("Login failure");
        console.log(response); 
        setShowLoginButton(true);
            setShowLogoutButton (false);

    }
    const onSignOutSuccess = (response) => { 
        alert("You have Signout Successfully");  
            setShowLoginButton(true);
            setShowLogoutButton(false);
    }
    return (
        <div>
            {showLoginButton ? 
              <GoogleLogin
    clientId={clientId}
    buttonText="Login"
    onSuccess={onLoginSuccess}
    onFailure={onFailureSuccess}
    cookiePolicy={'single_host_origin'}
  /> : null}
            {showLogoutButton ?
<GoogleLogout
      clientId={clientId} 
      buttonText="Logout"
      onLogoutSuccess={onSignOutSuccess}
    >
    </GoogleLogout>
            : null}
        </div>
    )
}

export default GoogleAuth
