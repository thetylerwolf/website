import React, { Component } from 'react'


let frameStyles = {
  border: 'none',
  position: 'absolute',
  minHeight: '100%',
  width: '1000px',
  overflow: 'scroll',
}

export default class Legacy extends Component {
  constructor(props) {
    super(props)

    this.frameUrl = `http://tylernwolf.com/archive/v3/index.html${ this.props.location.hash }`
  }

  render() {

    return (

      <div className="legacy">

        <iframe scrolling="yes" title="legacyFrame" src={ this.frameUrl } className="legacy-frame" style={ frameStyles } />

      </div>

    )

  }

}

