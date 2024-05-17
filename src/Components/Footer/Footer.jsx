import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import imagee1 from '../../image/logo.jpg'
const Footer = () => {
  return (
    <>

      <section className='footerset'>
        <div className="footer">
          <div className="footermain">
            <div className="first">
              {/* <p className='footerheading'>SANJIVAN ANUSHANDHAN</p> */}
              <img src={imagee1} alt="" style={{ height: 50 }} />
              <p className='fotertext'>Trans Continental Freight Service (India) Private Limited is a leading organization specializing in a wide range of logistical solutions.</p>
            </div>
            <div className="second">
              <p className='footerheading'>Quick Links</p>
              <div className="linksdiv">
                <div>
                  <p className='fotertextlink'><Link to='/'>Home</Link></p>
                  <p className='fotertextlink'><Link to='/about'>About Us</Link></p>
                  <p className='fotertextlink'><Link to='/service'>Services</Link></p>
                  <p className='fotertextlink'><Link to='/contact'>Contact Us</Link></p>
                </div>
                <div>
                  <p className='fotertextlink'><Link to='/achivment'>Achievements</Link></p>
                  <p className='fotertextlink'><Link to='/imp&exp'>Import Process</Link></p>
                  <p className='fotertextlink'><Link to='/imp&exp'>Export Process</Link></p>
                </div>
              </div>


            </div>
            {/* <div className="third">
                            <p className='footerheading'>LEGAL INFORMATION</p>
                            <p className='fotertext'>Privacy Policy</p>
                            <p className='fotertext'>Refund Policy</p>
                            <p className='fotertext'>Terms & conditions</p>
                            <p className='fotertext'>Shipping & Delivery Policy</p>
                        </div> */}
            <div className="four">
              <p className='footerheading'>FOLLOW US</p>
              <p className='fotertext'>Follow and discover the time-tested secrets of TCI with us!</p>
              <div className="iconset">
                <Link style={{ textDecoration: "none", color: "#3b5998" }}> <i class="ri-facebook-circle-fill"></i></Link>
                <Link style={{ textDecoration: "none", color: "#ee2a7b" }}> <i class="ri-instagram-line"></i></Link>
                <Link style={{ textDecoration: "none", color: "#FF0000" }}> <i class="ri-youtube-line"></i></Link>
                <Link style={{ textDecoration: "none", color: "#0A66C2" }}><i class="ri-linkedin-box-fill"></i></Link>
                <Link style={{ textDecoration: "none", color: " #1DA1F2" }}><i class="ri-twitter-line"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer