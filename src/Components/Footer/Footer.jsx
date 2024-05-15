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
                A-4, 1st Floor, Main Vasant Kunj Road
                (Opposite Jagannath Complex)
                Mahipalpur Chowk, New Delhi- 110037
              </p>
            </div>
            <div className="footerboxfirst">
              <i class="ri-mail-unread-line"></i>
              <p>Email</p>
              <p className='footertext'>Pricing@tciindia.co.in
              sanjiv@tciindia.co.in
              rinku@tciindia.co.in
              sales@tciindia.co.in
              prakash@tciindia.co.in
              </p>
            </div>
            <div className="footerboxfirst">
              <i class="ri-customer-service-line"></i>
              <p>Contact</p>
              <p className='footertext'>
                +91 7906176068 <br /><br /><br /><br /><br />
              </p>
            </div>
            <div className="footerboxfirst">
              <i class="ri-user-follow-fill"></i>
              <p>Location</p>
              <p className='footertext'>
                A-4, 1st Floor, Main Vasant Kunj Roadc
                (Opposite Jagannath Complex)
                Mahipalpur Chowk, New Delhi- 110037
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer