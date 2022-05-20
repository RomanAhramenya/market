import React from 'react'
import s from './Header.module.css'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { removeUser } from '../../store/slice/userSlice'


function Header() {
    const state = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

  return (
    <>
    {state.email !== 'null' && state.email ?
        <header className={s.container}>
            <span>{state.email}</span>
            <button onClick={()=>dispatch(removeUser())}>Out</button>
            </header>
            :
            <header className={s.container}>
                    <button onClick={()=>navigate('/login')}>Sign in</button>
                    <button onClick={()=>navigate('/register')}>Regetration</button>
            </header>
            }
    </>
        
            
   
  )
}

export default Header