import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
    return (
        <Link to={`/recipe/${recipe.id}`}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
                />

                <div className="p-4">
                    <h3 className="text-md font-semibold mb-2 line-clamp-2">{recipe.title}</h3>

                    {recipe.readyInMinutes && (
                        <p className="text-sm text-gray-500">
                            ⏱ {recipe.readyInMinutes} mins
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default RecipeCard;