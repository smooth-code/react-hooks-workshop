import React, { useState } from 'react'
import { Normalize, Grid, Typography } from '@smooth-ui/core-sc'
import SearchInput from './components/SearchInput'
import { useMovieSearch } from './containers/MovieDb'

export default function App() {
  const [query, setQuery] = useState('Lord of the Rings')

  // Utilisation du Hook custom permettant de récupérer la liste de films depuis l’API
  const movies = useMovieSearch(query)

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
