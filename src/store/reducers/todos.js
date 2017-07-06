//todo的reducer
import * as types from '../action-types';
// 增加 删除 切换完成状态
export default function (state = [], action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, {id: Date.now(), title: action.title, completed: false}];
    case types.DEL_TODO:
      return state.filter(item => item.id != action.id);
    case types.TOGGLE_TODO:
      return state.map(item => {
        if(item.id == action.id)
          item.completed = !item.completed;
        return item;
      })
    case types.DELETE_ALL_COMPLETED:
      return state.filter(item=>!item.completed);
    case types.TOGGLE_ALL:
      return state.map(item=>{
        item.completed = action.checked;
        return item;
      });
    default:
      return state;
  }
}