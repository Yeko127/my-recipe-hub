import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchRecipeById } from "../services/spoonacular";

const RecipeDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getRecipe = async () => {
            const data =await fetchRecipeById(id);
            setRecipe(data);
            setLoading(false);
        };
        getRecipe();
    }, [id]);

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (!recipe) return <p className="text-center mt-10">Recipe not found</p>;

    return (
        <div className="container mx-auto p-4">
            <button 
            onClick={() => navigate(-1)}
            className="flex items-center mb-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-all duration-300"
            >
                <svg 
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                    <path 
                    fillRule="evenodd"
                    clipRule="evenodd"
                    />
                </svg>
                Back
            </button>
        <div className="container mx-auto p-48">
            <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
            {recipe.image && (
                <img src={recipe.image} alt={recipe.title} className="w-full max-w-lg mb-4" />
            )}
            <h2 className="font-bold text-xl mb-2">Ingredients</h2>
            <ul className="list-disc pl-6 mb-4">
                {recipe.extendedIngredients?.map((ing) => (
                    <li key={ing.id}>{ing.original}</li>
                ))}
            </ul>
            <h2 className="font-bold text-xl mb-2">Instructions</h2>
            <div dangerouslySetInnerHTML={{__html: recipe.instructions }} />
        </div>
        </div>
    );
};

export default RecipeDetails;