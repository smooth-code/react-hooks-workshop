import React from 'react'
import { Grid, Row, Col } from '@smooth-ui/core-em'

function isTitle(child) {
  return child.props && child.props.__MDX_TYPE_PLEASE_DO_NOT_USE__ === 'h2'
}

export default function GridLayout({ children }) {
  return (
    <Grid fluid>
      <Row>
        {React.Children.map(children, (child, index) => (
          <Col xs={12} md={isTitle(child) ? 12 : 6} key={index}>
            {child}
          </Col>
        ))}
      </Row>
    </Grid>
  )
}
