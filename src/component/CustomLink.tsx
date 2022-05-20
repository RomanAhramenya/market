import React, { FC } from 'react';
import { Link, useMatch } from 'react-router-dom';

interface IProps {
    to:string
    children:React.ReactNode
}
const CustomLink:FC<IProps> = ({children,to,...props}) => {
    const match= useMatch(to)
  return (
      <Link to={to} {...props}  style={{ textDecoration: match ? "underline" : "none",color:match ? "darkgreen":'' }}>
      {children}
      </Link>
  )
}

export default CustomLink;