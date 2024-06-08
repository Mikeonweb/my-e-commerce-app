import React from 'react'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { CiDeliveryTruck, CiGift, CiCreditCard1 } from "react-icons/ci";
import { PiHeadsetFill } from "react-icons/pi";
import { TbZoomMoney } from "react-icons/tb";
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';


const Home = () => {
  return (
    <>
      <Meta title={"Home Page"} />

      {/* first home section */}
        {/* main banner */}
        <div className="home-wrapper-1 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-6">
                <div className="main-banner position-relative">
                  {/* image */}
                  <img 
                    className='img-fluid rounded-3'
                    src="images/iphoneback-mainbanner.jpg" 
                    alt="main banner"
                  />
                  {/*overlay */}
                  <div className="overlay"></div>
                  {/* text content */}
                  <div className="main-banner-content position-absolute text-white">
                    <h4>STAND OUT WITH A PRO VERSION</h4>
                    <h5>iphone 13 pro</h5>
                    <p>from $799 or $40/mo. </p>
                    <Link className='button'>BUY NOW</Link>
                  </div>
                </div>
              </div>

            {/* small banners */}
              <div className="col-6">
                <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  {/* image */}
                  <img 
                    className='img-fluid rounded-3'
                    src="images/samsung-s23.jpg" 
                    alt="main banner"
                    width="400" height="100"
                  />
                  {/*overlay */}
                  <div className="overlay"></div>
                  {/* text content */}
                  <div className="small-banner-content position-absolute text-white">
                    <h4>SAMSUNG GALAXY SERIES</h4>
                    <h5>Samsung Galaxy s23</h5>
                    <p>from $780 or $41/mo.</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  {/* image */}
                  <img 
                    className='img-fluid rounded-3'
                    src="images/samsungfold.jpg" 
                    alt="main banner"
                    width="400" height="200"
                  />
                  {/*overlay */}
                  <div className="overlay"></div>
                  {/* text content */}
                  <div className="small-banner-content position-absolute text-white">
                    <h4>SAMSUNG GALAXY SERIES</h4>
                    <h5>Samsung Galaxy Fold</h5>
                    <p>from $999 or $50/mo.</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  {/* image */}
                  <img 
                    className='img-fluid rounded-3'
                    src="images/macbook-2.jpg" 
                    alt="main banner"
                    width="400" height="200"
                  />
                  {/*overlay */}
                  <div className="overlay"></div>
                  {/* text content */}
                  <div className="small-banner-content position-absolute text-white">
                    <h4>APPLE MACBOOK SERIES</h4>
                    <h5>Apple Macbook Pro</h5>
                    <p>from $1599 or $100/mo.</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  {/* image */}
                  <img 
                    className='img-fluid rounded-3'
                    src="images/hp-banner.jpg" 
                    alt="main banner"
                    width="400" height="200"
                  />
                  {/*overlay */}
                  <div className="overlay"></div>
                  {/* text content */}
                  <div className="small-banner-content position-absolute text-white">
                    <h4>WINDOWS LAPTOPS</h4>
                    <h5>HP Envy</h5>
                    <p>from $799 or $40/mo.</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* second home section */}
        <div className="home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="services d-flex align-items-center justify-content-between gap-30">
                  <div className="d-flex align-items-center gap-15">
                    <CiDeliveryTruck className='fs-1'/>
                    <div>
                      <h6>Free Shipping</h6>
                      <p className="mb-0">For all purchases $100 and above</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-15">
                    <CiGift className='fs-1'/>
                    <div>
                      <h6>Unbelieveable Shopping Offers </h6>
                      <p className="mb-0">Save upto 30% off</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-15">
                    <PiHeadsetFill className='fs-1'/>
                    <div>
                      <h6>24hrs Support</h6>
                      <p className="mb-0">Enjoy standby customer support</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-15">
                    <TbZoomMoney className='fs-1'/>
                    <div>
                      <h6>Affordable prices</h6>
                      <p className="mb-0">Reduced price for best quality goods</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center gap-15">
                    <CiCreditCard1 className='fs-1'/>
                    <div>
                      <h6>Secure payment</h6>
                      <p className="mb-0">No hidden charges, 100% protection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* third home section */}
        <div className="home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="categories d-lg-flex flex-wrap justify-content-between align-items-center">
                  {/* 1 */}
                  <div className='d-flex gap-10 align-items-center'>
                    <div>
                      <h6>Computers & Laptop</h6>
                      <p>10 items</p>
                    </div>
                    <img src="images/laptop.png" alt="laptop" width={100} height={100} />
                  </div>
                  {/* 2 */}
                  <div className='d-flex gap-10 align-items-center'>
                    <div>
                      <h6>Cameras</h6>
                      <p>10 items</p>
                    </div>
                    <img src="images/camera.png" alt="camera" width={100} height={100} />
                  </div>
                  {/* 3 */}
                  <div className='d-flex gap-10 align-items-center'>
                    <div>
                      <h6>Smart Tv</h6>
                      <p>10 items</p> 
                    </div>
                    <img src="images/smarttv.png" alt="smarttv" width={100} height={100} />
                  </div>
                  {/* 4 */}
                  <div className='d-flex gap-10 align-items-center'>
                    <div>
                      <h6>Smart Watches</h6>
                      <p>10 items</p>
                    </div>
                    <img src="images/smartwatch.png" alt="smartwatch" width={100} height={100} />
                  </div>
                  {/* 5 */}
                  <div className='d-flex gap-10 align-items-center'>
                    <div>
                      <h6>Phones & Tablet</h6>
                      <p>10 items</p>
                    </div>
                    <img src="images/phone.png" alt="phone" width={100} height={100} />
                  </div>
                  {/* 6 */}
                  <div className='d-flex gap-10 align-items-center'>
                    <div>
                      <h6>Home Appliances</h6>
                      <p>10 items</p>
                    </div>
                    <img src="images/vacuumcleaner.png" alt="vacuum cleaner" width={100} height={100} />
                  </div>
                  {/* 7 */}
                  <div className='d-flex gap-10 align-items-center'>
                    <div>
                      <h6>Accesories</h6>
                      <p>10 items</p>
                    </div>
                    <img src="images/accesories.png" alt="accesories" width={100} height={100} />
                  </div>
                  {/* 8 */}
                  <div className='d-flex gap-10 align-items-center'>
                    <div>
                      <h6>Portable Speakers</h6>
                      <p>10 items</p>
                    </div>
                    <img src="images/portable-speaker.png" alt="portable speaker" width={100} height={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* featured section */}
      <div className="featured-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">FEATURED COLLECTION</h3>
              </div>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>

      {/* famous section */}
        <div className="famous-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-3">
                <div className="famous-card position-relative bg-dark ">
                  <div className="famous-content ">
                    <h5>Big Screen</h5>
                    <h6>Smart Watch Series 7</h6>
                    <p>from $450 or $18.50/mo. for 24 mo.</p>
                  </div>
                  <img className='img-fluid' src="images/camera.png" alt="famous" />
                </div>
              </div>

              <div className="col-3">
                <div className="famous-card position-relative bg-white">
                  <div className="famous-content">
                    <h5 className='text-dark'>Big Screen</h5>
                    <h6 className='text-dark'>Smart Watch Series 7</h6>
                    <p className='text-dark'>from $450 or $18.50/mo. for 24 mo.</p>
                  </div>
                  <img className='img-fluid' src="images/laptop.png" alt="famous" />
                </div>
              </div>

              <div className="col-3">
                <div className="famous-card position-relative bg-white">
                  <div className="famous-content">
                    <h5 className='text-dark'>Big Screen</h5>
                    <h6 className='text-dark'>Smart Watch Series 7</h6>
                    <p className='text-dark'>from $450 or $18.50/mo. for 24 mo.</p>
                  </div>
                  <img className='img-fluid' src="images/phone.png" alt="famous" />
                </div>
              </div>

              <div className="col-3">
                <div className="famous-card position-relative bg-white">
                  <div className="famous-content">
                    <h5 className='text-dark'>Big Screen</h5>
                    <h6 className='text-dark'>Smart Watch Series 7</h6>
                    <p className='text-dark'>from $450 or $18.50/mo. for 24 mo.</p>
                  </div>
                  <img className='img-fluid' src="images/portable-speaker.png" alt="famous" />
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* special product section */}
        <div className="special-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">SPECIAL PRODUCTS</h3>
              </div>
            </div>

            <div className="row">
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
        </div>

      {/* popular section */}
      <div className="popular-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">OUR POPULAR PRODUCTS</h3>
              </div>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>

      {/* Brands section */}
        <div className="marquee-wrapper home-wrapper-2 p-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                
                {/* Marquee */}

                <div className="marquee-inner-wrapper card-wrapper">
                  <Marquee>
                    <div className='mx-4 w-25'><img src="images/brand-01.png" alt="brand" /></div>
                    <div className='mx-4 w-25'><img src="images/brand-02.png" alt="brand" /></div>
                    <div className='mx-4 w-25'><img src="images/brand-03.png" alt="brand" /></div>
                    <div className='mx-4 w-25'><img src="images/brand-04.png" alt="brand" /></div>
                    <div className='mx-4 w-25'><img src="images/brand-05.png" alt="brand" /></div>
                    <div className='mx-4 w-25'><img src="images/brand-06.png" alt="brand" /></div>
                    <div className='mx-4 w-25'><img src="images/brand-07.png" alt="brand" /></div>
                    <div className='mx-4 w-25'><img src="images/brand-08.png" alt="brand" /></div>
                  </Marquee>
                </div>
                
                {/* Marque */}
              </div>
            </div>
          </div>
        </div>

      {/* blog section */}
        <div className="blog-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">OUR BLOG</h3>
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <BlogCard />
              </div>
              <div className="col-3">
                <BlogCard />
              </div>
              <div className="col-3">
                <BlogCard />
              </div>
              <div className="col-3">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home