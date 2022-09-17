import React from "react";
import product1 from "../assets/images/product-1.png";

const Category = () => {
  return (
    <>
      <div class="d-flex flex-column bd-highlight justify-content-center text-center mb-3 p-5">
        <div class="p-2 bd-highlight">
          <div class="row">
            <div class="col-md-8 text-start cat-1">
              <img src={product1} />
            </div>
            <div class="col-6 col-md-4">
              <div class="row">
                <div class="col">1 of 2</div>
                <div class="col">2 of 2</div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-2 bd-highlight">
          <div class="row">
            <div class="col">1 of 3</div>
            <div class="col-6">2 of 3 (wider)</div>
            <div class="col">3 of 3</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
