import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Apps from "./components/apps";
import Footer from "./components/footer";
import About from "./components/about";
import Features from "./components/features";

function App() {
  const [page, setPage] = useState("home");
  if (page === "home") {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.9/typed.min.js"></script>

        <Navbar page={page} setPage={setPage} />
        <Carousel />
        <div className="bg-light rounded-pill border mt-3">
          <h3 className="text-dark">Some Of My Sites</h3>
        </div>
        <Apps />
        <Footer />
      </div>
    );
  } else if (page === "about") {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.9/typed.min.js"></script>

        <Navbar page={page} setPage={setPage} />
        <About />
        <Footer />
      </div>
    );
  } else if (page === "features") {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.9/typed.min.js"></script>

        <Navbar page={page} setPage={setPage} />
        <Features />
        <Footer />
      </div>
    );
  } else if (page === "pricing") {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.9/typed.min.js"></script>

        <Navbar page={page} setPage={setPage} />
      </div>
    );
  }
}

export default App;
