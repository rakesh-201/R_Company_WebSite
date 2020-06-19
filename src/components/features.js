import React, { useState } from "react";

function Features() {
  const [click, setClick] = useState(5);
  return (
    <>
      <div className="container-fluid bg-light my-3 rounded-pill border">
        <h2>Our Key Features</h2>
      </div>
      <div className="container mb-5">
        <div
          className={`border-dark  ${
            click === 0 ? "bg-danger text-light" : null
          }`}
          onMouseOver={() => setClick(0)}
          onMouseOut={() => setClick(5)}
        >
          <h4>Best Developers</h4>
        </div>
        <div
          className={`border-dark  ${
            click === 1 ? "bg-primary text-light" : null
          }`}
          onMouseOver={() => setClick(1)}
          onMouseOut={() => setClick(5)}
        >
          <h4>Deadline Will Be Fixed By The Client</h4>
        </div>
        <div
          className={`border-dark  ${
            click === 2 ? "bg-warning text-light" : null
          }`}
          onMouseOver={() => setClick(2)}
          onMouseOut={() => setClick(5)}
        >
          <h4>Site Will Be Delievered Before Deadline</h4>
        </div>
        <div
          className={`border-dark  ${
            click === 3 ? "bg-success text-light" : null
          }`}
          onMouseOver={() => setClick(3)}
          onMouseOut={() => setClick(5)}
        >
          <h4>
            Client Can Decide The Programming Language Used For The Backend
          </h4>
        </div>
        <div
          className={`border-dark  ${click === 4 ? "text-light s4" : null}`}
          onMouseOver={() => setClick(4)}
          onMouseOut={() => setClick(5)}
        >
          <h4>Order Can Be Placed Online</h4>
        </div>
      </div>
    </>
  );
}

export default Features;
