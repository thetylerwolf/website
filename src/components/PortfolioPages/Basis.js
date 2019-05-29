import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

const customStyles = {
  title: {
    color:'#fff'
  },
  titleBar: {
    backgroundColor:'#fff'
  },
  headerColor: {
    backgroundColor: '#ffb200'
  }
}

export default class Basis extends Component {

  render() {

    return (

      <div className="view-portfolio-piece">

        <div className="piece-header basis" style={ customStyles.headerColor }>

          <div className="piece-title-wrap">

            <div className="piece-title" style={ customStyles.title }>Sentinel Labs</div>
            <div className="title-bar" style={ customStyles.titleBar } />

          </div>

        </div>

        <div className="piece-body">

          <div className="summary-wrap">
            <div className="summary-bar" />
            <div className="summary-text">
              <div className="summary-title">Summary</div>
              <br/>
              Sentinel Labs - Basis CRE Management Platform
              <br/><br/>
              Sketch, D3
              <br/><br/>
              User Research, Product Design, Data Visualization Design
              <br/><br/>
              May 2018 - Present
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
                    Sentinel Labs' primary offering is a Commercial Real Estate (CRE)
                    workflow management platform. The platform deals with very complex
                    hierarchy of data. Users are CRE professionals who manage their
                    data and work tasks through the Basis platform.
                  </p>
                  <p>
                    Working on Basis required learning how this ubiquitous, yet
                    discreet industry handles and understands its own data. From there
                    it was about understanding how the Basis platform could enable
                    its users to better understand, access and manage their own data while
                    simulataneously digitizing many of their pen-and-paper processes.
                  </p>
                  <p>
                    Users have consistently responded positively to the initial platform
                    redesign and subsequent updates. We have engaged in a beneficial cycle
                    of release, user interview, analyze, improve. Since our initial redesign,
                    Sentinel Labs has more than doubled their paying customer base.
                  </p>
                </Col>
              </Row>

              <Row>
                <Col xs={ 12 } sm={ 12 } md={ 8 } xl={ 8 } lg={ 8 }>
                  <h3>Property workflow report</h3>
                </Col>
              </Row>

              <Row>
                <Col className="image-container" xs={ 12 } sm={ 12 } md={ 8 } xl={ 8 } lg={ 8 }>
                  <img alt="Property Report" src="/portfolio/sentinel-labs/sentinel-labs.jpg" />
                </Col>
              </Row>

              <Row>
                <Col xs={ 12 } sm={ 12 } md={ 8 } xl={ 8 } lg={ 8 }>
                  <p>
                    One of Basis' core offerings is the ability to create and automate
                    standardized workflows around deal-making and due diligence. The
                    workflow management UI was designed to make workflow progress and
                    participant responsibilities easy to understand and work through.
                  </p>
                  <p>
                    The design uses clear iconography and colors to communicate task
                    progress on task cards. Spatial alignment of task cards in swimlanes
                    corresponding to milestones makes workflow progress clear at a glance.
                    Users can drag and drop tasks across the UI as they're completed.
                  </p>

                </Col>
              </Row>

            </Grid>
          </div>

        </div>

      </div>

    )

  }

}
