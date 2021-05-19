import React,{useEffect, useState} from "react";
import './App.css';
import Recipe from "./Components/Recipe"

const App = () =>{

  const APP_ID = "f0098430";
  const APP_KEY = "ff7260cb136f5f2875134f617733a93b	";

  const[recipes, setRecipes] = useState([]);
  const[search, setSearch] = useState('');
  const[query, setQuery] = useState('chicken');

  useEffect(() => {
      getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return(
    <div className="App">
      <h1>Recipe App</h1>
       <form onSubmit={getSearch} className="search">
         <input type="text" className="search-input" value={search} onChange={updateSearch}/>
         <button className="search-button" type="submit">Search</button>
       </form>
       <div className="recipes">
       {recipes.map(recipe => (
         <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
         />
       ))}
       </div>

    </div>
  )
}
export default App;
