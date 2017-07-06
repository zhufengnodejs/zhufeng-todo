import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as types from '../store/action-types';
class TodoFooter extends Component{
    render(){
        return (
            <div className="row">
              <div className="col-sm-4">
                {
                  this.props.activeCount>0?<span style={{lineHeight:'34px'}}>你还有{this.props.activeCount}件待办事项</span>:null
                }
              </div>
              <div className="col-sm-5">
                 <button
                   onClick={()=>this.props.changeFilter('all')}
                   className={"btn "+(this.props.filter ==='all'?'btn-success':'btn-default')}>全部</button>
                  <button
                    onClick={()=>this.props.changeFilter('active')}
                    style={{marginLeft:5}}
                    className={"btn "+(this.props.filter ==='active'?'btn-success':'btn-default')}>未完成</button>
                  <button
                    onClick={()=>this.props.changeFilter('completed')}
                    style={{marginLeft:5}}
                    className={"btn "+(this.props.filter ==='completed'?'btn-success':'btn-default')}>已完成</button>
              </div>
              <div className="col-sm-3">
                {this.props.completedCount>0?
                  <button
                    className="btn btn-danger"
                    onClick={()=>this.props.deleteAllCompleted()}>清除已完成</button>
                  :null}
              </div>
            </div>
        )
    }
}

export default connect(
 state=>({
   activeCount:state.todos.list.filter(item=>!item.completed).length,
   completedCount:state.todos.list.filter(item=>item.completed).length,
   filter:state.filter
 }),
  {
    deleteAllCompleted:()=>({type:types.DELETE_ALL_COMPLETED}),
    changeFilter:(filter)=>({type:types.CHANGE_FILTER,filter})
  }
)(TodoFooter);