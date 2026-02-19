import { useEffect, useState } from "react";
import { searchRecipes } from "../services/spoonacular";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList"
import Loader from "../components/Loader"
import ErrorMessage from "../components/ErrorMessage"

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchRecipes = async (searchTerm = "") => {
        try {
            setLoading(true);
            setError(null);

            const data = await searchRecipes(searchTerm);
            setRecipes(data);
        } catch (error) {
            console.error(error);
            setError("Failed to fetch recipes. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    const handleSearch= (value) => {
        setQuery(value);
        fetchRecipes(value);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">RecipeHub</h1>
                <SearchBar onSearch={handleSearch} />
                {loading && <Loader />}
                {error && <ErrorMessage message={error} />}
                {!loading && !error && (
                <>
                    <h2 className="text-lg font-semibold mt-6 mb-4">{query
                        ? `Results for "${query}"`
                        : "Popular Recipes"}
                    </h2>
                    <RecipeList recipes={recipes} />
                </>
                )}
            </div>
        </div>
    )

}

export default HomePage;
