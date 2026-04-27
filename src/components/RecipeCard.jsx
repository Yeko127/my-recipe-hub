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
        <div>
            <button 
            onClick={() => navigate(-1)}
            className="flex items-center mb-6 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 transition-all duration-300"
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
        </div>
    </div>
);
export default RecipeCard;