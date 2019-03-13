import base, { syntaxHighlighterPrism } from '@mdx-deck/themes'
import { css } from '@emotion/core'
import tomorrow from 'react-syntax-highlighter/dist/styles/prism/tomorrow'

export default [
  base,
  {
    colors: {
      pre: '#bd4932',
      code: '#bd4932',
    },
    pre: css`
      font-size: 0.6em;
      max-height: 80vh;
    `,
    quote: css`
      background-color: rgba(255, 229, 100, 0.3);
      border-left-color: #ffe564;
      border-left-width: 9px;
      border-left-style: solid;
      padding: 10px;
      margin-bottom: 30px;
      margin-top: 20px;
      margin-left: -30px;
      margin-right: -30px;
      position: relative;

      > p {
        padding: 0 10px;
        margin: 0;
      }
    `,
    prism: {
      style: tomorrow,
    },
  },
  syntaxHighlighterPrism,
]
