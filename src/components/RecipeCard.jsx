import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => (
    <div className="bg-gray-400 shadow-md rounded-lg overflow-hidden">
        {recipe.image && (
            <img 
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover"
            />
        )}
        <div className="p-4">
            <h2 className="font-bold text-lg mb-2">{recipe.title}</h2>
            <Link 
            to={`/recipe/${recipe.id}`}
            className="text-blue-600 hover:underline"
            >
                View Details
            </Link>
        </div>
    </div>
);
export default RecipeCard;