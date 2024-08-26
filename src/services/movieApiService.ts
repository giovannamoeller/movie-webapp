import axios from "axios";

const apiKey: string = ''
const baseUrl: string = 'https://api.themoviedb.org/3'

export const getPopularMovies = async () => {
    try {
        const response = await axios.get(
            `${baseUrl}/movie/popular?api_key=${apiKey}`);
        return response.data.results;
    } catch (error) {
        console.error("Error fetching popular movies", error);
        //return [];
    }
};