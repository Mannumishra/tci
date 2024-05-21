import React, { useEffect } from 'react'
import "./Service.css"
const Services = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
    <>
      <section>
        <div className="servicemain">
          <div className="servicebg">
            <div className="service-content">
              <p>WORLD WIDE FREIGHT FORWARDERS</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="servicescontectsection">
          <div className="homeabouthead">
            <p>Services and Solutions <span style={{ color: "#003189" }}>Built Around You </span></p>
          </div>
          <div>
            <p className='abouttext'>Trans Continental Freight Service (India) Private Limited is a talented company providing customized end-to-end services covering the entire range of the supply chain management spectrum. Organizing your business can be difficult enough without having to worry about a host of transportation problems. At Trans Continental Freight Service (India) Private Limited, we offer a variety of services to meet your every need.</p>
          </div>
        </div>
      </section>
      <section>
        <div className="serviceboxmain">
          <div className="servicebox">
            {/* <i class="ri-plane-line"></i> */}
            <p className='servicesheading'>Air Consolidation service (Imports & Exports)</p>
            <p className='servicwtext'>Our Air Consolidation Service for imports and exports combines multiple shipments into one, reducing costs and ensuring timely delivery. Benefit from cost savings, faster shipping, reliable handling, simplified customs clearance, and real-time tracking. Optimize your logistics with our efficient, secure, and flexible air consolidation solutions.</p>
            {/* <button className='servicebutton'>Read More</button> */}
          </div>
          <div className="servicebox">
            {/* <i class="ri-plane-line"></i> */}
            <p className='servicesheading'>Ocean LCL/FCL service (Imports & Exports)</p>
            <p className='servicwtext'>Our Ocean LCL/FCL Service for imports and exports offers flexible shipping solutions. Choose Less-than-Container Load (LCL) for cost-effective smaller shipments or Full Container Load (FCL) for larger consignments. Benefit from competitive rates, reliable transit times, and seamless customs clearance. Optimize your global logistics with our expert ocean freight services.</p>
            {/* <button className='servicebutton'>Read More</button> */}
          </div>
          <div className="servicebox">
            {/* <i class="ri-plane-line"></i> */}
            <p className='servicesheading'>Consolidation of Break bulk cargo</p>
            <p className='servicwtext'>Our Consolidation of Break Bulk Cargo service streamlines the transport of oversized or heavy items. By grouping break bulk cargo, we reduce shipping costs and enhance efficiency. Enjoy reliable handling, competitive rates, and seamless logistics for your non-containerized goods. Optimize your supply chain with our expert break bulk consolidation solutions. </p>
            {/* <button className='servicebutton'>Read More</button> */}
          </div>
          <div className="servicebox">
            {/* <i class="ri-plane-line"></i> */}
            <p className='servicesheading'>Handling of Project Cargo & DG/HAZ Cargo</p>
            <p className='servicwtext'>Our specialized service for handling Project Cargo and DG/HAZ (Dangerous/Hazardous) Cargo ensures safe and compliant transport of complex shipments. We provide expert logistics solutions, from oversized project cargo to hazardous materials, adhering to strict safety standards and regulations. Trust us for reliable, secure, and efficient project and hazardous cargo handling.</p>
            {/* <button className='servicebutton'>Read More</button> */}
          </div>
          <div className="servicebox">
            {/* <i class="ri-plane-line"></i> */}
            <p className='servicesheading'>Warehousing & Distribution Services</p>
            <p className='servicwtext'>Our Warehousing & Distribution Services offer secure storage and efficient distribution for your goods. Benefit from state-of-the-art facilities, inventory management, and timely delivery solutions. We ensure streamlined operations, cost-effective storage, and reliable distribution, tailored to meet your specific needs. Optimize your supply chain with our comprehensive warehousing and distribution services.</p>
            {/* <button className='servicebutton'>Read More</button> */}
          </div>
          <div className="servicebox">
            {/* <i class="ri-plane-line"></i> */}
            <p className='servicesheading'>Logistics Service</p>
            <p className='servicwtext'>Our Logistics Service provides comprehensive solutions for all your transportation and supply chain needs. From warehousing and distribution to freight forwarding and customs clearance, we ensure efficient, reliable, and cost-effective logistics management. Trust us to streamline your operations and deliver your goods safely and on time. </p>
            {/* <button className='servicebutton'>Read More</button> */}
          </div>
          <div className="servicebox">
            {/* <i class="ri-plane-line"></i> */}
            <p className='servicesheading'>Carnets, Trade show Moving & Handling Trucking Service</p>
            <p className='servicwtext'>Our Carnets, Trade Show Moving & Handling, and Trucking Service ensures smooth and efficient transport for your event and exhibition needs. We manage carnet documentation, coordinate trade show logistics, and provide reliable trucking solutions. Trust us for seamless, timely, and secure handling of your trade show materials. </p>
            {/* <button className='servicebutton'>Read More</button> */}
          </div>
          <div className="servicebox">
            {/* <i class="ri-plane-line"></i> */}
            <p className='servicesheading'>Door to Door Services</p>
            <p className='servicwtext'>Our Door-to-Door Services offer comprehensive logistics solutions from pickup to final delivery. We handle every step of the shipping process, ensuring your goods arrive safely and on time. Enjoy seamless, hassle-free transportation with our reliable and efficient door-to-door service. Trust us for all your logistics needs.</p>
            {/* <button className='servicebutton'>Read More</button> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services