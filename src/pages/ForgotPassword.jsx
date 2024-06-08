import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" />

      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card rounded-3">
                <h3 className="text-center">Create New Password</h3>
                <p className="text-center mt-2 mb-3">
                  You will receive an email on how to reset your password
                </p>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email and click reset password"
                      className="form-control"
                    />
                  </div>

                  <div>
                    <div className="d-flex justify-content-center align-items-center flex-column  gap-15 mt-2">
                      <button className="button border-0">
                        Reset Password
                      </button>
                      <Link to="/login" className="border-0">
                        Cancel
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
