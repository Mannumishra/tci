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
              <p className='footertext'>
                13-B26 & 205, Acrotower Square 10, Gukhoe-daero 54-gil,
                Yeongdeungpo-gu, Seoul, Republic of Korea
              </p>
            </div>
            <div className="footerboxfirst">
              <i class="ri-mail-unread-line"></i>
              <p>Email</p>
              <p className='footertext'>dummy@gmail.com</p>
            </div>
            <div className="footerboxfirst">
              <i class="ri-customer-service-line"></i>
              <p>Location</p>
              <p className='footertext'>
                13-B26 & 205, Acrotower Square 10, Gukhoe-daero 54-gil,
                Yeongdeungpo-gu, Seoul, Republic of Korea
              </p>
            </div>
            <div className="footerboxfirst">
              <i class="ri-user-follow-fill"></i>
              <p>Location</p>
              <p className='footertext'>
                13-B26 & 205, Acrotower Square 10, Gukhoe-daero 54-gil,
                Yeongdeungpo-gu, Seoul, Republic of Korea
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer