import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import HeaderNav from './HeaderNav'

export default class About extends Component {

  render() {

    return (

      <div className="about-wrap">

        <HeaderNav
          showBrand={ false }
          location={ this.props.location }
        />

        <div className="about-section">

          <div className="about-logo">
            <Link to="/"><img alt="Tyler Wolf" src="logo.png" /></Link>
          </div>

          <p>
            I am an experienced digital product professional.
            Over the years, I have worked across User Experience Design,
            Data Visualization Design and Front End development. I now
            work freelance on data visualization (design + code) and
            UX design projects.

            If you would like to work with me, contact me directly at
            <br/>
            <a href="mailto:tyler@tylernwolf.com">tyler@tylernwolf.com</a>.
          </p>

          <div className="icon-container">
            <a href="https://twitter.com/tylernwolf" target="_blank"><FontAwesome name="twitter" /></a>
            <a href="https://github.com/thetylerwolf" target="_blank"><FontAwesome name="github" /></a>
            <a href="https://www.linkedin.com/in/tylernwolf" target="_blank"><FontAwesome name="linkedin" /></a>
          </div>

        </div>


      </div>

    )

  }

}