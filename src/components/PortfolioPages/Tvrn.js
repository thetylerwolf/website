import {
  Link,
} from 'react-router-dom'
import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'


const customStyles = {
  headerColor: {
    backgroundColor: '#333'
  }
}

export default class Tvrn extends Component {

  render() {

    return (

      <div className="view-portfolio-piece">

        <div
          className="piece-header tvrn"
          style={ customStyles.headerColor }
          >

          <div className="piece-title-wrap">

            <div className="piece-title" style={ customStyles.title }>Tvrn</div>
            <div className="title-bar" style={ customStyles.titleBar } />

          </div>

        </div>

        <div className="piece-body">

          <div className="summary-wrap">
            <div className="summary-bar" />
            <div className="summary-text">
              <div className="summary-title">Summary</div>
              <br/>
              TVRN
              <br/><br/>
              WebGL, WebVR, A-Frame, React, GLSL, WebRTC
              <br/><br/>
              UX Design / Full-stack Development / Branding
              <br/><br/>
              2015 - 2019
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
                <Col xs={ 12 } sm={ 12 } md={ 8 } xl={ 8 } lg={ 8 }>
                  <h3>56 Henry Exhibition</h3>
                </Col>
              </Row>

              <Row>
                <Col className="image-container" xs={ 12 } sm={ 12 } md={ 8 } xl={ 8 } lg={ 8 }>
                  <img alt="56 Henry" src="/portfolio/tvrn/56_henry.jpg" />
                </Col>
              </Row>

              <Row>
                <Col xs={ 12 } sm={ 12 } md={ 8 } xl={ 8 } lg={ 8 }>
                  <h3>Virtual Meeting Spaces</h3>
                </Col>
              </Row>

              <Row>
                <Col className="image-container" xs={ 12 } sm={ 12 } md={ 8 } xl={ 8 } lg={ 8 }>
                  <img alt="VR Island Meeting" src="/portfolio/tvrn/virtual_meeting.jpg" />
                </Col>

              </Row>

            </Grid>
          </div>

        </div>

      </div>

    )

  }

}
