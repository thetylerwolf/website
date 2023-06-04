import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Grid, Row, Col } from "react-bootstrap";

import HeaderNav from "./HeaderNav";

export default class About extends Component {
  render() {
    const mailToLink = `mailto:hello@tylernwolf.com?subject=Let's work together`;

    return (
      <div className="about-wrap">
        <HeaderNav showBrand={true} location={this.props.location} />

        <Grid className="about-section">
          <Row>
            {/* <Col lg={ 4 } md={ 4 } sm={ 12 } /> */}

            <Col lg={2} md={2} sm={12}>
              <div className="about-logo">
                {/* <Link to="/"><img alt="Tyler Wolf" src="logo.png" /></Link> */}
                <div className="about-text">About</div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={2} md={2} sm={12} />

            <Col lg={8} md={8} sm={12}>
              <p>
                I'm Tyler Wolf. I am a{" "}
                <span className="highlight-2">
                  full-stack developer/data visualization expert
                </span>
                . I have been working in technology of some kind for 11 years.
              </p>
              {/* <p>
                I have a degree in Electrical Engineering (EE) from the
                University of Southern California. I chose to study EE because I
                had always dreamed of building{" "}
                <span className="highlight-3">digital art</span>. My first piece
                was the orange ghost from "Pac Man" made from electroluminescent
                wire. When I pressed a button, he would flash blue and white
                like in the game.
              </p>
              <p>
                It took me a long time to realize that I could make my passion
                for digital art into my job. It was when I started working as a{" "}
                <span className="highlight-3">front end developer</span> working
                with data visualization at a finance startup that it hit me. The
                creative potential of{" "}
                <span className="highlight-3">CSS, HTML and Javascript</span>{" "}
                blew my mind. This led to an interest in art history - I even
                got a membership at the MoMa in NYC.
              </p>
              <p>
                I incorporated my passion for art into my work with mixed
                results. So I decided I needed to become a better designer and
                worked my way into{" "}
                <span className="highlight-3">UX design</span>.
              </p>
              <p>
                I spent years oscillating between{" "}
                <span className="highlight-3">UX design</span> and{" "}
                <span className="highlight-3">UX development</span>, but I
                always wanted to work on something more creative than the work
                my job offered. I spent a lot of my free time learning about the
                technicals of{" "}
                <span className="highlight-3">
                  graphics programming - SVG, webGL, GLSL
                </span>
                , etc.
              </p>
              <p>
                Finally, I decided that if I wanted to do what I love, I needed
                to go out on my own and find the work that really interested me.
                I took a big risk, quit my job and{" "}
                <span className="highlight-3">went freelance</span> in May 2017.
              </p>
              <p>
                After a few years of freelance work, I found where my interests
                converged: Understanding and explaining complex systems with
                data visualization. Specifically, I am interested in how
                feedback loops emerge among participants in large systems and
                evolve over time. I explain these complex systems with{" "}
                <span className="highlight-3">
                  interactive and static/print data visualizations
                </span>
                , as well as creative projects with{" "}
                <span className="highlight-3">2D and 3D graphics</span>. I also{" "}
                <span className="highlight-2">speak publicly</span> and{" "}
                <span className="highlight-2">run workshops</span> about data
                visualization and product design and have{" "}
                <span className="highlight-3">
                  received an award and grant funding
                </span>{" "}
                for my work.
              </p> */}
              <p>
                As of November 2019, I work{" "}
                <span className="highlight-1">
                  full-time at{" "}
                  <a href="https://king.com" target="_blank">
                    King Games
                  </a>
                </span>{" "}
                as a data visualization engineer where I simplify massive,
                complex datasets into tools to aid decision-making. It's quite
                interesting!
              </p>

              <p>
                If you would like to{" "}
                <Link to="contact">hire me for a project</Link>, I am not
                actively taking on new projects, but I would love to hear what
                you're working on. Reach out and contact me directly at{" "}
                <a href={mailToLink}>hello@tylernwolf.com</a>.
              </p>

              <div className="icon-container">
                <a href="https://twitter.com/tylernwolf" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://github.com/thetylerwolf" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://www.linkedin.com/in/tylernwolf"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>

              <br />
              <br />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
