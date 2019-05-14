import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import HeaderNav from './HeaderNav'

export default class Contact extends Component {

  render() {

    const mailToLink = `mailto:tyler@beetroot.digital?subject=Let's work together&body=Hi Tyler,%0D%0A%0D%0AI'm contacting you to discuss a possible project you may be able to help with. Here are the details:%0D%0A%0D%0A`

    return (

      <div className="about-wrap">

        <HeaderNav
          showBrand={ false }
          location={ this.props.location }
        />

        <Grid className="about-section">

          <Row>
            {/* <Col lg={ 4 } md={ 4 } sm={ 12 } /> */}

            <Col lg={ 2 } md={ 2 } sm={ 12 }>
              <div className="about-logo">
                {/* <Link to="/"><img alt="Tyler Wolf" src="logo.png" /></Link> */}
                <div className="about-text">Hire Me</div>
              </div>
            </Col>

          </Row>

          <Row>

            <Col lg={ 2 } md={ 2 } sm={ 12 } />

            <Col lg={ 8 } md={ 8 } sm={ 12 }>

              <p>
                If you would like to work together, I would love to hear what you're working on. Reach out
                and contact me directly at <a href={ mailToLink }>tyler@beetroot.digital</a>.
              </p>

              <p>
                The more specific you can be about your project, the better.
              </p>
              <p>
                Useful information includes:
                <ul>
                  <li>Data available</li>
                  <li>Examples of similar work (if available)</li>
                  <li>Any techinical limitations (if known)</li>
                  <li>Budget</li>
                  <li>Project Timeframe</li>
                </ul>
              </p>

            </Col>

        </Row>

      </Grid>

    </div>

    )

  }

}