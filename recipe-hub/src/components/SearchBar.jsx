import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!input.trim()) return;
        onSearch(input);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <input
            type="text"
            placeholder="Search recipes..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
        </form>
    );
};

export default SearchBar;