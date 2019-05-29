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

export default class Biome extends Component {

  render() {

    return (

      <div className="view-portfolio-piece">

        <div className="piece-header biome">

          <div className="piece-title-wrap">

            <div className="piece-title" style={ customStyles.title }>Anonymous Client</div>
            <div className="title-bar" style={ customStyles.titleBar } />

          </div>

        </div>

        <div className="piece-body">

          <div className="summary-wrap">
            <div className="summary-bar" />
            <div className="summary-text">
              <div className="summary-title">Summary</div>
              <br/>
              Anonymous Client - Probiotic customer report
              <br/><br/>
              Sketch, R, D3
              <br/><br/>
              Data Visualization Design
              <br/><br/>
              February 2018
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
                    The client approved showing this work in my portfolio,
                    but requested to be listed anonymously because
                    they do not publicly share information about their
                    product.
                  </p>
                  <p>
                    The client produces a line of probiotics that are
                    specifically tailored to their customers' gut biome
                    profile. I designed a visualization to help their
                    customers understand the progress of their
                    internal biome as they use the probiotics.
                  </p>
                </Col>
              </Row>

              <Row>
                <Col xs={ 12 } sm={ 12 } md={ 8 } xl={ 8 } lg={ 8 }>
                  <h3>Biome Report</h3>
                </Col>
              </Row>

              <Row>
                <Col className="image-container" xs={ 12 } sm={ 12 } md={ 8 } xl={ 8 } lg={ 8 }>
                  <img alt="Biome Report" src="/portfolio/biome/Report.png" />
                </Col>
              </Row>

              <Row>
                <Col xs={ 12 } sm={ 12 } md={ 8 } xl={ 8 } lg={ 8 }>
                  <p>
                    The report visualizes the proportion of each
                    bacteria in the gut biome sample. When the user
                    clicks on a test result at the top, they
                    are shown the results for that test. Hovering
                    on a row on the left highlights the bacteria in
                    the chart on the right and provide a description.
                    Clicking a bacteria either
                    in the table or in the chart will show the bacteria's
                    presence across all tests in the bottom right.
                  </p>
                  <p>
                    For this visualization, it was important to communicate
                    both the presence of the various bacteria in the customer
                    sample and the significance of each bacteria. There are
                    literally trillions of bacteria that live in the human gut,
                    so they have been categorized into six buckets ranging from
                    Probiotic (healthy) to Pathogenic (unhealthy) to make the
                    data accessible.
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
