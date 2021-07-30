import React, { Component } from 'react'
import store from '../../redux/store';
import { increment, decrement, incrementAsycn } from '../../redux/actions/count';
import { connect } from 'react-redux';
class Count extends Component {
  //加法
  increment = () => {
    const { value } = this.selectNumber
    this.props.increment(value * 1)
  }
  //减法
  decrement = () => {
    const { value } = this.selectNumber
    this.props.decrement(value * 1)


  }
  //奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    const count = store.getState()
    if (count % 2 !== 0) {
      this.props.increment(value * 1)

    }
  }
  //异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.incrementAsycn(value * 1, 500)
  }

  render() {
    const { count, person } = this.props
    console.log(this.props);
    return (
      <div>
        <h1>当前求和为：{count}</h1>
        {
          person.map((item, index) => <h2 key={index}>{item.names} {item.ages}</h2>)
        }
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
        <br />
        <br />
      </div>
    )
  }
}

export default connect(
  //mapStateToProps(state)隐射状态，在UI组件中可用this.props.key获取状态值(也就是vue中的state)
  state => ({ count: state.count, person: state.person })
  ,
  //这是简写方式。mapDispatchToProps(dispatch)隐射store中的方法。也是通个key:value。但这个可以简写
  {
    increment,
    decrement,
    incrementAsycn
  }
)(Count)

