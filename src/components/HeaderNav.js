import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import '../assets/css/HeaderNav.css'

export default class HeaderNav extends Component {

  render() {

    return (

      <header className="header-nav">

        <span className="brand"><Link to="/"><img id="logo" src="logo.svg" /></Link></span>

        <div className="toggle">
            <canvas id="header-canvas"></canvas>
            <span className="menu-text">MENU</span>
        </div>

      </header>

    )

  }

}