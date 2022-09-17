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
          <div class="card" style={{ width: "310.22px" }}>
            <img src={Blog1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-title">
                CAN MOISSANITE BE YOUR NEXT ‘SUPERSTAR’ JEWELRY STONE?
              </h6>
              <p class="card-text">
                In a world where diamonds are the traditional choice most
                especially when buying an engagement ring..
              </p>
            </div>
          </div>
        </div>
        <div class="p-2 bd-highlight">
          <div class="card" style={{ width: "310.22px" }}>
            <img src={Blog2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-title">
                IS MOISSANITE MORE VALUABLE THAN A DIAMOND?
              </h6>
              <p class="card-text">
                Are you a bride-to-be? Or are you that individual who is a
                jewelry lover? No matter what the case is..
              </p>
            </div>
          </div>
        </div>
        <div class="p-2 bd-highlight">
          <div class="card" style={{ width: "310.22px" }}>
            <img src={Blog3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-title">
                ENGAGEMENT RING MOISSANITE SINGAPORE BUYING GUIDE
              </h6>
              <p class="card-text">
                The setting of your Moissanite rings is as unique as your
                personality. If you’re looking for an..
              </p>
            </div>
          </div>
        </div>
        <div class="p-2 bd-highlight">
          <div class="card" style={{ width: "310.22px" }}>
            <img src={Blog4} class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-title">LUXURY DEFINED BY STYLE, NOT PRICE.</h6>
              <p class="card-text">
                Moissanites are lab-grown gemstones, crafted by the most skilled
                hands to create a sparkle that is..
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
