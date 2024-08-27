 import { useEffect, useState } from "react";
import { Movie } from "../types/Movie";
import { getPopularMovies } from "../services/movieApiService";
import { MovieCard } from "./MovieCard";
import { Modal } from "./Modal";

export function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    useEffect(() => {
        const fetchMovies = async() => {
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
        }
        fetchMovies();
    }, []);

    function handleMovieCardClick(movie: Movie) {
        setSelectedMovie(movie);
        setIsModalOpen(true);
    };
    
    return (
        <div>
            <h1 className="text-4xl	font-semibold">Popular Movies</h1>
            <p className="text-xl text-gray-500 mt-2">Find out what's trending in the world of cinema.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
                {movies.map((movie: Movie) => (
                    <MovieCard key={movie.id} movie={movie} onSelect={() => handleMovieCardClick(movie)}/>
                ))}
            </div>

            <Modal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}>
                {selectedMovie && (
                    <div>
                        <h2 className="text-3xl font-bold">{selectedMovie.title}</h2>
                    </div>
                )}
            </Modal>
        </div>
    );
};