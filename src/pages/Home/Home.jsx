import { getTrendingMovies } from "../../api"
import { useEffect, useState } from "react"
import MovieList from "../../components/MovieList/MovieList"

function Home() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        async function fetchMovies() {
            const movies = await getTrendingMovies()
            setMovie(movies);
        }
        fetchMovies()
    }, [])
    // console.log(movie);
    return (
        <>
            <h1>Trending today</h1>
            <MovieList movies={movie} />
        </>
    )
}

export default Home