import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import s from './Form.module.css'

interface IPropsForm {
    handleSubmitProps:(email: string, password: string)=>void
    to:string
    back:string
}
const Form: FC<IPropsForm> = ({handleSubmitProps,to,back}) => {
    const navigate = useNavigate()
    const {
        register, formState: {
            errors,
        },
        handleSubmit,
        reset
    } = useForm({
        mode:"onBlur"
    })
  
    const onSubmit = (data:any) => {
        handleSubmitProps(data.email,data.password)
        reset()
        navigate(back)
    }
    


    return (
        <div className={s.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.field}>
                        <label>Email</label>
                    <input type='email'
                        {...register('email', {
                            required: "empty field",
                        })}
                    />
                    {errors?.email && <span className={s.error}><span>&#9888;</span>{errors?.email?.message || "Error"}</span>}
                </div>
                <div className={s.field}>
                        <label>Password</label>
                    <input 
                    type='password'
                        {...register('password', {
                            required: "empty field",
                            minLength: {
                                value:8,
                                message:'min 8'
                            }
                        })}
                    />
                    {errors?.password && <span className={s.error}><span>&#9888;</span>{ errors?.password?.message || "Error"}</span>}
                </div>
                {to === 'login' && <button>Register</button>}
                {to === 'register' && <button>Login</button>}
                Or <Link to={`/${to}`}>{to}</Link>
            
            </form>
        </div>
        
    )
}

export default Form