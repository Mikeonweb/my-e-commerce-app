import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { HiHomeModern } from "react-icons/hi2";
import { MdLocalPhone, MdMail } from "react-icons/md";
import { RiMapPinTimeFill } from "react-icons/ri";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title="Contact Us" />

      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46310936665!2d3.1191447202151417!3d6.548369367655176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1715666302868!5m2!1sen!2sng"  
                width="100%" 
                height="450" 
                style={{marginRight: 'em'}}
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between ">
                <div>
                  <h3 className="contact-title mb-4">Contact Us</h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder='Name'
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder='Email'
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        className="form-control" 
                        placeholder='Mobile No.'
                      />
                    </div>
                    <div>
                      <textarea 
                        name="" 
                        id="" 
                        cols="30" 
                        rows="4"
                        className='w-100 form-control'
                        placeholder='Write your message'
                      ></textarea>
                    </div>

                    <div>
                      <button className='button border-0'>Send</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get In Touch</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-4 d-flex gap-15 align-items-center '>
                        <HiHomeModern className='fs-5' />
                        <p className='mb-0'><address className='mb-0'>25 housing gree road,vanilla villa,Lagos Nigeria</address></p>
                      </li>
                      <li className='mb-4 d-flex gap-15 align-items-center '>
                        <MdLocalPhone className='fs-5' />
                        <p className='mb-0'><a className='mb-0' href="tel:+1 22222222222">+1 22222222222</a></p>
                      </li>
                      <li className='mb-4 d-flex gap-15 align-items-center '>
                        <MdMail className='fs-5 mt-0' />
                        <p className='mb-0'>
                          <a href="mailto:ShopMaqetplace@gmail.com" className='mt-0 d-block mb-0'
                          >
                            ShopMaqetplace@gmail.com
                          </a>
                        </p>
                      </li>
                      <li className='mb-4 d-flex gap-15 align-items-center '>
                        <RiMapPinTimeFill className='fs-5' />
                        <p className='mb-0'>8 am - 9pm, Monday - Sunday</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact