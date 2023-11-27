import React, { Component } from 'react'

export default class MountingPhase extends Component {
   state={color:"Start"}
componentDidMount()
{
    setTimeout(()=>{this.setState({color:"End"})},3000)
}
    render() {
    return (
      <div>
        <h1>{this.state.color}</h1>
        <p id="i"></p>
      </div>
    )
  }
}