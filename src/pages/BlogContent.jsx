import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const BlogContent = () => {
  return (
    <>
      <Meta title={"Dynamic Reading Blog"} />
      <BreadCrumb title="Dynamic Read Blog" />

      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <h3 className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  iusto.
                </h3>
                <img
                  className="img-fluid w-100 my-4"
                  src="images/iphoneback-mainbanner.jpg"
                  alt="blog image"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo dolores a sed itaque tempore voluptatum ex est
                  corporis, quo hic incidunt animi quod obcaecati ullam nesciunt
                  quibusdam sapiente quaerat molestiae porro perferendis minus
                  cupiditate quas. Ullam saepe officiis iste nostrum consectetur
                  alias suscipit assumenda expedita! Sed eius commodi esse! Ipsa
                  libero distinctio esse voluptatibus recusandae sapiente error
                  facilis excepturi dolor quas est ratione aperiam ipsum
                  similique, nesciunt doloribus quam veritatis, iusto numquam
                  tempora corrupti atque? Officia incidunt suscipit alias minima
                  vel eveniet itaque fugiat cumque! Blanditiis aspernatur nam
                  error. Amet labore esse illo ratione minima itaque tempora.
                  Nemo, reprehenderit impedit.
                </p>
                <Link
                  to="/blogs"
                  className="fs-6 d-flex align-items-center gap-10"
                >
                  <IoMdArrowRoundBack /> Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
