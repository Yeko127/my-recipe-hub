import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { getRecipeDetails } from "../services/spoonacular";
import ( getRecipeDetails) from "../services/spoonacular";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const RecipeDetails = () => {
    const {id } = useParams();
    const navigate = useNavigate();

    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] =useState(null);

    const fetchRecipe = async () => {
        try {
            setLoading(true);
            setError(null);

            const data = await getRecipeDetails(id);
            setRecipe(data.data);
        } catch (error) {
            console.error(error);
            setError("Failed to load recipe details.");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchRecipe();
    }, []);
    if (loading) return <Loader />;
    if (error) return <ErrorMessage />;
    if (!recipe) return null;

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
            <div className="max-w-5xl mx-auto">
                <button onClick={() => navigate (-1)}
                 className="mb-6 text-gray-600 hover:underline"
                >
                  ← Back
                </button>
                <img 
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl mb-6"
                />

                <h1 className="text-2xl md:text-3xl font-bold mb-4">{recipe.title}</h1>
                <p className="text-gray-600 mb-6">{recipe.readyInMinutes} mins | 🍽 {recipe.servings} servings</p>

                <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
                <ul className="list-disc list-inside mb-6 space-y-1">
                    {recipe.extendIngredients.map((item) => (
                        <li key={item.id}>{item.original}</li>
                    ))}
                </ul>

                <h2 className="text-xl font-semibold mb-3">Instructions</h2>
                <div 
                className="space-y-3 text-gray-700"
                dangerouslySetInnerHTML={{__html: recipe.instructions}}
                />
            </div>
        </div>
    );
};

export default RecipeDetails;