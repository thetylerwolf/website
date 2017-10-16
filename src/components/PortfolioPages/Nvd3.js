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

export default class Nvd3 extends Component {
  constructor() {
    super()
  }

  render() {

    return (

      <div className="view-portfolio-piece">

        <div className="piece-header" style={{ backgroundImage: 'url(/portfolio/nvd3/nvd3_cover.jpg)' }}>

          <div className="piece-title-wrap">

            <div className="piece-title">Nvd3</div>
            <div className="title-bar" />

          </div>

        </div>

        <div className="piece-body">

          <div className="summary-wrap">
            <div className="summary-bar" />
            <div className="summary-text">
              Open Source Major Contributor
              <br/>
              d3.js
              <br/>
              UX Design / Front End Development
              <br/>
              2012 - 2014
              <br/>
              <Link to="http://www.nvd3.org">Visit Website</Link>
            </div>
          </div>

        </div>
        {/* <img className="piece-header" src='/portfolio/vida/vida_cover.jpg)'/> */}

      </div>

    )

  }

}
