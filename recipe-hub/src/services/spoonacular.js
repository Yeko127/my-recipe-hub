import axios from "axios";

const API_KEY ="c7d28ce8bea347e0ac13496ffb60e0e5";
const BASE_URL = "https://api.spoonacular.com/recipes";

export const fetchRecipes = async (query = "pasta") => {
    try {
        const response = await axios.get(`${BASE_URL}/complexSearch`, {
            params: {
                apiKey: API_KEY,
                query,
                number: 12,
            },
        });
        return response.data.results;
    } catch (error) {
        console.error("Error fetching recipes", error);
        return [];
    }
    
};

export const fetchRecipeById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}/information`, {
            params: { apiKey: API_KEY },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching recipe details:", error);
        return null;
    }
};