import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

export default class Swarm2048 extends Component {

  render() {

    return (

      <div className="view-portfolio-piece">

        <div className="piece-header swarm2048" style={{ backgroundImage: 'url(/portfolio/swarm2048/swarm2048_cover.jpg)' }}>

          <div className="piece-title-wrap">

            <div className="piece-title">Swarm 2048</div>
            <div className="title-bar" />

          </div>

        </div>

        <div className="piece-body">

          <div className="summary-wrap">
            <div className="summary-bar" />
            <div className="summary-text">
              <div className="summary-title">Summary</div>
              <br/>
              Personal Project
              <br/><br/>
              Angular, CSS, Cinema4D
              <br/><br/>
              Design / Front End Development
              <br/><br/>
              2014
            </div>
          </div>

          <div className="description-wrap">
            <Grid>

              <Row>

                <br/>
                <h3>Real-time Multiplayer</h3>

                <Col className="image-container" xs={ 12 }>
                  <img alt="In Game" src="/portfolio/swarm2048/in-game.jpg" />
                </Col>

                <Col className="image-container" xs={ 12 }>
                  <img alt="Start Screen" src="/portfolio/swarm2048/start.jpg" />
                </Col>

              </Row>

            </Grid>
          </div>

        </div>

      </div>

    )

  }

}
