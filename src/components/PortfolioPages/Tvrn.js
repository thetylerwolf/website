import {
  Route,
  Link,
} from 'react-router-dom'
import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'


const customStyles = {
  title: {
    color:'#1a1a1a'
  },
  titleBar: {
    backgroundColor:'#1a1a1a'
  }
}

export default class Tvrn extends Component {
  constructor() {
    super()
  }

  render() {

    return (

      <div className="view-portfolio-piece">

        <div className="piece-header" style={{ backgroundImage: 'url(/portfolio/tvrn/tvrn_cover.jpg)' }}>

          <div className="piece-title-wrap">

            <div className="piece-title" style={ customStyles.title }>Tvrn</div>
            <div className="title-bar" style={ customStyles.titleBar } />

          </div>

        </div>

        <div className="piece-body">

          <div className="summary-wrap">
            <div className="summary-bar" />
            <div className="summary-text">
              Summary Content
              <br/>
              More content
            </div>
          </div>

          <div className="description-wrap">
            <Grid>

              <Row>
                <Col xs={ 12 }>
                  <h1>Overview</h1>
                </Col>
              </Row>

              <Row>
                <Col xs={ 12 }>
                  <p>Vida needed a new product. I made it happen.
                  Vida needed a new product. I made it happen. Vida
                  needed a new product. I made it happen. Vida needed
                   a new product. I made it happen. Vida needed a new
                    product. I made it happen.</p>
                </Col>
              </Row>

            </Grid>
          </div>

        </div>
        {/* <img className="piece-header" src='/portfolio/vida/vida_cover.jpg)'/> */}

      </div>

    )

  }

}
