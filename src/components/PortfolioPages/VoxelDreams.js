import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

export default class VoxelDreams extends Component {

  render() {

    return (

      <div className="view-portfolio-piece">

        <div
          className="piece-header voxeldreams"
          style={{
            backgroundImage: 'url(/portfolio/voxeldreams/voxel_cover.jpg)',
          }}
        >

          <div className="piece-title-wrap">

            <div className="piece-title">Voxel Dreams</div>
            <div className="title-bar" />

          </div>

        </div>

        <div className="piece-body">

          <div className="summary-wrap">
            <div className="summary-bar" />
            <div className="summary-text">
              <div className="summary-title">Summary</div>
              <br/>
              Personal Project - Global Game Jam 2017
              <br/><br/>
              Unity
              <br/><br/>
              UX Design / Full-stack Development
              <br/><br/>
              January 2017
            </div>
          </div>

          <div className="description-wrap">
            <Grid>
            {/*
              <Row>
                <Col xs={ 12 }>
                  <h1>Overview</h1>
                </Col>
              </Row>

              <Row>
                <Col xs={ 12 }>
                  <p>Voxel Dreams is a mobile game put together for Global Game Jam
                  2017. I worked with two developers and a designer to make this game.
                  The design uses a mix of hand-painted watercolor graphics and 3D models.
                  </p>
                </Col>
              </Row>
            */}
              <Row>
                <br/>
                <Col className="image-container" xs={ 12 }>
                  <img alt="start screen" width="400px" src="/portfolio/voxeldreams/start.png" />
                </Col>
                <Col className="image-container" xs={ 12 }>
                  <img alt="electric sheep" width="400px" src="/portfolio/voxeldreams/sheep.png" />
                </Col>
                <Col className="image-container" xs={ 12 }>
                  <img alt="game over" width="400px" src="/portfolio/voxeldreams/game_over.png" />
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
