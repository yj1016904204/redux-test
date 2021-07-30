import React, { Component } from 'react'
import Count from './compainer/Count'
import Person from './compainer/Person';

export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
        <Person />
      </div>
    )
  }
}
