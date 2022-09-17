import React from "react";

const Jumbotron = () => {
  return (
    <>
      <div class="container-hero">
        <div className="banner">
          <div className="row">
            <div className="col">
              <div className="line text-center m-2 p-0"></div>
            </div>
            <div className="col">
              <h5 className="text-banner-top ms-1">MORE THAN JUST JEWELLERY</h5>
            </div>
          </div>
          <h2>Elegance & Eternity.</h2>
          <p>FINELY CRAFTED LAB-GROWN MOISSANITE JEWELLERY</p>
          <div class="d-flex button-hero">
            <a href="#about" class="btn text-white text-center">
              SHOP COLLECTIONS
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
