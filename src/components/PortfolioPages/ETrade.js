import React, { Component } from 'react'

import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

const customStyles = {
  title: {
    color:'#1a1a1a'
  },
  titleBar: {
    backgroundColor:'#1a1a1a'
  }
}

export default class ETrade extends Component {

  render() {

    return (

      <div className="view-portfolio-piece">

        <div className="piece-header etrade">

          <div className="piece-title-wrap">

            <div className="piece-title" style={ customStyles.title }>E*Trade Financial</div>
            <div className="title-bar" style={ customStyles.titleBar } />

          </div>

        </div>

        <div className="piece-body">

          <div className="summary-wrap">
            <div className="summary-bar" />
            <div className="summary-text">
              <div className="summary-title">Summary</div>
              <br/>
              E*Trade Financial
              <br/><br/>
              Sketch, Axure RP
              <br/><br/>
              UX Design
              <br/><br/>
              May 2014 - November 2014
            </div>
          </div>

          <div className="description-wrap">
            <Grid>

              <Row>
                <Col xs={ 12 } sm={ 12 } md={ 8 } xl={ 8 } lg={ 8 }>
                  <h1>Overview</h1>
                </Col>
              </Row>

              <Row>
                <Col xs={ 12 } sm={ 12 } md={ 8 } xl={ 8 } lg={ 8 }>
                  <p>
                    I worked as a UX Designer on various sections of the E*Trade platform,
                    including: options trading, margin trading, mobile UI and the Pro platform.
                  </p>
                  <p>
                    My portfolio work is unfortunately not publicly displayable because of
                    contractual obligations.
                  </p>
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
