import React from 'react'
import { useSteps } from 'mdx-deck'

export default function StepShow({ children, renderHidden }) {
  const arr = React.Children.toArray(children)
  const step = useSteps(arr.length)
  return arr.map((child, i) => (i < step ? child : renderHidden(child)))
}
