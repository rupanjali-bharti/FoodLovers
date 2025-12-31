import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddRecipe = () => {
  const [form, setForm] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    type: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert ingredients to array
      const ingredientArray = form.ingredients
        .split(',')
        .map((item) => item.trim())
        .filter((item) => item);

      // Send to backend
      await axios.post('http://localhost:5000/api/recipes', {
        name: form.name,
        ingredients: ingredientArray,
        instructions: form.instructions,
        type: form.type,
      });

      alert('✅ Recipe added successfully!');

      // Reset form
      setForm({ name: '', ingredients: '', instructions: '' ,type: ''});
    } catch (err) {
      console.error('❌ Error adding recipe:', err);
      alert('Failed to add recipe.');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h2 className="text-center mb-4 text-primary fw-bold">Add a New Recipe</h2>

      <form onSubmit={handleSubmit} className="p-4 border rounded-4 shadow bg-light">
        <div className="mb-3">
          <label className="form-label fw-semibold">Recipe Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Ingredients (comma-separated)</label>
          <textarea
            className="form-control"
            name="ingredients"
            rows="2"
            placeholder="e.g., sugar, salt, butter"
            value={form.ingredients}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Instructions</label>
          <textarea
            className="form-control"
            name="instructions"
            rows="4"
            value={form.instructions}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Type</label>
          <select
            className="form-select"
            name="type"
            value={form.type}
            onChange={handleChange}
            required
          >
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success w-100 fw-bold">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
