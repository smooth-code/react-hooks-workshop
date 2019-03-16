/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import {
  Timeline as BaseTimeline,
  TimelineEvent as BaseTimelineEvent,
} from 'react-event-timeline'

export function Timeline(props) {
  return <BaseTimeline {...props} />
}

export function TimelineEvent({ title, createdAt, ...props }) {
  return (
    <BaseTimelineEvent
      title={
        <div
          css={css`
            padding-bottom: 20px;
          `}
        >
          <div
            css={css`
              font-size: 0.7em;
            `}
          >
            {createdAt}
          </div>
          <div
            css={css`
              font-size: 0.9em;
            `}
          >
            {title}
          </div>
        </div>
      }
      {...props}
    />
  )
}
