import React, { useState } from 'react'
import { Row, Col, Normalize, Grid, Typography } from '@smooth-ui/core-sc'
import SearchInput from './components/SearchInput'
import Catch from './components/Catch'
import Card from './components/Card'
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
          <Row>
            <MovieSearch query={query}>
              {movies =>
                movies &&
                movies
                  .filter(movie => movie.backdrop_path)
                  .map(movie => (
                    <Col my={1} xs={12} md={6} key={movie.id}>
                      <Card
                        key={movie.id}
                        style={{
                          height: 200,
                          backgroundImage: movie.backdrop_path
                            ? `url(https://image.tmdb.org/t/p/original/${
                                movie.backdrop_path
                              })`
                            : null,
                        }}
                      >
                        <Card.Body>
                          <Card.Title>{movie.title}</Card.Title>
                          <Card.Subtitle>
                            {movie.vote_average} ({movie.vote_count} votes)
                          </Card.Subtitle>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
              }
            </MovieSearch>
          </Row>
        </Catch>
      </Grid>
    </>
  )
}
