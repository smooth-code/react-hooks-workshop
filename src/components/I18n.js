import React, { createContext, useState, useContext, useMemo } from 'react'

const I18nContext = createContext()

export function I18nProvider({ translations, defaultLocale, children }) {
  // La locale est stockée dans le state afin de pouvoir être modifiée à la volée
  const [locale, setLocale] = useState(defaultLocale)
  return (
    <I18nContext.Provider value={{ translations, locale, setLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useT(id) {
  // Récupérations des "translations" et de la "locale" depuis le contexte
  const { translations, locale } = useContext(I18nContext)
  // Tant que rien n'a changé, on utilisera la même traduction
  // si par la suite notre fonction fait des calculs, ce sera optimisé
  return useMemo(() => translations[locale][id], [locale, translations, id])
}

export function T({ id }) {
  return useT(id)
}

export function useI18n() {
  return useContext(I18nContext)
}
