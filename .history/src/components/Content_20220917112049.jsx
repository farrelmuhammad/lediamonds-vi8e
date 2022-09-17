import React from "react";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

const Content = () => {
  return (
    <>
        <div className="row row-cols-auto p-5">
          <div className="col">
            <h5 class="icon-title">
              <FaShoppingCart className="icons me-2 mb-1" />
              FREE DELIVERY
            </h5>
            <p class="icon-caption">asdasd</p>
          </div>
          <div className="col">
            <h5 class="icon-title">
              <FaShoppingCart className="icons me-2 mb-1" />
              30 DAYS RETURN
            </h5>
            <p class="icon-caption">
              This can easily help you to
              <br />
              grow up your business fast
            </p>
          </div>
          <div className="col">
            <h5 class="icon-title">Easy to Operate</h5>
            <p class="icon-caption">
              This can easily help you to
              <br />
              grow up your business fast
            </p>
          </div>
          <div className="col">
            <h5 class="icon-title">Easy to Operate</h5>
            <p class="icon-caption">
              This can easily help you to
              <br />
              grow up your business fast
            </p>
          </div>
        </div>
    </>
  );
};

export default Content;
