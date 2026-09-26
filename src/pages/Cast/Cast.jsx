import { useState, useEffect } from "react"
import { getMovieCast } from "../../api"
import { useParams } from "react-router"

function Cast() {
    const [cast, setCast] = useState([])
    const { movieId } = useParams()
    useEffect(() => {
        async function fetchCast() {
            const data = await getMovieCast(movieId)
            setCast(data)
        }
        fetchCast()
    }, [movieId])

    // const imageUrl = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
    const deafultImg = "https://static.vecteezy.com/system/resources/thumbnails/022/059/000/small_2x/no-image-available-icon-vector.jpg"

    return (
        <>
            <h1>Cast</h1>
            <ul>
                {cast.map((actor) => {
                    return (
                        <li key={actor.id}>
                            {actor.profile_path ? (
                                <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} />
                            ) : <img src={deafultImg} alt={actor.name} />}
                            <h2>{actor.name}</h2>
                            <p>Character: {actor.character}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Cast