import React, { useEffect } from 'react'
import './OurAchivment.css'

const OurAchivment = () => {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    })
    return (
        <>
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
                        <div className='namemannu' style={{color:"white"}}>Established Shanghai </div>
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
                        <div className='namemannu' style={{color:"white"}}>Established TCI</div>
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
                        <div className='namemannu' style={{color:"white"}}> Established South Africa </div>
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

export default OurAchivment