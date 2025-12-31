import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // optional for animations

const ViewRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    type: "Veg",
  });

  // Fetch all recipes on component mount
  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/recipes");
      setRecipes(res.data);
    } catch (err) {
      console.error("Error fetching recipes:", err);
    }
  };

  const handleEditClick = (recipe) => {
    setEditingRecipe(recipe);
    setUpdatedData({
      name: recipe.name,
      ingredients: Array.isArray(recipe.ingredients)
        ? recipe.ingredients.join(", ")
        : recipe.ingredients,
      instructions: recipe.instructions,
      type: recipe.type || "Veg",
    });
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const ingredientsArray = updatedData.ingredients
        .split(",")
        .map((i) => i.trim());

      await axios.put(
        `http://localhost:5000/api/recipes/${editingRecipe._id}`,
        { ...updatedData, ingredients: ingredientsArray }
      );

      alert("✅ Recipe updated successfully!");
      setEditingRecipe(null);
      fetchRecipes(); // refresh data
    } catch (err) {
      console.error("Error updating recipe:", err);
      alert("❌ Failed to update recipe.");
    }
  };

  return (
    <div className="container-fluid mt-5">
      <h2 className="text-center mb-5 fw-bold text-primary">
        🍳 Delicious Recipes
      </h2>

      <div className="row justify-content-center">
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <div
              key={recipe._id}
              className="col-md-4 col-sm-6 mb-4 animate-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card border-0 shadow-lg rounded-4 hover-scale h-100">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h4 className="card-title text-success fw-bold mb-3 d-flex justify-content-between align-items-center">
                      {recipe.name}
                      <span
                        className={`badge ${
                          recipe.type === "Veg" ? "bg-success" : "bg-danger"
                        }`}
                      >
                        {recipe.type}
                      </span>
                    </h4>

                    <p className="card-text">
                      <strong>Ingredients:</strong>
                      <ul>
                        {Array.isArray(recipe.ingredients)
                          ? recipe.ingredients.map((ing, i) => (
                              <li key={i}>{ing}</li>
                            ))
                          : recipe.ingredients}
                      </ul>
                    </p>

                    <p className="card-text">
                      <strong>Instructions:</strong> <br />
                      {recipe.instructions}
                    </p>
                  </div>

                  <button
                    className="btn btn-outline-primary mt-3"
                    onClick={() => handleEditClick(recipe)}
                  >
                    ✏️ Edit
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted fs-5">No recipes found.</p>
        )}
      </div>

      {/* 🧾 Edit Modal */}
      {editingRecipe && (
        <div className="modal show fade d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content p-3 rounded-4 shadow">
              <div className="modal-header border-0">
                <h5 className="modal-title text-primary fw-bold">
                  Edit Recipe
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setEditingRecipe(null)}
                ></button>
              </div>

              <div className="modal-body">
                <form onSubmit={handleUpdateSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={updatedData.name}
                      onChange={handleUpdateChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Ingredients (comma separated)
                    </label>
                    <textarea
                      className="form-control"
                      name="ingredients"
                      value={updatedData.ingredients}
                      onChange={handleUpdateChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Instructions
                    </label>
                    <textarea
                      className="form-control"
                      name="instructions"
                      value={updatedData.instructions}
                      onChange={handleUpdateChange}
                      required
                    />
                  </div>

                  {/* 👇 Veg / Non-Veg dropdown added */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Type</label>
                    <select
                      className="form-select"
                      name="type"
                      value={updatedData.type}
                      onChange={handleUpdateChange}
                      required
                    >
                      <option value="Veg">Veg</option>
                      <option value="Non-Veg">Non-Veg</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-success w-100">
                    💾 Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewRecipes;
