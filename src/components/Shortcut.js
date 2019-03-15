import { useEffect, useState, useRef } from 'react'

function useEventListener(target, event, listener) {
  // Stockage du listener sur une ref afin d'éviter la capture
  const listenerRef = useRef()
  listenerRef.current = listener

  useEffect(() => {
    // Création d'un handleEvent pour avoir une référence
    // et pouvoir le nettoyer
    function handleEvent(event) {
      listenerRef.current(event)
    }

    // Ajout de l'évenement
    target.addEventListener(event, handleEvent)

    // Suppression de l'événement
    return () => {
      target.removeEventListener(event, handleEvent)
    }
  }, [target, event, listenerRef]) // Dépendances, si une change, on nettoie et on recommence
}

export function useActiveKeys() {
  // On stock les "keys" actives dans le state
  const [activeKeys, setActiveKeys] = useState([])

  // Ecoute du "keydown"
  useEventListener(window, 'keydown', e => {
    // On inclut la clef que si elle n'est pas déjà présente
    setActiveKeys(activeKeys => {
      if (!activeKeys.includes(e.keyCode)) {
        return [...activeKeys, e.keyCode]
      }
      return activeKeys
    })
  })

  // Ecoute du "keyup"
  useEventListener(window, 'keyup', e => {
    // On filtre les clefs pour retirer celle qui vient d'être relâchée
    setActiveKeys(activeKeys =>
      activeKeys.filter(keyCode => e.keyCode !== keyCode),
    )
  })

  return activeKeys
}

// Nom des touches
const keyCodes = {
  alt: 18,
  f: 70,
}

// Parsing du raccourcis pour obtenir les codes des touches
function getShortcutKeys(shortcut) {
  return shortcut.split('+').map(value => keyCodes[value.toLowerCase()])
}

export function useShortcutEffect(shortcut, effect) {
  // Stockage de l'effect sur une ref afin d'éviter la capture
  const effectRef = useRef()
  effectRef.current = effect

  // Récupération des clefs actives
  const activeKeys = useActiveKeys()

  // Effet permettant de tester les clefs et de déclencher l'effet
  // passé en paramètre si nécessaire
  useEffect(() => {
    const shortCutKeys = getShortcutKeys(shortcut)
    const match = shortCutKeys.every(key => activeKeys.includes(key))
    if (match) {
      effectRef.current()
    }
  }, [shortcut, activeKeys, effectRef])
}
