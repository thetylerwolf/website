import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import '../assets/css/HeaderNav.css'

export default class HeaderNav extends Component {

  constructor( props ) {
    super( props )

    this.state = {
      showBrand: !!props.showBrand,
      showMenu: false
    }
  }

  componentDidUpdate( newProps, newState ) {

  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render() {

    return (
      <div className="header-wrap">

        <div className={ `full-menu ${ this.state.showMenu ? 'active' : '' }` } >
          <Link className="menu-link home" to="/"><span>Home</span></Link>
          <Link className="menu-link about" to="/about"><span>About</span></Link>
          <Link className="menu-link contact" to="/contact"><span>Contact</span></Link>
        </div>

        <header className="header-nav">

          {
            this.state.showBrand ? <span className="brand"><Link to="/"><img id="logo" src="/logo.svg" alt="Tyler Wolf" /></Link></span> : undefined
          }
          <div className="toggle">
              {/*
              <canvas id="header-canvas"></canvas>
              */}
              <span className="menu-text" onClick={ () => this.toggleMenu() }>{ this.state.showMenu ? 'CLOSE' : 'MENU' }</span>
          </div>

        </header>

      </div>

    )

  }

}