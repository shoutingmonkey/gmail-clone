import React from 'react';
import './Login.css';
import { Button } from '@mui/material';
import { auth, provider } from './firebase';
import { useDispatch} from 'react-redux';
import { login } from './features/userSlice';

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth.signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      })
      .catch(error => alert(error.message));
  };

return (
  <div className="login">
    <div className="login__container">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/clone-a2d90.appspot.com/o/iconfinder_google-gmail_7089163.png?alt=media&token=1ce22660-6ae9-4ca1-a7ae-cf92499f333e"
        alt=""
        className="" />
      <Button
        onClick={signIn}
        variant="outlined"
        color="primary"
      >Login</Button>
    </div>
  </div>
);
}

export default Login;
