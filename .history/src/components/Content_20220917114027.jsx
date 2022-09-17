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
      <div className="row d-flex justify-content-center text-center p-5 m-5 content">
        <div className="col">
          <h5 class="icon-title">
            <FaTruck className="icons me-2 mb-1" />
            FREE DELIVERY
          </h5>
          <p class="icon-caption ms-4 ps-1">For orders over $199</p>
        </div>
        <div className="col">
          <h5 class="icon-title">
            <FaHandshake className="icons me-2 mb-1" />
            30 DAYS RETURN
          </h5>
          <p class="icon-caption ms-4 ps-1">No questions asked</p>
        </div>
        <div className="col">
          <h5 class="icon-title">
            <FaHandHoldingHeart className="icons me-2 mb-1" />
            ETHICALLY MADE
          </h5>
          <p class="icon-caption ms-4 ps-1">From sustainable sources</p>
        </div>
        <div className="col">
          <h5 class="icon-title">
            <FaCreditCard className="icons me-2 mb-1" />
            SECURE PAYMENTS
          </h5>
          <p class="icon-caption ms-4 ps-1 ms-4 ps-1">For a seamless checkout</p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Content;
