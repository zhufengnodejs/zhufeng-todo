//todo的reducer
import * as types from '../action-types';
// 增加 删除 切换完成状态
export default function (state = {editing:'',list:[]}, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        list:[...state.list, {id: Date.now(), title: action.title, completed: false}]
      };
    case types.DEL_TODO:
      return {
        ...state,
        list:state.list.filter(item => item.id != action.id)
      };
    case types.TOGGLE_TODO:
      return {
        ...state,
        list:state.list.map(item => {
          if(item.id == action.id)
            item.completed = !item.completed;
          return item;
        })
      };
    case types.DELETE_ALL_COMPLETED:
      return {
        ...state,
        list:state.list.filter(item=>!item.completed)
      };
    case types.TOGGLE_ALL:
      return {
        ...state,
        list:state.list.map(item=>{
          item.completed = action.checked;
          return item;
        })
      };
    case types.CHANGE_EDITING:
      return {
        ...state,
        editing:action.id
      };
    default:
      return state;
  }
}