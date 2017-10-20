import React, { Component } from 'react'
import {
  Link,
  NavLink,
} from 'react-router-dom'

// import SparkleBall from '../assets/js/SparkleBall'

export default class HeaderNav extends Component {

  constructor( props ) {
    super( props )

    this.state = {
      showMenu: false
    }

    // this.sparkleball = new SparkleBall('a')
  }

  componentDidUpdate( oldProps, oldState ) {
    if(this.state.showMenu) {
      if(this.props.onShow) this.props.onShow()
      // this.sparkleball.startAnimation()
    } else {
      if(this.props.onHide) this.props.onHide()
      // this.sparkleball.stopAnimation()
    }
  }

  // componentDidMount( newProps, newState ) {
  //   this.sparkleball.init( 'header-canvas-wrap', 'full-menu' )
  //   this.sparkleball.stopAnimation()
  // }

  // componentWillUnmount() {
  //   this.sparkleball.remove()
  // }

  toggleMenu() {
    let showMenu = !this.state.showMenu

    if(showMenu) {
      document.body.className = 'noscroll'
    } else {
      document.body.className = ''
    }

    this.setState({ showMenu })
  }

  render() {

    return (
      <div className={ `header-wrap ${ this.state.showMenu ? 'active' : '' } ${ this.props.light ? 'light' : '' }` }>

        <div className="full-menu" >
          <NavLink exact activeClassName="selected" className="menu-link home" to="/" onClick={ (e) => this.toggleMenu(e) }><span>Home</span></NavLink>
          <NavLink exact activeClassName="selected" className="menu-link about" to="/about" onClick={ (e) => this.toggleMenu(e) }><span>About</span></NavLink>
        </div>

        <header className="header-nav">

          <span className={ `brand ${ !this.props.showBrand ? 'hidden' : '' }` }><Link to="/"><img id="logo" src={ `/${ this.props.light ? 'logo_white.svg' : 'logo.svg' }` } alt="Tyler Wolf" /></Link></span>

          <div className="toggle">
              <span className="menu-text" onClick={ () => this.toggleMenu() }>{ this.state.showMenu ? 'CLOSE' : 'MENU' }</span>
          </div>

        </header>

      </div>

    )

  }

}