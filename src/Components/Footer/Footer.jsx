import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I'm a passionate software engineering student from Srilanka, eager to learn and create with code </p>
                   </div>
                   <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt=""/>
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                   </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 | Designed & developed by Dulakshi. Passionate about learning, building, and growing in the world of software engineering.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer