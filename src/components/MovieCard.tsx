import { Movie } from "../types/Movie"

interface MovieCardProps {
    movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {

    const { title, poster_path, vote_average, overview } = movie;

    return (
        <div>
            <img 
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={`${title} poster`}
                className="w-full h-72 object-cover"/>
            <div className="text-left">
                <p className="text-xl font-bold mt-4 line-clamp-1">{title}</p>
                <p className="text-lg text-cyan-900 mt-1">Mystery, {vote_average.toFixed(1)}</p>
                <p className="mt-4 text-neutral-700 line-clamp-3">{overview}</p>
            </div>
        </div>
    )
}