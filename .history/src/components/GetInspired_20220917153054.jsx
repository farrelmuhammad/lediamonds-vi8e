import React from "react";

const GetInspired = () => {
  return (
    <>
      <div className="text-center mt-3 mb-4">
        <h3 className="text-title-blog">Recent Blogs</h3>
      </div>
      <div class="d-flex flex-row justify-content-center mb-3">
        <div class="p-2 bd-highlight">
          <div class="card" style={{ width: "310.22px" }}>
            {/* <img src={Blog1} class="card-img-top" alt="..." /> */}
          </div>
        </div>
        <div class="p-2 bd-highlight">
          <div class="card" style={{ width: "310.22px" }}>
            {/* <img src={Blog2} class="card-img-top" alt="..." /> */}
          </div>
        </div>
        <div class="p-2 bd-highlight">
          <div class="card" style={{ width: "310.22px" }}>
            {/* <img src={Blog3} class="card-img-top" alt="..." /> */}
          </div>
        </div>
        <div class="p-2 bd-highlight">
          <div class="card" style={{ width: "310.22px" }}>
            {/* <img src={Blog4} class="card-img-top" alt="..." /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInspired;
