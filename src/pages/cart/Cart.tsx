import React, { FC, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OrderForm from '../../component/orderForm/OrderForm'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { useAuth } from '../../hooks/useAuth'
import { deleteAll, deleteItem, setCount } from '../../store/slice/addToBasketSlice'
import s from './Cart.module.css'
const Cart: FC = () => {
  const basket = useAppSelector(state => state.basket.basket)
  const {isAuth} = useAuth()
 
  const navigate = useNavigate()
  const [isOrder, setIsOrder] = useState(false)

  let a = 0
 
    
   
    for (let key in basket){
       a=(a+(basket[key].price * basket[key].count))
    }
  
    useEffect(()=>{
      a=0
    },[basket])
  const dispatch = useAppDispatch()
  dispatch(setCount)
  const order = (firstName: string, LastName: string, email: string, phone: string, adress: string) => {
    alert(`
      FirstName: ${firstName},
      LastName: ${LastName},
      Email: ${email},
      phone: ${phone},
      adress: ${adress},

      Your order: ${Object.keys(basket).map(el => {
      return `id: ${basket[Number(el)].id}, count: ${basket[Number(el)].count}`
    })
      }
      `)
  }
  return (
    <div className={s.container}>
      <div className={s.back}>
         <button onClick={()=>navigate(-1)}>&#8656; Back</button>
      </div>
     
      <h2> Cart</h2>
      {Object.keys(basket).map((el, index) => {
        return <div className={s.card}>
          <div>{index + 1}</div>
          <div className={s.image}>
            <img src={basket[Number(el)].image} title='photo' />
          </div>
          <div
            className={s.title}>
              <Link to={`/${basket[Number(el)].category}/${basket[Number(el)].id}`}>{basket[Number(el)].title}</Link>
            
          </div>
          <div className={s.price}>
            {(basket[Number(el)].price * basket[Number(el)].count).toFixed(2)}$
          </div>
          <div className={s.units}>
           <span> units: {basket[Number(el)].count}</span> 
            <button onClick={() =>
              dispatch(setCount({
                id: Number(el),
                count: Number(basket[Number(el)].count) + 1
              }))}>
              +</button>
            <button onClick={() =>
              dispatch(setCount({
                id: Number(el),
                count: Number(basket[Number(el)].count) > 0 ? Number(basket[Number(el)].count) - 1 : Number(basket[Number(el)].count) - 0
              }))}>
              -</button>
            <button onClick={() =>
              dispatch(deleteItem(Number(el)))}>
              delete</button></div>

        </div>
      })}

      {Object.keys(basket).length > 0 &&
      
        <div>
          <span >Total price: <span className={s.totalPrice}>{a} $</span></span> 
          <button onClick={() => isAuth ? setIsOrder(true) : navigate('/login')}>Order</button>
          <button onClick={() => dispatch(deleteAll())}>Delete all</button>
        </div>
      }


      {isOrder && <OrderForm price={a} handleClose={() => setIsOrder(false)} handleSubmitProps={order} />}
    </div>
  )
}

export default Cart
