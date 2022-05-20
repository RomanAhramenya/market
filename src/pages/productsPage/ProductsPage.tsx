import React, { FC, useEffect, useState } from 'react'
import Card from '../../component/Card/Card'
import s from './Product.module.css'


import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'

import { fetchProduct } from '../../store/slice/productAction'

interface IArgProps{
    arg:string
    title:string
}
const ProductsPage:FC<IArgProps> = ({arg,title}) => {
    const state = useAppSelector(state => state.products)
    const dispatch = useAppDispatch()
 
    const [isNotice,setIsNotice] = useState(false)
    useEffect(()=> {
        if(!state.products[arg]){
          dispatch(fetchProduct(arg))
        }
            
      
    },[arg])

    
  return (
    <div className={s.container}>
      <h4>
          {title}
      </h4>
      <div className={s.wraperCards}>
          {state.products[arg] && state.products[arg].map(el=>{
        return <Card data={el} isCards={true} link={`/${el.category}/${el.id}`}/>
      })}
      </div>
      
      {state.error && <h1>error</h1>}
      
    </div>
  )
}

export default ProductsPage
