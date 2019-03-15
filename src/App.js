import React, { useState, useEffect } from 'react'
import { Normalize, Grid, Typography } from '@smooth-ui/core-sc'
import axios from 'axios'
import SearchInput from './components/SearchInput'

export default function App() {
  const [query, setQuery] = useState('Lord of the Rings')

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

  return (
    <>
      {/* Le composant "Grid" centre dans la page, "py" signifie "padding-top" et "padding-bottom" */}
      <Grid>
        {/* Injection de normalize.css pour avoir un rendu consistant sur tous les navigateurs */}
        <Normalize />
        {/* "Typography" est un composant avec des variantes de titres prêtes à l'emploi */}
        <Typography variant="display-1">Smooth Movie</Typography>
        {/* Votre composant "SearchInput" */}
        <SearchInput
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        {/* Affichage de la liste de films */}
        {movies && movies.map(movie => <p key={movie.id}>{movie.title}</p>)}
      </Grid>
    </>
  )
}
