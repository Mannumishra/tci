import React from 'react'
import './Servicearea.css'
import aseamap from '../../image/asia.jpg'
import ausmap from '../../image/Australia.jpg'
import erop from '../../image/europe.gif'
import africa from '../../image/Africa.jpg'
import america from '../../image/wp3113856.webp'

const ServiceArea = () => {
  return (
    <>
      <section>
        <div className="serviceareaheadingmain">
          <p>Our Service<span style={{ color: "#003189" }}> Areas</span></p>
        </div>
        <hr style={{ width: "80%", marginLeft: "5%" }} />
        <div className="serviceareadiv">
          <div className='aseamapdiv'>
              <p className='areaheading'>Asia</p>
              <img src={aseamap} alt="" className='mapimage' />
              <div className='aseacitynamediv'>
                <p>India,</p>
                <p>Japan,</p>
                <p>Korea,</p>
                <p>Hong Kong,</p>
                <p>China,</p>
                <p>Singapore,</p>
                <p>Thailand,</p>
                <p>Malaysia,</p>
                <p>Indonesia,</p>
              </div>
            </div>
          <div className='aseamapdiv'>
              <p className='areaheading'>Australia</p>
              <img src={ausmap} alt="" className='mapimage' />
              <div className='aseacitynamediv'>
                <p>Sydney,</p>
                <p>Melbourne</p>
              </div>
            </div>
          <div className='aseamapdiv'>
              <p className='areaheading'>Europe</p>
              <img src={erop} alt="" className='mapimage' />
              <div className='aseacitynamediv'>
                <p>Germany,</p>
                <p>France,</p>
                <p>UK,</p>
                <p>Swiss,</p>
              </div>
            </div>
          <div className='aseamapdiv'>
              <p className='areaheading'>Africa</p>
              <img src={africa} alt="" className='mapimage' />
              <div className='aseacitynamediv'>
                <p>South Africa</p>
              </div>
            </div>
          <div className='aseamapdiv'>
              <p className='areaheading'>America</p>
              <img src={america} alt="" className='mapimage' />
              <div className='aseacitynamediv'>
                <p>Los Angeles,</p>
                <p>San Francisco,</p>
                <p>Chicago,</p>
                <p>New York,</p>
              </div>
            </div>
          <hr style={{ width: "80%", marginLeft: "5%" }} />
        </div>
      </section>

    </>
  )
}

export default ServiceArea