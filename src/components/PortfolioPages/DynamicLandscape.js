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
    backgroundColor: "#006aa8",
  },
};

export default class DynamicLandscape extends Component {
  render() {
    return (
      <div className="view-portfolio-piece">
        <div
          className="piece-header dynamic-landscape"
          style={customStyles.headerColor}
        >
          <div className="piece-title-wrap">
            <div className="piece-title" style={customStyles.title}>
              UN Sustainable Development Goals
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
              T-SNE data visualization
              <br />
              <br />
              Sketch, Javascript, D3.js
              <br />
              <br />
              Data Visualization Design, Front-end Development
              <br />
              <br />
              June 2019
              <br/>
              <br/>
              Live link: <a href="https://thetylerwolf.github.io/dynamiclandscape" target="_blank">https://thetylerwolf.github.io/dynamiclandscape</a>
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
                    T-SNE is a machine learning algorithm for reducing
                    high-dimenional data into 2- or 3-dimensional data. In this
                    visualization, we used a dataset detailing how well each
                    municipality in Sweden performed across the 17 UN
                    Sustainable Development goals. Each goal contains a subset
                    of data points that correspond to that goal. Goals can be
                    toggled on and off to influence how the algorithm groups the
                    municipalities.{" "}
                  </p>
                  <p>
                    I worked with two collaborators on this project during the
                    "Hack for Sweden" hackathon in 2019.
                  </p>
                  <p>
                    <strong>Limitations:</strong>
                    <br />
                    While the T-SNE algorithm is very interesting and the
                    visualization is visually quite fascinating, we found that
                    even after a detailed explanation, most users could not
                    identify useful patterns in the visualization. The key
                    takeaway here is that T-SNE is great for a small subset of
                    visualization use cases, but those are likely for highly
                    technical audiences.
                  </p>
                </Col>
              </Row>

              {/* <Row>
                <Col xs={12} sm={12} md={8} xl={8} lg={8}>
                  <h3>Grouped data</h3>
                </Col>
              </Row> */}

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
                    alt="T-SNE main view"
                    src="/portfolio/dynamic-landscape/dn-main.png"
                  />
                </Col>
              </Row>

              <Row>
                <Col xs={12} sm={12} md={8} xl={8} lg={8}>
                  <h3>Detail View</h3>
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
                    alt="T-SNE thinking"
                    src="/portfolio/dynamic-landscape/dn-detail.png"
                  />
                </Col>
              </Row>

              <Row>
                <Col xs={12} sm={12} md={8} xl={8} lg={8}>
                  <h3>Live Analysis</h3>
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
                    alt="T-SNE thinking"
                    src="/portfolio/dynamic-landscape/dn-thinking.png"
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
