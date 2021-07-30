import React, { Component } from 'react'
import { addPerson } from '../../redux/actions/person';
import { connect } from 'react-redux';

class Person extends Component {

  hanleAdd = () => {
    const { names, ages } = this
    this.props.addPerson({ names: names.value, ages: Number(ages.value) })
  }
  render() {
    return (
      <div>
        <hr />
        我是Person组件
        <br />
        <input type="text" ref={(c) => { this.names = c }} placeholder="输入名字" /> &nbsp;&nbsp;
        <input type="text" ref={(c) => { this.ages = c }} placeholder="输入年龄" />&nbsp;&nbsp;
        <button onClick={this.hanleAdd}>添加</button>
      </div>
    )
  }
}
export default connect(
  state => ({ count: state.count, person: state.person })
  , {
    addPerson
  }
)(Person)