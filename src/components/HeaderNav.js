import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import '../assets/css/HeaderNav.css'

export default class HeaderNav extends Component {

  constructor( props ) {
    super( props )

    this.state = {
      showBrand: !!props.showBrand
    }
  }

  componentDidUpdate( newProps, newState ) {
    console.log('did update')
  }

  render() {

    return (

      <header className="header-nav">

        {
          this.state.showBrand ? <span className="brand"><Link to="/"><img id="logo" src="logo.svg" alt="Tyler Wolf" /></Link></span> : undefined
        }
        <div className="toggle">
            <canvas id="header-canvas"></canvas>
            <span className="menu-text">MENU</span>
        </div>

      </header>

    )

  }

}