import React, { Component } from 'react'

class About extends Component {
  render() {
    console.log("PROPS FROM CLASS ", this.props);
    return (
      <div>
        <h1>About</h1>
      </div>
    )
  }
}

export  default About
