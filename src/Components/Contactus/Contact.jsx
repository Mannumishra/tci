import React, { useEffect } from 'react'
import './Contact.css'

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
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
        <div className="contact">
          <div className="contactfirst">
            <div className="officeadd">
              <p>Head Office</p>
            </div>
            <div className="officelocation">
              <p>13-B26 & 205, Acrotower Square 10, Gukhoe-daero 54-gil,
                Yeongdeungpo-gu, Seoul, Republic of Korea.</p>
            </div>
            <div className="companyname">
              <p>TRANS WORLD EXPRESS CO., LTD.</p>
            </div>
          </div>
          <div className="contactfirst1">
            <div className="officeadd">
              <p>Affiliated Office In India</p>
            </div>
            <div className="officelocation">
              <p>A-4, 1st Floor, Main Vasant Kunj Road
                (Opposite Jagannath Complex)
                Mahipalpur Chowk, New Delhi- 110037.</p>
              <p>26 (Old No. 105), 2nd Floor, Armenian Street, Chennai – 600001</p>
            </div>
            <div className="companyname">
              <p>TRANS CONTINENTAL FREIGHT SERVICE (INDIA) PVT. LTD</p>
            </div>
          </div>
          <div className="contactfirst2">
            <div className="officeadd">
              <p>Affiliated Office in South Africa</p>
            </div>
            <div className="officelocation">
              <p>358 Pretorius Street 0001, Pretoria, R.S.A.</p>
            </div>
            <div className="companyname">
              <p>TCI LOGISTICS SOUTH AFRICA PTY.LTD.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <hr /> */}
      <section >
        <div className="contactinfo">
          <div className="contactinfofirst">
            <div className="contactadd">
              <p>Contact Info</p>
            </div>
            <div className="officelocation">
              <p>Call Us : <span><a href="tel:+9101140764076">+91 01140764076 </a></span></p>
              <p>Call Us (Air Import) : <span><a href="tel:+919555686520">+91 9555686520 </a></span></p>
              <p>Call Us (Sea Import) : <span><a href="tel:+919540603266">+91 9540603266 </a></span></p>
              <p>Call Us (Air & Sea Export)  : <span><a href="tel:+919599297900">+91 9599297900 </a></span></p>
              <p>Email : <span><a href="mailto:Pricing@tciindia.co.in,sanjiv@tciindia.co.in,rinku@tciindia.co.in,sales@tciindia.co.in,prakash@tciindia.co.in,export@tciindia.co.in">sanjiv@tciindia.co.in , rinku@tciindia.co.in , prakash@tciindia.co.in , pricing@tciindia.co.in ,  sales@tciindia.co.in ,  export@tciindia.co.in</a></span></p>
            </div>
          </div>
          <div className="getintouch">
            <div className="contactadd ">
              <p className='text-center'>Any Query please leave message </p>
            </div>
            <div className="officelocation">

              <form action="https://formsubmit.co/accounts@tciindia.co.in" method="POST">
                <div class="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" name='name' class="form-control" placeholder="Name" />
                </div>
                <div class="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" name='email' class="form-control" placeholder="Email Address" />
                </div>
                <div class="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" name='mobileNumber' class="form-control" placeholder="Phone Number" />
                </div>
                <div class="mb-3">
                  <label className="form-label">Message</label>
                  <textarea name="message" id="" rows={5} placeholder='Message' className='form-control'></textarea>
                </div>

                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://www.tciindia.co.in/contact" />
                <input type="hidden" name="_template" value="table" />

                <div class="mb-3">
                  <button type='submit' className='btn btn-dark'>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact