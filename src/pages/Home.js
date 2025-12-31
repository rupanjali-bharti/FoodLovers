import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import food from "../images/food.jpg";

const Home = () => {
  return (
    <div className="home-container min-vh-100">

      {/* Full-Width Hero Section */}
      <div className="hero-section d-flex flex-wrap align-items-center justify-content-between w-100 px-5 py-5">
        <div className="text-section col-12 col-md-6 pe-md-5">
          <h1 className="fw-bold mb-4 display-4 text-dark">
            Learn. Cook. Share. <br />
            <span className="text-primary">Cooking Made Easy.</span>
          </h1>
          <p className="fs-5 text-secondary mb-4">
            Say goodbye to long and frustrating food blogs. Access beautiful
            recipe cards to prepare any dish in minutes — all in one place.
          </p>
          <a href="/view" className="btn btn-primary btn-lg px-4 shadow-sm">
            🍽 Browse Dishes
          </a>
        </div>

        <div className="image-section col-12 col-md-5 text-center mt-4 mt-md-0">
          <img
            src={food}
            alt="Delicious food"
            className="img-fluid rounded-circle shadow-lg hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
