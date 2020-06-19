import React from "react";
import Img33 from "../images/img13.jpg";

function Carousel() {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={Img33} class="d-block w-100" height="360px" alt="..." />
          <div class="carousel-caption d-block text-dark">
            <h4>R-Company</h4>
            <p>You Demand We Do!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
