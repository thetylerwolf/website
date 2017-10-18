import {
  Link,
} from 'react-router-dom'
import React, { Component } from 'react'

export default class Nvd3 extends Component {

  render() {

    return (

      <div className="view-portfolio-piece">

        <div className="piece-header nvd3" style={{ backgroundImage: 'url(/portfolio/nvd3/nvd3_cover.jpg)' }}>

          <div className="piece-title-wrap">

            <div className="piece-title">Nvd3</div>
            <div className="title-bar" />

          </div>

        </div>

        <div className="piece-body">

          <div className="summary-wrap">
            <div className="summary-bar" />
            <div className="summary-text">
              <div className="summary-title">Summary</div>
              <br/>
              Open Source Major Contributor
              <br/><br/>
              d3.js
              <br/><br/>
              UX Design / Front End Development
              <br/><br/>
              2012 - 2014
              <br/><br/>
              <Link to="http://www.nvd3.org">Visit Website</Link>
            </div>
          </div>

        </div>

      </div>

    )

  }

}
