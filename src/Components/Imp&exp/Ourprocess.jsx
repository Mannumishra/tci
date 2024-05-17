import React, { useEffect } from 'react'
import './Ourprocess.css'
import airimport from '../../image/airimport.jpg'
import airexport from '../../image/airexport.jpg'
import seeimport from '../../image/seeimport.jpg'
import seeexport from '../../image/seeexport.jpg'
const Ourprocess = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
  return (
    <>
      <section>
        <div className="impexpprocessheading">
          <p>Our Air Import and Export Process</p>
        </div>
        <hr />
        <div className='airprocess'>
          <div className="airimport">
            <img src={airimport} alt="" className='airpic' />
          </div>
          <div className="airimport">
            <img src={airexport} alt="" className='airpic' />
          </div>
        </div>
        <div className="impexpprocessheading">
          <p>Our See Import and Export Process</p>
        </div>
        <hr />
        <div className='airprocess'>
          <div className="airimport">
            <img src={seeimport} alt="" className='airpic' />
          </div>
          <div className="airimport">
            <img src={seeexport} alt="" className='airpic' />
          </div>
        </div>
        <hr />
      </section>
    </>
  )
}

export default Ourprocess