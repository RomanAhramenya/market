import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux-hooks'
import { IProduct } from '../../models/models'
import { addToBasket } from '../../store/slice/addToBasketSlice'
import AddToBasket from '../basket/AddToBasket'
import s from './Card.module.css'
import CardActionp from './CardActionp'
interface ICard{
    data:IProduct
    isCards:boolean
    link?:string
}
const  Card:FC<ICard> = ({data,isCards,link}) => {
  const dispatch = useAppDispatch()
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
    // setIsNotice(true)
    // setTimeout(()=>setIsNotice(false),3000)
  }
  return (
    <>
     {isCards ? <div className={s.cardLink} >
      <Link to={link!}>
        <h4>{data.title}</h4>
    <div className={s.price}>{data.price}$</div>
    <div className={s.centerContent}>
        <div className={s.image}>
        <img src={data.image} title='photo'/>
        </div> 
        <div className={s.rate}><div>{data.rating.rate}</div> <div>&#9733;</div> </div>  
    </div>
      </Link>
    
      <AddToBasket handleClick={handleBasket}/>
    
    </div> : <div className={s.card}>
    <h4>{data.title}</h4>
    <div className={s.price}>{data.price}$</div>
    <div className={s.centerContent}>
        <div className={s.image}>
        <img src={data.image} title='photo'/>
        </div>
        <div>{data.description}</div>
    </div>
    <CardActionp data={data}/>
      </div>}
    </>
   
    
    



  )
}

export default Card
