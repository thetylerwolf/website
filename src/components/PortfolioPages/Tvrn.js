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

export default class Tvrn extends Component {
  constructor() {
    super()
  }

  render() {

    return (

      <div className="view-portfolio-piece">

        <div className="piece-header" style={{ backgroundImage: 'url(/portfolio/tvrn/tvrn_cover.jpg)' }}>

          <div className="piece-title-wrap">

            <div className="piece-title" style={ customStyles.title }>Tvrn</div>
            <div className="title-bar" style={ customStyles.titleBar } />

          </div>

        </div>

        <div className="piece-body">

          <div className="summary-wrap">
            <div className="summary-bar" />
            <div className="summary-text">
              TVRN
              <br/>
              WebGL, WebVR, A-Frame, React, GLSL, WebRTC
              <br/>
              UX Design / Full-stack Development / Branding
              <br/>
              2015 - Ongoing
              <br/>
              <Link to="http://www.tvrn.me">Visit Website</Link>
            </div>
          </div>

          <div className="description-wrap">
            <Grid>

              <Row>
                <Col xs={ 12 }>
                  <h1>Overview</h1>
                </Col>
              </Row>

              <Row>
                <Col xs={ 12 }>

                  <p>
                    TVRN is a virtual reality project I started in 2015 with
                    the purpose of making art exhibitions accessible to a wider
                    audience.
                  </p>
                  <p>
                    Two friends of mine joined the team in 2016 and we have worked
                    with one gallery to bring their art to the rest of the world.
                    We also experimented with making a virtual meeting space with
                    voice chat. This worked quite well and we use it today for our own
                    meetings.
                  </p>
                  <p>
                    We are continuing to explore how virtual reality can enhance
                    the experience of art exploration as the technology sees
                    greater adoption.
                  </p>
                </Col>

              </Row>

              <Row>
                <br/>
                <h3>56 Henry Exhibition</h3>
                <Col className="image-container" xs={ 12 }>
                  <img src="/portfolio/tvrn/56_henry.jpg" />
                </Col>

              </Row>

              <Row>
                <br/>
                <h3>Virtual Meeting Spaces</h3>
                <Col className="image-container" xs={ 12 }>
                  <img src="/portfolio/tvrn/virtual_meeting.jpg" />
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
