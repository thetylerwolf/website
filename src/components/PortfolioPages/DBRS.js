import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

const customStyles = {
  title: {
    color: "#fff",
  },
  titleBar: {
    backgroundColor: "#fff",
  },
  headerColor: {
    backgroundColor: "#e21836",
  },
};

export default class Basis extends Component {
  render() {
    return (
      <div className="view-portfolio-piece">
        <div className="piece-header basis" style={customStyles.headerColor}>
          <div className="piece-title-wrap">
            <div className="piece-title" style={customStyles.title}>
              Morningstar
            </div>
            <div className="title-bar" style={customStyles.titleBar} />
          </div>
        </div>

        <div className="piece-body">
          <div className="summary-wrap">
            <div className="summary-bar" />
            <div className="summary-text">
              <div className="summary-title">Summary</div>
              <br />
              Viewpoint - Commercial real estate research tool
              <br />
              <br />
              Sketch, Figma
              <br />
              <br />
              Product Design, Data Visualization Design
              <br />
              <br />
              November 2018 - Present
            </div>
          </div>

          <div className="description-wrap">
            <Grid>
              <Row>
                <Col xs={12} sm={12} md={8} xl={8} lg={8}>
                  <h1>Overview</h1>
                </Col>
              </Row>

              <Row>
                <Col xs={12} sm={12} md={8} xl={8} lg={8}>
                  <p>
                    Viewpoint is an industry-leading Commercial Real Estate
                    (CRE) research platform from Morningstar, one of the world's
                    largest credit ratings agencies. Viewpoint gives users
                    access to Morningstar's vast library of investment ratings
                    through an intuitive, map-based interface. Viewpoint is
                    unrivaled in its peer group with regard to design and
                    usability.
                  </p>
                  <p>
                    I worked with the business to re-design their app for a
                    long-awaited product update. Through the update, we expanded
                    the amount of data available to users to include an entire
                    new continent (Europe).
                  </p>
                  <p>
                    In addition to introducing new data, we added functionality
                    to make it easier for users to compare investments across
                    countries both visually (on the map) and in a spreadsheet
                    format.
                  </p>
                </Col>
              </Row>

              <Row>
                <Col xs={12} sm={12} md={8} xl={8} lg={8}>
                  <h3>US Investment Research Map</h3>
                </Col>
              </Row>

              <Row>
                <Col
                  className="image-container"
                  xs={12}
                  sm={12}
                  md={8}
                  xl={8}
                  lg={8}
                >
                  <img
                    alt="US investment research map"
                    src="/portfolio/dbrs/dbrs.jpg"
                  />
                </Col>
              </Row>

              <Row>
                <Col xs={12} sm={12} md={8} xl={8} lg={8}>
                  <h3>European Investment Research Map</h3>
                </Col>
              </Row>

              <Row>
                <Col
                  className="image-container"
                  xs={12}
                  sm={12}
                  md={8}
                  xl={8}
                  lg={8}
                >
                  <img
                    alt="european investment research map"
                    src="/portfolio/dbrs/europe.jpg"
                  />
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
