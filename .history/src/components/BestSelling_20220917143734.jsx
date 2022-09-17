import React from "react";

const BestSelling = () => {
  return (
    <>
      <div class="d-flex bd-highlight justify-content-center best-sell">
        <div class="p-2 bd-highlight left-col">
          <div className="text-best-sell">
            <p>our Best Selling Products</p>
            <div class="d-flex button-hero">
              <a href="#about" class="btn text-white">
                SHOP COLLECTIONS
              </a>
            </div>
          </div>
        </div>
        <div class="p-0 ms-2 flex-grow-1 bd-highlight">
          <div class="container">
            <div class="row row-cols-4">
              <div class="col me-0 card-product">Column</div>
              <div class="col me-1 card-product">Column</div>
              <div class="col me-1 card-product">Column</div>
              <div class="col me-1 card-product">Column</div>
              <div class="col me-1 card-product">Column</div>
              <div class="col me-1 card-product">Column</div>
              <div class="col me-1 card-product">Column</div>
              <div class="col me-1 card-product">Column</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSelling;
