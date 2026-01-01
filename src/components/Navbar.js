import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to track if the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <Link className="navbar-brand fw-bold fs-3 text-primary" to="/">
        Food<span className="text-success">Lovers</span>
      </Link>

      {/* Toggle Button for Mobile */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu} // React Click Event
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Links - The "show" class is added conditionally based on state */}
      <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav align-items-center">
          <li className="nav-item mx-2">
            <Link className="nav-link fw-semibold" to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link fw-semibold" to="/view" onClick={() => setIsOpen(false)}>View Recipes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-semibold" to="/search" onClick={() => setIsOpen(false)}>Search Recipe</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link fw-semibold" to="/add" onClick={() => setIsOpen(false)}>Add Recipe</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link fw-semibold" to="/delete" onClick={() => setIsOpen(false)}>Delete Recipe</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;