import React from 'react'
import './ServiceHome.css'
import service6 from '../../image/service-2.jpg'
import service2 from '../../image/ocean.jpg'
import service5 from '../../image/service-4.jpg'
import service4 from '../../image/service-5.jpg'
import service3 from '../../image/conso.jpg'
import service1 from '../../image/air.webp'
import service7 from '../../image/service-8.jpg'
import service8 from '../../image/doortodoor.jpg'

const ServiceHome = () => {

  return (
    <>
     <section>
        <div className="maindivhomeabout">
          <div className="homeaboutdiv">
            <div className="homeabouthead">
              <p>Deals in Sea & Air  <span style={{ color: "#003189" }}>Cargo Services</span></p>
            </div>
          </div>
          <div className="ourservicemain">
            <div className="ourservicefirst">
              <div className="ourchildfirst">
                <img src={service1} alt="" className='ourserviceimage' />
              </div>
              <div className="ourchildservice">
                <p className='ourserviceheading'>Air Consolidation service (Imports & Exports)</p>
                {/* <p className='ourservicetext'>GF Solutions is a talented Company providing Customized End-End services</p> */}
              </div>
            </div>
            <div className="ourservicefirst">
              <div className="ourchildfirst">
                <img src={service2} alt="" className='ourserviceimage' />
              </div>
              <div className="ourchildservice">
                <p className='ourserviceheading'>Ocean LCL/FCL service (Imports & Exports)</p>
                {/* <p className='ourservicetext'>GF Solutions is a talented Company providing Customized End-End services</p> */}
              </div>
            </div>
            <div className="ourservicefirst">
              <div className="ourchildfirst">
                <img src={service3} alt="" className='ourserviceimage' />
              </div>
              <div className="ourchildservice">
                <p className='ourserviceheading'>Consolidation of Break bulk cargo</p>
                {/* <p className='ourservicetext'>GF Solutions is a talented Company providing Customized End-End services</p> */}
              </div>
            </div>
            <div className="ourservicefirst">
              <div className="ourchildfirst">
                <img src={service7} alt="" className='ourserviceimage' />
              </div>
              <div className="ourchildservice">
                <p className='ourserviceheading'>Handling of Project Cargo & DG/HAZ Cargo</p>
                {/* <p className='ourservicetext'>GF Solutions is a talented Company providing Customized End-End services</p> */}
              </div>
            </div>
          </div>
          <div className="homeaboutdiv mt-5">
            <div className="homeabouthead">
              <p>Deals in Warehousing &   <span style={{ color: "#003189" }}>Logistics Services</span></p>
            </div>
          </div>
          <div className="ourservicemain">
            <div className="ourservicefirst">
              <div className="ourchildfirst">
                <img src={service5} alt="" className='ourserviceimage' />
              </div>
              <div className="ourchildservice">
                <p className='ourserviceheading'>Warehousing & Distribution Services</p>
                {/* <p className='ourservicetext'>GF Solutions is a talented Company providing Customized End-End services</p> */}
              </div>
            </div>

            <div className="ourservicefirst">
              <div className="ourchildfirst">
                <img src={service6} alt="" className='ourserviceimage' />
              </div>
              <div className="ourchildservice">
                <p className='ourserviceheading'>Logistics Service</p>
                {/* <p className='ourservicetext'>GF Solutions is a talented Company providing Customized End-End services</p> */}
              </div>
            </div>
            <div className="ourservicefirst">
              <div className="ourchildfirst">
                <img src={service1} alt="" className='ourserviceimage' />
              </div>
              <div className="ourchildservice">
                <p className='ourserviceheading'>Carnets, Trade show Moving & Handling Trucking Service</p>
                {/* <p className='ourservicetext'>GF Solutions is a talented Company providing Customized End-End services</p> */}
              </div>
            </div>
            <div className="ourservicefirst">
              <div className="ourchildfirst">
                <img src={service8} alt="" className='ourserviceimage' />
              </div>
              <div className="ourchildservice">
                <p className='ourserviceheading'>Door to Door Services</p>
                {/* <p className='ourservicetext'>GF Solutions is a talented Company providing Customized End-End services</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default ServiceHome