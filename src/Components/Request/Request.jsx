import React, { useEffect } from 'react'
import "./Request.css"
const Request = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
    <>
      <section>
        <div className="requestmain">
          <div className="requestbg">
            <div className="request-content">
              <p>COMPLETE SERVICE
                THROUGH ONLINE</p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Request