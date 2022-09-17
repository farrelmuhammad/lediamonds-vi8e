import React from "react";
import product1 from "../assets/images/product-5.png"
import product2 from "../assets/images/product-2.png"

const BestSelling = () => {
  return (
    <>
      <div class="d-flex justify-content-center mb-3">
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
            <div class="row row-cols-5">
              <div class="col p-1 me-2 mb-2 card-product">
                <img src={product1} alt="product 1" />
                <div className="text-product text-center">
                  <p>STÉPHANE</p>
                  <p>$866.00 - $994.00</p>
                </div>
              </div>
              <div class="col p-1 me-2 mb-2 card-product">
                <img src={product2} alt="product 2" />
                <div className="text-product text-center">
                  <p>ANDRÉE</p>
                  <p>$943.00 - $1,186.00</p>
                </div>
              </div>
              <div class="col p-1 me-2 mb-2 card-product">
                <img src="" alt="product 3" />
                <div className="text-product">
                  <p>asdsad</p>
                  <p>asdsad</p>
                </div>
              </div>
              <div class="col p-1 me-2 mb-2 card-product">
                <img src="" alt="product 4" />
                <div className="text-product">
                  <p>asdsad</p>
                  <p>asdsad</p>
                </div>
              </div>
              <div class="col p-1 me-2 mb-2 card-product">
                <img src="" alt="product 5" />
                <div className="text-product">
                  <p>asdsad</p>
                  <p>asdsad</p>
                </div>
              </div>
              <div class="col p-1 me-2 mb-2 card-product">
                <img src="" alt="product 6" />
                <div className="text-product">
                  <p>asdsad</p>
                  <p>asdsad</p>
                </div>
              </div>
              <div class="col p-1 me-2 mb-2 card-product">
                <img src="" alt="product 7" />
                <div className="text-product">
                  <p>asdsad</p>
                  <p>asdsad</p>
                </div>
              </div>
              <div class="col p-1 me-2 mb-2 card-product">
                <img src="" alt="product 8" />
                <div className="text-product">
                  <p>asdsad</p>
                  <p>asdsad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSelling;
