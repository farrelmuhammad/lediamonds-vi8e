import React from "react";

const Blogs = () => {
  return (
    <>
      <div className="text-center">
        <h3 className="text-title-blog">Recent Blogs</h3>
      </div>
      <div class="d-flex flex-row justify-content-center mb-3">
        <div class="p-2 bd-highlight">
          <div class="card" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="p-2 bd-highlight">
          <div class="card" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="p-2 bd-highlight">Flex item 3</div>
        <div class="p-2 bd-highlight">Flex item 3</div>
      </div>
    </>
  );
};

export default Blogs;
