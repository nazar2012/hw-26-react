import { useParams, useLocation, NavLink, Link, Outlet } from "react-router-dom"
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../api";
import css from "./MovieDetails.module.css";

function MovieDetails() {
    const { movieId } = useParams()
    const location = useLocation()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        async function fetchMovie() {
            const data = await getMovieDetails(movieId)
            setMovie(data)
        }
        fetchMovie()
    }, [movieId])

    const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

    const deafultImg = "https://static.vecteezy.com/system/resources/thumbnails/022/059/000/small_2x/no-image-available-icon-vector.jpg"

    return (
        <>
            <div className={css.container}>
                <Link
                    className={css.goBack}
                    to={location.state?.pathname || "/"}
                >
                    Go back
                </Link>

                <div className={css.movie}>
                    {movie.poster_path ? (
                        <img
                            className={css.poster}
                            src={imageUrl}
                            alt={movie.title}
                        />
                    ) : (
                        <img
                            className={css.poster}
                            src={deafultImg}
                            alt={movie.title}
                        />
                    )}

                    <div className={css.info}>
                        <h1 className={css.title}>{movie.title}</h1>

                        <p>User Score: {movie.vote_average}</p>

                        <h2>Overview</h2>
                        <p>{movie.overview}</p>

                        <h3>Genres</h3>

                        <ul className={css.genres}>
                            {movie.genres?.map((item) => (
                                <li key={item.id}>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className={css.additional}>
                <h2>Additional information</h2>

                <ul className={css.navigation}>
                    <li>
                        <NavLink
                            to="cast"
                            className={({ isActive }) => isActive ? css.active : ""}
                        >
                            Cast
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="reviews"
                            className={({ isActive }) => isActive ? css.active : ""}
                        >
                            Reviews
                        </NavLink>
                    </li>
                </ul>
            </div>

            <Outlet />
        </>
    )
}

export default MovieDetails