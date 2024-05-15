import React, { useEffect } from 'react'
import './Contact.css'
const Contact = () => {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  })
  return (
    <>
      <section>
        <div className="contactmain">
          <div className="contactbg">
            <div className="contact-content">
              <p>GET IN TOUCH! WE'RE ALWAYS READY TO ANSWER</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="servicescontectsection">
          <div className="homeabouthead">
            <p>Head <span style={{ color: "#003189" }}>Office  in Korea</span></p>
          </div>
          <div className="conatctinfo">
            <div className="location">
              <div>
                <p className='locationheading'> Head Office Location</p>
              </div>
              <div className='locationaddress'>
                <p>13-B26 & 205, Acrotower Square 10, Gukhoe-daero 54-gil,
                  Yeongdeungpo-gu, Seoul, Republic of Korea
                </p>
              </div>
            </div>
            <div className="location">
              <div>
                <p className='locationheading'>Company Name</p>
              </div>
              <div className='locationaddress'>
                <p>TRANS WORLD EXPRESS CO., LTD.</p>
              </div>
            </div>
            <div className="location">
              <div>
                <p className='locationheading'>Qr Code</p>
              </div>
              <div>

              </div>
            </div>
          </div>
          <div className="homeabouthead mt-5">
            <p>Affiliated Companies<span style={{ color: "#003189" }}>/Offices in India </span></p>
          </div>
          <div className="conatctinfo">
            <div className="location">
              <div>
                <p className='locationheading'>Our Location Delhi</p>
              </div>
              <div className='locationaddress'>
                <p>A-4, 1st Floor, Main Vasant Kunj Road
                  (Opposite Jagannath Complex)
                  Mahipalpur Chowk, New Delhi- 110037</p>
              </div>
            </div>
            <div className="location">
              <div>
                <p className='locationheading'>Company Name</p>
              </div>
              <div className='locationaddress'>
              <p>TRANS CONTINENTAL FREIGHT SERVICE (INDIA) PVT. LTD</p>
              </div>
            </div>
            <div className="location">
              <div>
                <p className='locationheading'>Qr Code</p>
              </div>
              <div>

              </div>
            </div>
          </div>
          <div className="conatctinfo mt-2">
            <div className="location">
              <div>
                <p className='locationheading'>Our Location Chennai</p>
              </div>
              <div className='locationaddress'>
                <p>26 (Old No. 105), 2nd Floor, Armenian Street, Chennai – 600 001</p>
              </div>
            </div>
            <div className="location">
              <div>
                <p className='locationheading'>Company Name</p>
              </div>
              <div className='locationaddress'>
              <p>TRANS CONTINENTAL FREIGHT SERVICE INDIA PVT. LTD</p>
              </div>
            </div>
            <div className="location">
              <div>
                <p className='locationheading'>Qr Code</p>
              </div>
              <div>
              </div>
            </div>
          </div>
          <div className="homeabouthead mt-5">
            <p>Affiliated Companies<span style={{ color: "#003189" }}>Office in South Africa </span></p>
          </div>
          <div className="conatctinfo">
            <div className="location">
              <div>
                <p className='locationheading'>Our Location</p>
              </div>
              <div className='locationaddress'>
                <p>358 Pretorius Street 0001, Pretoria, R.S.A</p>
              </div>
            </div>
            <div className="location">
              <div>
                <p className='locationheading'>Company Name</p>
              </div>
              <div className='locationaddress'>
              <p>TCI LOGISTICS SOUTH AFRICA PTY., LTD.</p>
              </div>
            </div>
            <div className="location">
              <div>
                <p className='locationheading'>Qr Code</p>
              </div>
              <div>

              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
    </>
  )
}

export default Contact