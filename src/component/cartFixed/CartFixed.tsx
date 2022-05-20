import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux-hooks'
import s from './CartFixed.module.css'
const logo = require('./../../assets/basket.png')
function CartFixed() {
    const count = useAppSelector(state => state.basket.basket)
  return (
    <div className={s.cartFixed}>
    <Link to='/cart'>
      <button>
        Cart <img src={logo}/>
        <div>{Object.keys(count).length}</div>
      </button>

    </Link>

  </div>
  )
}

export default CartFixed
