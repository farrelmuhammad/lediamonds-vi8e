import React from "react";
import Blog1 from "../assets/images/blog-1.png";
import Blog2 from "../assets/images/blog-2.png";
import Blog3 from "../assets/images/blog-3.png";
import Blog4 from "../assets/images/blog-4.png";

const Blogs = () => {
  return (
    <>
      <div className="text-center mt-3 mb-4">
        <h3 className="text-title-blog">Recent Blogs</h3>
      </div>
      <div class="d-flex flex-row justify-content-center mb-3">
        <div class="p-2 bd-highlight">
          <div class="card" style={{ width: "18rem" }}>
            <img src={Blog1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">CAN MOISSANITE BE YOUR NEXT ‘SUPERSTAR’ JEWELRY STONE?</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="p-2 bd-highlight">
          <div class="card" style={{ width: "18rem" }}>
            <img src={Blog2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="p-2 bd-highlight">
          <div class="card" style={{ width: "18rem" }}>
            <img src={Blog3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="p-2 bd-highlight">
          <div class="card" style={{ width: "18rem" }}>
            <img src={Blog4} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
