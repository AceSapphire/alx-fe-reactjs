import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Recipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Fetch the data.json file from public folder
        fetch("/data.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to load data.json");
                }
                return response.json();
            })
            .then((data) => setRecipes(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="flex justify-between flex-col items-center gap-4">
            <div className="flex justify-between items-center px-10 py-4 gap-20">
                <h1 className="text-4xl text-blue-500 font-bold">Recipes</h1>
                <Link to="/add-recipe" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Add Recipe
                </Link>
            </div>
            <ul className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4">
                {recipes.map((recipe) => (
                    <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
                        <li className="rounded-md shadow-md px-10 py-14 hover:shadow-2xl" key={recipe.id}>
                            <h2 className="text-xl">{recipe.title}</h2>
                            <p>{recipe.summary}</p>
                            <img src={recipe.image} alt={recipe.title} />
                        </li>
                    </Link>
                ))}
            </ul>
        </div >
    );
}

export default Recipes;
