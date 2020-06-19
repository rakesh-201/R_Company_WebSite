import React from "react";
import Img11 from "../images/img14.jpg";

const css = {
  backgroundImage: `${Img11}`,
};

function About() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Img11} class="d-block w-100" height="360px" alt="..." />
            <div class="carousel-caption d-block text-dark">
              <h4>R-Company</h4>
              <p>You Demand We Do!</p>
            </div>
          </div>
        </div>
      </div>
      <div class="jumbotron jumbotron-fluid my-3">
        <div class="container">
          <p class="lead">
            R_Company is a Company owned and runned by Mrs. Rakesh B Rajpurohit.
            <br />
            This Company makes Web Applications for Clients. <br />
            The Company has made over 7 Web App.
            <br />
            R_Company has probabily the best developers.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
