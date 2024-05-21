import React, { useEffect } from 'react'
import imagee1 from '../../image/sliderimage2.jpg'
import imagee2 from '../../image/sliderimage3.jpg'
import imagee3 from '../../image/slider-5.jpg'
import imagee4 from '../../image/sliderimage6.jpg'
import imagee5 from '../../image/sliderimage.webp'
import imagee6 from '../../image/ocen.jpg'
import imagee7 from '../../image/why-choose.jpg'
import imagee8 from '../../image/download.jpg'
import certificate from '../../image/wca-cert.jpg'
import certificate1 from '../../image/iso-cert.jpg'
import certificate2 from '../../image/mto-cert.jpg'
import certificate3 from '../../image/roc-cert.jpg'
import "./Home.css"
import { Link, useFetcher } from 'react-router-dom'
import ServiceArea from '../Servicearea/ServiceArea'
import ServiceHome from '../ServiceHome/ServiceHome'
const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
  return (
    <>

      <section className='mainsection'>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
            {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button> */}
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active banareimagediv">
              <img src={imagee1} class="d-block w-100" alt="..." />
              <div className='banaretext'>GET IN TOUCH! WE'RE ALWAYS READY TO ANSWER</div>
            </div>
            <div class="carousel-item banareimagediv">
              <img src={imagee2} class="d-block w-100" alt="..." />
              <div className='banaretext'>GET IN TOUCH! WE'RE ALWAYS READY TO ANSWER</div>
            </div>
            {/* <div class="carousel-item banareimagediv">
              <img src={imagee3} class="d-block w-100" alt="..." />
              <div className='banaretext'>GET IN TOUCH! WE'RE ALWAYS READY TO ANSWER</div>
            </div> */}
            {/* <div class="carousel-item banareimagediv">
              <img src={imagee4} class="d-block w-100" alt="..." />
              <div className='banaretext'>GET IN TOUCH! WE'RE ALWAYS READY TO ANSWER</div>
            </div> */}
            <div class="carousel-item banareimagediv">
              <img src={imagee5} class="d-block w-100" alt="..." />
              <div className='banaretext'>GET IN TOUCH! WE'RE ALWAYS READY TO ANSWER</div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section>
        <div className="container-fluid maindivhomeabout">
          <div className="row">
            <div className="homeaboutdiv">
              <div className="homeabouthead">
                <p>About <span style={{ color: "#003189" }}>Our Company</span></p>
              </div>
            </div>
            <div className="homeaboutmain">
              {/* <div className='homeaboutfirst'> */}
              <div className="homeabouttextdiv">
                <p>Trans Continental Freight Service (India) Private Limited is a dynamic organization specializing in comprehensive international freight forwarding. Our expertise spans LCL cargo consolidation, both import and export, custom house broking, insurance services, efficient packing and moving solutions, precise port handling, project logistics, inventory management, and a spectrum of other logistical services. We pride ourselves on offering tailored solutions that prioritize time, cost-effectiveness, and service excellence for our valued clients. With a dedicated team of seasoned professionals boasting over 7 years of experience in the logistics industry, we ensure unparalleled expertise and reliability in every aspect of our operations.</p>
                <button className='homeaboutbutton'><Link to='/about' style={{ textDecoration: "none", color: "white" }}>Read More</Link></button>
              </div>
              {/* <div> */}
              <div className='homeaboutimage'>
                <Link to='/about'> <img src={imagee6} alt="" /></Link>
              </div>
              {/* <div className="homeaboutimage1">
                  <img src={imagee6} alt="" className='aboutimage' />
                  <div className='imagetextdiv'>
                    <p className='imgtext'>Our Mission</p>
                    <button className='buttonabout'><Link to='/about' style={{ textDecoration: "none", color: "black" }}>Read More</Link></button>
                  </div>
                </div>
                <div className="homeaboutimage2">
                  <img src={imagee7} alt="" className='aboutimage' />
                  <div className='imagetextdiv'>
                    <p className='imgtext'>Why Choose Us</p>
                    <button className='buttonabout'><Link to='/about' style={{ textDecoration: "none", color: "black" }}>Read More</Link></button>
                  </div>
                </div>
                <div className="homeaboutimage3">
                  <img src={imagee8} alt="" className='aboutimage' />
                  <div className='imagetextdiv'>
                    <p className='imgtext'>Company Presentation</p>
                    <button className='buttonabout'><Link to='/about' style={{ textDecoration: "none", color: "black" }}>Read More</Link></button>
                  </div>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>





      <ServiceHome />


      <ServiceArea />



      {/* <section>
        <div className="oursertificates">
          <div className="ourcerficatediv">
            <img src={certificate} alt="" className='ourcertifateimage' />
            <p className='certificatename'>WCA CERTIFIED</p>
          </div>
          <div className="ourcerficatediv">
            <img src={certificate1} alt="" className='ourcertifateimage' />
            <p className='certificatename'>ISO CERTIFIED</p>
          </div>
          <div className="ourcerficatediv">
            <img src={certificate2} alt="" className='ourcertifateimage' />
            <p className='certificatename'>MTO CERTIFIED</p>
          </div>
          <div className="ourcerficatediv">
            <img src={certificate3} alt="" className='ourcertifateimage' />
            <p className='certificatename'>ROC CERTIFIED</p>
          </div>
        </div>
      </section> */}

      <section>
        <div className="wearebesthome">
          <p className='besthomeheading'>We are <span style={{ color: "#003189" }}>Best At</span></p>
          <div className="besthomefirst">
            <div className="bestchuldfirst">
              <div className="childchildfirst">
                <i class="ri-globe-line"></i>
              </div>
              <div className="childchildsecond">
                <p className='bestchiledheading'>Goods Tracking Support</p>
                <p className='bestchildtext'>Tracking represents an additional layer of security to ensure goods reach their ... and support of Cargo and Shipment Tracking System.</p>
              </div>
            </div>
            <div className="bestchuldfirst">
              <div className="childchildfirst">
                <i class="ri-timer-line"></i>
              </div>
              <div className="childchildsecond">
                <p className='bestchiledheading'>On Time Delevery</p>
                <p className='bestchildtext'>On-time delivery is vital, enhancing customer satisfaction, operational efficiency, and reputation by reliably fulfilling orders promptly and fostering repeat business.</p>
              </div>
            </div>
            <div className="bestchuldfirst">
              <div className="childchildfirst">
                <i class="ri-truck-line"></i>
              </div>
              <div className="childchildsecond">
                <p className='bestchiledheading'>Reaching Large Destinations</p>
                <p className='bestchildtext'>Reaching large destinations involves meticulous planning, resource allocation, and coordination. Efficient logistics, robust infrastructure, and strategic route optimization are crucial for timely and successful deliveries.</p>
              </div>
            </div>
          </div>
          {/* <div className="besthomesecond">
            <p className='besthomeheading' style={{ color: "white" }}>Quick Enquiry</p>
            <div className="bestchildsecond">
              <div className="childsecond">
                <input type="text" name="" id="" placeholder='First Name' />
                <input type="text" name="" id="" placeholder='Last Name' />
                <input type="text" name="" id="" placeholder='Telephone Number' />
                <select name="" id="">
                  <option value="Seletct Type">Select Type</option>
                </select>
              </div>
              <div className="chilchildsecond">
                <input type="text" name="" id="" placeholder='Your Email Address' />
                <textarea name="" id="" placeholder='write message here'></textarea>
                <button className='buttonbesthome'>Submit</button>
              </div>
            </div>
          </div> */}
        </div>
      </section>

    </>
  )
}

export default Home