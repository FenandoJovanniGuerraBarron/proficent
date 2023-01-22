import React from 'react'
import House from './icons/House'
import Twitter from './icons/Twitter'
import Facebook from './icons/Facebook'
import Instagram from './icons/Instagram'
import './styles/footer.css'

const Footer = () => {
    return (
        <footer className='footer' >
            <div className='footer__social' >
                <div className='footer__house' ><House /></div>
                <p className='footer__text' >It is a long esatablished fact that a reader will be distracted by the readable content of a page whenters.</p>
                <ul className='footer__list-icons' >
                    <li className='icons__li' ><Twitter/></li>
                    <li className='icons__li' ><Facebook/></li>
                    <li className='icons__li' ><Instagram/></li>
                </ul>
            </div>
            <ul className='footer__about' >
                <h3 className='about__title' >About Us</h3>
                <li className='about__li' >About</li>
                <li className='about__li' >Privacy & Policy</li>
                <li className='about__li' >Terms & Conditions</li>
                <li className='about__li' >Faq</li>
            </ul>
            <ul>
                <h3 className='about__title' >Navigate</h3>
                <li className='about__li' >How We Work</li>
                <li className='about__li' >Services</li>
                <li className='about__li' >Faq</li>
                <li className='about__li' >Contact</li>
                <li className='about__li' >Free Quote</li>
            </ul>
            <ul className='footer__contact' >
                <h3 className='about__title' >Contact Us</h3>
                <li className='about__contact' >Ricardo Margain 444</li>
                <li className='about__contact' >Call: +52 81 1234 5678</li>
                <li className='about__contact' >Email: info@challenge.com</li>
            </ul>
        </footer>
    )
}

export default Footer