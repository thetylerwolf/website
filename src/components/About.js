import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import HeaderNav from './HeaderNav'

export default class About extends Component {

  render() {

    return (

      <div className="about-wrap">

        <HeaderNav
          showBrand={ false }
          location={ this.props.location }
        />

        <Grid className="about-section">

          <Row>
            {/* <Col lg={ 4 } md={ 4 } sm={ 12 } /> */}

            <Col lg={ 4 } md={ 4 } sm={ 12 }>
              <div className="about-logo">
                <Link to="/"><img alt="Tyler Wolf" src="logo.png" /></Link>
              </div>
            </Col>

          </Row>

          <Row>

            <Col lg={ 4 } md={ 4 } sm={ 12 } />

            <Col lg={ 8 } md={ 8 } sm={ 12 }>
              <p>
                I am an award-winning digital product professional based in Stockholm, Sweden.
                Over the past 7 years, I have worked in UX Design and Front End Development, focused
                on Data Visualization. I love computer graphics and 3D projects.
              </p>

              <p>
                I take on contract work full-time.
              </p>

              <p>
                I offer expertise in Data Visualization for products and publications,
                Product Strategy and User Experience. I help
                businesses large and small find product/market fit.
              </p>

              <p>
                I am currently working on <a href="https://odinchart.com" target="_blank">Odin Chart</a>, a
                follow-up to Sketch Data Studio, a popular data visualization design tool that I created several years ago.
              </p>

              <p>
                If you would like to work with me, contact me directly at
                <br/>
                <a href="mailto:tyler@beetroot.digital">tyler@beetroot.digital</a>.
              </p>

              <div className="icon-container">
                <a href="https://twitter.com/tylernwolf" target="_blank"><FontAwesome name="twitter" /></a>
                <a href="https://github.com/thetylerwolf" target="_blank"><FontAwesome name="github" /></a>
                <a href="https://www.linkedin.com/in/tylernwolf" target="_blank"><FontAwesome name="linkedin" /></a>
              </div>

              <br/>
              <br/>

              <p className="bold">Awards/Honors</p>

              <ul>
                <li>
                  <a target="_blank" href="https://challengesgov.se/winner-mobility-observer/">Winner - A Challenge from Sweden - Sustainable Mobility Data Visualization</a>
                </li>
                <li>
                  Grant funding recipient - SSES Validator
                </li>
                <li>
                  Grant funding recipient - Adobe Fund for Design
                </li>
              </ul>

              <p className="bold">Speaking</p>

              <p className="faded">2019</p>
              <ul>
                <li>"A More Efficient Dataviz Design Process" - Data Visualization Design Stockholm</li>
              </ul>

              <p className="faded">2018</p>
              <ul>
                <li>"Designing Intuitive Tools" - Øredev Conference 2018</li>
              </ul>

              <p className="bold">Publications</p>

              <p>My work has appeared in the following publications</p>

              <div className="public-publications">
                <img className="publication-image forbes-logo" src="forbes.svg" alt="Forbes" />
                <img className="publication-image brookings-logo" src="brookings.svg" alt="The Brookings Institution" />
                <img className="publication-image dataface-logo" src="dataface.jpg" alt="The Data Face" />
                <img className="publication-image spectrum-logo" src="spectrum.png" alt="Spectrum News" />
              </div>
            </Col>

        </Row>

      </Grid>

    </div>

    )

  }

}