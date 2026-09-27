import { useState, useEffect } from "react"
import { searchMovie } from "../../api"
import MovieList from "../../components/MovieList/MovieList"
import css from "./Movies.module.css"

function Movies() {

    const [qwery, setQwery] = useState("")
    const [movie, setMovie] = useState(() => {
        const saveData = localStorage.getItem("movie")
        if (saveData) {
            return JSON.parse(saveData)
        } else {
            return []
        }
    })

    async function handleSubmit(evt) {
        evt.preventDefault()
        if (qwery.trim() === "") {
            return
        }
        const data = await searchMovie(qwery)
        setMovie(data)
    }

    useEffect(() => {
        localStorage.setItem("movie", JSON.stringify(movie))
    }, [movie])

    return (
        <>
            <div className={css.container}>
                <form className={css.form} onSubmit={handleSubmit}>
                    <input
                        className={css.input}
                        onChange={(event) => setQwery(event.target.value)}
                        value={qwery}
                        type="text"
                        placeholder="Enter movie"
                    />

                    <button className={css.button} type="submit">
                        Search
                    </button>
                </form>

                {movie.length > 0 && <MovieList movies={movie} />}
            </div>
        </>
    )
}

export default Movies