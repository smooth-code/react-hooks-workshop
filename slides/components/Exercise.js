/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const styles = {
  container: css`
    width: 100vw;
    height: 100vh;
    position: relative;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-blend-mode: overlay;
    background-image: linear-gradient(150deg, #ee4726 0%, #86124c 100%),
      url('https://www.transparenttextures.com/patterns/shattered.png');
    z-index: 1;

    a {
      color: white;
    }

    &:after {
      content: '';
      background-image: url('https://www.transparenttextures.com/patterns/shattered.png');
      background-blend-mode: overlay;
      opacity: 0.8;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1;
    }
  `,
  emojis: css`
    font-size: 120px;
    line-height: 130px;
  `,
}

export default function Exercise({ num, title }) {
  return (
    <div css={styles.container}>
      <div css={styles.emojis}>👩🏼‍💻👨🏾‍💻</div>
      <h1>
        Exercise {num}
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
