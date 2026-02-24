const SearchBar = ({ onSearch }) => {
    return (
        <input
        type="text"
        placeholder="Search recipes..."
        className="border p-2 rounded mb-4 w-full"
        onKeyDown={(event) => {
            if (event.key === "Enter") {
                onSearch(event.target.value);
            }
        }}
        />
    );
};

export default SearchBar;