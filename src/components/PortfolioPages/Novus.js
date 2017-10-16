import {
  Route,
  Link,
} from 'react-router-dom'
import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

// import cover from '../../../public/portfolio/vida/vida_cover.jpg'

export default class Novus extends Component {
  constructor() {
    super()
  }

  render() {

    return (

      <div className="view-portfolio-piece">

        <div className="piece-header" style={{ backgroundImage: 'url(/portfolio/novus/novus_cover.jpg)' }}>

          <div className="piece-title-wrap">

            <div className="piece-title">Novus Partners</div>
            <div className="title-bar" />

          </div>

        </div>

        <div className="piece-body">

          <div className="summary-wrap">
            <div className="summary-bar" />
            <div className="summary-text">
              Novus Partners
              <br/>
              Sketch, D3, Angular
              <br/>
              Data Visualization Design / UX Design / Front End Development
              <br/>
              June 2012 - May 2014
              <br/>
            </div>
          </div>

          <div className="description-wrap">
            <Grid>

              <Row>
                <Col xs={ 12 }>
                  <h1>Data Visualisations</h1>
                </Col>
              </Row>

              <Row>

                <Col className="image-container" xs={ 12 }>
                  <img src="/portfolio/novus/heatmap.jpg" />
                </Col>

                <Col className="image-container" xs={ 12 }>
                  <img src="/portfolio/novus/overlap.png" />
                </Col>

                <Col className="image-container" xs={ 12 }>
                  <img src="/portfolio/novus/platform.jpg" />
                </Col>

                <Col className="image-container" xs={ 12 }>
                  <img src="/portfolio/novus/equalizer.jpg" />
                </Col>

              </Row>

            </Grid>
          </div>

        </div>
        {/* <img className="piece-header" src='/portfolio/vida/vida_cover.jpg)'/> */}

      </div>

    )

  }

}
