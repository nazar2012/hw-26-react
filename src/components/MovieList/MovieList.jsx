import { Link, useLocation } from "react-router-dom"
import css from "./MovieList.module.css"

function MovieList({ movies }) {
    const location = useLocation()

    return (
        <ul className={css.list}>
            {movies.map((movie) => {
                return (
                    <li className={css.item} key={movie.id}>
                        <Link
                            className={css.link}
                            state={location}
                            to={`/movies/${movie.id}`}
                        >
                            {movie.poster_path ? (
                                <img
                                    className={css.poster}
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    alt={movie.title}
                                />
                            ) : (
                                <div className={css.noImage}>
                                    No image
                                </div>
                            )}

                            <h2 className={css.title}>{movie.title}</h2>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default MovieList