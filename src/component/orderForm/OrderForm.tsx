import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import s from './OrderForm.module.css'

interface IPropsForm {
    handleSubmitProps:(firstName:string,LastName:string,email:string,phone:string,adress:string)=>void
    handleClose:()=>void
    price:number
}
const OrderForm: FC<IPropsForm> = ({handleSubmitProps,handleClose,price}) => {
   const [isError,setIsError] = useState(false)
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
        
        handleSubmitProps(data.firstName,data.lastName,data.email,data.phone,data.adress)
        reset()
        isError && handleClose()
    }
    


    return (
        <div className={s.container}>
            <h1>Total Price {price}$</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.field}>
                        <label>First name</label>
                    <input type='text'
                        {...register('firstName', {
                            required: "empty field",
                        })}
                    />
                    {errors?.email && <span className={s.error}><span>&#9888;</span>{errors?.email?.message || "Error"}</span>}
                </div>
                <div className={s.field}>
                        <label>Last Name</label>
                    <input 
                    type='text'
                        {...register('lastName', {
                            required: "empty field",
                            
                        })}
                    />
                    {errors?.password && <span className={s.error}><span>&#9888;</span>{ errors?.password?.message || "Error"}</span>}
                </div>
                <div className={s.field}>
                        <label>Email</label>
                    <input 
                    type='text'
                        {...register('email', {
                            required: "empty field",
                            
                        })}
                    />
                    {errors?.password && <span className={s.error}><span>&#9888;</span>{ errors?.password?.message || "Error"}</span>}
                </div>
                <div className={s.field}>
                        <label>Phone</label>
                    <input 
                    type='phone'
                        {...register('phone', {
                            required: "empty field",
                            
                        })}
                    />
                    {errors?.password && <span className={s.error}><span>&#9888;</span>{ errors?.password?.message || "Error"}</span>}
                </div>
                <div className={s.field}>
                        <label>Adress</label>
                    <input 
                    type='text'
                        {...register('adress', {
                            required: "empty field",
                            
                        })}
                    />
                    {errors?.password && <span className={s.error}><span>&#9888;</span>{ errors?.password?.message || "Error"}</span>}
                </div>
                 <button onClick={()=> Object.keys(errors).length === 0 && setIsError(true)}>Order</button>
                 <button onClick={()=>handleClose()}>Close</button>
            
            </form>
        </div>
        
    )
}

export default OrderForm
