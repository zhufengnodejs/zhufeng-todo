import React,{Component} from 'react';
export default class TodoList extends Component{
    render(){
        return (
          <ul className="list-group">
            <li className="list-group-item">学习React</li>
            <li className="list-group-item">学习Vue</li>
          </ul>
        )
    }
}