import { getMovieReviews } from "../../api"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import css from "./Reviews.module.css"

function Reviews() {
    const [reviews, setReviews] = useState([])
    const { movieId } = useParams()

    useEffect(() => {
        async function fetchReviews() {
            const data = await getMovieReviews(movieId)
            setReviews(data)
        }

        fetchReviews()
    }, [movieId])

    return (
        <div className={css.container}>
            <h1 className={css.title}>Reviews</h1>

            {reviews.length === 0 ? (
                <p className={css.empty}>
                    We don't have any reviews for this movie.
                </p>
            ) : (
                <ul className={css.list}>
                    {reviews.map((item) => {
                        return (
                            <li className={css.item} key={item.id}>
                                <h3 className={css.author}>
                                    {item.author}
                                </h3>

                                <p className={css.content}>
                                    {item.content}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default Reviews