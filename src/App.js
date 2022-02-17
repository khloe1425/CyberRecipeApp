import { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

function App() {
  const APP_ID = "47d0a4b2";
  const APP_KEY = "1ffc4211fc608cf0f6e7d99063b428ef";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=${query}&app_id=47d0a4b2&app_key=1ffc4211fc608cf0f6e7d99063b428ef`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button">Search</button>
      </form>
      <div className="recipes">
        {recipes.slice(10).map((recipe) => {
          const {
            recipe: { label, calories, image, ingredients },
          } = recipe;
          return (
            <Recipe
              key={label}
              title={label}
              calories={calories}
              image={image}
              ingredients={ingredients}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
