import React,{Component} from 'react';
export default class TodoFooter extends Component{
    render(){
        return (
            <div className="row">
              <div className="col-sm-4">
                <span style={{lineHeight:'34px'}}>你还有件待办事项</span>
              </div>
              <div className="col-sm-5">
                 <button className="btn btn-default">全部</button>
                  <button style={{marginLeft:5}} className="btn btn-default">未完成</button>
                  <button style={{marginLeft:5}} className="btn btn-default">已完成</button>
              </div>
              <div className="col-sm-3">
                 <button className="btn btn-danger">清除已完成</button>
              </div>
            </div>
        )
    }
}