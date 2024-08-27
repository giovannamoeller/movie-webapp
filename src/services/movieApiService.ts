import axios from "axios";
import { tmdbApiKey } from "../keys/tmdb_api_key";
import { Movie } from "../types/Movie";

const apiKey: string = tmdbApiKey;
const baseUrl: string = 'https://api.themoviedb.org/3';

export const getPopularMovies = async (): Promise<Movie[]> => {
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
        return [];
    };
};