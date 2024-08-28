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
                    <div className="flex gap-16 p-8">
                        <div>
                            <img 
                                src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
                                className="rounded-md"/>
                        </div>
                        
                        <div className="max-w-md text-left">
                            <h2 className="text-4xl font-bold">{selectedMovie.title}</h2>
                            <p className="my-4 text-cyan-900 font-bold text-lg">{selectedMovie.release_date.slice(0, 4)} | {selectedMovie.vote_average.toFixed(1)}</p>
                            <p className="text-gray-600 text-lg">{selectedMovie.overview}</p>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};