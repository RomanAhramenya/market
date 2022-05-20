
import React from 'react'
import s from './Layout.module.css'
import Header from '../component/header/Header'
import { Outlet, Link } from 'react-router-dom'
import CustomLink from '../component/CustomLink'
import CartFixed from '../component/cartFixed/CartFixed'




const Layout = () => {

  return (
    <div className={s.container} >
      <Header />
      <nav>
        <div>
          <CustomLink to='/electronics'>Electronics</CustomLink>
        </div>
        <div>
          <CustomLink to='/jewelery'>Jewelery</CustomLink>
        </div>
        <div>
          <CustomLink to="/men's clothing">Men`s clothing</CustomLink>
        </div>
        <div>
          <CustomLink to="/women's clothing">Women`s clothing</CustomLink>
        </div>
      



      </nav>
      <main>
       <CartFixed/>
        <Outlet />
      </main>
      <footer>

      </footer>
    </div>


  )
}

export default Layout
