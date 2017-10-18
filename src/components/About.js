import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import HeaderNav from './HeaderNav'

import '../assets/css/About.css'

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
            <Link to="mailto:tyler@tylernwolf.com"> tyler@tylernwolf.com</Link>.
          </p>

          <div className="icon-container">
            <Link to="https://twitter.com/tylernwolf"><FontAwesome name="twitter" /></Link>
            <Link to="https://github.com/thetylerwolf"><FontAwesome name="github" /></Link>
            <Link to="https://www.linkedin.com/in/tylernwolf"><FontAwesome name="linkedin" /></Link>
          </div>

        </div>


      </div>

    )

  }

}