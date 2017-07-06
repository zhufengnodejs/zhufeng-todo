import React,{Component} from 'react';
import {connect} from 'react-redux';
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
                 <button className="btn btn-default">全部</button>
                  <button
                    style={{marginLeft:5}}
                    className="btn btn-default">未完成</button>
                  <button
                    style={{marginLeft:5}}
                    className="btn btn-default">已完成</button>
              </div>
              <div className="col-sm-3">
                {this.props.completedCount>0?<button className="btn btn-danger">清除已完成</button>:null}
              </div>
            </div>
        )
    }
}

export default connect(
 state=>({
   activeCount:state.todos.filter(item=>!item.completed).length,
   completedCount:state.todos.filter(item=>item.completed).length
 })
)(TodoFooter);