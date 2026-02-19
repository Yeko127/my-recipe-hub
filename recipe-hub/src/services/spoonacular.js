import axios from "axios";

const api = axios.create({
    baseURL: "https://api.spoonacular.com",
    params: {
        apiKey: import.meta.env.VITE_SPOONACULAR_API_KEY,
    },
});

export const searchRecipes = async (query = "") => {
    const response = await api.get("/recipes/complexSearch", {
        params: {
            query,
            number: 12,
            addRecipeInformation: true,
        },
    });
    return response;
};
export const getRecipeDetails = async (id) => {
    const response = await api.get(`/recipes/${id}/information`);
    return response;
};