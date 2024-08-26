 import { useEffect, useState } from "react";
import { Movie } from "../types/Movie";
import { getPopularMovies } from "../services/movieApiService";
import { MovieCard } from "./MovieCard";

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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
                {movies.map((movie: Movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    )
}