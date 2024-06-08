import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <>
      <div className="blog-card">
        <div className="image-card">
          <img
            className="img-fluid"
            src="images/iphoneback-mainbanner.jpg"
            alt="blog"
            width="500"
            height="300"
          />
        </div>

        <div className="blog-content">
          <p className="date">30 April, 2024</p>
          <h5 className="title">Lorem, ipsum.</h5>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            voluptatibus.
          </p>
          <Link to="/blog/:id" className="button">
            READ MORE
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
