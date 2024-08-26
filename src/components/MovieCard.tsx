import { Movie } from "../types/Movie"

/*interface MovieCardProps {
    movie: Movie;
}*/

export function MovieCard() {
    return (
        <div>
            <img 
                src="https://m.media-amazon.com/images/M/MV5BMzJiN2UyZjgtMjQ3MS00MDhhLTg5ZDItZmVjMTU3MTcwNzE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                alt="Trap movie poster"
                className="w-full h-72 object-cover"/>
            <div className="text-left">
                <p className="text-xl font-bold mt-4">Trap</p>
                <p className="text-lg text-cyan-900 mt-1">Mystery, 6.5</p>
                <p className="mt-4 text-neutral-700">Lead backend dev at Clearbit. Former Clearbit and Loom.</p>
            </div>
        </div>
    )
}