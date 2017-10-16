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

export default class Swarm2048 extends Component {
  constructor() {
    super()
  }

  render() {

    return (

      <div className="view-portfolio-piece">

        <div className="piece-header" style={{ backgroundImage: 'url(/portfolio/swarm2048/swarm2048_cover.jpg)' }}>

          <div className="piece-title-wrap">

            <div className="piece-title">Swarm 2048</div>
            <div className="title-bar" />

          </div>

        </div>

        <div className="piece-body">

          <div className="summary-wrap">
            <div className="summary-bar" />
            <div className="summary-text">
              Personal Project
              <br/>
              Angular, CSS, Cinema4D
              <br/>
              Design / Front End Development
              <br/>
              2014
            </div>
          </div>

          <div className="description-wrap">
            <Grid>

              <Row>

                <br/>
                <h3>Real-time Multiplayer</h3>

                <Col className="image-container" xs={ 12 }>
                  <img src="/portfolio/swarm2048/in-game.jpg" />
                </Col>

                <Col className="image-container" xs={ 12 }>
                  <img src="/portfolio/swarm2048/start.jpg" />
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
