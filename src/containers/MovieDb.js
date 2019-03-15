import { useState, useEffect } from 'react'
import axios from 'axios'

export function useMovieSearch(query) {
  // State contenant les films
  const [movies, setMovies] = useState(null)

  // Appel de l’API lorsque la query est modifiée
  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: 'c5742978852b8f695a61e22a33a8196c',
          query,
        },
      })
      .then(res => {
        setMovies(res.data.results)
      })
  }, [query])

  return movies
}
