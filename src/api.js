import axios from "axios";

const API_KEY = "a9de5623845d237717a3f224101fd832"

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

export async function getTrendingMovies() {
    const response = await axios.get("trending/movie/day", {
        params: {
            api_key: API_KEY
        }
    })
    return response.data.results
}

export async function getMovieDetails(movieId) {
    const response = await axios.get(`movie/${movieId}`, {
        params: {
            api_key: API_KEY
        }
    })
    return response.data
}