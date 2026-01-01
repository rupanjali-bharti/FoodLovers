import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm px-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-3 text-primary" to="/">
          Food<span className="text-success">Lovers</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center text-center">
            <li className="nav-item mx-2">
              <Link className="nav-link fw-semibold" to="/">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link fw-semibold" to="/view">View Recipes</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link fw-semibold" to="/search">Search Recipe</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link fw-semibold" to="/add">Add Recipe</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link fw-semibold" to="/delete">Delete Recipe</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
