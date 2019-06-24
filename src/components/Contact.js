import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap'

import HeaderNav from './HeaderNav'

export default class Contact extends Component {

  render() {

    const mailToLink = `mailto:tyler@beetroot.digital?subject=Let's work together`

    return (

      <div className="contact-wrap">

        <HeaderNav
          showBrand={ true }
          location={ this.props.location }
        />

        <Grid className="contact-section">

          <Row>
            {/* <Col lg={ 4 } md={ 4 } sm={ 12 } /> */}

            <Col lg={ 2 } md={ 2 } sm={ 12 }>
              <div className="contact-logo">
                {/* <Link to="/"><img alt="Tyler Wolf" src="logo.png" /></Link> */}
                <div className="contact-text">Hire Me</div>
              </div>
            </Col>

          </Row>

          <Row>

            <Col lg={ 2 } md={ 2 } sm={ 12 } />

            <Col className="col-center" lg={ 8 } md={ 8 } sm={ 12 }>

              <p>
                If you would like to hire me for a project, I would love to hear what you're working on. Reach out
                and contact me directly.
              </p>

              <Button className="btn" href={ mailToLink }>
                Contact me
              </Button>

              <br/>

              <p>
                I'll respond directly to your email and we can schedule a call to discuss your project. When understanding
                the full breadth of an engagement, my goal is to learn what data is being used and is available
                for the project.
              </p>
              <p>
                I enjoy creating work from scratch, but you may have a particular style
                you're interested in, so I'll also ask for examples if they exist. Other important factors
                include project deadlines and budget - addressing these details early in the conversation lets
                us shift focus to the project and getting it done.
              </p>

              <br/>

              <p className="bold">Companies I've worked with</p>

              <div className="public-publications">
                <img className="publication-image adobe-logo" src="adobe-logo.png" alt="Adobe Inc" />
                <img className="publication-image etrade-logo" src="etrade.png" alt="E Trade" />
                <img className="publication-image brookings-logo" src="brookings.svg" alt="The Brookings Institution" />
              </div>

              <p className="bold">Publications</p>

              <p>My work has appeared in the following publications</p>

              <div className="public-publications">
                <img className="publication-image forbes-logo" src="forbes.svg" alt="Forbes" />
                <img className="publication-image brookings-logo" src="brookings.svg" alt="The Brookings Institution" />
                <img className="publication-image dataface-logo" src="dataface.jpg" alt="The Data Face" />
                <img className="publication-image spectrum-logo" src="spectrum.png" alt="Spectrum News" />
              </div>

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

                <p>
                  I love speaking publically. I've spoken to groups large and small about topics in data visualization
                  and product design. Topics I've spoken about include: user-centered design, design process,
                  optimizing process and communication and technical talks about specific techniques. If you'd
                  like to hire me to speak with your organization, reach me at the email above.
                </p>

                <p className="faded">2019</p>
              {/*
                <ul>
                  <li> Upcoming 0 "AI Techniques for Supercharged Data Visualization" - Øredev Conference 2018</li>
                </ul>
              */}

                <ul>
                  <li>"A More Efficient Dataviz Design Process" - Data Visualization Design Stockholm</li>
                </ul>

                <p className="faded">2018</p>
                <ul>
                  <li>"Designing Intuitive Tools" - Øredev Conference 2018</li>
                </ul>

            </Col>

        </Row>

      </Grid>

    </div>

    )

  }

}