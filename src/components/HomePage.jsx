import { useEffect, useState } from "react";
import { fetchRecipes } from "../services/spoonacular";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    const getRecipes = async (query = "chicken") => {
        setLoading(true);
        const data = await fetchRecipes(query);
        setRecipes(data);
        setLoading(false);
    };

    useEffect(() => {
        const loadRecipes = async () => {
            setLoading(true);
            const data = await fetchRecipes("chicken");
            setRecipes(data);
            setLoading(false);
        };
        loadRecipes();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <SearchBar onSearch={getRecipes} />
            {loading ? (
                <p className="text-center mt-10">Loading recipes...</p>
            ): (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {recipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            )}
        </div>
    );
    
};

export default HomePage;