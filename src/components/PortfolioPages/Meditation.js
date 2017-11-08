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

export default class Meditation extends Component {

  render() {

    return (

      <div className="view-portfolio-piece">

        <div className="piece-header meditation" style={{ backgroundImage: 'url(/portfolio/meditation/meditation_cover.jpg)' }}>

          <div className="piece-title-wrap">

            <div className="piece-title" style={ customStyles.title }>Natural Meditation</div>
            <div className="title-bar" style={ customStyles.titleBar }/>

          </div>

        </div>

        <div className="piece-body">

          <div className="summary-wrap">
            <div className="summary-bar" />
            <div className="summary-text">
              <div className="summary-title">Summary</div>
              <br/>
              Wolflux LLC - Personal Meditation Product
              <br/><br/>
              Sketch, React Native
              <br/><br/>
              Market Research / Product Design / Branding / Data Visualization / Full Stack Development
              <br/><br/>
              Ongoing project
            </div>
          </div>

          <div className="description-wrap">
            <Grid>
            {/*}
              <Row>
                <Col xs={ 12 }>
                  <h1>Overview</h1>
                </Col>
              </Row>

              <Row>
                <Col xs={ 12 }>
                  <p>
                    Natural Meditation is a personal meditation timer app. There are countless meditation
                    apps across the app stores, but most are brand-centric and focused on promoting content
                    sales at the expense of measurable insights and customization. Natural Meditation
                    is designed to fill the gap. The app is focused on providing users an easy way to set a timer
                    and just sit while providing an easy-to-understand analysis of what works and what doesn't
                    for users' personal progress. Meditation practice is a highly personal enterprise. Shouldn't
                    a meditation app be, too?
                  </p>
                </Col>
              </Row>
            */}
              <Row>
                <br/>
                <h3>Mobile App</h3>
                <Col className="image-container" xs={ 12 }>
                  <img alt="Landing" src="/portfolio/meditation/landing.jpg" />
                </Col>

              </Row>

              <Row>

                <Col className="image-container" xs={ 12 }>
                  <img alt="Home" src="/portfolio/meditation/home.jpg" />
                </Col>

              </Row>

              <Row>

                <Col className="image-container" xs={ 12 }>
                  <img alt="Stats" src="/portfolio/meditation/stats.jpg" />
                </Col>

              </Row>


            </Grid>
          </div>

        </div>

      </div>

    )

  }

}
