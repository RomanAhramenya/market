import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import s from './Rate.module.css'
interface IRate {
    rate: number
    numberOfStars: number
    handleClick: (num: number) => void
    isAuth: boolean
}
const Rate: FC<IRate> = ({ rate, numberOfStars, handleClick, isAuth }) => {
    const [isMouse, setIsMouse] = useState(true)
    const [isVoted, setIsVoted] = useState(false)
    const [isSignIn, setSignIn] = useState(false)
    const [grade, setGrade] = useState(1)

    const handlerVoted = (num: number) => {
        if (isAuth) {
            setIsVoted(true);
            setGrade(num);
            handleClick(num)
        }
        else {
            setSignIn(true)
        }

    }
    const arr: number[] = []
    for (let a = 1; a <= numberOfStars; a++) {
        arr.unshift(a)
    }
    return (
        <div className={s.rate}>
            <div className={s.staticRate} >
                <div className={s.title}>
                     <span>&#9733;</span> <span>{rate}</span>
                </div>
                <div>
                    <div className={s.response}>{isSignIn && <Link to='/login'>please login</Link>}</div>
                <div className={s.response}>{isVoted && `your rating is ${grade}`} </div>
                </div>
                
            </div>
            <div className={s.stars}>
                {arr.map(el => {
                return <span onClick={() => handlerVoted(el)}
                    onMouseMove={() => setIsMouse(false)}
                    onMouseOut={() => setIsMouse(true)}
                    key={el}
                    className={(el === Math.round(rate) && isMouse) ? s.cheked : ''} style={{ position: 'absolute', left: `${1.5 * el}rem` }}>&#9733;</span>
            })}
            </div>
            

        </div>
    )
}

export default Rate