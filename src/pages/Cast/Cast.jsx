import { useState, useEffect } from "react"
import { getMovieCast } from "../../api"
import { useParams } from "react-router"
import css from "./Cast.module.css"

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

    const deafultImg = "https://static.vecteezy.com/system/resources/thumbnails/022/059/000/small_2x/no-image-available-icon-vector.jpg"

    return (
        <div className={css.container}>
            <h1 className={css.title}>Cast</h1>

            <ul className={css.list}>
                {cast.map((actor) => {
                    return (
                        <li className={css.item} key={actor.id}>
                            {actor.profile_path ? (
                                <img
                                    className={css.image}
                                    src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                                    alt={actor.name}
                                />
                            ) : (
                                <img
                                    className={css.image}
                                    src={deafultImg}
                                    alt={actor.name}
                                />
                            )}

                            <h2 className={css.name}>{actor.name}</h2>
                            <p className={css.character}>
                                Character: {actor.character}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Cast