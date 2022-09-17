import React from "react";
import { FaTruck, FaUserAlt } from "react-icons/fa";

const Content = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <div className="icons m-3">
                  <FaTruck />
                </div>
                <h3 class="icon-title">Easy to Operate</h3>
                <p class="icon-caption">
                  This can easily help you to
                  <br />
                  grow up your business fast
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <h3 class="icon-title">Easy to Operate</h3>
            <p class="icon-caption">
              This can easily help you to
              <br />
              grow up your business fast
            </p>
          </div>
          <div className="col">
            <h3 class="icon-title">Easy to Operate</h3>
            <p class="icon-caption">
              This can easily help you to
              <br />
              grow up your business fast
            </p>
          </div>
          <div className="col">
            <h3 class="icon-title">Easy to Operate</h3>
            <p class="icon-caption">
              This can easily help you to
              <br />
              grow up your business fast
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
