import React from "react";
import Hero1 from "../assets/images/hero-1.png"

const Products = () => {
  return (
    <section id="about" class="about section-bg">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div
            class="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3>Luxury Defined By Style, Not Price.</h3>
            <p className="mt-4 p-1 lh-1">
              Moissanites are lab-grown gemstones, crafted by the most skilled
              hands to create a sparkle that is a class of its own.
              <br />
              <br />
              Every piece of moissanite comes with a certification as a
              testament to its quality. This gemstone is also durable, second
              only to diamonds in terms of hardness. Hence, your fine jewellery
              pieces from Le Diamonds cannot be easily scratched and keep their
              fire well. Due to its hardness, we are also able to create
              dazzling cuts that will shine brightly on you.
              <br />
              <br />
              Our attention to quality and detail ensures that all our
              moissanite jewellery is a work of art that you can be proud to
              wear.
            </p>
          </div>
          <div class="col-lg-6 m-1" data-aos="fade-right" data-aos-delay="100">
            <img src={Hero1} class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
