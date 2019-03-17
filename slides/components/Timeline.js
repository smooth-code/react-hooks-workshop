/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/core'

// const appear = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(-10px);
//   }

//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `

const styles = {
  event: css`
    display: flex;
    flex-direction: column;
    text-align: left;
    border-left: 2px solid rgba(0, 0, 0, 0.6);
    padding: 20px 30px;
    position: relative;
    /* animation: ${appear} 1s; */
    transform-origin: top;
    transition: opacity 1s;
  `,
  icon: css`
    position: absolute;
    font-size: 24px;
    width: 40px;
    height: 40px;
    left: -20px;
    top: 10px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  date: css`
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.6em;
  `,
  title: css`
    font-size: 0.8em;
  `,
}

export default function Timeline(props) {
  return <div {...props} />
}

Timeline.Event = props => <div css={styles.event} {...props} />
Timeline.Icon = props => <div css={styles.icon} {...props} />
Timeline.Date = props => <div css={styles.date} {...props} />
Timeline.Title = props => <div css={styles.title} {...props} />

// import {
//   Timeline as BaseTimeline,
//   TimelineEvent as BaseTimelineEvent,
// } from 'react-event-timeline'

// export function Timeline(props) {
//   return <BaseTimeline {...props} />
// }

// export function TimelineEvent({ title, createdAt, ...props }) {
//   return (
//     <BaseTimelineEvent
//       title={
//         <div
//           css={css`
//             padding-bottom: 20px;
//           `}
//         >
//           <div
//             css={css`
//               font-size: 0.7em;
//             `}
//           >
//             {createdAt}
//           </div>
//           <div
//             css={css`
//               font-size: 0.9em;
//             `}
//           >
//             {title}
//           </div>
//         </div>
//       }
//       {...props}
//     />
//   )
// }
