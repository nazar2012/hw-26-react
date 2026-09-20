import { Link, useLocation } from "react-router-dom"

function MovieList({ movies }) {
    const location = useLocation()
    return (
        <ul>
            {movies.map((movie) => {
                return (
                    <li key={movie.id}>
                        <Link state={location} to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default MovieList