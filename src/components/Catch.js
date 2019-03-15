import React, { Component } from 'react'

export default class Catch extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    // Mise à jour du state, au prochain rendu, nous saurons qu'une erreur a été catchée
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      // Affichage du fallback de notre choix
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}
