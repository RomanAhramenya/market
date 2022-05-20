import React from 'react'
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
import { Link } from 'react-router-dom'
import Form from '../component/form/Form';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { setUser } from '../store/slice/userSlice';

const LoginPage = () => {

    const state = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()
    
    const handleLogin = (email:string,password:string) => {
        

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            const email = user.email
            const id = user.uid
            const token = user.refreshToken
            dispatch(setUser({
                email,id,token
            }))
          
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }
    return (
        <div>
                <Form to='register' handleSubmitProps={handleLogin}/>
           

        </div>
    )
}

export default LoginPage
