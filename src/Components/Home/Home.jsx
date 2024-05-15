import React from 'react'
import imagee1 from '../../image/slider-1.jpg'
import imagee2 from '../../image/slider-2.jpg'
import imagee3 from '../../image/slider-3.jpg'
import imagee4 from '../../image/slider-4.jpg'
import imagee5 from '../../image/slider-5.jpg'
import imagee6 from '../../image/mission.jpg'
import imagee7 from '../../image/why-choose.jpg'
import imagee8 from '../../image/download.jpg'
import certificate from '../../image/wca-cert.jpg'
import certificate1 from '../../image/iso-cert.jpg'
import certificate2 from '../../image/mto-cert.jpg'
import certificate3 from '../../image/roc-cert.jpg'
import "./Home.css"
import { Link } from 'react-router-dom'
import ServiceArea from '../Servicearea/ServiceArea'
import ServiceHome from '../ServiceHome/ServiceHome'
const Home = () => {
  return (
    <>

      <section className='mainsection'>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={imagee1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={imagee2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={imagee3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={imagee4} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={imagee5} class="d-block w-100" alt="..." />
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
                <p>Galliard Freight Solutions Pvt.Ltd (GFS) is a glooming organization dealing in International Freight forwarding, LCL cargo consolidation including IMPORT and EXPORT, custom house broking, insurance services, packing and moving services, port handling, project movement , inventory management and other logistical solutions. We provide customized deals to our clients keeping in the frame the time, cost and services at the acme of priorities. We owe a team of dynamic professionals with a strong background in the logistics industry having experience of more than 07 years.</p>
                <button className='homeaboutbutton'><Link to='/about' style={{ textDecoration: "none", color: "white" }}>Read More</Link></button>
              </div>
              {/* <div> */}
                <div className="homeaboutimage1">
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
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wearebesthome">
          <div className="besthomefirst">
            <p className='besthomeheading'>We are <span style={{ color: "#003189" }}>Best At</span></p>
            <div className="bestchuldfirst">
              <div className="childchildfirst">
                <i class="ri-globe-line"></i>
              </div>
              <div className="childchildsecond">
                <p className='bestchiledheading'>Goods Tracking Support</p>
                <p className='bestchildtext'>Tracking represents an additional layer of security to ensure goods reach their ... and support of Cargo and Shipment Tracking System</p>
              </div>
            </div>
            <div className="bestchuldfirst">
              <div className="childchildfirst">
                <i class="ri-gas-station-line"></i>
              </div>
              <div className="childchildsecond">
                <p className='bestchiledheading'>Goods Tracking Support</p>
                <p className='bestchildtext'>Tracking represents an additional layer of security to ensure goods reach their ... and support of Cargo and Shipment Tracking System</p>
              </div>
            </div>
            <div className="bestchuldfirst">
              <div className="childchildfirst">
                <i class="ri-truck-line"></i>
              </div>
              <div className="childchildsecond">
                <p className='bestchiledheading'>Goods Tracking Support</p>
                <p className='bestchildtext'>Tracking represents an additional layer of security to ensure goods reach their ... and support of Cargo and Shipment Tracking System</p>
              </div>
            </div>
          </div>
          <div className="besthomesecond">
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



    </>
  )
}

export default Home