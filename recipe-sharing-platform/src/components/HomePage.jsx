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
        <div className="flex justify-center items-center">
            <h1>Recipes</h1>
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
