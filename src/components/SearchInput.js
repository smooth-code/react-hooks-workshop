import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { Input } from '@smooth-ui/core-sc'
import { useT } from './I18n'

export default forwardRef(function SearchInput(props, ref) {
  const placeholder = useT('placeholder')
  const inputRef = useRef()

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    },
  }))

  return (
    <Input
      ref={inputRef}
      placeholder={placeholder}
      width="100%"
      type="search"
      {...props}
    />
  )
})
