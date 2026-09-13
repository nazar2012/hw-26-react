import { useParams } from "react-router-dom"

function MovieDetails() {
    const { movieId } = useParams()
    console.log(movieId);
    return (
        <h1>MovieDetails page</h1>
    )
}

export default MovieDetails