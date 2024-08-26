import axios from "axios";
import { tmdbApiKey } from "../keys/tmdb_api_key";

const apiKey: string = tmdbApiKey
const baseUrl: string = 'https://api.themoviedb.org/3'

export const getPopularMovies = async () => {
    try {
        const response = await axios.get(
            `${baseUrl}/movie/popular`, {
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${apiKey}`
                }
            });
        return response.data.results;
    } catch (error) {
        console.error("Error fetching popular movies", error);
        //return [];
    }
};