import { useParams, useLocation, Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../api";

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

    console.log(location);

    const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    const deafultImg = "https://static.vecteezy.com/system/resources/thumbnails/022/059/000/small_2x/no-image-available-icon-vector.jpg"

    return (
        <div>
            <Link to={location.state.pathname || "/"}>Go back</Link>
            {/* <img src={imageUrl} alt={movie.title} /> */}
            {movie.poster_path ? (
                <img src={imageUrl} alt={movie.title} />
            ) : <img src={deafultImg} alt={movie.title} />}
            <div className="conteiner">
                <h1>{movie.title}</h1>
                <p></p>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <ul>{movie.genres?.map((item) => {
                    return (
                        <li key={item.id}>{item.name}</li>
                    )
                })}</ul>
            </div>
        </div>
    )
}

export default MovieDetails