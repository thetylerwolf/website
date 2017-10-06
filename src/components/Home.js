import React, { Component } from 'react'
import HeaderNav from './HeaderNav'

import '../assets/css/Home.css'

export default class Home extends Component {

  render() {

    return (

      <div className="home">

        <HeaderNav />

        <h2>Home</h2>

      </div>

    )

  }

}