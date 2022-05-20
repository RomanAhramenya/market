import React, { FC, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { addToBasket } from '../../store/slice/addToBasketSlice'
import s from './AddToBasket.module.css'
const logo = require('./../../assets/basket.png')
interface IProps{
  
  handleClick:(count:string)=>void
}
const AddToBasket:FC<IProps> = ({handleClick}) => {
  const state = useAppSelector(state => state.basket)
  const [count,setCount] = useState(1)
  console.log(state)
 const handleAdd = () => {
  handleClick(String(count))
  setCount(count+1)
 }
  return (
    <div className={s.container} >
      <input value={count} onChange={(e) => setCount(Number(e.currentTarget.value))} type='number'/>
      <button onClick={()=>handleAdd()}>Add <img src={logo}/></button>
    </div>
  )
}

export default AddToBasket
