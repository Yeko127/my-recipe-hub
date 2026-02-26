import { Link } from "react-router-dom";

const Header = () => (
        <header className="bg-green-600 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">RecipeHub</h1>
          <nav className="space-x-8">
            <Link to="/">Home</Link>
            <Link to="/add-recipe">Add Recipe</Link>
          </nav>
        </header>
);

export default Header;