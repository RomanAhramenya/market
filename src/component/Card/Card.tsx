import React, { FC } from 'react'
import { IProduct } from '../../models/models'
import s from './Card.module.css'
import CardActionp from './CardActionp'
interface ICard{
    data:IProduct
}
const  Card:FC<ICard> = ({data}) => {
  return (
    <div className={s.card}>
    <h4>{data.title}</h4>
    <div className={s.price}>{data.price}$</div>
    <div className={s.centerContent}>
        <div className={s.image}>
        <img src={data.image} title='photo'/>
        </div>
        <div>{data.description}</div>
    
    </div>
    
    <CardActionp data={data}/>
    
</div>
  )
}

export default Card
