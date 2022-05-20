import React, { FC } from 'react'
import s from './Notice.module.css'
interface INotice{
    title:string
}
const  Notice:FC<INotice> = ({title}) => {
  return (
    <div className={s.notice}>{title}</div>
  )
}

export default Notice