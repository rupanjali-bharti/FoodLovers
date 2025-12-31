import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
        <a className="navbar-brand fw-bold fs-3 text-primary" href="/">
          Food<span className="text-success">Lovers</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item mx-2">
              <a className="nav-link fw-semibold" href="/">Home</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link fw-semibold" href="/view">View Recipes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/search">Search Recipe</a>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link fw-semibold" href="/add">Add Recipe</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link fw-semibold" href="/delete">Delete Recipe</a>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
