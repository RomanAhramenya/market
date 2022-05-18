import Form from '../component/form/Form'
import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../hooks/redux-hooks';
import { setUser } from '../store/slice/userSlice';

const LoginPage = () => {
    const dispatch = useAppDispatch()
    const handleLogin = (email:string,password:string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,  email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        dispatch(setUser({
            email:user.email,
            password:user.uid,
            token:user.refreshToken
        }))
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    }
  return (
    <div>
      <h1>Registr</h1>
            <Form handleSubmitProps={handleLogin}/>
      <p>
          Or <Link to='/login'>login</Link>
      </p>
    </div>
  )
}

export default LoginPage