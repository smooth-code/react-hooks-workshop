/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export function CardBody(props) {
  return (
    <div
      css={css`
        padding: 20px;
        font-size: 20px;
        line-height: 24px;
        min-width: 300px;
      `}
      {...props}
    />
  )
}

export function CardHeader(props) {
  return (
    <div
      css={css`
        background-color: black;
        color: white;
        padding: 20px;
        font-size: 25px;
        line-height: 30px;
      `}
      {...props}
    />
  )
}

export function Card(props) {
  return (
    <div
      css={css`
        background-color: white;
        border: 1px solid black;
        border-radius: 4px;
        box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.05);
        text-align: left;
        max-width: 500px;
        margin: 0 auto;
      `}
      {...props}
    />
  )
}
