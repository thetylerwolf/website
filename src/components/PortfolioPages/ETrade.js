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

const customStyles = {
  title: {
    color:'#1a1a1a'
  },
  titleBar: {
    backgroundColor:'#1a1a1a'
  }
}

export default class ETrade extends Component {
  constructor() {
    super()
  }

  render() {

    return (

      <div className="view-portfolio-piece">

        <div className="piece-header" style={{ backgroundImage: 'url(/portfolio/etrade/etrade_cover.jpg)' }}>

          <div className="piece-title-wrap">

            <div className="piece-title" style={ customStyles.title }>E*Trade Financial</div>
            <div className="title-bar" style={ customStyles.titleBar } />

          </div>

        </div>

        <div className="piece-body">

          <div className="summary-wrap">
            <div className="summary-bar" />
            <div className="summary-text">
              E*Trade Financial
              <br/>
              Sketch, Axure RP
              <br/>
              UX Design
              <br/>
              May 2014 - November 2014
              <br/>
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
                  <p>UX Design on various pieces of the E*Trade platform,
                  including: options trading, margin trading and Pro platform.
                  Also designed the mobile version of the menu on the E*Trade
                  homepage.</p>
                </Col>
              </Row>
            */}
            </Grid>
          </div>

        </div>
        {/* <img className="piece-header" src='/portfolio/vida/vida_cover.jpg)'/> */}

      </div>

    )

  }

}
