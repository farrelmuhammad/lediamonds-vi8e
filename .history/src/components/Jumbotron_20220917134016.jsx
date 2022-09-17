import React from "react";

const Jumbotron = () => {
  return (
    <>
      <section id="hero" class="d-flex align-items-center">
        <div class="container">
          <h1>
            Welcome to <span>BizLand</span>
          </h1>
          <h2>
            We are team of talented designers making websites with Bootstrap
          </h2>
          <div class="d-flex">
            <a href="#about" class="btn-get-started scrollto">
              Get Started
            </a>
            <a
              href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
              class="glightbox btn-watch-video"
            >
              <i class="bi bi-play-circle"></i>
              <span>Watch Video</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jumbotron;
