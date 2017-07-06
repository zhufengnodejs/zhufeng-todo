import React, {Component} from 'react';
import {connect} from 'react-redux';
class TodoList extends Component {
  render() {
    return (
      <ul className="list-group">
        {
          this.props.todos.map((item, index) => (
            <li className="list-group-item" key={index}>
              <input type="checkbox"/>
              <span style={{marginLeft:5}}>{item.title}</span>
              <span className="pull-right">
                 <button
                   className="btn btn-danger btn-xs">X</button>
              </span>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default connect(
  state => ({todos: state.todos}),
  dispatch => ({})
)(TodoList)