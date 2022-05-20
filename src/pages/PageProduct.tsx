import React, { FC, useEffect } from 'react'
import s from './PageProduct.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { IProduct } from '../models/models'
import { fetchCurrentProduct } from '../store/slice/currentProductAction'
import Card from '../component/Card/Card'
import { DiscussionEmbed } from 'disqus-react'
import DisqusAdd from '../component/disqus/Disqus'
interface IProps{
    path:string
    title:string
}
const PageProduct:FC<IProps> = ({path,title}) => {
    const {id} = useParams()
    const state = useAppSelector(state => state.currentProduct)
    const dispatch =useAppDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        if(id && !state.product[id]){
            dispatch(fetchCurrentProduct(id))
        }
        
    },[id])
  return (
    <div className={s.container}>
       <button onClick={()=>navigate(-1)}>&#8656; Back</button>
        <Link to={`/${path}`}>{title}</Link>
        {state.isLoading && <h1>Loading</h1>}
            {(id && state.product[id]) && <Card isCards={false} data={state.product[id]}/>}
        {state.error && <h1>error</h1>}
        <DisqusAdd id={(id && state.product[id]) && `${state.product[id].category}/${state.product[id].id}`}/>
    </div>
  )
}

export default PageProduct