import React from 'react'
// install and import react rating star
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const SpecialProduct = () => {
  return (
    <div className='col-6 mb-3'>
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
                <div>
                    <img className='img-fluid' src="images/smarttv.png" alt="smart tv" />
                </div>
                <div className="special-product-content">
                    <h5 className="brand">HiSense</h5>
                    <h6 className="title">HiSense Smart Tv</h6>
                {/* React rating stars component */}
                    <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value='3'
                        activeColor="#ffd700"
                    />
            {/* React rating stars component */}
                    <p className="price">
                            {/* &nbsp; (non-breaking-space) a command that makes sure the line doesnt break, also used to add whitespace */}
                        <strike>$150</strike>&nbsp;<span className="red-p">$99.99</span> 
                    </p>
                    <div className="discount-till d-flex align-items-center gap-10">
                        <p className='mb-0'> <b>7</b>&nbsp;days </p>
                        <div className="d-flex gap-10 align-items-center ">
                            <span className="badge rounded-circle p-3 bg-danger">1</span>:
                            <span className="badge rounded-circle p-3 bg-danger">1</span>:
                            <span className="badge rounded-circle p-3 bg-danger">1</span>
                        </div>  
                    </div>
                    <div className="prod-count my-3">
                            <p>Products: 5</p>
                                    {/* Bootstrap progress bar */}
                            <div className="progress">
                                <div 
                                    class="progress-bar" 
                                    role="progressbar" 
                                    style={{"width": "25%"}} 
                                    aria-valuenow="25" 
                                    aria-valuemin="0" aria-valuemax="100"
                                ></div>
                            </div>
                                    {/* Bootstrap progress bar */}
                    </div>
                    <Link className="button">Add to Cart</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProduct