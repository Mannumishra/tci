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
              <img src={imagee1} alt="" style={{height:50}}/>
              <p className='fotertext'>Your one-stop shop for authentic Ayurvedic medicines and products, delivering the ancient wisdom of India's natural healing tradition to your doorstep.</p>
            </div>
            <div className="second">
              <p className='footerheading'>Quick Links</p>
              <div>
                <p className='fotertextlink'><Link to='/'>Home</Link></p>
                <p className='fotertextlink'><Link to='/about'>About Us</Link></p>
                </div>
                <div>
                <p className='fotertextlink'><Link to='/'>Services</Link></p>
                <p className='fotertextlink'><Link to='/'>Achievements</Link></p>
                </div>
                <div>
                <p className='fotertextlink'><Link to='/'>Import Process</Link></p>
                <p className='fotertextlink'><Link to='/'>Export Process</Link></p>
            </div>
                <p className='fotertextlink'><Link to='/'>Contact Us</Link></p>
              
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