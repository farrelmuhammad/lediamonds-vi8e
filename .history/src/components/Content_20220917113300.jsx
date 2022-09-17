import React from "react";
import {
  FaTruck,
  FaHandshake,
  FaHandHoldingHeart,
  FaCreditCard,
} from "react-icons/fa";

const Content = () => {
  return (
    <>
      {/* <div className="d-flex justify-content-center"> */}
      <div className="row d-flex justify-content-center p-5 m-5">
        <div className="col">
          <h5 class="icon-title">
            <FaTruck className="icons me-2 mb-1" />
            FREE DELIVERY
          </h5>
          <p class="icon-caption">For orders over $199</p>
        </div>
        <div className="col">
          <h5 class="icon-title">
            <FaHandshake className="icons me-2 mb-1" />
            30 DAYS RETURN
          </h5>
          <p class="icon-caption">No questions asked</p>
        </div>
        <div className="col">
          <h5 class="icon-title">
            <FaHandHoldingHeart className="icons me-2 mb-1" />
            ETHICALLY MADE
          </h5>
          <p class="icon-caption">From sustainable sources</p>
        </div>
        <div className="col">
          <h5 class="icon-title">
            <FaCreditCard className="icons me-2 mb-1" />
            SECURE PAYMENTS
          </h5>
          <p class="icon-caption ms-3">For a seamless checkout</p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Content;
