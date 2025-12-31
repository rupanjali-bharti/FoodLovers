import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // For custom styles

const DeleteRecipe = () => {
  const [recipes, setRecipes] = useState([]);

  // Load recipes
  const loadRecipes = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/recipes');
      setRecipes(res.data);
    } catch (err) {
      console.error('Error fetching recipes:', err);
    }
  };

  useEffect(() => {
    loadRecipes();
  }, []);

  // Delete recipe
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/recipes/${id}`);
      alert('Recipe deleted successfully!');
      loadRecipes();
    } catch (err) {
      console.error('Error deleting recipe:', err);
    }
  };

  return (
    <div className="container delete-container mt-5">
      <h2 className="text-center text-danger fw-bold mb-4">🗑️ Delete Recipes</h2>

      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe._id} className="recipe-item shadow-sm">
            <h5 className="recipe-name mb-0">{recipe.name}</h5>
            <button
              onClick={() => handleDelete(recipe._id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-muted fs-5">No recipes found.</p>
      )}
    </div>
  );
};

export default DeleteRecipe;
