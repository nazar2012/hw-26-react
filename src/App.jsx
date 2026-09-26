import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Movies from './pages/Movies/Movies'
import MovieDetails from './pages/MovieDetails/MovieDetails'
import Layout from './components/Layout/Layout'
import Reviews from './pages/Reviews/Reviews'
import Cast from './pages/Cast/Cast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:movieId' element={<MovieDetails />} >
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
