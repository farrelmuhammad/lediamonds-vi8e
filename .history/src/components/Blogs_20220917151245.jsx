import React from "react";

const Blogs = () => {
  return (
    <>
      <div class="d-flex justify-content-center">
        <div className="text-center">
          <h3 className="text-title-blog">Recent Blogs</h3>
        </div>
        <div class="row row-cols-4">
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
