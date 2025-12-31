import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchRecipe = () => {
  const [type, setType] = useState("all");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      let url = "http://localhost:5000/api/recipes";
      if (type !== "all") url += `?type=${type}`;
      const res = await axios.get(url);
      setRecipes(res.data);
    } catch (err) {
      console.error("Error fetching recipes:", err);
      alert("Failed to fetch recipes");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid mt-5 px-5">
      <h2 className="text-center mb-5 text-primary fw-bold">
        🔍 Search Recipes by Type
      </h2>

      {/* Filter Section */}
      <div className="d-flex justify-content-center mb-4">
        <select
          className="form-select w-auto me-3"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="all">All Recipes</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
        </select>
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Results Section */}
      {loading ? (
        <div className="text-center mt-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : recipes.length > 0 ? (
        <div className="row justify-content-center">
          {recipes.map((recipe) => (
            <div key={recipe._id} className="col-md-4 col-sm-6 mb-4">
              <div className="card shadow-sm border-0 rounded-4 h-100 hover-scale">
                <div className="card-body">
                  <h4 className="card-title fw-bold text-success">
                    {recipe.name}{" "}
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
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted fs-5">
          No recipes found for this category.
        </p>
      )}
    </div>
  );
};

export default SearchRecipe;
