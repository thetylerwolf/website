import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

const customStyles = {
  headerColor: {
    backgroundColor: '#055AA4'
  }
}

export default class Novus extends Component {

  render() {

    return (

      <div className="view-portfolio-piece">

        <div className="piece-header novus" style={ customStyles.headerColor }>

          <div className="piece-title-wrap">

            <div className="piece-title">Novus Partners</div>
            <div className="title-bar" />

          </div>

        </div>

        <div className="piece-body">

          <div className="summary-wrap">
            <div className="summary-bar" />
            <div className="summary-text">
              <div className="summary-title">Summary</div>
              <br/>
              Novus Partners
              <br/><br/>
              Sketch, D3, Angular
              <br/><br/>
              Data Visualization Design / UX Design / Front End Development
              <br/><br/>
              June 2012 - May 2014
            </div>
          </div>

          <div className="description-wrap">
            <Grid>

              <Row>
                <Col xs={ 12 } sm={ 12 } md={ 8 } xl={ 8 } lg={ 8 }>
                  <h1>Data Visualisations</h1>
                </Col>
              </Row>

              <Row>

                <Col className="image-container" xs={ 12 } sm={ 12 } md={ 8 } xl={ 8 } lg={ 8 }>
                  <img alt="Interactive Heatmap" src="/portfolio/novus/heatmap.jpg" />
                </Col>

              </Row>

            </Grid>
          </div>

        </div>

      </div>

    )

  }

}
