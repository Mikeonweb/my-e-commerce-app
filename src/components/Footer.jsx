import React from 'react'
import { FaTelegramPlane, FaFacebook, FaTwitter, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    {/* first footer section */}
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center ">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-10 align-items-center">
                <FaTelegramPlane className='fs-2 text-white' />
                <p className='mb-0 text-white'>Sign Up For Newsletter</p>
              </div>
            </div>
            <div className="col-7">
            <div class="input-group">
                <input 
                  type="text" 
                  className="form-control py-1" 
                  placeholder="Your Email Address..." 
                  aria-label="Your Email Address..." aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    {/* second footer section */}
      <footer className='py-3'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <address className='text-white fs-6'>25 housing gree road, <br /> vanilla villa, <br /> Lagos Nigeria</address>
              <a href="tel:+1 22222222222" className='mt-2 d-block mb-1 text-white'
              >
                +1 22222222222
              </a>

              <a href="mailto:ShopMaqetplace@gmail.com" className='mt-4 d-block mb-0 text-white'
              >
                ShopMaqetplace@gmail.com
              </a>
              <div className="social-icons d-flex  align-items-center gap-15 fs-3 mt-4">
                <a href="#">
                <FaFacebook className='text-white' />
                </a>
                <a href="#">
                <FaTwitter className='text-white' />
                </a>
                <a href="#">
                <FaLinkedin className='text-white' />
                </a>
                <a href="#">
                <FaInstagramSquare className='text-white' />
                </a>
              </div>
            </div>

            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to="privacy-policy" className="text-white mb-1 py-2">Privacy Policy</Link>
                <Link to="refund-policy" className="text-white mb-1 py-2">Refund Policy</Link>
                <Link to="shipping-policy" className="text-white mb-1 py-2">Shipping Policy</Link>
                <Link to="terms-and-conditions" className="text-white mb-1 py-2">Terms & Conditions</Link>
                <Link to="blogs" className="text-white mb-1 py-2">Blogs</Link>
              </div>
            </div>

            <div className="col-3">
              <h4 className='text-white mb-4'>Accounts</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white mb-1 py-2">About Us</Link>
                <Link className="text-white mb-1 py-2">FAQ</Link>
                <Link to="contact" className="text-white mb-1 py-2">Contact</Link>
              </div>
            </div>

            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white mb-1 py-2">Laptops</Link>
                <Link className="text-white mb-1 py-2">Headphones</Link>
                <Link className="text-white mb-1 py-2">Tablets</Link>
                <Link className="text-white mb-1 py-2">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    {/* third footer section */}
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className='text-center text-white mb-0'>&copy; {new Date().getFullYear()}, Powered by MikeOnWeb</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer