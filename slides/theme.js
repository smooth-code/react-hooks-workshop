import base, { syntaxHighlighterPrism } from '@mdx-deck/themes'
import { css } from '@emotion/core'
import prismStyle from 'react-syntax-highlighter/dist/styles/prism/solarizedlight'

export default syntaxHighlighterPrism({
  css: [
    base.css,
    css`
      a {
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      ul {
        text-align: left;
      }

      dl {
        text-align: left;
        padding: 0 100px;

        dt {
          font-weight: 600;
        }

        dd {
          font-weight: 300;
          margin: 0;
        }
      }

      div[name='wrapper'] {
      }

      pre {
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 0.6em !important;
        max-width: calc(100vw - 80px);
        margin: 40px auto !important;
        max-height: calc(100vh - 250px);

        * {
          font-size: inherit !important;
        }
      }
    `,
  ],
  colors: {
    pre: '#bd4932',
    code: '#bd4932',
    link: '#bd4932',
  },
  quote: css`
    font-size: 0.9em;
    background-color: rgba(255, 229, 100, 0.3);
    border-left-color: #ffe564;
    border-left-width: 9px;
    border-left-style: solid;
    color: #894c00;
    padding: 10px;
    margin-bottom: 30px;
    margin-top: 20px;
    position: relative;
    text-align: left;

    > p {
      padding: 0 10px;
      margin: 0;
    }
  `,
  prism: {
    style: prismStyle,
  },
})
