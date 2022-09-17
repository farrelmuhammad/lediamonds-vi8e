import React from "react";

const Category = () => {
  return (
    <>
      <div class="d-flex flex-column bd-highlight justify-content-center mb-3 p-5">
        <div class="p-2 bd-highlight">
          <div class="row">
            <div class="col-md-8">.col-md-8</div>
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
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
