import React from "react";
import product1 from "../assets/images/product-1.png";
import product2 from "../assets/images/product-2.png";
import product3 from "../assets/images/product-3.png";

const Category = () => {
  return (
    <>
      <div class="d-flex flex-column bd-highlight justify-content-center text-center mb-3 p-5">
        <div class="p-2 pb-0 bd-highlight">
          <div class="row">
            <div class="col-md-6 text-start cat-1">
              <img src={product1} />
            </div>
            <div class="col-6 col-md-6">
              <div class="row">
                <div class="col cat-2">
                  <img src={product2} />
                </div> 
                <div class="col cat-3">
                  <img src={product3} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-2 bd-highlight">
          <div class="row">
            <div class="col cat-3">1 of 3</div>
            <div class="col-6 cat-4">2 of 3 (wider)</div>
            <div class="col cat-1">3 of 3</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;