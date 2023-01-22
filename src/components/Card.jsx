import React from 'react'
import './styles/card.css'

const Card = ({ title,link }) => {
    return (
        <div className='card' >
            <div>
                <img src={link} alt="" />
            </div>
            <h4 className='card__title' >{title}</h4>
        </div>
    )
}

export default Card