import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
// install and import react image zoom component
import ReactImageZoom from "react-image-zoom";

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  // set up react image zoom for use
  const props = {
    width: 400,
    zoomWidth: 500,
    height: 500,
    img: "../../images/iphoneback-mainbanner.jpg",
  };

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />

      <div className="main-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                {/* call and consume react image zoom */}
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>

              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    className="img-fluid"
                    src="../../images/iphoneback-mainbanner.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="../../images/iphoneback-mainbanner.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="../../images/iphoneback-mainbanner.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    w
                    src="../../images/iphoneback-mainbanner.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ut?</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex gap-10 align-items-center">
                      <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value="4"
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">[ 2 reviews ]</p>
                    </div>
                    <a href="#review"> Write a Review</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* description */}
      <div className="description-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4 className="description">Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam quaerat, totam quos esse cupiditate ut ex, nisi,
                  voluptatem ipsa debitis sequi aliquam pariatur eius neque
                  ipsam praesentium nostrum similique qui! Id nobis temporibus
                  commodi possimus iusto est ipsa asperiores laboriosam optio ex
                  reiciendis rem nam voluptatibus magnam, delectus dicta aliquid
                  provident explicabo soluta expedita tenetur quasi! Molestias
                  at neque est, optio earum corrupti rerum quibusdam odio non
                  voluptatem quos maxime quasi esse autem incidunt sed
                  dignissimos voluptatum, eveniet fugiat. Illum debitis quod
                  enim velit placeat nisi alias excepturi facilis aliquam
                  voluptate, nihil nam qui laborum, sit, est porro ratione quia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div id="review" className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex gap-10 align-items-center">
                      <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value="4"
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">based on 2 reviews</p>
                    </div>
                  </div>

                  {orderedProduct && (
                    <div>
                      <a className=" text-decoration-underline" href="">
                        Write a review
                      </a>
                    </div>
                  )}
                </div>

                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        edit={true}
                        value="0"
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                        className="w-100 form-control"
                        placeholder="write your rating opinion"
                      ></textarea>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>

                <div className="reviews">
                  <h5>Edidiong Usen</h5>
                  <div className="review">
                    <ReactStars
                      count={5}
                      size={24}
                      edit={false}
                      value="4"
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Saepe est nostrum dolore adipisci atque amet labore eius
                      nisi dicta maiores magnam, ipsam itaque quia doloribus ea
                      voluptatibus molestiae! At, tempore?
                    </p>
                  </div>

                  <h5>David Ini</h5>
                  <div className="review">
                    <ReactStars
                      count={5}
                      size={24}
                      edit={false}
                      value="4"
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Saepe est nostrum dolore adipisci atque amet labore eius
                      nisi dicta maiores magnam, ipsam itaque quia doloribus ea
                      voluptatibus molestiae! At, tempore?
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
