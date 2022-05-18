import React from 'react'
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
import { Link } from 'react-router-dom'
import Form from '../component/form/Form';
import { useAppSelector } from '../hooks/redux-hooks';

const RegisterPage = () => {

    const state = useAppSelector(state => state.users)
    console.log(state)
    const handleLogin = (email:string,password:string) => {
        

        const auth = getAuth();
        setPersistence(auth, browserSessionPersistence)
          .then(() => {
            // Existing and future Auth states are now persisted in the current
            // session only. Closing the window would clear any existing state even
            // if a user forgets to sign out.
            // ...
            // New sign-in will be persisted with session persistence.
            return signInWithEmailAndPassword(auth, email, password);
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }
    return (
        <div>
            <h1>
                Register
            </h1>
                <Form handleSubmitProps={handleLogin}/>
            <p>
                Or <Link to='/register'> register</Link>
            </p>

        </div>
    )
}

export default RegisterPage
