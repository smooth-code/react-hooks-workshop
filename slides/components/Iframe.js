/** @jsx jsx */
import { useState } from 'react'
import { css, jsx, keyframes } from '@emotion/core'

const moveAnimation = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(46px);
  }
`

const styles = {
  container: css`
    position: relative;
    overflow: hidden;
  `,
  bg: css`
    animation: ${moveAnimation} 400ms linear infinite;
    opacity: 0.8;
    background: repeating-linear-gradient(
      -55deg,
      #bd4932 1px,
      #ae3219 2px,
      #ae3219 11px,
      #bd4932 12px,
      #bd4932 20px
    );
    position: absolute;
    left: -46px;
    right: 0;
    top: 0;
    bottom: 0;
    pointer-events: none;
    transition: opacity 200ms;
  `,
}

export default function Iframe({ src }) {
  const [loaded, setLoaded] = useState()
  return (
    <div css={styles.container}>
      <div css={[styles.bg, loaded && { opacity: 0 }]} />
      <iframe
        onLoad={() => setLoaded(true)}
        style={{
          width: '80vw',
          height: '70vh',
          overflow: 'hidden',
        }}
        frameborder="0"
        src={src}
      />
    </div>
  )
}
