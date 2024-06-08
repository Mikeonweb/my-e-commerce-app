import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { RxCross2 } from "react-icons/rx";

const Wishlist = () => {
  return (
    <>
        <Meta title={"Wish List"} />
        <BreadCrumb title="Wish List" />

        <div className="wishlist-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <RxCross2 className='position-absolute cross fs-4'/>
                            <div className="wishlist-card-image bg-white p-4 rounded-3">
                                <img 
                                    src="images/camera.png" 
                                    alt="watch" 
                                    className='img-fluid w-100'
                                />
                            </div>
                            <div className="py-3 px-3">
                                <h5 className="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, accusamus.</h5>
                                <h6 className="price mb-3 mt-3">$ 150</h6>
                            </div>
                        </div>
                    </div>


                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <RxCross2 className='position-absolute cross fs-4'/>
                            <div className="wishlist-card-image bg-white p-4 rounded-3">
                                <img 
                                    src="images/camera.png" 
                                    alt="watch" 
                                    className='img-fluid w-100'
                                />
                            </div>
                            <div className="py-3 px-3">
                                <h5 className="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, accusamus.</h5>
                                <h6 className="price mb-3 mt-3">$ 150</h6>
                            </div>
                        </div>
                    </div>


                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <RxCross2 className='position-absolute cross fs-4'/>
                            <div className="wishlist-card-image bg-white p-4 rounded-3">
                                <img 
                                    src="images/camera.png" 
                                    alt="watch" 
                                    className='img-fluid w-100'
                                />
                            </div>
                            <div className="py-3 px-3">
                                <h5 className="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, accusamus.</h5>
                                <h6 className="price mb-3 mt-3">$ 150</h6>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <RxCross2 className='position-absolute cross fs-4'/>
                            <div className="wishlist-card-image bg-white p-4 rounded-3">
                                <img 
                                    src="images/camera.png" 
                                    alt="watch" 
                                    className='img-fluid w-100'
                                />
                            </div>
                            <div className="py-3 px-3">
                                <h5 className="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, accusamus.</h5>
                                <h6 className="price mb-3 mt-3">$ 150</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Wishlist