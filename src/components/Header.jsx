import React from 'react'
import House from './icons/House'
import './styles/header.css'

const Header = () => {
    return (
        <header className='header' >
            <div>
                <House />
            </div>
            <ul className='header__list' >
                <li>How We Work</li>
                <li>Services</li>
                <li>Free Quote</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}

export default Header