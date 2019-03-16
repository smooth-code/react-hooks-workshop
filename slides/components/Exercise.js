/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const styles = {
  emojis: css`
    font-size: 120px;
    line-height: 130px;
  `,
}

export default function Exercise({ num, title }) {
  return (
    <div>
      <div css={styles.emojis}>👩🏼‍💻👨🏾‍💻</div>
      <h1>
        Exercice {num}
        <br />
        {title}
      </h1>
      <a
        css={styles.link}
        target="_blank"
        href={`https://code.react-hooks.smooth-code.com/pages-exercise-${num}`}
      >
        👉 code.react-hooks.smooth-code.com 👈
      </a>
    </div>
  )
}
