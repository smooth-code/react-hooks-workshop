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
    /* background: linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6e8ff 94%); */
    /* background-image: linear-gradient(
      150deg,
      #821803 0%,
      #ba3c23 68%,
      #ffb66a 100%
    ); */
    background-image: linear-gradient(
      150deg,
      #cb1235 0%,
      #bd4932 29%,
      #ffb24e 100%
    );
    z-index: 1;

    &:after {
      content: '';
      background-image: url('https://www.transparenttextures.com/patterns/flowers.png');
      opacity: 0.5;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1;
    }
  `,
  text: css``,
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
