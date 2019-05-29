import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

const customStyles = {
  headerColor: {
    backgroundColor: '#039DF4'
  }
}

export default class Vida extends Component {

  render() {

    return (

      <div className="view-portfolio-piece">

        <div className="piece-header vida" style={ customStyles.headerColor }>

          <div className="piece-title-wrap">

            <div className="piece-title">SolidX / Vida</div>
            <div className="title-bar" />

          </div>

        </div>

        <div className="piece-body">

          <div className="summary-wrap">
            <div className="summary-bar" />
            <div className="summary-text">
              <div className="summary-title">Summary</div>
              <br/>
              SolidX - Vida Cybersecurity App
              <br/><br/>
              Sketch, React, Bootstrap, Material UI, Python
              <br/><br/>
              UX Design / UX Research / Front End Development
              <br/><br/>
              Ongoing project
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
                    SolidX is a bitcoin startup that makes cybersecurity products.
                    Vida is the brand of their flagship personal security product.
                    Vida is a suite of apps that enable the highest level of personal
                    cybersecurity with an emphasis on usability.
                  </p>
                </Col>
              </Row>


              <Row>
                <Col xs={ 12 } sm={ 12 } md={ 8 } xl={ 8 } lg={ 8 }>
                  <h3>Responsive Website</h3>
                </Col>
              </Row>

              <Row>
                <Col className="image-container" xs={ 12 } sm={ 12 } md={ 8 } xl={ 8 } lg={ 8 }>
                  <img alt="Desktop Website" src="/portfolio/vida/Desktop.jpg" />
                </Col>

              </Row>

              <Row>
                <Col xs={ 12 } sm={ 12 } md={ 8 } xl={ 8 } lg={ 8 }>
                  <h3>Mobile Application</h3>
                </Col>
              </Row>

              <Row>
                <Col className="image-container" xs={ 12 } sm={ 12 } md={ 8 } xl={ 8 } lg={ 8 }>
                  <img alt="Mobile App" style={{ border: '1px solid #1a1a1a' }} src="/portfolio/vida/mobile_home.png" />
                </Col>
              </Row>
              <Row>
                <Col className="image-container" xs={ 12 } sm={ 12 } md={ 8 } xl={ 8 } lg={ 8 }>
                  <img alt="Mobile Profile" style={{ border: '1px solid #1a1a1a' }} src="/portfolio/vida/mobile_profile.png" />
                </Col>
              </Row>

              <Row>
                <Col xs={ 12 } sm={ 12 } md={ 8 } xl={ 8 } lg={ 8 }>
                  <h3>Web Application drag and drop UI</h3>
                </Col>
              </Row>

              <Row>
                <Col className="image-container" xs={ 12 } sm={ 12 } md={ 8 } xl={ 8 } lg={ 8 }>
                  <img  alt="Web App Auth UI" src="/portfolio/vida/web_auth_groups.jpg" />
                </Col>
              </Row>

            </Grid>
          </div>

        </div>

      </div>

    )

  }

}
