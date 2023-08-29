import React, { Component } from "react";
import { Link } from "react-router-dom";

import ScrollWatcher from "../assets/js/ScrollWatcher";
import HeaderNav from "./HeaderNav";
import PortfolioPiece from "./PortfolioPiece";

import portfolio from "../assets/js/portfolio.js";

import { Grid, Row, Col } from "react-bootstrap";

let scrollWatcher = new ScrollWatcher();

let portfolioPieces = portfolio.entries.map((entry, i) => {
  return (
    <Col lg={4} md={6} sm={12} className="piece-wrap" key={i}>
      <PortfolioPiece entry={entry} />
    </Col>
  );
});

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      showBrand: false,
      show: false,
    };

    // this.sb = new SparkleBall()
  }

  componentDidMount() {
    // this.sb.init( 'home-canvas-wrap' )

    scrollWatcher
      .init()
      .onScrollStart((e) => this.onScrollStart(e))
      .onScrollEnd((e) => this.onScrollEnd(e));

    this.setState({ show: true });

    // let nameCanvas = this.refs.nameCanvas
    // let ctx = nameCanvas.getContext('2d')
    // nameCanvas.width = nameCanvas.width
    // nameCanvas.height = nameCanvas.height

    // ctx.lineWidth = 1
    // ctx.strokeStyle = '#000000'
    // let path = parse(logoPath)

    // console.log(path)
    // draw(ctx, path)
    // ctx.stroke()
  }

  onScrollStart(e) {}

  onScrollEnd(e) {
    // if(window.scrollY > window.innerHeight) {

    //   this.sb.stopAnimation()

    // } else {

    //   this.sb.startAnimation()

    // }

    let enterHeader = window.scrollY > window.innerHeight * 0.5 ? false : true;

    this.setState({ showBrand: !enterHeader });
  }

  componentWillUnmount() {
    scrollWatcher.remove();
    this.setState({ show: false });
    // this.sb.remove()
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="home">
        <HeaderNav
          showBrand={this.state.showBrand}
          location={this.props.location}
        />

        <div className="intro-section">
          <div className="intro-copy-wrap">
            <div className="name-wrap">
              {/* <canvas ref="nameCanvas"></canvas> */}
              {/* <img src="logo.png" alt="Tyler Wolf" /> */}
              <p>
                I'm <span className="name-text">Tyler Wolf</span>
              </p>
              <p>
                Freelance{" "}
                <span className="highlight-2">Full-Stack Developer</span> and{" "}
                <span className="highlight-1">Data Visualization Expert</span>
              </p>
              <p>
                I am currently available and taking on new freelance projects.
              </p>
              <p>
                This is my portfolio website. Learn more about me{" "}
                <a href="https://wolfdev.se">here</a>.
              </p>
              {/* <p>In industry terms, I make <span className="highlight-2">data visualizations</span> and <span className="highlight-2">design digital products</span></p> */}
              {/* <p> */}
              {/* In industry terms, I specialize in{" "} */}
              {/* <span className="highlight-3">interactive data graphics</span> */}
              {/* </p> */}
              {/*
                  <p>Get in touch to <span className="highlight-2">hire me</span> <Link className="dark-link" to="/contact">here</Link></p>
                  <p>You can learn more <span className="highlight-2">about me</span> <Link className="dark-link" to="/about">here</Link></p>
                */}
            </div>
            <br />
            {/*
              <div className="services-copy">
                Award-Winning, Contract
                <br/>
                Data Viz / UX Designer
              </div>
            */}
          </div>
        </div>

        <div className="home-portfolio-wrap">
          <div className="portfolio-title">Portfolio</div>
          <Grid>
            <Row>{portfolioPieces}</Row>
          </Grid>
        </div>
      </div>
    );
  }
}
