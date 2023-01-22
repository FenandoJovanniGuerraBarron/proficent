import React from 'react'
import './styles/button.css'

const Button = ({ state, set }) => {

    const handlePlus=()=>{
        set(state+1)
    }

    const handleMinus=()=>{
        if (state == 0) {
            
        }else{
            set(state-1)
        }
    }

    return (
        <div className='list__card' >
            <button  onClick={handleMinus} className='card__button' >-</button>
            <span className='card__span' >{state}</span>
            <button  onClick={handlePlus} className='card__button' >+</button>
        </div>
    )
}

export default Button