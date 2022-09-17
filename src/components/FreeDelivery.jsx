import React from "react";

const FreeDelivery = () => {
  return (
    <>
      <div className="stick-bar d-flex justify-content-center mt-5">
        <div class="row">
          <div class="col">
            <div className="text-bar text-white">
              <h3>FREE DELIVERY</h3>
            </div>
          </div>
          <div class="col">
            <div className="bar"></div>
          </div>
          <div class="col">
            <div className="text-bar text-white">
              <p>For orders over $199</p>
            </div>
          </div>
          <div class="col">
            <div class="d-flex button-stickbar">
              <a href="#about" class="button">
                SHOP COLLECTIONS
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeDelivery;
