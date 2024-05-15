import React from 'react'
import "./Footer.css"
import imagee1 from '../../image/contact.jpg'
const Footer = () => {
  return (
    <>

      <footer>
        <div className="footer-container">
          <div className="footerheanding">
            Get In Touch
          </div>
          <div className="footerbox">
            <div className="footerboxfirst">
              <i class="ri-map-pin-line"></i>
              <p>Location</p>
              <p className='footertext'>Unit no. 561, 5th Floor,
                Vegas Mall, Block – B,
                Plot no.–6, Sector-14,
                Dwarka, New Delhi – 110078</p>
            </div>
            <div className="footerboxfirst">
              <i class="ri-mail-unread-line"></i>
              <p>Email</p>
              <p className='footertext'>upendra@gfsolutions.in</p>
            </div>
            <div className="footerboxfirst">
              <i class="ri-customer-service-line"></i>
              <p>Location</p>
              <p className='footertext'>Unit no. 561, 5th Floor,
                Vegas Mall, Block – B,
                Plot no.–6, Sector-14,
                Dwarka, New Delhi – 110078</p>
            </div>
            <div className="footerboxfirst">
              <i class="ri-user-follow-fill"></i>
              <p>Location</p>
              <p className='footertext'>Unit no. 561, 5th Floor,
                Vegas Mall, Block – B,
                Plot no.–6, Sector-14,
                Dwarka, New Delhi – 110078</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer