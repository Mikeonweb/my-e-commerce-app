import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { RxCross2 } from "react-icons/rx";
import Color from '../components/Color';

const CompareProduct = () => {
  return (
    <>
        <Meta title={"Compare Products"} />
        <BreadCrumb title="Compare Products" />

        <div className="compare-product-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="compare-product-card position-relative ">
                            <RxCross2 className='position-absolute cross fs-4'/>
                            <div className="product-card-image">
                                <img src="images/camera.png" alt="camera" className='img-fluid' />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, accusamus.</h5>
                                <h6 className="price mb-3 mt-3">$ 150</h6>
                            </div>
                            <div className="product-details">
                                <h5>Brand:</h5>
                                <p>Canon</p>
                            </div>
                            <div className="product-details">
                                <h5>Type:</h5>
                                <p>Camera</p>
                            </div>
                            <div className="product-details">
                                <h5>Availability:</h5>
                                <p>In Stock</p>
                            </div>
                            <div className="product-details">
                                <h5>Color:</h5>
                                <Color />
                            </div>
                            <div className="product-details">
                                <h5>Size:</h5>
                                <div className="d-flex gap-10">
                                    <p>S</p>
                                    <p>M</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-3">
                        <div className="compare-product-card position-relative ">
                            <RxCross2 className='position-absolute cross fs-4'/>
                            <div className="product-card-image">
                                <img src="images/camera.png" alt="camera" className='img-fluid' />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, accusamus.</h5>
                                <h6 className="price mb-3 mt-3">$ 150</h6>
                            </div>
                            <div className="product-details">
                                <h5>Brand:</h5>
                                <p>Canon</p>
                            </div>
                            <div className="product-details">
                                <h5>Type:</h5>
                                <p>Camera</p>
                            </div>
                            <div className="product-details">
                                <h5>Availability:</h5>
                                <p>In Stock</p>
                            </div>
                            <div className="product-details">
                                <h5>Color:</h5>
                                <Color />
                            </div>
                            <div className="product-details">
                                <h5>Size:</h5>
                                <div className="d-flex gap-10">
                                    <p>S</p>
                                    <p>M</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-3">
                        <div className="compare-product-card position-relative ">
                            <RxCross2 className='position-absolute cross fs-4'/>
                            <div className="product-card-image">
                                <img src="images/camera.png" alt="camera" className='img-fluid' />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, accusamus.</h5>
                                <h6 className="price mb-3 mt-3">$ 150</h6>
                            </div>
                            <div className="product-details">
                                <h5>Brand:</h5>
                                <p>Canon</p>
                            </div>
                            <div className="product-details">
                                <h5>Type:</h5>
                                <p>Camera</p>
                            </div>
                            <div className="product-details">
                                <h5>Availability:</h5>
                                <p>In Stock</p>
                            </div>
                            <div className="product-details">
                                <h5>Color:</h5>
                                <Color />
                            </div>
                            <div className="product-details">
                                <h5>Size:</h5>
                                <div className="d-flex gap-10">
                                    <p>S</p>
                                    <p>M</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-3">
                        <div className="compare-product-card position-relative ">
                            <RxCross2 className='position-absolute cross fs-4'/>
                            <div className="product-card-image">
                                <img src="images/camera.png" alt="camera" className='img-fluid' />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, accusamus.</h5>
                                <h6 className="price mb-3 mt-3">$ 150</h6>
                            </div>
                            <div className="product-details">
                                <h5>Brand:</h5>
                                <p>Canon</p>
                            </div>
                            <div className="product-details">
                                <h5>Type:</h5>
                                <p>Camera</p>
                            </div>
                            <div className="product-details">
                                <h5>Availability:</h5>
                                <p>In Stock</p>
                            </div>
                            <div className="product-details">
                                <h5>Color:</h5>
                                <Color />
                            </div>
                            <div className="product-details">
                                <h5>Size:</h5>
                                <div className="d-flex gap-10">
                                    <p>S</p>
                                    <p>M</p>
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

export default CompareProduct