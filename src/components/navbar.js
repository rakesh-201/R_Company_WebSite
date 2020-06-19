import React from "react";

function Navbar(props) {
  const { page, setPage } = props;
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <a
          className="navbar-brand logo"
          onClick={() => setPage("home")}
          href="#"
        >
          R-Company
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className={`nav-item ${page === "home" ? "active" : null}`}>
              <a className="nav-link" onClick={() => setPage("home")}>
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className={`nav-item ${page === "about" ? "active" : null}`}>
              <a className="nav-link" onClick={() => setPage("about")}>
                About
              </a>
            </li>
            <li className={`nav-item ${page === "features" ? "active" : null}`}>
              <a className="nav-link" onClick={() => setPage("features")}>
                Features
              </a>
            </li>
            <li className={`nav-item ${page === "pricing" ? "active" : null}`}>
              <a className="nav-link" onClick={() => setPage("pricing")}>
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
