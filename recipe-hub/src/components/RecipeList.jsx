import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
    if (!recipes.length) {
        return <p className="text-gray-500">No recipes found.</p>
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
};

export default RecipeList;