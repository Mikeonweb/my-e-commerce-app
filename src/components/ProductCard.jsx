import React from 'react'
// install and import react rating star
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import { FaCartArrowDown, FaEye, FaCodeCompare, FaHeart } from "react-icons/fa6";

const ProductCard = (props) => {
    let location = useLocation();
    const {grid} = props;

  return (
    <>
        <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}>
            <Link to="/product/:id" className="product-card position-relative" style={{color: "var(--color-777777)"}}>
                <div className="wishlist-icon position-absolute">
                    <Link className='text-dark'><FaHeart /></Link>
                </div>
                
                <div className="product-image">
                    <img src="images/smarttv.png" alt="image" />
                    <img src="images/laptop.png" alt="image" />
                </div>

                <div className="product-details">
                    <h6 className="brand">HiSense</h6>
                    <h5 className="product-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, maxime!</h5>
                {/* React rating stars component */}
                    <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value='3'
                        activeColor="#ffd700"
                    />
                {/* React rating stars component */}
                    <p className={`"description" ${grid === 12 ? "d-block" : "d-none"}`}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis tempora at fugit exercitationem veniam molestias rem. Tempora nihil est, fuga aliquid quisquam corrupti reiciendis. Sed esse perspiciatis laboriosam distinctio, deleniti temporibus? Mollitia non maiores tempora, voluptates quia impedit aliquam consequatur.
                    </p>
                    <p className="price">$99.99</p>
                </div>

                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-10">
                        <Link className='text-dark'><FaCodeCompare /></Link>
                        <Link className='text-dark'><FaEye /></Link>
                        <Link className='text-dark'><FaCartArrowDown /></Link>
                    </div>
                </div>
            </Link>
        </div>

        <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}>
            <Link className="product-card position-relative" style={{color: "var(--color-777777)"}}>
                <div className="wishlist-icon position-absolute">
                    <Link className='text-dark'><FaHeart /></Link>
                </div>
                
                <div className="product-image">
                    <img src="images/smarttv.png" alt="image" />
                    <img src="images/laptop.png" alt="image" />
                </div>

                <div className="product-details">
                    <h6 className="brand">HiSense</h6>
                    <h5 className="product-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, saepe?</h5>
                {/* React rating stars component */}
                    <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value='3'
                        activeColor="#ffd700"
                    />
                {/* React rating stars component */}
                <p className={`"description" ${grid === 12 ? "d-block" : "d-none"}`}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis tempora at fugit exercitationem veniam molestias rem. Tempora nihil est, fuga aliquid quisquam corrupti reiciendis. Sed esse perspiciatis laboriosam distinctio, deleniti temporibus? Mollitia non maiores tempora, voluptates quia impedit aliquam consequatur.
                    </p>
                    <p className="price">$99.99</p>
                </div>

                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-10">
                        <Link className='text-dark'><FaCodeCompare /></Link>
                        <Link className='text-dark'><FaEye /></Link>
                        <Link className='text-dark'><FaCartArrowDown /></Link>
                    </div>
                </div>
            </Link>
        </div>
    </>
  )
}

export default ProductCard