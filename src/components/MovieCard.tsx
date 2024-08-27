import { Movie } from "../types/Movie"
import { Genres } from "../types/Genre";

type MovieCardProps = {
    movie: Movie;
};

export function MovieCard({ movie }: MovieCardProps) {

    const { title, poster_path, vote_average, overview, genre_ids } = movie;

    function getGenre(maxGenres: number = 2): string {
        return genre_ids.slice(0, maxGenres).map(genreId => Genres[genreId]).join(', ');
    }

    return (
        <div>
            <img 
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={`${title} poster`}
                className="w-full h-72 object-cover object-top"/>
            <div className="text-left">
                <p className="text-xl font-bold mt-4 line-clamp-1">{title}</p>
                <p className="text-lg text-cyan-900 mt-1">{getGenre()}, {vote_average.toFixed(1)}</p>
                <p className="mt-4 text-neutral-700 line-clamp-3">{overview}</p>
            </div>
        </div>
    )
}