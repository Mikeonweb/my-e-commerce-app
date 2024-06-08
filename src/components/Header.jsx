import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import { MdCompare, MdMenu } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { FaRegUser,FaOpencart } from "react-icons/fa6";

const Header = () => {
  return (
    <>
    {/* first header section */}
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>free shipping over $100 & free returns</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>hotline: <a className='text-white' href="tel:+1 22222222222">+1 22222222222</a></p>
            </div>
          </div>
        </div>
      </header>
    {/* second header section */}
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to="/" className='text-white'>MAQETPLACE</Link>
              </h2>
            </div>

            <div className="col-5">
              <div class="input-group">
                <input 
                  type="text" 
                  className="form-control py-2" 
                  placeholder="Search Product..." 
                  aria-label="Search Product..." aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <FiSearch className='fs-6' />
                </span>
              </div>
            </div>

            <div className="col-5">
              <header className="header-upper-links d-flex align-items-center justify-content-between">
                  <div>
                    <Link 
                      to="/compare-product"
                      className='link d-flex align-items-center text-white gap-10'>
                      <MdCompare className='fs-2' />
                      <p className='mb-0'>
                        Compare <br /> Products
                      </p>
                    </Link>
                  </div>
                  <div>
                  <Link 
                    to="/wishlist"
                    className='link d-flex align-items-center text-white gap-10'>
                      <GrFavorite className='fs-2' />
                      <p className='mb-0'>
                        Favorite <br />  Wishlist
                      </p>
                    </Link>
                  </div>
                  <div>
                  <Link 
                    to="/login"
                    className='link d-flex align-items-center text-white gap-10'>
                      <FaRegUser className='fs-2' />
                      <p className='mb-0'>
                        Log in <br /> My Account
                      </p>
                    </Link>
                  </div>
                  <div>
                  <Link 
                    to="/cart"
                    className='link d-flex align-items-center text-white gap-10'>
                      <FaOpencart className='fs-2' />
                      <div className='d-flex flex-column'>
                        <span className="badge bg-white text-dark">0</span>
                        <p className='mb-0'>$1000</p>
                      </div>
                    </Link>
                  </div>
              </header>
            </div>
          </div>
        </div>
      </header>
    {/* third header section */}
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button 
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
                      type="button" 
                      id="dropdownMenuButton1" 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false"
                    >
                      <MdMenu className='fs-3' />
                      <span className='me-5 d-inline-block '>Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Our&nbsp;Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header