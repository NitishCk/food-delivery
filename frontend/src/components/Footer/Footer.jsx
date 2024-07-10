import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
                <img className='logo' src={assets.logo} alt="" />
                <p>The food app website offers a user-friendly platform for ordering a wide variety of meals from local restaurants, ensuring quick and convenient delivery to your doorstep. With personalized recommendations and easy navigation, it enhances the overall dining experience for food lovers everywhere.</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch ?</h2>
                <ul>
                    <li>+1 (999)-999-9999</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Nitish ChittoorKrishnamurthy (food) &copy; 2024 All Rights Reserved</p>

    </div>
  )
}

export default Footer
