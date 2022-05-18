import React, { useEffect } from 'react';
import { getAuth } from "firebase/auth";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useAppDispatch } from './hooks/redux-hooks';
import { setUser } from './store/slice/userSlice';



function App() {
  const dispatch = useAppDispatch()
useEffect(()=>{
  const auth = getAuth();
const user = auth.currentUser;
if (user !== null) {
  dispatch(setUser({
            email:user.email,
            password:user.uid,
            token:user.refreshToken
  }))
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;
  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}
console.log(user)
},[])


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>} />\
        <Route path='/register' element={<RegisterPage/>} />

       
      </Routes>
    </div>
  );
}

export default App;
