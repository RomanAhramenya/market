import React, { FC } from 'react'
import { useForm } from 'react-hook-form'


interface IPropsForm {
    handleSubmitProps:(email: string, password: string)=>void
}
const Form: FC<IPropsForm> = ({handleSubmitProps}) => {
    const {
        register, formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset
    } = useForm({
        mode:"onBlur"
    })
    interface ISubmit {
        email:string
        password:string
    }
    const onSubmit = (data:any) => {
        console.log(data)
        handleSubmitProps(data.email,data.password)
        reset()
    }
    


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                        <label>Email</label>
                    <input 
                        {...register('email', {
                            required: "заполните поле",
                        })}
                    />
                    {errors?.firstName && <span>{errors?.firstName?.message || "Error"}</span>}
                </div>
                <div>
                        <label>Password</label>
                    <input 
                    type='password'
                        {...register('password', {
                            required: "заполните поле",
                            minLength: {
                                value:8,
                                message:'минимальное число симолов 8'
                            }
                        })}
                    />
                    {errors?.firstName && <span>{errors?.firstName?.message || "Error"}</span>}
                </div>
                <input type='submit' disabled={!isValid} />
            </form>
        </div>
        
    )
}

export default Form