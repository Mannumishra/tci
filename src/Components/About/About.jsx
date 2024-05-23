import React, { useEffect } from 'react'
import about from '../../image/slider-1.jpg'
import "./About.css"
const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
    <>
      <section>
        <div className="aboutmain">
          <div className="aboutbg">
            <img src={about} alt="" className='aboutbgimage' />
          </div>
          <div className='aboutsecond'>
            <div className="homeabouthead">
              <p>About <span style={{ color: "#003189" }}>Our Company</span></p>
            </div>
            <div>
              <p className='abouttext'>Trans Continental Freight Service (India) Private Limited is a leading organization specializing in a wide range of logistical solutions. From International Freight Forwarding to LCL cargo consolidation, custom house broking, insurance services, packing and moving, port handling, project movement, and inventory management, we offer comprehensive services tailored to meet our clients' needs. With a dedicated team of dynamic professionals boasting over 19 years of experience in the logistics industry, we prioritize time, cost, and service excellence to deliver customized solutions.</p>
              <p className='abouttext'>
                The TCI headquarters, situated in South Korea, ensures efficient handling and clearance of import and export cargo from ICDs, IGI Airport New Delhi, and nationwide locations via our extensive network. We specialize in break bulk chartering of vessels at major Indian ports, leveraging our established agent network in global cities and major ports, giving us a competitive edge.
              </p>
              <p className='abouttext'>With our extensive global network of agents, each adept in handling freight shipments within their local regions, we ensure compliance with local customs and regulations. Our reliable agents guarantee the highest level of service, enabling us to offer diverse solutions to our clients. Prior to finalizing deals, we conduct thorough planning sessions to ensure the safe and secure transit of consignments. This meticulous approach consistently yields 100% hassle-free services for our customers, contributing to our success.</p>

              <p className='abouttext'>At TCI, we specialize in handling bulk Drugs/Chemicals, Seafood, and other highly sensitive and perishable export and import consignments, ensuring the utmost satisfaction of the consignee. Our team is well-versed in the special handling procedures required for perishables and dangerous goods, guaranteeing their safe transport. Our fundamental objective is to establish GFS as an international firm with global capabilities in related fields, delivering world-class service while maintaining the highest standards of quality, professionalism, and integrity.</p>

              <p className='abouttext'>Trans Continental Freight Service (India) Private Limited is a flourishing organization involved in International Freight Forwarding, LCL cargo consolidation for Imports and Exports, custom house broking, insurance services, packing and moving services, port handling, project movement, inventory management, and other logistical solutions. We offer personalized deals to our clients, prioritizing time, cost, and service excellence. With a team of dynamic professionals boasting over 19 years of experience in the logistics industry, we ensure top-notch solutions for all your logistical requirements.</p>
              <p className='abouttext'>Trans Continental Freight Service (India) Private Limited is a thriving organization specializing in International Freight Forwarding, LCL cargo consolidation for Imports and Exports, custom house broking, insurance services, packing and moving services, port handling, project movement, inventory management, and other logistical solutions. We provide customized deals to our clients, prioritizing time, cost, and service excellence. Our team comprises dynamic professionals with a strong background in the logistics industry, boasting over 19 years of experience.</p>
              <p className='abouttext'>
                With our extensive global network of agents, all adept in handling freight shipments within their local areas, we ensure compliance with local customs and regulations. These reliable agents consistently deliver the highest level of service, enabling us to offer versatile solutions to our clients. Prior to finalizing deals, we conduct meticulous planning sessions to ensure the safe and secure transit of consignments. This meticulous approach guarantees 100% hassle-free services for our customers nearly every time.</p>

            </div>
          </div>
        </div>
      </section>
      <section className='' style={{backgroundColor:"#F1F1F1"}}>
                <div className='achivmentdiv'>
                    <p className='achivmentheading'>Our Achievements</p>
                </div>
                <div class="timeline">
                    <div class="containertimeline left_container">
                        <div className='namemannu' style={{color:"white"}}>Established</div>
                        {/* <img src="/images/10.jpg.jpg" alt="" /> */}
                        <div class="text-box">
                            <p className='timelinetext'>1987 Established Trans Continental Inc. (TCI)</p>
                            {/* <small>2018-2019</small> */}
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur odit repellendus et commodi
                                repellat nam inventore autem, laboriosam debitis.</p> */}
                            <span class="left_container_arrow"></span>
                        </div>
                    </div>
                    <div class="containertimeline right_container">
                        <div className='namemannu' style={{color:"white"}}>Acquired license Ocean </div>
                        {/* <img src="/images/arrow down.png" alt="" /> */}
                        <div class="text-box">
                            <p className='timelinetext'>1989 Acquired license of handling Ocean Freight.</p>
                            {/* <small>2018-2019</small> */}
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur odit repellendus et commodi
                                repellat nam inventore autem, laboriosam debitis.</p> */}
                            <span class="right_container_arrow"></span>
                        </div>
                    </div>
                    <div class="containertimeline left_container">
                        <div className='namemannu' style={{color:"white"}}>Acquired license Air</div>
                        {/* <img src="/images/12.jpg.jpg" alt="" /> */}
                        <div class="text-box">
                            <p className='timelinetext'>1990 Acquired license of handling Air Freight.(TCI)</p>
                            {/* <small>2018-2019</small> */}
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur odit repellendus et commodi
                                repellat nam inventore autem, laboriosam debitis.</p> */}
                            <span class="left_container_arrow"></span>
                        </div>
                    </div>
                    <div class="containertimeline right_container">
                        <div className='namemannu' style={{color:"white"}}> International Trade</div>
                        {/* <img src="/images/13.jpg.jpg" alt="" /> */}
                        <div class="text-box">
                            <p className='timelinetext'>1997 Acquired International Trade Management License.</p>
                            {/* <small>2018-2019</small> */}
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur odit repellendus et commodi
                                repellat nam inventore autem, laboriosam debitis.</p> */}
                            <span class="right_container_arrow"></span>
                        </div>
                    </div>
                    <div class="containertimeline left_container">
                        <div className='namemannu' style={{color:"white"}}> IATA agency.</div>
                        {/* <img src="/images/14.jpg.jpg" alt="" /> */}
                        <div class="text-box">
                            <p className='timelinetext'>1997 Acquired IATA agency.</p>
                            {/* <small>2018-2019</small> */}
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur odit repellendus et commodi
                                repellat nam inventore autem, laboriosam debitis.</p> */}
                            <span class="left_container_arrow"></span>
                        </div>
                    </div>
                    <div class="containertimeline right_container">
                        <div className='namemannu' style={{color:"white"}}>KIFFA Member</div>
                        {/* <img src="/images/17.jpg.jpg" alt="" /> */}
                        <div class="text-box">
                            <p className='timelinetext'>1997 Member KIFFA (Korea International Freight Forwarders Association).</p>
                            {/* <small>2018-2019</small> */}
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur odit repellendus et commodi
                                repellat nam inventore autem, laboriosam debitis.</p> */}
                            <span class="right_container_arrow"></span>

                        </div>
                    </div>
                    <div class="containertimeline left_container">
                        <div className='namemannu' style={{color:"white"}}>Established TCI (Shanghai) </div>
                        {/* <img src="/images/18.jpg.jpg" alt="" /> */}
                        <div class="text-box">
                            <p className='timelinetext'>2003 Established Shanghai Representative office.</p>
                            {/* <small>2018-2019</small> */}
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur odit repellendus et commodi
                                repellat nam inventore autem, laboriosam debitis.</p> */}
                            <span class="left_container_arrow"></span>
                        </div>
                    </div>
                    <div class="containertimeline right_container">
                        <div className='namemannu' style={{color:"white"}}>Established TCI (India)</div>
                        {/* <img src="/images/19.jpg.jpg" alt="" /> */}
                        <div class="text-box">
                            <p className='timelinetext'>2005 Established Trans Continental Freight Service (India) PVT. LTD.</p>
                            {/* <small>2018-2019</small> */}
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur odit repellendus et commodi
                                repellat nam inventore autem, laboriosam debitis.</p> */}
                            <span class="right_container_arrow"></span>
                        </div>
                    </div>
                    <div class="containertimeline left_container">
                        <div className='namemannu' style={{color:"white"}}> Established TCI (South Africa) </div>
                        {/* <img src="/images/2.jpg.jpg" alt="" /> */}
                        <div class="text-box">
                            <p className='timelinetext'>2010 APR. TCI Logistics South Africa PTY.,LTD – Acquired License.</p>
                            {/* <small>2018-2019</small> */}
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur odit repellendus et commodi
                                repellat nam inventore autem, laboriosam debitis.</p> */}
                            <span class="left_container_arrow"></span>
                        </div>
                    </div>
                    <div class="containertimeline right_container">
                        <div className='namemannu' style={{color:"white"}}>Company Name Change</div>
                        {/* <img src="/images/1.3 pink.jpg" alt="" /> */}
                        <div class="text-box">
                            <p className='timelinetext'>2016 NOV. Changed the name of the parent company – Trans World Express Co., Ltd.</p>
                            {/* <small>2018-2019</small> */}
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur odit repellendus et commodi
                                repellat nam inventore autem, laboriosam debitis.</p> */}
                            <span class="right_container_arrow"></span>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default About