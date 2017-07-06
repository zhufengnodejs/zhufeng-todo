import React,{Component} from 'react';
import {connect} from 'react-redux';
import {ADD_TODO} from '../store/action-types';
/**
 * 1. 当我们在输入框中按回车的时候，会向store发送一个action {type:ADD_TODO,title:'输入框的内容'}
 * 2. store会调用todos reducer，返回新的状态对象[{id:1,completed:false,title}]
 */
class TodoHeader extends Component{
    handleKeyDown = (event)=>{
      if(event.keyCode == 13 && event.target.value){
          let title = event.target.value;
          this.props.addTodo(title);
          event.target.value='';
      }
    }
    render(){
        return (
          <input type="text" className="form-control" onKeyDown={this.handleKeyDown}/>
        )
    }
}

export default connect(
  state=>({}),//把总的状态树映射为当前组件需要的属性对象
  dispatch=>({//把store.dispatch方法映射为一个对象
    addTodo:(title)=>dispatch({type:ADD_TODO,title})
  })
)(TodoHeader);