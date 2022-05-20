import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useAppDispatch } from './hooks/redux-hooks';
import { setUser } from './store/slice/userSlice';
import Layout from './pages/Layout';
import ProjectsPage from './pages/productsPage/ProductsPage';
import PageProduct from './pages/PageProduct';
import Cart from './pages/cart/Cart';





function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    let token = localStorage.getItem('tokenRef')
    let email = localStorage.getItem('email')
    let id = localStorage.getItem('id')
    dispatch(setUser({
      id, token, email
    }))
  }, [])

  const arg = [
    {id:1,title:'Electronics',path:'electronics'},
    {id:2,title:'Jewelery',path:'jewelery'},
    {id:3,title:"Men's clothing",path:"men's%20clothing"},
    {id:4,title:"Women's clothing",path:"women's%20clothing"}]
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          {arg.map(el=>{
            return <Route key={el.id} path={el.path} element={<ProjectsPage title={el.title} arg={el.path}/>} />
          })}
          {arg.map((el,index)=>{
            return  <Route key={el.id} path={`${el.path}/:id`} element={<PageProduct title={el.title} path={el.path}/>} />
          })}
        <Route path='/cart' element={<Cart/>}/>


        </Route>

      </Routes>
    </div>
  );
}

export default App;
