import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddRecipe from './pages/AddRecipe';
import ViewRecipes from './pages/ViewRecipes';
import DeleteRecipe from './pages/DeleteRecipe';
import SearchRecipe from './pages/SearchRecipe';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/view" element={<ViewRecipes />} />
        <Route path="/delete" element={<DeleteRecipe />} />
        <Route path="/search" element={<SearchRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
