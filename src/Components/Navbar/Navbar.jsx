import React, { useState } from 'react'
import logo from '../../image/logo.jpg'
import koriya from '../../image/koriya.webp'
import india from '../../image/india.jpg'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [isMobileActive, setIsMobileActive] = useState(false)
  const ActiveMobile = () => {
    setIsMobileActive(!isMobileActive)
  }

  const DeActiveMobile = () => {
    setIsMobileActive(false)
  }
  return (
    <>
      <section>
        <div className='navbarfixed'>
          <div><i class="ri-smartphone-line remixicon" ></i>011 4076 4076</div>
          <div className='d-flex g-5'>
            <div><img src={india} alt="" style={{ height: 20 }} /> India</div>
            <div><img src={koriya} alt="" style={{ height: 20 }} /> Koriya</div>
          </div>
          <div><i class="ri-time-line remixicon"></i>  10:00 AM - 06:00 PM - Monday to Saturday</div>
         
        </div>
        <div className="navbarmain">
          <div className="navlogo">
            <Link to="/" onClick={DeActiveMobile}> <img src={logo} alt="" className='logoimage' /></Link>
          </div>
          <div className={`navmenu ${isMobileActive ? "mobile-responsive" : ""}`}>
            <ul className='navbarunlist'>
              <li className='navlinks' ><Link to="/" onClick={DeActiveMobile} className='navlink'>Home</Link></li>
              <li className='navlinks'><Link to="/about" onClick={DeActiveMobile} className='navlink'>About Us</Link></li>
              <li className='navlinks'><Link to="/service" onClick={DeActiveMobile} className='navlink'>Services</Link></li>
              <li className='navlinks'> <Link to="/achivment" onClick={DeActiveMobile} className='navlink'>Achievements</Link></li>
              <li className='navlinks'> <Link to="/imp&exp" onClick={DeActiveMobile} className='navlink'>Import & Export Process</Link></li>
              <li className='navlinks'> <Link to="/contact" onClick={DeActiveMobile} className='navlink'>Contact Us</Link></li>
            </ul>
          </div>
          <div className="navicon">
            <i class="ri-menu-line icon" onClick={ActiveMobile}></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar