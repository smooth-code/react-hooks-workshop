import { css, jsx } from '@emotion/core'
import React from 'react'

const styles = {
  title: css`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    position: relative;
    background-blend-mode: overlay;
    background-image: linear-gradient(
        150deg,
        #95001c 0%,
        #9b230b 30%,
        #ef9724 100%
      ),
      url('https://www.transparenttextures.com/patterns/shattered.png');
  `,
  text: css`
    margin: 30px;
  `,
  picture: css`
    display: block;
    margin: 0 auto;
    width: 90vw;
    max-width: 300px;
  `,
}

export default function Title(props) {
  return <div css={styles.title} {...props} />
}

Title.Picture = props => <img css={styles.picture} {...props} />
Title.Text = props => <h1 css={styles.text} {...props} />
