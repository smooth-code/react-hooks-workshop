/** @jsx jsx */
import { Children } from 'react'
import { css, jsx } from '@emotion/core'
import { Grid, Row, Col } from '@smooth-ui/core-em'

const styles = {
  row: css`
    margin: 0 40px;

    pre {
      margin: 10px 0 !important;
    }
  `,
}

function isTitle(child) {
  return child.props && child.props.__MDX_TYPE_PLEASE_DO_NOT_USE__ === 'h2'
}

export default function GridLayout({ children }) {
  return (
    <Grid fluid>
      <Row gutter={10} css={styles.row}>
        {Children.map(children, (child, index) => (
          <Col gutter={10} xs={12} md={isTitle(child) ? 12 : 6} key={index}>
            {child}
          </Col>
        ))}
      </Row>
    </Grid>
  )
}
