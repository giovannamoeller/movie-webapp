import { useEffect, useState } from "react";
import { Movie } from "../types/Movie";
import { getPopularMovies } from "../services/movieApiService";

export function MovieList() {

    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async() => {
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
        }
        fetchMovies();
    }, []);
    
    return (
        <div>
            <h1 className="text-4xl	font-semibold">Popular Movies</h1>
            <p className="text-xl text-gray-500 mt-2">Find out what's trending in the world of cinema.</p>
        </div>
    )
}