import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import { IoReorderFourOutline, IoReorderThreeOutline, IoReorderTwoOutline } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import ProductCard from '../components/ProductCard.jsx'
import Color from '../components/Color.jsx';

const Store = () => {
  const [grid, setGrid] = useState(4);
  // alert(grid)
  // const gridSetter= (i) => {
  //   setGrid(i);
  // };

  return (
    <>
      <Meta title={"Store"} />
      <BreadCrumb title="Our Store" />
      
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {/* LEFT SIDE */}
            <div className="col-3">
              <div className='filter-card mb-3'>
                <h3 className="filter-title">Shop by Category</h3>
                <div>
                  <ul className='ps-0'>
                    <li>Watch</li>
                    <li>Camera</li>
                    <li>Tv</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>

              <div className='filter-card mb-3'>
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div class="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value="" 
                        id="" 
                      />
                      <label className="form-check-label" htmlFor=""> In Stock(1) </label>
                    </div>
                    <div class="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor=""> Out Of Stock(0) </label>
                    </div>
                  </div>

                  <h5 className="sub-title">Price</h5>
                  <div className='d-flex align-items-center gap-10'>
                    <div className="form-floating">
                      <input type="text" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="enter price"
                        style={{'height' : '40px'}}
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                      <div className="form-floating">
                        <input type="text" 
                          className="form-control" 
                          id="floatingInput1" 
                          placeholder="enter price"
                          style={{'height' : '40px'}}
                        />
                        <label htmlFor="floatingInput1">To</label>
                      </div>
                  </div>

                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <div>
                      <Color />
                    </div>
                  </div>

                  <h5 className="sub-title">Sizes</h5>
                  <div>
                    <div class="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value="" 
                        id="color-1" 
                      />
                      <label className="form-check-label" htmlFor="color-1"> S (2) </label>
                    </div>
                    <div class="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label className="form-check-label" htmlFor="color-2"> M (2) </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='filter-card mb-3'>
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="barge bg-light text-secondary  rounded-3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="barge bg-light text-secondary  rounded-3 py-2 px-3">
                      Camera
                    </span>
                    <span className="barge bg-light text-secondary  rounded-3 py-2 px-3">
                      Speakers
                    </span>
                    <span className="barge bg-light text-secondary  rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="barge bg-light text-secondary  rounded-3 py-2 px-3">
                      iPhone
                    </span>
                  </div>
                </div>
              </div>

              <div className='filter-card mb-3'>
                <h3 className="filter-title">Random Products</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img className='img-fluid' src="images/smartwatch.png" alt="watch" />
                    </div>
                    <div className="w-50">
                      <h5>Lorem ipsum dolor sit amet consectetur.</h5>
                      {/* React rating stars component */}
                      <ReactStars
                          count={5}
                          size={24}
                          edit={false}
                          value='4'
                          activeColor="#ffd700"
                      />
                      {/* React rating stars component */}
                      <b>$ 300</b>
                    </div>
                  </div>

                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img className='img-fluid' src="images/smartwatch.png" alt="watch" />
                    </div>
                    <div className="w-50">
                      <h5>Lorem ipsum dolor sit amet consectetur.</h5>
                      {/* React rating stars component */}
                      <ReactStars
                          count={5}
                          size={24}
                          edit={false}
                          value='4'
                          activeColor="#ffd700"
                      />
                      {/* React rating stars component */}
                      <b>$ 300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">

                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 block" style={{"width" : "100px"}}>Sort By</p>
                    <select 
                      name="" 
                      id=""
                      className='form-control form-select'
                    >
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">Best Selling</option>
                      <option value="title-descending">Alphabetically, A - Z</option>
                      <option value="title-ascending">Alphabetically, Z - A</option>
                      <option value="price-ascending">Price, low to high</option>
                      <option value="price-descending">Price, high to low</option>
                      <option value="created-ascending">Date, old to new</option>
                      <option value="created descending">Date, new to old</option>
                    </select>
                  </div>

                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center">
                          {/* Icons with gr class numbers */}
                      <IoReorderFourOutline 
                        style={{cursor: "pointer"}}
                        onClick={() => {
                          setGrid(3);
                        }}
                        className='d-block fs-2' 
                      />
                      <IoReorderThreeOutline 
                        style={{cursor: "pointer"}}
                        onClick={() => {
                          setGrid(4);
                        }}
                        className='d-block fs-2' 
                      />
                      <IoReorderTwoOutline 
                        style={{cursor: "pointer"}}
                        onClick={() => {
                          setGrid(6);
                        }}
                        className='d-block fs-2' 
                      />
                      <TbListDetails 
                        style={{cursor: "pointer"}}
                        onClick={() => {
                          setGrid(12);
                        }}
                        className='d-block fs-2' 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-list pb-5">
                <div className="d-flex gap-2 flex-wrap">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Store