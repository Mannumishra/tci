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
              <p className='fotertext'>Trans Continental Freight Service (India) Private Limited is a dynamic organization specializing in comprehensive international freight forwarding. Our expertise spans LCL cargo consolidation, both import and export, custom house broking, insurance services, efficient packing and moving solutions, precise port handling, project logistics, inventory management, and a spectrum of other logistical services.</p>
            </div>
            <div className="second">
              <p className='footerheading'>QUICK LINKS</p>
              <div className="linksdiv">
                <div>
                  <p className='fotertextlink'><Link to='/'>Home</Link></p>
                  <p className='fotertextlink'><Link to='/about'>About Us</Link></p>
                  
                  <p className='fotertextlink'><Link to='/contact'>Contact Us</Link></p>
                {/* </div>
                <div> */}
                  {/* <p className='fotertextlink'><Link to='/achivment'>Achievements</Link></p> */}
                  <p className='fotertextlink'><Link to='/imp&exp'>Import Process</Link></p>
                  <p className='fotertextlink'><Link to='/imp&exp'>Export Process</Link></p>
                  <p className='fotertextlink'><Link to='/service'>Services</Link></p>
                </div>
              </div>


            </div>
            <div className="third">
              <p className='footerheading'>CONTACT US</p>
              <div className="">
                <p style={{fontSize:15}}>Call Us : <span><a href="tel:+9151140764076" style={{color:"white"}}>+91 01140764076 </a></span></p>
                <p style={{fontSize:15}}>Call Us (Air Import) : <span><a href="tel:+919555686520"  style={{color:"white"}}>+91 9555686520 </a></span></p>
                <p style={{fontSize:15}}>Call Us (Sea Import) : <span><a href="tel:+919540603266"  style={{color:"white"}}>+91 9540603266 </a></span></p>
                <p style={{fontSize:15}}>Call Us (Air & Sea Export)  : <span><a href="tel:+919599297900"  style={{color:"white"}}>+91 9599297900 </a></span></p>
                <p style={{fontSize:15}}>Email : <span><a href="mailto:Pricing@tciindia.co.in,sanjiv@tciindia.co.in,rinku@tciindia.co.in,sales@tciindia.co.in,prakash@tciindia.co.in,export@tciindia.co.in"  style={{color:"white"}}>Pricing@tciindia.co.in , sanjiv@tciindia.co.in , rinku@tciindia.co.in , sales@tciindia.co.in , prakash@tciindia.co.in , export@tciindia.co.in</a></span></p>
              </div>
              {/* <p className='fotertext'>Privacy Policy</p>
              <p className='fotertext'>Refund Policy</p>
              <p className='fotertext'>Terms & conditions</p>
              <p className='fotertext'>Shipping & Delivery Policy</p> */}
            </div>
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