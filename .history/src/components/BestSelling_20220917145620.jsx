import React from "react";

const product = [
  {
    id: "1",
    title: "STÉPHANE",
    price: "$866.00 - $994.00"
  },
  {
    id: "2",
    title: "ANDRÉE",
    price: "$943.00 - $1,186.00"
  },
];

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
              {product.map((d) => {
                return (
                  <div class="col p-1 me-2 mb-2 card-product">
                    <img src={d.image} alt="kosong" />
                    <div className="text-product">
                      <p>{d.title}</p>
                      <p>{d.price}</p>
                    </div>
                  </div>
                );
              })*2}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSelling;
