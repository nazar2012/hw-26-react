import { getTrendingMovies } from "../../api"
import { useEffect, useState } from "react"
import MovieList from "../../components/MovieList/MovieList"
import css from "./Home.module.css"

function Home() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchMovies() {
            const movies = await getTrendingMovies()
            setMovie(movies)
            localStorage.removeItem("movie")
        }

        fetchMovies()
    }, [])

    return (
        <div className={css.container}>
            <h1 className={css.title}>Trending today</h1>
            <MovieList movies={movie} />
        </div>
    )
}

export default Home