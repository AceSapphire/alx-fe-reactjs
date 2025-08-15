import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to load recipe data");
                }
                return response.json();
            })
            .then((data) => {
                const foundRecipe = data.find(
                    (item) => item.id === parseInt(id, 10)
                );
                setRecipe(foundRecipe);
            })
            .catch((error) => console.error(error));
    }, [id]);

    if (!recipe) {
        return <p>Loading recipe details...</p>;
    }

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-72 rounded-lg mb-6"
            />
            <p className="mb-6">
                <span className="font-semibold">Summary:</span> {recipe.summary}
            </p>

            <h3 className="text-2xl font-semibold mb-2">Ingredients</h3>
            <ul className="list-disc list-inside mb-6 space-y-1">
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <h3 className="text-2xl font-semibold mb-2">Instructions</h3>
            <ol className="list-decimal list-inside space-y-2">
                {recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </div>

    );
}

export default RecipeDetail;
