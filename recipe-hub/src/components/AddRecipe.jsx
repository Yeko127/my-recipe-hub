import { useState } from "react";

const AddRecipe = () => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!title || !ingredients || !instructions) return;

        console.log({ title, ingredients, instructions });
        setSuccess(true);

        //clear form
        setTitle("");
        setIngredients("");
        setInstructions("");
    };

    return(
        <div className="container mx-auto p-4 max-w-2xl">
            <h1 className="text-3xl font-bold mb-6 text-center">Add a new recipe</h1>
            {success && (
                <p className="bg-green-200 text-green-800 p-2 mb-4 rounded text-center">Recipe added successfully</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 font-semibold">Recipe Title</label>
                    <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Enter recipe title"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Ingredients</label>
                    <textarea
                    value={ingredients}
                    onChange={(event) => setIngredients(event.target.value)}
                    className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="List ingredients separated by commas"
                    rows={4}
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Instructions</label>
                    <textarea
                    value={instructions}
                    onChange={(event) => setInstructions(event.target.value)}
                    className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Enter preparation steps"
                    rows={6}
                    />
                </div>

                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition w-full">
                    Add Recipe
                </button>

            </form>
        </div>
    );
};

export default AddRecipe;