import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const RefundPolicy = () => {
  return (
    <>
      <Meta title={"Refund Policy"} />
      <BreadCrumb title="Refund Policy" />

      <div className="policy-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt accusantium praesentium possimus quod eos iusto
                  aperiam nobis dolores quisquam, repudiandae voluptatem. Minus
                  id enim reiciendis dolorem eius voluptatum expedita
                  necessitatibus vel officia earum laborum saepe quia, illo
                  blanditiis, corporis quas quos! Quasi vitae molestiae omnis
                  asperiores perspiciatis? Voluptatem, quos reiciendis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefundPolicy;
