import { useReducer, useEffect } from 'react'
import axios from 'axios'

function reducer(state, action) {
  switch (action.type) {
    case 'empty':
      return { error: null, movies: [] }
    case 'success':
      return { error: null, movies: action.res.data.results }
    case 'error':
      return { error: action.error, movies: null }
    default:
      throw new Error(`Invalid action type ${action.type}`)
  }
}

const initialState = { movies: null, error: null }

export function useMovieSearch(query) {
  // State contenant l'erreur et les films
  const [state, dispatch] = useReducer(reducer, initialState)

  // Appel de l’API lorsque la query est modifiée
  useEffect(() => {
    if (!query) {
      dispatch({ type: 'empty' })
      return
    }
    axios
      .get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: 'c5742978852b8f695a61e22a33a8196c',
          query,
        },
      })
      .then(res => {
        dispatch({ type: 'success', res })
      })
      .catch(error => {
        dispatch({ type: 'error', error })
      })
  }, [query])

  // Si une erreur a été retournée par l'API, alors je throw
  if (state.error) {
    throw state.error
  }

  return state.movies
}

export function MovieSearch({ query, children }) {
  const movies = useMovieSearch(query)
  return children(movies)
}
