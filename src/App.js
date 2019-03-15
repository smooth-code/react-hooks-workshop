import React, { useState } from 'react'
import { Normalize, Grid, Typography } from '@smooth-ui/core-sc'
import SearchInput from './components/SearchInput'
import Catch from './components/Catch'
import { MovieSearch } from './containers/MovieDb'

export default function App() {
  const [query, setQuery] = useState('Lord of the Rings')

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
        {/* Gestion localisée de l'erreur */}
        <Catch>
          {/* Affichage de la liste de films */}
          <MovieSearch query={query}>
            {movies =>
              movies && movies.map(movie => <p key={movie.id}>{movie.title}</p>)
            }
          </MovieSearch>
        </Catch>
      </Grid>
    </>
  )
}
