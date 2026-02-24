import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeById } from "../services/spoonacular";

const RecipeDetails = () => {
    const { id } = useParams();
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
    );
};

export default RecipeDetails;