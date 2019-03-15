import React from 'react'
import { Input } from '@smooth-ui/core-sc'
import { useT } from './I18n'

export default function SearchInput(props) {
  const placeholder = useT('placeholder')
  return (
    <Input placeholder={placeholder} width="100%" type="search" {...props} />
  )
}
