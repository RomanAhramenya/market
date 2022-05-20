import React, { FC, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import AddToBasket from '../../component/basket/AddToBasket'
import Notice from '../../component/notice/Notice'


import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { addToBasket } from '../../store/slice/addToBasketSlice'
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
    <div>
      <h4>
          {title}
      </h4>
        {state.products[arg] ? state.products[arg].map(el=>{
            const handleBasket = (count:string) => {
              dispatch(addToBasket({
                id:el.id,
                data:{
                  id:el.id,
            title:el.title,
            price:el.price,
            image:el.image,
            count:count
                }
              }))
              setIsNotice(true)
              setTimeout(()=>setIsNotice(false),3000)
            }
            return <div key={el.id}>
                    <h1><Link to={`/${arg}/${el.id}`}>{el.title}</Link></h1>
                    <div>{el.price}</div>
                    <div><img src={el.image} title='photo'/></div>
                    <AddToBasket handleClick={handleBasket}/>
                    <div>{el.rating.rate}</div>
            </div>
        }):<h1>Loading...</h1>}
      {state.error && <h1>error</h1>}
      {isNotice &&<Notice title='Added to cart'/>}
    </div>
  )
}

export default ProductsPage
