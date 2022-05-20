import React, { FC, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { useAuth } from '../../hooks/useAuth'
import { IProduct } from '../../models/models'
import { addToBasket } from '../../store/slice/addToBasketSlice'
import AddToBasket from '../basket/AddToBasket'
import Notice from '../notice/Notice'
import Rate from '../rate/Rate'
import s from './Card.module.css'
interface IProps {
    data:IProduct
}

const CardActionp:FC<IProps> = ({data}) => {
    const dispatch = useAppDispatch()
    const [isNotice,setIsNotice] = useState(false)

    const {isAuth} = useAuth()
    const handleBasket = (count:string) => {
        dispatch(addToBasket({
          id:data.id,
          data:{
            id:data.id,
            category:data.category,
      title:data.title,
      price:data.price,
      image:data.image,
      count:count
          }
        }))
        setIsNotice(true)
        setTimeout(()=>setIsNotice(false),3000)
      }
  return (
    <div className={s.action_container}>
       <Rate rate={data.rating.rate} numberOfStars={5} isAuth={isAuth} handleClick={alert}/>
       <div className={s.addNotice}>
       <AddToBasket  handleClick={handleBasket}/>
       {isNotice &&<Notice title='Added to cart'/>}
       </div>
       
    </div>
  )
}

export default CardActionp